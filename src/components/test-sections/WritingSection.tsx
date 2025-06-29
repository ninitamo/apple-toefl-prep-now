
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WritingDisplay from '@/components/WritingDisplay';
import { toast } from 'sonner';
import { SkipForward } from 'lucide-react';

interface WritingSectionProps {
  onNext: () => void;
}

interface WritingPassage {
  id: string;
  title: string;
  content: string;
  audio_duration?: number;
  audio_type?: string;
}

interface WritingQuestion {
  id: string;
  question_number: number;
  question_type: string;
  question_text: string;
}

const WritingSection = ({ onNext }: WritingSectionProps) => {
  const { testId } = useParams<{ testId: string }>();
  const [passages, setPassages] = useState<WritingPassage[]>([]);
  const [questions, setQuestions] = useState<WritingQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSkipSection = () => {
    onNext();
  };

  useEffect(() => {
    const fetchWritingData = async () => {
      if (!testId) return;

      try {
        setLoading(true);

        // Fetch writing passages
        const { data: passagesData, error: passagesError } = await supabase
          .from('test_passages')
          .select('*')
          .eq('test_id', parseInt(testId))
          .eq('section_type', 'writing')
          .order('order_number');

        if (passagesError) throw passagesError;

        // Fetch writing questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('test_questions')
          .select('*')
          .eq('test_id', parseInt(testId))
          .eq('section_type', 'writing')
          .order('question_number');

        if (questionsError) throw questionsError;

        setPassages(passagesData || []);
        setQuestions(questionsData || []);

      } catch (error) {
        console.error('Error fetching writing data:', error);
        toast.error('Failed to load writing data');
      } finally {
        setLoading(false);
      }
    };

    fetchWritingData();
  }, [testId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-6 flex items-center justify-center">
        <div className="text-center">Loading writing section...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-2">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex justify-end">
          <Button
            onClick={handleSkipSection}
            variant="outline"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <SkipForward className="h-4 w-4" />
            Skip Writing Section
          </Button>
        </div>

        {passages.length > 0 ? (
          <>
            <WritingDisplay passages={passages} questions={questions} />
            <div className="mt-8 text-center">
              <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                Complete Test
              </Button>
            </div>
          </>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Writing Section</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">No writing questions available for this test.</p>
              <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                Complete Test
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WritingSection;
