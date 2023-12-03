// src/routes/auth/Register.js
import React from 'react';
import Input from '../../components/general/Input';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import './auth.css';

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <div>
      <div>
        {/* Input for the username */}
        <h5>Create a new account</h5>
        <Input
          label="UserName:"
          type="text"
          placeholder="UserName"
          className="custom-input"
          icon={faUser}
          value={username}  // Asegúrate de que esté configurado correctamente
          setValue={setUsername}
        />
        {/* Input for the password */}
        <Input
          label="Password:"
          type="password"
          placeholder="Password"
          className="custom-input"
          icon={faKey}
          value={password}  // Asegúrate de que esté configurado correctamente
          setValue={setPassword}
        />
      </div>
    </div>
  );
};

export default Register;
