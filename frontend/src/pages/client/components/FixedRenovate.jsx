import React from "react";

const renovationServices = [
  {
    id: 1,
    title: "Wall Crack Repair",
    details: "Filling and sealing wall cracks, repainting if needed.",
    price: 4500,
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    details: "Tiling, plumbing fixture upgrades, and waterproofing.",
    price: 35000,
  },
  {
    id: 3,
    title: "Roof Leak Fixing",
    details: "Leak detection, patching, and sealing for all roof types.",
    price: 12000,
  },
  {
    id: 4,
    title: "Kitchen Cabinet Refacing",
    details: "Replacing or repainting cabinet doors and handles.",
    price: 18000,
  },
];

const FixedRenovate = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Fix & Renovate Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {renovationServices.map((service) => (
          <div key={service.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{service.details}</p>
            <p className="text-base font-bold text-green-700">Rs. {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedRenovate;
