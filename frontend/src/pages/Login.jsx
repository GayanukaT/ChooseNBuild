import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Login(){
    const [provideremail, setProviderEmail] = React.useState('');
    const [providerpassword, setProviderPassword] = React.useState('');
    const [clientemail, setClientEmail] = React.useState('');
    const [clientpassword, setClientPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const navigate = useNavigate();
    
    const handleClientLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await API.post("/user/client/login", { email:clientemail, password:clientpassword });
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            
            navigate("/clientdashboard");
        }catch(error){
            setError("Login failed! Please check your credentials.");
        }
    };

    const handleProviderLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await API.post("/user/provider/login",{ email:provideremail, password:providerpassword });
            const { token, user} = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            navigate("/providerdashboard");
        }catch(error){
            setError("Login failed! Please check your credentials.");
        }
    }

return (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
    <h1 className="text-4xl font-bold mb-8 text-gray-800">Login Page</h1>

    {error && (
      <div className="text-red-600 bg-red-100 border border-red-400 p-3 rounded mb-6 w-80 text-center">
        {error}
      </div>
    )}

    <div className="flex gap-12">
      {/* Client Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Client</h2>
        <form onSubmit={handleClientLogin}>
          <input
            type="email"
            placeholder="Email"
            value={clientemail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={clientpassword}
            onChange={(e) => setClientPassword(e.target.value)}
            required
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>

      {/* Provider Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Provider</h2>
        <form onSubmit={handleProviderLogin}>
          <input
            type="email"
            placeholder="Email"
            value={provideremail}
            onChange={(e) => setProviderEmail(e.target.value)}
            required
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={providerpassword}
            onChange={(e) => setProviderPassword(e.target.value)}
            required
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors duration-300"
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