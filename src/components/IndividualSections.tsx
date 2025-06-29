
import { BookOpen, Headphones, Mic, PenTool, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const IndividualSections = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'Master academic reading comprehension with authentic passages and strategic question analysis.',
      duration: '54-72 minutes',
      questions: '30-40 questions',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50/50 to-blue-100/30',
      practiceUrl: '/practice/reading',
    },
    {
      icon: Headphones,
      title: 'Listening',
      description: 'Enhance comprehension skills through academic lectures, conversations, and discussions.',
      duration: '41-57 minutes',
      questions: '28-39 questions',
      color: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50/50 to-emerald-100/30',
      practiceUrl: '/practice/listening',
    },
    {
      icon: Mic,
      title: 'Speaking',
      description: 'Develop articulate responses with structured practice sessions and strategic techniques.',
      duration: '17 minutes',
      questions: '4 tasks',
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50/50 to-purple-100/30',
      practiceUrl: '/practice/speaking',
    },
    {
      icon: PenTool,
      title: 'Writing',
      description: 'Perfect academic writing through integrated and independent task methodologies.',
      duration: '50 minutes',
      questions: '2 tasks',
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50/50 to-orange-100/30',
      practiceUrl: '/practice/writing',
    },
  ];

  const handlePracticeClick = (practiceUrl: string) => {
    navigate(practiceUrl);
  };

  return (
    <div>
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-light text-slate-800 mb-8">
          Focused Section Practice
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
          Master each component of the TOEFL examination through targeted practice exercises designed to enhance your specific competencies and build confidence systematically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {sections.map((section, index) => (
          <Card 
            key={section.title} 
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer bg-gradient-to-br ${section.bgGradient} backdrop-blur-sm`}
            onClick={() => handlePracticeClick(section.practiceUrl)}
          >
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <section.icon className="h-8 w-8 text-white" />
                </div>
                <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <CardTitle className="text-2xl font-light text-slate-800 group-hover:text-slate-700 transition-colors mb-4">
                {section.title}
              </CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed font-light">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-light">Duration:</span>
                  <span className="font-medium text-slate-700">{section.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-light">Questions:</span>
                  <span className="font-medium text-slate-700">{section.questions}</span>
                </div>
              </div>
              <Button 
                className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 text-white rounded-full font-light py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Begin {section.title} Practice
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 max-w-5xl mx-auto border border-slate-200/50 shadow-lg">
          <h2 className="text-3xl font-light text-slate-800 mb-8">Why Choose Section Practice?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-700 flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                Targeted Mastery
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Concentrate on your areas of improvement with precision-designed exercises that address specific skill deficiencies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-emerald-700 flex items-center gap-3">
                <Headphones className="h-6 w-6" />
                Flexible Learning
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Practice individual sections according to your schedule, allowing for efficient time management and focused study sessions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-purple-700 flex items-center gap-3">
                <Mic className="h-6 w-6" />
                Confidence Building
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Develop proficiency in each section independently before progressing to comprehensive full-length assessments.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-orange-700 flex items-center gap-3">
                <PenTool className="h-6 w-6" />
                Strategic Development
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Monitor advancement in each component systematically and identify areas requiring additional focused attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSections;
