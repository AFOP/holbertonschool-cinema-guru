// src/components/general/Button.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const Button = ({ label, className, onClick, icon }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      <label>
        {<FontAwesomeIcon icon={icon} className="icon" />}
        {label}
      </label>
    </button>
  );
};

export default Button;
