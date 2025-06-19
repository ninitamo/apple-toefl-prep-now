
import { useState } from 'react';
import { ArrowLeft, Lock, Play, CheckCircle, Clock } from 'lucide-react';
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

  const handleExerciseClick = (exercise: typeof exercises[0]) => {
    if (exercise.isFree && exercise.practiceUrl !== '#') {
      navigate(exercise.practiceUrl);
    } else if (!exercise.isFree) {
      // Handle premium content - could show upgrade modal
      console.log('Premium content - upgrade required');
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
        </div>
      </div>
    </div>
  );
};

export default ReadingPracticeList;
