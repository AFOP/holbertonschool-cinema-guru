import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/general/Button';
import { faKey, faPlus } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import Register from './Register';
import './auth.css';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  // Definir el estado y la función para actualizar el estado
  const [switchState, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el cambio de estado entre Sign In y Sign Up
  const handleSwitch = async (e) => {
    e.preventDefault();
    setSwitchState((prevState) => !prevState);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Usuario', username);
    console.log('Password', password);

    try {
      const endpoint = switchState ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';

      // Usa Axios para realizar la solicitud POST
      const response = await axios.post(endpoint, {
        username: username,
        password: password
      });

      console.log('Logged', response.data)
      // Verifica si la solicitud fue exitosa (por ejemplo, response.data.success)
      if (response.status === 200) {
        // Extrae el token de la respuesta
        const accessToken = response.data.accessToken;

        // Almacena el token en el localStorage
        localStorage.setItem('token', accessToken);

        // Establece el estado userUsername con el nombre de usuario ingresado
        setUserUsername(username);

        setIsLoggedIn(true);
      } else {
        // Maneja el fallo de autenticación
        throw new Error('La autenticación falló');
      }
    } catch (error) {
      console.error('Error durante la autenticación:', error.message);
    }
  };

  return (
    <div className='container-ac'>
    <form onSubmit={handleSwitch}>
      <Button
        label="Sign In"
        className={`custom-button-up ${switchState ? 'active' : ''}`}
        onClick={handleSwitch}
      />
      <Button
        label="Sign Up"
        className={`custom-button-up ${switchState ? '' : 'active'}`}
        onClick={handleSwitch}
      />
    </form>
    <form onSubmit={handleSubmit}>
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
      <Button
        label={`${switchState ? 'Sign In' : 'Sign Up'}`}
        type="submit"
        className="custom-button authentication"
        icon={switchState ? faKey : faPlus}
      />
    </form>
    </div>
  );
}

export default Authentication;
