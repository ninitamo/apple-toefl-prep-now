import { useState } from 'react';
import { ArrowLeft, ChevronRight, RotateCcw, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const ReadingPracticeList = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [masteredWords, setMasteredWords] = useState<Set<number>>(new Set());
  const [unknownWords, setUnknownWords] = useState<Set<number>>(new Set());
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Complete vocabulary data
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
      { word: "world", meaning: "the earth and all its people", example: "She wants to travel around the world." },
      { word: "cold", meaning: "having a low temperature", example: "The water is too cold to swim in." },
      { word: "forest", meaning: "a large area covered with trees", example: "The forest is home to many animals." },
      { word: "sun", meaning: "the star that provides light and heat", example: "The sun rises in the east." },
      { word: "change", meaning: "to become different", example: "Leaves change color in the fall." },
      { word: "use", meaning: "to employ something for a purpose", example: "You can use this tool to fix it." },
      { word: "build", meaning: "to construct", example: "They will build a new school." },
      { word: "light", meaning: "visible energy from the sun or a lamp", example: "The room was full of light." },
      { word: "time", meaning: "a measurable period", example: "What time is it?" },
      { word: "earth", meaning: "the planet we live on", example: "Earth orbits around the sun." },
      { word: "color", meaning: "the appearance of objects in terms of hue", example: "My favorite color is blue." },
      { word: "warm", meaning: "somewhat hot", example: "It's warm today." },
      { word: "job", meaning: "work that someone does", example: "She has a job as a teacher." },
      { word: "family", meaning: "a group of related people", example: "My family is very important to me." },
      { word: "place", meaning: "a location", example: "This park is a nice place to relax." },
      { word: "live", meaning: "to be alive", example: "Where do you live?" },
      { word: "see", meaning: "to use your eyes", example: "I can see the mountains." },
      { word: "food", meaning: "something that people or animals eat", example: "We need to buy food." },
      { word: "big", meaning: "large in size", example: "That's a big house." },
      { word: "small", meaning: "little in size", example: "The dog is small." },
      { word: "move", meaning: "to change location", example: "The car can move fast." },
      { word: "start", meaning: "to begin", example: "We will start the meeting soon." },
      { word: "end", meaning: "to finish", example: "The movie will end at 9." },
      { word: "air", meaning: "the mixture of gases we breathe", example: "We need clean air." },
      { word: "cloud", meaning: "a mass of water vapor in the sky", example: "The sky is full of clouds." },
      { word: "help", meaning: "to assist", example: "Can you help me with this?" },
      { word: "know", meaning: "to be aware of something", example: "I know the answer." },
      { word: "talk", meaning: "to speak", example: "Let's talk about it." },
      { word: "look", meaning: "to direct your eyes", example: "Look at the sky!" },
      { word: "hard", meaning: "difficult", example: "This question is hard." },
      { word: "easy", meaning: "not difficult", example: "This homework is easy." },
      { word: "fast", meaning: "quickly", example: "He runs fast." },
      { word: "slow", meaning: "not quick", example: "The train is slow." },
      { word: "friend", meaning: "someone you like and trust", example: "She is my best friend." },
      { word: "happy", meaning: "feeling good", example: "I'm very happy today." },
      { word: "sad", meaning: "feeling unhappy", example: "She felt sad after the movie." },
      { word: "run", meaning: "to move quickly on foot", example: "The dog can run fast." },
      { word: "walk", meaning: "to move slowly on foot", example: "Let's walk to school." },
      { word: "read", meaning: "to look at and understand words", example: "He likes to read books." },
      { word: "write", meaning: "to form letters or words", example: "Write your name here." },
      { word: "listen", meaning: "to pay attention to sound", example: "Please listen carefully." },
      { word: "speak", meaning: "to say words", example: "He can speak three languages." },
      { word: "clean", meaning: "free from dirt", example: "The kitchen is clean." },
      { word: "dirty", meaning: "not clean", example: "Your hands are dirty." }
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
      { word: "evidence", meaning: "proof or support for an idea", example: "There is evidence that climate is changing." },
      { word: "factor", meaning: "a part that contributes to a result", example: "Genetics is a factor in health." },
      { word: "impact", meaning: "a strong effect", example: "The policy had a major impact on trade." },
      { word: "increase", meaning: "to become larger or more", example: "Prices increase during holidays." },
      { word: "decrease", meaning: "to become smaller or less", example: "Pollution levels have decreased." },
      { word: "cycle", meaning: "a repeating series of events", example: "The water cycle is essential to life." },
      { word: "region", meaning: "an area or part of the world", example: "This region is known for rice farming." },
      { word: "adapt", meaning: "to change for a new situation", example: "Animals adapt to their environment." },
      { word: "survive", meaning: "to stay alive", example: "Only a few plants survived the drought." },
      { word: "transfer", meaning: "to move from one place to another", example: "He transferred schools last year." },
      { word: "complex", meaning: "complicated or not simple", example: "Climate is a complex system." },
      { word: "network", meaning: "a system of connections", example: "The internet is a global network." },
      { word: "structure", meaning: "the way something is built", example: "The structure of DNA is a double helix." },
      { word: "maintain", meaning: "to keep something in good condition", example: "It's hard to maintain a healthy diet." },
      { word: "evolve", meaning: "to change over time", example: "Languages evolve as people use them." },
      { word: "species", meaning: "a group of similar organisms", example: "That species of bird is endangered." },
      { word: "environment", meaning: "the natural world around us", example: "Pollution harms the environment." },
      { word: "contribute", meaning: "to give or add something", example: "Many factors contribute to success." },
      { word: "observe", meaning: "to notice or watch", example: "They observed a strange behavior." },
      { word: "challenge", meaning: "something difficult to overcome", example: "Learning a new language is a challenge." },
      { word: "resource", meaning: "a useful supply", example: "Water is an important natural resource." },
      { word: "transport", meaning: "to carry from one place to another", example: "The goods were transported by truck." },
      { word: "limit", meaning: "to restrict", example: "The law limits emissions." },
      { word: "benefit", meaning: "a good result", example: "Exercise has many health benefits." },
      { word: "communicate", meaning: "to share information", example: "They communicate using sign language." },
      { word: "occur", meaning: "to happen", example: "Earthquakes often occur in this region." },
      { word: "population", meaning: "the number of people or animals in a place", example: "The population is growing fast." },
      { word: "establish", meaning: "to set up or start something", example: "They established a new research center." },
      { word: "require", meaning: "to need", example: "Most plants require sunlight." },
      { word: "select", meaning: "to choose", example: "Select one answer for each question." },
      { word: "potential", meaning: "possibility", example: "This treatment has great potential." },
      { word: "method", meaning: "a way of doing something", example: "Their method is efficient." },
      { word: "data", meaning: "facts and information", example: "We collected data on rainfall." },
      { word: "indicate", meaning: "to show or point out", example: "The sign indicates danger." },
      { word: "reaction", meaning: "a response to something", example: "Her reaction was surprising." },
      { word: "variation", meaning: "a difference or change", example: "There's a lot of variation in color." },
      { word: "system", meaning: "a group of related parts", example: "The nervous system controls the body." },
      { word: "process", meaning: "a series of steps", example: "Photosynthesis is a natural process." },
      { word: "distribute", meaning: "to spread out or give out", example: "The food was distributed to shelters." },
      { word: "identify", meaning: "to recognize or name", example: "Can you identify this plant?" },
      { word: "requirement", meaning: "something that must be done", example: "The job has strict requirements." },
      { word: "generation", meaning: "a group born around the same time", example: "Each generation faces new challenges." },
      { word: "significant", meaning: "important or meaningful", example: "There was a significant change in price." },
      { word: "technology", meaning: "tools and machines made by humans", example: "Technology is changing education." }
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
      { word: "assumption", meaning: "a belief taken for granted", example: "The theory is based on several assumptions." },
      { word: "coherent", meaning: "logical and consistent", example: "The essay was well-organized and coherent." },
      { word: "comprehensive", meaning: "covering all or most aspects", example: "We need a comprehensive strategy." },
      { word: "compulsory", meaning: "required by law or rule", example: "Education is compulsory in many countries." },
      { word: "conceive", meaning: "to imagine or form an idea", example: "He conceived a plan to increase sales." },
      { word: "connotation", meaning: "an implied meaning", example: "The word 'cheap' has a negative connotation." },
      { word: "contradict", meaning: "to go against or say the opposite", example: "His actions contradict his words." },
      { word: "correlation", meaning: "a mutual relationship", example: "There's a correlation between income and health." },
      { word: "credibility", meaning: "believability or trustworthiness", example: "The witness's credibility was questioned." },
      { word: "deduce", meaning: "to draw a conclusion from evidence", example: "We can deduce that he was present." },
      { word: "deficit", meaning: "a lack or shortage", example: "The budget shows a large deficit." },
      { word: "derive", meaning: "to get or obtain from a source", example: "The word derives from Latin." },
      { word: "deteriorate", meaning: "to become worse", example: "The patient's condition deteriorated." },
      { word: "deviate", meaning: "to go off course", example: "He deviated from the original route." },
      { word: "diminish", meaning: "to reduce or lessen", example: "His power began to diminish." },
      { word: "elaborate", meaning: "to explain in detail", example: "Please elaborate on your point." },
      { word: "empirical", meaning: "based on observation or experience", example: "The theory lacks empirical support." },
      { word: "endorse", meaning: "to support or approve", example: "The athlete endorsed the product." },
      { word: "eradicate", meaning: "to completely remove", example: "The disease was eradicated." },
      { word: "erratic", meaning: "unpredictable or inconsistent", example: "His behavior was erratic." },
      { word: "evaluate", meaning: "to judge or assess", example: "We need to evaluate the results." },
      { word: "exacerbate", meaning: "to make worse", example: "The drought exacerbated food shortages." },
      { word: "feasible", meaning: "possible or achievable", example: "That plan is not feasible." },
      { word: "fluctuate", meaning: "to change irregularly", example: "Prices fluctuate during the year." },
      { word: "formulate", meaning: "to create or develop", example: "The committee formulated new policies." },
      { word: "hypothesis", meaning: "an educated guess", example: "They tested the hypothesis." },
      { word: "implication", meaning: "a possible consequence", example: "What are the implications of this decision?" },
      { word: "incentive", meaning: "a motivation or reward", example: "Tax breaks are an incentive to invest." },
      { word: "inherent", meaning: "existing naturally", example: "Risk is inherent in investing." },
      { word: "integrate", meaning: "to combine into a whole", example: "The students were integrated into the class." },
      { word: "intervene", meaning: "to come between events", example: "The teacher had to intervene." },
      { word: "justify", meaning: "to prove right or reasonable", example: "How do you justify your actions?" },
      { word: "legitimate", meaning: "lawful or acceptable", example: "That is a legitimate concern." },
      { word: "manipulate", meaning: "to control skillfully", example: "He manipulated the data." },
      { word: "notion", meaning: "an idea or belief", example: "She rejected the notion." },
      { word: "obscure", meaning: "unclear or hidden", example: "The meaning is obscure." },
      { word: "paradigm", meaning: "a model or pattern", example: "This marks a new paradigm in science." },
      { word: "perceive", meaning: "to become aware of", example: "I perceive a change in attitude." },
      { word: "phenomenon", meaning: "an observable event", example: "Lightning is a natural phenomenon." },
      { word: "plausible", meaning: "believable or reasonable", example: "His story seems plausible." },
      { word: "precede", meaning: "to come before", example: "Dark clouds preceded the storm." },
      { word: "preliminary", meaning: "initial or preparatory", example: "These are preliminary results." },
      { word: "prevalent", meaning: "widespread", example: "This belief is prevalent in rural areas." },
      { word: "profound", meaning: "deep or intense", example: "Her speech had a profound impact." }
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

  const getCurrentWords = () => {
    if (!selectedLevel) return [];
    return vocabularyData[selectedLevel as keyof typeof vocabularyData];
  };

  const getCurrentWord = () => {
    const words = getCurrentWords();
    return words[currentWordIndex];
  };

  const handleKnowWord = () => {
    setMasteredWords(prev => new Set([...prev, currentWordIndex]));
    setUnknownWords(prev => {
      const newSet = new Set(prev);
      newSet.delete(currentWordIndex);
      return newSet;
    });
    nextWord();
  };

  const handleDontKnowWord = () => {
    setUnknownWords(prev => new Set([...prev, currentWordIndex]));
    setMasteredWords(prev => {
      const newSet = new Set(prev);
      newSet.delete(currentWordIndex);
      return newSet;
    });
    nextWord();
  };

  const nextWord = () => {
    const words = getCurrentWords();
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
      setShowDefinition(false);
    } else {
      setCurrentWordIndex(0);
      setShowDefinition(false);
    }
  };

  const resetPractice = () => {
    setCurrentWordIndex(0);
    setShowDefinition(false);
    setMasteredWords(new Set());
    setUnknownWords(new Set());
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

  const getProgressStats = () => {
    const words = getCurrentWords();
    const totalWords = words.length;
    const mastered = masteredWords.size;
    const reviewing = unknownWords.size;
    const learning = totalWords - mastered - reviewing;
    
    return { mastered, reviewing, learning, totalWords };
  };

  if (!selectedLevel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">Vocabulary Practice</h1>
              <p className="text-white/80 mt-2">Choose your difficulty level to start practicing</p>
            </div>
            
            <div className="w-24"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="vocabulary" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 border-white/20">
                <TabsTrigger value="vocabulary" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">Vocabulary Builder</TabsTrigger>
                <TabsTrigger value="quiz" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">Vocabulary Quiz</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vocabulary" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(vocabularyData).map(([level, words]) => (
                    <Card 
                      key={level} 
                      className="cursor-pointer transition-all duration-300 hover:scale-105 bg-white/10 border-white/20 text-white backdrop-blur-sm"
                      onClick={() => setSelectedLevel(level)}
                    >
                      <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">{level} Words</h3>
                        <div className="text-4xl font-bold mb-4 text-green-400">{words.length}</div>
                        <p className="text-white/80 mb-6">
                          {level === 'Easy' ? 'Basic vocabulary for TOEFL beginners' : 
                           level === 'Medium' ? 'Intermediate vocabulary for TOEFL preparation' :
                           'Advanced vocabulary for TOEFL mastery'}
                        </p>
                        <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                          Start Practice
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="quiz" className="mt-8">
                <div className="max-w-2xl mx-auto">
                  <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                    <CardContent className="p-8">
                      {!showQuizResults ? (
                        <>
                          <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-xl font-bold">Question {currentQuizQuestion + 1} of {quizQuestions.length}</h3>
                              <Badge variant="outline" className="border-white/20 text-white">
                                {Math.round(((currentQuizQuestion + 1) / quizQuestions.length) * 100)}%
                              </Badge>
                            </div>
                            <h2 className="text-2xl font-semibold mb-6">{quizQuestions[currentQuizQuestion].question}</h2>
                          </div>

                          <div className="space-y-3 mb-6">
                            {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                              <Button
                                key={index}
                                variant={quizAnswers[currentQuizQuestion] === index ? "default" : "outline"}
                                className={`w-full justify-start p-4 h-auto ${
                                  quizAnswers[currentQuizQuestion] === index 
                                    ? 'bg-white text-purple-700' 
                                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                                }`}
                                onClick={() => handleQuizAnswer(index)}
                              >
                                <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}</span>
                                {option}
                              </Button>
                            ))}
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              onClick={() => setCurrentQuizQuestion(prev => Math.max(0, prev - 1))}
                              disabled={currentQuizQuestion === 0}
                              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                            >
                              Previous
                            </Button>
                            <Button
                              onClick={nextQuizQuestion}
                              disabled={quizAnswers[currentQuizQuestion] === undefined}
                              className="bg-white text-purple-700 hover:bg-white/90 flex items-center gap-2"
                            >
                              {currentQuizQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      ) : (
                        <div className="text-center">
                          <h2 className="text-2xl font-bold mb-6">Quiz Results</h2>
                          <div className="mb-6">
                            <div className="text-4xl font-bold text-green-400 mb-2">
                              {getQuizScore()}/{quizQuestions.length}
                            </div>
                            <p className="text-white/80">
                              You scored {Math.round((getQuizScore() / quizQuestions.length) * 100)}%
                            </p>
                          </div>
                          <Button 
                            onClick={resetQuiz} 
                            className="bg-white text-purple-700 hover:bg-white/90 flex items-center gap-2 mx-auto"
                          >
                            <RotateCcw className="h-4 w-4" />
                            Take Quiz Again
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  const currentWord = getCurrentWord();
  const stats = getProgressStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={() => setSelectedLevel(null)}
            className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            {selectedLevel} Words
          </Button>
          
          <div className="flex items-center gap-2 text-white">
            <RotateCcw className="h-4 w-4" />
            <span className="text-sm">Words you don't know will reappear later</span>
          </div>
        </div>

        {/* Account creation banner */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-green-500 text-white p-4 rounded-lg">
            <p className="text-center">
              You should <span className="underline cursor-pointer">create an account</span> to save your progress. It only takes a minute!
            </p>
          </div>
        </div>

        {/* Main word card */}
        <div className="max-w-2xl mx-auto mb-6">
          <Card className="bg-white min-h-[300px] relative">
            <Button
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700"
              size="sm"
            >
              NEW WORD
            </Button>
            
            <CardContent className="p-8 flex flex-col justify-center min-h-[300px]">
              {!showDefinition ? (
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">{currentWord?.word}</h1>
                  <p className="text-gray-500 text-lg cursor-pointer" onClick={() => setShowDefinition(true)}>
                    Click to see definition and example →
                  </p>
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentWord?.word}</h1>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">verb:</span> {currentWord?.meaning}
                  </p>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    {currentWord?.example}
                  </p>
                  
                  {/* Know/Don't know buttons */}
                  <div className="mt-8 space-y-3">
                    <Button
                      onClick={handleKnowWord}
                      className="w-full bg-green-500 hover:bg-green-600 text-white p-4 text-lg"
                    >
                      <Check className="h-5 w-5 mr-2" />
                      I knew this word
                    </Button>
                    <Button
                      onClick={handleDontKnowWord}
                      className="w-full bg-red-500 hover:bg-red-600 text-white p-4 text-lg"
                    >
                      <X className="h-5 w-5 mr-2" />
                      I didn't know this word
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Progress bars */}
        <div className="max-w-2xl mx-auto space-y-4 text-white">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span>You have mastered {stats.mastered} out of {stats.totalWords} words</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(stats.mastered / stats.totalWords) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span>You are reviewing {stats.reviewing} out of {stats.totalWords} words</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(stats.reviewing / stats.totalWords) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span>You are learning {stats.learning} out of {stats.totalWords} words</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(stats.learning / stats.totalWords) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-white/80">
            Have feedback about this card? Please email{' '}
            <span className="underline cursor-pointer">help@redu.com</span> ☺
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingPracticeList;