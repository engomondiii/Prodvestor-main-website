/**
 * PRODVESTOR WEBSITE - MAIN APP COMPONENT
 * React Router setup with all routes
 * 
 * FILE LOCATION: src/App.js
 * 
 * This is the main application component that sets up routing
 * for the entire Prodvestor website.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import placeholder page components
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        {/* Main Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />

          {/* Services Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Portfolio Pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Careers Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetail />} />

          {/* Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* FAQ Page */}
          <Route path="/faq" element={<FAQ />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* 404 Not Found - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;