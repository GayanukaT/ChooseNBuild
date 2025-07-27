import React from 'react';
import Navbar from './components/Navbar';

const areas = [
  {
    name: 'Building',
    description: 'Start something from beginning',
    image: '/assets/building.png',
  },
  {
    name: 'Renovating',
    description: 'Upgrade or fix',
    image: '/assets/renovating.png',
  },
  {
    name: 'Renting',
    description: 'Borrow instead of buying',
    image: '/assets/renting.png',
  },
];

function ClientDashboard() {
  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-800 font-sans tracking-normal leading-normal">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <p className="text-xl mb-12">First step: Choose what area you want</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={area.image}
                alt={area.name}
                className="rounded-xl mb-4 w-full h-40 object-contain"
              />
              <h2 className="text-2xl font-semibold mb-2">{area.name}</h2>
              <p className="text-sm text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full mt-16 py-6 text-sm text-center text-gray-400">
        &copy; 2025 ChooseNBuild. All rights reserved.
      </footer>
    </div>
  );
}

export default ClientDashboard;
