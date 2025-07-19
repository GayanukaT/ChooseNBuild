import React from 'react';
import Navbar from './components/Navbar';
import ClientHome from './components/ClientHome';

function ClientDashboard() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <ClientHome />
      </main>
    </div>
  );
}

export default ClientDashboard;
