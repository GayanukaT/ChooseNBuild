import React from 'react';
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';

function ProviderRegister() {
  const [businessname, setBusinessName] = React.useState('');
  const [businesstype, setBusinessType] = React.useState('');
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
      await API.post('/user/provider/register', {
        businessname,
        businesstype,
        email,
        password,
      });
      navigate('/');
    } catch (error) {
      setError('Registration failed! Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">ChooseNBuild Provider Registration</h1>

      {error && (
        <div className="text-yellow-800 bg-yellow-100 border border-yellow-500 px-4 py-3 rounded mb-6 w-full max-w-md text-center">
          {error}
        </div>
      )}

      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 border border-gray-200">
        <h2 className="text-xl font-bold text-yellow-700 mb-6">Provider Register</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="relative z-0 w-full group">
            <input
              type="text"
              value={businessname}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              placeholder=" "
              className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-2 
              peer-focus:scale-75 
              peer-focus:-translate-y-4">
              Business Name
            </label>
          </div>

          <div className="relative z-0 w-full group">
            <input
              type="text"
              value={businesstype}
              onChange={(e) => setBusinessType(e.target.value)}
              required
              placeholder=" "
              className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-2 
              peer-focus:scale-75 
              peer-focus:-translate-y-4">
              Business Type
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
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-2 
              peer-focus:scale-75 
              peer-focus:-translate-y-4">
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
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-2 
              peer-focus:scale-75 
              peer-focus:-translate-y-4">
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
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-2 
              peer-focus:scale-75 
              peer-focus:-translate-y-4">
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
    </div>
  );
}

export default ProviderRegister;
