import { useState } from 'react';
import { ArrowLeft, Lock, Play, CheckCircle, Clock, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const ListeningPracticeList = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      id: 1,
      title: 'Campus Conversation: Library Resources',
      description: 'Listen to a conversation between a student and a librarian about research resources.',
      duration: '15 minutes',
      questions: 5,
      isFree: true,
      isPremium: false,
      isCompleted: false,
      practiceUrl: '/practice/listening/library-resources',
    },
    {
      id: 2,
      title: 'Academic Lecture: Climate Science',
      description: 'Professor discusses the relationship between ocean currents and global climate patterns.',
      duration: '25 minutes',
      questions: 6,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 3,
      title: 'Campus Conversation: Course Registration',
      description: 'Student seeks advice from an academic advisor about course selection.',
      duration: '12 minutes',
      questions: 5,
      isFree: true,
      isPremium: false,
      isCompleted: true,
      practiceUrl: '#',
    },
    {
      id: 4,
      title: 'Academic Lecture: Art History',
      description: 'Comprehensive overview of Renaissance painting techniques and cultural context.',
      duration: '28 minutes',
      questions: 8,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 5,
      title: 'Campus Service: Health Center',
      description: 'Student discusses health insurance options with campus health center staff.',
      duration: '10 minutes',
      questions: 4,
      isFree: true,
      isPremium: false,
      isCompleted: true,
      practiceUrl: '#',
    },
    {
      id: 6,
      title: 'Academic Lecture: Psychology Research',
      description: 'Professor explains cognitive psychology research methods and statistical analysis.',
      duration: '30 minutes',
      questions: 7,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 7,
      title: 'Student Discussion: Group Project',
      description: 'Students planning their final group presentation for environmental science class.',
      duration: '18 minutes',
      questions: 6,
      isFree: true,
      isPremium: false,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 8,
      title: 'Academic Lecture: Business Ethics',
      description: 'Analysis of corporate responsibility and ethical decision-making in modern business.',
      duration: '26 minutes',
      questions: 7,
      isFree: false,
      isPremium: true,
      isCompleted: false,
      practiceUrl: '#',
    },
    {
      id: 9,
      title: 'Campus Conversation: Housing Options',
      description: 'Student inquires about on-campus housing arrangements for the upcoming semester.',
      duration: '14 minutes',
      questions: 5,
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
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <Headphones className="h-8 w-8 text-green-600" />
              Listening Practice
            </h1>
            <p className="text-gray-600 mt-2">Choose from our collection of TOEFL listening exercises</p>
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
                        ? 'bg-green-600 hover:bg-green-700'
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
                Get access to all listening exercises, detailed explanations, and progress tracking for just $49
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

export default ListeningPracticeList;
