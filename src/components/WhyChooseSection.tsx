
import { CheckCircle, Clock, Globe, TrendingUp, GraduationCap } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Official-like format",
      description: "closely modeled on the real TOEFL iBT"
    },
    {
      icon: Clock,
      title: "Flexible practice",
      description: "take full tests or focus on individual sections"
    },
    {
      icon: Globe,
      title: "Accessible anywhere",
      description: "online platform, no downloads required"
    },
    {
      icon: TrendingUp,
      title: "Continuous content updates",
      description: "new tests and materials added regularly"
    },
    {
      icon: GraduationCap,
      title: "Designed by language experts",
      description: "based on official standards"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            💡 Why Choose ToeflPrep?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most authentic TOEFL iBT preparation with our comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
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
