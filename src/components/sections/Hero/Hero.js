/**
 * PRODVESTOR WEBSITE - HERO SECTION (MODERNIZED)
 * FILE LOCATION: src/components/sections/Hero/Hero.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import './Hero.css';

function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  backgroundImage,
  variant = 'default',
  className = '',
  floatingBadge,
  highlightText,
  ...props
}) {
  const classes = [
    'hero',
    `hero--${variant}`,
    backgroundImage && 'hero--with-bg',
    className
  ]
    .filter(Boolean)
    .join(' ');

  // Function to add gradient highlights to title
  const renderTitle = () => {
    if (!title) return 'Building Digital Solutions That Transform Businesses';
    
    if (highlightText && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="highlight">{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    
    return title;
  };

  return (
    <section className={classes} {...props}>
      {backgroundImage && (
        <div className="hero__background">
          <img src={backgroundImage} alt="" />
          <div className="hero__overlay" />
        </div>
      )}

      <div className="hero__container container">
        <div className="hero__content">
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          
          <h1 className="hero__title">
            {renderTitle()}
          </h1>
          
          <p className="hero__description">
            {description || 'We create innovative software solutions that drive growth and deliver exceptional results. Partner with us to bring your vision to life.'}
          </p>

          <div className="hero__actions">
            {primaryCTA ? (
              <Button to={primaryCTA.link} size="large" variant="primary">
                {primaryCTA.text}
              </Button>
            ) : (
              <Button to="/contact" size="large" variant="primary">
                Get Started
              </Button>
            )}
            
            {secondaryCTA ? (
              <Button to={secondaryCTA.link} size="large" variant="outline">
                {secondaryCTA.text}
              </Button>
            ) : (
              <Button to="/portfolio" size="large" variant="outline">
                View Our Work
              </Button>
            )}
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">100+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        {image && (
          <div className="hero__image">
            {/* Decorative dots pattern */}
            <div className="hero__dots" />
            
            {/* Main image wrapper with 3D effect */}
            <div className="hero__image-wrapper">
              <img src={image} alt="Hero" />
            </div>

            {/* Floating badge (optional) */}
            {floatingBadge && (
              <div className="hero__floating-badge">
                <div className="hero__badge-icon">
                  {floatingBadge.icon || '🚀'}
                </div>
                <div className="hero__badge-content">
                  <h4>{floatingBadge.title || 'Trusted Partner'}</h4>
                  <p>{floatingBadge.text || '100% Success Rate'}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;