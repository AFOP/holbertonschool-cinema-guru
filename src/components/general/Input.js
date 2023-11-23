// src/components/general/Input.js
import React, { useState } from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ label, type, className, icon, inputAttributes }) {
  // Definir el estado y la función para actualizar el estado
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`input-container ${className} ${type}-input`}>
      <label>
        {type === 'text' && <FontAwesomeIcon icon={icon} className="icon" />}
        {label}
      </label>
      <div className={`input-wrapper ${type}-input`}>
        <input type={type} value={inputValue} onChange={handleInput} {...inputAttributes} />
      </div>
    </div>
  );
}

export default Input;
