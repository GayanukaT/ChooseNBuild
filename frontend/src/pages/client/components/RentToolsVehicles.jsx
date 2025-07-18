import React from "react";

const sampleItems = [
  {
    id: 1,
    name: "Excavator",
    type: "Vehicle",
    price: 5000,
    description: "Heavy-duty excavator suitable for large-scale digging.",
  },
  {
    id: 2,
    name: "Electric Drill",
    type: "Tool",
    price: 150,
    description: "Cordless electric drill with multiple speed settings.",
  },
  {
    id: 3,
    name: "Dump Truck",
    type: "Vehicle",
    price: 7000,
    description: "Truck for hauling and dumping materials at construction sites.",
  },
];

const RentToolsVehicles = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Rent Tools & Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleItems.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{item.description}</p>
            <p className="text-sm text-gray-600">Type: <span className="font-medium">{item.type}</span></p>
            <p className="text-base font-bold text-green-700">Rs. {item.price} / day</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentToolsVehicles;
