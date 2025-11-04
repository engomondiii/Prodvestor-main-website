/**
 * PRODVESTOR WEBSITE - TESTIMONIALS DATA
 * Client testimonials and reviews
 * 
 * FILE LOCATION: src/data/testimonials.js
 */

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'SecureBank Solutions',
    companyIndustry: 'FinTech',
    avatar: '/assets/images/testimonials/sarah-johnson.jpg',
    rating: 5,
    quote: "Prodvestor delivered an exceptional mobile banking solution that exceeded our expectations. The app is secure, fast, and our customers love it. Their team's professionalism and technical expertise are unmatched.",
    fullTestimonial: "Working with Prodvestor was a game-changer for our digital transformation. They took the time to understand our business needs and security requirements, then delivered a mobile banking app that our customers absolutely love. The app has a 4.8-star rating and has significantly reduced branch visits. Their team was responsive, professional, and went above and beyond to ensure success. I highly recommend Prodvestor to anyone looking for top-tier software development.",
    projectId: 1,
    serviceIds: [1, 3],
    date: '2023-09-15',
    featured: true,
    verified: true,
    videoUrl: null,
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'StyleHub Fashion',
    companyIndustry: 'E-commerce',
    avatar: '/assets/images/testimonials/michael-chen.jpg',
    rating: 5,
    quote: "The new e-commerce platform transformed our online business. Sales are up 150%, customers are happy, and managing inventory is so much easier now. Prodvestor truly understands e-commerce.",
    fullTestimonial: "Our old website was costing us sales. Prodvestor redesigned and rebuilt our entire e-commerce platform from scratch. The results speak for themselves - 150% increase in sales, 70% reduction in cart abandonment, and our mobile conversions doubled. The admin dashboard makes inventory management a breeze. Their team delivered on time and within budget. Best investment we've made in our business.",
    projectId: 2,
    serviceIds: [2, 4],
    date: '2023-07-22',
    featured: true,
    verified: true,
    videoUrl: null,
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    position: 'Chief Medical Officer',
    company: 'MediCare Plus',
    companyIndustry: 'Healthcare',
    avatar: '/assets/images/testimonials/emily-rodriguez.jpeg',
    rating: 5,
    quote: "Prodvestor built us a secure, HIPAA-compliant portal that our patients love. It's streamlined our operations significantly and reduced phone calls by 80%.",
    fullTestimonial: "As a healthcare provider, security and compliance are our top priorities. Prodvestor delivered a patient portal that exceeds all HIPAA requirements while being incredibly user-friendly. Our patients can now book appointments, access records, and communicate with doctors online. This has reduced our administrative workload dramatically and improved patient satisfaction. The integration with our existing EHR systems was seamless. Prodvestor's healthcare expertise really shines through.",
    projectId: 3,
    serviceIds: [1, 2],
    date: '2022-11-10',
    featured: true,
    verified: true,
    videoUrl: null,
    location: 'Houston, TX'
  },
  {
    id: 4,
    name: 'James Wilson',
    position: 'Operations Director',
    company: 'GlobalShip Logistics',
    companyIndustry: 'Logistics',
    avatar: '/assets/images/testimonials/james-wilson.jpg',
    rating: 5,
    quote: "The real-time tracking system has revolutionized how we manage our fleet. We've seen 30% reduction in delivery times and 25% fuel cost savings. Incredible ROI.",
    fullTestimonial: "Our legacy tracking system was holding us back. Prodvestor built us a modern, cloud-based logistics platform that gives us real-time visibility across all our operations. The AI-powered route optimization has saved us thousands in fuel costs. The mobile app makes it easy for drivers to update statuses. Our customers love being able to track their shipments in real-time. The system has paid for itself many times over.",
    projectId: 4,
    serviceIds: [1, 5, 7],
    date: '2023-04-18',
    featured: false,
    verified: true,
    videoUrl: null,
    location: 'Chicago, IL'
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    position: 'Property Manager',
    company: 'RentEase',
    companyIndustry: 'Real Estate',
    avatar: '/assets/images/testimonials/lisa-martinez.jpg',
    rating: 5,
    quote: "RentEase has made property management so much easier. Everything I need is in one place. Rent collection is automated and maintenance requests are handled quickly.",
    fullTestimonial: "Before RentEase, I was juggling multiple tools and spreadsheets. Now everything is in one platform - rent collection, maintenance requests, tenant communication, and financial reporting. The automated rent reminders have improved on-time payments to 95%. The mobile app lets me manage properties from anywhere. Prodvestor built exactly what property managers need.",
    projectId: 5,
    serviceIds: [1, 2],
    date: '2022-08-30',
    featured: false,
    verified: true,
    videoUrl: null,
    location: 'Miami, FL'
  },
  {
    id: 6,
    name: 'Prof. David Thompson',
    position: 'Director',
    company: 'EduTech Academy',
    companyIndustry: 'Education',
    avatar: '/assets/images/testimonials/david-thompson.jpg',
    rating: 5,
    quote: "The platform helped us transition to online learning seamlessly. Students and teachers love the intuitive interface. 10,000+ students enrolled in the first year.",
    fullTestimonial: "When the pandemic hit, we needed to go online fast. Prodvestor delivered a comprehensive learning management system in record time. The platform supports live classes, recorded videos, quizzes, and certificates. The gamification features keep students engaged. We now have students from 15 countries. The platform is stable, scalable, and easy to use. Prodvestor was a true partner through the entire process.",
    projectId: 6,
    serviceIds: [1, 2, 4],
    date: '2022-05-12',
    featured: false,
    verified: true,
    videoUrl: null,
    location: 'Boston, MA'
  },
  {
    id: 7,
    name: 'Jennifer Lee',
    position: 'Marketing Director',
    company: 'TechStart Inc',
    companyIndustry: 'Technology',
    avatar: '/assets/images/testimonials/jennifer-lee.jpg',
    rating: 5,
    quote: "Our new website is beautiful, fast, and converting visitors like never before. Prodvestor's design team nailed our brand vision perfectly.",
    fullTestimonial: "We needed a website that reflected our innovative brand. Prodvestor delivered beyond our expectations. The design is modern and professional, the site loads incredibly fast, and most importantly, it's converting visitors into leads. The CMS makes it easy for our team to update content. SEO has improved dramatically - we're now ranking on the first page for our key terms. Worth every penny.",
    projectId: null,
    serviceIds: [2, 4],
    date: '2023-06-20',
    featured: true,
    verified: true,
    videoUrl: null,
    location: 'Austin, TX'
  },
  {
    id: 8,
    name: 'Robert Garcia',
    position: 'Founder',
    company: 'FitLife App',
    companyIndustry: 'Health & Fitness',
    avatar: '/assets/images/testimonials/robert-garcia.jpg',
    rating: 5,
    quote: "Prodvestor turned our fitness app idea into reality. The app is smooth, feature-rich, and our users give it 4.7 stars. Best development team we've worked with.",
    fullTestimonial: "As a first-time app founder, I was nervous about the development process. Prodvestor made it easy. They helped refine our idea, designed an amazing UI, and built a robust app that works flawlessly on both iOS and Android. The app includes workout tracking, nutrition planning, and social features. We launched 3 months ago and already have 50,000 downloads. Their ongoing support has been exceptional.",
    projectId: null,
    serviceIds: [3, 4],
    date: '2023-03-08',
    featured: false,
    verified: true,
    videoUrl: null,
    location: 'Denver, CO'
  }
];

export const getTestimonialById = (id) => testimonials.find(t => t.id === id);
export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured);
export const getVerifiedTestimonials = () => testimonials.filter(t => t.verified);
export const getTestimonialsByRating = (rating) => testimonials.filter(t => t.rating === rating);
export const getAverageRating = () => {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return (sum / testimonials.length).toFixed(1);
};

export default testimonials;