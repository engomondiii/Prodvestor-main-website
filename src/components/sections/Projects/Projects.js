/**
 * PRODVESTOR WEBSITE - PROJECTS SECTION
 * FILE LOCATION: src/components/sections/Projects/Projects.js
 */

import React from 'react';
import { getFeaturedProjects } from '../../../data/projects';
import ProjectCard from './ProjectCard';
import Button from '../../common/Button';
import './Projects.css';

function Projects({
  title,
  subtitle,
  description,
  showAll = false,
  limit = 6,
  className = '',
  ...props
}) {
  const projects = showAll 
    ? getFeaturedProjects() 
    : getFeaturedProjects().slice(0, limit);

  return (
    <section className={`projects-section ${className}`} {...props}>
      <div className="projects-section__container container">
        {/* Header */}
        <div className="projects-section__header">
          {subtitle && (
            <p className="projects-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="projects-section__title">
            {title || 'Our Projects'}
          </h2>
          
          {description && (
            <p className="projects-section__description">{description}</p>
          )}
        </div>

        {/* Projects Grid */}
        <div className="projects-section__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="projects-section__footer">
            <Button to="/portfolio" variant="primary" size="large">
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;