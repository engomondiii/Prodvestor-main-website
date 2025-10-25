/**
 * PRODVESTOR WEBSITE - TESTIMONIAL CARD COMPONENT
 * FILE LOCATION: src/components/sections/Testimonials/TestimonialCard.js
 */

import React from 'react';
import Card from '../../common/Card';
import './TestimonialCard.css';

function TestimonialCard({ testimonial }) {
  return (
    <Card variant="elevated" className="testimonial-card">
      {/* Rating */}
      <div className="testimonial-card__rating">
        {[...Array(testimonial.rating)].map((_, index) => (
          <span key={index} className="testimonial-card__star">⭐</span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="testimonial-card__quote">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="testimonial-card__author">
        {testimonial.avatar && (
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="testimonial-card__avatar"
          />
        )}
        <div className="testimonial-card__author-info">
          <h4 className="testimonial-card__author-name">
            {testimonial.name}
          </h4>
          <p className="testimonial-card__author-position">
            {testimonial.position}, {testimonial.company}
          </p>
          {testimonial.verified && (
            <span className="testimonial-card__verified">
              ✓ Verified Client
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;