import React from 'react';
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Register(){
    const [businessname, setBusinessName] = React.useState('');
    const [businesstype, setBusinessType] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if(password !== confirmpassword){
            setError("Passwords do not match!");
            return;
        }

        try{
            await API.post("/user/provider/register", { businessname:businessname, businesstype:businesstype, email:email, password:password });
            navigate("/");   
        }catch(error){
            setError("Registration failed!");
        }
    };

    return(
        <div>
            <h1>Provider register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Business Name" value={businessname} onChange={(e) => setBusinessName(e.target.value)} required />
                <input type="text" placeholder="Business Type" value={businesstype} onChange={(e) => setBusinessType(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;