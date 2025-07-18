import React from "react";

const BuildHome = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome, Provider</h1>
      <p className="text-lg text-gray-600">
        Manage your listings, track customer requests, and update your services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Your Rentals</h2>
          <p className="text-sm text-gray-600">
            View and manage tools or vehicles you’ve listed for rent.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Material Listings</h2>
          <p className="text-sm text-gray-600">
            Check or edit your construction materials available to clients.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Renovation Services</h2>
          <p className="text-sm text-gray-600">
            Update your service descriptions, pricing, or availability.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Design Projects</h2>
          <p className="text-sm text-gray-600">
            Add or manage garden and interior design offerings.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700">Client Requests</h2>
          <p className="text-sm text-gray-600">
            Track incoming orders and requests from clients in real time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildHome;
