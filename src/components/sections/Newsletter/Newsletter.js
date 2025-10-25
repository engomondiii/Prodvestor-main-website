/**
 * PRODVESTOR WEBSITE - NEWSLETTER SECTION
 * FILE LOCATION: src/components/sections/Newsletter/Newsletter.js
 */

import React, { useState } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Alert from '../../common/Alert';
import './Newsletter.css';

function Newsletter({
  title,
  description,
  variant = 'default',
  className = '',
  ...props
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    if (!email.trim()) {
      setError('Email is required');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`newsletter-section newsletter-section--${variant} ${className}`} {...props}>
      <div className="newsletter-section__container container">
        <div className="newsletter-section__content">
          <div className="newsletter-section__text">
            <h2 className="newsletter-section__title">
              {title || 'Subscribe to Our Newsletter'}
            </h2>
            
            <p className="newsletter-section__description">
              {description || 'Get the latest updates on technology trends, project insights, and special offers delivered to your inbox.'}
            </p>
          </div>

          <div className="newsletter-section__form-wrapper">
            {submitStatus === 'success' && (
              <Alert 
                variant="success" 
                dismissible 
                onClose={() => setSubmitStatus(null)}
              >
                Thank you for subscribing! Check your email for confirmation.
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert 
                variant="error" 
                dismissible 
                onClose={() => setSubmitStatus(null)}
              >
                Something went wrong. Please try again later.
              </Alert>
            )}

            {submitStatus !== 'success' && (
              <form onSubmit={handleSubmit} className="newsletter-section__form">
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  error={error}
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}

            <p className="newsletter-section__privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;