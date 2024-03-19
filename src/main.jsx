import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import './css/style.css';

// Create a root instance
const root = createRoot(document.getElementById('root'));

// Render your app inside the root instance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);