/**
 * PRODVESTOR WEBSITE - PORTFOLIO PAGE
 * FILE LOCATION: src/pages/Portfolio/Portfolio.js
 */

import React from 'react';
import ProjectGallery from '../../components/features/ProjectGallery';
import Stats from '../../components/sections/Stats';
import CTA from '../../components/sections/CTA';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <ProjectGallery showFilter={true} />
      
      <Stats
        title="Portfolio Highlights"
        stats={[
          { icon: '🚀', number: '100+', label: 'Completed Projects' },
          { icon: '🏢', number: '50+', label: 'Satisfied Clients' },
          { icon: '🌍', number: '15+', label: 'Countries Served' },
          { icon: '⭐', number: '98%', label: 'Success Rate' }
        ]}
        variant="primary"
      />

      <CTA
        title="Have a Project in Mind?"
        description="Let's discuss how we can bring your vision to life with innovative technology solutions."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        variant="primary"
      />
    </div>
  );
}

export default Portfolio;