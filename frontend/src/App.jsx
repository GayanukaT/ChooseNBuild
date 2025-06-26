import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ClientRegister from "./pages/client/Register";
import ProviderRegister from "./pages/provider/Register";
import ClientDashboard from "./pages/client/ClientDashboard";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import RentToolsVehicles from "./pages/client/components/RentToolsVehicles";
import GetMaterials from "./pages/client/components/GetMaterials";
import GardenDesign from "./pages/client/components/GardenDesign";
import FixedRenovate from "./pages/client/components/FixedRenovate";
import BuildHome from "./pages/client/components/BuildHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/client/register" element={<ClientRegister />} />
        <Route path="/provider/register" element={<ProviderRegister />} />
        <Route path="/providerdashboard" element={<ProviderDashboard />} />
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        <Route path="/client/renttoolsandvehicle" element={<RentToolsVehicles />} />
        <Route path="/client/getmaterials" element={<GetMaterials />} />
        <Route path="/client/gardendesign" element={<GardenDesign />} />
        <Route path="/client/fixandrenovate" element={<FixedRenovate />} />
        <Route path="/client/buildyourhome" element={<BuildHome />} />
      </Routes>
    </Router>
  );
}

export default App;