/**
 * PRODVESTOR WEBSITE - CAREERS DATA
 * Job openings and career information
 * 
 * FILE LOCATION: src/data/careers.js
 */

export const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Senior',
    salary: '$120,000 - $160,000',
    description: 'We are looking for an experienced Full-Stack Developer to join our growing team.',
    responsibilities: [
      'Design and develop scalable web applications',
      'Work with React, Node.js, and PostgreSQL',
      'Collaborate with designers and product managers',
      'Write clean, maintainable code',
      'Mentor junior developers'
    ],
    requirements: [
      '5+ years of full-stack development experience',
      'Strong proficiency in React and Node.js',
      'Experience with PostgreSQL or similar databases',
      'Excellent problem-solving skills',
      'Bachelors degree in Computer Science or equivalent'
    ],
    niceToHave: [
      'Experience with TypeScript',
      'Cloud platform experience (AWS/Azure)',
      'DevOps knowledge',
      'Open source contributions'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      '401(k) with company match',
      'Flexible work hours',
      'Remote work options',
      'Professional development budget',
      'Paid time off'
    ],
    posted: '2024-01-15',
    active: true,
    featured: true
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Mid-level',
    salary: '$80,000 - $110,000',
    description: 'Join our design team to create beautiful, user-centered digital experiences.',
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with developers and stakeholders',
      'Maintain and evolve design systems',
      'Present design concepts to clients'
    ],
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio demonstrating design process',
      'Understanding of responsive design principles',
      'Excellent communication skills'
    ],
    niceToHave: [
      'Experience with prototyping tools',
      'Front-end development skills (HTML/CSS)',
      'Motion design experience',
      'Illustration skills'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      '401(k) matching',
      'Flexible schedule',
      'Remote work',
      'Design tools and resources',
      'Conference attendance'
    ],
    posted: '2024-01-20',
    active: true,
    featured: true
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Mid to Senior',
    salary: '$100,000 - $140,000',
    description: 'Help us build and maintain robust, scalable infrastructure.',
    responsibilities: [
      'Manage cloud infrastructure (AWS/Azure)',
      'Implement CI/CD pipelines',
      'Monitor and optimize system performance',
      'Ensure security and compliance',
      'Automate deployment processes'
    ],
    requirements: [
      '4+ years of DevOps experience',
      'Strong knowledge of AWS or Azure',
      'Experience with Docker and Kubernetes',
      'Proficiency in scripting (Python, Bash)',
      'Understanding of networking and security'
    ],
    niceToHave: [
      'Terraform experience',
      'Jenkins/GitLab CI experience',
      'Security certifications',
      'Experience with monitoring tools'
    ],
    benefits: [
      'Competitive salary',
      'Full benefits package',
      '401(k) matching',
      'Remote work',
      'Certification reimbursement',
      'Latest tools and tech'
    ],
    posted: '2024-01-10',
    active: true,
    featured: false
  }
];

export const getJobById = (id) => jobOpenings.find(job => job.id === id);
export const getActiveJobs = () => jobOpenings.filter(job => job.active);
export const getFeaturedJobs = () => jobOpenings.filter(job => job.featured && job.active);
export const getJobsByDepartment = (dept) => jobOpenings.filter(job => job.department === dept && job.active);

export default jobOpenings;