import React from 'react';

const ClientHome = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ChooseNBuild</h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-10">
        Your one-stop platform for renting tools, vehicles, construction materials, and accessing renovation services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-yellow-400 rounded-xl p-6 shadow-md hover:shadow-yellow-300 transition-shadow duration-300 bg-white">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">Rent Tools & Vehicles</h2>
          <p className="text-gray-600 text-sm">
            Browse and rent high-quality tools and vehicles for your next project.
          </p>
        </div>

        <div className="border border-yellow-400 rounded-xl p-6 shadow-md hover:shadow-yellow-300 transition-shadow duration-300 bg-white">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">Get Construction Materials</h2>
          <p className="text-gray-600 text-sm">
            Find cement, bricks, steel, and more at the best prices.
          </p>
        </div>

        <div className="border border-yellow-400 rounded-xl p-6 shadow-md hover:shadow-yellow-300 transition-shadow duration-300 bg-white">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">Garden Design Services</h2>
          <p className="text-gray-600 text-sm">
            Transform your outdoor space with custom garden design options.
          </p>
        </div>

        <div className="border border-yellow-400 rounded-xl p-6 shadow-md hover:shadow-yellow-300 transition-shadow duration-300 bg-white">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">Fix & Renovate</h2>
          <p className="text-gray-600 text-sm">
            Repair cracks, leaks, and renovate kitchens or bathrooms easily.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientHome;
