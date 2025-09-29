import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import API from '../../services/api';

function ProviderDashboard() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await API.get('/service/all');
      setServices(response.data.services);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-900 font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome, Provider</h1>
        <p className="text-xl mb-10">Manage your services and view client requests</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div
            onClick={() => navigate('/provider/update')}
            className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-xl transition border border-yellow-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Update Provider Info</h2>
            <p className="text-gray-700">Keep your profile and services up to date.</p>
          </div>

          <div
            className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-xl transition border border-yellow-200"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Client Requests</h2>
            <p className="text-gray-700">View and respond to client service requests.</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-left">Recent Client Requests</h2>
          {loading ? (
            <p className="text-center text-gray-600">Loading requests...</p>
          ) : services.length === 0 ? (
            <p className="text-center text-gray-600">No client requests yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service._id} className="bg-white shadow-md rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Location:</span> {service.location}</p>
                    <p><span className="font-medium">Urgency:</span> 
                      <span className={`ml-1 px-2 py-1 rounded text-xs ${
                        service.urgency === 'high' ? 'bg-red-100 text-red-800' :
                        service.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {service.urgency}
                      </span>
                    </p>
                    <p><span className="font-medium">Contact:</span> {service.phone}</p>
                    <p><span className="font-medium">Email:</span> {service.email}</p>
                  </div>
                  <div className="mt-4">
                    <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded transition">
                      Contact Client
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="w-full mt-16 py-6 text-sm text-center text-gray-500">
        &copy; 2025 ChooseNBuild. All rights reserved.
      </footer>
    </div>
  );
}

export default ProviderDashboard;
