import React, { useState } from 'react';
import './auth.css';

// Objetos generales como botones input 
import Button from '../../components/general/Button';

// Otros componentes
import Login from './Login';
import Register from './Register';

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
  };

  const handleFormSubmit = () => {
    setIsLoggedIn(true);  // O false, según la lógica de tu aplicación
    setUserUsername(username);

    // También puedes hacer algo con el estado password si es necesario
  };

  return (
    <div className='containter'>
        <Button
          label="Sign In"
          className={`custom-button ${switchState ? 'active' : ''}`}
          onClick={handleSignInClick}
        />
        <Button
          label="Sign Up"
          className={`custom-button ${switchState ? '' : 'active'}`}
          onClick={handleSignUpClick}
        />
        {/* Por defecto ingresa a login */}
        {switchState ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
    </div>
  );
}

export default Authentication;
