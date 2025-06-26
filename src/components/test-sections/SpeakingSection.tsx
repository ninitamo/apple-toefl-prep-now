
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mic, Volume2, RotateCcw, SkipForward } from 'lucide-react';

interface SpeakingSectionProps {
  onNext: () => void;
}

interface Task {
  id: number;
  type: 'independent' | 'integrated-campus' | 'integrated-academic' | 'integrated-lecture';
  title: string;
  directions: string;
  readingTime?: number;
  listeningTime?: number;
  prepTime: number;
  speakingTime: number;
  readingPassage?: string;
  question: string;
}

const SpeakingSection = ({ onNext }: SpeakingSectionProps) => {
  const [currentTask, setCurrentTask] = useState(0);
  const [phase, setPhase] = useState<'directions' | 'reading' | 'listening' | 'prep' | 'speaking' | 'completed'>('directions');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [canSkip, setCanSkip] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const tasks: Task[] = [
    {
      id: 1,
      type: 'independent',
      title: 'Speaking Task 1',
      directions: 'You will be asked a question about a familiar topic. You will then have 15 seconds to prepare your response and 45 seconds to speak.',
      prepTime: 15,
      speakingTime: 45,
      question: 'Some people prefer to work independently, while others prefer to work as part of a team. Which do you prefer and why? Use specific reasons and examples to support your answer.'
    },
    {
      id: 2,
      type: 'integrated-campus',
      title: 'Speaking Task 2',
      directions: 'You will read a short paragraph and then listen to a conversation between two people. You will have 50 seconds to read the paragraph. After, you will get a question about what you read and heard. You will have 30 seconds to prepare your response and then 60 seconds to give it.',
      readingTime: 50,
      listeningTime: 90,
      prepTime: 30,
      speakingTime: 60,
      readingPassage: 'New Campus Policy: The university is implementing a new policy requiring all first-year students to live on campus for their entire first year. This policy aims to help students better integrate into campus life and improve their academic performance through increased access to campus resources and study groups.',
      question: 'The woman expresses her opinion about the new campus housing policy. State her opinion and explain the reasons she gives for holding that opinion.'
    },
    {
      id: 3,
      type: 'integrated-academic',
      title: 'Speaking Task 3',
      directions: 'You will read a short paragraph about an academic topic then listen to a lecture about it. You will have 50 seconds to read the paragraph. After, you will get a question about what you read and heard. You will have 30 seconds to prepare your response and then 60 seconds to give it.',
      readingTime: 50,
      listeningTime: 120,
      prepTime: 30,
      speakingTime: 60,
      readingPassage: 'Cognitive Dissonance: A psychological phenomenon that occurs when a person holds contradictory beliefs, ideas, or values simultaneously. This mental discomfort typically leads people to alter their beliefs or behaviors to reduce the inconsistency and restore psychological balance.',
      question: 'Using the example from the lecture, explain how cognitive dissonance theory helps understand human behavior.'
    },
    {
      id: 4,
      type: 'integrated-lecture',
      title: 'Speaking Task 4',
      directions: 'You will listen to a lecture about an academic topic. After, you will get a question about what you heard. You will have 20 seconds to prepare your response and then 60 seconds to give it.',
      listeningTime: 120,
      prepTime: 20,
      speakingTime: 60,
      question: 'Using points and examples from the lecture, explain two different marketing strategies that companies use to attract customers.'
    }
  ];

  const currentTaskData = tasks[currentTask];

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = (duration: number, nextPhase: typeof phase) => {
    setTimeLeft(duration);
    setCanSkip(true);
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
    setHasStarted(true);
    
    if (currentTaskData.type === 'independent') {
      setPhase('prep');
      startTimer(currentTaskData.prepTime, 'speaking');
    } else if (currentTaskData.type === 'integrated-campus' || currentTaskData.type === 'integrated-academic') {
      setPhase('reading');
      startTimer(currentTaskData.readingTime!, 'listening');
    } else if (currentTaskData.type === 'integrated-lecture') {
      setPhase('listening');
      setAudioPlaying(true);
      startTimer(currentTaskData.listeningTime!, 'prep');
    }
  };

  const handlePhaseComplete = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (phase === 'reading') {
      setPhase('listening');
      setAudioPlaying(true);
      startTimer(currentTaskData.listeningTime!, 'prep');
    } else if (phase === 'listening') {
      setAudioPlaying(false);
      setPhase('prep');
      startTimer(currentTaskData.prepTime, 'speaking');
    } else if (phase === 'prep') {
      setPhase('speaking');
      setIsRecording(true);
      startTimer(currentTaskData.speakingTime, 'completed');
    } else if (phase === 'speaking') {
      setIsRecording(false);
      if (currentTask < tasks.length - 1) {
        setCurrentTask(currentTask + 1);
        setPhase('directions');
        setHasStarted(false);
      } else {
        onNext();
      }
    }
  };

  const handleSkip = () => {
    if (canSkip) {
      setCanSkip(false);
      handlePhaseComplete();
    }
  };

  const resetTask = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setPhase('directions');
    setHasStarted(false);
    setIsRecording(false);
    setAudioPlaying(false);
    setTimeLeft(0);
    setCanSkip(true);
  };

  useEffect(() => {
    if (timeLeft === 0 && phase !== 'directions' && phase !== 'completed') {
      handlePhaseComplete();
    }
  }, [timeLeft, phase]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPhaseTitle = () => {
    switch (phase) {
      case 'reading':
        return 'Reading Time';
      case 'listening':
        return 'Listening Time';
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
      case 'reading':
        return 'border-yellow-400 bg-yellow-50';
      case 'listening':
        return 'border-green-400 bg-green-50';
      case 'prep':
        return 'border-blue-400 bg-blue-50';
      case 'speaking':
        return 'border-red-400 bg-red-50';
      default:
        return 'border-gray-400 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Speaking | Task {currentTask + 1} of {tasks.length}
          </span>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">00:15:30 ⏰ Hide Time</span>
            {hasStarted && (
              <Button onClick={resetTask} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{currentTaskData.title}</CardTitle>
                {hasStarted && timeLeft > 0 && (
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded border-l-4 ${getPhaseColor()}`}>
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">{getPhaseTitle()}: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {phase === 'directions' && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <h3 className="font-semibold text-blue-900 mb-3">Directions</h3>
                    <p className="text-blue-800 leading-relaxed">{currentTaskData.directions}</p>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      onClick={handleStartTask}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                    >
                      Begin Task {currentTask + 1}
                    </Button>
                  </div>
                </div>
              )}

              {phase === 'reading' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Reading Passage</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {currentTaskData.readingPassage}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleSkip}
                      variant="outline"
                      disabled={!canSkip}
                      className="flex items-center space-x-2"
                    >
                      <SkipForward className="h-4 w-4" />
                      <span>Skip Reading</span>
                    </Button>
                  </div>
                </div>
              )}

              {phase === 'listening' && (
                <div className="space-y-4">
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <Volume2 className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 font-semibold mb-2">{audioPlaying ? 'Audio is playing...' : 'Get ready to listen'}</p>
                    <p className="text-sm text-gray-500">
                      {currentTaskData.type === 'integrated-campus' && 'Listen to a conversation between two students.'}
                      {currentTaskData.type === 'integrated-academic' && 'Listen to part of a lecture on this topic.'}
                      {currentTaskData.type === 'integrated-lecture' && 'Listen to part of a lecture.'}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleSkip}
                      variant="outline"
                      disabled={!canSkip}
                      className="flex items-center space-x-2"
                    >
                      <SkipForward className="h-4 w-4" />
                      <span>Skip Audio</span>
                    </Button>
                  </div>
                </div>
              )}

              {phase === 'prep' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Question</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{currentTaskData.question}</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-yellow-800 text-sm">
                      <strong>Preparation Time:</strong> Use this time to organize your thoughts and plan your response.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleSkip}
                      variant="outline"
                      disabled={!canSkip}
                      className="flex items-center space-x-2"
                    >
                      <SkipForward className="h-4 w-4" />
                      <span>Skip Preparation</span>
                    </Button>
                  </div>
                </div>
              )}

              {phase === 'speaking' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Question</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{currentTaskData.question}</p>
                  </div>
                  
                  <div className="bg-red-100 p-8 rounded-lg text-center border-l-4 border-red-400">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <Mic className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-red-700 font-bold mb-2">Recording in progress...</p>
                    <p className="text-sm text-red-600">Speak clearly and at a natural pace. Address all parts of the question.</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleSkip}
                      variant="outline"
                      disabled={!canSkip}
                      className="flex items-center space-x-2"
                    >
                      <SkipForward className="h-4 w-4" />
                      <span>End Recording</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* Task Progress */}
              {hasStarted && (
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Task {currentTask + 1} of {tasks.length}</span>
                    <span>{phase === 'speaking' ? 'Recording...' : phase.charAt(0).toUpperCase() + phase.slice(1)}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpeakingSection;
