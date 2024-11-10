import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Set the title of the webpage
document.title = 'My Portfolio - Beimnet Dawit';  // Update title here

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
