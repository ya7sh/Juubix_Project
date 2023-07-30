import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('token');
      navigate('/login');
    } else {
      const decodedUser = jwt.decode(token);
      setUser(decodedUser);
    }
  }, [navigate]);

  return (
    <div>
      <h1>Hello {user ? user.name : "No user found"}</h1>
    </div>
  );
}

export default Dashboard;
