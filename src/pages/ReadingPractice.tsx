
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ReadingPractice = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(7).fill(''));
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [isFinished, setIsFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const passage = `The emergence of cities marked one of the most significant developments in human history. Before urban centers existed, humans lived in small, nomadic groups of hunter-gatherers. The transition from these mobile communities to settled, complex societies was largely made possible by the advent of agriculture, which allowed for the production of surplus food. With a stable food supply, populations could grow, and not everyone was required to be directly involved in food production. This development led to the creation of specialized roles in society, such as artisans, traders, and rulers.

Archaeological evidence suggests that some of the earliest cities emerged in Mesopotamia, in the fertile region between the Tigris and Euphrates rivers, around 3500 BCE. Cities such as Uruk, Ur, and Eridu showcased remarkable innovations for their time, including irrigation systems, written records, and monumental architecture. These urban centers became hubs of economic activity, religious worship, and political power.

Urbanization brought both advantages and challenges. On the positive side, cities enabled large-scale cooperation, leading to impressive achievements in art, architecture, and governance. The concentration of people and resources fostered trade networks and cultural exchange. However, urban living also introduced new problems. Overcrowding, disease, social inequality, and conflict over resources became persistent issues in many ancient cities.

Historians debate the precise causes and consequences of early urbanization. Some argue that environmental factors, such as access to fertile land and reliable water sources, were the primary drivers. Others suggest that social or religious factors played a key role, as urban centers often contained important temples and served as ceremonial hubs. Whatever the initial impetus, the rise of cities transformed human society, laying the groundwork for modern civilization.`;

  const questions = [
    {
      question: "What is the main topic of the passage?",
      options: [
        "The decline of ancient cities",
        "The agricultural techniques of early civilizations",
        "The origins and impacts of urbanization",
        "The religious practices of Mesopotamian societies"
      ]
    },
    {
      question: "According to the passage, what development made the emergence of cities possible?",
      options: [
        "The discovery of metal tools",
        "The domestication of animals for labor",
        "The invention of written language",
        "The establishment of agriculture"
      ]
    },
    {
      question: "Which of the following is NOT mentioned as a feature of early Mesopotamian cities?",
      options: [
        "Irrigation systems",
        "Trade networks with distant lands",
        "Written records",
        "Monumental architecture"
      ]
    },
    {
      question: "What advantage of cities is mentioned in the passage?",
      options: [
        "Freedom from disease",
        "Elimination of social inequality",
        "Large-scale cooperation",
        "Stable population sizes"
      ]
    },
    {
      question: "The author mentions 'overcrowding, disease, social inequality, and conflict over resources' in order to:",
      options: [
        "Argue that cities were harmful to early humans",
        "Highlight the disadvantages associated with urban living",
        "Show that ancient societies were poorly organized",
        "Suggest reasons why cities eventually declined"
      ]
    },
    {
      question: "Which of the following best expresses the organization of the passage?",
      options: [
        "A historical event is described, followed by its causes and effects",
        "Several unrelated historical facts are listed",
        "A controversial theory is presented, and evidence is given to support it",
        "A problem is identified, and possible solutions are proposed"
      ]
    },
    {
      question: "What does the author imply about historians' views on urbanization?",
      options: [
        "They unanimously agree on its causes",
        "They believe environmental factors were unimportant",
        "They debate the reasons behind its emergence",
        "They consider it a minor event in human history"
      ]
    }
  ];

  const correctAnswers = ['C', 'D', 'B', 'C', 'B', 'A', 'C'];

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft, isFinished]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = String.fromCharCode(65 + optionIndex); // Convert to A, B, C, D
    setAnswers(newAnswers);
  };

  const handleFinish = () => {
    setIsFinished(true);
    setShowResults(true);
    
    const correctCount = answers.reduce((count, answer, index) => {
      return count + (answer === correctAnswers[index] ? 1 : 0);
    }, 0);

    toast({
      title: "Practice Complete!",
      description: `You scored ${correctCount} out of ${questions.length} questions correctly.`,
    });
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const correctCount = answers.reduce((count, answer, index) => {
    return count + (answer === correctAnswers[index] ? 1 : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {formatTime(timeLeft)}
            </Badge>
            <Button 
              onClick={handleFinish}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={isFinished}
            >
              Finish Test
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Left side - Passage */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">
                📖 The Origins of Urbanization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {passage}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right side - Questions */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  Question {currentQuestion + 1} of {questions.length}
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => {
                    const optionLetter = String.fromCharCode(65 + index);
                    const isSelected = answers[currentQuestion] === optionLetter;
                    const isCorrect = showResults && correctAnswers[currentQuestion] === optionLetter;
                    const isWrong = showResults && isSelected && !isCorrect;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => !isFinished && handleAnswerSelect(index)}
                        disabled={isFinished}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          isCorrect
                            ? 'border-green-500 bg-green-50'
                            : isWrong
                            ? 'border-red-500 bg-red-50'
                            : isSelected
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`font-medium ${
                            isCorrect
                              ? 'text-green-700'
                              : isWrong
                              ? 'text-red-700'
                              : isSelected
                              ? 'text-blue-700'
                              : 'text-gray-600'
                          }`}>
                            {optionLetter})
                          </span>
                          <span className={`${
                            isCorrect
                              ? 'text-green-900'
                              : isWrong
                              ? 'text-red-900'
                              : isSelected
                              ? 'text-blue-900'
                              : 'text-gray-700'
                          }`}>
                            {option}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {showResults && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Results Summary:</h4>
                    <p className="text-gray-700">
                      You answered {correctCount} out of {questions.length} questions correctly 
                      ({Math.round((correctCount / questions.length) * 100)}%)
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReadingPractice;
