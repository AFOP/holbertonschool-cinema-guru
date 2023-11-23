// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import './auth.css';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  // Definir el estado y la función para actualizar el estado
  const [switchState, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el cambio en el estado switch
  const handleSignInClick = () => {
    setSwitchState(true);
  };

  // Función para manejar el cambio en el estado switch
  const handleSignUpClick = () => {
    setSwitchState(false);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales según sea necesario
    // Por ejemplo, puedes llamar a setIsLoggedIn y setUserUsername con los valores actuales de username y password
    setIsLoggedIn(true);  // O false, según la lógica de tu aplicación
    setUserUsername(username);

    // También puedes hacer algo con el estado password si es necesario

    // Restablecer los campos del formulario si es necesario
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={handleSignInClick}>
          Sign In
        </button>
        <button type="button" onClick={handleSignUpClick}>
          Sign Up
        </button>
        {/* Input para el nombre de usuario */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* Input para la contraseña */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Authentication;
