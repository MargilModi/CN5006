import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: global styles
import Calculator from './Calculator'; // Import the Calculator component

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root') // Mounts the Calculator component to the DOM element with id "root"
);
