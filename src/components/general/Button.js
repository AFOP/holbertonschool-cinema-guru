// src/components/general/Button.js
import React from 'react';
import './general.css';

const Button = ({ label, className, onClick }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
