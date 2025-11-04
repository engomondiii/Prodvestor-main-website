/**
 * PRODVESTOR WEBSITE - TEAM PROFILE COMPONENT
 * FILE LOCATION: src/components/features/TeamProfile/TeamProfile.js
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTeamMemberBySlug } from '../../../data/team';
import Button from '../../common/Button';
import Badge from '../../common/Badge';
import './TeamProfile.css';

function TeamProfile() {
  const { slug } = useParams();
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return (
      <div className="team-profile team-profile--not-found">
        <div className="container">
          <h1>Team Member Not Found</h1>
          <p>The team member you're looking for doesn't exist.</p>
          <Button to="/about/team" variant="primary">
            View Team
          </Button>
        </div>
      </div>
    );
  }

  // Use default team image for all members
  const memberImage = member.image || '/assets/images/team/Sarah.jpg';

  return (
    <div className="team-profile">
      {/* Hero */}
      <section className="team-profile__hero">
        <div className="container">
          <Link to="/about/team" className="team-profile__back">
            ← Back to Team
          </Link>

          <div className="team-profile__hero-content">
            <div className="team-profile__image">
              <img 
                src={memberImage} 
                alt={member.name} 
              />
            </div>

            <div className="team-profile__header">
              <h1 className="team-profile__name">{member.name}</h1>
              <p className="team-profile__role">{member.role}</p>
              
              {member.social && (
                <div className="team-profile__social">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-profile__social-link"
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-profile__social-link"
                    >
                      Twitter
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-profile__social-link"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="team-profile__bio">
        <div className="container">
          <h2>About {member.name.split(' ')[0]}</h2>
          <p>{member.bio || member.fullBio || 'No biography available.'}</p>
        </div>
      </section>

      {/* Skills */}
      {member.skills && member.skills.length > 0 && (
        <section className="team-profile__skills">
          <div className="container">
            <h2>Skills & Expertise</h2>
            <div className="team-profile__skills-grid">
              {member.skills.map((skill, index) => (
                <Badge key={index} variant="default" size="large">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {member.experience && member.experience.length > 0 && (
        <section className="team-profile__experience">
          <div className="container">
            <h2>Experience</h2>
            <div className="team-profile__timeline">
              {member.experience.map((exp, index) => (
                <div key={index} className="team-profile__timeline-item">
                  <div className="team-profile__timeline-dot" />
                  <div className="team-profile__timeline-content">
                    <h3>{exp.position}</h3>
                    <p className="team-profile__timeline-company">
                      {exp.company}
                    </p>
                    <p className="team-profile__timeline-period">
                      {exp.period}
                    </p>
                    {exp.description && (
                      <p className="team-profile__timeline-description">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education */}
      {member.education && member.education.length > 0 && (
        <section className="team-profile__education">
          <div className="container">
            <h2>Education</h2>
            <div className="team-profile__education-list">
              {member.education.map((edu, index) => (
                <div key={index} className="team-profile__education-item">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <p className="team-profile__education-year">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="team-profile__contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Want to work with {member.name.split(' ')[0]}? Contact us today.</p>
          <Button to="/contact" variant="primary" size="large">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

export default TeamProfile;