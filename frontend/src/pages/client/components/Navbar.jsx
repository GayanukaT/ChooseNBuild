import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Rentify</div>

        <div className="space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#rent" className="hover:text-gray-300 transition">Rent</a>
          <a href="#tools" className="hover:text-gray-300 transition">Tools</a>
          <a href="#vehicles" className="hover:text-gray-300 transition">Vehicles</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
