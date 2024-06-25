
import React, { useState } from 'react';
import axios from 'axios';
import { register } from '../services/api';
import '../styles/App.css';
import { useNavigate} from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ username, password, fullname, email });
      navigate('/login');
      console.log('Registration successful');
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div className="register-frame">
      <h2>Register</h2> 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
