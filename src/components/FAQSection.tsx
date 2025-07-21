
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How similar are your practice tests to the real TOEFL iBT test?",
      answer: "Our practice tests are carefully designed to mirror the official TOEFL iBT test format, question types, difficulty levels, and timing."
    },
    {
      question: "Can I take individual sections or do I need to complete full tests?",
      answer: "You have complete flexibility! You can take full-length practice tests for the complete exam experience, or focus on individual sections (Reading, Listening, Speaking, Writing) based on your study needs."
    },
    {
      question: "How many practice tests are available?",
      answer: "We currently offer 15 full-length TOEFL iBT test practice tests, with over 50 section-based practice exercises."
    },
    {
      question: "Do I need to download any software?",
      answer: "No downloads required! Our platform is entirely web-based and accessible from any device with an internet connection. You can practice anywhere, anytime."
    },
    {
      question: "Is there a time limit for practice tests?",
      answer: "Yes, our practice tests follow the official TOEFL iBT test timing: Reading (54-72 minutes), Listening (41-57 minutes), Speaking (17 minutes), and Writing (50 minutes). You can also practice individual tests without time limits if preferred."
    },
    {
      question: "Can I retake the same practice test?",
      answer: "Absolutely! You can retake any practice test as many times as you want to track your improvement and build confidence before the actual exam."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our TOEFL ibt test preparation platform
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
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
