import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ClientDashboard from './pages/client/Dashboard';
import ProviderDashboard from './pages/provider/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
