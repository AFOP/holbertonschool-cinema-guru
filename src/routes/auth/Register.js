// src/routes/auth/Register.js
import React from 'react';
import './auth.css';

const Register = ({ username, password, setUsername, setPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the registration submission if needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input for the username */}
        <h5>Create a new account</h5>
        <input
          type="text"
          placeholder="Username"
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

export default Register;
