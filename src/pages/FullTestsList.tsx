
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ToeflTestsList from '@/components/ToeflTestsList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FullTestsList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mr-4 flex items-center gap-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Free Practice Options
            </Button>
          </div>
          <ToeflTestsList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullTestsList;
