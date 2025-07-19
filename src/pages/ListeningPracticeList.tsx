import React, { useState } from 'react';
import { ArrowLeft, Headphones, Target, BookOpen, Clock, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListeningVocabulary from '@/components/ListeningVocabulary';

const ListeningPracticeList = () => {
  const navigate = useNavigate();
  const [selectedPracticeType, setSelectedPracticeType] = useState<'quiz' | 'vocabulary' | null>(null);

  const handleBackToMainMenu = () => {
    setSelectedPracticeType(null);
  };

  const handleBackToVocabulary = () => {
    setSelectedPracticeType(null);
  };

  const quizExercises = [
    {
      id: 1,
      title: 'Campus Conversation: Library Resources',
      description: 'Listen to a conversation between a student and a librarian about research resources.',
      duration: '15 minutes',
      questions: 5,
      difficulty: 'Beginner',
      topics: ['Campus Conversations', 'Academic Resources']
    },
    {
      id: 2,
      title: 'Academic Lecture: Climate Science',
      description: 'Professor discusses the relationship between ocean currents and global climate patterns.',
      duration: '25 minutes',
      questions: 6,
      difficulty: 'Advanced',
      topics: ['Academic Lectures', 'Science']
    },
    {
      id: 3,
      title: 'Campus Conversation: Course Registration',
      description: 'Student seeks advice from an academic advisor about course selection.',
      duration: '12 minutes',
      questions: 5,
      difficulty: 'Intermediate',
      topics: ['Campus Conversations', 'Academic Planning']
    },
    {
      id: 4,
      title: 'Academic Lecture: Art History',
      description: 'Comprehensive overview of Renaissance painting techniques and cultural context.',
      duration: '28 minutes',
      questions: 8,
      difficulty: 'Advanced',
      topics: ['Academic Lectures', 'Art History']
    },
    {
      id: 5,
      title: 'Campus Service: Health Center',
      description: 'Student discusses health insurance options with campus health center staff.',
      duration: '10 minutes',
      questions: 4,
      difficulty: 'Beginner',
      topics: ['Campus Services', 'Health Care']
    }
  ];

  if (selectedPracticeType === 'vocabulary') {
    return <ListeningVocabulary onBack={handleBackToVocabulary} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Listening Practice</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Master listening skills with comprehensive exercises</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {!selectedPracticeType ? (
              <>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">Listening Practice</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-12 text-center text-lg">Choose your difficulty level to start practicing</p>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  {/* Quiz Practice Card */}
                  <Card 
                    className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-500"
                    onClick={() => setSelectedPracticeType('quiz')}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Quiz</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Practice TOEFL listening with campus conversations and academic lectures
                      </p>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex justify-between">
                          <span>Listening Exercises:</span>
                          <span className="font-semibold">{quizExercises.length} sets</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Question Types:</span>
                          <span className="font-semibold">Multiple formats</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Vocabulary Practice Card */}
                  <Card 
                    className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 hover:border-green-300 dark:border-gray-700 dark:hover:border-green-500"
                    onClick={() => setSelectedPracticeType('vocabulary')}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Vocabulary</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Listen to word definitions and practice academic vocabulary in context
                      </p>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex justify-between">
                          <span>Vocabulary Words:</span>
                          <span className="font-semibold">20 words</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Audio Context:</span>
                          <span className="font-semibold">Native speakers</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            ) : selectedPracticeType === 'quiz' ? (
              <>
                <div className="flex items-center mb-8">
                  <Button
                    variant="ghost"
                    onClick={handleBackToMainMenu}
                    className="mr-4 p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full dark:text-gray-200"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                    <Target className="h-8 w-8 text-blue-500" />
                    Quiz Practice
                  </h2>
                </div>
                
                <div className="grid gap-4">
                  {quizExercises.map((exercise) => (
                    <Card key={exercise.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:border-gray-700">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{exercise.title}</CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                              {exercise.description}
                            </CardDescription>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                            <Headphones className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="h-4 w-4" />
                            {exercise.duration}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <FileText className="h-4 w-4" />
                            {exercise.questions} questions
                          </div>
                          <div className="text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              exercise.difficulty === 'Beginner' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : exercise.difficulty === 'Intermediate' 
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
                              <span key={index} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button 
                          onClick={() => navigate(`/practice/listening/${exercise.id}`)}
                          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                        >
                          Start Practice
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListeningPracticeList;
