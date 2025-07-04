
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "How similar are your free practice tests to the real TOEFL iBT?",
      answer: "Our free practice tests are carefully designed to mirror the official TOEFL iBT format, question types, difficulty levels, and timing. We follow the same structure and scoring guidelines used in the actual exam."
    },
    {
      question: "Can I take individual sections or do I need to complete full tests?",
      answer: "You have complete flexibility! You can take full-length free practice tests for the complete exam experience, or focus on individual sections (Reading, Listening, Speaking, Writing) based on your study needs."
    },
    {
      question: "How many free practice tests are available?",
      answer: "We currently offer 15+ full-length free TOEFL iBT practice tests, with over 100 section-based practice exercises. We regularly add new content to keep your preparation fresh and comprehensive."
    },
    {
      question: "Do I need to download any software?",
      answer: "No downloads required! Our platform is entirely web-based and accessible from any device with an internet connection. You can practice anywhere, anytime."
    },
    {
      question: "How do you ensure the quality of your free practice materials?",
      answer: "All our content is developed by language experts and TOEFL specialists who follow official testing standards. We regularly update our materials based on the latest exam patterns and user feedback."
    },
    {
      question: "What kind of feedback do I get after completing a free test?",
      answer: "You receive detailed performance analysis including section-by-section scores, question-by-question explanations, and personalized recommendations for improvement areas."
    },
    {
      question: "Is there a time limit for free practice tests?",
      answer: "Yes, our free practice tests follow the official TOEFL iBT timing: Reading (54-72 minutes), Listening (41-57 minutes), Speaking (17 minutes), and Writing (50 minutes). You can also practice without time limits if preferred."
    },
    {
      question: "Can I retake the same free practice test?",
      answer: "Absolutely! You can retake any free practice test as many times as you want to track your improvement and build confidence before the actual exam."
    },
    {
      question: "Do I need to create an account to use the free practice tests?",
      answer: "While you can access some content without an account, creating a free account allows you to save your progress, track your scores, and access additional features."
    },
    {
      question: "Are the free practice tests mobile-friendly?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on desktops, tablets, and smartphones, so you can practice wherever you are."
    },
    {
      question: "How often do you add new free practice content?",
      answer: "We regularly update our content with new free practice tests and exercises. New materials are typically added monthly to ensure you always have fresh content to practice with."
    },
    {
      question: "Can I see my progress over time?",
      answer: "Yes, once you create an account, you can track your performance across multiple free practice tests and see detailed analytics of your improvement in each section."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our free TOEFL preparation platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
