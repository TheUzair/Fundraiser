'use client';

import { useState } from 'react';

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState('tiers');

  const tiers = [
    {
      name: 'Bronze Fundraiser',
      threshold: 1000,
      benefits: [
        'Profile badge',
        'Basic analytics',
        'Email support'
      ],
      icon: '🥉'
    },
    {
      name: 'Silver Fundraiser',
      threshold: 5000,
      benefits: [
        'All Bronze benefits',
        'Priority support',
        'Custom campaign URL',
        'Monthly strategy call'
      ],
      icon: '🥈'
    },
    {
      name: 'Gold Fundraiser',
      threshold: 10000,
      benefits: [
        'All Silver benefits',
        'Featured campaigns',
        'Zero platform fees',
        'Dedicated account manager'
      ],
      icon: '🥇'
    }
  ];

  const achievements = [
    {
      name: 'First Campaign',
      description: 'Successfully launched your first fundraising campaign',
      progress: 100,
      icon: '🚀'
    },
    {
      name: 'Network Builder',
      description: 'Reached 100 donors',
      progress: 65,
      icon: '🤝'
    },
    {
      name: 'Goal Crusher',
      description: 'Exceeded campaign goal by 150%',
      progress: 30,
      icon: '🎯'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Rewards & Achievements</h1>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border p-1 bg-gray-50">
          <button
            onClick={() => setActiveTab('tiers')}
            className={`px-4 py-2 rounded-md ${activeTab === 'tiers'
                ? 'bg-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            Reward Tiers
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-4 py-2 rounded-md ${activeTab === 'achievements'
                ? 'bg-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            Achievements
          </button>
        </div>
      </div>

      {activeTab === 'tiers' ? (
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{tier.icon}</div>
              <h2 className="text-xl font-bold mb-2">{tier.name}</h2>
              <p className="text-gray-600 mb-4">
                Raise ₹{tier.threshold.toLocaleString()} to unlock
              </p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className="border rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{achievement.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {achievement.progress}% Complete
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Your Current Status</h2>
        <p className="text-gray-600">
          Total Funds Raised: <span className="font-bold">$3,500</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          $1,500 more to reach Silver Tier
        </p>
      </div>
    </div>
  );
}