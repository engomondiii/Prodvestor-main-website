/**
 * PRODVESTOR WEBSITE - PROJECT GALLERY COMPONENT
 * FILE LOCATION: src/components/features/ProjectGallery/ProjectGallery.js
 */

import React, { useState, useMemo } from 'react';
import { projects, getProjectCategories } from '../../../data/projects';
import ProjectFilter from './ProjectFilter';
import ProjectCard from '../../sections/Projects/ProjectCard';
import './ProjectGallery.css';

function ProjectGallery({ showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => getProjectCategories(), []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="project-gallery">
      <div className="project-gallery__container container">
        <div className="project-gallery__header">
          <h1 className="project-gallery__title">Our Portfolio</h1>
          <p className="project-gallery__description">
            Explore our diverse range of successful projects across multiple industries
          </p>
        </div>

        {showFilter && (
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />
        )}

        <div className="project-gallery__grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="project-gallery__empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;