'use client';

import { useState } from 'react';

export default function UpgradePage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      price: billingPeriod === 'monthly' ? 9.99 : 99.99,
      features: [
        'Create up to 3 campaigns',
        'Basic analytics',
        'Email support',
        'Standard processing fees'
      ]
    },
    {
      name: 'Pro',
      price: billingPeriod === 'monthly' ? 29.99 : 299.99,
      features: [
        'Unlimited campaigns',
        'Advanced analytics',
        'Priority support',
        'Reduced processing fees',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? 99.99 : 999.99,
      features: [
        'All Pro features',
        'Dedicated account manager',
        'API access',
        'Custom integrations',
        'Lowest processing fees'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Upgrade Your Plan</h1>
        <p className="text-gray-600 mb-8">Choose the perfect plan for your fundraising needs</p>
        
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 rounded-lg ${
              billingPeriod === 'monthly' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-4 py-2 rounded-lg ${
              billingPeriod === 'yearly' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-xl p-6 ${
              plan.popular ? 'border-blue-500 ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-4xl font-bold mb-6">
              ${plan.price}
              <span className="text-base font-normal text-gray-500">
                /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
              </span>
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 px-4 rounded-lg ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>Need a custom plan? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a></p>
      </div>
    </div>
  );
}