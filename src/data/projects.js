/**
 * PRODVESTOR WEBSITE - PROJECTS DATA
 * Portfolio projects and case studies
 * 
 * FILE LOCATION: src/data/projects.js
 * 
 * USAGE:
 * import { projects, getProjectById, getProjectBySlug } from './data/projects';
 */

export const projects = [
  {
    id: 1,
    slug: 'fintech-mobile-banking-app',
    title: 'FinTech Mobile Banking App',
    client: 'SecureBank Solutions',
    clientIndustry: 'Financial Services',
    shortDescription: 'A secure, user-friendly mobile banking application serving over 500,000 users.',
    fullDescription: 'We developed a comprehensive mobile banking solution that allows users to manage their finances on the go. The app includes features like account management, fund transfers, bill payments, and investment tracking, all secured with bank-grade encryption.',
    challenge: 'The client needed a mobile banking solution that could handle high transaction volumes while maintaining security and providing an intuitive user experience. Legacy systems integration was also a major challenge.',
    solution: 'We built a scalable, cloud-native mobile app using React Native for cross-platform compatibility. Implemented multi-factor authentication, biometric login, and end-to-end encryption. Integrated seamlessly with existing banking systems through custom APIs.',
    results: [
      '500,000+ active users in first year',
      '4.8/5 star rating on app stores',
      '60% reduction in branch visits',
      '40% increase in digital transactions',
      '99.9% uptime achieved',
      'Featured in Top 10 Banking Apps'
    ],
    metrics: {
      users: '500,000+',
      rating: 4.8,
      reduction: '60%',
      increase: '40%',
      uptime: '99.9%'
    },
    technologies: [
      'React Native',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Redis',
      'Docker',
      'Kubernetes',
      'GraphQL'
    ],
    services: [1, 3, 5], // IDs from services.js
    category: 'Mobile App',
    industry: 'FinTech',
    duration: '10 months',
    teamSize: 8,
    year: 2023,
    featured: true,
    images: {
      thumbnail: '/assets/images/projects/fintech-thumb.jpg',
      hero: '/assets/images/projects/fintech-thumb.jpg',
      gallery: [
        '/assets/images/projects/fintech-2.jpg',
        '/assets/images/projects/fintech-2.jpg',
        '/assets/images/projects/fintech-3.jpg',
        '/assets/images/projects/fintech-4.jpg',
      ]
    },
    testimonial: {
      quote: "Prodvestor delivered an exceptional mobile banking solution that exceeded our expectations. The app is secure, fast, and our customers love it.",
      author: 'Sarah Johnson',
      position: 'CTO, SecureBank Solutions',
      avatar: '/assets/images/testimonials/sarah-johnson.jpg'
    },
    link: 'https://example.com', // Optional external link
    status: 'Live',
    tags: ['Mobile App', 'FinTech', 'React Native', 'Banking', 'Security']
  },
  {
    id: 2,
    slug: 'ecommerce-platform-retail',
    title: 'E-Commerce Platform for Fashion Retailer',
    client: 'StyleHub Fashion',
    clientIndustry: 'Retail & E-commerce',
    shortDescription: 'A modern e-commerce platform that increased online sales by 150% within 6 months.',
    fullDescription: 'We designed and developed a fully-featured e-commerce website with advanced product filtering, personalized recommendations, seamless checkout, and comprehensive admin dashboard for inventory management.',
    challenge: 'StyleHub was losing customers due to slow page loads, complicated checkout process, and poor mobile experience. They needed a modern platform that could handle seasonal traffic spikes.',
    solution: 'Built a high-performance e-commerce platform using Next.js for optimal SEO and speed. Implemented AI-powered product recommendations, streamlined checkout with multiple payment options, and created responsive design for all devices.',
    results: [
      '150% increase in online sales',
      '45% improvement in page load speed',
      '70% reduction in cart abandonment',
      '200% increase in mobile conversions',
      'Handled 10x Black Friday traffic',
      'Top 3 in fashion e-commerce searches'
    ],
    metrics: {
      salesIncrease: '150%',
      speedImprovement: '45%',
      cartReduction: '70%',
      mobileIncrease: '200%'
    },
    technologies: [
      'Next.js',
      'React',
      'Stripe',
      'MongoDB',
      'Node.js',
      'Tailwind CSS',
      'Vercel',
      'Algolia'
    ],
    services: [2, 4], // IDs from services.js
    category: 'Web Application',
    industry: 'E-commerce',
    duration: '6 months',
    teamSize: 6,
    year: 2023,
    featured: true,
    images: {
      thumbnail: '/assets/images/projects/ecommerce-thumb.jpeg',
      hero: '/assets/images/projects/ecommerce-1.jpg',
      gallery: [
        '/assets/images/projects/ecommerce-1.jpg',
        // '/assets/images/projects/ecommerce-2.jpg',
        // '/assets/images/projects/ecommerce-3.jpg'
      ]
    },
    testimonial: {
      quote: "The new platform transformed our online business. Sales are up, customers are happy, and managing inventory is so much easier now.",
      author: 'Michael Chen',
      position: 'CEO, StyleHub Fashion',
      avatar: '/assets/images/testimonials/michael-chen.jpg'
    },
    link: 'https://example.com',
    status: 'Live',
    tags: ['E-commerce', 'Web App', 'Next.js', 'Fashion', 'Retail']
  },
  // {
  //   id: 3,
  //   slug: 'healthcare-patient-portal',
  //   title: 'Healthcare Patient Portal',
  //   client: 'MediCare Plus',
  //   clientIndustry: 'Healthcare',
  //   shortDescription: 'HIPAA-compliant patient portal serving 50,000+ patients across 20 clinics.',
  //   fullDescription: 'We developed a comprehensive patient portal that enables patients to book appointments, access medical records, communicate with doctors, and manage prescriptions online - all while maintaining strict HIPAA compliance.',
  //   challenge: 'MediCare Plus needed to digitize patient interactions while ensuring data security and HIPAA compliance. The system had to integrate with multiple Electronic Health Record (EHR) systems across different clinics.',
  //   solution: 'Created a secure, cloud-based patient portal with role-based access control, encrypted data storage, and audit trails. Integrated with existing EHR systems through standardized HL7 FHIR APIs. Implemented telemedicine capabilities.',
  //   results: [
  //     '50,000+ registered patients',
  //     '80% reduction in phone calls',
  //     '90% appointment booking online',
  //     '95% patient satisfaction rating',
  //     'HIPAA compliance certified',
  //     '75% reduction in no-shows'
  //   ],
  //   metrics: {
  //     patients: '50,000+',
  //     callReduction: '80%',
  //     onlineBooking: '90%',
  //     satisfaction: '95%'
  //   },
  //   technologies: [
  //     'React',
  //     'Node.js',
  //     'MySQL',
  //     'AWS',
  //     'HL7 FHIR',
  //     'WebRTC',
  //     'Socket.io',
  //     'Redis'
  //   ],
  //   services: [1, 2, 5], // IDs from services.js
  //   category: 'Web Application',
  //   industry: 'Healthcare',
  //   duration: '8 months',
  //   teamSize: 10,
  //   year: 2022,
  //   featured: true,
  //   images: {
  //     thumbnail: '/assets/images/projects/healthcare-thumb.jpg',
  //     hero: '/assets/images/projects/healthcare-hero.jpg',
  //     gallery: [
  //       '/assets/images/projects/healthcare-1.jpg',
  //       '/assets/images/projects/healthcare-2.jpg',
  //       '/assets/images/projects/healthcare-3.jpg'
  //     ]
  //   },
  //   testimonial: {
  //     quote: "Prodvestor built us a secure, compliant portal that our patients love. It's streamlined our operations significantly.",
  //     author: 'Dr. Emily Rodriguez',
  //     position: 'Chief Medical Officer, MediCare Plus',
  //     avatar: '/assets/images/testimonials/emily-rodriguez.jpeg'
  //   },
  //   link: null,
  //   status: 'Live',
  //   tags: ['Healthcare', 'Web Portal', 'HIPAA', 'Telemedicine', 'Security']
  // },
  // {
  //   id: 4,
  //   slug: 'logistics-tracking-system',
  //   title: 'Real-Time Logistics Tracking System',
  //   client: 'GlobalShip Logistics',
  //   clientIndustry: 'Logistics & Transportation',
  //   shortDescription: 'Enterprise logistics platform tracking 100,000+ shipments daily across 40 countries.',
  //   fullDescription: 'We built a comprehensive logistics management system with real-time GPS tracking, route optimization, automated notifications, and analytics dashboard for fleet management.',
  //   challenge: 'GlobalShip needed to modernize their legacy tracking system that couldn\'t scale with business growth. They required real-time visibility across their global operations.',
  //   solution: 'Developed a cloud-based logistics platform with IoT integration for real-time tracking, AI-powered route optimization, and predictive analytics. Created mobile apps for drivers and web dashboard for managers.',
  //   results: [
  //     '100,000+ shipments tracked daily',
  //     '30% reduction in delivery times',
  //     '25% fuel cost savings',
  //     '50% fewer customer inquiries',
  //     'Real-time visibility achieved',
  //     '40% increase in fleet efficiency'
  //   ],
  //   metrics: {
  //     shipments: '100,000+',
  //     timeReduction: '30%',
  //     costSavings: '25%',
  //     efficiency: '40%'
  //   },
  //   technologies: [
  //     'React',
  //     'Python',
  //     'Django',
  //     'PostgreSQL',
  //     'Redis',
  //     'Google Maps API',
  //     'AWS IoT',
  //     'TensorFlow'
  //   ],
  //   services: [1, 3, 5, 7], // IDs from services.js
  //   category: 'Enterprise Software',
  //   industry: 'Logistics',
  //   duration: '12 months',
  //   teamSize: 12,
  //   year: 2023,
  //   featured: false,
  //   images: {
  //     thumbnail: '/assets/images/projects/logistics-thumb.jpg',
  //     hero: '/assets/images/projects/logistics-hero.jpg',
  //     gallery: [
  //       '/assets/images/projects/logistics-1.jpg',
  //       '/assets/images/projects/logistics-2.jpg'
  //     ]
  //   },
  //   testimonial: {
  //     quote: "The tracking system has revolutionized how we manage our fleet. Real-time data helps us make better decisions every day.",
  //     author: 'James Wilson',
  //     position: 'Operations Director, GlobalShip Logistics',
  //     avatar: '/assets/images/testimonials/james-wilson.jpg'
  //   },
  //   link: null,
  //   status: 'Live',
  //   tags: ['Logistics', 'IoT', 'Tracking', 'Enterprise', 'AI']
  // },
  // {
  //   id: 5,
  //   slug: 'property-management-saas',
  //   title: 'Property Management SaaS Platform',
  //   client: 'RentEase',
  //   clientIndustry: 'Real Estate',
  //   shortDescription: 'All-in-one property management software serving 500+ landlords and 5,000+ tenants.',
  //   fullDescription: 'A comprehensive SaaS solution for property management including rent collection, maintenance requests, tenant screening, lease management, and financial reporting.',
  //   challenge: 'Property managers were juggling multiple disconnected tools. RentEase needed an integrated platform that could handle all aspects of property management from a single dashboard.',
  //   solution: 'Built a multi-tenant SaaS platform with payment processing, automated rent reminders, maintenance ticketing system, and comprehensive analytics. Integrated with popular accounting software.',
  //   results: [
  //     '500+ property managers onboarded',
  //     '5,000+ active tenants',
  //     '95% on-time rent collection',
  //     '60% faster maintenance resolution',
  //     '$2M+ processed monthly',
  //     '4.9/5 user satisfaction'
  //   ],
  //   metrics: {
  //     managers: '500+',
  //     tenants: '5,000+',
  //     collection: '95%',
  //     satisfaction: '4.9/5'
  //   },
  //   technologies: [
  //     'React',
  //     'Node.js',
  //     'MongoDB',
  //     'Stripe',
  //     'SendGrid',
  //     'AWS S3',
  //     'Redis',
  //     'Chart.js'
  //   ],
  //   services: [1, 2, 4], // IDs from services.js
  //   category: 'SaaS',
  //   industry: 'Real Estate',
  //   duration: '9 months',
  //   teamSize: 7,
  //   year: 2022,
  //   featured: false,
  //   images: {
  //     thumbnail: '/assets/images/projects/property-thumb.jpg',
  //     hero: '/assets/images/projects/property-hero.jpg',
  //     gallery: [
  //       '/assets/images/projects/property-1.jpg',
  //       '/assets/images/projects/property-2.jpg'
  //     ]
  //   },
  //   testimonial: {
  //     quote: "RentEase has made property management so much easier. Everything I need is in one place.",
  //     author: 'Lisa Martinez',
  //     position: 'Property Manager',
  //     avatar: '/assets/images/testimonials/lisa-martinez.jpg'
  //   },
  //   link: 'https://example.com',
  //   status: 'Live',
  //   tags: ['SaaS', 'Real Estate', 'Property Management', 'Payments']
  // },
  {
    id: 6,
    slug: 'educational-learning-platform',
    title: 'Online Learning Platform',
    client: 'EduTech Academy',
    clientIndustry: 'Education',
    shortDescription: 'Interactive e-learning platform with 10,000+ students and 500+ courses.',
    fullDescription: 'We created a modern learning management system with video courses, live classes, quizzes, certificates, and progress tracking for both students and instructors.',
    challenge: 'Traditional classroom limitations during pandemic. Needed scalable platform for live and recorded classes with interactive features.',
    solution: 'Developed comprehensive LMS with video streaming, live webinar integration, gamification, and AI-powered personalized learning paths.',
    results: [
      '10,000+ enrolled students',
      '500+ active courses',
      '85% course completion rate',
      '95% student satisfaction',
      '200+ certified instructors',
      'Available in 15 languages'
    ],
    metrics: {
      students: '10,000+',
      courses: '500+',
      completion: '85%',
      satisfaction: '95%'
    },
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'AWS',
      'FFmpeg',
      'Zoom API',
      'Stripe'
    ],
    services: [1, 2, 3, 4], // IDs from services.js
    category: 'Web Application',
    industry: 'Education',
    duration: '7 months',
    teamSize: 9,
    year: 2022,
    featured: false,
    images: {
      thumbnail: '/assets/images/projects/education-thumb.jpg',
      hero: '/assets/images/projects/education-hero.jpg',
      gallery: [
        '/assets/images/projects/education-1.jpg',
        '/assets/images/projects/education-2.jpg'
      ]
    },
    testimonial: {
      quote: "The platform helped us transition to online learning seamlessly. Students and teachers love the intuitive interface.",
      author: 'Prof. David Thompson',
      position: 'Director, EduTech Academy',
      avatar: '/assets/images/testimonials/david-thompson.jpg'
    },
    link: 'https://example.com',
    status: 'Live',
    tags: ['Education', 'LMS', 'E-learning', 'Video Streaming']
  }
];

/**
 * Get project by ID
 */
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

/**
 * Get project by slug
 */
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

/**
 * Get projects by industry
 */
export const getProjectsByIndustry = (industry) => {
  return projects.filter(project => project.industry === industry);
};

/**
 * Get recent projects
 */
export const getRecentProjects = (limit = 3) => {
  return [...projects]
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
};

/**
 * Get all project categories
 */
export const getProjectCategories = () => {
  return [...new Set(projects.map(project => project.category))];
};

/**
 * Get all industries
 */
export const getIndustries = () => {
  return [...new Set(projects.map(project => project.industry))];
};

/**
 * Search projects
 */
export const searchProjects = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(lowerKeyword) ||
    project.shortDescription.toLowerCase().includes(lowerKeyword) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
};

export default projects;
/**
 * ====================================================================
 * ADDITIONAL EXPORTS - Added to fix import errors
 * ====================================================================
 */

/**
 * Get all projects (alias function)
 * Used by: ProjectGallery.js
 */
export const getAllProjects = () => {
  return projects;
};

/**
 * Export project categories as constant array
 * Used by: ProjectGallery.js, ProjectFilter.js
 */
export const projectCategories = [
  { id: 'all', label: 'All Projects', value: 'all' },
  { id: 'web', label: 'Web Development', value: 'Web App' },
  { id: 'mobile', label: 'Mobile Apps', value: 'Mobile App' },
  { id: 'ai', label: 'AI & Machine Learning', value: 'AI/ML' },
  { id: 'blockchain', label: 'Blockchain', value: 'Blockchain' },
  { id: 'saas', label: 'SaaS Platforms', value: 'SaaS' }
];