'use client';

import { useState } from 'react';

export default function BillingPage() {
  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // payment processing logic would go here
    console.log('Billing information submitted:', billingInfo);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Billing Information</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="fullName" className="mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={billingInfo.fullName}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={billingInfo.email}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="mb-1">Billing Address</label>
          <textarea
            id="address"
            name="address"
            value={billingInfo.address}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cardNumber" className="mb-1">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={billingInfo.cardNumber}
            onChange={handleInputChange}
            className="border p-2 rounded"
            placeholder="**** **** **** ****"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="expiryDate" className="mb-1">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={billingInfo.expiryDate}
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cvv" className="mb-1">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={billingInfo.cvv}
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="***"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Process Payment
        </button>
      </form>
    </div>
  );
}