import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';
import { NotificationProvider } from './context/NotificationContext';
import { initAnalytics } from './utils/analytics';
import './styles/index.css';

// Initialize analytics
initAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NavigationProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </NavigationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);