
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Volume2, BookOpen, PenTool } from 'lucide-react';
import { IndividualPracticeTest, IndividualPracticeQuestion } from '@/hooks/useIndividualPractice';

interface WritingPracticeIndividualProps {
  test: IndividualPracticeTest;
  question: IndividualPracticeQuestion;
  onComplete: () => void;
}

const WritingPracticeIndividual: React.FC<WritingPracticeIndividualProps> = ({
  test,
  question,
  onComplete
}) => {
  const [phase, setPhase] = useState<'reading' | 'listening' | 'writing' | 'completed'>('reading');
  const [timeLeft, setTimeLeft] = useState(0);
  const [response, setResponse] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const questionOptions = question.options as any;
  const readingTime = questionOptions?.reading_time || 3;
  const writingTime = questionOptions?.writing_time || 20;
  const lectureConversation = questionOptions?.lecture_conversation || [];

  useEffect(() => {
    // Start with reading phase
    startTimer(readingTime * 60, 'listening');
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = (duration: number, nextPhase: string) => {
    setTimeLeft(duration);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setPhase(nextPhase as any);
          if (nextPhase === 'writing') {
            startTimer(writingTime * 60, 'completed');
          } else if (nextPhase === 'listening') {
            // Simulate lecture duration (2-3 minutes)
            startTimer(150, 'writing');
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResponseChange = (value: string) => {
    setResponse(value);
    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    onComplete();
  };

  if (phase === 'completed') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-white shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-green-600">Writing Practice Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-gray-600">You have successfully completed the integrated writing task.</p>
              <div className="space-y-2">
                <p className="font-semibold">Final Word Count: {wordCount}</p>
                <p className="text-sm text-gray-500">Recommended: 150-225 words</p>
              </div>
              <Button onClick={handleComplete} className="bg-orange-600 hover:bg-orange-700">
                Complete Practice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{test.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="font-mono text-lg">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Reading Phase */}
            {phase === 'reading' && (
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-blue-800">Reading Time: {formatTime(timeLeft)}</span>
                  </div>
                  <p className="text-blue-700 text-sm">Read the passage carefully. You may take notes.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {test.content}
                  </div>
                </div>
              </div>
            )}

            {/* Listening Phase */}
            {phase === 'listening' && (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-800">Listening Time: {formatTime(timeLeft)}</span>
                  </div>
                  <p className="text-green-700 text-sm">Listen to the lecture. You may take notes.</p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <Volume2 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">Now listen to a lecture on the same topic</p>
                  <p className="text-sm text-gray-500">The professor will discuss points that relate to the reading passage</p>
                </div>
                
                {/* Show lecture content for simulation */}
                <div className="bg-white p-4 rounded border max-h-64 overflow-y-auto">
                  <h4 className="font-semibold mb-2">Lecture Content:</h4>
                  <div className="space-y-2 text-sm">
                    {lectureConversation.map((line: string[], index: number) => (
                      <p key={index} className="text-gray-700">
                        <span className="font-medium">{line[0]}:</span> {line[1]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Writing Phase */}
            {phase === 'writing' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Reference Material - Left Side */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Reading Passage (Reference)</h3>
                    <div className="text-sm text-gray-600 max-h-96 overflow-y-auto whitespace-pre-line">
                      {test.content}
                    </div>
                  </div>
                </div>
                
                {/* Writing Area - Right Side */}
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                    <div className="flex items-center gap-2 mb-2">
                      <PenTool className="h-4 w-4 text-orange-600" />
                      <span className="font-semibold text-orange-800">Writing Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">Question:</h4>
                    <p className="text-sm text-gray-700 mb-4">{question.question_text}</p>
                    <p className="text-xs text-gray-500">
                      Directions: You have 20 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically, an effective response will be 150 to 225 words.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Your Response:</h3>
                      <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Word Count: {wordCount}
                      </div>
                    </div>
                    <Textarea
                      value={response}
                      onChange={(e) => handleResponseChange(e.target.value)}
                      placeholder="Type your response here..."
                      className="min-h-[400px] resize-none"
                    />
                  </div>
                </div>
              </div>
            )}
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WritingPracticeIndividual;
