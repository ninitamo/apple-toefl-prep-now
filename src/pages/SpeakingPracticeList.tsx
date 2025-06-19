
import { ArrowLeft, Mic, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SpeakingPracticeList = () => {
  const navigate = useNavigate();

  const speakingExercises = [
    {
      id: 'personal-preference',
      title: 'Personal Preference',
      description: 'Express your opinion on a familiar topic with personal examples.',
      type: 'Independent Task',
      duration: '15 seconds prep + 45 seconds response',
      difficulty: 'Beginner',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'campus-situation',
      title: 'Campus Situation',
      description: 'Read a campus notice and listen to a conversation, then give your opinion.',
      type: 'Integrated Task',
      duration: '30 seconds prep + 60 seconds response',
      difficulty: 'Intermediate',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'academic-lecture',
      title: 'Academic Lecture',
      description: 'Listen to an academic lecture and summarize the key points.',
      type: 'Integrated Task',
      duration: '20 seconds prep + 60 seconds response',
      difficulty: 'Advanced',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'academic-discussion',
      title: 'Academic Discussion',
      description: 'Read about an academic topic and listen to a lecture, then summarize.',
      type: 'Integrated Task',
      duration: '30 seconds prep + 60 seconds response',
      difficulty: 'Advanced',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const handleExerciseClick = (exerciseId: string) => {
    navigate(`/practice/speaking/${exerciseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mr-4 p-2 hover:bg-white/50 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full mr-4">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Speaking Practice</h1>
              <p className="text-gray-600">Master your speaking skills with structured practice tasks</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speakingExercises.map((exercise) => (
            <Card
              key={exercise.id}
              className={`${exercise.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
              onClick={() => handleExerciseClick(exercise.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exercise.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exercise.color} text-white`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {exercise.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {exercise.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{exercise.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{exercise.duration}</span>
                  </div>
                </div>
                <Button 
                  className={`w-full mt-4 bg-gradient-to-r ${exercise.color} hover:opacity-90 text-white rounded-full font-medium group-hover:shadow-lg transition-all duration-300`}
                >
                  Start Speaking Practice
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Speaking Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-700">Preparation</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use preparation time effectively</li>
                  <li>• Organize your thoughts clearly</li>
                  <li>• Practice speaking at natural pace</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-700">Delivery</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Speak clearly and confidently</li>
                  <li>• Use varied vocabulary</li>
                  <li>• Support ideas with examples</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingPracticeList;
