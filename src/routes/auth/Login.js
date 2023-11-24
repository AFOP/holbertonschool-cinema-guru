// src/routes/auth/Login.js
import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the login submission if needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input for the username */}
        <h5>Sign in with your account</h5>
        <input
          type="text"
          placeholder="Username del Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* Input for the password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Button for submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
