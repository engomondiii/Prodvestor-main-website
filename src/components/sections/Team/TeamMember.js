/**
 * PRODVESTOR WEBSITE - TEAM MEMBER CARD COMPONENT
 * FILE LOCATION: src/components/sections/Team/TeamMember.js
 */

import React from 'react';
import Card from '../../common/Card';
import './TeamMember.css';

function TeamMember({ member }) {
  return (
    <Card variant="elevated" hoverable className="team-member">
      <div className="team-member__image">
        <img 
          src={member.image || '/images/team/placeholder.jpg'} 
          alt={member.name} 
        />
      </div>

      <div className="team-member__content">
        <h3 className="team-member__name">{member.name}</h3>
        <p className="team-member__role">{member.role}</p>
        
        {member.bio && (
          <p className="team-member__bio">{member.bio}</p>
        )}

        {member.skills && member.skills.length > 0 && (
          <div className="team-member__skills">
            {member.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="team-member__skill">
                {skill}
              </span>
            ))}
          </div>
        )}

        {member.social && (
          <div className="team-member__social">
            {member.social.linkedin && (
              <a 
                href={member.social.linkedin} 
                className="team-member__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
            )}
            {member.social.twitter && (
              <a 
                href={member.social.twitter} 
                className="team-member__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                𝕏
              </a>
            )}
            {member.social.github && (
              <a 
                href={member.social.github} 
                className="team-member__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

export default TeamMember;