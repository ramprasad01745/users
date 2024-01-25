import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import './Login.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const token = "your_jwt_token_here";
  const addUser = () => {
    if (username === "" || password === "") {
        alert("Please enter both username and password");
        return;
      }
  
    console.log(token)
    axios.post('http://localhost:5000/checkuser', { username, password }, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log(response.data);
        alert("login successful");
        window.location.href = "/users";
      })
      .catch((error) => {
        console.error(error);
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>
          Username: 
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={addUser}>Login</button>
      </form>
      
    </div>
  );
}

export default Login;
