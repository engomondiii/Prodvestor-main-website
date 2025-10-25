/**
 * PRODVESTOR WEBSITE - SERVICES SECTION
 * FILE LOCATION: src/components/sections/Services/Services.js
 */

import React from 'react';
import { getFeaturedServices } from '../../../data/services';
import ServiceCard from './ServiceCard';
import Button from '../../common/Button';
import './Services.css';

function Services({
  title,
  subtitle,
  description,
  showAll = false,
  limit = 6,
  className = '',
  ...props
}) {
  const services = showAll 
    ? getFeaturedServices() 
    : getFeaturedServices().slice(0, limit);

  return (
    <section className={`services-section ${className}`} {...props}>
      <div className="services-section__container container">
        {/* Header */}
        <div className="services-section__header">
          {subtitle && (
            <p className="services-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="services-section__title">
            {title || 'Our Services'}
          </h2>
          
          {description && (
            <p className="services-section__description">{description}</p>
          )}
        </div>

        {/* Services Grid */}
        <div className="services-section__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="services-section__footer">
            <Button to="/services" variant="primary" size="large">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;