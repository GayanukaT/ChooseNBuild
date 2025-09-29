import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import '../main.jsx';

function Login() {
  const [provideremail, setProviderEmail] = React.useState('');
  const [providerpassword, setProviderPassword] = React.useState('');
  const [clientemail, setClientEmail] = React.useState('');
  const [clientpassword, setClientPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  const handleClientLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/user/client/login', {
        email: clientemail,
        password: clientpassword,
      });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/client/dashboard');
    } catch (error) {
      setError('Login failed! Please check your credentials.');
    }
  };

  const handleProviderLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/user/provider/login', {
        email: provideremail,
        password: providerpassword,
      });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/provider/dashboard');
    } catch (error) {
      setError('Login failed! Please check your credentials.');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-fixed px-4 py-12 leading-normal tracking-normal text-yellow-600"
      style={{ backgroundImage: "url('/assets/header.jpg')" }}
    >
      <h1 className="text-4xl font-extrabold text-yellow-600 mb-10">ChooseNBuild Login Portal</h1>

      {error && (
        <div className="text-yellow-800 bg-yellow-100 border border-yellow-500 px-4 py-3 rounded mb-6 w-full max-w-md text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Client Login */}
        <div className="bg-white p-8 rounded-2xl shadow-xl w-80 border border-gray-200">
          <h2 className="text-xl font-bold text-yellow-700 mb-6">Client Login</h2>
          <form onSubmit={handleClientLogin} className="space-y-6">
            <div className="relative z-0 w-full group">
              <input
                type="email"
                value={clientemail}
                onChange={(e) => setClientEmail(e.target.value)}
                required
                placeholder=" "
                className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Email
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="password"
                value={clientpassword}
                onChange={(e) => setClientPassword(e.target.value)}
                required
                placeholder=" "
                className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Password
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded transition duration-300"
            >
              Login
            </button>
          </form>
        </div>

        {/* Provider Login */}
        <div className="bg-white p-8 rounded-2xl shadow-xl w-80 border border-gray-200">
          <h2 className="text-xl font-bold text-yellow-700 mb-6">Provider Login</h2>
          <form onSubmit={handleProviderLogin} className="space-y-6">
            <div className="relative z-0 w-full group">
              <input
                type="email"
                value={provideremail}
                onChange={(e) => setProviderEmail(e.target.value)}
                required
                placeholder=" "
                className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Email
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="password"
                value={providerpassword}
                onChange={(e) => setProviderPassword(e.target.value)}
                required
                placeholder=" "
                className="peer block w-full px-0 pt-5 pb-2 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600"
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                Password
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;