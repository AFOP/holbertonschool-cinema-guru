// src/components/general/SearchBar.js
import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ title, setTitle, icon }) => {
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <label>
        {<FontAwesomeIcon icon={icon} className="icon" />}
      </label>
      <input type="text" value={title} onChange={handleInput} placeholder={title} />
    </div>
  );
};

export default SearchBar;
