/**
 * PRODVESTOR WEBSITE - FAQ SECTION
 * FILE LOCATION: src/components/sections/FAQ/FAQ.js
 */

import React, { useState } from 'react';
import { getFaqsByCategory, faqCategories } from '../../../data/faq';
import FAQItem from './FAQItem';
import './FAQ.css';

function FAQ({
  title,
  subtitle,
  description,
  showCategories = true,
  defaultCategory,
  className = '',
  ...props
}) {
  const [activeCategory, setActiveCategory] = useState(
    defaultCategory || faqCategories[0]
  );

  const faqs = activeCategory 
    ? getFaqsByCategory(activeCategory)
    : getFaqsByCategory(faqCategories[0]);

  return (
    <section className={`faq-section ${className}`} {...props}>
      <div className="faq-section__container container">
        {/* Header */}
        <div className="faq-section__header">
          {subtitle && (
            <p className="faq-section__subtitle">{subtitle}</p>
          )}
          
          <h2 className="faq-section__title">
            {title || 'Frequently Asked Questions'}
          </h2>
          
          {description && (
            <p className="faq-section__description">{description}</p>
          )}
        </div>

        {/* Categories */}
        {showCategories && (
          <div className="faq-section__categories">
            {faqCategories.map((category) => (
              <button
                key={category}
                className={`faq-section__category ${
                  activeCategory === category ? 'faq-section__category--active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ List */}
        <div className="faq-section__list">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;