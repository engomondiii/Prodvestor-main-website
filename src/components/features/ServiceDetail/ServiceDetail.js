/**
 * PRODVESTOR WEBSITE - SERVICE DETAIL COMPONENT
 * FILE LOCATION: src/components/features/ServiceDetail/ServiceDetail.js
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../../../data/services';
import Button from '../../common/Button';
import Badge from '../../common/Badge';
import './ServiceDetail.css';

function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="service-detail service-detail--not-found">
        <div className="container">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Button to="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-detail__hero">
        <div className="container">
          <div className="service-detail__hero-content">
            <Badge variant="primary">{service.category}</Badge>
            <h1 className="service-detail__title">{service.title}</h1>
            <p className="service-detail__subtitle">{service.shortDescription}</p>
            
            <div className="service-detail__meta">
              {service.pricing && (
                <div className="service-detail__pricing">
                  <span className="service-detail__price-label">Starting from</span>
                  <span className="service-detail__price">
                    ${service.pricing.startingFrom.toLocaleString()}
                  </span>
                </div>
              )}
              {service.deliveryTime && (
                <div className="service-detail__delivery">
                  <span className="service-detail__delivery-icon">⏱️</span>
                  <span>{service.deliveryTime}</span>
                </div>
              )}
            </div>

            <div className="service-detail__actions">
              <Button to="/contact" variant="primary" size="large">
                Request Quote
              </Button>
              <Button to="/portfolio" variant="outline" size="large">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="service-detail__overview">
        <div className="container">
          <h2>Overview</h2>
          <p>{service.fullDescription || service.description}</p>
        </div>
      </section>

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <section className="service-detail__features">
          <div className="container">
            <h2>What's Included</h2>
            <div className="service-detail__features-grid">
              {service.features.map((feature, index) => (
                <div key={index} className="service-detail__feature">
                  <div className="service-detail__feature-icon">✓</div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="service-detail__technologies">
          <div className="container">
            <h2>Technologies We Use</h2>
            <div className="service-detail__tech-grid">
              {service.technologies.map((tech, index) => (
                <div key={index} className="service-detail__tech">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <section className="service-detail__process">
          <div className="container">
            <h2>Our Process</h2>
            <div className="service-detail__process-steps">
              {service.process.map((step, index) => (
                <div key={index} className="service-detail__process-step">
                  <div className="service-detail__process-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="service-detail__cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help bring your project to life.</p>
          <Button to="/contact" variant="primary" size="large">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;