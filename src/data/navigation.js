/**
 * PRODVESTOR WEBSITE - NAVIGATION DATA
 * Main navigation menu structure
 * 
 * FILE LOCATION: src/data/navigation.js
 */

export const mainNavigation = [
  {
    id: 1,
    label: 'Home',
    path: '/',
    order: 1,
    dropdown: null
  },
  {
    id: 2,
    label: 'Services',
    path: '/services',
    order: 2,
    dropdown: [
      {
        id: 21,
        label: 'Custom Software Development',
        path: '/services/custom-software-development',
        icon: '💻',
        description: 'Tailored solutions for your business'
      },
      {
        id: 22,
        label: 'Web Development',
        path: '/services/web-development',
        icon: '🌐',
        description: 'Modern websites and web apps'
      },
      {
        id: 23,
        label: 'Mobile App Development',
        path: '/services/mobile-app-development',
        icon: '📱',
        description: 'iOS and Android applications'
      },
      {
        id: 24,
        label: 'UI/UX Design',
        path: '/services/ui-ux-design',
        icon: '🎨',
        description: 'Beautiful, intuitive interfaces'
      },
      {
        id: 25,
        label: 'Cloud Solutions',
        path: '/services/cloud-solutions',
        icon: '☁️',
        description: 'Scalable cloud infrastructure'
      },
      {
        id: 26,
        label: 'View All Services',
        path: '/services',
        icon: '→',
        description: 'Explore our full service offerings',
        featured: true
      }
    ]
  },
  {
    id: 3,
    label: 'Portfolio',
    path: '/portfolio',
    order: 3,
    dropdown: null
  },
  {
    id: 4,
    label: 'About',
    path: '/about',
    order: 4,
    dropdown: [
      {
        id: 41,
        label: 'Our Story',
        path: '/about',
        icon: '📖'
      },
      {
        id: 42,
        label: 'Our Team',
        path: '/about/team',
        icon: '👥'
      },
      {
        id: 43,
        label: 'Careers',
        path: '/careers',
        icon: '💼'
      }
    ]
  },
  {
    id: 5,
    label: 'Contact',
    path: '/contact',
    order: 5,
    dropdown: null
  }
];

export const footerNavigation = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about/team' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ],
  services: [
    { label: 'Custom Software', path: '/services/custom-software-development' },
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Mobile Apps', path: '/services/mobile-app-development' },
    { label: 'UI/UX Design', path: '/services/ui-ux-design' },
    { label: 'Cloud Solutions', path: '/services/cloud-solutions' }
  ],
  resources: [
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Case Studies', path: '/portfolio' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Support', path: '/support' },
    { label: 'Documentation', path: '/docs' }
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' }
  ]
};

export const socialLinks = [
  {
    id: 1,
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/prodvestor',
    icon: 'linkedin',
    label: 'Follow us on LinkedIn'
  },
  {
    id: 2,
    platform: 'Twitter',
    url: 'https://twitter.com/prodvestor',
    icon: 'twitter',
    label: 'Follow us on Twitter'
  },
  {
    id: 3,
    platform: 'GitHub',
    url: 'https://github.com/prodvestor',
    icon: 'github',
    label: 'View our GitHub'
  },
  {
    id: 4,
    platform: 'Facebook',
    url: 'https://facebook.com/prodvestor',
    icon: 'facebook',
    label: 'Like us on Facebook'
  },
  {
    id: 5,
    platform: 'Instagram',
    url: 'https://instagram.com/prodvestor',
    icon: 'instagram',
    label: 'Follow us on Instagram'
  }
];

export const ctaButtons = {
  primary: {
    label: 'Get Started',
    path: '/contact',
    variant: 'primary'
  },
  secondary: {
    label: 'View Portfolio',
    path: '/portfolio',
    variant: 'secondary'
  }
};

export default {
  mainNavigation,
  footerNavigation,
  socialLinks,
  ctaButtons
};