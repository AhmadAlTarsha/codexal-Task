import React from 'react';
import './Loader.css'; 

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
