
import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Globe, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ExamInfo = () => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqData = [
    {
      id: 1,
      question: "Why TOEFL exam? [2025 Global Guide for Students]",
      answer: "Click to read the complete guide about why you should take the TOEFL exam in 2025.",
      isBlogLink: true,
      blogPath: "/blog/why-toefl-exam",
      position: { top: '5%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      id: 2,
      question: "Who needs to take TOEFL? [2025 Global Guide for Students]",
      answer: "Click to read the complete guide about who should take the TOEFL exam.",
      isBlogLink: true,
      blogPath: "/blog/who-needs-toefl",
      position: { top: '20%', right: '5%' }
    },
    {
      id: 3,
      question: "Which TOEFL test should I take? [2025 Comparison Guide]",
      answer: "Click to read the complete comparison guide for TOEFL test options.",
      isBlogLink: true,
      blogPath: "/blog/which-toefl-test",
      position: { top: '45%', right: '2%' }
    },
    {
      id: 4,
      question: "Where is TOEFL accepted? [2025 Global Acceptance Guide]",
      answer: "Click to read about TOEFL acceptance worldwide.",
      isBlogLink: true,
      blogPath: "/blog/where-toefl-accepted",
      position: { bottom: '20%', right: '5%' }
    },
    {
      id: 5,
      question: "When is TOEFL exam conducted? [2025 Test Date Guide]",
      answer: "Click to read about TOEFL test dates and scheduling.",
      isBlogLink: true,
      blogPath: "/blog/when-toefl-conducted",
      position: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      id: 6,
      question: "What does TOEFL stand for? [2025 Beginner's Guide]",
      answer: "Click to read the complete beginner's guide to TOEFL.",
      isBlogLink: true,
      blogPath: "/blog/what-toefl-stands-for",
      position: { bottom: '20%', left: '5%' }
    },
    {
      id: 7,
      question: "How is TOEFL iBT score calculated? [2025 Scoring Guide]",
      answer: "Click to read the complete guide to TOEFL scoring.",
      isBlogLink: true,
      blogPath: "/blog/how-toefl-scored",
      position: { top: '20%', left: '5%' }
    }
  ];

  const toggleQuestion = (id: number) => {
    const faq = faqData.find(f => f.id === id);
    if (faq?.isBlogLink) {
      navigate(faq.blogPath);
    } else {
      setActiveQuestion(activeQuestion === id ? null : id);
    }
  };

  const continentData = [
    { name: 'North America', institutions: '7400+', color: 'bg-gradient-to-r from-orange-400 to-red-500', icon: '🇺🇸' },
    { name: 'Europe', institutions: '2100+', color: 'bg-gradient-to-r from-blue-400 to-indigo-500', icon: '🇪🇺' },
    { name: 'Asia', institutions: '2250+', color: 'bg-gradient-to-r from-green-400 to-emerald-500', icon: '🌏' },
    { name: 'Oceania', institutions: '350+', color: 'bg-gradient-to-r from-teal-400 to-cyan-500', icon: '🇦🇺' },
    { name: 'South America', institutions: '450+', color: 'bg-gradient-to-r from-yellow-400 to-orange-500', icon: '🌎' },
    { name: 'Africa', institutions: '125+', color: 'bg-gradient-to-r from-purple-400 to-pink-500', icon: '🌍' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/30">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-8 group text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
                Learn About the 
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  TOEFL iBT Exam
                </span>
              </h1>
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Sparkles className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about the Test of English as a Foreign Language
            </p>

            {/* Stats bar */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">12,000+</div>
                <div className="text-slate-600 dark:text-slate-400">Institutions</div>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">160+</div>
                <div className="text-slate-600 dark:text-slate-400">Countries</div>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">95%</div>
                <div className="text-slate-600 dark:text-slate-400">Acceptance Rate</div>
              </div>
            </div>
          </div>

          {/* Enhanced Circular FAQ Layout */}
          <div className="relative w-full max-w-6xl mx-auto mb-20">
            <div className="relative h-[700px] mx-auto">
              {/* Enhanced Central Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse border-4 border-white/30">
                <div className="text-center">
                  <div className="text-white font-bold text-2xl mb-1">TOEFL</div>
                  <div className="text-white/90 text-lg">iBT</div>
                  <Star className="h-6 w-6 text-yellow-300 mx-auto mt-1" />
                </div>
              </div>

              {/* Enhanced FAQ Questions positioned around the circle */}
              {faqData.map((faq, index) => (
                <div
                  key={faq.id}
                  className="absolute animate-fade-in"
                  style={{
                    ...faq.position,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="relative group">
                    <Button
                      onClick={() => toggleQuestion(faq.id)}
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:bg-white dark:hover:bg-gray-700 text-slate-800 dark:text-slate-200 border-2 border-purple-300/50 dark:border-purple-600/50 hover:border-purple-400 dark:hover:border-purple-500 shadow-lg hover:shadow-2xl rounded-3xl px-6 py-4 text-sm font-medium transition-all duration-300 max-w-[260px] whitespace-normal h-auto min-h-[80px] flex items-center justify-center group-hover:scale-110 hover:-translate-y-1"
                    >
                      <span className="text-center leading-tight pr-2">{faq.question}</span>
                      <ExternalLink className="h-4 w-4 flex-shrink-0 text-purple-600 dark:text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </Button>
                    {/* Floating connector line */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced World Map Section */}
          <div className="mb-20">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 shadow-lg">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  A Whole World of Opportunity
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">See where TOEFL iBT is accepted worldwide!</p>
              </div>

              {/* Enhanced World Map Visualization */}
              <div className="relative bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 mb-8 border border-blue-200/50 dark:border-blue-800/50 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                  {continentData.map((continent, index) => (
                    <div key={index} className="relative group">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-4xl">{continent.icon}</div>
                          <div className={`w-16 h-3 ${continent.color} rounded-full shadow-md`}></div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">{continent.name}</h3>
                        <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-2">{continent.institutions}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Universities & Institutions</p>
                        
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced Total Statistics */}
                <div className="text-center mt-12 p-8 bg-gradient-to-r from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-gray-700/50">
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">Total Global Acceptance</h3>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
                    <div className="text-center group">
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">12,000+</div>
                      <div className="text-slate-600 dark:text-slate-400 font-medium">Institutions</div>
                    </div>
                    <div className="hidden sm:block w-px h-16 bg-slate-300 dark:bg-slate-600"></div>
                    <div className="text-center group">
                      <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">160+</div>
                      <div className="text-slate-600 dark:text-slate-400 font-medium">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 dark:from-gray-800/90 dark:via-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-slate-200/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 shadow-lg animate-pulse">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">Ready to Start Preparing?</h3>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">Begin your TOEFL journey with our comprehensive practice tests and study materials designed to help you succeed.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    onClick={() => navigate('/practice/full-tests')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-full px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    <Star className="mr-2 h-5 w-5" />
                    Practice Full Test
                  </Button>
                  <Button
                    onClick={() => navigate('/practice/sections')}
                    variant="outline"
                    className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white rounded-full px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  >
                    Practice Individual Section
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExamInfo;
