import React from 'react';
import Navbar from './components/Navbar';
import ClientHome from './components/ClientHome';

function ClientDashboard(){
    return(
        <div>
            <Navbar />
            <h1>Client Dashboard</h1>
            <ClientHome />
        </div>
    );
}

export default ClientDashboard;