/**
 * PRODVESTOR WEBSITE - PROJECT DETAILS PAGE
 * FILE LOCATION: src/pages/ProjectDetails/ProjectDetails.js
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projects';
import Button from '../../components/common/Button';
import './ProjectDetails.css';

function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <div className="container"><h1>Project not found</h1></div>;
  }

  return (
    <div className="project-details-page">
      <section className="project-details__hero">
        <div className="container">
          <h1>{project.title}</h1>
          <p>{project.client}</p>
        </div>
      </section>

      <section className="project-details__content">
        <div className="container">
          <img src={project.images?.main} alt={project.title} />
          <h2>About the Project</h2>
          <p>{project.fullDescription || project.description}</p>

          <h3>Technologies Used</h3>
          <div className="project-details__tech">
            {project.technologies?.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>

          <Button to="/portfolio">Back to Portfolio</Button>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;