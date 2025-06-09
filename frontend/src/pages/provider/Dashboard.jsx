import DashboardLayout from '../../components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';

export default function ProviderDashboard() {
  const navigate = useNavigate();

  const handleBrowseProjects = () => {
    navigate('/provider/projects');
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Welcome, Service Provider!</h2>

        <button
          onClick={handleBrowseProjects}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Browse Available Projects
        </button>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Your Submitted Bids</h3>
          <p className="text-gray-500">No bids submitted yet.</p>
          {/* Later: Loop through provider’s bid history */}
        </div>
      </div>
    </DashboardLayout>
  );
}
