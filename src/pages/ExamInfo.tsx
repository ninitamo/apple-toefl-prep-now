
import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
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
      position: { top: '10%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      id: 2,
      question: "Who needs to take TOEFL? [2025 Global Guide for Students]",
      answer: "Click to read the complete guide about who should take the TOEFL exam.",
      isBlogLink: true,
      blogPath: "/blog/who-needs-toefl",
      position: { top: '25%', right: '15%' }
    },
    {
      id: 3,
      question: "Which TOEFL test should I take? [2025 Comparison Guide]",
      answer: "Click to read the complete comparison guide for TOEFL test options.",
      isBlogLink: true,
      blogPath: "/blog/which-toefl-test",
      position: { top: '50%', right: '10%' }
    },
    {
      id: 4,
      question: "Where is TOEFL accepted? [2025 Global Acceptance Guide]",
      answer: "Click to read about TOEFL acceptance worldwide.",
      isBlogLink: true,
      blogPath: "/blog/where-toefl-accepted",
      position: { bottom: '25%', right: '15%' }
    },
    {
      id: 5,
      question: "When is TOEFL exam conducted? [2025 Test Date Guide]",
      answer: "Click to read about TOEFL test dates and scheduling.",
      isBlogLink: true,
      blogPath: "/blog/when-toefl-conducted",
      position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      id: 6,
      question: "What does TOEFL stand for? [2025 Beginner's Guide]",
      answer: "Click to read the complete beginner's guide to TOEFL.",
      isBlogLink: true,
      blogPath: "/blog/what-toefl-stands-for",
      position: { bottom: '25%', left: '15%' }
    },
    {
      id: 7,
      question: "How is TOEFL iBT score calculated? [2025 Scoring Guide]",
      answer: "Click to read the complete guide to TOEFL scoring.",
      isBlogLink: true,
      blogPath: "/blog/how-toefl-scored",
      position: { top: '25%', left: '15%' }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-6 group text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Learn About the TOEFL iBT Exam
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about the Test of English as a Foreign Language
            </p>
          </div>

          {/* Circular FAQ Layout */}
          <div className="relative w-full max-w-4xl mx-auto mb-16">
            <div className="relative h-[600px] mx-auto">
              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
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
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 border-2 border-purple-300 hover:border-purple-400 shadow-lg hover:shadow-purple-100 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 max-w-[220px] whitespace-normal h-auto min-h-[60px] flex items-center justify-center group"
                    >
                      <span className="text-center leading-tight">{faq.question}</span>
                      <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0 text-purple-600" />
                    </Button>
                    
                    {/* Connecting line to center */}
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-purple-300 transform -translate-x-1/2 origin-top rotate-45 opacity-30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Start Preparing?</h3>
              <p className="text-slate-600 mb-6">Begin your TOEFL journey with our comprehensive practice tests and study materials.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/practice/full-tests')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 text-lg font-medium"
                >
                  Practice Full Test
                </Button>
                <Button
                  onClick={() => navigate('/practice/sections')}
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-3 text-lg font-medium"
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
