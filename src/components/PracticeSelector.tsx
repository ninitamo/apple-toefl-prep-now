
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Award, Headphones, Mic, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PracticeSelector = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Choose Your Practice Mode
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select how you'd like to practice for your TOEFL test
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Practice Full Test */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 dark:bg-gray-800">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Practice Full Test
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Take complete TOEFL practice tests with all four sections in the official format. Perfect for comprehensive preparation.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4" />
                  <span>≈ 2 hours per test</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Users className="h-4 w-4" />
                  <span>15 complete practice tests</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Award className="h-4 w-4" />
                  <span>Official TOEFL format</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/practice/full-tests')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white rounded-full font-medium py-6 text-lg"
              >
                Practice Full Test
              </Button>
            </CardContent>
          </Card>

          {/* Practice Individual Sections */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 dark:bg-gray-800">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Practice Individual Sections
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Focus on specific skills with targeted practice for Reading, Listening, Speaking, and Writing sections.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>Reading</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Headphones className="h-4 w-4 text-green-500" />
                  <span>Listening</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Mic className="h-4 w-4 text-purple-500" />
                  <span>Speaking</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <PenTool className="h-4 w-4 text-orange-500" />
                  <span>Writing</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/practice/sections')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white rounded-full font-medium py-6 text-lg"
              >
                Practice Individual Sections
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticeSelector;
