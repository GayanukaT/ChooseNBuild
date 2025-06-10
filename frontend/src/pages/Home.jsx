// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen relative font-sans">
      {/* Left - Client */}
      <div
        className="w-1/2 bg-yellow-100 flex items-center justify-center hover:bg-yellow-200 transition"
        onClick={() => navigate('/register/client')}
      >
        <h1 className="text-3xl font-bold cursor-pointer">I want to GET a service</h1>
      </div>

      {/* Right - Service Provider */}
      <div
        className="w-1/2 bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
        onClick={() => navigate('/register/provider')}
      >
        <h1 className="text-3xl font-bold cursor-pointer">I want to PROVIDE a service</h1>
      </div>

      {/* Center Login Button */}
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-400 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition"
        onClick={() => navigate('/login')}
      >
        Already have an account? Log In
      </button>
    </div>
  );
}