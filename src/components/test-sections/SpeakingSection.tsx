import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mic, Volume2, RotateCcw, SkipForward } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface SpeakingSectionProps {
  testId: string;
  onNext: () => void;
}

interface SpeakingTask {
  id: string;
  title: string;
  content: string;
  order_number: number;
  audio_url?: string;
  audio_duration?: number;
  audio_type?: string;
  question: {
    question_text: string;
    question_type: string;
  };
}

const SpeakingSection = ({ testId, onNext }: SpeakingSectionProps) => {
  const [tasks, setTasks] = useState<SpeakingTask[]>([]);
  const [currentTask, setCurrentTask] = useState(0);
  const [phase, setPhase] = useState<'directions' | 'reading' | 'listening' | 'prep' | 'speaking' | 'completed'>('directions');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [canSkip, setCanSkip] = useState(true);
  const [loading, setLoading] = useState(true);
  const [audioError, setAudioError] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fetch speaking tasks from database
  useEffect(() => {
    const fetchSpeakingTasks = async () => {
      try {
        const testIdNumber = parseInt(testId);
        
        if (isNaN(testIdNumber)) {
          console.error('Invalid testId:', testId);
          setLoading(false);
          return;
        }

        const { data: passages, error: passagesError } = await supabase
          .from('test_passages')
          .select('*')
          .eq('test_id', testIdNumber)
          .eq('section_type', 'speaking')
          .order('order_number');

        if (passagesError) throw passagesError;

        const { data: questions, error: questionsError } = await supabase
          .from('test_questions')
          .select('*')
          .eq('test_id', testIdNumber)
          .eq('section_type', 'speaking')
          .order('question_number');

        if (questionsError) throw questionsError;

        const tasksData = passages?.map(passage => {
          const question = questions?.find(q => q.passage_id === passage.id);
          return {
            id: passage.id,
            title: passage.title,
            content: passage.content,
            order_number: passage.order_number,
            audio_url: passage.audio_url,
            audio_duration: passage.audio_duration,
            audio_type: passage.audio_type,
            question: {
              question_text: question?.question_text || '',
              question_type: question?.question_type || ''
            }
          };
        }) || [];

        setTasks(tasksData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching speaking tasks:', error);
        setLoading(false);
      }
    };

    if (testId) {
      fetchSpeakingTasks();
    }
  }, [testId]);

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

  const currentTaskData = tasks[currentTask];

  const getTaskTimings = (taskType: string) => {
    switch (taskType) {
      case 'independent':
        return { prepTime: 15, speakingTime: 45 };
      case 'integrated-campus':
      case 'integrated-academic':
        return { readingTime: 50, listeningTime: 90, prepTime: 30, speakingTime: 60 };
      case 'integrated-lecture':
        return { listeningTime: 120, prepTime: 20, speakingTime: 60 };
      default:
        return { prepTime: 15, speakingTime: 45 };
    }
  };

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

  const playAudio = async () => {
    if (currentTaskData.audio_url && !audioError) {
      try {
        console.log('Attempting to play audio:', currentTaskData.audio_url);
        
        // Try to get signed URL from storage
        const { data: signedUrlData, error: signedUrlError } = await supabase.storage
          .from('audio-files')
          .createSignedUrl(currentTaskData.audio_url, 3600);
        
        let audioUrl = '';
        
        if (signedUrlError || !signedUrlData?.signedUrl) {
          console.log('Failed to get signed URL, trying public URL approach');
          // Fallback: try public URL approach
          const { data: publicUrlData } = supabase.storage
            .from('audio-files')
            .getPublicUrl(currentTaskData.audio_url);
          
          audioUrl = publicUrlData.publicUrl;
        } else {
          audioUrl = signedUrlData.signedUrl;
        }
        
        if (audioUrl) {
          console.log('Using audio URL:', audioUrl);
          audioRef.current = new Audio(audioUrl);
          
          audioRef.current.onloadstart = () => {
            console.log('Audio loading started');
            setAudioPlaying(true);
            setAudioError(false);
          };
          
          audioRef.current.oncanplaythrough = () => {
            console.log('Audio can play through');
            audioRef.current?.play().catch(error => {
              console.error('Audio play error:', error);
              setAudioPlaying(false);
              setAudioError(true);
              handlePhaseComplete();
            });
          };

          audioRef.current.onended = () => {
            console.log('Audio ended');
            setAudioPlaying(false);
            handlePhaseComplete();
          };

          audioRef.current.onerror = (error) => {
            console.error('Audio error:', error);
            setAudioPlaying(false);
            setAudioError(true);
            handlePhaseComplete();
          };

          // Start loading the audio
          audioRef.current.load();
        } else {
          console.error('No valid audio URL found');
          setAudioError(true);
          handlePhaseComplete();
        }
      } catch (error) {
        console.error('Error in playAudio:', error);
        setAudioError(true);
        handlePhaseComplete();
      }
    } else {
      console.log('No audio URL provided or audio error occurred, skipping to next phase');
      handlePhaseComplete();
    }
  };

  const handleStartTask = () => {
    setHasStarted(true);
    setAudioError(false);
    const timings = getTaskTimings(currentTaskData.question.question_type);
    
    if (currentTaskData.question.question_type === 'independent') {
      setPhase('prep');
      startTimer(timings.prepTime, 'speaking');
    } else if (currentTaskData.question.question_type === 'integrated-campus' || 
               currentTaskData.question.question_type === 'integrated-academic') {
      setPhase('reading');
      startTimer(timings.readingTime!, 'listening');
    } else if (currentTaskData.question.question_type === 'integrated-lecture') {
      setPhase('listening');
      playAudio();
      startTimer(timings.listeningTime!, 'prep');
    }
  };

  const handlePhaseComplete = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const timings = getTaskTimings(currentTaskData.question.question_type);

    if (phase === 'reading') {
      setPhase('listening');
      playAudio();
      startTimer(timings.listeningTime!, 'prep');
    } else if (phase === 'listening') {
      setAudioPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPhase('prep');
      startTimer(timings.prepTime, 'speaking');
    } else if (phase === 'prep') {
      setPhase('speaking');
      setIsRecording(true);
      startTimer(timings.speakingTime, 'completed');
    } else if (phase === 'speaking') {
      setIsRecording(false);
      if (currentTask < tasks.length - 1) {
        setCurrentTask(currentTask + 1);
        setPhase('directions');
        setHasStarted(false);
        setAudioError(false);
      } else {
        onNext();
      }
    }
  };

  const handleSkip = () => {
    console.log('Skip button clicked, canSkip:', canSkip, 'phase:', phase);
    if (canSkip) {
      setCanSkip(false);
      if (audioRef.current && audioPlaying) {
        console.log('Stopping audio playback');
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioPlaying(false);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      handlePhaseComplete();
    }
  };

  const resetTask = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPhase('directions');
    setHasStarted(false);
    setIsRecording(false);
    setAudioPlaying(false);
    setTimeLeft(0);
    setCanSkip(true);
    setAudioError(false);
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

  const getDirections = (questionType: string) => {
    switch (questionType) {
      case 'independent':
        return 'You will be asked a question about a familiar topic. You will then have 15 seconds to prepare your response and 45 seconds to speak.';
      case 'integrated-campus':
        return 'You will read a short paragraph and then listen to a conversation between two people. You will have 50 seconds to read the paragraph. After, you will get a question about what you read and heard. You will have 30 seconds to prepare your response and then 60 seconds to give it.';
      case 'integrated-academic':
        return 'You will read a short paragraph about an academic topic then listen to a lecture about it. You will have 50 seconds to read the paragraph. After, you will get a question about what you read and heard. You will have 30 seconds to prepare your response and then 60 seconds to give it.';
      case 'integrated-lecture':
        return 'You will listen to a lecture about an academic topic. After, you will get a question about what you heard. You will have 20 seconds to prepare your response and then 60 seconds to give it.';
      default:
        return '';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading speaking tasks...</p>
        </div>
      </div>
    );
  }

  if (!currentTaskData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No speaking tasks found.</p>
          <Button onClick={onNext} className="mt-4">Continue</Button>
        </div>
      </div>
    );
  }

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
                    <p className="text-blue-800 leading-relaxed">
                      {getDirections(currentTaskData.question.question_type)}
                    </p>
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
                    <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {currentTaskData.content}
                    </div>
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
                    <p className="text-gray-700 font-semibold mb-2">
                      {audioError ? 'Audio could not be loaded' : 
                       audioPlaying ? 'Audio is playing...' : 'Get ready to listen'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {currentTaskData.question.question_type === 'integrated-campus' && 'Listen to a conversation between two students.'}
                      {currentTaskData.question.question_type === 'integrated-academic' && 'Listen to part of a lecture on this topic.'}
                      {currentTaskData.question.question_type === 'integrated-lecture' && 'Listen to part of a lecture.'}
                    </p>
                    {audioError && (
                      <p className="text-red-600 text-sm mt-2">
                        The audio file could not be loaded. Click skip to continue.
                      </p>
                    )}
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
                    <p className="text-gray-700 text-lg leading-relaxed">{currentTaskData.question.question_text}</p>
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
                    <p className="text-gray-700 text-lg leading-relaxed">{currentTaskData.question.question_text}</p>
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
