/**
 * PRODVESTOR WEBSITE - CAREERS PAGE
 * FILE LOCATION: src/pages/Careers/Careers.js
 */

import React from 'react';
import Button from '../../components/common/Button';
import CTA from '../../components/sections/CTA';
import './Careers.css';

function Careers() {
  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      location: 'Remote / Nairobi',
      type: 'Full-time',
      department: 'Engineering'
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Design'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Nairobi',
      type: 'Full-time',
      department: 'Engineering'
    },
    {
      title: 'Project Manager',
      location: 'Nairobi',
      type: 'Full-time',
      department: 'Operations'
    }
  ];

  return (
    <div className="careers-page">
      <section className="careers__hero">
        <div className="container">
          <h1>Join Prodvestor</h1>
          <p>Build the future of technology with us</p>
        </div>
      </section>

      <section className="careers__benefits">
        <div className="container">
          <h2>Why Work With Us?</h2>
          <div className="careers__benefits-grid">
            <div className="careers__benefit">
              <div className="careers__benefit-icon">💰</div>
              <h3>Competitive Compensation</h3>
              <p>Industry-leading salaries plus equity opportunities</p>
            </div>
            <div className="careers__benefit">
              <div className="careers__benefit-icon">🌍</div>
              <h3>Remote-First</h3>
              <p>Work from anywhere with flexible hours</p>
            </div>
            <div className="careers__benefit">
              <div className="careers__benefit-icon">📚</div>
              <h3>Learning & Growth</h3>
              <p>Continuous training and career development</p>
            </div>
            <div className="careers__benefit">
              <div className="careers__benefit-icon">🤝</div>
              <h3>Great Culture</h3>
              <p>Collaborative, inclusive, and innovative team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careers__positions">
        <div className="container">
          <h2>Open Positions</h2>
          <div className="careers__positions-list">
            {openPositions.map((position, index) => (
              <div key={index} className="careers__position-card">
                <h3>{position.title}</h3>
                <div className="careers__position-meta">
                  <span>📍 {position.location}</span>
                  <span>⏰ {position.type}</span>
                  <span>🏢 {position.department}</span>
                </div>
                <Button to="/contact" variant="primary">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Don't See Your Role?"
        description="We're always looking for talented individuals. Send us your resume!"
        primaryButtonText="Send Resume"
        primaryButtonLink="/contact"
        variant="primary"
      />
    </div>
  );
}

export default Careers;