
import { MapPin, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const WorldMapSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/institution-search', { state: { query: searchQuery } });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            🌍 A Whole World of Opportunity
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            See where TOEFL iBT is accepted!
          </p>
        </div>

        {/* Regional Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* North America */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">North America</h3>
              <div className="w-full max-w-20 h-2 bg-orange-500 rounded"></div>
            </div>
            <div className="text-3xl font-bold text-orange-400 mb-1">7400+</div>
            <div className="text-sm text-slate-300">institutions</div>
          </div>

          {/* Europe */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Europe</h3>
              <div className="w-full max-w-20 h-2 bg-orange-500 rounded"></div>
            </div>
            <div className="text-3xl font-bold text-orange-400 mb-1">2100+</div>
            <div className="text-sm text-slate-300">institutions</div>
          </div>

          {/* Asia */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Asia</h3>
              <div className="w-full max-w-20 h-2 bg-orange-500 rounded"></div>
            </div>
            <div className="text-3xl font-bold text-orange-400 mb-1">2250+</div>
            <div className="text-sm text-slate-300">institutions</div>
          </div>

          {/* Oceania */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Oceania</h3>
              <div className="w-full max-w-20 h-2 bg-orange-500 rounded"></div>
            </div>
            <div className="text-3xl font-bold text-orange-400 mb-1">350+</div>
            <div className="text-sm text-slate-300">institutions</div>
          </div>

          {/* South America */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">South America</h3>
              <div className="w-full max-w-20 h-2 bg-orange-500 rounded"></div>
            </div>
            <div className="text-3xl font-bold text-orange-400 mb-1">450+</div>
            <div className="text-sm text-slate-300">institutions</div>
          </div>

          {/* Africa */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Africa</h3>
              <div className="w-full max-w-20 h-2 bg-orange-500 rounded"></div>
            </div>
            <div className="text-3xl font-bold text-orange-400 mb-1">125+</div>
            <div className="text-sm text-slate-300">institutions</div>
          </div>
        </div>

        {/* Total Global Acceptance */}
        <div className="bg-slate-800/30 rounded-lg p-8 mb-12 text-center border border-slate-700">
          <h3 className="text-2xl font-bold mb-6 text-white">Total Global Acceptance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">12,000+</div>
              <div className="text-slate-300">Institutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">160+</div>
              <div className="text-slate-300">Countries</div>
            </div>
          </div>
        </div>

        {/* Find Your Institution */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Find Your Institution</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Search to check if your university accepts TOEFL iBT. This answer is generated by an AI model (OpenAI GPT) based on publicly available information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
