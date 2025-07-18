import React from "react";

const materials = [
  {
    id: 1,
    name: "Cement Bags",
    unit: "50kg",
    price: 1150,
    description: "High-quality cement suitable for residential and commercial projects.",
  },
  {
    id: 2,
    name: "Bricks",
    unit: "per 1000",
    price: 18000,
    description: "Red clay bricks ideal for walls and foundation work.",
  },
  {
    id: 3,
    name: "Steel Rods",
    unit: "per meter",
    price: 320,
    description: "Strong reinforced steel rods for structural support.",
  },
];

const GetMaterials = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Get Construction Materials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials.map((material) => (
          <div key={material.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700">{material.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{material.description}</p>
            <p className="text-sm text-gray-600">
              Unit: <span className="font-medium">{material.unit}</span>
            </p>
            <p className="text-base font-bold text-green-700">Rs. {material.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMaterials;
