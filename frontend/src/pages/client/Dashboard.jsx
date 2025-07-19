import React from 'react';
import Navbar from './components/Navbar';
import ClientHome from './components/ClientHome';

function ClientDashboard() {
  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-700 font-sans tracking-normal leading-normal">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <ClientHome />
      </main>
      <footer className="w-full mt-16 py-6 text-sm text-center text-gray-400">
        &copy; 2025 ChooseNBuild. All rights reserved.
      </footer>
    </div>
  );
}

export default ClientDashboard;
