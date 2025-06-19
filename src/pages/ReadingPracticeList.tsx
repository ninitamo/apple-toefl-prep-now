
import { useState } from 'react';
import { ArrowLeft, Lock, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const ReadingPracticeList = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      id: 1,
      title: 'The Origins of Urbanization',
      description: 'Explore the emergence of cities and their impact on human civilization.',
      difficulty: 'Intermediate',
      duration: '20 minutes',
      questions: 7,
      isFree: true,
      isPremium: false,
      rating: 4.8,
      practiceUrl: '/practice/reading/urbanization',
    },
    {
      id: 2,
      title: 'Climate Change and Ocean Currents',
      description: 'Understanding the relationship between global warming and marine ecosystems.',
      difficulty: 'Advanced',
      duration: '25 minutes',
      questions: 10,
      isFree: false,
      isPremium: true,
      rating: 4.9,
      practiceUrl: '#',
    },
    {
      id: 3,
      title: 'The History of Photography',
      description: 'From camera obscura to digital imaging: a comprehensive overview.',
      difficulty: 'Beginner',
      duration: '18 minutes',
      questions: 8,
      isFree: true,
      isPremium: false,
      rating: 4.6,
      practiceUrl: '#',
    },
    {
      id: 4,
      title: 'Quantum Physics Fundamentals',
      description: 'Basic principles of quantum mechanics and their real-world applications.',
      difficulty: 'Advanced',
      duration: '30 minutes',
      questions: 12,
      isFree: false,
      isPremium: true,
      rating: 4.7,
      practiceUrl: '#',
    },
    {
      id: 5,
      title: 'Ancient Greek Philosophy',
      description: 'The foundations of Western philosophical thought from Socrates to Aristotle.',
      difficulty: 'Intermediate',
      duration: '22 minutes',
      questions: 9,
      isFree: true,
      isPremium: false,
      rating: 4.5,
      practiceUrl: '#',
    },
    {
      id: 6,
      title: 'Renewable Energy Technologies',
      description: 'Solar, wind, and hydroelectric power: the future of sustainable energy.',
      difficulty: 'Intermediate',
      duration: '24 minutes',
      questions: 11,
      isFree: false,
      isPremium: true,
      rating: 4.8,
      practiceUrl: '#',
    },
  ];

  const handleExerciseClick = (exercise: typeof exercises[0]) => {
    if (exercise.isFree && exercise.practiceUrl !== '#') {
      navigate(exercise.practiceUrl);
    } else if (!exercise.isFree) {
      // Handle premium content - could show upgrade modal
      console.log('Premium content - upgrade required');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {exercise.isPremium && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                      Premium
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyColor(exercise.difficulty)}>
                      {exercise.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{exercise.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {exercise.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {exercise.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Duration:</span>
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Questions:</span>
                      <span>{exercise.questions}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleExerciseClick(exercise)}
                    className={`w-full ${
                      exercise.isFree
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400 hover:bg-gray-500'
                    } text-white rounded-full font-medium flex items-center gap-2`}
                    disabled={!exercise.isFree && exercise.practiceUrl === '#'}
                  >
                    {exercise.isFree ? (
                      <>
                        <Play className="h-4 w-4" />
                        Start Practice
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4" />
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
        </div>
      </div>
    </div>
  );
};

export default ReadingPracticeList;
