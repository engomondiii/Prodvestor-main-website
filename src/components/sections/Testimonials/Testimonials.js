/**
 * PRODVESTOR WEBSITE - TESTIMONIALS SECTION
 * FILE LOCATION: src/components/sections/Testimonials/Testimonials.js
 */

import React from 'react';
import { getFeaturedTestimonials } from '../../../data/testimonials';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

function Testimonials({
  title,
  subtitle,
  description,
  showAll = false,
  limit = 3,
  className = '',
  ...props
}) {
  const testimonials = showAll 
    ? getFeaturedTestimonials() 
    : getFeaturedTestimonials().slice(0, limit);

  return (
    <section className={`testimonials-section ${className}`} {...props}>
      <div className="testimonials-section__container container">
        {/* Header */}
        <div className="testimonials-section__header">
          {subtitle && (
            <p className="testimonials-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="testimonials-section__title">
            {title || 'What Our Clients Say'}
          </h2>
          
          {description && (
            <p className="testimonials-section__description">{description}</p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-section__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;