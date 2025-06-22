
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Volume } from 'lucide-react';

interface Question {
  id: string;
  question_number: number;
  question_type: string;
  question_text: string;
  options: string[];
  correct_answer: any;
}

interface ListeningQuestionsProps {
  questions: Question[];
  passageTitle: string;
  onComplete: () => void;
  volume: number[];
  onVolumeChange: (volume: number[]) => void;
}

const ListeningQuestions = ({ questions, passageTitle, onComplete, volume, onVolumeChange }: ListeningQuestionsProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.question_number]: answer
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Log answers for scoring (you can implement scoring logic here)
      console.log('Listening answers:', selectedAnswers);
      onComplete();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleVolumeIconClick = () => {
    setShowVolumeControl(!showVolumeControl);
  };

  const selectedAnswer = selectedAnswers[currentQuestion?.question_number];
  const canProceed = selectedAnswer !== undefined;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Listening | {passageTitle} | Question {currentQuestion.question_number}
          </span>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">00:15:30 ⏰ Hide Time</span>
            <div className="relative">
              <button
                onClick={handleVolumeIconClick}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <Volume className="h-6 w-6 text-gray-600" />
              </button>
              {showVolumeControl && (
                <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10 w-48">
                  <p className="text-sm text-gray-600 mb-2">Volume Control</p>
                  <Slider
                    value={volume}
                    onValueChange={onVolumeChange}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">{volume[0]}%</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Question {currentQuestion.question_number} of {questions[questions.length - 1]?.question_number}
            </CardTitle>
            <div className="text-sm text-gray-500 bg-gray-100 p-2 rounded">
              {currentQuestion.question_type}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-lg font-medium mb-4">{currentQuestion.question_text}</p>
              
              <RadioGroup 
                value={selectedAnswer} 
                onValueChange={handleAnswerSelect}
                className="space-y-3"
              >
                {currentQuestion.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer p-3 rounded border hover:bg-gray-50"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between pt-6">
              <div className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              <Button 
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                {isLastQuestion ? 'Continue to Speaking' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListeningQuestions;
