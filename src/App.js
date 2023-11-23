import React, { useState } from 'react';
import './App.css';
import Input from './components/general/Input';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';

function App() {
  const [userName, setUserName] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
  

  return (
    <div className="App">
      {/* Usar el componente Input */}
      <Input
        label="UserName:"           
        type="text"              
        className="custom-input"
        icon={faUser}
        value={userName}
        setValue={setUserName}
      />

      <SelectInput
        label="Sort:"           
        options={['default', 'Latest', 'Oldest']}
        className="custom-select"
        value={sortOption}
        setValue={setSortOption}
      />

      <Button
        label="Load More.."
        className="custom-button"
        onClick={handleButtonClick}
        icon={faUser}  // Puedes cambiar el icono según tus necesidades
      />

      {/* Otro código en tu aplicación */}
    </div>
  );
}

export default App;
