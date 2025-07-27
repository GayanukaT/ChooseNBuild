import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-300">Choose</span>
          <span className="text-gray-200">NBuild</span>
        </div>

        <div className="space-x-8 text-sm md:text-base">
          <a href="" className="hover:text-yellow-300 transition-colors duration-300">Home</a>
          <a href="/provider/dashboard" className="hover:text-yellow-300 transition-colors duration-300">New Bid</a>
          <a href="/provider/logout" className="hover:text-yellow-300 transition-colors duration-300">Log Out</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
