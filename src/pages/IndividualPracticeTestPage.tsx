
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useIndividualPracticeTest, useIndividualPracticeQuestions } from '@/hooks/useIndividualPractice';
import { useListeningPracticeTest } from '@/hooks/useListeningPractice';
import ListeningPracticeTest from '@/components/ListeningPracticeTest';
import WritingPracticeIndividual from '@/components/WritingPracticeIndividual';
import IndividualPracticeTest from '@/pages/IndividualPracticeTest';

const IndividualPracticeTestPage = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();

  // Try to fetch as regular individual practice test first
  const { data: regularTest, isLoading: regularLoading } = useIndividualPracticeTest(testId!);
  const { data: regularQuestions, isLoading: questionsLoading } = useIndividualPracticeQuestions(testId!);
  
  // Try to fetch as listening practice test
  const { data: listeningData, isLoading: listeningLoading } = useListeningPracticeTest(testId!);

  const handleListeningComplete = (answers: Record<string, string>) => {
    console.log('Listening practice completed:', answers);
    // Here you could save the results to the database if needed
  };

  if (regularLoading || listeningLoading || questionsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">Loading practice test...</div>
      </div>
    );
  }

  // If it's a listening test, use the listening component
  if (listeningData?.test && listeningData?.questions) {
    const { test, questions } = listeningData;
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={() => navigate('/individual-practice')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Practice Tests
            </Button>
          </div>

          <ListeningPracticeTest
            title={test.title}
            description={test.description || ''}
            content={test.content}
            audioUrl={test.audio_url || ''}
            questions={questions}
            onComplete={handleListeningComplete}
          />
        </div>
      </div>
    );
  }

  // If it's a writing test, use the writing component
  if (regularTest && regularTest.section_type === 'writing' && regularQuestions && regularQuestions.length > 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={() => navigate('/individual-practice')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Practice Tests
            </Button>
          </div>

          <WritingPracticeIndividual
            test={regularTest}
            question={regularQuestions[0]}
            onComplete={() => navigate('/individual-practice')}
          />
        </div>
      </div>
    );
  }

  // If it's a regular test, use the regular component
  if (regularTest) {
    return <IndividualPracticeTest />;
  }

  // If no test found
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">Practice test not found</p>
        <Button onClick={() => navigate('/individual-practice')}>
          Back to Practice Tests
        </Button>
      </div>
    </div>
  );
};

export default IndividualPracticeTestPage;
