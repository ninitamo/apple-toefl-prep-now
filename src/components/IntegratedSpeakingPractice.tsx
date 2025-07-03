
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mic, RotateCcw, Volume2, BookOpen, SkipForward } from 'lucide-react';
import { IndividualPracticeTest, IndividualPracticeQuestion } from '@/hooks/useIndividualPractice';

interface IntegratedSpeakingPracticeProps {
  test: IndividualPracticeTest;
  question: IndividualPracticeQuestion;
  onComplete: () => void;
}

const IntegratedSpeakingPractice = ({ test, question, onComplete }: IntegratedSpeakingPracticeProps) => {
  const [phase, setPhase] = useState<'directions' | 'reading' | 'listening' | 'prep' | 'speaking' | 'completed'>('directions');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const options = question.options as { prep_time: number; speaking_time: number; conversation: [string, string][] };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const startTimer = (duration: number) => {
    setTimeLeft(duration);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startAudioPlayback = () => {
    // Use the audio_url from the database, or fallback to constructed path if not available
    const audioUrl = test.audio_url || `listening/speaking-audios-individual/${test.id}.mp3`;
    
    if (audioRef.current) {
      setIsAudioPlaying(true);
      audioRef.current.src = audioUrl;
      
      audioRef.current.onloadstart = () => {
        console.log('Audio loading started:', audioUrl);
      };
      
      audioRef.current.oncanplay = () => {
        console.log('Audio can play');
        audioRef.current?.play().catch(error => {
          console.error('Audio play failed:', error);
          // Fallback to prep phase if audio fails
          setIsAudioPlaying(false);
          setPhase('prep');
          startTimer(options.prep_time);
        });
      };
      
      audioRef.current.onended = () => {
        setIsAudioPlaying(false);
        setPhase('prep');
        startTimer(options.prep_time);
      };
      
      audioRef.current.onerror = (error) => {
        console.error('Audio error:', error);
        console.log('Failed audio URL:', audioUrl);
        console.log('Available audio_url from database:', test.audio_url);
        setIsAudioPlaying(false);
        setPhase('prep');
        startTimer(options.prep_time);
      };
    } else {
      // Fallback to prep phase if no audio element
      setPhase('prep');
      startTimer(options.prep_time);
    }
  };

  const handleStartTask = () => {
    setPhase('reading');
    startTimer(45); // 45 seconds reading time
  };

  const handleStartSpeaking = () => {
    if (phase === 'prep') {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setPhase('speaking');
      setIsRecording(true);
      startTimer(options.speaking_time);
    }
  };

  const handleComplete = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsRecording(false);
    setPhase('completed');
  };

  const handleSkip = () => {
    // Clear any active timers
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    }

    // Move to next phase based on current phase
    if (phase === 'reading') {
      setPhase('listening');
      startAudioPlayback();
    } else if (phase === 'listening') {
      setPhase('prep');
      startTimer(options.prep_time);
    }
  };

  const resetTask = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
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

  // Auto-transition between phases when timer reaches 0
  useEffect(() => {
    if (timeLeft === 0 && timerRef.current) {
      if (phase === 'reading') {
        setPhase('listening');
        startAudioPlayback();
      } else if (phase === 'speaking') {
        setIsRecording(false);
        setPhase('completed');
      }
    }
  }, [timeLeft, phase]);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{test.title}</CardTitle>
            {timeLeft > 0 && phase !== 'listening' && (
              <div className={`flex items-center gap-2 px-3 py-1 rounded border-l-4 ${getPhaseColor()}`}>
                <Clock className="h-4 w-4" />
                <span className="font-semibold">{getPhaseTitle()}: {formatTime(timeLeft)}</span>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Hidden audio element */}
          <audio ref={audioRef} preload="metadata" />

          {phase === 'directions' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold text-blue-900 mb-3">Directions</h3>
                <p className="text-blue-800 leading-relaxed">
                  You will read a short passage about a campus-related topic and then listen to a conversation. 
                  After that, you will have {options.prep_time} seconds to prepare your response and {options.speaking_time} seconds to speak.
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

          {phase === 'reading' && (
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">Reading Time: {formatTime(timeLeft)}</span>
                </div>
                <p className="text-yellow-800 text-sm">Read the passage carefully. You will need this information for your response.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{test.title}</h3>
                <p className="text-gray-700 leading-relaxed">{test.content}</p>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleSkip}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <SkipForward className="h-4 w-4" />
                  Skip Reading
                </Button>
              </div>
            </div>
          )}

          {phase === 'listening' && (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="h-4 w-4 text-green-600" />
                  <span className="font-semibold text-green-800">Listening to Conversation</span>
                </div>
                <p className="text-green-800 text-sm">Listen carefully to the conversation between the student and professor.</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 bg-green-500 rounded-full flex items-center justify-center ${isAudioPlaying ? 'animate-pulse' : ''}`}>
                    <Volume2 className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <p className="text-center text-gray-600">
                  {isAudioPlaying ? 'Audio playing...' : 'Loading audio...'}
                </p>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleSkip}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <SkipForward className="h-4 w-4" />
                  Skip Audio
                </Button>
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
                <p className="text-blue-800 text-sm">Organize your thoughts and plan your response.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Question</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{question.question_text}</p>
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
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center gap-2 mb-2">
                  <Mic className={`h-4 w-4 text-red-600 ${isRecording ? 'animate-pulse' : ''}`} />
                  <span className="font-semibold text-red-800">Speaking Time: {formatTime(timeLeft)}</span>
                </div>
                <p className="text-red-800 text-sm">Speak clearly and provide a complete response.</p>
              </div>
              
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
                  Summarize the student's opinion and explain their supporting reasons.
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
                  You have successfully completed the integrated speaking task.
                </p>
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

export default IntegratedSpeakingPractice;
