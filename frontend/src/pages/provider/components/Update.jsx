import React, { useState } from 'react';
import Navbar from './Navbar';
import API from '../../../services/api';

export default function ProviderServiceForm() {
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceArea, setServiceArea] = useState('');
  const [availability, setAvailability] = useState('');
  const [rate, setRate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      serviceTitle,
      serviceDescription,
      serviceArea,
      availability,
      rate,
      phone,
      email,
    };

    try {
      const response = await API.post('/provider/service/create', payload);
      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Service offer submitted successfully!');
        setServiceTitle('');
        setServiceDescription('');
        setServiceArea('');
        setAvailability('');
        setRate('');
        setPhone('');
        setEmail('');
      } else {
        alert('Submission failed: ' + (data.message || 'Unknown error.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-900 font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-800">Offer a New Service</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-6 space-y-6 border border-yellow-200">
          <div>
            <label className="block text-sm font-semibold text-yellow-900">Service Title</label>
            <input
              type="text"
              value={serviceTitle}
              onChange={(e) => setServiceTitle(e.target.value)}
              className="w-full mt-1 p-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-yellow-900">Service Description</label>
            <textarea
              value={serviceDescription}
              onChange={(e) => setServiceDescription(e.target.value)}
              rows={4}
              className="w-full mt-1 p-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-yellow-900">Service Area / Coverage</label>
            <input
              type="text"
              value={serviceArea}
              onChange={(e) => setServiceArea(e.target.value)}
              className="w-full mt-1 p-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-yellow-900">Availability</label>
            <input
              type="text"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="e.g., Mon-Fri, 9am-6pm"
              className="w-full mt-1 p-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-yellow-900">Hourly Rate (optional)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g., 50"
              className="w-full mt-1 p-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-yellow-900">Contact Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 p-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-yellow-900">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Submit Service Offer
            </button>
          </div>
        </form>

        <footer className="w-full mt-12 py-6 text-sm text-center text-gray-500">
          &copy; 2025 ChooseNBuild. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
