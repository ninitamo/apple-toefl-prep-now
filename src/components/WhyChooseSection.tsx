
import { CheckCircle, Clock, Globe, TrendingUp, Users, Award } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Official-like Format',
      description: 'Meticulously crafted to mirror the authentic TOEFL iBT experience',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Flexible Practice',
      description: 'Complete assessments or focused section practice at your convenience',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Accessible Anywhere',
      description: 'Premium online platform requiring no downloads or installations',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Updates',
      description: 'Regular additions of new tests and refined practice materials',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Expert Design',
      description: 'Developed by language professionals following official standards',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Trusted preparation method for achieving target scores',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">
            Why Choose ToeflPrep?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Experience the difference with our premium TOEFL preparation platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-medium text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
