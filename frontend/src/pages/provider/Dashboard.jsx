import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function ProviderDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-900 font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome, Provider</h1>
        <p className="text-xl mb-10">What would you like to do today?</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div
            onClick={() => navigate('/provider/update')}
            className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-xl transition border border-yellow-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Update Provider Info</h2>
            <p className="text-gray-700">Keep your profile and services up to date.</p>
          </div>

          <div
            onClick={() => navigate('/provider/bids')}
            className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-xl transition border border-yellow-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">View Bids</h2>
            <p className="text-gray-700">See current client requests for your services.</p>
          </div>
        </div>
      </main>

      <footer className="w-full mt-16 py-6 text-sm text-center text-gray-500">
        &copy; 2025 ChooseNBuild. All rights reserved.
      </footer>
    </div>
  );
}

export default ProviderDashboard;
