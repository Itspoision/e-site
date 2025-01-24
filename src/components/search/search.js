import React from 'react';
import './search.css';

const Search = ({ isOpen, onClose }) => {
  return (
    <div className={`search-overlay ${isOpen ? 'open' : ''}`}>
      <div className="search-container">
        <button className="close-search" onClick={onClose}>
          ×
        </button>
        <input
          type="text"
          placeholder="Search for products..."
          autoFocus
        />
      <div className="search-suggestions">
        <p>Quick Search: </p>
        <ul> 
          <li className="search-item">Jackets</li>
          <li className="search-item">Shirts</li>
          <li className="search-item">Tops</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Search;
