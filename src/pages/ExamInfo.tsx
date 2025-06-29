
import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
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
      question: "What is the TOEFL iBT examination?",
      answer: "The TOEFL iBT (Internet-based Test) is a standardized assessment measuring English language proficiency for non-native speakers. It evaluates your ability to use and understand English in academic environments through four comprehensive sections.",
      position: { top: '10%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      id: 2,
      question: "How is the TOEFL scored?",
      answer: "TOEFL iBT scores range from 0-120 points total. Each section (Reading, Listening, Speaking, Writing) is scored 0-30 points. Most universities require scores between 80-100 for admission.",
      position: { top: '25%', right: '15%' }
    },
    {
      id: 3,
      question: "What are the test sections?",
      answer: "The TOEFL iBT has four sections: Reading (54-72 minutes), Listening (41-57 minutes), Speaking (17 minutes), and Writing (50 minutes). Total test time is approximately 3 hours.",
      position: { bottom: '25%', right: '15%' }
    },
    {
      id: 4,
      question: "How long are TOEFL scores valid?",
      answer: "TOEFL scores are valid for 2 years from the test date. After this period, scores are no longer reported and cannot be sent to institutions.",
      position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      id: 5,
      question: "How often can I take the TOEFL?",
      answer: "You can take the TOEFL iBT as many times as you want, but you must wait at least 3 days between test dates. There's no limit to the number of times you can take the test.",
      position: { bottom: '25%', left: '15%' }
    },
    {
      id: 6,
      question: "What is a good TOEFL score?",
      answer: "A 'good' TOEFL score depends on your target institution. Generally, 80+ is competitive for most universities, 90+ for top-tier schools, and 100+ for highly competitive programs.",
      position: { top: '25%', left: '15%' }
    },
    {
      id: 7,
      question: "How much does the TOEFL cost?",
      answer: "The TOEFL iBT registration fee varies by location, typically ranging from $180-$300 USD. Additional fees may apply for late registration, rescheduling, or additional score reports.",
      position: { top: '50%', left: '5%' }
    }
  ];

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-8 group text-slate-600 hover:text-slate-900 font-light"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl sm:text-6xl font-light text-slate-800 leading-tight mb-8">
              Discover the{' '}
              <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                TOEFL iBT
              </span>{' '}
              Examination
            </h1>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Comprehensive guide to the Test of English as a Foreign Language and your pathway to academic success
            </p>
          </div>

          {/* Interactive FAQ Circle */}
          <div className="relative w-full max-w-5xl mx-auto mb-20">
            <div className="relative h-[700px] mx-auto">
              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-slate-700 via-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-white font-light text-2xl mb-1">TOEFL</div>
                  <div className="text-white/90 text-sm font-light">iBT Exam</div>
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
                      className={`bg-white/90 hover:bg-white text-slate-800 border border-slate-200/50 hover:border-slate-300 rounded-2xl px-6 py-4 text-sm font-light shadow-lg hover:shadow-xl transition-all duration-300 max-w-[220px] whitespace-normal h-auto min-h-[80px] flex items-center justify-center backdrop-blur-sm ${
                        activeQuestion === faq.id ? 'bg-white border-blue-300 shadow-xl' : ''
                      }`}
                    >
                      <div className="text-center leading-tight">
                        <span>{faq.question}</span>
                        <div className="mt-2">
                          {activeQuestion === faq.id ? 
                            <ChevronUp className="h-4 w-4 mx-auto text-slate-500" /> : 
                            <ChevronDown className="h-4 w-4 mx-auto text-slate-500" />
                          }
                        </div>
                      </div>
                    </Button>
                    
                    {/* Connecting line to center */}
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-gradient-to-r from-slate-300 to-blue-300 transform -translate-x-1/2 origin-top opacity-30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Answer Display */}
          {activeQuestion && (
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
                <h3 className="text-xl font-medium text-slate-800 mb-4">
                  {faqData.find(faq => faq.id === activeQuestion)?.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {faqData.find(faq => faq.id === activeQuestion)?.answer}
                </p>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-200/50 shadow-lg">
              <h3 className="text-3xl font-light text-slate-800 mb-6">Ready to Begin Your Journey?</h3>
              <p className="text-slate-600 mb-8 font-light leading-relaxed">
                Transform your TOEFL preparation with our comprehensive practice platform and expert-designed materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  onClick={() => navigate('/practice/full-tests')}
                  className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white rounded-full px-10 py-4 text-lg font-light shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Complete Practice Tests
                </Button>
                <Button
                  onClick={() => navigate('/practice/sections')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full px-10 py-4 text-lg font-light shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Section Practice
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
