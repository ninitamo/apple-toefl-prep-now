
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Award, Headphones, Mic, PenTool, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PracticeSelector = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Choose Your Practice Mode
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Select how you'd like to practice for your TOEFL test
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Practice Full Test */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer bg-gradient-to-br from-white/90 via-blue-50/50 to-indigo-100/50 dark:from-gray-800/90 dark:via-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
            
            <CardHeader className="text-center pb-8 relative">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Practice Full Test
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Take complete TOEFL practice tests with all four sections in the official format. Perfect for comprehensive preparation and building test-day stamina.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 gap-4 mb-10">
                <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">≈ 2 hours per test</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <Users className="h-5 w-5 text-green-500" />
                  <span className="font-medium">15 complete practice tests</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">Official TOEFL format</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/practice/full-tests')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-medium py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Star className="mr-2 h-5 w-5" />
                Practice Full Test
              </Button>
            </CardContent>
          </Card>

          {/* Practice Individual Sections */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer bg-gradient-to-br from-white/90 via-purple-50/50 to-pink-100/50 dark:from-gray-800/90 dark:via-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
            
            <CardHeader className="text-center pb-8 relative">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Practice Individual Sections
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Focus on specific skills with targeted practice for Reading, Listening, Speaking, and Writing sections. Perfect for skill improvement.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Reading</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <Headphones className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Listening</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <Mic className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">Speaking</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <PenTool className="h-5 w-5 text-orange-500" />
                  <span className="font-medium">Writing</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/practice/sections')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full font-medium py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
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
