
import { CheckCircle, Clock, Globe, TrendingUp, GraduationCap } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Official-like format",
      description: "Closely modeled on the official TOEFL iBT test, giving you an authentic test-day experience."
    },
    {
      icon: Clock,
      title: "Flexible practice",
      description: "Practice your way — take full-length timed exams or focus on individual sections to target your weaknesses."
    },
    {
      icon: Globe,
      title: "Accessible anywhere",
      description: "Use our online platform with no downloads or installations required — study anytime, on any device."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            💡 Why Choose REDU?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
           Experience the most authentic AI-generated TOEFL iBT test preparation with our comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
