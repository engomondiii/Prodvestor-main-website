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
    bio: 'Visionary leader with  years of experience in software development and digital transformation. Passionate about building innovative solutions that solve real-world problems.',
    longBio: 'Fidel founded Prodvestor with a vision to bridge the gap between technology and business needs. With a background in computer science, Fidel brings both technical expertise and business acumen to lead the company. Under his leadership, Prodvestor has grown from a small startup to a trusted technology partner for businesses worldwide.',
    image: '/assets/images/team/Fidel.jpeg',
    email: 'fidel@prodvestor.com',
    phone: '+254790883802',
    location: 'San Francisco, CA',
    skills: [
      'Strategic Planning',
      'Business Development',
      'Technology Strategy',
      'Team Leadership',
      'Client Relations'
    ],
    experience: '15+ years',
    education: [
      {
        degree: 'MBA',
        institution: 'Stanford University',
        year: 2010
      },
      {
        degree: 'BS in Computer Science',
        institution: 'MIT',
        year: 2005
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
      'PMP Certified'
    ]
  },
  {
    id: 2,
    name: 'Sarah Mueni',
    role: 'Chief Technology Officer & Co Founder',
    department: 'Engineering',
    bio: 'Tech innovator specializing in scalable architectures and cloud solutions. Leads our engineering team to deliver cutting-edge software solutions.',
    longBio: 'Sarah  years of experience in software architecture and cloud computing. Before joining Prodvestor, she led engineering teams at Fortune 500 companies, designing systems that handle millions of users. She\'s passionate about mentoring developers and staying at the forefront of technology trends.',
    image: '/assets/images/team/Sarah.jpg',
    email: 'sarah@prodvestor.com',
    phone: '+1 (555) 234-5678',
    location: 'Seattle, WA',
    skills: [
      'System Architecture',
      'Cloud Computing',
      'Microservices',
      'Team Leadership',
      'DevOps',
      'Security'
    ],
    experience: '12+ years',
    education: [
      {
        degree: 'MS in Computer Science',
        institution: 'Carnegie Mellon University',
        year: 2011
      },
      {
        degree: 'BS in Software Engineering',
        institution: 'UC Berkeley',
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
    role: 'Lead Full-Stack Developer & Co Founder',
    department: 'Engineering',
    bio: 'Full-stack wizard with expertise in React, Node.js, and cloud technologies. Passionate about writing clean, efficient code.',
    longBio: 'Ezra is a versatile developer who excels at both frontend and backend development. With 10 years of experience, he has worked on projects ranging from startups to enterprise applications. He loves solving complex problems and mentoring junior developers.',
    image: '/assets/images/team/Ezra.jpeg',
    email: 'ezra@prodvestor.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    skills: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'GraphQL'
    ],
    experience: '10 years',
    education: [
      {
        degree: 'BS in Computer Science',
        institution: 'University of Texas',
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
      'MongoDB Certified Developer'
    ]
  },
  // {
  // //   id: 4,
  //   name: 'Emily Watson',
  //   role: 'Senior UI/UX Designer',
  //   department: 'Design',
  //   bio: 'Creative designer focused on crafting beautiful, intuitive user experiences that delight and engage users.',
  //   longBio: 'Emily has 8 years of experience designing digital products for web and mobile. She believes great design is invisible - it just works. Her user-centered approach has helped numerous clients achieve their business goals through better UX.',
  //   image: '/assets/images/team/emily-watson.jpg',
  //   email: 'emily@prodvestor.com',
  //   phone: '+1 (555) 456-7890',
  //   location: 'New York, NY',
  //   skills: [
  //     'UI/UX Design',
  //     'Figma',
  //     'Adobe XD',
  //     'User Research',
  //     'Prototyping',
  //     'Design Systems',
  //     'Accessibility'
  //   ],
  //   experience: '8 years',
  //   education: [
  //     {
  //       degree: 'BFA in Graphic Design',
  //       institution: 'Parsons School of Design',
  //       year: 2015
  //     }
  //   ],
  //   social: {
  //     linkedin: 'https://linkedin.com/in/emilywatson',
  //     behance: 'https://behance.net/emilywatson',
  //     dribbble: 'https://dribbble.com/emilywatson'
  //   },
  //   featured: true,
  //   active: true,
  //   joinedDate: '2018-01-15',
  //   certifications: [
  //     'Google UX Design Certificate',
  //     'Nielsen Norman Group UX Certification'
  //   ]
  // },
  // {
  //   id: 5,
  //   name: 'David Kim',
  //   role: 'Senior Mobile Developer',
  //   department: 'Engineering',
  //   bio: 'Mobile development expert specializing in React Native and native iOS/Android apps.',
  //   longBio: 'David has developed over 50 mobile applications throughout his 9-year career. He specializes in creating performant, native-feeling apps using React Native. His apps have been downloaded millions of times across the App Store and Google Play.',
  //   image: '/assets/images/team/david-kim.jpg',
  //   email: 'david@prodvestor.com',
  //   phone: '+1 (555) 567-8901',
  //   location: 'Los Angeles, CA',
  //   skills: [
  //     'React Native',
  //     'Swift',
  //     'Kotlin',
  //     'iOS Development',
  //     'Android Development',
  //     'Firebase',
  //     'Mobile UI/UX'
  //   ],
  //   experience: '9 years',
  //   education: [
  //     {
  //       degree: 'BS in Computer Engineering',
  //       institution: 'UCLA',
  //       year: 2014
  //     }
  //   ],
  //   social: {
  //     linkedin: 'https://linkedin.com/in/davidkim',
  //     github: 'https://github.com/davidkim',
  //     twitter: 'https://twitter.com/davidkim'
  //   },
  //   featured: true,
  //   active: true,
  //   joinedDate: '2018-09-01',
  //   certifications: [
  //     'Apple Certified iOS Developer',
  //     'Google Associate Android Developer'
  //   ]
  // },
  // {
  //   id: 6,
  //   name: 'Jessica Martinez',
  //   role: 'DevOps Engineer',
  //   department: 'Engineering',
  //   bio: 'Infrastructure and automation specialist ensuring our applications run smoothly in the cloud.',
  //   longBio: 'Jessica brings 7 years of DevOps experience, specializing in cloud infrastructure, CI/CD pipelines, and containerization. She has helped companies reduce deployment times by 80% and achieve 99.9% uptime.',
  //   image: '/assets/images/team/jessica-martinez.jpg',
  //   email: 'jessica@prodvestor.com',
  //   phone: '+1 (555) 678-9012',
  //   location: 'Denver, CO',
  //   skills: [
  //     'AWS',
  //     'Azure',
  //     'Docker',
  //     'Kubernetes',
  //     'Terraform',
  //     'Jenkins',
  //     'CI/CD',
  //     'Monitoring'
  //   ],
  //   experience: '7 years',
  //   education: [
  //     {
  //       degree: 'BS in Information Systems',
  //       institution: 'Colorado State University',
  //       year: 2016
  //     }
  //   ],
  //   social: {
  //     linkedin: 'https://linkedin.com/in/jessicamartinez',
  //     github: 'https://github.com/jessicamartinez'
  //   },
  //   featured: false,
  //   active: true,
  //   joinedDate: '2019-04-15',
  //   certifications: [
  //     'AWS Certified DevOps Engineer',
  //     'Certified Kubernetes Administrator',
  //     'Terraform Associate'
  //   ]
  // },
  // {
  //   id: 7,
  //   name: 'Robert Taylor',
  //   role: 'Backend Developer',
  //   department: 'Engineering',
  //   bio: 'Backend specialist building robust APIs and scalable server-side applications.',
  //   longBio: 'Robert has 6 years of experience developing backend systems that power modern applications. He excels at database design, API architecture, and performance optimization.',
  //   image: '/assets/images/team/robert-taylor.jpg',
  //   email: 'robert@prodvestor.com',
  //   phone: '+1 (555) 789-0123',
  //   location: 'Boston, MA',
  //   skills: [
  //     'Python',
  //     'Django',
  //     'PostgreSQL',
  //     'Redis',
  //     'REST APIs',
  //     'GraphQL',
  //     'Microservices'
  //   ],
  //   experience: '6 years',
  //   education: [
  //     {
  //       degree: 'BS in Computer Science',
  //       institution: 'Boston University',
  //       year: 2017
  //     }
  //   ],
  //   social: {
  //     linkedin: 'https://linkedin.com/in/roberttaylor',
  //     github: 'https://github.com/roberttaylor'
  //   },
  //   featured: false,
  //   active: true,
  //   joinedDate: '2019-11-01',
  //   certifications: [
  //     'AWS Certified Developer'
  //   ]
  // },
  // {
  //   id: 8,
  //   name: 'Lisa Anderson',
  //   role: 'Frontend Developer',
  //   department: 'Engineering',
  //   bio: 'Frontend developer passionate about creating fast, accessible, and beautiful web experiences.',
  //   longBio: 'Lisa specializes in modern frontend technologies with 5 years of experience. She is an advocate for web accessibility and performance optimization.',
  //   image: '/assets/images/team/lisa-anderson.jpg',
  //   email: 'lisa@prodvestor.com',
  //   phone: '+1 (555) 890-1234',
  //   location: 'Portland, OR',
  //   skills: [
  //     'React',
  //     'Vue.js',
  //     'TypeScript',
  //     'CSS/SASS',
  //     'Webpack',
  //     'Performance Optimization',
  //     'Accessibility'
  //   ],
  //   experience: '5 years',
  //   education: [
  //     {
  //       degree: 'BS in Web Development',
  //       institution: 'Portland State University',
  //       year: 2018
  //     }
  //   ],
  //   social: {
  //     linkedin: 'https://linkedin.com/in/lisaanderson',
  //     github: 'https://github.com/lisaanderson',
  //     codepen: 'https://codepen.io/lisaanderson'
  //   },
  //   featured: false,
  //   active: true,
  //   joinedDate: '2020-02-15',
  //   certifications: [
  //     'Google Mobile Web Specialist'
  //   ]
  // },
  // {
  //   id: 9,
  //   name: 'James Wilson',
  //   role: 'QA Engineer',
  //   department: 'Quality Assurance',
  //   bio: 'Quality assurance specialist ensuring our products meet the highest standards.',
  //   longBio: 'James has 6 years of experience in software testing and quality assurance. He has developed comprehensive testing strategies that catch bugs before they reach production.',
  //   image: '/assets/images/team/james-wilson.jpg',
  //   email: 'james@prodvestor.com',
  //   phone: '+1 (555) 901-2345',
  //   location: 'Chicago, IL',
  //   skills: [
  //     'Test Automation',
  //     'Selenium',
  //     'Jest',
  //     'Cypress',
  //     'Manual Testing',
  //     'Performance Testing',
  //     'Security Testing'
  //   ],
  //   experience: '6 years',
  //   education: [
  //     {
  //       degree: 'BS in Computer Science',
  //       institution: 'University of Illinois',
  //       year: 2017
  //     }
  //   ],
  //   social: {
  //     linkedin: 'https://linkedin.com/in/jameswilson',
  //     github: 'https://github.com/jameswilson'
  //   },
  //   featured: false,
  //   active: true,
  //   joinedDate: '2020-06-01',
  //   certifications: [
  //     'ISTQB Certified Tester'
  //   ]
  // },
  // {
  //   id: 10,
  //   name: 'Amanda Brown',
  //   role: 'Project Manager',
  //   department: 'Management',
  //   bio: 'Experienced project manager ensuring timely delivery and client satisfaction.',
  //   longBio: 'Amanda has 8 years of experience managing software projects using Agile methodologies. She excels at coordinating teams, managing stakeholder expectations, and delivering projects on time and within budget.',
  //   image: '/assets/images/team/amanda-brown.jpg',
  //   email: 'amanda@prodvestor.com',
  //   phone: '+1 (555) 012-3456',
  //   location: 'Miami, FL',
  //   skills: [
  //     'Project Management',
  //     'Agile/Scrum',
  //     'Stakeholder Management',
  //     'Risk Management',
  //     'Jira',
  //     'Team Coordination'
  //   ],
  //   experience: '8 years',
  //   education: [
  //     {
  //       degree: 'MBA',
  //       institution: 'University of Miami',
  //       year: 2015
  //     },
  //     {
  //       degree: 'BS in Business Administration',
  //       institution: 'Florida State University',
  //       year: 2013
  //     }
  //   ],
  //   social: {
  //     linkedin: 'https://linkedin.com/in/amandabrown'
  //   },
  //   featured: false,
  //   active: true,
  //   joinedDate: '2019-08-15',
  //   certifications: [
  //     'PMP Certified',
  //     'Certified Scrum Master'
  //   ]
  // }
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

export default team;