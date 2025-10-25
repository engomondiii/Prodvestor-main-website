/**
 * PRODVESTOR WEBSITE - LAYOUT COMPONENT
 * Main layout wrapper with Header, Footer, and content
 * FILE LOCATION: src/components/layout/Layout/Layout.js
 */

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="layout__skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="layout__main">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;