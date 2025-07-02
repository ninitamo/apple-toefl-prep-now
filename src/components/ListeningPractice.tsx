
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';
import { useTestData } from '@/hooks/useTestData';

interface ListeningPracticeProps {
  testId: string;
}

const ListeningPractice = ({ testId }: ListeningPracticeProps) => {
  const { data: testData, isLoading, error } = useTestData(testId);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  if (isLoading) return <div className="text-center p-8">Loading test data...</div>;
  if (error) return <div className="text-center p-8 text-red-600">Error loading test: {error.message}</div>;
  if (!testData) return <div className="text-center p-8">No test data found.</div>;

  // Filter listening passages and questions
  const listeningPassages = testData.passages.filter(p => p.section_type === 'listening').sort((a, b) => a.order_number - b.order_number);
  const listeningQuestions = testData.questions.filter(q => q.section_type === 'listening').sort((a, b) => a.question_number - b.question_number);

  if (listeningPassages.length === 0) {
    return <div className="text-center p-8">No listening passages found for this test.</div>;
  }

  const currentPassage = listeningPassages[currentPassageIndex];
  const passageQuestions = listeningQuestions.filter(q => q.passage_id === currentPassage.id);
  const currentQuestion = passageQuestions[currentQuestionIndex];

  const handleAudioPlay = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleAnswerChange = (value: string) => {
    if (currentQuestion) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < passageQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentPassageIndex < listeningPassages.length - 1) {
      setCurrentPassageIndex(currentPassageIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentPassageIndex > 0) {
      setCurrentPassageIndex(currentPassageIndex - 1);
      const prevPassage = listeningPassages[currentPassageIndex - 1];
      const prevPassageQuestions = listeningQuestions.filter(q => q.passage_id === prevPassage.id);
      setCurrentQuestionIndex(prevPassageQuestions.length - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    listeningQuestions.forEach(question => {
      const userAnswer = answers[question.id];
      if (userAnswer && parseInt(userAnswer) === question.correct_answer) {
        correct++;
      }
    });
    return Math.round((correct / listeningQuestions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold dark:text-white">
              Listening Practice Results
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
              {score}%
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              You got {listeningQuestions.filter(q => answers[q.id] && parseInt(answers[q.id]) === q.correct_answer).length} out of {listeningQuestions.length} questions correct
            </p>
            <Button
              onClick={() => {
                setShowResults(false);
                setCurrentPassageIndex(0);
                setCurrentQuestionIndex(0);
                setAnswers({});
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div className="text-center p-8">No questions found for this passage.</div>;
  }

  const questionOptions = Array.isArray(currentQuestion.options) ? currentQuestion.options : [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold dark:text-white">
            {testData.test.title} - Listening Section
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Passage {currentPassageIndex + 1} of {listeningPassages.length} | 
            Question {currentQuestionIndex + 1} of {passageQuestions.length}
          </div>
        </div>
      </div>

      {/* Audio Player */}
      <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <Volume2 className="h-5 w-5" />
            {currentPassage.title}
            <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
              ({currentPassage.audio_type || 'Audio'})
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Button
              onClick={handleAudioPlay}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <div className="flex-1">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Duration: {Math.floor((currentPassage.audio_duration || 0) / 60)}:{String((currentPassage.audio_duration || 0) % 60).padStart(2, '0')}
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / (currentPassage.audio_duration || 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {currentPassage.content}
          </p>
          {currentPassage.audio_url && (
            <audio
              ref={setAudioRef}
              src={currentPassage.audio_url}
              onEnded={handleAudioEnded}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              className="hidden"
            />
          )}
        </CardContent>
      </Card>

      {/* Question */}
      <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">
            Question {currentQuestion.question_number}: {currentQuestion.question_type}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 dark:text-gray-200">
            {currentQuestion.question_text}
          </p>
          
          <RadioGroup
            value={answers[currentQuestion.id] || ''}
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {questionOptions.map((option: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={index.toString()} 
                  id={`option-${index}`}
                  className="dark:border-gray-400 dark:text-white" 
                />
                <Label 
                  htmlFor={`option-${index}`} 
                  className="flex-1 cursor-pointer dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
                >
                  {String.fromCharCode(65 + index)}. {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={handlePreviousQuestion}
          disabled={currentPassageIndex === 0 && currentQuestionIndex === 0}
          variant="outline"
          className="dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Previous
        </Button>
        
        <Button
          onClick={handleNextQuestion}
          disabled={!answers[currentQuestion.id]}
          className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {currentQuestionIndex === passageQuestions.length - 1 && currentPassageIndex === listeningPassages.length - 1
            ? 'Finish'
            : 'Next'
          }
        </Button>
      </div>
    </div>
  );
};

export default ListeningPractice;
