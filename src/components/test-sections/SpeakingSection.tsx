
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SpeakingSectionProps {
  onNext: () => void;
}

const SpeakingSection = ({ onNext }: SpeakingSectionProps) => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Speaking Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">Speaking section content will be implemented here.</p>
            <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white">
              Continue to Writing
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpeakingSection;
