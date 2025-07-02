
import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Globe } from 'lucide-react';
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
    { name: 'North America', institutions: '7400+', color: 'bg-orange-500' },
    { name: 'Europe', institutions: '2100+', color: 'bg-orange-500' },
    { name: 'Asia', institutions: '2250+', color: 'bg-orange-500' },
    { name: 'Oceania', institutions: '350+', color: 'bg-orange-500' },
    { name: 'South America', institutions: '450+', color: 'bg-orange-500' },
    { name: 'Africa', institutions: '125+', color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-6 group text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              Learn About the TOEFL iBT Exam
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about the Test of English as a Foreign Language
            </p>
          </div>

          {/* Circular FAQ Layout */}
          <div className="relative w-full max-w-5xl mx-auto mb-16">
            <div className="relative h-[700px] mx-auto">
              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-white font-bold text-xl">TOEFL</div>
                  <div className="text-white/90 text-sm">iBT</div>
                </div>
              </div>

              {/* FAQ Questions positioned around the circle */}
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="absolute"
                  style={faq.position}
                >
                  <div className="relative">
                    <Button
                      onClick={() => toggleQuestion(faq.id)}
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-slate-800 dark:text-slate-200 border-2 border-purple-300 dark:border-purple-600 hover:border-purple-400 dark:hover:border-purple-500 shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 max-w-[240px] whitespace-normal h-auto min-h-[70px] flex items-center justify-center group"
                    >
                      <span className="text-center leading-tight">{faq.question}</span>
                      <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* World Map Section */}
          <div className="mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-gray-700/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center justify-center">
                  <Globe className="mr-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
                  A Whole World of Opportunity
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">See where TOEFL iBT is accepted!</p>
              </div>

              {/* World Map Visualization */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-8 border border-blue-200/50 dark:border-blue-800/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {continentData.map((continent, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200">
                        <div className={`w-full h-3 ${continent.color} rounded-full mb-4`}></div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">{continent.name}</h3>
                        <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">{continent.institutions}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Institutions</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Total Statistics */}
                <div className="text-center mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Total Global Acceptance</h3>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">12,000+</div>
                      <div className="text-slate-600 dark:text-slate-400">Institutions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">160+</div>
                      <div className="text-slate-600 dark:text-slate-400">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Ready to Start Preparing?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">Begin your TOEFL journey with our comprehensive practice tests and study materials.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/practice/full-tests')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-full px-8 py-3 text-lg font-medium"
                >
                  Practice Full Test
                </Button>
                <Button
                  onClick={() => navigate('/practice/sections')}
                  variant="outline"
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white rounded-full px-8 py-3 text-lg font-medium"
                >
                  Practice Individual Section
                </Button>
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
