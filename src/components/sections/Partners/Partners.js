/**
 * PRODVESTOR WEBSITE - PARTNERS SECTION
 * FILE LOCATION: src/components/sections/Partners/Partners.js
 */

import React from 'react';
import { getFeaturedPartners } from '../../../data/partners';
import './Partners.css';

function Partners({
  title,
  subtitle,
  description,
  variant = 'default',
  className = '',
  ...props
}) {
  const partners = getFeaturedPartners();

  return (
    <section className={`partners-section partners-section--${variant} ${className}`} {...props}>
      <div className="partners-section__container container">
        {/* Header */}
        <div className="partners-section__header">
          {subtitle && (
            <p className="partners-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="partners-section__title">
            {title || 'Trusted By Leading Companies'}
          </h2>
          
          {description && (
            <p className="partners-section__description">{description}</p>
          )}
        </div>

        {/* Partners Grid */}
        <div className="partners-section__grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partners-section__item">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="partners-section__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;