/**
 * PRODVESTOR WEBSITE - TEAM SECTION
 * FILE LOCATION: src/components/sections/Team/Team.js
 */

import React from 'react';
import { getFeaturedTeam } from '../../../data/team';
import TeamMember from './TeamMember';
import Button from '../../common/Button';
import './Team.css';

function Team({
  title,
  subtitle,
  description,
  showAll = false,
  limit = 4,
  className = '',
  ...props
}) {
  const teamMembers = showAll 
    ? getFeaturedTeam() 
    : getFeaturedTeam().slice(0, limit);

  return (
    <section className={`team-section ${className}`} {...props}>
      <div className="team-section__container container">
        {/* Header */}
        <div className="team-section__header">
          {subtitle && (
            <p className="team-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="team-section__title">
            {title || 'Meet Our Team'}
          </h2>
          
          {description && (
            <p className="team-section__description">{description}</p>
          )}
        </div>

        {/* Team Grid */}
        <div className="team-section__grid">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="team-section__footer">
            <Button to="/about/team" variant="primary" size="large">
              View Full Team
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Team;