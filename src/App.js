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
    const accessToken = localStorage.getItem('accessToken');

    sendPostRequest('/api/auth/', { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(response => {
        setLoggedIn(true);
        setUserUsername(response.username);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication setIsLoggedIn={setLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;
