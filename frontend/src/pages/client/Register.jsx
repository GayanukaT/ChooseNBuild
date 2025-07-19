import React from 'react';
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';

function ClientRegister() {
  const [fullname, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      await API.post('/user/client/register', {
        fullname,
        email,
        password,
      });
      navigate('/');
    } catch (error) {
      setError('Registration failed! Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center bg-cover bg-fixed px-4 py-12 leading-normal tracking-normal text-yellow-600"
      style={{ backgroundImage: "url('/assets/header.jpg')" }}
    >
      {/* ChooseNBuild Logo Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-yellow-600 mb-10 mt-6">
        Choose<span className="text-gray-400">NBuild</span>
      </h1>

      {/* Error Message */}
      {error && (
        <div className="text-yellow-800 bg-yellow-100 border border-yellow-500 px-4 py-3 rounded mb-6 w-full max-w-md text-center">
          {error}
        </div>
      )}

      {/* Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 border border-gray-200">
        <h2 className="text-xl font-bold text-yellow-700 mb-6 text-center">
          Client Registration
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="relative z-0 w-full group">
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder=" "
              className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
            />
            <label
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-2
                peer-focus:scale-75
                peer-focus:-translate-y-4"
            >
              Full Name
            </label>
          </div>

          <div className="relative z-0 w-full group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" "
              className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
            />
            <label
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-2
                peer-focus:scale-75
                peer-focus:-translate-y-4"
            >
              Email
            </label>
          </div>

          <div className="relative z-0 w-full group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
              className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
            />
            <label
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-2
                peer-focus:scale-75
                peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>

          <div className="relative z-0 w-full group">
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder=" "
              className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
            />
            <label
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-2
                peer-focus:scale-75
                peer-focus:-translate-y-4"
            >
              Confirm Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded transition duration-300"
          >
            Register
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full mt-16 py-6 text-sm text-center text-gray-400">
        &copy; 2025 ChooseNBuild. All rights reserved.
      </footer>
    </div>
  );
}

export default ClientRegister;
