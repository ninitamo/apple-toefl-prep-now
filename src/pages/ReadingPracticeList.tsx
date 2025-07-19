
import { useState } from 'react';
import { ArrowLeft, Lock, Play, CheckCircle, Clock, RotateCcw, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const ReadingPracticeList = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const exercises = [
    {
      id: 1,
      title: 'The Origins of Urbanization',
      description: 'Explore the emergence of cities and their impact on human civilization.',
      duration: '20 minutes',
      questions: 7,
      isFree: true,
      isPremium: false,
      isCompleted: false,
      practiceUrl: '/practice/reading/urbanization',
    },
    {
      id: 2,
      title: 'Climate Change and Ocean Currents',
      description: 'Understanding the relationship between global warming and marine ecosystems.',
      duration: '25 minutes',
      questions: 10,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 3,
      title: 'The History of Photography',
      description: 'From camera obscura to digital imaging: a comprehensive overview.',
      duration: '18 minutes',
      questions: 8,
      isFree: true,
      isPremium: false,
      isCompleted: true,
      practiceUrl: '#',
    },
    {
      id: 4,
      title: 'Quantum Physics Fundamentals',
      description: 'Basic principles of quantum mechanics and their real-world applications.',
      duration: '30 minutes',
      questions: 12,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 5,
      title: 'Ancient Greek Philosophy',
      description: 'The foundations of Western philosophical thought from Socrates to Aristotle.',
      duration: '22 minutes',
      questions: 9,
      isFree: true,
      isPremium: false,
      isCompleted: true,
      practiceUrl: '#',
    },
    {
      id: 6,
      title: 'Renewable Energy Technologies',
      description: 'Solar, wind, and hydroelectric power: the future of sustainable energy.',
      duration: '24 minutes',
      questions: 11,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 7,
      title: 'The Industrial Revolution',
      description: 'How mechanization transformed society and economy in the 18th-19th centuries.',
      duration: '23 minutes',
      questions: 9,
      isFree: true,
      isPremium: false,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 8,
      title: 'Cognitive Psychology Theories',
      description: 'Understanding how the human mind processes information and memories.',
      duration: '26 minutes',
      questions: 11,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 9,
      title: 'Marine Biodiversity',
      description: 'Exploring the rich ecosystems of ocean environments worldwide.',
      duration: '21 minutes',
      questions: 8,
      isFree: true,
      isPremium: false,
      isCompleted: false,
      practiceUrl: '#',
    },
  ];

  // Vocabulary data
  const vocabularyData = {
    Easy: [
      { word: "abundant", meaning: "existing in large quantities", example: "The region is abundant in natural resources." },
      { word: "structure", meaning: "the arrangement of parts", example: "The structure of the building was damaged." },
      { word: "scientist", meaning: "a person who studies or practices science", example: "The scientist conducted a chemistry experiment." },
      { word: "energy", meaning: "the power to do work", example: "Solar panels capture energy from the sun." },
      { word: "weather", meaning: "the state of the atmosphere", example: "The weather is expected to be sunny today." },
      { word: "heat", meaning: "high temperature", example: "The heat from the fire kept us warm." },
      { word: "plant", meaning: "a living organism that grows in the ground", example: "She watered the plant every morning." },
      { word: "water", meaning: "a clear liquid essential for life", example: "We need water to survive." },
      { word: "animal", meaning: "a living creature that is not a plant", example: "The zoo has many kinds of animals." },
      { word: "world", meaning: "the earth and all its people", example: "She wants to travel around the world." }
    ],
    Medium: [
      { word: "predict", meaning: "to say what will happen in the future", example: "Scientists can predict weather patterns using satellites." },
      { word: "migrate", meaning: "to move from one place to another", example: "Birds migrate south for the winter." },
      { word: "analyze", meaning: "to examine closely", example: "We need to analyze the results of the experiment." },
      { word: "respond", meaning: "to reply or react", example: "The immune system responds to infection." },
      { word: "function", meaning: "the purpose something serves", example: "The heart's function is to pump blood." },
      { word: "support", meaning: "to help or hold up", example: "They support each other during hard times." },
      { word: "compare", meaning: "to look at similarities and differences", example: "You should compare the two theories." },
      { word: "control", meaning: "to have power over", example: "He tried to control his emotions." },
      { word: "determine", meaning: "to decide or discover", example: "The test will determine your level." },
      { word: "evidence", meaning: "proof or support for an idea", example: "There is evidence that climate is changing." }
    ],
    Hard: [
      { word: "abandon", meaning: "to leave behind or give up", example: "They had to abandon the city due to flooding." },
      { word: "accelerate", meaning: "to increase speed", example: "Global warming may accelerate ice melting." },
      { word: "advocate", meaning: "to publicly support", example: "She advocates for educational reform." },
      { word: "allocate", meaning: "to assign or distribute resources", example: "Funds were allocated to rebuild the infrastructure." },
      { word: "ambiguous", meaning: "unclear or open to interpretation", example: "His ambiguous response confused everyone." },
      { word: "anomaly", meaning: "something unusual or unexpected", example: "The scientist noticed an anomaly in the data." },
      { word: "anticipate", meaning: "to expect or predict", example: "We anticipate delays due to weather." },
      { word: "articulate", meaning: "to express clearly", example: "She articulated her argument well." },
      { word: "assess", meaning: "to evaluate or judge", example: "They assessed the damage after the storm." },
      { word: "assumption", meaning: "a belief taken for granted", example: "The theory is based on several assumptions." }
    ]
  };

  // Quiz questions
  const quizQuestions = [
    {
      question: "What does 'abundant' mean?",
      options: ["Existing in large quantities", "Rare and scarce", "Moving quickly", "Very small"],
      correct: 0
    },
    {
      question: "Which word means 'to examine closely'?",
      options: ["Predict", "Analyze", "Migrate", "Control"],
      correct: 1
    },
    {
      question: "What does 'abandon' mean?",
      options: ["To support", "To increase", "To leave behind or give up", "To examine"],
      correct: 2
    },
    {
      question: "Which word means 'to assign or distribute resources'?",
      options: ["Accelerate", "Advocate", "Allocate", "Anticipate"],
      correct: 2
    },
    {
      question: "What does 'migrate' mean?",
      options: ["To stay in one place", "To move from one place to another", "To examine closely", "To predict"],
      correct: 1
    }
  ];

  const handleExerciseClick = (exercise: typeof exercises[0]) => {
    if (exercise.isFree && exercise.practiceUrl !== '#') {
      navigate(exercise.practiceUrl);
    } else if (!exercise.isFree) {
      console.log('Premium content - upgrade required');
    }
  };

  const flipCard = (level: string, index: number) => {
    const cardKey = `${level}-${index}`;
    setFlippedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [currentQuizQuestion]: answerIndex
    }));
  };

  const nextQuizQuestion = () => {
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1);
    } else {
      setShowQuizResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizQuestion(0);
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  const getQuizScore = () => {
    let correct = 0;
    quizQuestions.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Reading Practice</h1>
            <p className="text-gray-600 mt-2">Choose from our collection of TOEFL reading exercises</p>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="practice" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="practice">Reading Practice</TabsTrigger>
              <TabsTrigger value="vocabulary">Vocabulary Builder</TabsTrigger>
              <TabsTrigger value="quiz">Vocabulary Quiz</TabsTrigger>
            </TabsList>
            
            <TabsContent value="practice" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {exercises.map((exercise) => (
                  <Card key={exercise.id} className="relative hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      {exercise.isPremium && (
                        <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs">
                          Premium
                        </Badge>
                      )}
                      {exercise.isCompleted && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-gray-900 leading-tight pr-8">
                        {exercise.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {exercise.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{exercise.duration}</span>
                        </div>
                        <span>{exercise.questions} questions</span>
                      </div>
                      
                      <Button
                        onClick={() => handleExerciseClick(exercise)}
                        className={`w-full ${
                          exercise.isFree
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-400 hover:bg-gray-500'
                        } text-white rounded-full font-medium flex items-center gap-2 py-2 text-sm`}
                        disabled={!exercise.isFree && exercise.practiceUrl === '#'}
                      >
                        {exercise.isFree ? (
                          <>
                            <Play className="h-3 w-3" />
                            {exercise.isCompleted ? 'Practice Again' : 'Start Practice'}
                          </>
                        ) : (
                          <>
                            <Lock className="h-3 w-3" />
                            Upgrade to Access
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-white rounded-lg p-8 shadow-sm border">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Unlock All Premium Content
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get access to all reading exercises, detailed explanations, and progress tracking for just $49
                  </p>
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 text-white px-8 py-3 rounded-full font-medium">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vocabulary" className="mt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Vocabulary Builder</h2>
                <p className="text-gray-600">Click on cards to flip and see definitions. Practice with words organized by difficulty level.</p>
              </div>
              
              {Object.entries(vocabularyData).map(([level, words]) => (
                <div key={level} className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{level} Level</h3>
                    <Badge variant={level === 'Easy' ? 'default' : level === 'Medium' ? 'secondary' : 'destructive'}>
                      {words.length} words
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {words.map((wordData, index) => {
                      const cardKey = `${level}-${index}`;
                      const isFlipped = flippedCards[cardKey];
                      
                      return (
                        <Card 
                          key={index} 
                          className="h-48 cursor-pointer transition-all duration-300 hover:shadow-lg"
                          onClick={() => flipCard(level, index)}
                        >
                          <CardContent className="h-full flex flex-col justify-center p-6">
                            {!isFlipped ? (
                              <div className="text-center">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{wordData.word}</h4>
                                <p className="text-sm text-gray-500">Click to reveal definition</p>
                                <RotateCcw className="h-5 w-5 text-gray-400 mx-auto mt-4" />
                              </div>
                            ) : (
                              <div className="text-center">
                                <h4 className="text-lg font-semibold text-blue-600 mb-3">{wordData.word}</h4>
                                <p className="text-gray-700 mb-3 text-sm">{wordData.meaning}</p>
                                <p className="text-xs text-gray-500 italic">"{wordData.example}"</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="quiz" className="mt-6">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Vocabulary Quiz</h2>
                  <p className="text-gray-600">Test your knowledge of the vocabulary words.</p>
                </div>

                {!showQuizResults ? (
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Question {currentQuizQuestion + 1} of {quizQuestions.length}</CardTitle>
                        <Badge variant="outline">{Math.round(((currentQuizQuestion + 1) / quizQuestions.length) * 100)}%</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-6">{quizQuestions[currentQuizQuestion].question}</h3>
                      
                      <div className="space-y-3">
                        {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                          <Button
                            key={index}
                            variant={quizAnswers[currentQuizQuestion] === index ? "default" : "outline"}
                            className="w-full justify-start p-4 h-auto"
                            onClick={() => handleQuizAnswer(index)}
                          >
                            <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}</span>
                            {option}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="flex justify-between mt-6">
                        <Button
                          variant="outline"
                          onClick={() => setCurrentQuizQuestion(prev => Math.max(0, prev - 1))}
                          disabled={currentQuizQuestion === 0}
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={nextQuizQuestion}
                          disabled={quizAnswers[currentQuizQuestion] === undefined}
                          className="flex items-center gap-2"
                        >
                          {currentQuizQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">Quiz Results</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          {getQuizScore()}/{quizQuestions.length}
                        </div>
                        <p className="text-gray-600">
                          You scored {Math.round((getQuizScore() / quizQuestions.length) * 100)}%
                        </p>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        {quizQuestions.map((question, index) => (
                          <div key={index} className="text-left p-4 border rounded-lg">
                            <p className="font-semibold mb-2">{question.question}</p>
                            <p className="text-sm text-gray-600">
                              Your answer: <span className={quizAnswers[index] === question.correct ? 'text-green-600' : 'text-red-600'}>
                                {question.options[quizAnswers[index]] || 'No answer'}
                              </span>
                            </p>
                            {quizAnswers[index] !== question.correct && (
                              <p className="text-sm text-green-600">
                                Correct answer: {question.options[question.correct]}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <Button onClick={resetQuiz} className="flex items-center gap-2">
                        <RotateCcw className="h-4 w-4" />
                        Take Quiz Again
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ReadingPracticeList;
