
import { BookOpen, Headphones, Mic, PenTool } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const TestSections = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const sections = [
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'Improve your reading comprehension with academic passages and practice questions.',
      duration: '54-72 minutes',
      questions: '30-40 questions',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      practiceUrl: '/practice/reading',
    },
    {
      icon: Headphones,
      title: 'Listening',
      description: 'Practice with lectures, conversations, and academic discussions.',
      duration: '41-57 minutes',
      questions: '28-39 questions',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      practiceUrl: '/practice/listening',
    },
    {
      icon: Mic,
      title: 'Speaking',
      description: 'Develop your speaking skills with structured practice sessions.',
      duration: '17 minutes',
      questions: '4 tasks',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      practiceUrl: '/practice/speaking',
    },
    {
      icon: PenTool,
      title: 'Writing',
      description: 'Master academic writing with integrated and independent tasks.',
      duration: '50 minutes',
      questions: '2 tasks',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      practiceUrl: '/practice/writing',
    },
  ];

  const handlePracticeClick = (practiceUrl: string) => {
    if (!user) {
      navigate('/auth');
    } else {
      navigate(practiceUrl);
    }
  };

  return (
    <section id="practice" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Master Every Section
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice all four sections of the TOEFL test with our comprehensive preparation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <Card key={section.title} className={`${section.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{section.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-500">Duration: {section.duration}</div>
                  <div className="text-sm text-gray-500">{section.questions}</div>
                </div>
                <Button 
                  onClick={() => handlePracticeClick(section.practiceUrl)}
                  className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 text-white rounded-full font-medium`}
                >
                  {user ? 'Practice Now' : 'Sign In to Practice'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestSections;
