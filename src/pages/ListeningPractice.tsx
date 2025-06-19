
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Volume2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';

const ListeningPractice = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  // Sample audio data - in real app, this would come from props/API
  const audioData = {
    title: "Campus Conversation: Library Resources",
    description: "Listen to a conversation between a student and a librarian about research resources.",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Sample audio URL
    transcript: "This is where the transcript would appear after completion..."
  };

  const questions = [
    {
      id: 1,
      question: "What is the main purpose of the student's visit to the library?",
      options: [
        "To return overdue books",
        "To find research materials for a paper",
        "To apply for a library job",
        "To complain about library services"
      ],
      correctAnswer: "B"
    },
    {
      id: 2,
      question: "According to the librarian, what is the best resource for academic articles?",
      options: [
        "The card catalog",
        "Google Scholar",
        "The library's online database",
        "Printed journals only"
      ],
      correctAnswer: "C"
    },
    {
      id: 3,
      question: "How long can the student check out the research materials?",
      options: [
        "One week",
        "Two weeks",
        "Three weeks",
        "One month"
      ],
      correctAnswer: "B"
    },
    {
      id: 4,
      question: "What does the librarian suggest the student do next?",
      options: [
        "Come back tomorrow",
        "Talk to the reference desk",
        "Use the computer terminals",
        "Schedule an appointment"
      ],
      correctAnswer: "C"
    },
    {
      id: 5,
      question: "What can be inferred about the student's research topic?",
      options: [
        "It's about library science",
        "It requires recent academic sources",
        "It's for a graduate thesis",
        "It's about historical events"
      ],
      correctAnswer: "B"
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasStarted) {
      setHasStarted(true);
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getProgressPercentage = () => {
    if (!duration) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4">
        <Button
          variant="outline"
          onClick={() => navigate('/practice/listening')}
          className="flex items-center gap-2 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Listening Practice
        </Button>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Audio Player Section */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {audioData.title}
                  </CardTitle>
                  <p className="text-gray-600">{audioData.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <audio ref={audioRef} src={audioData.audioUrl} preload="metadata" />
                  
                  {/* Audio Controls */}
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={togglePlayPause}
                      className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700"
                      disabled={hasStarted && !isPlaying && currentTime === 0}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    
                    {!hasStarted && (
                      <span className="text-gray-600 text-sm">Click to start listening</span>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #059669 0%, #059669 ${getProgressPercentage()}%, #e5e7eb ${getProgressPercentage()}%, #e5e7eb 100%)`
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-gray-500" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={(e) => {
                        const newVolume = parseFloat(e.target.value);
                        setVolume(newVolume);
                        if (audioRef.current) {
                          audioRef.current.volume = newVolume;
                        }
                      }}
                      className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Instructions */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Instructions:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Listen to the audio carefully</li>
                    <li>• You can replay the audio as many times as needed</li>
                    <li>• Navigate through questions using the arrow buttons</li>
                    <li>• Answer all questions based on what you hear</li>
                    <li>• Click "Submit Answers" when you're done</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Questions Section */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Questions ({questions.length} total)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {questions.map((question, index) => (
                        <CarouselItem key={question.id}>
                          <div className="space-y-4">
                            <div className="flex items-start gap-2 mb-3">
                              <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                                {index + 1} of {questions.length}
                              </span>
                              <p className="font-medium text-gray-900">{question.question}</p>
                            </div>
                            
                            <div className="space-y-2">
                              {question.options.map((option, optionIndex) => {
                                const optionLetter = String.fromCharCode(65 + optionIndex);
                                const isSelected = answers[index] === optionLetter;
                                const isCorrect = showResults && question.correctAnswer === optionLetter;
                                const isWrong = showResults && isSelected && question.correctAnswer !== optionLetter;
                                
                                return (
                                  <label
                                    key={optionIndex}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border transition-colors ${
                                      showResults
                                        ? isCorrect
                                          ? 'bg-green-50 border-green-200'
                                          : isWrong
                                          ? 'bg-red-50 border-red-200'
                                          : 'bg-gray-50 border-gray-200'
                                        : isSelected
                                        ? 'bg-green-50 border-green-200'
                                        : 'bg-white border-gray-200 hover:bg-gray-50'
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name={`question-${index}`}
                                      value={optionLetter}
                                      checked={isSelected}
                                      onChange={() => handleAnswerSelect(index, optionLetter)}
                                      disabled={showResults}
                                      className="w-4 h-4 text-green-600"
                                    />
                                    <span className="font-medium text-gray-700">{optionLetter}.</span>
                                    <span className="text-gray-900">{option}</span>
                                    {showResults && isCorrect && (
                                      <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                                    )}
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  
                  <div className="mt-6">
                    {!showResults ? (
                      <Button
                        onClick={handleSubmit}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        disabled={Object.keys(answers).length < questions.length}
                      >
                        Submit Answers
                      </Button>
                    ) : (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-900 mb-2">Results</h3>
                        <p className="text-blue-800">
                          You scored {getScore()} out of {questions.length} questions correctly.
                        </p>
                        <p className="text-blue-700 text-sm mt-1">
                          Percentage: {Math.round((getScore() / questions.length) * 100)}%
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningPractice;
