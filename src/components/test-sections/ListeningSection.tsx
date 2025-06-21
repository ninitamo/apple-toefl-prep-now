
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ListeningSectionProps {
  onNext: () => void;
}

const ListeningSection = ({ onNext }: ListeningSectionProps) => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Listening Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">Listening section content will be implemented here.</p>
            <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white">
              Continue to Speaking
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListeningSection;
