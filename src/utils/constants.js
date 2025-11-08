/**
 * PRODVESTOR WEBSITE - Constants
 * FILE LOCATION: src/utils/constants.js
 */

// Company Information
export const COMPANY = {
  name: 'Prodvestor Ltd.',
  tagline: 'Where Innovation Meets Execution',
  founded: '2025',
  registrationNumber: 'PVT-YQ19YYE2',
  email: 'info@prodvestor.com',
  phone: '+254 XXX XXX XXX',
  address: {
    street: 'Karen, Ndege Road, The Watermark Business Park',
    building: 'Nairobi',
    city: 'Nairobi',
    county: 'Nairobi County',
    country: 'Kenya'
  },
  social: {
    linkedin: 'https://ke.linkedin.com/company/prodvestorinnovators',
    twitter: 'https://twitter.com/prodvestor',
    facebook: 'https://facebook.com/prodvestor',
    instagram: 'https://instagram.com/prodvestor',
    github: 'https://github.com/prodvestor'
  }
};

// Navigation Menu Items
export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'All Services', path: '/services' },
      { label: 'Talent Acquisition', path: '/services/talent-acquisition' },
      { label: 'Project Development', path: '/services/project-development' },
      { label: 'IT Consultation', path: '/services/it-consultation' },
      { label: 'Training & Mentorship', path: '/services/training' }
    ]
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

// Service Categories
export const SERVICES = {
  TALENT_ACQUISITION: 'talent-acquisition',
  PROJECT_DEVELOPMENT: 'project-development',
  IT_CONSULTATION: 'it-consultation',
  TRAINING: 'training'
};

// Project Categories
export const PROJECT_CATEGORIES = {
  ALL: 'all',
  WEB: 'web',
  MOBILE: 'mobile',
  AI_ML: 'ai-ml',
  BLOCKCHAIN: 'blockchain',
  SAAS: 'saas',
  HEALTHCARE: 'healthcare',
  EDUCATION: 'education',
  FINTECH: 'fintech',
  SUSTAINABILITY: 'sustainability'
};

// Technology Stacks
export const TECHNOLOGIES = {
  FRONTEND: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript'],
  BACKEND: ['Node.js', 'Python', 'Django', 'Ruby on Rails', 'PHP'],
  MOBILE: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  CLOUD: ['AWS', 'Azure', 'Google Cloud'],
  DATABASE: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  DEVOPS: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  AI_ML: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
  BLOCKCHAIN: ['Ethereum', 'Solidity', 'Web3.js']
};

// Team Roles
export const TEAM_ROLES = {
  DIRECTOR: 'Director',
  CEO: 'CEO',
  CTO: 'CTO',
  SENIOR_DEVELOPER: 'Senior Developer',
  MID_DEVELOPER: 'Mid-Level Developer',
  JUNIOR_DEVELOPER: 'Junior Developer',
  DESIGNER: 'UI/UX Designer',
  PROJECT_MANAGER: 'Project Manager',
  DEVOPS: 'DevOps Engineer'
};

// Form Field Types
export const FIELD_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
  PASSWORD: 'password',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  FILE: 'file',
  DATE: 'date'
};

// Notification Types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.prodvestor.com',
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  PROJECTS: '/api/projects',
  BLOG: '/api/blog',
  TEAM: '/api/team'
};

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 767,
  TABLET: 1023,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1440
};

// Animation Durations (ms)
export const ANIMATION = {
  FAST: 150,
  STANDARD: 300,
  SLOW: 500
};

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'prodvestor-theme',
  USER_PREFERENCES: 'prodvestor-preferences',
  RECENT_SEARCHES: 'prodvestor-recent-searches'
};

// SEO Defaults
export const SEO = {
  DEFAULT_TITLE: 'Prodvestor | Where Innovation Meets Execution',
  DEFAULT_DESCRIPTION: 'Prodvestor connects elite software developers from emerging markets with global opportunities while building innovative technology solutions across healthcare, education, sustainability, and beyond.',
  DEFAULT_KEYWORDS: 'software development, talent acquisition, Kenya developers, project development, IT consultation, tech training, AI development, blockchain solutions',
  DEFAULT_OG_IMAGE: '/assets/images/og-image.jpg',
  SITE_NAME: 'Prodvestor',
  TWITTER_HANDLE: '@prodvestor'
};

// Pagination
export const PAGINATION = {
  ITEMS_PER_PAGE: 12,
  BLOG_POSTS_PER_PAGE: 9,
  PROJECTS_PER_PAGE: 12
};

// Contact Form Options
export const INQUIRY_TYPES = [
  { value: 'talent', label: 'Talent Acquisition' },
  { value: 'project', label: 'Project Development' },
  { value: 'consultation', label: 'IT Consultation' },
  { value: 'training', label: 'Training & Mentorship' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'general', label: 'General Inquiry' }
];

export const BUDGETS = [
  { value: 'less-10k', label: 'Less than $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'more-100k', label: 'More than $100,000' }
];

export const TIMELINES = [
  { value: 'immediate', label: 'Immediate (1-2 weeks)' },
  { value: 'short', label: 'Short-term (1-3 months)' },
  { value: 'medium', label: 'Medium-term (3-6 months)' },
  { value: 'long', label: 'Long-term (6+ months)' },
  { value: 'flexible', label: 'Flexible' }
];

// Export all as default object
export default {
  COMPANY,
  NAV_ITEMS,
  SERVICES,
  PROJECT_CATEGORIES,
  TECHNOLOGIES,
  TEAM_ROLES,
  FIELD_TYPES,
  NOTIFICATION_TYPES,
  API_ENDPOINTS,
  BREAKPOINTS,
  ANIMATION,
  STORAGE_KEYS,
  SEO,
  PAGINATION,
  INQUIRY_TYPES,
  BUDGETS,
  TIMELINES
};