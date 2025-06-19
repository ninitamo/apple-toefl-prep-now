
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Pause, Mic, Clock, Volume2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate, useParams } from 'react-router-dom';

const SpeakingPractice = () => {
  const navigate = useNavigate();
  const { practiceId } = useParams();
  const [currentTask, setCurrentTask] = useState(0);
  const [phase, setPhase] = useState<'instructions' | 'reading' | 'listening' | 'prep' | 'recording' | 'completed'>('instructions');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  
  const tasks = [
    {
      type: 'independent',
      title: 'Task 1: Independent Speaking',
      prompt: 'Do you agree or disagree with the statement that female and male university students should have separate residence halls?',
      prepTime: 15,
      recordingTime: 45,
    },
    {
      type: 'campus',
      title: 'Task 2: Campus Situation',
      reading: 'University Policy Change: The university is implementing a new policy requiring all first-year students to live on campus. This policy aims to improve student engagement and academic performance by fostering a stronger campus community.',
      prompt: 'The man expresses his opinion about the new housing policy. State his opinion and explain the reasons he gives for holding that opinion.',
      readingTime: 45,
      listeningTime: 90,
      prepTime: 30,
      recordingTime: 60,
    },
    {
      type: 'academic',
      title: 'Task 3: Academic Topic',
      reading: 'Cognitive Dissonance: A psychological phenomenon that occurs when a person holds contradictory beliefs, ideas, or values simultaneously. This mental discomfort typically leads people to alter their beliefs or behaviors to reduce the inconsistency.',
      prompt: 'Using the example from the lecture, explain how cognitive dissonance theory helps understand human behavior.',
      readingTime: 45,
      listeningTime: 90,
      prepTime: 30,
      recordingTime: 60,
    },
    {
      type: 'lecture',
      title: 'Task 4: Academic Lecture',
      prompt: 'Using points and examples from the lecture, explain two different marketing strategies that companies use to attract customers.',
      listeningTime: 90,
      prepTime: 20,
      recordingTime: 60,
    },
  ];

  const currentTaskData = tasks[currentTask];

  useEffect(() => {
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
      startTimer(currentTaskData.prepTime, 'recording');
    } else if (currentTaskData.type === 'campus' || currentTaskData.type === 'academic') {
      setPhase('reading');
      startTimer(currentTaskData.readingTime!, 'listening');
    } else if (currentTaskData.type === 'lecture') {
      setPhase('listening');
      startTimer(currentTaskData.listeningTime, 'prep');
    }
  };

  const handlePhaseComplete = () => {
    if (phase === 'reading') {
      setPhase('listening');
      setAudioPlaying(true);
      startTimer(currentTaskData.listeningTime!, 'prep');
    } else if (phase === 'listening') {
      setAudioPlaying(false);
      setPhase('prep');
      startTimer(currentTaskData.prepTime, 'recording');
    } else if (phase === 'prep') {
      setPhase('recording');
      setIsRecording(true);
      startTimer(currentTaskData.recordingTime, 'completed');
    } else if (phase === 'recording') {
      setIsRecording(false);
      if (currentTask < tasks.length - 1) {
        setCurrentTask(currentTask + 1);
        setPhase('instructions');
        setHasStarted(false);
      } else {
        setPhase('completed');
      }
    }
  };

  useEffect(() => {
    if (timeLeft === 0 && phase !== 'instructions' && phase !== 'completed') {
      handlePhaseComplete();
    }
  }, [timeLeft, phase]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTask = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setPhase('instructions');
    setHasStarted(false);
    setIsRecording(false);
    setAudioPlaying(false);
    setTimeLeft(0);
  };

  if (phase === 'completed' && currentTask === tasks.length - 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-green-600">Speaking Practice Complete!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-600">You have successfully completed all 4 speaking tasks.</p>
            <div className="space-y-2">
              <p className="font-semibold">Your responses have been recorded</p>
              <p className="text-sm text-gray-500">You can review your performance and try again anytime.</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/practice/speaking')} className="bg-purple-600 hover:bg-purple-700">
                Back to Speaking Practice
              </Button>
              <Button onClick={resetTask} variant="outline">
                Practice Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/practice/speaking')}
            className="mr-4 p-2 hover:bg-white/50 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{currentTaskData.title}</h1>
            <p className="text-gray-600">Task {currentTask + 1} of {tasks.length}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{currentTaskData.title}</CardTitle>
                {hasStarted && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-mono text-lg">
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                    <Button onClick={resetTask} variant="outline" size="sm">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {phase === 'instructions' && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Instructions</h3>
                    <div className="space-y-2 text-blue-800">
                      {currentTaskData.type === 'independent' && (
                        <>
                          <p>• You will have 15 seconds to prepare your response</p>
                          <p>• Then you will have 45 seconds to speak</p>
                          <p>• Express your opinion clearly with supporting reasons</p>
                        </>
                      )}
                      {(currentTaskData.type === 'campus' || currentTaskData.type === 'academic') && (
                        <>
                          <p>• First, you will read a short passage (45 seconds)</p>
                          <p>• Then you will listen to a related audio (1 minute 30 seconds)</p>
                          <p>• You will have 30 seconds to prepare your response</p>
                          <p>• Finally, you will have 60 seconds to speak</p>
                        </>
                      )}
                      {currentTaskData.type === 'lecture' && (
                        <>
                          <p>• You will listen to an academic lecture (1 minute 30 seconds)</p>
                          <p>• You will have 20 seconds to prepare your response</p>
                          <p>• Then you will have 60 seconds to speak</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <Button 
                      onClick={handleStartTask}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
                    >
                      Start Task {currentTask + 1}
                    </Button>
                  </div>
                </div>
              )}

              {phase === 'reading' && (
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-yellow-600" />
                      <span className="font-semibold text-yellow-800">Reading Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Reading Passage</h3>
                    <p className="text-gray-700 leading-relaxed">{currentTaskData.reading}</p>
                  </div>
                </div>
              )}

              {phase === 'listening' && (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-800">Listening Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <Volume2 className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">Audio is playing...</p>
                    <p className="text-sm text-gray-500">Listen carefully to the content</p>
                  </div>
                </div>
              )}

              {phase === 'prep' && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold text-blue-800">Preparation Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Question</h3>
                    <p className="text-gray-700 text-lg">{currentTaskData.prompt}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Tip:</strong> Use this time to organize your thoughts and plan your response.
                    </p>
                  </div>
                </div>
              )}

              {phase === 'recording' && (
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className={`h-4 w-4 text-red-600 ${isRecording ? 'animate-pulse' : ''}`} />
                      <span className="font-semibold text-red-800">Recording Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Question</h3>
                    <p className="text-gray-700 text-lg">{currentTaskData.prompt}</p>
                  </div>
                  <div className="bg-red-100 p-8 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <Mic className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-red-700 font-semibold mb-2">Recording in progress...</p>
                    <p className="text-sm text-red-600">Speak clearly and at a natural pace</p>
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

export default SpeakingPractice;
