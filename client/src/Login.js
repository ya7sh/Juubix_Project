import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import './App.css';
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate();

    const loginUser = async (event) => {
        event.preventDefault()
        
            const response =await fetch('http://localhost:1337/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
            
            const data = await response.json();
            //console.log(data);
            //
            if(data.status==='ok'){
            
            navigate('/dashboard')
            alert("Login successful")
            localStorage.setItem('token',data.user)
            
        }
        
        else {
            alert("Login failed, reload the page and try again ")
            
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                <button type='submit' value='login'>Login</button>
            </form>
        </div>

    );
}

export default Login;
