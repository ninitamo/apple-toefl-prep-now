
import { BookOpen, Headphones, Mic, PenTool, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const IndividualSections = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'Improve your reading comprehension with academic passages and practice questions.',
      duration: '54-72 minutes',
      questions: '30-40 questions',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      practiceUrl: '/practice/reading',
    },
    {
      icon: Headphones,
      title: 'Listening',
      description: 'Practice with lectures, conversations, and academic discussions.',
      duration: '41-57 minutes',
      questions: '28-39 questions',
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      practiceUrl: '/practice/listening',
    },
    {
      icon: Mic,
      title: 'Speaking',
      description: 'Develop your speaking skills with structured practice sessions.',
      duration: '17 minutes',
      questions: '4 tasks',
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      practiceUrl: '/practice/speaking',
    },
    {
      icon: PenTool,
      title: 'Writing',
      description: 'Master academic writing with integrated and independent tasks.',
      duration: '50 minutes',
      questions: '2 tasks',
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      practiceUrl: '/practice/writing',
    },
  ];

  const handlePracticeClick = (practiceUrl: string) => {
    navigate(practiceUrl);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Individual Sections</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master each section of the TOEFL test with focused practice exercises designed to improve your specific skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <Card 
            key={section.title} 
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer bg-gradient-to-br ${section.bgGradient}`}
            onClick={() => handlePracticeClick(section.practiceUrl)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="h-8 w-8 text-white" />
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                {section.title}
              </CardTitle>
              <CardDescription className="text-gray-600 text-base leading-relaxed">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium text-gray-700">{section.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Questions:</span>
                  <span className="font-medium text-gray-700">{section.questions}</span>
                </div>
              </div>
              <Button 
                className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 text-white rounded-full font-medium group-hover:shadow-lg transition-all duration-300`}
              >
                Start {section.title} Practice
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Section Practice Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-700 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Targeted Learning
              </h3>
              <p className="text-sm text-gray-600">
                Focus on your weakest areas and improve specific skills with dedicated practice exercises.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-green-700 flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                Flexible Practice
              </h3>
              <p className="text-sm text-gray-600">
                Practice individual sections when you have limited time or want to focus on specific skills.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-700 flex items-center gap-2">
                <Mic className="h-5 w-5" />
                Skill Building
              </h3>
              <p className="text-sm text-gray-600">
                Build confidence in each section before taking the complete practice tests.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-orange-700 flex items-center gap-2">
                <PenTool className="h-5 w-5" />
                Progress Tracking
              </h3>
              <p className="text-sm text-gray-600">
                Monitor your improvement in each section and identify areas that need more attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSections;
