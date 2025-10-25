/**
 * PRODVESTOR WEBSITE - FAQ DATA
 * Frequently Asked Questions
 * 
 * FILE LOCATION: src/data/faq.js
 */

export const faqCategories = [
  'General',
  'Services',
  'Pricing',
  'Process',
  'Support'
];

export const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What does Prodvestor do?',
    answer: 'Prodvestor is a full-service software development company specializing in custom software solutions, web and mobile applications, UI/UX design, and cloud infrastructure. We help businesses of all sizes transform their ideas into powerful digital products.',
    featured: true,
    order: 1
  },
  {
    id: 2,
    category: 'General',
    question: 'Where is Prodvestor located?',
    answer: 'Our headquarters is in San Francisco, but we work with clients worldwide. We have team members across the United States and operate remotely, allowing us to provide services to clients globally.',
    featured: false,
    order: 2
  },
  {
    id: 3,
    category: 'Services',
    question: 'What services do you offer?',
    answer: 'We offer custom software development, web development, mobile app development (iOS & Android), UI/UX design, cloud solutions & DevOps, IT consulting, API development & integration, and ongoing maintenance & support.',
    featured: true,
    order: 3
  },
  {
    id: 4,
    category: 'Services',
    question: 'Do you work with startups or only established companies?',
    answer: 'We work with both! We have experience helping startups bring their MVP to market as well as partnering with established enterprises on large-scale digital transformation projects. We tailor our approach to fit your specific needs and budget.',
    featured: true,
    order: 4
  },
  {
    id: 5,
    category: 'Services',
    question: 'Can you help with just UI/UX design without development?',
    answer: 'Absolutely! While many clients use our full-stack services, we also offer standalone UI/UX design services. We can create wireframes, prototypes, and complete design systems that your in-house team or other developers can implement.',
    featured: false,
    order: 5
  },
  {
    id: 6,
    category: 'Pricing',
    question: 'How much does a project cost?',
    answer: 'Project costs vary based on scope, complexity, and timeline. Simple websites start around $5,000, while complex enterprise applications can range from $50,000+. We provide detailed quotes after understanding your specific requirements. Contact us for a free consultation and estimate.',
    featured: true,
    order: 6
  },
  {
    id: 7,
    category: 'Pricing',
    question: 'Do you offer fixed-price projects or hourly rates?',
    answer: 'We offer both models depending on the project. For well-defined projects with clear requirements, we can provide fixed-price quotes. For ongoing work or projects with evolving requirements, we offer hourly or monthly retainer arrangements. We will recommend the best pricing model for your situation.',
    featured: true,
    order: 7
  },
  {
    id: 8,
    category: 'Pricing',
    question: 'Do you require payment upfront?',
    answer: 'Typically, we require a deposit (usually 30-50%) to begin work, with the remainder paid in milestones throughout the project. For larger projects, we can structure payment plans that align with deliverables. We are flexible and work to find payment terms that work for both parties.',
    featured: false,
    order: 8
  },
  {
    id: 9,
    category: 'Process',
    question: 'What is your development process?',
    answer: 'We follow an Agile development methodology with clear phases: Discovery & Planning, Design, Development, Testing, Deployment, and Support. You will have regular check-ins, see progress throughout, and have opportunities to provide feedback at each stage.',
    featured: true,
    order: 9
  },
  {
    id: 10,
    category: 'Process',
    question: 'How long does it take to complete a project?',
    answer: 'Timeline depends on project scope. A simple website might take 4-8 weeks, while a complex mobile app could take 3-6 months. During our initial consultation, we will provide a realistic timeline based on your specific requirements.',
    featured: true,
    order: 10
  },
  {
    id: 11,
    category: 'Process',
    question: 'Will I own the code and designs?',
    answer: 'Yes! Upon final payment, you own all the code, designs, and intellectual property we create for your project. We can provide all source files, documentation, and transfer ownership of any accounts or services we set up for your project.',
    featured: true,
    order: 11
  },
  {
    id: 12,
    category: 'Process',
    question: 'Can I see examples of your previous work?',
    answer: 'Absolutely! Check out our Portfolio page to see case studies of projects we have completed. Due to NDAs with some clients, we cannot share all projects publicly, but we can discuss relevant experience during our consultation.',
    featured: false,
    order: 12
  },
  {
    id: 13,
    category: 'Support',
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! We offer various support and maintenance packages to keep your application running smoothly. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We can discuss the best support plan for your needs.',
    featured: true,
    order: 13
  },
  {
    id: 14,
    category: 'Support',
    question: 'What if I need changes after the project is complete?',
    answer: 'We provide a warranty period (typically 30-90 days) for bug fixes after launch. For new features or changes beyond the original scope, we can work on an hourly basis or set up a monthly retainer. We are always here to help your project evolve.',
    featured: false,
    order: 14
  },
  {
    id: 15,
    category: 'Support',
    question: 'Do you offer training for our team?',
    answer: 'Yes! We provide comprehensive training and documentation for any systems we build. This can include admin training, user guides, video tutorials, and technical documentation. We ensure your team feels confident using and managing your new software.',
    featured: false,
    order: 15
  }
];

export const getFaqById = (id) => faqs.find(f => f.id === id);
export const getFaqsByCategory = (category) => faqs.filter(f => f.category === category).sort((a, b) => a.order - b.order);
export const getFeaturedFaqs = () => faqs.filter(f => f.featured).sort((a, b) => a.order - b.order);
export const searchFaqs = (keyword) => {
  const lower = keyword.toLowerCase();
  return faqs.filter(f => 
    f.question.toLowerCase().includes(lower) || 
    f.answer.toLowerCase().includes(lower)
  );
};

export default faqs;