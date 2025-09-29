import React, { useState } from 'react';
import Navbar from './Navbar';
import API from '../../../services/api';  

export default function ServiceForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('Medium');
  const [location, setLocation] = useState('');
  const [needconsumption, setNeedConsumption] = useState('No');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      urgency,
      location,
      needconsumption,
      phone,
      email,
    };

    try {
      await API.post('/service/create', {
        title,
        description,
        urgency,
        location,
        needconsumption: needconsumption === 'Yes',
        phone,
        email,
      });

      alert('Service request submitted successfully!');
      setTitle('');
      setDescription('');
      setUrgency('Medium');
      setLocation('');
      setNeedConsumption('No');
      setPhone('');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-800 font-sans tracking-normal leading-normal">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Request New Service</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description / Notes</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Urgency Level</label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Location / Site Address</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Need Consultation?</label>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="consultation"
                  value="Yes"
                  checked={needconsumption === 'Yes'}
                  onChange={() => setNeedConsumption('Yes')}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="consultation"
                  value="No"
                  checked={needconsumption === 'No'}
                  onChange={() => setNeedConsumption('No')}
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Submit Request
            </button>
          </div>
        </form>

        <footer className="w-full mt-12 py-6 text-sm text-center text-gray-400">
          &copy; 2025 ChooseNBuild. All rights reserved.
        </footer>
      </main>
    </div>
  );
}