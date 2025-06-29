
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Master the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TOEFL iBT
            </span>{' '}
            AI based learning
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ToeflPrep offers carefully designed, official-format practice tests that simulate the real exam experience — so you’ll be fully prepared for test day.
            Whether you prefer to take complete, timed tests or focus on one section at a time, we have everything you need to practice efficiently and improve your skills.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/exam-info')}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium group"
            >
              Learn more about the exam
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">15</div>
            <div className="text-gray-600"> Full-length TOEFL iBT Practice Tests</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600">Section-based Practice</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">Coming soon...</div>
            <div className="text-gray-600">Instant Performance Feedback</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
