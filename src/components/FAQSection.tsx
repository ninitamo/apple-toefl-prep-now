
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'What is the TOEFL iBT examination?',
      answer: 'The TOEFL iBT (Internet-based Test) is a standardized assessment measuring English language proficiency for non-native speakers. It evaluates your ability to use and understand English in academic environments through four comprehensive sections.'
    },
    {
      id: 2,
      question: 'How does the TOEFL scoring system work?',
      answer: 'TOEFL iBT scores range from 0-120 points total, with each section (Reading, Listening, Speaking, Writing) scored from 0-30 points. Most universities require scores between 80-100 for admission, with top-tier institutions often requiring 100+.'
    },
    {
      id: 3,
      question: 'What are the test sections and duration?',
      answer: 'The TOEFL iBT comprises four sections: Reading (54-72 minutes), Listening (41-57 minutes), Speaking (17 minutes), and Writing (50 minutes). The complete test duration is approximately 3 hours including breaks.'
    },
    {
      id: 4,
      question: 'How long are TOEFL scores valid?',
      answer: 'TOEFL scores remain valid for 2 years from the test date. After this period, scores are no longer available for reporting to institutions and cannot be sent to universities or organizations.'
    },
    {
      id: 5,
      question: 'What frequency is allowed for taking the TOEFL?',
      answer: 'You may take the TOEFL iBT as frequently as desired, with a mandatory 3-day waiting period between test dates. There is no annual or lifetime limit on the number of attempts.'
    },
    {
      id: 6,
      question: 'What constitutes a competitive TOEFL score?',
      answer: 'A competitive TOEFL score varies by institution. Generally, 80+ is acceptable for most universities, 90+ for prestigious schools, and 100+ for highly competitive programs. Research your target institutions specific requirements.'
    }
  ];

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Everything you need to know about the TOEFL iBT
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-slate-200 rounded-2xl transition-all duration-300 hover:shadow-lg bg-white/70 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50/50 rounded-2xl transition-all duration-300"
              >
                <span className="font-medium text-slate-800 text-lg pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {activeQuestion === faq.id ? 
                    <ChevronUp className="h-5 w-5 text-slate-500" /> : 
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  }
                </div>
              </button>
              
              {activeQuestion === faq.id && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
