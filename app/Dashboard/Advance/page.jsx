"use client"
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Upgrade = () => {
  const [showFaq, setShowFaq] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 flex flex-col justify-center items-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Upgrade Your</span> AI LMS
      </h1>
      
      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-2xl p-8 space-y-6">
        {/* Upgrade Card */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Unlock Premium Features</h2>
          <p className="text-xl text-gray-600">Upgrade to get access to advanced AI-driven features that will take your learning experience to the next level.</p>
          
          <div className="flex justify-center">
            <Button
              className="px-10 py-3 text-lg bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:from-yellow-500 hover:to-pink-600 transition duration-300"
              onClick={() => router.push('/Dashboard/Advanced/payment')}
            >
              Upgrade Now
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Advanced AI Analytics</h3>
            <p className="text-lg text-gray-600">Gain insights with AI-powered analytics to track your progress and optimize learning paths.</p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Unlimited Access</h3>
            <p className="text-lg text-gray-600">Access all courses without any limitations and unlock exclusive premium content.</p>
          </div>
        </div>

        {/* FAQ Button */}
        <div className="mt-6 text-center">
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300"
            onClick={() => setShowFaq(true)}
          >
            Frequently Asked Questions
          </Button>
        </div>

        {/* FAQ Modal */}
        {showFaq && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h3 className="text-2xl font-semibold text-center mb-4">FAQs</h3>
              <ul className="space-y-4">
                <li>
                  <strong>How do I upgrade?</strong>
                  <p>Click the "Upgrade Now" button to proceed with the payment process and unlock premium features.</p>
                </li>
                <li>
                  <strong>What benefits do I get?</strong>
                  <p>You will get access to advanced AI features, unlimited courses, and exclusive content.</p>
                </li>
                <li>
                  <strong>Can I cancel my upgrade?</strong>
                  <p>Yes, you can cancel anytime by contacting support.</p>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => setShowFaq(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upgrade;
