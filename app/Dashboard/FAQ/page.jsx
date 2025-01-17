"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is AI LMS?',
      answer: 'AI LMS (Learning Management System) is an AI-driven platform that helps you manage, track, and optimize your learning experience. It uses artificial intelligence to provide personalized learning paths and detailed analytics to improve your education journey.',
    },
    {
      question: 'How do I sign up for the platform?',
      answer: 'You can sign up by clicking the "Sign Up" button on the homepage. We offer both free and paid plans. After signing up, you can start exploring the courses available on the platform.',
    },
    {
      question: 'How does AI personalize my learning?',
      answer: 'Our AI analyzes your progress, learning style, and performance to suggest customized learning paths. It adapts over time to recommend the best course materials, assignments, and activities to improve your learning outcomes.',
    },
    {
      question: 'What features do I get with the premium plan?',
      answer: 'With the premium plan, you get access to advanced AI analytics, unlimited course access, priority support, personalized learning suggestions, and exclusive content. You will also be able to track detailed progress reports and receive coaching tips.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription anytime through the account settings. There are no cancellation fees, and you can still access premium content until the end of your billing cycle.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you instructions to reset your password.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 7-day free trial for all new users. You can explore our premium features during this period before deciding whether to subscribe to the paid plan.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact support via our "Contact Us" page, or you can use the live chat feature available at the bottom of the website. Our support team is available 24/7 to assist you.',
    },
    {
      question: 'What should I do if I face a technical issue?',
      answer: 'If you encounter any technical issues, please reach out to our support team with a description of the issue. Our team will assist you in resolving it as quickly as possible.',
    },
    {
      question: 'Can I access the platform on mobile?',
      answer: 'Yes, our platform is fully responsive and can be accessed on any mobile or tablet device. We also have a mobile app for both Android and iOS that provides an optimized learning experience.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-2xl p-8 space-y-6">
        {/* FAQ Accordion */}
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className="flex justify-between items-center cursor-pointer p-4 text-xl font-semibold text-gray-800 hover:bg-gray-100 transition duration-200"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              <span className={`text-2xl ${openIndex === index ? 'rotate-180' : ''}`}>
                &#9660;
              </span>
            </div>
            {openIndex === index && (
              <div className="p-4 text-lg text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        
        {/* Support Button */}
        <div className="mt-8 text-center">
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300"
            
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
