

import React from 'react';
import { createRoot } from 'react-dom'; // Correct import statement
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
