
import { useParams, useNavigate } from 'react-router-dom';
import { useIndividualPracticeTest, useIndividualPracticeQuestions } from '@/hooks/useIndividualPractice';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingPractice from '@/components/ReadingPractice';
import SpeakingPractice from '@/components/SpeakingPractice';

const IndividualPracticeTestPage = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  
  const { data: test, isLoading: testLoading } = useIndividualPracticeTest(testId!);
  const { data: questions, isLoading: questionsLoading } = useIndividualPracticeQuestions(testId!);

  const handleComplete = () => {
    navigate('/individual-practice');
  };

  if (testLoading || questionsLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">Loading practice test...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!test || !questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Practice test not found.</p>
              <Button onClick={() => navigate('/individual-practice')}>
                Back to Practice Tests
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <Button
              onClick={() => navigate('/individual-practice')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Practice Tests
            </Button>
          </div>

          {test.section_type === 'reading' && (
            <ReadingPractice 
              test={test}
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {test.section_type === 'speaking' && questions[0] && (
            <SpeakingPractice 
              test={test}
              question={questions[0]}
              onComplete={handleComplete}
            />
          )}

          {!['reading', 'speaking'].includes(test.section_type) && (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                This practice test type is not yet supported.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualPracticeTestPage;
