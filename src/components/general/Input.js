// src/components/general/Input.js
import React, { useState } from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ label, type, className, icon, value, setValue, inputAttributes }) {
  // Use el valor proporcionado o el estado local si no se proporciona un valor externo
  const [inputValue, setInputValue] = useState(value || '');

  const handleInput = (e) => {
    setInputValue(e.target.value);
    // Actualiza el valor externo si se proporciona una función de cambio de valor (setValue)
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <div className={`input-container ${className} ${type}-input`}>
      <label>
        {<FontAwesomeIcon icon={icon} className="icon" />}
        {label}
      </label>
      <div className={`input-wrapper ${type}-input`}>
        <input 
          type={type} 
          id={label} 
          value={inputValue} 
          onChange={handleInput} 
          {...inputAttributes} />
      </div>
    </div>
  );
}

export default Input;
