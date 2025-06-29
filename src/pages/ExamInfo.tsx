
import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ExamInfo = () => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // const faqData = [
  //   {
  //     id: 1,
  //     question: "What is the TOEFL iBT exam?",
  //     answer: "The TOEFL iBT (Internet-based Test) is a standardized test that measures English language proficiency for non-native speakers. It evaluates your ability to use and understand English in academic settings.",
  //     position: { top: '10%', left: '50%', transform: 'translateX(-50%)' }
  //   },
  //   {
  //     id: 2,
  //     question: "How is the TOEFL scored?",
  //     answer: "TOEFL iBT scores range from 0-120 points total. Each section (Reading, Listening, Speaking, Writing) is scored 0-30 points. Most universities require scores between 80-100 for admission.",
  //     position: { top: '25%', right: '15%' }
  //   },
  //   {
  //     id: 3,
  //     question: "What are the test sections?",
  //     answer: "The TOEFL iBT has four sections: Reading (54-72 minutes), Listening (41-57 minutes), Speaking (17 minutes), and Writing (50 minutes). Total test time is approximately 3 hours.",
  //     position: { bottom: '25%', right: '15%' }
  //   },
  //   {
  //     id: 4,
  //     question: "How long are TOEFL scores valid?",
  //     answer: "TOEFL scores are valid for 2 years from the test date. After this period, scores are no longer reported and cannot be sent to institutions.",
  //     position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' }
  //   },
  //   {
  //     id: 5,
  //     question: "How often can I take the TOEFL?",
  //     answer: "You can take the TOEFL iBT as many times as you want, but you must wait at least 3 days between test dates. There's no limit to the number of times you can take the test.",
  //     position: { bottom: '25%', left: '15%' }
  //   },
  //   {
  //     id: 6,
  //     question: "What is a good TOEFL score?",
  //     answer: "A 'good' TOEFL score depends on your target institution. Generally, 80+ is competitive for most universities, 90+ for top-tier schools, and 100+ for highly competitive programs.",
  //     position: { top: '25%', left: '15%' }
  //   },
  //   {
  //     id: 7,
  //     question: "How much does the TOEFL cost?",
  //     answer: "The TOEFL iBT registration fee varies by location, typically ranging from $180-$300 USD. Additional fees may apply for late registration, rescheduling, or additional score reports.",
  //     position: { top: '50%', left: '5%' }
  //   }
  // ];

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-6 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Learn About the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TOEFL iBT
              </span>{' '}
              Exam
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about the Test of English as a Foreign Language
            </p>
          </div>

          {/* Circular FAQ Layout */}
          <div className="relative w-full max-w-4xl mx-auto mb-16">
            <div className="relative h-[600px] mx-auto">
              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-white font-bold text-xl">TOEFL</div>
                  <div className="text-white text-sm">iBT</div>
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
                      className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-orange-200 hover:border-orange-300 rounded-full px-4 py-2 text-sm font-medium shadow-md transition-all duration-200 max-w-[200px] whitespace-normal h-auto min-h-[60px] flex items-center justify-center"
                    >
                      <span className="text-center leading-tight">{faq.question}</span>
                      {activeQuestion === faq.id ? 
                        <ChevronUp className="ml-2 h-4 w-4 flex-shrink-0" /> : 
                        <ChevronDown className="ml-2 h-4 w-4 flex-shrink-0" />
                      }
                    </Button>
                    
                    {/* Connecting line to center */}
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-orange-300 transform -translate-x-1/2 origin-top rotate-45 opacity-30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Answers Section */}
          {/* <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className={`border border-gray-200 rounded-lg transition-all duration-300 ${
                    activeQuestion === faq.id ? 'border-orange-300 shadow-md' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {activeQuestion === faq.id ? 
                      <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    }
                  </button>
                  
                  {activeQuestion === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Preparing?</h3>
              <p className="text-gray-600 mb-6">Begin your TOEFL journey with our comprehensive practice tests and study materials.</p>
              <Button
                onClick={() => navigate('/auth')}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium"
              >
                Start Free Practice
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExamInfo;
