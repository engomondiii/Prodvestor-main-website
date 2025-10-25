/**
 * PRODVESTOR WEBSITE - PROJECT CARD COMPONENT
 * FILE LOCATION: src/components/sections/Projects/ProjectCard.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../common/Card';
import Badge from '../../common/Badge';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="project-card-link">
      <Card variant="elevated" hoverable padding="none" className="project-card">
        {project.images?.thumbnail && (
          <Card.Image 
            src={project.images.thumbnail} 
            alt={project.title} 
          />
        )}

        <div className="project-card__content">
          <div className="project-card__header">
            <Badge variant="primary" size="small">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="success" size="small">
                Featured
              </Badge>
            )}
          </div>

          <Card.Title>{project.title}</Card.Title>
          
          <p className="project-card__client">{project.client}</p>
          
          <Card.Text>{project.shortDescription}</Card.Text>

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-card__technologies">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span key={index} className="project-card__tech">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="project-card__tech-more">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}

          {project.metrics && (
            <div className="project-card__metrics">
              {project.metrics.users && (
                <div className="project-card__metric">
                  <span className="project-card__metric-value">
                    {project.metrics.users}
                  </span>
                  <span className="project-card__metric-label">Users</span>
                </div>
              )}
              {project.metrics.rating && (
                <div className="project-card__metric">
                  <span className="project-card__metric-value">
                    {project.metrics.rating}⭐
                  </span>
                  <span className="project-card__metric-label">Rating</span>
                </div>
              )}
            </div>
          )}

          <div className="project-card__footer">
            <span className="project-card__link">
              View Case Study →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default ProjectCard;