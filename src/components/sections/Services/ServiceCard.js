/**
 * PRODVESTOR WEBSITE - SERVICE CARD COMPONENT (MODERN)
 * FILE LOCATION: src/components/sections/Services/ServiceCard.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../common/Card';
import './ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card-link">
      <Card variant="elevated" hoverable className="service-card">
        
        {/* Optional badge for popular/featured services */}
        {service.badge && (
          <span className="service-card__badge">{service.badge}</span>
        )}
        
        <div className="service-card__icon">{service.icon}</div>
        
        <Card.Title>{service.title}</Card.Title>
        
        <Card.Text>{service.shortDescription}</Card.Text>

        {service.features && service.features.length > 0 && (
          <ul className="service-card__features">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="service-card__feature">
                <span className="service-card__feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {service.pricing && (
          <div className="service-card__pricing">
            <span className="service-card__price">
              From ${service.pricing.startingFrom.toLocaleString()}
            </span>
          </div>
        )}

        <div className="service-card__footer">
          <span className="service-card__link">
            Learn More
          </span>
        </div>
      </Card>
    </Link>
  );
}

export default ServiceCard;