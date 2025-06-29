
import { useState, useEffect } from 'react';
import { ArrowLeft, Search, ExternalLink, Globe, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Institution {
  id: number;
  name: string;
  country: string;
  min_score: number | null;
  website: string | null;
}

const InstitutionSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    fetchInstitutions();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredInstitutions([]);
    } else {
      setSearching(true);
      const filtered = institutions.filter(
        (institution) =>
          institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          institution.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredInstitutions(filtered);
      setSearching(false);
    }
  }, [searchTerm, institutions]);

  const fetchInstitutions = async () => {
    try {
      const { data, error } = await supabase
        .from('institutions')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching institutions:', error);
      } else {
        setInstitutions(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number | null) => {
    if (!score) return 'text-gray-500';
    if (score >= 90) return 'text-red-600';
    if (score >= 80) return 'text-orange-600';
    return 'text-green-600';
  };

  const getScoreLabel = (score: number | null) => {
    if (!score) return 'Not specified';
    if (score >= 90) return 'High requirement';
    if (score >= 80) return 'Medium requirement';
    return 'Lower requirement';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-6 group text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Check if Your University Accepts TOEFL iBT
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Search our database of universities to find TOEFL iBT acceptance information and minimum score requirements.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by university name or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading institutions...</p>
            </div>
          ) : (
            <>
              {searchTerm.trim() === '' ? (
                <div className="text-center py-12">
                  <GraduationCap className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Start Your Search</h3>
                  <p className="text-gray-600">Enter a university name or country to begin searching.</p>
                </div>
              ) : searching ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 mt-4">Searching...</p>
                </div>
              ) : filteredInstitutions.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h3>
                  <p className="text-gray-600">
                    No institutions found matching "{searchTerm}". Try a different search term.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mb-6">
                    <p className="text-gray-600">
                      Found {filteredInstitutions.length} result{filteredInstitutions.length !== 1 ? 's' : ''} for "{searchTerm}"
                    </p>
                  </div>
                  
                  {filteredInstitutions.map((institution) => (
                    <div
                      key={institution.id}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {institution.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-3">
                            <Globe className="h-4 w-4 mr-2" />
                            {institution.country}
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">Minimum TOEFL iBT Score:</span>
                            <span className={`font-semibold ${getScoreColor(institution.min_score)}`}>
                              {institution.min_score || 'Not specified'}
                            </span>
                            {institution.min_score && (
                              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                                institution.min_score >= 90 
                                  ? 'bg-red-100 text-red-800' 
                                  : institution.min_score >= 80 
                                  ? 'bg-orange-100 text-orange-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {getScoreLabel(institution.min_score)}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {institution.website && (
                          <div className="mt-4 sm:mt-0 sm:ml-6">
                            <Button
                              onClick={() => window.open(institution.website!, '_blank')}
                              variant="outline"
                              className="group"
                            >
                              Visit Website
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          <div className="mt-16 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Don't See Your Institution?</h3>
            <p className="text-slate-600 mb-6">
              Our database is constantly growing. If you don't find your institution, it doesn't mean they don't accept TOEFL iBT. 
              Contact the institution directly for the most up-to-date information.
            </p>
            <Button
              onClick={() => navigate('/practice/full-tests')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3"
            >
              Start Preparing with Practice Tests
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InstitutionSearch;
