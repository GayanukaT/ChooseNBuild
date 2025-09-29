import React from "react";

const Home = () => {
  return (
    <div
      className="leading-normal tracking-normal text-yellow-600 bg-cover bg-fixed min-h-screen"
      style={{ backgroundImage: "url('assets/header.jpg')" }}
    >
      {/* Navigation */}
      <div className="w-full container mx-auto py-6">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center text-yellow-600 font-bold text-2xl lg:text-4xl"
          >
            Choose<span className="text-gray-400">NBuild</span>
          </a>
          <div className="flex space-x-4">
            <span className="text-orange-300">Have an Account?</span>
              <a
              href="/login"
              className="text-yellow-300 hover:text-orange-500 transition transform hover:scale-110"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center pt-12 md:pt-24">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight mb-4">
            Build Smart.<br />Bid Smarter.
          </h1>
          <p className="text-base md:text-2xl text-yellow-200 mb-8">
            The all-in-one construction bidding platform for contractors and project owners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="/client/register"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded shadow-lg text-center transform hover:scale-105 transition duration-300 ease-in-out"
            >
              I Want to Get a Service
            </a>
            <a
              href="/provider/register"
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded shadow-lg text-center transform hover:scale-105 transition duration-300 ease-in-out"
            >
              I Want to Provide a Service
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-3/5 p-4">
          <img
          src="assets/builder.png"
          alt="Construction Illustration"
          className="mx-auto max-w-full md:max-w-md h-auto object-contain transform transition hover:scale-105 duration-700 ease-in-out"
          />

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-16 py-6 text-sm text-center text-gray-400">
        &copy; 2025 ChooseNBuild. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
