import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'aos/dist/aos.css'; // You can also use <link> for styles



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

