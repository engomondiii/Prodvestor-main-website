/**
 * PRODVESTOR WEBSITE - BLOG DATA
 * FILE LOCATION: src/data/blog.js
 */

export const blogPosts = [
  {
    id: 1,
    slug: 'future-of-ai-in-software-development',
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy software applications.',
    content: `
      <p>Artificial Intelligence is revolutionizing software development in ways we never imagined. From code generation to automated testing, AI tools are becoming essential parts of the modern developer's toolkit.</p>
      <h2>AI-Powered Code Generation</h2>
      <p>Tools like GitHub Copilot and ChatGPT are helping developers write code faster and more efficiently...</p>
    `,
    author: {
      name: 'John Doe',
      avatar: '/assets/images/team/team-member-1.jpg',
      role: 'Senior Developer'
    },
    category: 'Technology',
    tags: ['AI', 'Machine Learning', 'Software Development'],
    publishedDate: '2024-10-15',
    readTime: '8 min read',
    featured: true,
    image: '/assets/images/blog/ai-development.jpg'
  },
  {
    id: 2,
    slug: 'building-scalable-saas-applications',
    title: 'Building Scalable SaaS Applications',
    excerpt: 'Best practices and architectural patterns for creating SaaS platforms that can scale to millions of users.',
    content: `
      <p>Building a SaaS application that can scale requires careful planning and the right architectural decisions from day one.</p>
    `,
    author: {
      name: 'Jane Smith',
      avatar: '/assets/images/team/team-member-2.jpg',
      role: 'CTO'
    },
    category: 'Development',
    tags: ['SaaS', 'Architecture', 'Scalability'],
    publishedDate: '2024-10-10',
    readTime: '12 min read',
    featured: true,
    image: '/assets/images/blog/saas-scalability.jpg'
  },
  {
    id: 3,
    slug: 'remote-work-best-practices',
    title: 'Remote Work Best Practices for Development Teams',
    excerpt: 'How to build and manage high-performing remote development teams across different time zones.',
    content: `
      <p>Remote work has become the new normal for software development teams worldwide...</p>
    `,
    author: {
      name: 'Mike Johnson',
      avatar: '/assets/images/team/team-member-3.jpg',
      role: 'Project Manager'
    },
    category: 'Team Management',
    tags: ['Remote Work', 'Team Management', 'Productivity'],
    publishedDate: '2024-10-05',
    readTime: '6 min read',
    featured: false,
    image: '/assets/images/blog/remote-work.jpg'
  }
];

// Get all blog posts
export const getAllPosts = () => blogPosts;

// Get blog post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

// Get featured posts
export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

// Get posts by category
export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

// Get recent posts
export const getRecentPosts = (limit = 3) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, limit);
};

// Get all categories
export const getBlogCategories = () => {
  return [...new Set(blogPosts.map(post => post.category))];
};

export default blogPosts;