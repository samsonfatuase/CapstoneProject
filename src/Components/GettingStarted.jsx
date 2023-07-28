import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy function to simulate the login functionality
  async function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
      // Simulate an API call with a delay
      setTimeout(() => {
        if (username === "user" && password === "password") {
          resolve({ user: username });
        } else {
          reject({ error: "Invalid credentials" });
        }
      }, 1500); // Simulating the delay of an API call (1.5 seconds)
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await simulateLogin(username, password); // Simulate login using the dummy function
      // if (response.data.error) { // Use this if you want to work with a real API response
      //   setError(response.data.error);
      //   return;
      // }
      onLogin(response.user);
      navigate("/");
    } catch (error) {
      setError(error.error);
    }
  };

  return (
    <div id='sign'>
      <p id='re'>EKITI VIRTUAL <br /> 
        LEARNING HUB
      </p>
      <h1 id='register'>LOGIN</h1>
      <p id='register'>Login with your email and password<br /> 
        to get started</p>
      <form onSubmit={handleLogin} id='form'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          id='form1'
          onChange={(e) => setUsername(e.target.value)}
        />  
        <input
          type="password"
          placeholder="Password"
          value={password}
          id='form2'
          onChange={(e) => setPassword(e.target.value)}
        />
        <p id=''>Already have an account</p>
        {error && <p>{error}</p>}
        <button 
          type="submit"
          id='form5'
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
