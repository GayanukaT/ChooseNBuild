import React, { useState } from 'react';
import Navbar from './components/Navbar';

const areas = [
  {
    name: 'Building',
    description: 'Start something from beginning',
    image: '/assets/building.png',
    services: ['Home Design', 'Foundation', 'Plumbing', 'Roofing', 'Finishing'],
  },
  {
    name: 'Renovating',
    description: 'Upgrade or fix',
    image: '/assets/renovating.png',
    services: ['Painting', 'Bathroom Upgrade', 'Kitchen Remodel'],
  },
  {
    name: 'Renting',
    description: 'Borrow instead of buying',
    image: '/assets/renting.png',
    services: ['Tool Rental', 'Vehicle Rental', 'Temporary Structures'],
  },
];

function ClientDashboard() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setSelectedServices([]);
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-800 font-sans tracking-normal leading-normal">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>

        {!selectedArea ? (
          <>
            <p className="text-xl mb-12">First step: Choose what area you want</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 cursor-pointer"
                  onClick={() => handleAreaClick(area)}
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
          </>
        ) : (
          <>
            <p className="text-xl mb-4">
              Second step: Select services under <strong>{selectedArea.name}</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedArea.services.map((service) => (
                <div
                  key={service}
                  className={`p-4 border rounded-xl shadow-sm cursor-pointer transition ${
                    selectedServices.includes(service)
                      ? 'bg-yellow-300 border-yellow-500'
                      : 'bg-white'
                  }`}
                  onClick={() => toggleService(service)}
                >
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => setSelectedArea(null)}
                className="mr-4 px-4 py-2 bg-gray-300 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={() => alert(`Selected: ${selectedServices.join(', ')}`)}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
              >
                Continue
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="w-full mt-16 py-6 text-sm text-center text-gray-400">
        &copy; 2025 ChooseNBuild. All rights reserved.
      </footer>
    </div>
  );
}

export default ClientDashboard;
