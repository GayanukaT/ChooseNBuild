import React from "react";

const ClientHome = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Rentify</h1>
      <p className="text-lg text-gray-600">
        Your one-stop platform for renting tools, vehicles, construction materials, and accessing renovation services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Rent Tools & Vehicles</h2>
          <p className="text-sm text-gray-600">
            Browse and rent high-quality tools and vehicles for your next project.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Get Construction Materials</h2>
          <p className="text-sm text-gray-600">
            Find cement, bricks, steel, and more at the best prices.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Garden Design Services</h2>
          <p className="text-sm text-gray-600">
            Transform your outdoor space with custom garden design options.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Fix & Renovate</h2>
          <p className="text-sm text-gray-600">
            Repair cracks, leaks, and renovate kitchens or bathrooms easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
