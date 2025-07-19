import React, { useState } from 'react';
import { ArrowLeft, PenTool, Clock, FileText, Target, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToeflGrammarQuiz from '@/components/ToeflGrammarQuiz';
import MixedPracticeQuiz from '@/components/MixedPracticeQuiz';

const WritingPracticeList = () => {
  const navigate = useNavigate();
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const [selectedMixedQuiz, setSelectedMixedQuiz] = useState<number | null>(null);

  const quizSets = [
    {
      id: 1,
      title: 'TOEFL Grammar Quiz Set 1',
      description: 'Test your knowledge of basic TOEFL grammar concepts',
      questions: 15,
      duration: '10-15 minutes',
      difficulty: 'Beginner',
      topics: ['Subject-Verb Agreement', 'Articles', 'Verb Tenses']
    },
    {
      id: 2,
      title: 'TOEFL Grammar Quiz Set 2',
      description: 'Practice intermediate grammar rules for TOEFL',
      questions: 15,
      duration: '10-15 minutes',
      difficulty: 'Intermediate',
      topics: ['Passive Voice', 'Conditionals', 'Modal Verbs']
    },
    {
      id: 3,
      title: 'TOEFL Grammar Quiz Set 3',
      description: 'Advanced grammar structures and complex sentences',
      questions: 15,
      duration: '10-15 minutes',
      difficulty: 'Intermediate',
      topics: ['Sentence Fragments', 'Prepositions', 'Comparative Forms']
    },
    {
      id: 4,
      title: 'TOEFL Grammar Quiz Set 4',
      description: 'Mixed grammar practice with various difficulty levels',
      questions: 15,
      duration: '10-15 minutes',
      difficulty: 'Advanced',
      topics: ['Mixed Grammar', 'Word Order', 'Complex Structures']
    },
    {
      id: 5,
      title: 'TOEFL Grammar Quiz Set 5',
      description: 'Comprehensive grammar review and practice',
      questions: 15,
      duration: '10-15 minutes',
      difficulty: 'Advanced',
      topics: ['All Grammar Areas', 'Review Practice', 'Test Preparation']
    }
  ];

  const mixedPracticeQuizzes = [
    {
      id: 1,
      title: 'Mixed Practice 1',
      description: 'Practice rephrasing, error correction, and concise writing',
      tasks: 5,
      duration: '15-20 minutes',
      difficulty: 'Beginner',
      topics: ['Rephrasing', 'Error Correction', 'Outline Building']
    },
    {
      id: 2,
      title: 'Mixed Practice 2',
      description: 'Advanced writing skills with structure and hooks',
      tasks: 5,
      duration: '15-20 minutes',
      difficulty: 'Intermediate',
      topics: ['Academic Writing', 'Hook Creation', 'Structure Building']
    },
    {
      id: 3,
      title: 'Mixed Practice 3',
      description: 'Complex sentence construction and essay organization',
      tasks: 5,
      duration: '15-20 minutes',
      difficulty: 'Intermediate',
      topics: ['Complex Sentences', 'Essay Organization', 'Writing Clarity']
    },
    {
      id: 4,
      title: 'Mixed Practice 4',
      description: 'Advanced grammar and sophisticated writing techniques',
      tasks: 5,
      duration: '15-20 minutes',
      difficulty: 'Advanced',
      topics: ['Advanced Grammar', 'Sophisticated Writing', 'Critical Thinking']
    },
    {
      id: 5,
      title: 'Mixed Practice 5',
      description: 'Comprehensive writing skills assessment',
      tasks: 5,
      duration: '15-20 minutes',
      difficulty: 'Advanced',
      topics: ['Comprehensive Review', 'All Writing Skills', 'Test Preparation']
    }
  ];

  const practiceExercises = [
    {
      id: 'practice-1',
      title: 'Writing Practice 1',
      description: 'Complete integrated and academic discussion writing tasks',
      duration: '50 minutes',
      tasks: '2 writing tasks',
      difficulty: 'Intermediate',
      topics: ['Environmental Science', 'Business Ethics'],
    },
    {
      id: 'practice-2',
      title: 'Writing Practice 2',
      description: 'Practice with integrated reading/listening and discussion tasks',
      duration: '50 minutes',
      tasks: '2 writing tasks',
      difficulty: 'Advanced',
      topics: ['Psychology', 'Urban Planning'],
    },
    {
      id: 'practice-3',
      title: 'Writing Practice 3',
      description: 'Academic writing with complex topics and discussions',
      duration: '50 minutes',
      tasks: '2 writing tasks',
      difficulty: 'Advanced',
      topics: ['Technology', 'Education Policy'],
    },
  ];

  const handlePracticeClick = (practiceId: string) => {
    navigate(`/practice/writing/${practiceId}`);
  };

  const handleExamPracticeClick = () => {
    navigate('/practice/writing/exam-mode');
  };

  const handleQuizClick = (quizId: number) => {
    setSelectedQuiz(quizId);
  };

  const handleMixedQuizClick = (quizId: number) => {
    setSelectedMixedQuiz(quizId);
  };

  const handleBackToQuizzes = () => {
    setSelectedQuiz(null);
    setSelectedMixedQuiz(null);
  };

  if (selectedQuiz) {
    return <ToeflGrammarQuiz quizSet={selectedQuiz} onBack={handleBackToQuizzes} />;
  }

  if (selectedMixedQuiz) {
    return <MixedPracticeQuiz quizSet={selectedMixedQuiz} onBack={handleBackToQuizzes} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mr-4 p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full dark:text-gray-200"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Writing Practice</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Master academic writing with integrated and discussion tasks</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Grammar Practice Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-blue-500" />
                Grammar Practice
              </h2>
              
              <div className="grid gap-4">
                {quizSets.map((quiz) => (
                  <Card key={quiz.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:border-gray-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{quiz.title}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                            {quiz.description}
                          </CardDescription>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4" />
                          {quiz.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FileText className="h-4 w-4" />
                          {quiz.questions} questions
                        </div>
                        <div className="text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            quiz.difficulty === 'Beginner' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : quiz.difficulty === 'Intermediate' 
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {quiz.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {quiz.topics.map((topic, index) => (
                            <span key={index} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={() => handleQuizClick(quiz.id)}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                      >
                        Start Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 grid gap-6">
                {practiceExercises.map((exercise) => (
                  <Card key={exercise.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:border-gray-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{exercise.title}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                            {exercise.description}
                          </CardDescription>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <PenTool className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4" />
                          {exercise.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FileText className="h-4 w-4" />
                          {exercise.tasks}
                        </div>
                        <div className="text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exercise.difficulty === 'Intermediate' 
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {exercise.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exercise.topics.map((topic, index) => (
                            <span key={index} className="bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={() => handlePracticeClick(exercise.id)}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                      >
                        Start Practice
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quiz Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
                <Target className="h-8 w-8 text-green-500" />
                Quiz
              </h2>
              
              <div className="grid gap-4">
                {mixedPracticeQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:border-gray-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{quiz.title}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                            {quiz.description}
                          </CardDescription>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4" />
                          {quiz.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FileText className="h-4 w-4" />
                          {quiz.tasks} tasks
                        </div>
                        <div className="text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            quiz.difficulty === 'Beginner' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : quiz.difficulty === 'Intermediate' 
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {quiz.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {quiz.topics.map((topic, index) => (
                            <span key={index} className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={() => handleMixedQuizClick(quiz.id)}
                        className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"
                      >
                        Start Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WritingPracticeList;
