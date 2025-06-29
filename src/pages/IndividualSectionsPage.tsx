
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import IndividualSections from '@/components/IndividualSections';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const IndividualSectionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mr-4 group text-slate-600 hover:text-slate-900 font-light"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </div>
          
          <IndividualSections />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualSectionsPage;
