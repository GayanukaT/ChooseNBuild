import DashboardLayout from '../../components/layout/DashboardLayout';

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Welcome, Admin!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Manage Users</h3>
            <p className="text-gray-600">View, approve, or remove platform users.</p>
            {/* Add button or link to /admin/users later */}
          </div>

          <div className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Monitor Projects</h3>
            <p className="text-gray-600">Track ongoing and flagged projects.</p>
          </div>

          <div className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Reports & Feedback</h3>
            <p className="text-gray-600">Review user-reported issues or feedback.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
