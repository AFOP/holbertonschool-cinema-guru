import React, { useState } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

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
      {<Authentication />}
    </div>
  );
}

export default App;
