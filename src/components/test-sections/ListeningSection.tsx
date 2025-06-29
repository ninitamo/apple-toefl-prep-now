import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Volume2, Play, Pause, SkipForward } from 'lucide-react';

interface ListeningSectionProps {
  onNext: () => void;
  testData?: any;
}

interface ListeningPassage {
  id: string;
  title: string;
  content: string;
  audio_duration?: number;
  audio_type?: string;
  audio_url?: string;
  order_number: number;
}

interface ListeningQuestion {
  id: string;
  question_number: number;
  question_type: string;
  question_text: string;
  options: string[];
  correct_answer: string;
  passage_id: string;
}

const ListeningSection = ({ onNext }: ListeningSectionProps) => {
  const { testId } = useParams<{ testId: string }>();
  const [passages, setPassages] = useState<ListeningPassage[]>([]);
  const [questions, setQuestions] = useState<ListeningQuestion[]>([]);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Helper function to get full Supabase Storage URL
  const getFullAudioUrl = (relativePath: string) => {
    if (!relativePath) return null;
    // If it's already a full URL, return as is
    if (relativePath.startsWith('http')) return relativePath;
    // Otherwise, construct the full Supabase Storage URL
    return `https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/${relativePath}`;
  };

  const handleSkipSection = () => {
    if (audioRef.current && audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
    onNext();
  };

  useEffect(() => {
    const fetchListeningData = async () => {
      if (!testId) return;

      try {
        setLoading(true);

        // Fetch listening passages
        const { data: passagesData, error: passagesError } = await supabase
          .from('test_passages')
          .select('*')
          .eq('test_id', parseInt(testId))
          .eq('section_type', 'listening')
          .order('order_number');

        if (passagesError) throw passagesError;

        // Fetch listening questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('test_questions')
          .select('*')
          .eq('test_id', parseInt(testId))
          .eq('section_type', 'listening')
          .order('question_number');

        if (questionsError) throw questionsError;

        setPassages(passagesData || []);
        
        // Transform the questions data to match our interface
        const transformedQuestions = (questionsData || []).map(q => ({
          ...q,
          options: Array.isArray(q.options) ? q.options : JSON.parse(q.options as string),
          correct_answer: typeof q.correct_answer === 'string' 
            ? q.correct_answer 
            : String(q.correct_answer as unknown)
        }));
        
        setQuestions(transformedQuestions);

        console.log('Passages loaded:', passagesData);
        console.log('Questions loaded:', transformedQuestions);

      } catch (error) {
        console.error('Error fetching listening data:', error);
        toast.error('Failed to load listening data');
      } finally {
        setLoading(false);
      }
    };

    fetchListeningData();
  }, [testId]);

  // Reset audio state when passage changes
  useEffect(() => {
    setAudioLoaded(false);
    setAudioPlaying(false);
    setShowQuestions(false);
    setAudioCurrentTime(0);
    setAudioDuration(0);
    setAudioError(false);
  }, [currentPassageIndex]);

  const handleAudioLoad = () => {
    if (audioRef.current) {
      setAudioLoaded(true);
      setAudioError(false);
      setAudioDuration(audioRef.current.duration);
      console.log('Audio loaded successfully, duration:', audioRef.current.duration);
    }
  };

  const handleAudioTimeUpdate = () => {
    if (audioRef.current) {
      setAudioCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioEnded = () => {
    setAudioPlaying(false);
    setShowQuestions(true);
    toast.success('Audio completed. You can now answer the questions.');
  };

  const handleAudioError = (e: any) => {
    console.error('Audio error:', e);
    const fullUrl = getFullAudioUrl(passages[currentPassageIndex]?.audio_url || '');
    console.error('Full audio URL:', fullUrl);
    console.error('Original audio URL:', passages[currentPassageIndex]?.audio_url);
    setAudioError(true);
    setAudioLoaded(false);
    toast.error('Failed to load audio. Please check the audio file.');
  };

  const toggleAudioPlayback = async () => {
    if (!audioRef.current) return;

    try {
      if (audioPlaying) {
        audioRef.current.pause();
        setAudioPlaying(false);
      } else {
        await audioRef.current.play();
        setAudioPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      toast.error('Failed to play audio. Please try again.');
    }
  };

  const handleSkipAudio = () => {
    if (audioRef.current && audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
    setShowQuestions(true);
    toast.info('Audio skipped. You can now answer the questions.');
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const getCurrentPassageQuestions = () => {
    if (!passages[currentPassageIndex]) return [];
    return questions.filter(q => q.passage_id === passages[currentPassageIndex].id);
  };

  const handleNextQuestion = () => {
    const currentPassageQuestions = getCurrentPassageQuestions();
    if (currentQuestionIndex < currentPassageQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Move to next passage or finish section
      if (currentPassageIndex < passages.length - 1) {
        setCurrentPassageIndex(currentPassageIndex + 1);
        setCurrentQuestionIndex(0);
        setShowQuestions(false);
      } else {
        // All passages completed
        onNext();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentPassageIndex > 0) {
      setCurrentPassageIndex(currentPassageIndex - 1);
      const prevPassageQuestions = questions.filter(q => q.passage_id === passages[currentPassageIndex - 1].id);
      setCurrentQuestionIndex(prevPassageQuestions.length - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-6 flex items-center justify-center">
        <div className="text-center">Loading listening section...</div>
      </div>
    );
  }

  if (passages.length === 0) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Listening Section</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">No listening passages available for this test.</p>
              <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                Continue to Speaking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentPassage = passages[currentPassageIndex];
  const currentPassageQuestions = getCurrentPassageQuestions();
  const currentQuestion = currentPassageQuestions[currentQuestionIndex];
  const fullAudioUrl = getFullAudioUrl(currentPassage.audio_url || '');

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Listening Section</h1>
            <div className="flex items-center gap-4">
              <Badge variant="outline">
                {currentPassage.audio_type === 'lecture' ? 'Lecture' : 'Conversation'} {currentPassageIndex + 1} of {passages.length}
              </Badge>
              {showQuestions && (
                <Badge variant="outline">
                  Question {currentQuestionIndex + 1} of {currentPassageQuestions.length}
                </Badge>
              )}
            </div>
          </div>
          <Button
            onClick={handleSkipSection}
            variant="outline"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <SkipForward className="h-4 w-4" />
            Skip Listening Section
          </Button>
        </div>

        {!showQuestions ? (
          // Audio Content Display
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                {currentPassage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                {currentPassage.audio_type === 'conversation' ? (
                  <div className="mb-6">
                    <p className="text-lg mb-4">You will hear a conversation.</p>
                    <p className="text-sm text-gray-600 mb-6">
                      Take notes while you listen. You will not hear the conversation again.
                    </p>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-lg mb-4">You will hear part of a lecture.</p>
                    <p className="text-sm text-gray-600 mb-6">
                      Take notes while you listen. You will not hear the lecture again.
                    </p>
                  </div>
                )}

                {/* Audio Element */}
                {fullAudioUrl && (
                  <audio
                    ref={audioRef}
                    src={fullAudioUrl}
                    onLoadedData={handleAudioLoad}
                    onLoadedMetadata={handleAudioLoad}
                    onCanPlayThrough={handleAudioLoad}
                    onTimeUpdate={handleAudioTimeUpdate}
                    onEnded={handleAudioEnded}
                    onError={handleAudioError}
                    preload="metadata"
                    crossOrigin="anonymous"
                  />
                )}

                {/* Debug Info */}
                <div className="mb-4 text-xs text-gray-500">
                  <div>Original URL: {currentPassage.audio_url}</div>
                  <div>Full URL: {fullAudioUrl}</div>
                </div>

                {/* Audio Controls */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-3">
                    <Button 
                      onClick={toggleAudioPlayback}
                      disabled={!audioLoaded || !fullAudioUrl || audioError}
                      className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400"
                      size="lg"
                    >
                      {audioPlaying ? (
                        <>
                          <Pause className="w-5 h-5 mr-2" />
                          Pause Audio
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          {audioCurrentTime > 0 ? 'Resume Audio' : 'Play Audio'}
                        </>
                      )}
                    </Button>

                    <Button 
                      onClick={handleSkipAudio}
                      variant="outline"
                      size="lg"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <SkipForward className="w-5 h-5 mr-2" />
                      Skip Audio
                    </Button>
                  </div>

                  {/* Audio Progress */}
                  {audioLoaded && audioDuration > 0 && (
                    <div className="w-full max-w-md">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{formatTime(audioCurrentTime)}</span>
                        <span>{formatTime(audioDuration)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(audioCurrentTime / audioDuration) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {audioPlaying && (
                    <p className="text-sm text-gray-600">
                      Audio is playing. Take notes as you listen.
                    </p>
                  )}

                  {audioError && (
                    <p className="text-red-600 text-sm">
                      Error loading audio file. Please check the file URL and try again.
                    </p>
                  )}

                  {!audioLoaded && !audioError && fullAudioUrl && (
                    <p className="text-sm text-gray-600">
                      Loading audio...
                    </p>
                  )}
                </div>

                {!fullAudioUrl && (
                  <p className="text-red-600">Audio file not available for this passage.</p>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          // Questions Display
          currentQuestion && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Question {currentQuestion.question_number}</CardTitle>
                <Badge variant="secondary">{currentQuestion.question_type}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">{currentQuestion.question_text}</p>
                
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={index.toString()}
                        checked={answers[currentQuestion.id] === index.toString()}
                        onChange={(e) => handleAnswerSelect(currentQuestion.id, e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{String.fromCharCode(65 + index)}) {option}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentPassageIndex === 0 && currentQuestionIndex === 0}
            variant="outline"
          >
            Previous
          </Button>
          
          {showQuestions ? (
            <Button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!answers[currentQuestion?.id]}
            >
              {currentPassageIndex === passages.length - 1 && 
               currentQuestionIndex === currentPassageQuestions.length - 1 
                ? 'Continue to Speaking' 
                : 'Next'}
            </Button>
          ) : (
            <div className="text-sm text-gray-500">
              {audioError 
                ? 'Audio failed to load'
                : audioLoaded 
                  ? (audioPlaying ? 'Listening to audio...' : 'Click Play Audio to begin')
                  : 'Loading audio...'
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListeningSection;
