
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Volume2, CheckCircle } from 'lucide-react';

interface Question {
  id: string;
  question_number: number;
  question_type: string;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation?: string;
}

interface ListeningPracticeTestProps {
  title: string;
  description: string;
  content: string;
  audioUrl: string;
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
}

const ListeningPracticeTest = ({ 
  title, 
  description, 
  content, 
  audioUrl, 
  questions, 
  onComplete 
}: ListeningPracticeTestProps) => {
  const [audioEnded, setAudioEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnded = () => {
        setAudioEnded(true);
        setIsPlaying(false);
      };

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      onComplete(answers);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correct_answer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Listening Practice Complete!</CardTitle>
            <p className="text-gray-600 dark:text-gray-400">Here are your results</p>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-green-600 mb-2">{score}%</div>
              <p className="text-gray-600 dark:text-gray-400">
                You answered {questions.filter(q => answers[q.id] === q.correct_answer).length} out of {questions.length} questions correctly
              </p>
            </div>

            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correct_answer;
                
                return (
                  <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">Question {question.question_number}</h3>
                      <Badge variant={isCorrect ? "default" : "destructive"}>
                        {isCorrect ? 'Correct' : userAnswer ? 'Incorrect' : 'Skipped'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{question.question_text}</p>
                    
                    <div className="space-y-1 text-sm">
                      <p><strong>Your answer:</strong> {userAnswer ? question.options[parseInt(userAnswer)] : 'Skipped'}</p>
                      <p><strong>Correct answer:</strong> {question.options[parseInt(question.correct_answer)]}</p>
                    </div>
                    
                    {question.explanation && (
                      <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <p className="text-sm"><strong>Explanation:</strong> {question.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!audioEnded) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="h-5 w-5" />
              <CardTitle>{title}</CardTitle>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-medium mb-2">Instructions:</p>
              <p>Listen to the lecture carefully. Questions will appear after the audio finishes. You cannot go back to previous questions once answered.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  onClick={togglePlayPause}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!audioRef.current}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <Progress value={(currentTime / duration) * 100} className="w-full" />
                </div>
              </div>

              <audio
                ref={audioRef}
                src={audioUrl}
                preload="metadata"
                className="hidden"
              />
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Lecture Notes:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {content.substring(0, 200)}...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{title} - Questions</h2>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              Question {currentQuestion.question_number}
            </CardTitle>
            <Badge variant="outline" className="capitalize">
              {currentQuestion.question_type.replace('-', ' ')}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{currentQuestion.question_text}</p>
          
          <RadioGroup 
            value={answers[currentQuestion.id] || ''} 
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label 
                  htmlFor={`option-${index}`} 
                  className="flex-1 cursor-pointer p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-end pt-4">
            <Button 
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningPracticeTest;
