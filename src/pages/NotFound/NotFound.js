/**
 * PRODVESTOR WEBSITE - 404 NOT FOUND PAGE
 * FILE LOCATION: src/pages/NotFound/NotFound.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page Not Found</h2>
          <p className="not-found__message">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="not-found__actions">
            <Button to="/" variant="primary" size="large">
              Go Home
            </Button>
            <Button to="/contact" variant="outline" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;