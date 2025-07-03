
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Clock, CheckCircle, SkipForward } from 'lucide-react';
import { useIndividualPracticeTest, useIndividualPracticeQuestions } from '@/hooks/useIndividualPractice';

const IndividualPracticeTest = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(17 * 60);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const [testStarted, setTestStarted] = useState(false);

  const { data: test, isLoading: testLoading } = useIndividualPracticeTest(id!);
  const { data: questions, isLoading: questionsLoading } = useIndividualPracticeQuestions(id!);

  // Countdown effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !showConfirmation && !testStarted) {
      setTestStarted(true);
    }
  }, [countdown, showConfirmation, testStarted]);

  // Timer effect
  useEffect(() => {
    if (testStarted && !showResults && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !showResults && testStarted) {
      handleSubmit();
    }
  }, [timeRemaining, showResults, testStarted]);

  const handleStartTest = () => {
    setShowConfirmation(false);
    setCountdown(3);
  };

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (questions && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    if (!questions) return 0;
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (testLoading || questionsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">Loading practice test...</div>
      </div>
    );
  }

  if (!test || !questions) {
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
  }

  // Confirmation dialog
  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Start?</CardTitle>
            <CardDescription>
              You are about to begin the {test.title} practice test.
              <br />
              Time limit: 17 minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Make sure you're in a quiet environment and ready to focus.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => navigate('/individual-practice')}>
                Cancel
              </Button>
              <Button onClick={handleStartTest} className="bg-green-600 hover:bg-green-700">
                I'm Ready
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Countdown screen
  if (countdown > 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl font-bold text-blue-600 mb-4">
            {countdown}
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Test starting in...
          </p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl">Practice Complete!</CardTitle>
              <CardDescription>Here are your results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-600 mb-2">{score}%</div>
                <p className="text-gray-600 dark:text-gray-400">
                  You answered {questions.filter((_, index) => answers[index] === questions[index].correct_answer).length} out of {questions.length} questions correctly
                </p>
              </div>

              <div className="space-y-4">
                {questions.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correct_answer;
                  const options = Array.isArray(question.options) ? question.options : [];
                  
                  return (
                    <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">Question {question.question_number}</h3>
                        <Badge variant={isCorrect ? "default" : "destructive"}>
                          {isCorrect ? 'Correct' : userAnswer ? 'Incorrect' : 'Skipped'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{question.question_text}</p>
                      
                      {options.length > 0 && (
                        <div className="space-y-1 text-sm">
                          <p><strong>Your answer:</strong> {userAnswer ? options[parseInt(userAnswer)] : 'Skipped'}</p>
                          <p><strong>Correct answer:</strong> {options[parseInt(question.correct_answer)]}</p>
                        </div>
                      )}
                      
                      {question.explanation && (
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <p className="text-sm"><strong>Explanation:</strong> {question.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8">
                <Button onClick={() => navigate('/individual-practice')} variant="outline">
                  Back to Practice Tests
                </Button>
                <Button onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                  setTimeRemaining(17 * 60);
                  setShowConfirmation(true);
                  setCountdown(0);
                  setTestStarted(false);
                }}>
                  Retake Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Main test interface
  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">Preparing test...</div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const options = Array.isArray(currentQ.options) ? currentQ.options : [];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate('/individual-practice')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center text-lg font-semibold">
            <Clock className="w-5 h-5 mr-2" />
            {formatTime(timeRemaining)}
          </div>
        </div>

        {/* Test Info */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{test.title}</CardTitle>
                <CardDescription>{test.description}</CardDescription>
              </div>
              <Badge>{test.section_type.charAt(0).toUpperCase() + test.section_type.slice(1)}</Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Main Content - Two Column Layout for Reading */}
        {test.section_type === 'reading' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Reading Passage - Left Side */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-lg">Reading Passage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-sm leading-relaxed max-h-96 overflow-y-auto">
                  {test.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Question - Right Side */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Question {currentQ.question_number}
                  <Badge variant="outline" className="ml-2 text-xs">
                    {currentQ.question_type.replace('_', ' ')}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">{currentQ.question_text}</p>
                
                {options.length > 0 && (
                  <RadioGroup 
                    value={answers[currentQuestion] || ''} 
                    onValueChange={handleAnswerChange}
                  >
                    {options.map((option: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <Label 
                          htmlFor={`option-${index}`} 
                          className="text-sm leading-relaxed cursor-pointer flex-1"
                        >
                          <strong>{String.fromCharCode(65 + index)}.</strong> {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Single Column Layout for Non-Reading Sections */
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">
                Question {currentQ.question_number}
                <Badge variant="outline" className="ml-2 text-xs">
                  {currentQ.question_type.replace('_', ' ')}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{currentQ.question_text}</p>
              
              {options.length > 0 && (
                <RadioGroup 
                  value={answers[currentQuestion] || ''} 
                  onValueChange={handleAnswerChange}
                >
                  {options.map((option: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="text-sm leading-relaxed cursor-pointer flex-1"
                      >
                        <strong>{String.fromCharCode(65 + index)}.</strong> {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSkip}>
              <SkipForward className="w-4 h-4 mr-2" />
              Skip
            </Button>
            {currentQuestion === questions.length - 1 ? (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                Submit Test
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPracticeTest;
