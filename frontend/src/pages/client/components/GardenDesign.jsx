import React from "react";

const gardenDesigns = [
  {
    id: 1,
    title: "Modern Minimalist Garden",
    features: "Clean lines, geometric layout, low-maintenance plants.",
    price: 25000,
  },
  {
    id: 2,
    title: "Tropical Paradise",
    features: "Lush greenery, palm varieties, and vibrant flowers.",
    price: 32000,
  },
  {
    id: 3,
    title: "Zen Garden",
    features: "Raked gravel, rocks, and calming arrangements.",
    price: 28000,
  },
];

const GardenDesign = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Garden Design Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gardenDesigns.map((design) => (
          <div key={design.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700">{design.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{design.features}</p>
            <p className="text-base font-bold text-green-700">Starting at Rs. {design.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardenDesign;
