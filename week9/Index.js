import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' in React 18+
import './index.css';
import App from './App';
import FacebookEmojiCounter from './Facebookemoji';
import ToggleMode from './ToggleModeComponent';

// Create the root and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <FacebookEmojiCounter type="Like" />
      <FacebookEmojiCounter type="Love" />
      <ToggleMode />
    </React.Fragment>
  </React.StrictMode>
);
