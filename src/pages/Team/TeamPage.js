/**
 * PRODVESTOR WEBSITE - TEAM PAGE
 * FILE LOCATION: src/pages/Team/TeamPage.js
 */

import React from 'react';
import Team from '../../components/sections/Team';
import Stats from '../../components/sections/Stats';
import CTA from '../../components/sections/CTA';
import './TeamPage.css';

function TeamPage() {
  return (
    <div className="team-page">
      <section className="team-page__hero">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>The talented individuals driving innovation at Prodvestor</p>
        </div>
      </section>

      <Team showAll={true} />

      <Stats
        title="Team Excellence"
        stats={[
          { icon: '👥', number: '44+', label: 'Developers' },
          { icon: '👔', number: '6', label: 'Directors' },
          { icon: '🌍', number: '10+', label: 'Nationalities' },
          { icon: '⭐', number: '15+', label: 'Avg Years Experience' }
        ]}
        variant="primary"
      />

      <CTA
        title="Join Our Team"
        description="Be part of a dynamic team shaping the future of technology"
        primaryButtonText="View Careers"
        primaryButtonLink="/careers"
        variant="primary"
      />
    </div>
  );
}

export default TeamPage;