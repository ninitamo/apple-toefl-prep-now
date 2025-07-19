import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface ToeflGrammarQuizProps {
  quizSet: number;
  onBack: () => void;
}

const ToeflGrammarQuiz: React.FC<ToeflGrammarQuizProps> = ({ quizSet, onBack }) => {
  const quizData = {
    1: [
      {
        id: 1,
        question: "Which sentence is correct?",
        options: ["He don't like spinach.", "He doesn't likes spinach.", "He doesn't like spinach.", "He didn't liked spinach."],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Choose the correct article: He bought ____ umbrella yesterday.",
        options: ["a", "an", "the", "no article needed"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Choose the correct plural form:",
        options: ["childs", "childes", "children", "childrens"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "Which sentence uses correct subject-verb agreement?",
        options: ["The group of students are waiting outside.", "The group of students is waiting outside.", "The group of students were waiting outside.", "The group of students be waiting outside."],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Which sentence uses correct word order for an adjective?",
        options: ["She wore red beautiful a dress.", "She wore a beautiful red dress.", "She wore a red dress beautiful.", "She wore a dress beautiful red."],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Choose the correct conjunction: She was tired, ____ she kept working.",
        options: ["because", "so", "although", "but"],
        correctAnswer: 3
      },
      {
        id: 7,
        question: "Which sentence uses passive voice?",
        options: ["The manager approved the request.", "They are writing the essay.", "The essay was written by them.", "He writes the report daily."],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Choose the correct form: I look forward to ____ you.",
        options: ["meet", "meets", "meeting", "met"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Choose the correct modal verb: You ____ see a doctor immediately.",
        options: ["must", "might", "can", "shall"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Identify the correct comparison form: This book is ____ than the other one.",
        options: ["interesting", "more interesting", "most interesting", "interestinger"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "Which sentence avoids a sentence fragment?",
        options: ["Running through the forest.", "Although it was raining.", "We canceled the picnic.", "After the class ended."],
        correctAnswer: 2
      },
      {
        id: 12,
        question: "Choose the correct verb tense: She ____ to Paris last summer.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "Select the correct conditional: If he studies, he ____ the exam.",
        options: ["passed", "will pass", "passes", "would pass"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "Choose the grammatically correct sentence.",
        options: ["He has finished his work yesterday.", "He have finished his work yesterday.", "He finished his work yesterday.", "He finishing his work yesterday."],
        correctAnswer: 2
      },
      {
        id: 15,
        question: "Identify the correct preposition: She is good ____ math.",
        options: ["on", "in", "at", "for"],
        correctAnswer: 2
      }
    ],
    2: [
      {
        id: 1,
        question: "Identify the correct comparison form: This book is ____ than the other one.",
        options: ["interesting", "more interesting", "most interesting", "interestinger"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Choose the correct article: He bought ____ umbrella yesterday.",
        options: ["a", "an", "the", "no article needed"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which sentence uses passive voice?",
        options: ["The manager approved the request.", "They are writing the essay.", "The essay was written by them.", "He writes the report daily."],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "Choose the correct verb tense: She ____ to Paris last summer.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "Which sentence uses correct subject–verb agreement?",
        options: ["The group of students are waiting outside.", "The group of students is waiting outside.", "The group of students were waiting outside.", "The group of students be waiting outside."],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which sentence is correct?",
        options: ["He don't like spinach.", "He doesn't likes spinach.", "He doesn't like spinach.", "He didn't liked spinach."],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "Choose the correct conjunction: She was tired, ____ she kept working.",
        options: ["because", "so", "although", "but"],
        correctAnswer: 3
      },
      {
        id: 8,
        question: "Choose the correct form: I look forward to ____ you.",
        options: ["meet", "meets", "meeting", "met"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Select the correct conditional: If he studies, he ____ the exam.",
        options: ["passed", "will pass", "passes", "would pass"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Choose the grammatically correct sentence.",
        options: ["He has finished his work yesterday.", "He have finished his work yesterday.", "He finished his work yesterday.", "He finishing his work yesterday."],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "Choose the correct modal verb: You ____ see a doctor immediately.",
        options: ["must", "might", "can", "shall"],
        correctAnswer: 0
      },
      {
        id: 12,
        question: "Which sentence uses correct word order for an adjective?",
        options: ["She wore red beautiful a dress.", "She wore a beautiful red dress.", "She wore a red dress beautiful.", "She wore a dress beautiful red."],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "Which sentence avoids a sentence fragment?",
        options: ["Running through the forest.", "Although it was raining.", "We canceled the picnic.", "After the class ended."],
        correctAnswer: 2
      },
      {
        id: 14,
        question: "Identify the correct preposition: She is good ____ math.",
        options: ["on", "in", "at", "for"],
        correctAnswer: 2
      },
      {
        id: 15,
        question: "Choose the correct plural form:",
        options: ["childs", "childes", "children", "childrens"],
        correctAnswer: 2
      }
    ],
    3: [
      {
        id: 1,
        question: "Choose the correct plural form:",
        options: ["childs", "childes", "children", "childrens"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which sentence avoids a sentence fragment?",
        options: ["Running through the forest.", "Although it was raining.", "We canceled the picnic.", "After the class ended."],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Identify the correct preposition: She is good ____ math.",
        options: ["on", "in", "at", "for"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "Which sentence uses passive voice?",
        options: ["The manager approved the request.", "They are writing the essay.", "The essay was written by them.", "He writes the report daily."],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "Choose the correct modal verb: You ____ see a doctor immediately.",
        options: ["must", "might", "can", "shall"],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "Identify the correct comparison form: This book is ____ than the other one.",
        options: ["interesting", "more interesting", "most interesting", "interestinger"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Which sentence is correct?",
        options: ["He don't like spinach.", "He doesn't likes spinach.", "He doesn't like spinach.", "He didn't liked spinach."],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Choose the correct verb tense: She ____ to Paris last summer.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Select the correct conditional: If he studies, he ____ the exam.",
        options: ["passed", "will pass", "passes", "would pass"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Choose the correct article: He bought ____ umbrella yesterday.",
        options: ["a", "an", "the", "no article needed"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "Choose the grammatically correct sentence.",
        options: ["He has finished his work yesterday.", "He have finished his work yesterday.", "He finished his work yesterday.", "He finishing his work yesterday."],
        correctAnswer: 2
      },
      {
        id: 12,
        question: "Which sentence uses correct word order for an adjective?",
        options: ["She wore red beautiful a dress.", "She wore a beautiful red dress.", "She wore a red dress beautiful.", "She wore a dress beautiful red."],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "Choose the correct conjunction: She was tired, ____ she kept working.",
        options: ["because", "so", "although", "but"],
        correctAnswer: 3
      },
      {
        id: 14,
        question: "Choose the correct form: I look forward to ____ you.",
        options: ["meet", "meets", "meeting", "met"],
        correctAnswer: 2
      },
      {
        id: 15,
        question: "Which sentence uses correct subject-verb agreement?",
        options: ["The group of students are waiting outside.", "The group of students is waiting outside.", "The group of students were waiting outside.", "The group of students be waiting outside."],
        correctAnswer: 1
      }
    ],
    4: [
      {
        id: 1,
        question: "Which sentence is correct?",
        options: ["He don't like spinach.", "He doesn't likes spinach.", "He doesn't like spinach.", "He didn't liked spinach."],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Identify the correct preposition: She is good ____ math.",
        options: ["on", "in", "at", "for"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Choose the correct conjunction: She was tired, ____ she kept working.",
        options: ["because", "so", "although", "but"],
        correctAnswer: 3
      },
      {
        id: 4,
        question: "Choose the correct plural form:",
        options: ["childs", "childes", "children", "childrens"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "Which sentence uses correct subject–verb agreement?",
        options: ["The group of students are waiting outside.", "The group of students is waiting outside.", "The group of students were waiting outside.", "The group of students be waiting outside."],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which sentence uses correct word order for an adjective?",
        options: ["She wore red beautiful a dress.", "She wore a beautiful red dress.", "She wore a red dress beautiful.", "She wore a dress beautiful red."],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Choose the correct form: I look forward to ____ you.",
        options: ["meet", "meets", "meeting", "met"],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Choose the grammatically correct sentence.",
        options: ["He has finished his work yesterday.", "He have finished his work yesterday.", "He finished his work yesterday.", "He finishing his work yesterday."],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Select the correct conditional: If he studies, he ____ the exam.",
        options: ["passed", "will pass", "passes", "would pass"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Identify the correct comparison form: This book is ____ than the other one.",
        options: ["interesting", "more interesting", "most interesting", "interestinger"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "Choose the correct verb tense: She ____ to Paris last summer.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2
      },
      {
        id: 12,
        question: "Which sentence uses passive voice?",
        options: ["The manager approved the request.", "They are writing the essay.", "The essay was written by them.", "He writes the report daily."],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "Which sentence avoids a sentence fragment?",
        options: ["Running through the forest.", "Although it was raining.", "We canceled the picnic.", "After the class ended."],
        correctAnswer: 2
      },
      {
        id: 14,
        question: "Choose the correct article: He bought ____ umbrella yesterday.",
        options: ["a", "an", "the", "no article needed"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "Choose the correct modal verb: You ____ see a doctor immediately.",
        options: ["must", "might", "can", "shall"],
        correctAnswer: 0
      }
    ],
    5: [
      {
        id: 1,
        question: "Which sentence uses correct word order for an adjective?",
        options: ["She wore red beautiful a dress.", "She wore a beautiful red dress.", "She wore a red dress beautiful.", "She wore a dress beautiful red."],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Choose the correct modal verb: You ____ see a doctor immediately.",
        options: ["must", "might", "can", "shall"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Select the correct conditional: If he studies, he ____ the exam.",
        options: ["passed", "will pass", "passes", "would pass"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Choose the correct conjunction: She was tired, ____ she kept working.",
        options: ["because", "so", "although", "but"],
        correctAnswer: 3
      },
      {
        id: 5,
        question: "Which sentence is correct?",
        options: ["He don't like spinach.", "He doesn't likes spinach.", "He doesn't like spinach.", "He didn't liked spinach."],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "Identify the correct comparison form: This book is ____ than the other one.",
        options: ["interesting", "more interesting", "most interesting", "interestinger"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Choose the correct verb tense: She ____ to Paris last summer.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Choose the grammatically correct sentence.",
        options: ["He has finished his work yesterday.", "He have finished his work yesterday.", "He finished his work yesterday.", "He finishing his work yesterday."],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "Identify the correct preposition: She is good ____ math.",
        options: ["on", "in", "at", "for"],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "Choose the correct form: I look forward to ____ you.",
        options: ["meet", "meets", "meeting", "met"],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "Choose the correct plural form:",
        options: ["childs", "childes", "children", "childrens"],
        correctAnswer: 2
      },
      {
        id: 12,
        question: "Which sentence avoids a sentence fragment?",
        options: ["Running through the forest.", "Although it was raining.", "We canceled the picnic.", "After the class ended."],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "Which sentence uses correct subject–verb agreement?",
        options: ["The group of students are waiting outside.", "The group of students is waiting outside.", "The group of students were waiting outside.", "The group of students be waiting outside."],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "Choose the correct article: He bought ____ umbrella yesterday.",
        options: ["a", "an", "the", "no article needed"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "Which sentence uses passive voice?",
        options: ["The manager approved the request.", "They are writing the essay.", "The essay was written by them.", "He writes the report daily."],
        correctAnswer: 2
      }
    ]
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = quizData[quizSet as keyof typeof quizData] || [];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] ?? null);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">
                Quiz Results - TOEFL Grammar Quiz Set {quizSet}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {score}/{questions.length}
                </div>
                <div className="text-2xl text-gray-700">
                  {percentage}% Correct
                </div>
                <Badge 
                  variant={percentage >= 80 ? "default" : percentage >= 60 ? "secondary" : "destructive"}
                  className="mt-2"
                >
                  {percentage >= 80 ? "Excellent" : percentage >= 60 ? "Good" : "Needs Improvement"}
                </Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Question Review:</h3>
                {questions.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-2">
                            {index + 1}. {question.question}
                          </p>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-600">
                              Your answer: <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                                {question.options[userAnswer]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-gray-600">
                                Correct answer: <span className="text-green-600">
                                  {question.options[question.correctAnswer]}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} variant="outline" className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Retake Quiz
                </Button>
                <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700">
                  Back to Quizzes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizCompleted && !showResult) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-center text-gray-900">
                Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-gray-600">
                You have completed all {questions.length} questions in TOEFL Grammar Quiz Set {quizSet}.
              </p>
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
                View Results
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mr-4 p-2 hover:bg-white/50 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">TOEFL Grammar Quiz Set {quizSet}</h1>
            <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
        </div>

        <Card className="bg-white shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-gray-900">
                Question {currentQuestion + 1}
              </CardTitle>
              <Badge variant="outline">
                {currentQuestion + 1}/{questions.length}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-lg text-gray-900 font-medium">
              {currentQ.question}
            </div>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border transition-all ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <Button 
                onClick={handlePrevious} 
                variant="outline" 
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNext} 
                disabled={selectedAnswer === null}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ToeflGrammarQuiz;