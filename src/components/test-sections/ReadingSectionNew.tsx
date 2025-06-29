
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { TestData } from '@/hooks/useTestData';
import { SkipForward } from 'lucide-react';

interface ReadingSectionProps {
  onNext: () => void;
  testData: TestData;
}

const ReadingSectionNew = ({ onNext, testData }: ReadingSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showInstructions, setShowInstructions] = useState(true);

  // Filter reading questions and passages
  const readingPassages = testData.passages.filter(p => p.section_type === 'reading');
  const readingQuestions = testData.questions.filter(q => q.section_type === 'reading');

  console.log('Reading passages:', readingPassages.length);
  console.log('Reading questions:', readingQuestions.length);
  console.log('Current question index:', currentQuestion - 1);
  console.log('All questions:', readingQuestions);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < readingQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkipSection = () => {
    onNext();
  };

  // Get current passage based on question
  const getCurrentPassage = () => {
    const currentQ = readingQuestions[currentQuestion - 1];
    if (!currentQ) {
      console.log('No current question found');
      return null;
    }
    return readingPassages.find(p => p.id === currentQ.passage_id);
  };

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Reading Section Instructions</h1>
            <Button
              onClick={handleSkipSection}
              variant="outline"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <SkipForward className="h-4 w-4" />
              Skip Reading Section
            </Button>
          </div>

          <div className="border border-gray-300 p-8 rounded">
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p>Read the passage and answer the questions.</p>
              <p>It includes two reading passages, each approximately 700 words long, with 10 questions per passage. It should take about 35 minutes to complete the Reading section.
              </p>
              <p>Please note that some questions are worth more than one point. You will see specific directions before each set of questions.</p>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={() => setShowInstructions(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add safety checks for when questions aren't loaded yet
  if (readingQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  const currentQuestionData = readingQuestions[currentQuestion - 1];
  const currentPassage = getCurrentPassage();

  if (!currentQuestionData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Question not found</p>
          <Button onClick={onNext}>Continue to next section</Button>
        </div>
      </div>
    );
  }

  if (!currentPassage) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Passage not found for this question</p>
          <Button onClick={onNext}>Continue to next section</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left side - Passage */}
        <div className="w-1/2 p-6 border-r border-gray-300">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="font-bold text-gray-800">{currentPassage.title}</h2>
            <Button
              onClick={handleSkipSection}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <SkipForward className="h-3 w-3" />
              Skip Section
            </Button>
          </div>

          <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed">
            {currentPassage.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right side - Questions */}
        <div className="w-1/2 p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Reading | Question {currentQuestion} of {readingQuestions.length}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>

              <h3 className="font-bold text-gray-800 mb-4">
                ➤ [{currentQuestionData.question_number}] {currentQuestionData.question_text}
              </h3>

              {currentQuestionData.question_type === "Prose Summary" ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm"><strong>Directions:</strong> Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. This question is worth 2 points.</p>
                  </div>
                  <RadioGroup
                    value={answers[currentQuestionData.question_number] || ''}
                    onValueChange={(value) => handleAnswerChange(currentQuestionData.question_number, value)}
                    className="space-y-3"
                  >
                    {currentQuestionData.options?.map((option: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <RadioGroupItem value={index.toString()} id={`q${currentQuestionData.question_number}-${index}`} className="mt-1" />
                        <Label htmlFor={`q${currentQuestionData.question_number}-${index}`} className="text-sm leading-relaxed cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ) : (
                <RadioGroup
                  value={answers[currentQuestionData.question_number] || ''}
                  onValueChange={(value) => handleAnswerChange(currentQuestionData.question_number, value)}
                  className="space-y-3"
                >
                  {currentQuestionData.options?.map((option: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <RadioGroupItem value={index.toString()} id={`q${currentQuestionData.question_number}-${index}`} className="mt-1" />
                      <Label htmlFor={`q${currentQuestionData.question_number}-${index}`} className="text-sm leading-relaxed cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              variant="outline"
              className="px-6 py-2"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              {currentQuestion < readingQuestions.length ? 'Next' : 'Continue to Listening'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingSectionNew;
