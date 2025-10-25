/**
 * PRODVESTOR WEBSITE - PROJECT GALLERY COMPONENT
 * FILE LOCATION: src/components/features/ProjectGallery/ProjectGallery.js
 */

import React, { useState, useMemo } from 'react';
import { getAllProjects, projectCategories } from '../../../data/projects';
import ProjectCard from '../../sections/Projects/ProjectCard';
import ProjectFilter from './ProjectFilter';
import './ProjectGallery.css';

function ProjectGallery({ showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const allProjects = getAllProjects();

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return allProjects;
    }
    return allProjects.filter(project => project.category === activeCategory);
  }, [activeCategory, allProjects]);

  return (
    <div className="project-gallery">
      <div className="project-gallery__container container">
        {/* Header */}
        <div className="project-gallery__header">
          <h1 className="project-gallery__title">Our Portfolio</h1>
          <p className="project-gallery__description">
            Explore our diverse portfolio of successful projects across various industries.
          </p>
        </div>

        {/* Filter */}
        {showFilter && (
          <ProjectFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />
        )}

        {/* Results Count */}
        <div className="project-gallery__count">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          {activeCategory !== 'all' && ` in ${activeCategory}`}
        </div>

        {/* Gallery Grid */}
        <div className="project-gallery__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="project-gallery__empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectGallery;