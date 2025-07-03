
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Target, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PracticeSelector = () => {
  const navigate = useNavigate();
  
  const practiceOptions = [
    {
      title: "Full Practice Tests",
      description: "Complete 3.5-hour TOEFL iBT practice tests with all four sections",
      icon: Clock,
      stats: "15 full tests available",
      onClick: () => navigate('/tests')
    },
    {
      title: "Individual Sections",
      description: "Practice specific sections: Reading, Listening, Speaking, or Writing",
      icon: Target,
      stats: "Focus on your weak areas",
      onClick: () => navigate('/individual-practice')
    },
    {
      title: "Study Materials",
      description: "Tips, strategies, and guides to improve your TOEFL performance",
      icon: BookOpen,
      stats: "Comprehensive resources",
      onClick: () => navigate('/study-materials')
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            🎯 Choose Your Practice Mode
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the practice format that works best for your study goals and schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 hover:border-blue-200 dark:hover:border-blue-700">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {option.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {option.stats}
                  </div>
                </div>
                <Button 
                  onClick={option.onClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg"
                >
                  Start Practicing
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeSelector;
