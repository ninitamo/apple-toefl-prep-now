
import { ArrowRight, Play, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              REDU
            </span>{' '}
            TOEFL® iBT Test Preparation with AI-Powered Practice
          </h1>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            REDU provides free, official-format practice tests that closely simulate the real TOEFL® iBT test. Take full, timed tests or focus on individual sections — practice smarter, improve faster, and build test-day confidence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/institution-search')}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium group"
            >
              Check if your university accepts TOEFL® iBT test
              <Search className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15</div>
            <div className="text-gray-600 dark:text-gray-300">Full-length TOEFL® iBT Free Practice Tests</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Section-based Free Practice</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">30+</div>
            <div className="text-gray-600 dark:text-gray-300">Hours of Test Content</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
