
import { ArrowLeft, Mic, Clock, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SpeakingPracticeList = () => {
  const navigate = useNavigate();

  const speakingPracticeSets = [
    {
      id: 'speaking-practice-1',
      title: 'Speaking Practice 1',
      description: 'Complete speaking practice set with 4 tasks: personal preference, campus situation, and academic topics.',
      tasks: [
        'Personal Preference Task',
        'Campus Situation Task', 
        'Academic Lecture Summary',
        'Academic Discussion'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Beginner',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'speaking-practice-2',
      title: 'Speaking Practice 2',
      description: 'Advanced speaking practice with integrated tasks focusing on academic content and critical thinking.',
      tasks: [
        'Opinion Expression Task',
        'University Policy Discussion',
        'Scientific Concept Explanation', 
        'Research Topic Analysis'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Intermediate',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'speaking-practice-3',
      title: 'Speaking Practice 3',
      description: 'Comprehensive speaking assessment with complex academic scenarios and detailed responses.',
      tasks: [
        'Complex Decision Making',
        'Academic Debate Topic',
        'Research Methodology Discussion',
        'Comparative Analysis Task'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Advanced',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'speaking-practice-4',
      title: 'Speaking Practice 4',
      description: 'Expert-level speaking practice with sophisticated academic content and nuanced discussions.',
      tasks: [
        'Philosophical Question Response',
        'Policy Implementation Discussion',
        'Advanced Research Presentation',
        'Critical Theory Analysis'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Expert',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const handlePracticeClick = (practiceId: string) => {
    navigate(`/practice/speaking/${practiceId}`);
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
              <p className="text-gray-600">Choose a complete speaking practice set to master all task types</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speakingPracticeSets.map((practiceSet) => (
            <Card
              key={practiceSet.id}
              className={`${practiceSet.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
              onClick={() => handlePracticeClick(practiceSet.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${practiceSet.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${practiceSet.color} text-white`}>
                    {practiceSet.difficulty}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {practiceSet.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {practiceSet.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>4 Speaking Tasks</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{practiceSet.totalDuration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Included Tasks:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {practiceSet.tasks.map((task, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${practiceSet.color} hover:opacity-90 text-white rounded-full font-medium group-hover:shadow-lg transition-all duration-300`}
                >
                  Start Practice Set
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Speaking Practice Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-700">Preparation Tips</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use preparation time effectively</li>
                  <li>• Organize your thoughts clearly</li>
                  <li>• Practice speaking at natural pace</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-700">Performance Tips</h3>
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
