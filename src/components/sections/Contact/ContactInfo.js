/**
 * PRODVESTOR WEBSITE - CONTACT INFO COMPONENT
 * FILE LOCATION: src/components/sections/Contact/ContactInfo.js
 */

import React from 'react';
import { socialLinks } from '../../../data/navigation';
import './ContactInfo.css';

function ContactInfo() {
  const contactDetails = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@prodvestor.com',
      link: 'mailto:hello@prodvestor.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Tech Street, San Francisco, CA 94102',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="contact-info">
      <h3 className="contact-info__title">Get In Touch</h3>
      <p className="contact-info__description">
        We'd love to hear from you. Reach out to us through any of the following channels.
      </p>

      <div className="contact-info__details">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-info__item">
            <div className="contact-info__icon">{detail.icon}</div>
            <div className="contact-info__content">
              <h4 className="contact-info__label">{detail.title}</h4>
              <a 
                href={detail.link}
                className="contact-info__value"
                target={detail.link.startsWith('http') ? '_blank' : undefined}
                rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {detail.value}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-info__social">
        <h4 className="contact-info__social-title">Follow Us</h4>
        <div className="contact-info__social-links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="contact-info__social-link"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;