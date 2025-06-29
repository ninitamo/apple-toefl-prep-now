
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How similar are your practice tests to the real TOEFL iBT?",
      answer: "Our practice tests are carefully designed to mirror the official TOEFL iBT format, question types, difficulty levels, and timing. We follow the same structure and scoring guidelines used in the actual exam."
    },
    {
      question: "Can I take individual sections or do I need to complete full tests?",
      answer: "You have complete flexibility! You can take full-length practice tests for the complete exam experience, or focus on individual sections (Reading, Listening, Speaking, Writing) based on your study needs."
    },
    {
      question: "How many practice tests are available?",
      answer: "We currently offer 15+ full-length TOEFL iBT practice tests, with over 100 section-based practice exercises. We regularly add new content to keep your preparation fresh and comprehensive."
    },
    {
      question: "Do I need to download any software?",
      answer: "No downloads required! Our platform is entirely web-based and accessible from any device with an internet connection. You can practice anywhere, anytime."
    },
    {
      question: "How do you ensure the quality of your practice materials?",
      answer: "All our content is developed by language experts and TOEFL specialists who follow official testing standards. We regularly update our materials based on the latest exam patterns and user feedback."
    },
    {
      question: "What kind of feedback do I get after completing a test?",
      answer: "You receive detailed performance analysis including section-by-section scores, question-by-question explanations, and personalized recommendations for improvement areas."
    },
    {
      question: "Is there a time limit for practice tests?",
      answer: "Yes, our practice tests follow the official TOEFL iBT timing: Reading (54-72 minutes), Listening (41-57 minutes), Speaking (17 minutes), and Writing (50 minutes). You can also practice without time limits if preferred."
    },
    {
      question: "Can I retake the same practice test?",
      answer: "Absolutely! You can retake any practice test as many times as you want to track your improvement and build confidence before the actual exam."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our TOEFL preparation platform
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
