import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const registerUser = async (event) => {
        event.preventDefault()
        const response =await fetch('http://localhost:1337/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            })
            
            const data = await response.json();
            
            if(data.status==='ok'){
            
            navigate('/login')
            alert("Registration successful")
            localStorage.setItem('token',data)
            
        }
        
        else {
            alert("Duplicate Email")
            
        }
    }
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={registerUser}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name" />
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

                    <button type='submit' value='register'>Register</button>
                </form>
            </div>

        );
    }

    export default Register;
