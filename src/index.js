import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './Home';
import { ThemeProvider } from './context/ThemeContext';
import { LocaleProvider } from './context/LocaleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <Home />
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
