/**
 * PRODVESTOR WEBSITE - FAQ ITEM COMPONENT
 * FILE LOCATION: src/components/sections/FAQ/FAQItem.js
 */

import React, { useState } from 'react';
import './FAQItem.css';

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-item__question-text">{faq.question}</span>
        <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div className="faq-item__answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;