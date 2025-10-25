/**
 * PRODVESTOR WEBSITE - CTA SECTION
 * FILE LOCATION: src/components/sections/CTA/CTA.js
 */

import React from 'react';
import Button from '../../common/Button';
import './CTA.css';

function CTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <section className={`cta-section cta-section--${variant} ${className}`} {...props}>
      <div className="cta-section__container container">
        <div className="cta-section__content">
          <h2 className="cta-section__title">
            {title || 'Ready to Start Your Project?'}
          </h2>
          
          <p className="cta-section__description">
            {description || 'Let\'s work together to bring your vision to life. Contact us today for a free consultation.'}
          </p>

          <div className="cta-section__actions">
            <Button 
              to={primaryButtonLink || '/contact'} 
              variant="primary" 
              size="large"
            >
              {primaryButtonText || 'Get Started'}
            </Button>
            
            {secondaryButtonText && (
              <Button 
                to={secondaryButtonLink || '/portfolio'} 
                variant="outline" 
                size="large"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;