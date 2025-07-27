import React from 'react';
import Navbar from './components/Navbar';

function UpdateProviderInfo() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Update Your Info</h1>
        <form className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Business Name</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Service Areas</label>
            <input type="text" placeholder="e.g., Chennai, Bangalore" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Available Services</label>
            <textarea className="w-full border rounded p-2" rows="4"></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save Info
          </button>
        </form>
      </main>
    </div>
  );
}

export default UpdateProviderInfo;
