/**
 * PRODVESTOR WEBSITE - Validation Utilities
 * FILE LOCATION: src/utils/validation.js
 */

// Regular expressions
const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\d\s\-\+\(\)]+$/,
  URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  ALPHA: /^[a-zA-Z]+$/,
  NUMERIC: /^[0-9]+$/
};

/**
 * Validate email address
 */
export function isValidEmail(email) {
  return REGEX.EMAIL.test(String(email).toLowerCase());
}

/**
 * Validate phone number
 */
export function isValidPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && REGEX.PHONE.test(phone);
}

/**
 * Validate URL
 */
export function isValidURL(url) {
  return REGEX.URL.test(url);
}

/**
 * Validate required field
 */
export function isRequired(value) {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return value !== null && value !== undefined;
}

/**
 * Validate minimum length
 */
export function minLength(value, min) {
  if (typeof value === 'string') {
    return value.trim().length >= min;
  }
  if (Array.isArray(value)) {
    return value.length >= min;
  }
  return false;
}

/**
 * Validate maximum length
 */
export function maxLength(value, max) {
  if (typeof value === 'string') {
    return value.trim().length <= max;
  }
  if (Array.isArray(value)) {
    return value.length <= max;
  }
  return false;
}

/**
 * Validate field based on rules
 */
export function validateField(name, value, rules) {
  if (!rules) return null;

  // Required validation
  if (rules.required && !isRequired(value)) {
    return rules.requiredMessage || `${name} is required`;
  }

  // Skip other validations if field is empty and not required
  if (!isRequired(value)) {
    return null;
  }

  // Email validation
  if (rules.email && !isValidEmail(value)) {
    return rules.emailMessage || 'Please enter a valid email address';
  }

  // Phone validation
  if (rules.phone && !isValidPhone(value)) {
    return rules.phoneMessage || 'Please enter a valid phone number';
  }

  // URL validation
  if (rules.url && !isValidURL(value)) {
    return rules.urlMessage || 'Please enter a valid URL';
  }

  // Min length validation
  if (rules.minLength && !minLength(value, rules.minLength)) {
    return rules.minLengthMessage || `Minimum length is ${rules.minLength} characters`;
  }

  // Max length validation
  if (rules.maxLength && !maxLength(value, rules.maxLength)) {
    return rules.maxLengthMessage || `Maximum length is ${rules.maxLength} characters`;
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return rules.patternMessage || 'Invalid format';
  }

  // Custom validation function
  if (rules.validate && typeof rules.validate === 'function') {
    const error = rules.validate(value);
    if (error) return error;
  }

  return null;
}

/**
 * Validate entire form
 */
export function validateForm(values, rules) {
  const errors = {};

  Object.keys(rules).forEach(fieldName => {
    const error = validateField(fieldName, values[fieldName], rules[fieldName]);
    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
}

/**
 * Contact form validation rules
 */
export const contactFormRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    requiredMessage: 'Please enter your name',
    minLengthMessage: 'Name must be at least 2 characters'
  },
  email: {
    required: true,
    email: true,
    requiredMessage: 'Please enter your email',
    emailMessage: 'Please enter a valid email address'
  },
  phone: {
    phone: true,
    phoneMessage: 'Please enter a valid phone number'
  },
  company: {
    maxLength: 100
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 200,
    requiredMessage: 'Please enter a subject'
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    requiredMessage: 'Please enter your message',
    minLengthMessage: 'Message must be at least 10 characters'
  },
  inquiryType: {
    required: true,
    requiredMessage: 'Please select an inquiry type'
  },
  agreeToTerms: {
    required: true,
    validate: (value) => value === true ? null : 'You must agree to the terms',
    requiredMessage: 'You must agree to the terms and conditions'
  }
};

/**
 * Newsletter subscription validation rules
 */
export const newsletterRules = {
  email: {
    required: true,
    email: true,
    requiredMessage: 'Email is required',
    emailMessage: 'Please enter a valid email address'
  }
};

/**
 * Job application validation rules
 */
export const jobApplicationRules = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 100
  },
  email: {
    required: true,
    email: true
  },
  phone: {
    required: true,
    phone: true
  },
  position: {
    required: true
  },
  experience: {
    required: true
  },
  resume: {
    required: true,
    validate: (file) => {
      if (!file) return 'Resume is required';
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        return 'Resume must be a PDF or Word document';
      }
      if (file.size > 5 * 1024 * 1024) {
        return 'Resume file size must be less than 5MB';
      }
      return null;
    }
  },
  coverLetter: {
    minLength: 50,
    maxLength: 2000
  }
};

export default {
  isValidEmail,
  isValidPhone,
  isValidURL,
  isRequired,
  minLength,
  maxLength,
  validateField,
  validateForm,
  contactFormRules,
  newsletterRules,
  jobApplicationRules,
  REGEX
};