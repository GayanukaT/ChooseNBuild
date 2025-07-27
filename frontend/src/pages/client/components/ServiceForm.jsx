import React, { useState } from 'react';
import Navbar from './Navbar';

export default function ServiceForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    urgency: 'Medium',
    location: '',
    consultation: 'No',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add API submission logic here
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-800 font-sans tracking-normal leading-normal">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Request New Service</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Description / Notes</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm font-medium">Urgency Level</label>
            <select
              name="urgency"
              value={form.urgency}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium">Location / Site Address</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Consultation */}
          <div>
            <label className="block text-sm font-medium">Need Consultation?</label>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="consultation"
                  value="Yes"
                  checked={form.consultation === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="consultation"
                  value="No"
                  checked={form.consultation === 'No'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Submit */}
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
