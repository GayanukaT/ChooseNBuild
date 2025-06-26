import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Login(){
    const [provideremail, setProviderEmail] = React.useState('');
    const [providerpassword, setProviderPassword] = React.useState('');
    const [clientemail, setClientEmail] = React.useState('');
    const [clientpassword, setClientPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const navigate = useNavigate();
    
    const handleClientLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await API.post("/user/client/login", { email:clientemail, password:clientpassword });
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            
            navigate("/clientdashboard");
        }catch(error){
            setError("Login failed! Please check your credentials.");
        }
    };

    const handleProviderLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await API.post("/user/provider/login",{ email:provideremail, password:providerpassword });
            const { token, user} = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            navigate("/providerdashboard");
        }catch(error){
            setError("Login failed! Please check your credentials.");
        }
    }

    return(
        <div>
            <h1>Login Page</h1>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                <div>
                    <h1>client</h1>
                    <form onSubmit={handleClientLogin}>
                        <input type="email" placeholder="Email" value={clientemail} onChange={(e) => setClientEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={clientpassword} onChange={(e) => setClientPassword(e.target.value)} required />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div>
                    <h1>provider</h1>
                    <form onSubmit={handleProviderLogin}>
                        <input type="email" placeholder="Email" value={provideremail} onChange={(e) => setProviderEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={providerpassword} onChange={(e) => setProviderPassword(e.target.value)} required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;