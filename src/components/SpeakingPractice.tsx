
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mic, RotateCcw } from 'lucide-react';
import { IndividualPracticeTest, IndividualPracticeQuestion } from '@/hooks/useIndividualPractice';

interface SpeakingPracticeProps {
  test: IndividualPracticeTest;
  question: IndividualPracticeQuestion;
  onComplete: () => void;
}

const SpeakingPractice = ({ test, question, onComplete }: SpeakingPracticeProps) => {
  const [phase, setPhase] = useState<'directions' | 'prep' | 'speaking' | 'completed'>('directions');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const options = question.options as { prep_time: number; speaking_time: number };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = (duration: number, nextPhase: typeof phase) => {
    setTimeLeft(duration);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setPhase(nextPhase);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStartTask = () => {
    setPhase('prep');
    startTimer(options.prep_time, 'speaking');
  };

  const handleStartSpeaking = () => {
    if (phase === 'prep') {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setPhase('speaking');
      setIsRecording(true);
      startTimer(options.speaking_time, 'completed');
    }
  };

  const handleComplete = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsRecording(false);
    setPhase('completed');
  };

  const resetTask = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setPhase('directions');
    setIsRecording(false);
    setTimeLeft(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPhaseTitle = () => {
    switch (phase) {
      case 'prep':
        return 'Preparation Time';
      case 'speaking':
        return 'Speaking Time';
      default:
        return '';
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'prep':
        return 'border-blue-400 bg-blue-50';
      case 'speaking':
        return 'border-red-400 bg-red-50';
      default:
        return 'border-gray-400 bg-gray-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{test.title}</CardTitle>
            {timeLeft > 0 && (
              <div className={`flex items-center gap-2 px-3 py-1 rounded border-l-4 ${getPhaseColor()}`}>
                <Clock className="h-4 w-4" />
                <span className="font-semibold">{getPhaseTitle()}: {formatTime(timeLeft)}</span>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {phase === 'directions' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold text-blue-900 mb-3">Directions</h3>
                <p className="text-blue-800 leading-relaxed">
                  You will be asked a question about a familiar topic. You will have {options.prep_time} seconds 
                  to prepare your response and {options.speaking_time} seconds to speak.
                </p>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleStartTask}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Begin Task
                </Button>
              </div>
            </div>
          )}

          {phase === 'prep' && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Question</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{question.question_text}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 text-sm">
                  <strong>Preparation Time:</strong> Use this time to organize your thoughts and plan your response. 
                  Consider your main points and specific examples you want to include.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  onClick={handleStartSpeaking}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                >
                  Start Speaking Now
                </Button>
              </div>
            </div>
          )}

          {phase === 'speaking' && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Question</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{question.question_text}</p>
              </div>
              
              <div className="bg-red-100 p-8 rounded-lg text-center border-l-4 border-red-400">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-red-700 font-bold mb-2">Recording in progress...</p>
                <p className="text-sm text-red-600">
                  Speak clearly and at a natural pace. State your preference and provide specific reasons with examples.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  onClick={handleComplete}
                  variant="outline"
                  className="px-6 py-2"
                >
                  End Recording
                </Button>
              </div>
            </div>
          )}

          {phase === 'completed' && (
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 text-center">
                <h3 className="font-semibold text-green-900 mb-2">Task Completed!</h3>
                <p className="text-green-800">
                  You have successfully completed the independent speaking task.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Tips for Improvement:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Clearly state your preference in the first few seconds</li>
                  <li>• Provide 2-3 specific reasons to support your choice</li>
                  <li>• Include concrete examples or personal experiences</li>
                  <li>• Use transitional phrases to organize your response</li>
                  <li>• Practice speaking at a natural, clear pace</li>
                </ul>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button onClick={resetTask} variant="outline">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button onClick={onComplete}>
                  Complete Practice
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingPractice;
