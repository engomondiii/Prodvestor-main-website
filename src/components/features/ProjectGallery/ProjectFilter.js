/**
 * PRODVESTOR WEBSITE - PROJECT FILTER COMPONENT
 * FILE LOCATION: src/components/features/ProjectGallery/ProjectFilter.js
 */

import React from 'react';
import './ProjectFilter.css';

function ProjectFilter({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="project-filter">
      <button
        className={`project-filter__button ${
          activeCategory === 'all' ? 'project-filter__button--active' : ''
        }`}
        onClick={() => onFilterChange('all')}
      >
        All Projects
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={`project-filter__button ${
            activeCategory === category ? 'project-filter__button--active' : ''
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;