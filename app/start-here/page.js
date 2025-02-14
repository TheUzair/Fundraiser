'use client';

import { useState } from 'react';

export default function StartHerePage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to Fundraiser',
      description: 'Your journey to successful fundraising starts here',
      icon: '👋',
      content: [
        'Create meaningful campaigns',
        'Connect with donors worldwide',
        'Track your progress in real-time',
        'Achieve your fundraising goals'
      ]
    },
    {
      title: 'Create Your Campaign',
      description: 'Set up your first fundraising campaign in minutes',
      icon: '🚀',
      content: [
        'Choose your campaign type',
        'Set your fundraising goal',
        'Tell your story',
        'Add compelling images or videos'
      ]
    },
    {
      title: 'Share & Promote',
      description: 'Spread the word about your campaign',
      icon: '🌟',
      content: [
        'Share on social media',
        'Email to friends and family',
        'Engage with your community',
        'Update supporters regularly'
      ]
    },
    {
      title: 'Manage Donations',
      description: 'Track and manage your fundraising progress',
      icon: '📊',
      content: [
        'Monitor donations in real-time',
        'Thank your donors',
        'Post campaign updates',
        'Withdraw funds securely'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Start Your Fundraising Journey</h1>
        <p className="text-gray-600">Follow these simple steps to launch your campaign</p>
      </div>

      <div className="flex mb-8 justify-between items-center">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`flex flex-col items-center w-1/4 relative ${
              index < activeStep ? 'text-green-600' : 
              index === activeStep ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              index < activeStep ? 'bg-green-100' :
              index === activeStep ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              {index < activeStep ? '✓' : (index + 1)}
            </div>
            <div className="text-sm font-medium">{step.title}</div>
            {index < steps.length - 1 && (
              <div className={`absolute top-5 left-1/2 w-full h-0.5 ${
                index < activeStep ? 'bg-green-600' : 'bg-gray-200'
              }`} />
            )}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">{steps[activeStep].icon}</div>
          <h2 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h2>
          <p className="text-gray-600">{steps[activeStep].description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps[activeStep].content.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            className={`px-6 py-2 rounded-lg ${
              activeStep === 0 ? 'invisible' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (activeStep === steps.length - 1) {
                window.location.href = '/create-campaign';
              } else {
                setActiveStep(activeStep + 1);
              }
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {activeStep === steps.length - 1 ? 'Start Campaign' : 'Next'}
          </button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Need help? <a href="/support" className="text-blue-600 hover:underline">Contact our support team</a>
        </p>
      </div>
    </div>
  );
}