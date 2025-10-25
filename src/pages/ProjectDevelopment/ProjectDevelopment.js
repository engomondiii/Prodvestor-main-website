/**
 * PRODVESTOR WEBSITE - PROJECT DEVELOPMENT SERVICE PAGE
 * FILE LOCATION: src/pages/ProjectDevelopment/ProjectDevelopment.js
 */

import React from 'react';
import Button from '../../components/Button';
import Stats from '../../components/sections/Stats';
import Projects from '../../components/sections/Projects';
import Process from '../../components/sections/Process';
import CTA from '../../components/sections/CTA';
import './ProjectDevelopment.css';

function ProjectDevelopment() {
  const developmentProcess = [
    {
      icon: '🔍',
      title: 'Discovery & Research',
      description: 'Comprehensive analysis of market gaps, stakeholder needs, and technical requirements through research and consultations.'
    },
    {
      icon: '📋',
      title: 'Planning & Design',
      description: 'Detailed project roadmap, architecture design, UX/UI prototyping, and technology stack selection.'
    },
    {
      icon: '⚙️',
      title: 'Agile Development',
      description: 'Iterative development using agile methodologies with regular sprints, testing, and client feedback integration.'
    },
    {
      icon: '🧪',
      title: 'Quality Assurance',
      description: 'Comprehensive testing including unit tests, integration tests, security audits, and performance optimization.'
    },
    {
      icon: '🚀',
      title: 'Deployment & Launch',
      description: 'Smooth production deployment with monitoring setup, documentation, and user training.'
    },
    {
      icon: '🔧',
      title: 'Support & Maintenance',
      description: 'Ongoing support, bug fixes, feature enhancements, and performance monitoring post-launch.'
    }
  ];

  return (
    <div className="project-development-page">
      {/* Hero Section */}
      <section className="project-development__hero">
        <div className="container">
          <div className="project-development__hero-content">
            <h1 className="project-development__title">
              Innovative Project Development Services
            </h1>
            <p className="project-development__subtitle">
              From concept to deployment, we build cutting-edge technology solutions that solve real-world problems. Specializing in SaaS platforms, AI/ML applications, blockchain solutions, and custom software across healthcare, education, sustainability, and beyond.
            </p>
            <div className="project-development__hero-actions">
              <Button to="/contact" variant="primary" size="large">
                Start Your Project
              </Button>
              <Button to="/portfolio" variant="outline" size="large">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="project-development__overview">
        <div className="container">
          <h2 className="project-development__section-title">
            Comprehensive Development Services
          </h2>
          <div className="project-development__overview-grid">
            <div className="project-development__overview-item">
              <div className="project-development__overview-icon">🌐</div>
              <h3>Custom SaaS Development</h3>
              <p>
                Build scalable Software-as-a-Service platforms including CRM systems, inventory management, project management tools, HRMS, and financial management software.
              </p>
              <ul>
                <li>Multi-tenant architecture</li>
                <li>Subscription billing integration</li>
                <li>API-first development</li>
                <li>Cloud-native deployment</li>
              </ul>
            </div>

            <div className="project-development__overview-item">
              <div className="project-development__overview-icon">📱</div>
              <h3>Web & Mobile Applications</h3>
              <p>
                Cross-platform web and mobile apps with responsive design, native performance, and seamless user experiences.
              </p>
              <ul>
                <li>Progressive Web Apps (PWA)</li>
                <li>React Native / Flutter apps</li>
                <li>E-commerce platforms</li>
                <li>Booking & reservation systems</li>
              </ul>
            </div>

            <div className="project-development__overview-item">
              <div className="project-development__overview-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>
                Intelligent applications leveraging artificial intelligence, machine learning, and data science for automation and insights.
              </p>
              <ul>
                <li>Predictive analytics</li>
                <li>Natural language processing</li>
                <li>Computer vision</li>
                <li>Recommendation engines</li>
              </ul>
            </div>

            <div className="project-development__overview-item">
              <div className="project-development__overview-icon">🔗</div>
              <h3>Blockchain Solutions</h3>
              <p>
                Decentralized applications, smart contracts, and blockchain integrations for secure, transparent systems.
              </p>
              <ul>
                <li>Smart contract development</li>
                <li>Cryptocurrency integration</li>
                <li>Supply chain tracking</li>
                <li>DeFi applications</li>
              </ul>
            </div>

            <div className="project-development__overview-item">
              <div className="project-development__overview-icon">☁️</div>
              <h3>Cloud-Native Applications</h3>
              <p>
                Scalable, resilient cloud applications with microservices architecture and serverless computing.
              </p>
              <ul>
                <li>AWS / Azure / GCP deployment</li>
                <li>Microservices architecture</li>
                <li>Serverless functions</li>
                <li>Container orchestration</li>
              </ul>
            </div>

            <div className="project-development__overview-item">
              <div className="project-development__overview-icon">🌱</div>
              <h3>Sustainability Solutions</h3>
              <p>
                Eco-friendly technology addressing environmental challenges and promoting sustainable practices.
              </p>
              <ul>
                <li>Carbon footprint tracking</li>
                <li>Renewable energy management</li>
                <li>Green supply chain systems</li>
                <li>Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="project-development__industries">
        <div className="container">
          <h2 className="project-development__section-title">
            Industry-Specific Solutions
          </h2>
          <p className="project-development__section-description">
            Tailored technology solutions addressing unique industry challenges
          </p>

          <div className="project-development__industries-grid">
            <div className="project-development__industry">
              <div className="project-development__industry-icon">🏥</div>
              <h3>Healthcare Technology</h3>
              <div className="project-development__industry-content">
                <p>Transforming healthcare delivery with digital solutions</p>
                <ul>
                  <li>AI-powered diagnostic systems</li>
                  <li>Telemedicine platforms</li>
                  <li>Electronic health records (EHR)</li>
                  <li>Patient management systems</li>
                  <li>Healthcare analytics dashboards</li>
                </ul>
              </div>
            </div>

            <div className="project-development__industry">
              <div className="project-development__industry-icon">🎓</div>
              <h3>Education Technology</h3>
              <div className="project-development__industry-content">
                <p>Revolutionizing learning with innovative EdTech</p>
                <ul>
                  <li>Learning Management Systems (LMS)</li>
                  <li>Gamified e-learning platforms</li>
                  <li>Virtual classrooms</li>
                  <li>Student assessment tools</li>
                  <li>Educational content delivery</li>
                </ul>
              </div>
            </div>

            <div className="project-development__industry">
              <div className="project-development__industry-icon">💰</div>
              <h3>Financial Technology</h3>
              <div className="project-development__industry-content">
                <p>Modern fintech solutions for digital finance</p>
                <ul>
                  <li>Payment gateway integration</li>
                  <li>Mobile banking applications</li>
                  <li>Financial analytics platforms</li>
                  <li>Lending & credit systems</li>
                  <li>Blockchain-based payments</li>
                </ul>
              </div>
            </div>

            <div className="project-development__industry">
              <div className="project-development__industry-icon">🛒</div>
              <h3>Retail & E-commerce</h3>
              <div className="project-development__industry-content">
                <p>Next-generation retail technology solutions</p>
                <ul>
                  <li>Online store platforms</li>
                  <li>Smart inventory management</li>
                  <li>Customer analytics</li>
                  <li>Point of Sale (POS) systems</li>
                  <li>Supply chain optimization</li>
                </ul>
              </div>
            </div>

            <div className="project-development__industry">
              <div className="project-development__industry-icon">🌾</div>
              <h3>Agricultural Technology</h3>
              <div className="project-development__industry-content">
                <p>AgriTech solutions for modern farming</p>
                <ul>
                  <li>Farm management systems</li>
                  <li>Crop monitoring & analytics</li>
                  <li>Supply chain tracking</li>
                  <li>Market price intelligence</li>
                  <li>IoT sensor integration</li>
                </ul>
              </div>
            </div>

            <div className="project-development__industry">
              <div className="project-development__industry-icon">🌍</div>
              <h3>Sustainability & Climate</h3>
              <div className="project-development__industry-content">
                <p>Environmental technology for a greener future</p>
                <ul>
                  <li>Carbon tracking systems</li>
                  <li>Renewable energy platforms</li>
                  <li>Green supply chain</li>
                  <li>Environmental monitoring</li>
                  <li>Sustainability reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        title="Development Excellence"
        stats={[
          { icon: '🚀', number: '100+', label: 'Projects Delivered' },
          { icon: '👨‍💻', number: '44+', label: 'Expert Developers' },
          { icon: '⭐', number: '98%', label: 'Client Satisfaction' },
          { icon: '🏆', number: '15+', label: 'Industry Awards' }
        ]}
        variant="primary"
      />

      {/* Featured Projects */}
      <Projects
        subtitle="Our Work"
        title="Featured Development Projects"
        description="Explore innovative solutions we've built across various industries"
        limit={6}
      />

      {/* Process */}
      <Process
        subtitle="Our Methodology"
        title="Proven Development Process"
        description="Six systematic steps ensuring project success from concept to deployment"
        steps={developmentProcess}
      />

      {/* Technology Excellence */}
      <section className="project-development__tech">
        <div className="container">
          <h2 className="project-development__section-title">
            Technology Excellence & Best Practices
          </h2>
          <div className="project-development__tech-grid">
            <div className="project-development__tech-item">
              <h3>🔒 Security First</h3>
              <p>Enterprise-grade security with encryption, authentication, authorization, and regular security audits.</p>
            </div>

            <div className="project-development__tech-item">
              <h3>📈 Scalability</h3>
              <p>Cloud-native architecture designed to scale seamlessly from MVP to millions of users.</p>
            </div>

            <div className="project-development__tech-item">
              <h3>⚡ Performance</h3>
              <p>Optimized code, caching strategies, and CDN integration ensuring blazing-fast performance.</p>
            </div>

            <div className="project-development__tech-item">
              <h3>📱 Responsive Design</h3>
              <p>Mobile-first approach with beautiful, intuitive interfaces across all devices and screen sizes.</p>
            </div>

            <div className="project-development__tech-item">
              <h3>🔄 CI/CD Pipeline</h3>
              <p>Automated testing, deployment, and monitoring for rapid, reliable releases.</p>
            </div>

            <div className="project-development__tech-item">
              <h3>📚 Documentation</h3>
              <p>Comprehensive technical documentation, API references, and user guides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Models */}
      <section className="project-development__monetization">
        <div className="container">
          <h2 className="project-development__section-title">
            Flexible Monetization Strategies
          </h2>
          <p className="project-development__section-description">
            Multiple revenue models to maximize project profitability
          </p>

          <div className="project-development__monetization-grid">
            <div className="project-development__monetization-card">
              <h3>💳 Subscription Services</h3>
              <p>Recurring revenue through monthly/annual subscriptions with tiered pricing models.</p>
            </div>

            <div className="project-development__monetization-card">
              <h3>📜 Software Licensing</h3>
              <p>One-time or perpetual licenses for on-premise and cloud deployments.</p>
            </div>

            <div className="project-development__monetization-card">
              <h3>🤝 Revenue Sharing</h3>
              <p>Partnership agreements with revenue split based on performance and usage.</p>
            </div>

            <div className="project-development__monetization-card">
              <h3>🏪 Digital Marketplace</h3>
              <p>Distribution through app stores, SaaS marketplaces, and platform ecosystems.</p>
            </div>

            <div className="project-development__monetization-card">
              <h3>💰 Transaction Fees</h3>
              <p>Commission-based revenue from transactions, payments, or platform usage.</p>
            </div>

            <div className="project-development__monetization-card">
              <h3>🎯 Freemium Model</h3>
              <p>Free basic tier with premium features available through paid upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Transform Your Vision into Reality"
        description="Partner with Prodvestor to build innovative, scalable solutions that drive business growth and create lasting impact. Our expert team is ready to bring your project to life."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Discovery Call"
        secondaryButtonLink="/contact?type=discovery"
        variant="primary"
      />
    </div>
  );
}

export default ProjectDevelopment;