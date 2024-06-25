
import React, { useState } from 'react';
import { redirect, useNavigate} from 'react-router-dom';// used useNavigate hook for redirection
import axios from 'axios';
import {login} from '../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { response } = await login({username,password});
      localStorage.setItem('token', response);
      navigate("/products"); 
    } catch (err) {
      console.error(err.res.data.msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
