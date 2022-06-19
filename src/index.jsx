import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './global.scss';
import { BrowserRouter as Routes } from 'react-router-dom';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <Routes>
    <App />
  </Routes>
);
