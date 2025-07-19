import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, RotateCcw, Shuffle, Edit3, Target, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface MixedPracticeQuizProps {
  quizSet: number;
  onBack: () => void;
}

const MixedPracticeQuiz: React.FC<MixedPracticeQuizProps> = ({ quizSet, onBack }) => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showSample, setShowSample] = useState<{ [key: number]: boolean }>({});
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [organizedParts, setOrganizedParts] = useState<{ [key: number]: string[] }>({});

  const quizData = {
    1: {
      title: "Mixed Practice 1",
      tasks: [
        {
          type: "rephrase",
          prompt: "Rephrase This",
          original: "Many students do not like doing homework.",
          task: "Rewrite this in a more academic style.",
          sample: "A significant number of students express dissatisfaction with academic assignments outside the classroom."
        },
        {
          type: "fix",
          prompt: "Fix the Error",
          sentence: "The results shows a improvement.",
          correction: "The results show an improvement."
        },
        {
          type: "concise",
          prompt: "Choose the More Concise Version",
          options: [
            "There are many people who believe that reading books is helpful.",
            "Many people believe reading books is helpful."
          ],
          correct: 1
        },
        {
          type: "outline",
          prompt: "Outline Builder Task",
          description: "Organize these into essay parts:",
          parts: [
            "Thesis: \"Online learning is as effective as classroom learning.\"",
            "Reason 1: \"It allows flexibility in scheduling.\"",
            "Reason 2: \"Students can access a wider range of resources.\"",
            "Conclusion: \"Digital platforms offer equal learning opportunities.\""
          ]
        },
        {
          type: "hook",
          prompt: "Hook Challenge",
          question: "Should schools eliminate exams?",
          task: "Write an attention-grabbing opening sentence.",
          sample: "Imagine a world where your future doesn't depend on a two-hour test."
        }
      ]
    },
    2: {
      title: "Mixed Practice 2",
      tasks: [
        {
          type: "rephrase",
          prompt: "Rephrase This",
          original: "A lot of people use phones every day.",
          sample: "Mobile devices have become an essential part of daily life for many individuals."
        },
        {
          type: "fix",
          prompt: "Fix the Error",
          sentence: "The informations were helpful.",
          correction: "The information was helpful."
        },
        {
          type: "concise",
          prompt: "Choose the More Concise Version",
          options: [
            "In order to succeed, it is necessary for students to try very hard.",
            "To succeed, students must try hard."
          ],
          correct: 1
        },
        {
          type: "outline",
          prompt: "Outline Builder Task",
          description: "Arrange these:",
          parts: [
            "Thesis: \"Universities should offer more online courses.\"",
            "Reason 1: \"They increase accessibility.\"",
            "Reason 2: \"They reduce costs for students.\"",
            "Conclusion: \"Expanding online education benefits everyone.\""
          ]
        },
        {
          type: "hook",
          prompt: "Hook Challenge",
          question: "Are libraries still relevant in the digital age?",
          sample: "Even in a world of Google and e-books, libraries remain vital sanctuaries of knowledge."
        }
      ]
    },
    3: {
      title: "Mixed Practice 3",
      tasks: [
        {
          type: "rephrase",
          prompt: "Rephrase This",
          original: "The internet is good for students.",
          sample: "The internet provides valuable educational resources that benefit students significantly."
        },
        {
          type: "fix",
          prompt: "Fix the Error",
          sentence: "There is too much people in the room.",
          correction: "There are too many people in the room."
        },
        {
          type: "concise",
          prompt: "Choose the More Concise Version",
          options: [
            "He gave a speech that was long and full of unnecessary information.",
            "His speech was long and repetitive."
          ],
          correct: 1
        },
        {
          type: "outline",
          prompt: "Outline Builder Task",
          description: "Organize the following:",
          parts: [
            "Thesis: \"High school students should do volunteer work.\"",
            "Reason 1: \"It teaches responsibility.\"",
            "Reason 2: \"It helps build community awareness.\"",
            "Conclusion: \"Volunteering creates well-rounded individuals.\""
          ]
        },
        {
          type: "hook",
          prompt: "Hook Challenge",
          question: "Should we rely on robots in the future?",
          sample: "As machines become smarter, we must decide how much of our future we're willing to delegate to them."
        }
      ]
    },
    4: {
      title: "Mixed Practice 4",
      tasks: [
        {
          type: "rephrase",
          prompt: "Rephrase This",
          original: "I learned a lot from the experience.",
          sample: "The experience provided me with significant personal and intellectual growth."
        },
        {
          type: "fix",
          prompt: "Fix the Error",
          sentence: "He don't know how to drive.",
          correction: "He doesn't know how to drive."
        },
        {
          type: "concise",
          prompt: "Choose the More Concise Version",
          options: [
            "The building that was constructed last year has now been completed.",
            "The building finished last year is now complete."
          ],
          correct: 1
        },
        {
          type: "outline",
          prompt: "Outline Builder Task",
          description: "Sort the elements:",
          parts: [
            "Thesis: \"Teenagers should be limited in their screen time.\"",
            "Reason 1: \"Too much screen time affects sleep.\"",
            "Reason 2: \"It reduces physical activity.\"",
            "Conclusion: \"Limits encourage a healthier lifestyle.\""
          ]
        },
        {
          type: "hook",
          prompt: "Hook Challenge",
          question: "Is failure necessary for success?",
          sample: "Every great invention began with a failure—and that's what makes success possible."
        }
      ]
    },
    5: {
      title: "Mixed Practice 5",
      tasks: [
        {
          type: "rephrase",
          prompt: "Rephrase This",
          original: "People don't walk much anymore.",
          sample: "Modern lifestyles have led to a significant decrease in daily walking habits."
        },
        {
          type: "fix",
          prompt: "Fix the Error",
          sentence: "The team have finished their project.",
          correction: "The team has finished its project."
        },
        {
          type: "concise",
          prompt: "Choose the More Concise Version",
          options: [
            "Due to the fact that water was scarce, they decided to leave.",
            "Because water was scarce, they left."
          ],
          correct: 1
        },
        {
          type: "outline",
          prompt: "Outline Builder Task",
          description: "Match these to essay structure:",
          parts: [
            "Thesis: \"Art education should be funded in schools.\"",
            "Reason 1: \"It boosts creativity.\"",
            "Reason 2: \"It enhances emotional expression.\"",
            "Conclusion: \"Creative programs are essential for a balanced education.\""
          ]
        },
        {
          type: "hook",
          prompt: "Hook Challenge",
          question: "Should homework be banned?",
          sample: "For many students, homework is not reinforcement—it's a burden that follows them home."
        }
      ]
    }
  };

  const currentQuiz = quizData[quizSet as keyof typeof quizData];
  const currentTask = currentQuiz.tasks[currentTaskIndex];
  const totalTasks = currentQuiz.tasks.length;

  const handleNext = () => {
    if (currentTaskIndex < totalTasks - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(currentTaskIndex - 1);
    }
  };

  const handleShowSample = () => {
    setShowSample(prev => ({ ...prev, [currentTaskIndex]: true }));
  };

  const handleUserAnswer = (value: string) => {
    setUserAnswers(prev => ({ ...prev, [currentTaskIndex]: value }));
  };

  const handleMultipleChoice = (option: string) => {
    setSelectedAnswers(prev => ({ ...prev, [currentTaskIndex]: option }));
  };

  const renderTask = () => {
    switch (currentTask.type) {
      case 'rephrase':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">Original:</p>
              <p className="text-gray-800 dark:text-gray-200">{(currentTask as any).original}</p>
              {(currentTask as any).task && (
                <>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-3 mb-2">Task:</p>
                  <p className="text-gray-800 dark:text-gray-200">{(currentTask as any).task}</p>
                </>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your rephrased version:
              </label>
              <Textarea
                value={userAnswers[currentTaskIndex] || ''}
                onChange={(e) => handleUserAnswer(e.target.value)}
                placeholder="Write your academic version here..."
                className="min-h-24"
              />
            </div>
            {showSample[currentTaskIndex] && (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">✅ Sample:</p>
                <p className="text-gray-800 dark:text-gray-200">{currentTask.sample}</p>
              </div>
            )}
            {!showSample[currentTaskIndex] && (
              <Button onClick={handleShowSample} variant="outline" className="w-full">
                Show Sample Answer
              </Button>
            )}
          </div>
        );

      case 'fix':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-2">Sentence with error:</p>
              <p className="text-gray-800 dark:text-gray-200">{currentTask.sentence}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your correction:
              </label>
              <Textarea
                value={userAnswers[currentTaskIndex] || ''}
                onChange={(e) => handleUserAnswer(e.target.value)}
                placeholder="Write the corrected sentence here..."
                className="min-h-20"
              />
            </div>
            {showSample[currentTaskIndex] && (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">✅ Correction:</p>
                <p className="text-gray-800 dark:text-gray-200">{currentTask.correction}</p>
              </div>
            )}
            {!showSample[currentTaskIndex] && (
              <Button onClick={handleShowSample} variant="outline" className="w-full">
                Show Correct Answer
              </Button>
            )}
          </div>
        );

      case 'concise':
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              {currentTask.options?.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleMultipleChoice(option)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedAnswers[currentTaskIndex] === option
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-500">{String.fromCharCode(65 + index)})</span>
                    <p className="text-gray-800 dark:text-gray-200">{option}</p>
                    {showSample[currentTaskIndex] && index === currentTask.correct && (
                      <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {!showSample[currentTaskIndex] && (
              <Button onClick={handleShowSample} variant="outline" className="w-full">
                Show Correct Answer
              </Button>
            )}
          </div>
        );

      case 'outline':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">🧩 {currentTask.description}</p>
            </div>
            <div className="space-y-3">
              {currentTask.parts?.map((part, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-800 dark:text-gray-200">{part}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                These are already organized in the correct essay structure: Introduction → Body → Conclusion
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">✅ Correct Organization:</p>
                <p className="text-gray-800 dark:text-gray-200 text-sm mt-2">
                  Thesis → Supporting Reasons → Conclusion
                </p>
              </div>
            </div>
          </div>
        );

      case 'hook':
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-2">Prompt:</p>
              <p className="text-gray-800 dark:text-gray-200">{(currentTask as any).question}</p>
              {(currentTask as any).task && (
                <>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mt-3 mb-2">⏱ Task:</p>
                  <p className="text-gray-800 dark:text-gray-200">{(currentTask as any).task}</p>
                </>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your hook sentence:
              </label>
              <Textarea
                value={userAnswers[currentTaskIndex] || ''}
                onChange={(e) => handleUserAnswer(e.target.value)}
                placeholder="Write an attention-grabbing opening sentence..."
                className="min-h-20"
              />
            </div>
            {showSample[currentTaskIndex] && (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">✅ Sample:</p>
                <p className="text-gray-800 dark:text-gray-200">{currentTask.sample}</p>
              </div>
            )}
            {!showSample[currentTaskIndex] && (
              <Button onClick={handleShowSample} variant="outline" className="w-full">
                Show Sample Answer
              </Button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const getTaskIcon = () => {
    switch (currentTask.type) {
      case 'rephrase': return <Edit3 className="h-5 w-5" />;
      case 'fix': return <Target className="h-5 w-5" />;
      case 'concise': return <CheckCircle className="h-5 w-5" />;
      case 'outline': return <Shuffle className="h-5 w-5" />;
      case 'hook': return <FileText className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mr-4 p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{currentQuiz.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Task {currentTaskIndex + 1} of {totalTasks}: {currentTask.prompt}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                {getTaskIcon()}
                {currentTask.prompt}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {renderTask()}
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentTaskIndex === 0}
              variant="outline"
            >
              Previous
            </Button>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {currentTaskIndex + 1} / {totalTasks}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentTaskIndex === totalTasks - 1}
            >
              Next
            </Button>
          </div>

          {currentTaskIndex === totalTasks - 1 && (
            <div className="mt-8 text-center">
              <Button onClick={onBack} variant="outline" className="mr-4">
                <RotateCcw className="h-4 w-4 mr-2" />
                Back to Quizzes
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MixedPracticeQuiz;