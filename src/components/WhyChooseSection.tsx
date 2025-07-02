
import { CheckCircle, Clock, Globe, TrendingUp, GraduationCap, Sparkles } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Official-like format",
      description: "Closely modeled on the real TOEFL iBT with authentic question types and timing.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Flexible practice",
      description: "Take full tests or focus on individual sections based on your schedule and needs.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Accessible anywhere",
      description: "Online platform accessible from any device, no downloads or installations required.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-full p-3 shadow-lg animate-pulse">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 via-green-600 to-blue-600 dark:from-slate-200 dark:via-green-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            💡 Why Choose ToeflPrep?
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most authentic TOEFL iBT preparation with our comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-2xl"></div>
                
                <div className="flex flex-col items-center text-center relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 dark:from-gray-800/80 dark:via-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-slate-200/50 dark:border-gray-700/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Ready to Start Your TOEFL Journey?</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of students who have improved their TOEFL scores with our comprehensive practice platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🎯 Authentic Practice</span>
                </div>
                <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">📈 Score Improvement</span>
                </div>
                <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">⏰ Flexible Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
