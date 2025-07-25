
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Clock } from 'lucide-react';

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

interface IntegratedWritingTaskProps {
  readingPassages: WritingPassage[];
  lecturePassages: WritingPassage[];
  question: WritingQuestion;
  onNext: () => void;
  practiceMode?: 'skip' | 'no-skip';
}

const IntegratedWritingTask: React.FC<IntegratedWritingTaskProps> = ({
  readingPassages,
  lecturePassages,
  question,
  onNext,
  practiceMode = 'skip'
}) => {
  const [response, setResponse] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [isActive, setIsActive] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      // Auto-proceed when time runs out
      onNext();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, timeLeft, onNext]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResponseChange = (value: string) => {
    setResponse(value);
    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Directions */}
        <div className="bg-gray-100 p-4 rounded-lg mb-2">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="text-sm">
                <strong>Directions:</strong> Read the question below. You have 20 minutes to plan and write your response.
                Your response will be judged on the basis of the quality of your writing and on how well your response
                presents the points in the lecture and their relationship to the reading passage. Typically, an effective
                response will be 150 to 225 words.
              </p>
              <p className="text-xs text-gray-600 mt-2">
                <strong>Note:</strong> Your response will not be saved or evaluated. This activity is only intended to simulate the TOEFL® iBT writing experience.
              </p>
            </div>
            <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-blue-100 rounded border-l-4 border-blue-400">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-700">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white p-4 border border-gray-300 rounded-lg mb-6">
          <p className="font-semibold">Question: {question.question_text}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Left side - Reading Passage */}
          <div className="space-y-4">
            {readingPassages.map((passage) => (
              <Card key={passage.id} className="h-fit">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{passage.title}</CardTitle>
                </CardHeader>
                <CardContent className="max-h-96 overflow-y-auto">
                  <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                    {passage.content}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Lecture Info */}
            {lecturePassages.map((passage) => (
              <Card key={passage.id} className="bg-orange-50 border-orange-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-orange-700">🎧 Listening (Lecture)</CardTitle>
                  <p className="text-orange-600 text-sm">
                    Duration: {passage.audio_duration ? `${Math.floor(passage.audio_duration / 60)} minutes` : '2 minutes'}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line text-sm">
                    {passage.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Writing Area */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Your Response</CardTitle>
                  <div className="bg-gray-100 px-3 py-1 rounded text-sm">
                    <span className="font-semibold">Word Count</span>
                    <br />
                    {wordCount}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={response}
                  onChange={(e) => handleResponseChange(e.target.value)}
                  placeholder="Write your response here..."
                  className="min-h-[400px] resize-none border-gray-300 text-sm"
                />
                <div className="mt-4 flex justify-end">
                  <Button
                    onClick={onNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    Next Task
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedWritingTask;
