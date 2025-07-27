import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

function BuildingServices() {
  return {
    'Planning & Design': [
      'Basic home layout',
      '3D home preview',
      'Interior ideas & moodboards',
      'Garden or lawn planning',
      'Soil test & land check',
      'Building permits & approvals',
      'Budget planning & estimate',
    ],
    'Site Preparation': [
      'Clearing the plot',
      'Land leveling',
      'Marking & fencing',
      'Initial digging',
      'Temporary toilet & water setup',
    ],
    'Foundation & Structure': [
      'Laying the foundation',
      'Basement (if needed)',
      'Steel & concrete frame',
      'Walls & block laying',
      'Roof base & slab casting',
      'Staircase frame',
    ],
    'Electrical, Plumbing & Safety': [
      'Wiring & switch points',
      'Pipes & bathroom setup',
      'Overhead or underground water tank',
      'Waterproofing work',
      'AC fitting & ducting',
      'Fire alarm setup',
    ],
    'Exterior Work': [
      'Roof tiles or sheets',
      'Window & door fitting',
      'Outside wall finish',
      'Outside painting',
      'Gutter or rainwater system',
      'Porch / balcony',
    ],
    'Interior Work': [
      'Wall plaster & smoothing',
      'Tiles for floors & bathrooms',
      'Paint for inside walls',
      'Modular kitchen & chimney',
      'Cupboards & wardrobes',
      'Bathroom accessories',
      'Light & fan fitting',
    ],
    'Final Cleaning & Setup': [
      'House cleaning & dust removal',
      'Basic furniture fitting',
      'Appliance installation',
      'Smart home setup',
      'Pest control',
      'Final walkthrough',
    ],
    'Extra Options': [
      'Swimming pool',
      'Solar power setup',
      'Security cameras',
      'Lift or elevator',
      'Car parking or garage',
      'Backup power or inverter',
      'Boundary wall & gate',
    ],
  };
}

function RenovatingServices() {
  return {
    'Interior Upgrades': [
      'Repainting walls',
      'Floor replacement',
      'False ceiling installation',
      'New lighting setup',
      'Modular kitchen upgrade',
      'Bathroom renovation',
    ],
    'Structural Changes': [
      'Room partitioning',
      'Wall demolition',
      'Balcony extension',
      'Loft or storage addition',
    ],
    'Exterior Renovation': [
      'Repainting outside walls',
      'Replacing windows & doors',
      'Waterproofing',
      'Facade improvement',
    ],
    'Utility & Systems': [
      'Electrical rewiring',
      'Plumbing fixes',
      'Water heater installation',
      'Air conditioner setup',
    ],
    'Safety & Modernization': [
      'Fire alarm installation',
      'Smart switches',
      'Security camera upgrades',
      'Home automation systems',
    ],
  };
}

function RentingServices() {
  return {
    'Tools & Equipment': [
      'Electric drill',
      'Concrete mixer',
      'Ladders and scaffolding',
      'Power tools',
      'Hand tools',
    ],
    'Heavy Machinery': [
      'Excavator',
      'Bulldozer',
      'Forklift',
      'Mini crane',
      'Dump truck',
    ],
    'Temporary Structures': [
      'Portable toilet',
      'Site office cabin',
      'Temporary fencing',
      'Scaffolding systems',
    ],
    'Utility Rentals': [
      'Water tank',
      'Generator / Power backup',
      'Lighting systems',
      'Air conditioning units',
    ],
  };
}

const areas = [
  {
    name: 'Building',
    description: 'Start a new home or structure from the ground up.',
    image: '/assets/building.png',
    services: BuildingServices(),
  },
  {
    name: 'Renovating',
    description: 'Improve or modernize an existing building.',
    image: '/assets/renovating.png',
    services: RenovatingServices(),
  },
  {
    name: 'Renting',
    description: 'Rent tools, machinery, or temporary structures.',
    image: '/assets/renting.png',
    services: RentingServices(),
  },
];

function ClientDashboard() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

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

  const handleContinue = () => {
    if (selectedServices.length === 0) {
      alert('Please select at least one service to continue.');
      return;
    }

    navigate('/client/newservice', { state: { services: selectedServices } });
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-800 font-sans tracking-normal leading-normal">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>

        {!selectedArea ? (
          <>
            <p className="text-xl mb-12">Step 1: What would you like to do?</p>
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
              Step 2: Pick the services you need under <strong>{selectedArea.name}</strong>
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
                        className={`p-3 rounded-lg border cursor-pointer transition ${
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
                onClick={handleContinue}
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
