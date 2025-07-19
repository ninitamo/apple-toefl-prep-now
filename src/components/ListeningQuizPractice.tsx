import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}

const ListeningQuizPractice = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const quizzes: Quiz[] = [
    {
      id: 1,
      title: 'TOEFL Listening Practice Quiz 1',
      questions: [
        {
          id: 1,
          question: 'Which word is closest in meaning to "advocate"?',
          options: ['Oppose', 'Support', 'Ignore', 'Dismiss'],
          correctAnswer: 1
        },
        {
          id: 2,
          question: 'What does the transition word "however" indicate?',
          options: ['Addition', 'Emphasis', 'Contrast', 'Cause and effect'],
          correctAnswer: 2
        },
        {
          id: 3,
          question: 'What can a speaker imply when they say something in a sarcastic tone?',
          options: ['They are enthusiastic', "They don't mean what they say", 'They are giving a definition', 'They are confused'],
          correctAnswer: 1
        },
        {
          id: 4,
          question: '"The professor digressed for a moment." What does "digress" mean?',
          options: ['Focus on the topic', 'Go deeper into the topic', 'Get off-topic', 'Argue against a point'],
          correctAnswer: 2
        },
        {
          id: 5,
          question: 'Which of these is a cause and effect transition?',
          options: ['Furthermore', 'As a result', 'On the contrary', 'For example'],
          correctAnswer: 1
        },
        {
          id: 6,
          question: 'What does it typically mean if a speaker pauses and says "Um…" or "Well…"?',
          options: ['They are expressing anger', 'They are changing topics', 'They are quoting someone', 'They are making a joke'],
          correctAnswer: 1
        },
        {
          id: 7,
          question: 'Which tone suggests the speaker is uncertain?',
          options: ['"I\'m absolutely sure."', '"I believe it might be…"', '"This clearly proves…"', '"It\'s definitely incorrect."'],
          correctAnswer: 1
        },
        {
          id: 8,
          question: 'Which is the correct order of a typical academic lecture structure?',
          options: ['Conclusion → Body → Introduction', 'Introduction → Body → Conclusion', 'Summary → Thesis → Explanation', 'Main Idea → Example → Title'],
          correctAnswer: 1
        },
        {
          id: 9,
          question: '"Let me elaborate on that point." What does "elaborate" mean?',
          options: ['Change', 'Clarify', 'Explain in more detail', 'Disagree'],
          correctAnswer: 2
        },
        {
          id: 10,
          question: '"This word is used metaphorically." What does that suggest?',
          options: ['It has a literal meaning', 'It has a poetic or symbolic meaning', "It's a technical term", 'It is being defined'],
          correctAnswer: 1
        },
        {
          id: 11,
          question: 'What does a speaker usually do right before giving an example?',
          options: ['Pause', 'Say "For instance" or "Such as"', 'Ask a question', 'Change the subject'],
          correctAnswer: 1
        },
        {
          id: 12,
          question: 'What is the function of a summary at the end of a lecture?',
          options: ['Add new ideas', 'Ask for feedback', 'Repeat key points', 'Make a joke'],
          correctAnswer: 2
        },
        {
          id: 13,
          question: '"This finding contradicts the earlier results." What does "contradicts" mean?',
          options: ['Confirms', 'Supports', 'Disagrees with', 'Explains further'],
          correctAnswer: 2
        },
        {
          id: 14,
          question: '"Clearly, this demonstrates the concept." This phrase indicates the speaker is...',
          options: ['Unsure', 'Presenting evidence', 'Asking a question', 'Changing the topic'],
          correctAnswer: 1
        },
        {
          id: 15,
          question: 'What does the phrase "to some extent" indicate?',
          options: ['Total certainty', 'Complete disagreement', 'Partial agreement or truth', 'Complete denial'],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 2,
      title: 'TOEFL Listening Quiz 2',
      questions: [
        {
          id: 1,
          question: 'Which of the following is a signal that a speaker is giving an example?',
          options: ['"In summary"', '"For instance"', '"However"', '"In contrast"'],
          correctAnswer: 1
        },
        {
          id: 2,
          question: '"The professor\'s tone was skeptical." What does "skeptical" mean?',
          options: ['Completely convinced', 'Doubtful or questioning', 'Angry', 'Joyful'],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'What does "emphasize" mean in the context of a lecture?',
          options: ['Repeat something quietly', 'Give less importance', 'Stress or highlight a point', 'Skip over a detail'],
          correctAnswer: 2
        },
        {
          id: 4,
          question: 'What is the purpose of a rhetorical question?',
          options: ['To get an answer', 'To confuse the listener', 'To encourage the listener to think', 'To introduce a new speaker'],
          correctAnswer: 2
        },
        {
          id: 5,
          question: 'Which of the following phrases shows comparison?',
          options: ['"As well as"', '"Because of this"', '"On the other hand"', '"Even though"'],
          correctAnswer: 0
        },
        {
          id: 6,
          question: 'What is the meaning of "retain"?',
          options: ['Forget', 'Repeat', 'Keep or hold', 'Change'],
          correctAnswer: 2
        },
        {
          id: 7,
          question: 'A speaker says: "So, to wrap things up…" What are they doing?',
          options: ['Introducing a topic', 'Telling a joke', 'Concluding', 'Asking a question'],
          correctAnswer: 2
        },
        {
          id: 8,
          question: 'What does "illustrate" mean in a lecture context?',
          options: ['To draw pictures', 'To explain using examples', 'To criticize', 'To summarize'],
          correctAnswer: 1
        },
        {
          id: 9,
          question: 'What kind of word is "however"?',
          options: ['Cause', 'Example', 'Contrast', 'Emphasis'],
          correctAnswer: 2
        },
        {
          id: 10,
          question: 'What does a flat, monotone voice usually suggest?',
          options: ['Strong emotion', 'Indifference or routine', 'Excitement', 'Confusion'],
          correctAnswer: 1
        },
        {
          id: 11,
          question: 'The word "compile" means:',
          options: ['To destroy', 'To collect and organize', 'To argue', 'To postpone'],
          correctAnswer: 1
        },
        {
          id: 12,
          question: 'What\'s the function of the phrase "What this means is…" in a lecture?',
          options: ['Change topic', "Emphasize a speaker's feeling", 'Clarify a point', 'Disagree with something'],
          correctAnswer: 2
        },
        {
          id: 13,
          question: 'Which transition word shows contrast?',
          options: ['Therefore', 'For example', 'Yet', 'In addition'],
          correctAnswer: 2
        },
        {
          id: 14,
          question: 'What does the speaker usually do after saying "Let\'s move on"?',
          options: ['Pause for questions', 'Change the subject', 'Conclude', 'Repeat the last sentence'],
          correctAnswer: 1
        },
        {
          id: 15,
          question: 'If something is "inevitable," what does it mean?',
          options: ['Optional', 'Unavoidable', 'Not serious', 'Unexpected'],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 3,
      title: 'TOEFL Listening Quiz 3',
      questions: [
        {
          id: 1,
          question: 'What does the transition "on the contrary" indicate?',
          options: ['Emphasis', 'Agreement', 'Opposition', 'Summary'],
          correctAnswer: 2
        },
        {
          id: 2,
          question: 'What does "conclude" mean?',
          options: ['Begin a new topic', 'End or summarize', 'Provide a definition', 'Ask a question'],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'What would a speaker likely do after saying, "Let me clarify that"?',
          options: ['Introduce a new point', 'Provide a definition or rephrase', 'Ask a question', 'End the discussion'],
          correctAnswer: 1
        },
        {
          id: 4,
          question: 'What does the word "essential" mean?',
          options: ['Unnecessary', 'Required or very important', 'Small or minor', 'Optional'],
          correctAnswer: 1
        },
        {
          id: 5,
          question: 'What is the function of the phrase "For example"?',
          options: ['Show comparison', 'Express doubt', 'Provide an illustration', 'Introduce a new speaker'],
          correctAnswer: 2
        },
        {
          id: 6,
          question: 'What does it suggest when a speaker uses a rising intonation at the end of a sentence?',
          options: ['They are ending a paragraph', 'They are asking a question', 'They are expressing anger', 'They are making a command'],
          correctAnswer: 1
        },
        {
          id: 7,
          question: '"The results were consistent across all experiments." What does "consistent" mean here?',
          options: ['Changing', 'Reliable and repeated', 'Contradictory', 'Accidental'],
          correctAnswer: 1
        },
        {
          id: 8,
          question: 'What\'s the purpose of a speaker using the phrase "This supports the idea that…"?',
          options: ['Express disagreement', 'Clarify instructions', 'Show evidence', 'Repeat something'],
          correctAnswer: 2
        },
        {
          id: 9,
          question: 'Which phrase is a signal for cause and effect?',
          options: ['On the other hand', 'Due to', 'Such as', 'Likewise'],
          correctAnswer: 1
        },
        {
          id: 10,
          question: 'What does "evaluate" mean?',
          options: ['Avoid', 'Discuss emotionally', 'Judge or assess', 'Repeat without change'],
          correctAnswer: 2
        },
        {
          id: 11,
          question: 'What\'s the speaker likely doing if they say, "Let\'s take a closer look"?',
          options: ['Ending the lecture', 'Giving an example', 'Zooming into details', 'Asking a question'],
          correctAnswer: 2
        },
        {
          id: 12,
          question: 'What does "allocate" mean?',
          options: ['Hide something', 'Assign or distribute', 'Delay a task', 'Summarize'],
          correctAnswer: 1
        },
        {
          id: 13,
          question: 'Which transition indicates a summary is coming?',
          options: ['In conclusion', 'Whereas', 'Such as', 'In contrast'],
          correctAnswer: 0
        },
        {
          id: 14,
          question: 'If a professor says "This contradicts the earlier theory," what is happening?',
          options: ['Repetition', 'Comparison', 'Conflict or disagreement', 'Clarification'],
          correctAnswer: 2
        },
        {
          id: 15,
          question: 'What does the phrase "in terms of" typically introduce?',
          options: ['A result', 'A condition', 'A specific aspect', 'A question'],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 4,
      title: 'TOEFL Listening Quiz 4',
      questions: [
        {
          id: 1,
          question: 'Which word means "to give a brief explanation"?',
          options: ['Summarize', 'Complicate', 'Expand', 'Mislead'],
          correctAnswer: 0
        },
        {
          id: 2,
          question: 'What does the transition "nevertheless" express?',
          options: ['Cause', 'Contrast or concession', 'Addition', 'Result'],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'When a speaker says, "I\'m not sure, but…" what are they showing?',
          options: ['Certainty', 'Doubt or uncertainty', 'Anger', 'Excitement'],
          correctAnswer: 1
        },
        {
          id: 4,
          question: 'What does "emphasize" mean?',
          options: ['To highlight or stress', 'To ignore', 'To forget', 'To confuse'],
          correctAnswer: 0
        },
        {
          id: 5,
          question: 'What is the function of the phrase "as a result"?',
          options: ['To add information', 'To show cause and effect', 'To compare ideas', 'To give an example'],
          correctAnswer: 1
        },
        {
          id: 6,
          question: '"The speaker\'s tone was enthusiastic." What does "enthusiastic" mean?',
          options: ['Bored', 'Excited or energetic', 'Angry', 'Confused'],
          correctAnswer: 1
        },
        {
          id: 7,
          question: 'Which phrase signals a conclusion?',
          options: ['In other words', 'To sum up', 'For example', 'However'],
          correctAnswer: 1
        },
        {
          id: 8,
          question: 'What does "interpret" mean?',
          options: ['To explain or understand the meaning', 'To reject', 'To memorize', 'To ignore'],
          correctAnswer: 0
        },
        {
          id: 9,
          question: 'Which transition shows addition?',
          options: ['Moreover', 'But', 'Although', 'Instead'],
          correctAnswer: 0
        },
        {
          id: 10,
          question: 'What is the purpose of rhetorical questions?',
          options: ['To get an answer', 'To make listeners think', 'To confuse', 'To end a discussion'],
          correctAnswer: 1
        },
        {
          id: 11,
          question: 'What does "precise" mean?',
          options: ['Vague', 'Exact or accurate', 'Long', 'Confusing'],
          correctAnswer: 1
        },
        {
          id: 12,
          question: 'What does the phrase "take into account" mean?',
          options: ['Ignore something', 'Consider something carefully', 'Make a guess', 'Forget'],
          correctAnswer: 1
        },
        {
          id: 13,
          question: 'When a speaker says "For instance," what do they do next?',
          options: ['Give an example', 'State a fact', 'Ask a question', 'Make a joke'],
          correctAnswer: 0
        },
        {
          id: 14,
          question: 'Which word means "to make something easier to understand"?',
          options: ['Complicate', 'Clarify', 'Hide', 'Delay'],
          correctAnswer: 1
        },
        {
          id: 15,
          question: 'What does "alternative" mean?',
          options: ['The only option', 'Another choice or option', 'A result', 'A problem'],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 5,
      title: 'TOEFL Listening Quiz 5',
      questions: [
        {
          id: 1,
          question: 'What does the transition word "therefore" show?',
          options: ['Contrast', 'Cause and effect', 'Addition', 'Clarification'],
          correctAnswer: 1
        },
        {
          id: 2,
          question: 'What does "summarize" mean?',
          options: ['To give detailed information', 'To explain briefly', 'To argue', 'To ignore'],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'If a speaker says, "I\'d like to point out…" what are they doing?',
          options: ['Changing the subject', 'Emphasizing an important detail', 'Asking a question', 'Concluding'],
          correctAnswer: 1
        },
        {
          id: 4,
          question: 'What does "infer" mean?',
          options: ['To guess based on evidence', 'To directly state', 'To question', 'To summarize'],
          correctAnswer: 0
        },
        {
          id: 5,
          question: 'What does the word "significant" mean?',
          options: ['Unimportant', 'Important or meaningful', 'Small', 'Difficult'],
          correctAnswer: 1
        },
        {
          id: 6,
          question: 'Which phrase signals a contrast?',
          options: ['As a result', 'On the other hand', 'For example', 'Furthermore'],
          correctAnswer: 1
        },
        {
          id: 7,
          question: 'What does "analyze" mean?',
          options: ['To examine carefully', 'To ignore', 'To guess', 'To summarize'],
          correctAnswer: 0
        },
        {
          id: 8,
          question: 'When a speaker says, "To illustrate this point…" what will they likely do?',
          options: ['Give an example', 'Change the topic', 'Summarize', 'Ask a question'],
          correctAnswer: 0
        },
        {
          id: 9,
          question: 'What does "accurate" mean?',
          options: ['Incorrect', 'Exact or correct', 'Confusing', 'Vague'],
          correctAnswer: 1
        },
        {
          id: 10,
          question: 'What does "contrast" mean?',
          options: ['To show similarities', 'To show differences', 'To explain', 'To ignore'],
          correctAnswer: 1
        },
        {
          id: 11,
          question: 'What does "clarify" mean?',
          options: ['To confuse', 'To make something clear', 'To change the topic', 'To summarize'],
          correctAnswer: 1
        },
        {
          id: 12,
          question: 'Which word means "to repeat something in a shorter way"?',
          options: ['Elaborate', 'Summarize', 'Analyze', 'Ignore'],
          correctAnswer: 1
        },
        {
          id: 13,
          question: 'What does "perspective" mean?',
          options: ['A way of looking at something', 'A fact', 'A question', 'A mistake'],
          correctAnswer: 0
        },
        {
          id: 14,
          question: 'What does "outline" mean?',
          options: ['To give a general description or plan', 'To memorize', 'To argue', 'To write in detail'],
          correctAnswer: 0
        },
        {
          id: 15,
          question: 'What does "hypothesis" mean?',
          options: ['A proven fact', 'An educated guess or prediction', 'A summary', 'A question'],
          correctAnswer: 1
        }
      ]
    }
  ];

  const currentQuiz = quizzes.find(quiz => quiz.id === parseInt(quizId || '1'));
  
  if (!currentQuiz) {
    return <div>Quiz not found</div>;
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    currentQuiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Quiz Results</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {currentQuiz.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      {percentage}%
                    </div>
                    <p className="text-xl text-gray-700 dark:text-gray-300">
                      You scored {score} out of {currentQuiz.questions.length} questions correctly
                    </p>
                  </div>

                  <div className="grid gap-2 mb-8">
                    {currentQuiz.questions.map((question, index) => (
                      <div key={question.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Question {index + 1}
                        </span>
                        {selectedAnswers[index] === question.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button onClick={resetQuiz} className="flex items-center gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Try Again
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/materials/listening')}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Practice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <Button
                variant="ghost"
                onClick={() => navigate('/materials/listening')}
                className="mr-4 p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{currentQuiz.title}</h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
                </p>
              </div>
            </div>

            <Card className="bg-white dark:bg-gray-800 shadow-xl mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-gray-100">
                  {currentQuestion.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                        selectedAnswers[currentQuestionIndex] === index
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span className="font-medium mr-3">
                        {String.fromCharCode(65 + index)})
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListeningQuizPractice;