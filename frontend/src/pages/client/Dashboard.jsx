import React, { useState } from 'react';
import Navbar from './components/Navbar';

const areas = [
  {
    name: 'Building',
    description: 'Start a new home or structure from the ground up.',
    image: '/assets/building.png',
    services: buildingServices(),
  },
  {
    name: 'Renovating',
    description: 'Improve or modernize an existing building.',
    image: '/assets/renovating.png',
    services: {},
  },
  {
    name: 'Renting',
    description: 'Rent tools, machinery, or temporary structures.',
    image: '/assets/renting.png',
    services: {},
  },
];

function buildingServices() {
  return {
    'Planning & Design': [
      'Home layout planning',
      '3D home preview',
      'Interior design ideas',
      'Garden & landscape plan',
      'Soil test & land survey',
      'Building permits',
      'Cost estimate & budget planning',
    ],
    'Site Preparation': [
      'Land clearing',
      'Digging and excavation',
      'Temporary fencing & safety',
      'Leveling the land',
    ],
    'Foundation & Structure': [
      'Laying foundation',
      'Building basement (optional)',
      'Columns and beams',
      'Walls & blockwork',
      'Concrete slab casting',
    ],
    'Electric, Water & Plumbing': [
      'Electrical wiring',
      'Pipes and drainage',
      'Waterproofing',
      'Water tank setup',
      'Air conditioning setup',
      'Fire safety system',
    ],
    'Exterior Finishing': [
      'Roof installation',
      'Windows & doors',
      'Exterior wall finish',
      'Outside painting',
      'Rainwater system',
    ],
    'Interior Work': [
      'Interior wall plaster',
      'Floor tiles & bathroom tiles',
      'Painting inside walls',
      'Modular kitchen fitting',
      'Cupboards & shelves',
      'Bathroom fittings',
      'Lights & fans setup',
    ],
    'Final Touch & Cleaning': [
      'Deep cleaning of house',
      'Furniture & appliances setup',
      'Home automation (optional)',
      'Pest control',
      'Final inspection & approval',
    ],
    'Extra Options': [
      'Swimming pool',
      'Solar power system',
      'Security camera setup',
      'Elevator or lift',
      'Garage or car parking',
      'Power backup / inverter',
    ],
  };
}

function ClientDashboard() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleSection = (section, services) => {
    const isAllSelected = services.every((s) => selectedServices.includes(s));
    setSelectedServices((prev) =>
      isAllSelected
        ? prev.filter((s) => !services.includes(s))
        : [...new Set([...prev, ...services])]
    );
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-800 font-sans tracking-normal leading-normal">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>

        {!selectedArea ? (
          <>
            <p className="text-xl mb-12">Step 1: Choose what you want to do</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 cursor-pointer"
                  onClick={() => setSelectedArea(area)}
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
              Step 2: Select what you need under <strong>{selectedArea.name}</strong>
            </p>

            <div className="space-y-8 text-left">
              {Object.entries(selectedArea.services).map(([section, services]) => (
                <div key={section}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{section}</h3>
                    <button
                      onClick={() => toggleSection(section, services)}
                      className="text-sm text-yellow-700 hover:underline"
                    >
                      {services.every((s) => selectedServices.includes(s))
                        ? 'Deselect All'
                        : 'Select All'}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <div
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-3 rounded-lg border cursor-pointer ${
                          selectedServices.includes(service)
                            ? 'bg-yellow-300 border-yellow-600'
                            : 'bg-white border-gray-300'
                        }`}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => setSelectedArea(null)}
                className="mr-4 px-4 py-2 bg-gray-300 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={() => alert(`Selected services:\n${selectedServices.join('\n')}`)}
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
