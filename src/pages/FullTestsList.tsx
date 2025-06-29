
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ToeflTestsList from '@/components/ToeflTestsList';

const FullTestsList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mr-4 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Practice Options
          </Button>
        </div>
        <ToeflTestsList />
      </div>
    </div>
  );
};

export default FullTestsList;
