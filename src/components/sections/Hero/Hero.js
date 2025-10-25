/**
 * PRODVESTOR WEBSITE - HERO SECTION
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
            {title || 'Building Digital Solutions That Transform Businesses'}
          </h1>
          
          <p className="hero__description">
            {description || 'We create innovative software solutions that drive growth and deliver exceptional results. Partner with us to bring your vision to life.'}
          </p>

          <div className="hero__actions">
            {primaryCTA ? (
              primaryCTA
            ) : (
              <Button to="/contact" size="large" variant="primary">
                Get Started
              </Button>
            )}
            
            {secondaryCTA ? (
              secondaryCTA
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
            <img src={image} alt="Hero" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;