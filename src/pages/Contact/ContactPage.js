/**
 * PRODVESTOR WEBSITE - CONTACT PAGE
 * FILE LOCATION: src/pages/Contact/ContactPage.js
 */

import React from 'react';
import { ContactForm, ContactInfo } from '../../components/sections/Contact';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-page__hero">
        <div className="container">
          <h1 className="contact-page__title">Get In Touch</h1>
          <p className="contact-page__subtitle">
            Ready to start your project or have questions? We're here to help. Reach out and let's discuss how we can work together.
          </p>
        </div>
      </section>

      <section className="contact-page__content">
        <div className="container">
          <div className="contact-page__grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;