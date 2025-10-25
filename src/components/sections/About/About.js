/**
 * PRODVESTOR WEBSITE - ABOUT SECTION
 * FILE LOCATION: src/components/sections/About/About.js
 */

import React from 'react';
import Button from '../../common/Button';
import './About.css';

function About({
  title,
  subtitle,
  description,
  image,
  features,
  stats,
  ctaText,
  ctaLink,
  variant = 'default',
  className = '',
  ...props
}) {
  const defaultFeatures = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and success.'
    },
    {
      icon: '💡',
      title: 'Our Vision',
      description: 'To be the leading technology partner for businesses worldwide, known for excellence and innovation.'
    },
    {
      icon: '⭐',
      title: 'Our Values',
      description: 'Innovation, integrity, excellence, and customer-centricity guide everything we do.'
    }
  ];

  const defaultStats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '20+', label: 'Team Members' }
  ];

  const aboutFeatures = features || defaultFeatures;
  const aboutStats = stats || defaultStats;

  return (
    <section className={`about-section about-section--${variant} ${className}`} {...props}>
      <div className="about-section__container container">
        {/* Header */}
        <div className="about-section__header">
          {subtitle && (
            <p className="about-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="about-section__title">
            {title || 'About Prodvestor'}
          </h2>
          
          <p className="about-section__description">
            {description || 'We are a full-service software development company dedicated to building innovative solutions that transform businesses and drive growth.'}
          </p>
        </div>

        {/* Content */}
        <div className="about-section__content">
          <div className="about-section__text">
            <div className="about-section__features">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="about-section__feature">
                  <div className="about-section__feature-icon">
                    {feature.icon}
                  </div>
                  <div className="about-section__feature-content">
                    <h3 className="about-section__feature-title">
                      {feature.title}
                    </h3>
                    <p className="about-section__feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {(ctaText || ctaLink) && (
              <div className="about-section__cta">
                <Button to={ctaLink || '/about'} variant="primary" size="large">
                  {ctaText || 'Learn More About Us'}
                </Button>
              </div>
            )}
          </div>

          {image && (
            <div className="about-section__image">
              <img src={image} alt="About Prodvestor" />
            </div>
          )}
        </div>

        {/* Stats */}
        {aboutStats && aboutStats.length > 0 && (
          <div className="about-section__stats">
            {aboutStats.map((stat, index) => (
              <div key={index} className="about-section__stat">
                <span className="about-section__stat-number">{stat.number}</span>
                <span className="about-section__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;