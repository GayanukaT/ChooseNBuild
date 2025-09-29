import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import ClientRegister from "./pages/client/Register";
import ProviderRegister from "./pages/provider/Register";
import ClientDashboard from "./pages/client/Dashboard";
import ProviderDashboard from "./pages/provider/Dashboard";
import ServiceForm from "./pages/client/components/ServiceForm";
import ProviderForm from "./pages/provider/components/Update";
import PrivateRoute from "./pages/client/components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/register" element={<ClientRegister />} />
        <Route path="/provider/register" element={<ProviderRegister />} />
        <Route path="/provider/dashboard" element={<PrivateRoute><ProviderDashboard /></PrivateRoute>} />
        <Route path="/client/dashboard" element={<PrivateRoute><ClientDashboard /></PrivateRoute>} />
        <Route path="/client/newservice" element={<PrivateRoute><ServiceForm /></PrivateRoute>} />
        <Route path="/provider/update" element={<PrivateRoute><ProviderForm /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;