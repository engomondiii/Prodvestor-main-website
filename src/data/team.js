/**
 * PRODVESTOR WEBSITE - TEAM DATA
 * Team members and developers information
 * 
 * FILE LOCATION: src/data/team.js
 * 
 * USAGE:
 * import { team, getTeamMemberById, getDevelopers } from './data/team';
 */

export const team = [
  {
    id: 1,
    name: 'Fidel Omondi',
    role: 'Founder & CEO',
    department: 'Leadership',
    bio: 'Visionary leader with extensive experience in software development and digital transformation. Passionate about building innovative solutions that solve real-world problems.',
    longBio: 'Fidel founded Prodvestor with a vision to bridge the gap between technology and business needs in emerging markets. With a strong background in computer science and full-stack development, he brings both technical expertise and strategic business acumen to lead the company. Under his leadership, Prodvestor has grown from a small startup to a trusted technology partner connecting elite developers with global opportunities and delivering innovative tech solutions across multiple industries.',
    image: '/assets/images/team/Fidel.jpeg',
    email: 'fidel@prodvestor.com',
    phone: '+254790883802',
    location: 'Nairobi, Kenya',
    skills: [
      'Strategic Planning',
      'Business Development',
      'Technology Strategy',
      'Team Leadership',
      'Client Relations',
      'Full-Stack Development'
    ],
    experience: '10+ years',
    education: [
      {
        degree: 'BS in Computer Science',
        institution: 'Kenyan University',
        year: 2013
      }
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/fidel-otieno-ab507b1b4/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/engomondiii',
      website: 'https://fidelomondi.vercel.app'
    },
    featured: true,
    active: true,
    joinedDate: '2015-01-15',
    certifications: [
      'AWS Certified Solutions Architect',
      'Full-Stack Developer Certification'
    ]
  },
  {
    id: 2,
    name: 'Sarah Mueni',
    role: 'Chief Technology Officer & Co-Founder',
    department: 'Engineering',
    bio: 'Tech innovator specializing in scalable architectures and cloud solutions. Leads our engineering team to deliver cutting-edge software solutions.',
    longBio: 'Sarah brings over 12 years of experience in software architecture and cloud computing to Prodvestor. As CTO and Co-Founder, she oversees all technical operations and ensures our technology stack remains cutting-edge. She specializes in building scalable systems and has successfully led the development of multiple enterprise-level platforms. Sarah is passionate about mentoring developers and fostering a culture of technical excellence within the organization.',
    image: '/assets/images/team/Sarah.jpg',
    email: 'sarah@prodvestor.com',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    skills: [
      'System Architecture',
      'Cloud Computing',
      'Microservices',
      'Team Leadership',
      'DevOps',
      'Security',
      'AWS',
      'Azure'
    ],
    experience: '12+ years',
    education: [
      {
        degree: 'MS in Computer Science',
        institution: 'University of Nairobi',
        year: 2011
      },
      {
        degree: 'BS in Software Engineering',
        institution: 'Kenyan Technical University',
        year: 2009
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/sarahmutambu',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/sarenii'
    },
    featured: true,
    active: true,
    joinedDate: '2016-03-20',
    certifications: [
      'AWS Certified Solutions Architect Professional',
      'Google Cloud Professional Architect',
      'Certified Kubernetes Administrator'
    ]
  },
  {
    id: 3,
    name: 'Ezra Kipchumba',
    role: 'Chief Product Officer & Co-Founder',
    department: 'Product',
    bio: 'Product visionary with deep technical expertise in full-stack development. Drives product strategy and ensures seamless delivery of innovative solutions.',
    longBio: 'Ezra serves as Chief Product Officer and Co-Founder at Prodvestor, where he bridges the gap between technology and user needs. With 10+ years of experience as a full-stack developer and product strategist, Ezra oversees the entire product lifecycle from conception to delivery. His technical background in React, Node.js, and cloud technologies, combined with his strategic product thinking, enables him to build products that truly resonate with users while maintaining technical excellence. Ezra is passionate about creating intuitive user experiences and mentoring the next generation of product-minded engineers.',
    image: '/assets/images/team/Ezra.jpeg',
    email: 'ezra@prodvestor.com',
    phone: '+254 723 456 789',
    location: 'Nairobi, Kenya',
    skills: [
      'Product Strategy',
      'Product Management',
      'Full-Stack Development',
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'User Experience',
      'Agile Methodologies'
    ],
    experience: '10+ years',
    education: [
      {
        degree: 'BS in Computer Science',
        institution: 'Kenyan Institute of Technology',
        year: 2013
      }
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/ezra-kipchumba-461603349/',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    },
    featured: true,
    active: true,
    joinedDate: '2017-06-10',
    certifications: [
      'AWS Certified Developer',
      'Certified Scrum Product Owner',
      'MongoDB Certified Developer'
    ]
  },
  {
    id: 4,
    name: 'Emily Kiplagat',
    role: 'Senior UI/UX Designer',
    department: 'Design',
    bio: 'Creative designer focused on crafting beautiful, intuitive user experiences that delight and engage users.',
    longBio: 'Emily has 8 years of experience designing digital products for web and mobile. She believes great design is invisible - it just works. Her user-centered approach has helped numerous clients achieve their business goals through better UX. At Prodvestor, Emily leads the design team in creating cohesive, accessible, and visually stunning interfaces that enhance user satisfaction and drive engagement.',
    image: '/assets/images/team/Emily.jpeg',
    email: 'emily@prodvestor.com',
    phone: '+254 734 567 890',
    location: 'Nairobi, Kenya',
    skills: [
      'UI/UX Design',
      'Figma',
      'Adobe XD',
      'User Research',
      'Prototyping',
      'Design Systems',
      'Accessibility',
      'Wireframing'
    ],
    experience: '8 years',
    education: [
      {
        degree: 'BFA in Graphic Design',
        institution: 'Design Institute',
        year: 2015
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/emilywatson',
      behance: 'https://behance.net/emilywatson',
      dribbble: 'https://dribbble.com/emilywatson'
    },
    featured: true,
    active: true,
    joinedDate: '2018-01-15',
    certifications: [
      'Google UX Design Certificate',
      'Nielsen Norman Group UX Certification'
    ]
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Senior Mobile Developer',
    department: 'Engineering',
    bio: 'Mobile development expert specializing in React Native and native iOS/Android apps.',
    longBio: 'David has developed over 50 mobile applications throughout his 9-year career. He specializes in creating performant, native-feeling apps using React Native and native technologies. His apps have been downloaded millions of times across the App Store and Google Play. At Prodvestor, David leads mobile development initiatives and ensures our mobile solutions deliver exceptional user experiences across all platforms.',
    image: '/assets/images/team/Davidkim.jpeg',
    email: 'david@prodvestor.com',
    phone: '+254 745 678 901',
    location: 'Nairobi, Kenya',
    skills: [
      'React Native',
      'Swift',
      'Kotlin',
      'iOS Development',
      'Android Development',
      'Firebase',
      'Mobile UI/UX',
      'App Store Optimization'
    ],
    experience: '9 years',
    education: [
      {
        degree: 'BS in Computer Engineering',
        institution: 'Technical University',
        year: 2014
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidkim',
      twitter: 'https://twitter.com/davidkim'
    },
    featured: true,
    active: true,
    joinedDate: '2018-09-01',
    certifications: [
      'Apple Certified iOS Developer',
      'Google Associate Android Developer'
    ]
  }
];

/**
 * Get team member by ID
 */
export const getTeamMemberById = (id) => {
  return team.find(member => member.id === id);
};

/**
 * Get featured team members (leadership)
 */
export const getFeaturedTeam = () => {
  return team.filter(member => member.featured);
};

/**
 * Get team members by department
 */
export const getTeamByDepartment = (department) => {
  return team.filter(member => member.department === department);
};

/**
 * Get all developers
 */
export const getDevelopers = () => {
  return team.filter(member => 
    member.department === 'Engineering' && 
    member.role.toLowerCase().includes('developer')
  );
};

/**
 * Get all departments
 */
export const getDepartments = () => {
  return [...new Set(team.map(member => member.department))];
};

/**
 * Get active team members
 */
export const getActiveTeam = () => {
  return team.filter(member => member.active);
};

/**
 * Get team size
 */
export const getTeamSize = () => {
  return team.filter(member => member.active).length;
};

/**
 * Get leadership team (C-level executives)
 */
export const getLeadershipTeam = () => {
  return team.filter(member => 
    member.role.includes('CEO') || 
    member.role.includes('CTO') || 
    member.role.includes('CPO') ||
    member.role.includes('Chief')
  );
};

export default team;