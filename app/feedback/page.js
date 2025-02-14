'use client';

import { useState } from 'react';

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState({
    rating: 5,
    category: '',
    comment: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'General Experience',
    'Campaign Creation',
    'Donation Process',
    'Customer Support',
    'Website Usability',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the feedback to backend 
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
          <p className="text-green-600">Your feedback has been submitted successfully.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFeedback({ rating: 5, category: '', comment: '', email: '' });
            }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Share Your Feedback</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">How would you rate your experience?</label>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFeedback(prev => ({ ...prev, rating: value }))}
                className={`w-12 h-12 rounded-full ${
                  feedback.rating === value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block mb-2 font-medium">
            What area would you like to provide feedback on?
          </label>
          <select
            id="category"
            name="category"
            value={feedback.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="block mb-2 font-medium">
            Your feedback
          </label>
          <textarea
            id="comment"
            name="comment"
            value={feedback.comment}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg h-32"
            placeholder="Please share your thoughts..."
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email (optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            placeholder="your@email.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}