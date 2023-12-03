import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/auth/Dashboard';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  const sendPostRequest = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...data.headers,
        },
        body: JSON.stringify(data.body),
      });
      
      return response.json();
    } catch (error) {
      throw new Error('Error sending POST request');
    }
  };

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem('token');
  
      sendPostRequest('http://localhost:8000/api/auth/', { headers: { Authorization: `Bearer ${accessToken}` } })
        .then(response => {
          if (response && response.success) { // o la lógica que uses para identificar una autenticación exitosa
            setLoggedIn(true);
            setUserUsername(response.userUsername);
          } else {
            // Manejar el escenario en el que la autenticación no fue exitosa
            console.error("Autenticación fallida:", response);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication setIsLoggedIn={setLoggedIn} setUserUsername={setUserUsername} /> }
    </div>
  );
}

export default App;
