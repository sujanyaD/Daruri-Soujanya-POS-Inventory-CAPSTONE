// components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { register } from '../services/api';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname,setfullname] =useState('');
  const [email,setemail]=useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("handle submit")
      await register({ username, password,fullname,email });
      console.log('Registration successful');
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Register</h2> 
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br/>
        <input type="text" placeholder="fullname" value={fullname} onChange={(e) => setfullname(e.target.value)} required /><br/>
        <input type="email"  placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} required /><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
