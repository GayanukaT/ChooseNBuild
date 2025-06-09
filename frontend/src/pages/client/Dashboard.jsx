import DashboardLayout from '../../components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';

export default function ClientDashboard() {
  const navigate = useNavigate();

  const handlePostProject = () => {
    navigate('/client/post-project');
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Welcome, Client!</h2>
        <button
          onClick={handlePostProject}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Post New Project
        </button>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Your Posted Projects</h3>
          <p className="text-gray-500">No projects yet. Start by posting one!</p>
          {/* Later: map over projects fetched from backend */}
        </div>
      </div>
    </DashboardLayout>
  );
}
