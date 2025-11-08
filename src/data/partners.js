/**
 * PRODVESTOR WEBSITE - PARTNERS DATA
 * Client companies and technology partners
 * 
 * FILE LOCATION: src/data/partners.js
 */

export const partners = [
  {
    id: 1,
    name: 'SecureBank Solutions',
    logo: '/assets/images/partners/securebank.jpeg',
    website: 'https://securebank.example.com',
    category: 'Client',
    industry: 'FinTech',
    description: 'Leading digital banking solutions provider',
    featured: true,
    partnershipSince: 2022
  },
  {
    id: 2,
    name: 'StyleHub Fashion',
    logo: '/assets/images/partners/stylehub.jpeg',
    website: 'https://stylehub.example.com',
    category: 'Client',
    industry: 'E-commerce',
    description: 'Online fashion retail platform',
    featured: true,
    partnershipSince: 2023
  },
  {
    id: 3,
    name: 'MediCare Plus',
    logo: '/assets/images/partners/medicare.png',
    website: 'https://medicareplus.example.com',
    category: 'Client',
    industry: 'Healthcare',
    description: 'Healthcare services provider',
    featured: true,
    partnershipSince: 2022
  },
  {
    id: 4,
    name: 'GlobalShip Logistics',
    logo: '/assets/images/partners/globalship.jpeg',
    website: 'https://globalship.example.com',
    category: 'Client',
    industry: 'Logistics',
    description: 'International logistics and shipping',
    featured: true,
    partnershipSince: 2023
  },
  {
    id: 5,
    name: 'Amazon Web Services',
    logo: '/assets/images/partners/aws.png',
    website: 'https://aws.amazon.com',
    category: 'Technology Partner',
    industry: 'Cloud Computing',
    description: 'Cloud infrastructure provider',
    featured: true,
    partnershipSince: 2020
  },
  {
    id: 6,
    name: 'Microsoft Azure',
    logo: '/assets/images/partners/azure.png',
    website: 'https://azure.microsoft.com',
    category: 'Technology Partner',
    industry: 'Cloud Computing',
    description: 'Cloud services platform',
    featured: true,
    partnershipSince: 2020
  },
  {
    id: 7,
    name: 'Google Cloud',
    logo: '/assets/images/partners/googlecloud.png',
    website: 'https://cloud.google.com',
    category: 'Technology Partner',
    industry: 'Cloud Computing',
    description: 'Cloud computing services',
    featured: true,
    partnershipSince: 2021
  },
  {
    id: 8,
    name: 'MongoDB',
    logo: '/assets/images/partners/mongodb.png',
    website: 'https://mongodb.com',
    category: 'Technology Partner',
    industry: 'Database',
    description: 'NoSQL database platform',
    featured: false,
    partnershipSince: 2020
  },
  {
    id: 9,
    name: 'Docker',
    logo: '/assets/images/partners/docker.png',
    website: 'https://docker.com',
    category: 'Technology Partner',
    industry: 'DevOps',
    description: 'Containerization platform',
    featured: false,
    partnershipSince: 2020
  },
  {
    id: 10,
    name: 'Stripe',
    logo: '/assets/images/partners/stripe.png',
    website: 'https://stripe.com',
    category: 'Technology Partner',
    industry: 'Payments',
    description: 'Payment processing platform',
    featured: false,
    partnershipSince: 2021
  }
];

export const getPartnerById = (id) => partners.find(p => p.id === id);
export const getFeaturedPartners = () => partners.filter(p => p.featured);
export const getClientPartners = () => partners.filter(p => p.category === 'Client');
export const getTechnologyPartners = () => partners.filter(p => p.category === 'Technology Partner');
export const getPartnersByIndustry = (industry) => partners.filter(p => p.industry === industry);

export default partners;