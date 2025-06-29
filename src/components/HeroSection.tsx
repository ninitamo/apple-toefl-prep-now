
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-800 leading-tight mb-8">
            Master the{' '}
            <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">
              TOEFL iBT
            </span>{' '}
            with Precision
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Experience excellence in TOEFL preparation with our meticulously crafted practice tests that mirror the official format. Practice intelligently, progress confidently.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => navigate('/exam-info')}
              className="bg-slate-800 hover:bg-slate-900 text-white rounded-full px-10 py-4 text-lg font-medium group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover the Exam
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl font-light text-slate-700 mb-3 group-hover:text-blue-600 transition-colors duration-300">15</div>
            <div className="text-slate-600 font-medium">Full-length Practice Tests</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl font-light text-slate-700 mb-3 group-hover:text-blue-600 transition-colors duration-300">100+</div>
            <div className="text-slate-600 font-medium">Section-based Exercises</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl font-light text-slate-700 mb-3 group-hover:text-blue-600 transition-colors duration-300">30+</div>
            <div className="text-slate-600 font-medium">Hours of Premium Content</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
