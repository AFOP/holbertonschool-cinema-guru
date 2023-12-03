// src/routes/auth/Login.js
import React from 'react';
import Input from '../../components/general/Input';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {

  return (
    <div>
      <div>
        {/* Input for the username */}
        <h5>Sign in with your account</h5>
        <Input
          label="UserName:"
          type="text"
          placeholder="UserName"
          className="custom-input"
          icon={faUser}
          value={username}
          setValue={setUsername}
        />
        <Input
          label="Password:"
          type="password"
          placeholder="Password"
          className="custom-input"
          icon={faKey}
          value={password}
          setValue={setPassword}
        />
      </div>
    </div>
  );
};

export default Login;
