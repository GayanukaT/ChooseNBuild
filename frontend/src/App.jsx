import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import ClientRegister from "./pages/client/Register";
import ProviderRegister from "./pages/provider/Register";
import ClientDashboard from "./pages/client/Dashboard";
import ProviderDashboard from "./pages/provider/Dashboard";
import RentToolsVehicles from "./pages/client/components/RentToolsVehicles";
import GetMaterials from "./pages/client/components/GetMaterials";
import GardenDesign from "./pages/client/components/GardenDesign";
import FixedRenovate from "./pages/client/components/FixedRenovate";
import BuildHome from "./pages/client/components/BuildHome";
import ServiceForm from "./pages/client/components/ServiceForm";
import ProviderForm from "./pages/provider/components/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/register" element={<ClientRegister />} />
        <Route path="/provider/register" element={<ProviderRegister />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/newservice" element={<ServiceForm />} />
        <Route path="/client/renttoolsandvehicle" element={<RentToolsVehicles />} />
        <Route path="/client/getmaterials" element={<GetMaterials />} />
        <Route path="/client/gardendesign" element={<GardenDesign />} />
        <Route path="/client/fixandrenovate" element={<FixedRenovate />} />
        <Route path="/client/buildyourhome" element={<BuildHome />} />
        <Route path="/provider/update" element={<ProviderForm />} />
      </Routes>
    </Router>
  );
}

export default App;