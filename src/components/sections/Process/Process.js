/**
 * PRODVESTOR WEBSITE - PROCESS SECTION
 * FILE LOCATION: src/components/sections/Process/Process.js
 */

import React from 'react';
import ProcessStep from './ProcessStep';
import './Process.css';

function Process({
  title,
  subtitle,
  description,
  steps,
  className = '',
  ...props
}) {
  const defaultSteps = [
    {
      icon: '💡',
      title: 'Discovery',
      description: 'We meet to understand your goals, challenges, and vision for the project.'
    },
    {
      icon: '📋',
      title: 'Planning',
      description: 'We create a detailed roadmap with timelines, milestones, and deliverables.'
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces for your approval.'
    },
    {
      icon: '⚙️',
      title: 'Development',
      description: 'Our developers bring the designs to life with clean, efficient code.'
    },
    {
      icon: '🧪',
      title: 'Testing',
      description: 'Rigorous testing ensures everything works perfectly before launch.'
    },
    {
      icon: '🚀',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support and maintenance.'
    }
  ];

  const processSteps = steps || defaultSteps;

  return (
    <section className={`process-section ${className}`} {...props}>
      <div className="process-section__container container">
        {/* Header */}
        <div className="process-section__header">
          {subtitle && (
            <p className="process-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="process-section__title">
            {title || 'Our Process'}
          </h2>
          
          {description && (
            <p className="process-section__description">{description}</p>
          )}
        </div>

        {/* Steps Grid */}
        <div className="process-section__steps">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;