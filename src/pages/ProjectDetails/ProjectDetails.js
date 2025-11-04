/**
 * PRODVESTOR WEBSITE - PROJECT DETAILS PAGE
 * FILE LOCATION: src/pages/ProjectDetails/ProjectDetails.js
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projects';
import Button from '../../components/common/Button';
import './ProjectDetails.css';

function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="project-details-page project-details-page--not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Button to="/portfolio" variant="primary">Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  // Use actual project image or a default placeholder image
  const getDefaultImage = () => {
    // Use a generic tech/project placeholder image
    return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop';
  };

  const heroImage = project.images?.main || project.image || project.thumbnail || getDefaultImage();

  return (
    <div className="project-details-page">
      {/* Breadcrumb */}
      <div className="project-details__breadcrumb">
        <div className="container">
          <Link to="/portfolio">Portfolio</Link>
          <span>/</span>
          <span>{project.title}</span>
        </div>
      </div>

      {/* Hero with Large Image */}
      <section className="project-details__hero">
        <div className="project-details__hero-image">
          <img src={heroImage} alt={project.title} />
          <div className="project-details__hero-gradient"></div>
        </div>
        <div className="project-details__hero-overlay">
          <div className="container">
            <div className="project-details__meta">
              {project.category && (
                <span className="project-details__badge">{project.category}</span>
              )}
              {project.industry && (
                <span className="project-details__badge">{project.industry}</span>
              )}
            </div>
            <h1 className="project-details__title">{project.title}</h1>
            {project.client && (
              <p className="project-details__client">Client: {project.client}</p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="project-details__content">
        <div className="container">
          <div className="project-details__layout">
            {/* Main Content */}
            <div className="project-details__main">
              {/* Overview */}
              <div className="project-details__section">
                <h2>Project Overview</h2>
                <p className="project-details__description">
                  {project.fullDescription || project.description || project.shortDescription}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="project-details__section">
                  <h2>Key Features</h2>
                  <ul className="project-details__features">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-details__section">
                  <h2>Technologies Used</h2>
                  <div className="project-details__tech-grid">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="tech-badge">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenge & Solution */}
              {project.challenge && (
                <div className="project-details__section">
                  <h2>The Challenge</h2>
                  <p>{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="project-details__section">
                  <h2>Our Solution</h2>
                  <p>{project.solution}</p>
                </div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div className="project-details__section">
                  <h2>Results & Impact</h2>
                  <div className="project-details__results">
                    {project.results.map((result, index) => (
                      <div key={index} className="project-details__result">
                        <span className="project-details__result-icon">📈</span>
                        <p>{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Images */}
              {project.images?.gallery && project.images.gallery.length > 0 && (
                <div className="project-details__section">
                  <h2>Project Gallery</h2>
                  <div className="project-details__gallery">
                    {project.images.gallery.map((img, index) => (
                      <img key={index} src={img} alt={`${project.title} ${index + 1}`} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="project-details__sidebar">
              <div className="project-details__info-card">
                <h3>Project Info</h3>
                <dl>
                  {project.client && (
                    <>
                      <dt>Client</dt>
                      <dd>{project.client}</dd>
                    </>
                  )}
                  {project.year && (
                    <>
                      <dt>Year</dt>
                      <dd>{project.year}</dd>
                    </>
                  )}
                  {project.duration && (
                    <>
                      <dt>Duration</dt>
                      <dd>{project.duration}</dd>
                    </>
                  )}
                  {project.teamSize && (
                    <>
                      <dt>Team Size</dt>
                      <dd>{project.teamSize}</dd>
                    </>
                  )}
                  {project.status && (
                    <>
                      <dt>Status</dt>
                      <dd>{project.status}</dd>
                    </>
                  )}
                </dl>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="project-details__tags-card">
                  <h3>Tags</h3>
                  <div className="project-details__tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-details__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="project-details__actions">
                {project.liveUrl && (
                  <Button 
                    href={project.liveUrl} 
                    variant="primary" 
                    size="large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project →
                  </Button>
                )}

                {project.githubUrl && (
                  <Button 
                    href={project.githubUrl} 
                    variant="outline" 
                    size="large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                )}

                <Button 
                  to="/portfolio" 
                  variant="outline" 
                  size="large"
                >
                  ← Back to Portfolio
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;