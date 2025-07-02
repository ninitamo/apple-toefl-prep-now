
import { ArrowRight, Play, Search, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute -top-4 -right-4 animate-bounce">
              <Sparkles className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="absolute -bottom-2 -left-4 animate-bounce delay-700">
              <Star className="h-6 w-6 text-blue-500" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight relative">
              <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Master the{' '}
              </span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                TOEFL iBT
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
                with AI-Powered Practice
              </span>
            </h1>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              ToeflPrep provides <span className="font-semibold text-blue-600 dark:text-blue-400">free, official-format practice tests</span> that closely simulate the real TOEFL iBT. Take full, timed tests or focus on individual sections — practice smarter, improve faster, and build test-day confidence.
            </p>
            
            {/* Enhanced feature highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">✨ AI-Powered</span>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50 dark:border-green-800/50 shadow-lg">
                <span className="text-sm font-medium text-green-700 dark:text-green-300">🎯 Official Format</span>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200/50 dark:border-purple-800/50 shadow-lg">
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">🚀 Free Practice</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={() => navigate('/exam-info')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-full px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <Star className="mr-2 h-5 w-5" />
              Learn more about the exam
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={() => navigate('/institution-search')}
              variant="outline"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white rounded-full px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group"
            >
              <Search className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Check if your university accepts TOEFL iBT
            </Button>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="relative">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-gray-700/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">15</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Full-length TOEFL iBT Practice Tests</div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">100+</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Section-based Practice</div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">30+</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Hours of Test Content</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
