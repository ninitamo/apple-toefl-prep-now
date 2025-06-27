import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Volume2, Play, Pause } from 'lucide-react';

interface ListeningSectionProps {
  onNext: () => void;
  testData?: any;
}

interface ListeningPassage {
  id: string;
  title: string;
  content: string;
  audio_duration?: number;
  audio_type?: string;
  audio_url?: string;
  order_number: number;
}

interface ListeningQuestion {
  id: string;
  question_number: number;
  question_type: string;
  question_text: string;
  options: string[];
  correct_answer: string;
  passage_id: string;
}

const ListeningSection = ({ onNext }: ListeningSectionProps) => {
  const { testId } = useParams<{ testId: string }>();
  const [passages, setPassages] = useState<ListeningPassage[]>([]);
  const [questions, setQuestions] = useState<ListeningQuestion[]>([]);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const fetchListeningData = async () => {
      if (!testId) return;

      try {
        setLoading(true);

        // Fetch listening passages
        const { data: passagesData, error: passagesError } = await supabase
          .from('test_passages')
          .select('*')
          .eq('test_id', parseInt(testId))
          .eq('section_type', 'listening')
          .order('order_number');

        if (passagesError) throw passagesError;

        // Fetch listening questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('test_questions')
          .select('*')
          .eq('test_id', parseInt(testId))
          .eq('section_type', 'listening')
          .order('question_number');

        if (questionsError) throw questionsError;

        setPassages(passagesData || []);
        
        // Transform the questions data to match our interface
        const transformedQuestions = (questionsData || []).map(q => ({
          ...q,
          options: Array.isArray(q.options) ? q.options : JSON.parse(q.options as string),
          correct_answer: typeof q.correct_answer === 'string' ? q.correct_answer : JSON.parse(q.correct_answer as string)
        }));
        
        setQuestions(transformedQuestions);

      } catch (error) {
        console.error('Error fetching listening data:', error);
        toast.error('Failed to load listening data');
      } finally {
        setLoading(false);
      }
    };

    fetchListeningData();
  }, [testId]);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const getCurrentPassageQuestions = () => {
    if (!passages[currentPassageIndex]) return [];
    return questions.filter(q => q.passage_id === passages[currentPassageIndex].id);
  };

  const handleNextQuestion = () => {
    const currentPassageQuestions = getCurrentPassageQuestions();
    if (currentQuestionIndex < currentPassageQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Move to next passage or finish section
      if (currentPassageIndex < passages.length - 1) {
        setCurrentPassageIndex(currentPassageIndex + 1);
        setCurrentQuestionIndex(0);
        setShowQuestions(false);
      } else {
        // All passages completed
        onNext();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentPassageIndex > 0) {
      setCurrentPassageIndex(currentPassageIndex - 1);
      const prevPassageQuestions = questions.filter(q => q.passage_id === passages[currentPassageIndex - 1].id);
      setCurrentQuestionIndex(prevPassageQuestions.length - 1);
    }
  };

  const simulateAudioPlay = () => {
    setAudioPlaying(true);
    // Simulate audio duration
    const duration = passages[currentPassageIndex].audio_duration || 180;
    setTimeout(() => {
      setAudioPlaying(false);
      setShowQuestions(true);
    }, 3000); // Show for 3 seconds in demo, would be actual audio duration
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-6 flex items-center justify-center">
        <div className="text-center">Loading listening section...</div>
      </div>
    );
  }

  if (passages.length === 0) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Listening Section</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">No listening passages available for this test.</p>
              <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                Continue to Speaking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentPassage = passages[currentPassageIndex];
  const currentPassageQuestions = getCurrentPassageQuestions();
  const currentQuestion = currentPassageQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Listening Section</h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline">
              {currentPassage.audio_type === 'lecture' ? 'Lecture' : 'Conversation'} {currentPassageIndex + 1} of {passages.length}
            </Badge>
            {showQuestions && (
              <Badge variant="outline">
                Question {currentQuestionIndex + 1} of {currentPassageQuestions.length}
              </Badge>
            )}
          </div>
        </div>

        {!showQuestions ? (
          // Audio Content Display
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                {currentPassage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                {currentPassage.audio_type === 'conversation' ? (
                  <div className="mb-6">
                    <p className="text-lg mb-4">You will hear a conversation.</p>
                    <p className="text-sm text-gray-600 mb-6">
                      Take notes while you listen. You will not hear the conversation again.
                    </p>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-lg mb-4">You will hear part of a lecture.</p>
                    <p className="text-sm text-gray-600 mb-6">
                      Take notes while you listen. You will not hear the lecture again.
                    </p>
                  </div>
                )}

                {!audioPlaying ? (
                  <Button 
                    onClick={simulateAudioPlay}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Play Audio
                  </Button>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Pause className="w-5 h-5" />
                      <span>Playing audio...</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Duration: {Math.floor((currentPassage.audio_duration || 180) / 60)} minutes
                    </div>
                  </div>
                )}

                {/* Show lecture content for demo purposes */}
                {audioPlaying && currentPassage.audio_type === 'lecture' && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left text-sm">
                    <p className="font-semibold mb-2">Lecture Content (for demo):</p>
                    <div className="text-gray-700 whitespace-pre-line">
                      {currentPassage.content.substring(0, 300)}...
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          // Questions Display
          currentQuestion && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Question {currentQuestion.question_number}</CardTitle>
                <Badge variant="secondary">{currentQuestion.question_type}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">{currentQuestion.question_text}</p>
                
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={index.toString()}
                        checked={answers[currentQuestion.id] === index.toString()}
                        onChange={(e) => handleAnswerSelect(currentQuestion.id, e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{String.fromCharCode(65 + index)}) {option}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentPassageIndex === 0 && currentQuestionIndex === 0}
            variant="outline"
          >
            Previous
          </Button>
          
          {showQuestions ? (
            <Button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!answers[currentQuestion?.id]}
            >
              {currentPassageIndex === passages.length - 1 && 
               currentQuestionIndex === currentPassageQuestions.length - 1 
                ? 'Continue to Speaking' 
                : 'Next'}
            </Button>
          ) : (
            <div className="text-sm text-gray-500">
              {audioPlaying ? 'Listen to the audio...' : 'Click Play Audio to begin'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListeningSection;
