/**
 * PRODVESTOR WEBSITE - SERVICES DATA
 * All services offered by Prodvestor
 * 
 * FILE LOCATION: src/data/services.js
 * 
 * USAGE:
 * import { services, getServiceById, getServiceBySlug } from './data/services';
 */

export const services = [
  {
    id: 1,
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription: 'Tailored software solutions built to meet your unique business needs and drive growth.',
    fullDescription: 'We create custom software applications designed specifically for your business processes. From enterprise solutions to mobile apps, our team delivers scalable, secure, and efficient software that gives you a competitive edge.',
    icon: '💻', // You can replace with actual icon component or image path
    iconName: 'code', // For icon libraries like FontAwesome or Lucide
    features: [
      'Enterprise Application Development',
      'Mobile App Development (iOS & Android)',
      'Web Application Development',
      'API Development & Integration',
      'Legacy System Modernization',
      'Cloud-Native Applications'
    ],
    benefits: [
      'Increased operational efficiency',
      'Improved customer experience',
      'Scalable solutions that grow with you',
      'Competitive advantage in your market',
      'Reduced manual processes',
      'Better data insights and reporting'
    ],
    technologies: [
      'React',
      'Node.js',
      'Python',
      'Java',
      'Swift',
      'Kotlin',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Azure'
    ],
    pricing: {
      startingFrom: 15000,
      pricingModel: 'Project-based',
      currency: 'USD'
    },
    deliveryTime: '8-16 weeks',
    category: 'Development',
    featured: true,
    popular: true,
    image: '/images/services/custom-software.jpg',
    caseStudies: [1, 3], // IDs of related case studies
    relatedServices: [2, 5]
  },
  {
    id: 2,
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Modern, responsive websites that engage users and convert visitors into customers.',
    fullDescription: 'We build stunning, high-performance websites using the latest web technologies. Whether you need a corporate website, e-commerce platform, or web application, we deliver responsive designs that work flawlessly across all devices.',
    icon: '🌐',
    iconName: 'globe',
    features: [
      'Responsive Website Design',
      'E-commerce Solutions',
      'Content Management Systems (CMS)',
      'Progressive Web Apps (PWA)',
      'SEO Optimization',
      'Performance Optimization'
    ],
    benefits: [
      'Professional online presence',
      'Mobile-friendly designs',
      'Fast loading speeds',
      'Search engine visibility',
      'Easy content management',
      '24/7 customer accessibility'
    ],
    technologies: [
      'React',
      'Next.js',
      'Vue.js',
      'WordPress',
      'Shopify',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript'
    ],
    pricing: {
      startingFrom: 5000,
      pricingModel: 'Project-based',
      currency: 'USD'
    },
    deliveryTime: '4-8 weeks',
    category: 'Development',
    featured: true,
    popular: true,
    image: '/images/services/web-development.jpg',
    caseStudies: [2],
    relatedServices: [1, 3]
  },
  {
    id: 3,
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    fullDescription: 'Transform your ideas into powerful mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions that provide seamless experiences across all devices.',
    icon: '📱',
    iconName: 'smartphone',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Development',
      'App UI/UX Design',
      'App Store Deployment',
      'Maintenance & Support'
    ],
    benefits: [
      'Reach mobile-first audiences',
      'Enhanced customer engagement',
      'Push notifications',
      'Offline functionality',
      'Native device features',
      'Higher conversion rates'
    ],
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'Redux',
      'GraphQL'
    ],
    pricing: {
      startingFrom: 20000,
      pricingModel: 'Project-based',
      currency: 'USD'
    },
    deliveryTime: '12-20 weeks',
    category: 'Development',
    featured: true,
    popular: true,
    image: '/images/services/mobile-app.jpg',
    caseStudies: [1],
    relatedServices: [1, 4]
  },
  {
    id: 4,
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered designs that create delightful experiences and drive engagement.',
    fullDescription: 'Our design team creates intuitive, beautiful interfaces that users love. From wireframes to high-fidelity prototypes, we focus on user experience to ensure your product is both functional and visually stunning.',
    icon: '🎨',
    iconName: 'palette',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems'
    ],
    benefits: [
      'Improved user satisfaction',
      'Reduced development costs',
      'Faster time to market',
      'Lower bounce rates',
      'Increased conversions',
      'Brand consistency'
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Principle',
      'Framer'
    ],
    pricing: {
      startingFrom: 3000,
      pricingModel: 'Project-based',
      currency: 'USD'
    },
    deliveryTime: '2-6 weeks',
    category: 'Design',
    featured: true,
    popular: false,
    image: '/images/services/ui-ux-design.jpg',
    caseStudies: [2, 3],
    relatedServices: [2, 3]
  },
  {
    id: 5,
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & DevOps',
    shortDescription: 'Scalable cloud infrastructure and automated deployment pipelines for modern businesses.',
    fullDescription: 'Leverage the power of cloud computing with our comprehensive cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement DevOps practices for faster, more reliable deployments.',
    icon: '☁️',
    iconName: 'cloud',
    features: [
      'Cloud Migration',
      'Cloud Infrastructure Setup',
      'CI/CD Pipeline Implementation',
      'Container Orchestration',
      'Monitoring & Logging',
      'Security & Compliance'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Better reliability & uptime',
      'Faster deployment cycles',
      'Enhanced security',
      'Global reach'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Jenkins',
      'GitLab CI'
    ],
    pricing: {
      startingFrom: 8000,
      pricingModel: 'Project-based or Monthly',
      currency: 'USD'
    },
    deliveryTime: '4-12 weeks',
    category: 'Infrastructure',
    featured: false,
    popular: true,
    image: '/images/services/cloud-solutions.jpg',
    caseStudies: [1],
    relatedServices: [1, 6]
  },
  {
    id: 6,
    slug: 'it-consulting',
    title: 'IT Consulting & Strategy',
    shortDescription: 'Expert guidance to align your technology strategy with business goals.',
    fullDescription: 'Our experienced consultants help you make informed technology decisions. From digital transformation to IT strategy, we provide the expertise you need to navigate complex technology landscapes.',
    icon: '💼',
    iconName: 'briefcase',
    features: [
      'Technology Assessment',
      'Digital Transformation Strategy',
      'IT Roadmap Development',
      'Vendor Selection',
      'Process Optimization',
      'Technology Training'
    ],
    benefits: [
      'Informed decision making',
      'Reduced technology risks',
      'Better ROI on IT investments',
      'Improved team productivity',
      'Competitive advantage',
      'Future-proof technology stack'
    ],
    technologies: [
      'Various based on client needs'
    ],
    pricing: {
      startingFrom: 150,
      pricingModel: 'Hourly or Retainer',
      currency: 'USD'
    },
    deliveryTime: 'Ongoing',
    category: 'Consulting',
    featured: false,
    popular: false,
    image: '/images/services/it-consulting.jpg',
    caseStudies: [],
    relatedServices: [1, 5]
  },
  {
    id: 7,
    slug: 'api-integration',
    title: 'API Development & Integration',
    shortDescription: 'Seamlessly connect your systems with custom APIs and third-party integrations.',
    fullDescription: 'We design and develop robust APIs that enable your applications to communicate efficiently. From RESTful APIs to GraphQL, we ensure your systems work together seamlessly.',
    icon: '🔌',
    iconName: 'plug',
    features: [
      'RESTful API Development',
      'GraphQL API Development',
      'Third-party API Integration',
      'API Documentation',
      'API Security',
      'Webhook Implementation'
    ],
    benefits: [
      'Automated workflows',
      'Real-time data sync',
      'Enhanced functionality',
      'Better system integration',
      'Improved efficiency',
      'Scalable architecture'
    ],
    technologies: [
      'Node.js',
      'Express',
      'GraphQL',
      'REST',
      'OAuth',
      'JWT',
      'Swagger'
    ],
    pricing: {
      startingFrom: 5000,
      pricingModel: 'Project-based',
      currency: 'USD'
    },
    deliveryTime: '2-8 weeks',
    category: 'Development',
    featured: false,
    popular: true,
    image: '/images/services/api-integration.jpg',
    caseStudies: [1],
    relatedServices: [1, 5]
  },
  {
    id: 8,
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    shortDescription: 'Ongoing support to keep your applications running smoothly and securely.',
    fullDescription: 'Keep your software up-to-date, secure, and performing at its best. Our maintenance and support services ensure your applications continue to deliver value long after launch.',
    icon: '🔧',
    iconName: 'wrench',
    features: [
      'Bug Fixes & Updates',
      'Security Patches',
      'Performance Monitoring',
      'Feature Enhancements',
      '24/7 Technical Support',
      'Regular Backups'
    ],
    benefits: [
      'Reduced downtime',
      'Enhanced security',
      'Better performance',
      'Peace of mind',
      'Cost predictability',
      'Quick issue resolution'
    ],
    technologies: [
      'Various based on your stack'
    ],
    pricing: {
      startingFrom: 1000,
      pricingModel: 'Monthly Retainer',
      currency: 'USD'
    },
    deliveryTime: 'Ongoing',
    category: 'Support',
    featured: false,
    popular: true,
    image: '/images/services/maintenance-support.jpg',
    caseStudies: [],
    relatedServices: [1, 2, 3]
  }
];

/**
 * Get service by ID
 * @param {number} id - Service ID
 * @returns {object|undefined} Service object or undefined
 */
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

/**
 * Get service by slug
 * @param {string} slug - Service slug
 * @returns {object|undefined} Service object or undefined
 */
export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

/**
 * Get featured services
 * @returns {array} Array of featured services
 */
export const getFeaturedServices = () => {
  return services.filter(service => service.featured);
};

/**
 * Get popular services
 * @returns {array} Array of popular services
 */
export const getPopularServices = () => {
  return services.filter(service => service.popular);
};

/**
 * Get services by category
 * @param {string} category - Category name
 * @returns {array} Array of services in that category
 */
export const getServicesByCategory = (category) => {
  return services.filter(service => service.category === category);
};

/**
 * Get all service categories
 * @returns {array} Array of unique category names
 */
export const getServiceCategories = () => {
  return [...new Set(services.map(service => service.category))];
};

/**
 * Get related services
 * @param {number} serviceId - Current service ID
 * @param {number} limit - Maximum number of related services to return
 * @returns {array} Array of related services
 */
export const getRelatedServices = (serviceId, limit = 3) => {
  const service = getServiceById(serviceId);
  if (!service || !service.relatedServices) return [];
  
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter(Boolean)
    .slice(0, limit);
};

/**
 * Search services by keyword
 * @param {string} keyword - Search keyword
 * @returns {array} Array of matching services
 */
export const searchServices = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return services.filter(service => 
    service.title.toLowerCase().includes(lowerKeyword) ||
    service.shortDescription.toLowerCase().includes(lowerKeyword) ||
    service.fullDescription.toLowerCase().includes(lowerKeyword)
  );
};

export default services;