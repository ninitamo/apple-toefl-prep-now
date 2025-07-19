import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Volume2, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface VocabularyQuestion {
  id: number;
  word: string;
  script: string;
  question: string;
  options: string[];
  correctAnswer: number;
  audioUrl: string;
}

interface ListeningVocabularyProps {
  onBack: () => void;
}

const ListeningVocabulary: React.FC<ListeningVocabularyProps> = ({ onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(20).fill(null));
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const vocabularyQuestions: VocabularyQuestion[] = [
    {
      id: 1,
      word: "allocate",
      script: "The university has decided to allocate more funds to the engineering department due to the increasing number of students.",
      question: "What does the word allocate most likely mean in this context?",
      options: ["Spend quickly", "Distribute for a purpose", "Waste resources", "Save for emergencies"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/1.mp3"
    },
    {
      id: 2,
      word: "deteriorate",
      script: "Over the last decade, air quality in the city has significantly deteriorated due to industrial growth.",
      question: "What does deteriorated mean in this context?",
      options: ["Improved", "Remained stable", "Got worse", "Became popular"],
      correctAnswer: 2,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/2.mp3"
    },
    {
      id: 3,
      word: "subsequent",
      script: "The professor gave a brief introduction, and the subsequent lecture focused on the main theories of psychology.",
      question: "What does subsequent mean in this context?",
      options: ["Unrelated", "Following", "Short", "Opposite"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/3.mp3"
    },
    {
      id: 4,
      word: "predominant",
      script: "English is the predominant language used in scientific publications worldwide.",
      question: "What does predominant mean here?",
      options: ["Rare", "Most common", "Difficult to understand", "Recently added"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/4.mp3"
    },
    {
      id: 5,
      word: "advocate",
      script: "Many environmentalists advocate for stricter regulations on industrial pollution.",
      question: "What does advocate mean in this context?",
      options: ["Speak against", "Recommend publicly", "Ignore", "Study privately"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/5.mp3"
    },
    {
      id: 6,
      word: "compensate",
      script: "The company offered a bonus to compensate employees for the extra hours they worked.",
      question: "What does compensate mean?",
      options: ["Punish", "Replace", "Make up for", "Complain"],
      correctAnswer: 2,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/6.mp3"
    },
    {
      id: 7,
      word: "fluctuate",
      script: "Gas prices tend to fluctuate throughout the year based on supply and demand.",
      question: "What does fluctuate mean?",
      options: ["Increase steadily", "Remain the same", "Change frequently", "Decrease permanently"],
      correctAnswer: 2,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/7.mp3"
    },
    {
      id: 8,
      word: "eliminate",
      script: "To improve efficiency, the manager decided to eliminate unnecessary procedures.",
      question: "What does eliminate mean?",
      options: ["Simplify", "Remove completely", "Delay", "Replace"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/8.mp3"
    },
    {
      id: 9,
      word: "coincide",
      script: "The museum's reopening will coincide with the city's art festival.",
      question: "What does coincide mean?",
      options: ["Conflict", "Overlap in time", "Be rescheduled", "Repeat"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/9.mp3"
    },
    {
      id: 10,
      word: "notion",
      script: "The professor challenged the notion that intelligence is solely determined by genetics.",
      question: "What does notion mean?",
      options: ["Scientific fact", "Idea or belief", "Measurement", "Lie"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/10.mp3"
    },
    {
      id: 11,
      word: "inevitable",
      script: "With rising sea levels, some amount of coastal flooding is considered inevitable.",
      question: "What does inevitable mean?",
      options: ["Avoidable", "Likely to happen", "Random", "Dangerous"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/11.mp3"
    },
    {
      id: 12,
      word: "crucial",
      script: "It's crucial that students understand the structure of the TOEFL exam before taking it.",
      question: "What does crucial mean?",
      options: ["Optional", "Unclear", "Very important", "Difficult"],
      correctAnswer: 2,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/12.mp3"
    },
    {
      id: 13,
      word: "compile",
      script: "The student spent weeks gathering data to compile her final report.",
      question: "What does compile mean?",
      options: ["Erase", "Organize into a collection", "Destroy", "Copy by hand"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/13.mp3"
    },
    {
      id: 14,
      word: "ambiguous",
      script: "His response was so ambiguous that no one understood his opinion clearly.",
      question: "What does ambiguous mean?",
      options: ["Clear", "Long", "Uncertain", "Rude"],
      correctAnswer: 2,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/14.mp3"
    },
    {
      id: 15,
      word: "retain",
      script: "Even after several years, the professor retained her interest in the subject.",
      question: "What does retain mean?",
      options: ["Lose", "Keep", "Lend", "Hide"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/15.mp3"
    },
    {
      id: 16,
      word: "implement",
      script: "The university will implement a new attendance policy starting next semester.",
      question: "What does implement mean?",
      options: ["Suggest", "Cancel", "Put into effect", "Argue against"],
      correctAnswer: 2,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/16.mp3"
    },
    {
      id: 17,
      word: "comprehensive",
      script: "The final exam will be comprehensive, covering all topics discussed during the course.",
      question: "What does comprehensive mean?",
      options: ["Easy", "Complete", "Short", "Unrelated"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/17.mp3"
    },
    {
      id: 18,
      word: "alter",
      script: "Due to the storm, the event organizers had to alter their original plans.",
      question: "What does alter mean?",
      options: ["Finalize", "Change", "Confirm", "Advertise"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/18.mp3"
    },
    {
      id: 19,
      word: "contradict",
      script: "Her comments contradict the data shown in the graph.",
      question: "What does contradict mean?",
      options: ["Agree with", "Ignore", "Go against", "Summarize"],
      correctAnswer: 2,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/19.mp3"
    },
    {
      id: 20,
      word: "acquire",
      script: "Students can acquire new vocabulary through consistent reading and listening practice.",
      question: "What does acquire mean?",
      options: ["Forget", "Learn or obtain", "Avoid", "Doubt"],
      correctAnswer: 1,
      audioUrl: "https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/materials/listening/20.mp3"
    }
  ];

  const currentQ = vocabularyQuestions[currentQuestion];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
        }
      };
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newAnswers);
    
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < vocabularyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers(new Array(20).fill(null));
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">
                Vocabulary Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
                {score}/20
              </div>
              <div className="text-xl text-gray-600 dark:text-gray-400">
                {score >= 16 ? "Excellent!" : score >= 12 ? "Good job!" : score >= 8 ? "Keep practicing!" : "More practice needed"}
              </div>
              <Progress value={(score / 20) * 100} className="w-full" />
              <div className="flex gap-4 justify-center">
                <Button onClick={handleRestart} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button onClick={onBack} variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full dark:text-gray-200"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Listening Vocabulary Practice
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Question {currentQuestion + 1} of {vocabularyQuestions.length}
            </p>
          </div>
          <div className="w-12"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Progress value={((currentQuestion + 1) / vocabularyQuestions.length) * 100} className="w-full" />
          </div>

          <Card className="bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-gray-100 text-center">
                Word: <span className="text-blue-600 dark:text-blue-400">{currentQ.word}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Audio Player */}
              <div className="text-center">
                <audio ref={audioRef} src={currentQ.audioUrl} preload="auto" />
                <Button
                  onClick={playAudio}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-6 w-6 mr-2" />
                      Pause Audio
                    </>
                  ) : (
                    <>
                      <Play className="h-6 w-6 mr-2" />
                      Play Audio
                    </>
                  )}
                </Button>
                <div className="flex items-center justify-center mt-2 text-gray-600 dark:text-gray-400">
                  <Volume2 className="h-4 w-4 mr-1" />
                  <span className="text-sm">Listen to the context</span>
                </div>
              </div>

              {/* Question */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {currentQ.question}
                </h3>
                
                {/* Answer Options */}
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                        selectedAnswer === index
                          ? showResult
                            ? index === currentQ.correctAnswer
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                              : 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                            : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                          : showResult && index === currentQ.correctAnswer
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                          : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:border-blue-300 dark:hover:border-blue-500'
                      }`}
                      disabled={showResult}
                    >
                      <div className="flex items-center justify-between">
                        <span>
                          <strong>{String.fromCharCode(65 + index)})</strong> {option}
                        </span>
                        {showResult && index === currentQ.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showResult && selectedAnswer === index && index !== currentQ.correctAnswer && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
                </div>
                <div className="space-x-4">
                  {!showResult ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNext}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {currentQuestion < vocabularyQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ListeningVocabulary;