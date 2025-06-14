import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';

import ClientDashboard from 'pages/client/Dashboard';
import ProviderDashboard from 'pages/provider/Dashboard';
import AdminDashboard from 'pages/admin/Dashboard';

import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Optional general dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Role-Based Dashboards */}
      <Route element={<ProtectedRoute allowedRoles={['client']} />}>
        <Route path="/client/dashboard" element={<ClientDashboard />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['provider']} />}>
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
