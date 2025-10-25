/**
 * PRODVESTOR WEBSITE - CONTACT FORM COMPONENT
 * FILE LOCATION: src/components/sections/Contact/ContactForm.js
 */

import React, { useState } from 'react';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import Select from '../../common/Select';
import Button from '../../common/Button';
import Alert from '../../common/Alert';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: 'custom-software', label: 'Custom Software Development' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'consulting', label: 'IT Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      <h3 className="contact-form__title">Send Us a Message</h3>
      <p className="contact-form__description">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      {submitStatus === 'success' && (
        <Alert variant="success" dismissible onClose={() => setSubmitStatus(null)}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert variant="error" dismissible onClose={() => setSubmitStatus(null)}>
          Something went wrong. Please try again later.
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="contact-form__form">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          fullWidth
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          fullWidth
        />

        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          helperText="Optional"
          fullWidth
        />

        <Select
          label="Service Interested In"
          name="service"
          value={formData.service}
          onChange={handleChange}
          options={serviceOptions}
          fullWidth
        />

        <Select
          label="Budget Range"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          options={budgetOptions}
          fullWidth
        />

        <TextArea
          label="Project Details"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          rows={6}
          required
          fullWidth
          maxLength={1000}
          showCount
        />

        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;