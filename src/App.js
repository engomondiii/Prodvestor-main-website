import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import { trackPageView } from './utils/analytics';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import TalentAcquisition from './pages/TalentAcquisition';
import ProjectDevelopment from './pages/ProjectDevelopment';
import ITConsultation from './pages/ITConsultation';
import Training from './pages/Training';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import TeamPage from './pages/Team';
import Careers from './pages/Careers';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import ContactPage from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);

  useEffect(() => {
    const routeTitles = {
      '/': 'Prodvestor | Bridging Talent with Innovation',
      '/about': 'About Us | Prodvestor',
      '/services': 'Our Services | Prodvestor',
      '/services/talent-acquisition': 'Talent Acquisition Services | Prodvestor',
      '/services/project-development': 'Project Development Services | Prodvestor',
      '/services/it-consultation': 'IT Consultation Services | Prodvestor',
      '/services/training': 'Training & Mentorship | Prodvestor',
      '/portfolio': 'Portfolio | Prodvestor',
      '/team': 'Our Team | Prodvestor',
      '/careers': 'Careers | Prodvestor',
      '/blog': 'Blog | Prodvestor',
      '/contact': 'Contact Us | Prodvestor',
      '/privacy-policy': 'Privacy Policy | Prodvestor'
    };

    document.title = routeTitles[location.pathname] || 'Prodvestor | Bridging Talent with Innovation';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptions = {
        '/': 'Prodvestor connects elite software developers from emerging markets with global opportunities while building innovative technology solutions.',
        '/about': 'Learn about Prodvestor\'s mission to bridge global talent with innovation.',
        '/services': 'Comprehensive technology services including talent acquisition, project development, IT consultation, and training.',
        '/portfolio': 'Explore our portfolio of innovative technology solutions.'
      };
      metaDescription.setAttribute('content', descriptions[location.pathname] || descriptions['/']);
    }
  }, [location]);

  return (
    <div className="app">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/talent-acquisition" element={<TalentAcquisition />} />
          <Route path="/services/project-development" element={<ProjectDevelopment />} />
          <Route path="/services/it-consultation" element={<ITConsultation />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;