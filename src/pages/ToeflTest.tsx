
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ReadingSectionNew from '@/components/test-sections/ReadingSectionNew';
import ListeningSection from '@/components/test-sections/ListeningSection';
import SpeakingSection from '@/components/test-sections/SpeakingSection';
import WritingSection from '@/components/test-sections/WritingSection';
import PracticeModeSelector from '@/components/PracticeModeSelector';
import TestReviewSection from '@/components/TestReviewSection';
import { useTestData } from '@/hooks/useTestData';
import { BookOpen } from 'lucide-react';

const ToeflTest = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<'reading' | 'listening' | 'speaking' | 'writing' | 'review' | 'overview'>('overview');
  const [testStarted, setTestStarted] = useState(false);
  const [practiceMode, setPracticeMode] = useState<'skip' | 'no-skip' | null>(null);
  const [testScores, setTestScores] = useState({
    reading: 0,
    listening: 0,
    totalReadingQuestions: 20,
    totalListeningQuestions: 17
  });

  const { data: testData, isLoading, error } = useTestData(testId || '1');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      case 'Master':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleModeSelect = (mode: 'skip' | 'no-skip') => {
    setPracticeMode(mode);
  };

  const startTest = () => {
    setTestStarted(true);
    setCurrentSection('reading');
  };

  const nextSection = () => {
    switch (currentSection) {
      case 'reading':
        setCurrentSection('listening');
        break;
      case 'listening':
        setCurrentSection('speaking');
        break;
      case 'speaking':
        setCurrentSection('writing');
        break;
      case 'writing':
        setCurrentSection('review');
        break;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading test data...</p>
        </div>
      </div>
    );
  }

  if (error || !testData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load test data</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  // Show practice mode selector first
  if (!practiceMode) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PracticeModeSelector onModeSelect={handleModeSelect} />
      </div>
    );
  }

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  {testData.test.title}
                </CardTitle>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A complete 2-hour practice test.
                </p>
              </CardHeader>

              <CardContent className="text-center">
                {/* <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>≈ 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{testData.test.students_taken} taken</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>Official Format</span>
                  </div>
                </div> */}

                <div className="mb-8">
                  <Button
                    onClick={startTest}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full px-12 py-6 text-xl font-bold"
                  >
                    START TEST
                  </Button>
                </div>

                <div className="flex items-center justify-center pb-2 gap-2 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4" />
                  <span>Reading • Listening • Speaking • Writing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {currentSection === 'reading' && <ReadingSectionNew onNext={nextSection} testData={testData} />}
      {currentSection === 'listening' && <ListeningSection onNext={nextSection} testData={testData} practiceMode={practiceMode} />}
      {currentSection === 'speaking' && <SpeakingSection testId={testId || '1'} onNext={nextSection} />}
      {currentSection === 'writing' && <WritingSection onNext={nextSection} />}
      {currentSection === 'review' && (
        <TestReviewSection 
          readingScore={testScores.reading}
          listeningScore={testScores.listening}
          totalReadingQuestions={testScores.totalReadingQuestions}
          totalListeningQuestions={testScores.totalListeningQuestions}
        />
      )}
    </div>
  );
};

export default ToeflTest;
