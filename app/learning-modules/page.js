'use client';

import { useState } from 'react';

export default function LearningModulesPage() {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: 'Getting Started with Fundraising',
      description: 'Learn the basics of creating and managing successful fundraising campaigns.',
      duration: '30 mins',
      lessons: [
        'Understanding the Fundraising Landscape',
        'Creating Your First Campaign',
        'Setting Achievable Goals',
        'Writing Compelling Stories'
      ]
    },
    {
      id: 2,
      title: 'Marketing Your Campaign',
      description: 'Discover effective strategies to promote your fundraising campaign.',
      duration: '45 mins',
      lessons: [
        'Social Media Marketing',
        'Email Outreach',
        'Creating Engaging Content',
        'Leveraging Your Network'
      ]
    },
    {
      id: 3,
      title: 'Donor Engagement',
      description: 'Learn how to build and maintain relationships with donors.',
      duration: '40 mins',
      lessons: [
        'Communication Best Practices',
        'Thanking Donors',
        'Progress Updates',
        'Building Long-term Relationships'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Learning Center</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{module.title}</h2>
                <span className="text-sm text-gray-500">{module.duration}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{module.description}</p>
              
              <button
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                className="text-blue-600 hover:text-blue-800"
              >
                {activeModule === module.id ? 'Hide Contents' : 'Show Contents'}
              </button>
              
              {activeModule === module.id && (
                <div className="mt-4 space-y-2">
                  <h3 className="font-medium mb-2">Lessons:</h3>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-sm">
                          {index + 1}
                        </span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Start Learning
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Need More Help?</h2>
        <p className="text-gray-600 mb-4">
          Check out our comprehensive resources or contact our support team.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/resources"
            className="text-blue-600 hover:underline"
          >
            View Resources
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="/contact"
            className="text-blue-600 hover:underline"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}