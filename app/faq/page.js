'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I start a fundraising campaign?",
      answer: "Starting a campaign is easy! Simply click the 'Create Campaign' button, fill in your campaign details including your goal amount, story, and images, then submit for review. Once approved, your campaign will be live."
    },
    {
      question: "What fees are involved?",
      answer: "We charge a standard 2.9% + $0.30 processing fee for credit card transactions. Additional platform fees may vary depending on your subscription plan. All fees are transparently displayed before you start your campaign."
    },
    {
      question: "How long can my campaign run?",
      answer: "Campaigns can run from 1 day up to 12 months. You can also choose to make your campaign ongoing with no end date. You have the flexibility to end your campaign at any time."
    },
    {
      question: "When do I receive the donations?",
      answer: "Donations are typically processed within 2-5 business days and transferred directly to your connected bank account. For first-time campaigners, there might be an initial verification period."
    },
    {
      question: "Can I edit my campaign after it's live?",
      answer: "Yes, you can edit most aspects of your campaign after it goes live, including the description, images, and updates. However, some elements like the campaign title may require admin approval to change."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Tax deductibility depends on the campaign type and the organization running it. Charitable campaigns run by registered nonprofits typically provide tax receipts. Please consult with a tax professional for specific advice."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Still have questions?{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}