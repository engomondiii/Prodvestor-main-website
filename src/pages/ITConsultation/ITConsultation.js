/**
 * PRODVESTOR WEBSITE - IT CONSULTATION SERVICE PAGE
 * FILE LOCATION: src/pages/ITConsultation/ITConsultation.js
 */

import React from 'react';
import Button from '../../components/common/Button';
import Stats from '../../components/sections/Stats';
import Process from '../../components/sections/Process';
import CTA from '../../components/sections/CTA';
import './ITConsultation.css';

function ITConsultation() {
  const consultationServices = [
    {
      icon: '💻',
      title: 'Software Development Advisory',
      description: 'Strategic guidance on technology stack selection, architecture design, code reviews, and best practices implementation.',
      features: [
        'Technology stack assessment',
        'Architecture & design consultation',
        'Code quality reviews',
        'Development process optimization',
        'Best practices implementation'
      ]
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions & Infrastructure',
      description: 'Expert consultation on cloud migration, infrastructure optimization, and cost-effective cloud strategies.',
      features: [
        'Cloud migration planning (AWS, Azure, GCP)',
        'Infrastructure optimization',
        'Cost analysis & reduction',
        'Security & compliance assessment',
        'Disaster recovery planning'
      ]
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & Data Protection',
      description: 'Comprehensive security audits, vulnerability assessments, and data protection strategy development.',
      features: [
        'Security audits & assessments',
        'Penetration testing',
        'Data protection strategies',
        'Compliance consulting (GDPR, HIPAA)',
        'Security training programs'
      ]
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'End-to-end guidance for digital transformation initiatives aligned with business objectives.',
      features: [
        'Digital transformation roadmaps',
        'Process automation strategies',
        'Legacy system modernization',
        'Change management support',
        'ROI analysis & tracking'
      ]
    },
    {
      icon: '👥',
      title: 'Tech Talent & Team Building',
      description: 'Strategic advice on building, scaling, and optimizing technology teams for maximum efficiency.',
      features: [
        'Team structure optimization',
        'Hiring & recruitment strategies',
        'Skills gap analysis',
        'Training & development plans',
        'Remote team management'
      ]
    },
    {
      icon: '🔄',
      title: 'DevOps & Agile Implementation',
      description: 'Guidance on implementing DevOps practices and Agile methodologies for improved development cycles.',
      features: [
        'CI/CD pipeline implementation',
        'Agile methodology adoption',
        'DevOps culture transformation',
        'Automation strategies',
        'Performance monitoring setup'
      ]
    }
  ];

  return (
    <div className="it-consultation-page">
      {/* Hero Section */}
      <section className="it-consultation__hero">
        <div className="container">
          <div className="it-consultation__hero-content">
            <h1 className="it-consultation__title">
              Expert IT Consultation Services
            </h1>
            <p className="it-consultation__subtitle">
              Strategic technology guidance to optimize your IT infrastructure, enhance security, accelerate digital transformation, and build high-performing tech teams. Partner with our experienced consultants to navigate the complex technology landscape.
            </p>
            <div className="it-consultation__hero-actions">
              <Button to="/contact" variant="primary" size="large">
                Request Consultation
              </Button>
              <Button to="/contact?type=free-assessment" variant="outline" size="large">
                Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="it-consultation__services">
        <div className="container">
          <h2 className="it-consultation__section-title">
            Comprehensive IT Consultation Services
          </h2>
          <p className="it-consultation__section-description">
            Expert guidance across all aspects of technology strategy and implementation
          </p>

          <div className="it-consultation__services-grid">
            {consultationServices.map((service, index) => (
              <div key={index} className="it-consultation__service-card">
                <div className="it-consultation__service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="it-consultation__service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="it-consultation__why-choose">
        <div className="container">
          <h2 className="it-consultation__section-title">
            Why Choose Prodvestor IT Consultation?
          </h2>
          <div className="it-consultation__benefits-grid">
            <div className="it-consultation__benefit">
              <div className="it-consultation__benefit-icon">🎯</div>
              <h3>Practical Expertise</h3>
              <p>Real-world experience from 100+ successful projects across diverse industries and technologies.</p>
            </div>

            <div className="it-consultation__benefit">
              <div className="it-consultation__benefit-icon">💰</div>
              <h3>Cost-Effective Solutions</h3>
              <p>Optimize technology investments with strategic guidance that maximizes ROI and reduces waste.</p>
            </div>

            <div className="it-consultation__benefit">
              <div className="it-consultation__benefit-icon">🚀</div>
              <h3>Accelerated Implementation</h3>
              <p>Fast-track your technology initiatives with proven methodologies and battle-tested strategies.</p>
            </div>

            <div className="it-consultation__benefit">
              <div className="it-consultation__benefit-icon">🔍</div>
              <h3>Objective Assessment</h3>
              <p>Unbiased third-party evaluation of your technology stack, processes, and team capabilities.</p>
            </div>

            <div className="it-consultation__benefit">
              <div className="it-consultation__benefit-icon">📊</div>
              <h3>Data-Driven Decisions</h3>
              <p>Strategic recommendations backed by thorough analysis, benchmarking, and industry best practices.</p>
            </div>

            <div className="it-consultation__benefit">
              <div className="it-consultation__benefit-icon">🤝</div>
              <h3>Long-Term Partnership</h3>
              <p>Ongoing support beyond initial consultation to ensure successful implementation and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        title="Proven Consultation Excellence"
        stats={[
          { icon: '🏢', number: '50+', label: 'Businesses Consulted' },
          { icon: '💡', number: '200+', label: 'Strategic Recommendations' },
          { icon: '📈', number: '40%', label: 'Avg. Cost Reduction' },
          { icon: '⭐', number: '98%', label: 'Client Satisfaction' }
        ]}
        variant="primary"
      />

      {/* Process */}
      <Process
        subtitle="Our Approach"
        title="Strategic Consultation Process"
        description="A systematic methodology ensuring actionable insights and measurable results"
      />

      {/* Engagement Models */}
      <section className="it-consultation__engagement">
        <div className="container">
          <h2 className="it-consultation__section-title">
            Flexible Engagement Models
          </h2>
          <div className="it-consultation__engagement-grid">
            <div className="it-consultation__engagement-card">
              <h3>Project-Based Consulting</h3>
              <p>Fixed-scope engagements with clear deliverables and timelines for specific initiatives.</p>
              <ul>
                <li>Defined scope & objectives</li>
                <li>Fixed timeline & budget</li>
                <li>Comprehensive deliverables</li>
                <li>Knowledge transfer sessions</li>
              </ul>
            </div>

            <div className="it-consultation__engagement-card">
              <h3>Hourly/Daily Consulting</h3>
              <p>Flexible consulting services billed by time for ad-hoc guidance and troubleshooting.</p>
              <ul>
                <li>Pay only for time used</li>
                <li>No long-term commitment</li>
                <li>Quick turnaround</li>
                <li>Expert problem-solving</li>
              </ul>
            </div>

            <div className="it-consultation__engagement-card">
              <h3>Retainer Agreements</h3>
              <p>Ongoing strategic partnership with monthly retainer for continuous support and guidance.</p>
              <ul>
                <li>Dedicated consulting hours</li>
                <li>Priority response times</li>
                <li>Proactive recommendations</li>
                <li>Quarterly strategic reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="it-consultation__industries">
        <div className="container">
          <h2 className="it-consultation__section-title">
            Industry-Specific Expertise
          </h2>
          <p className="it-consultation__section-description">
            Deep understanding of technology challenges across various sectors
          </p>
          <div className="it-consultation__industries-list">
            <div className="it-consultation__industry-tag">Healthcare</div>
            <div className="it-consultation__industry-tag">Financial Services</div>
            <div className="it-consultation__industry-tag">E-commerce & Retail</div>
            <div className="it-consultation__industry-tag">Education</div>
            <div className="it-consultation__industry-tag">Manufacturing</div>
            <div className="it-consultation__industry-tag">Agriculture</div>
            <div className="it-consultation__industry-tag">Logistics</div>
            <div className="it-consultation__industry-tag">Government</div>
            <div className="it-consultation__industry-tag">Non-Profit</div>
            <div className="it-consultation__industry-tag">Startups</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Optimize Your Technology Strategy?"
        description="Schedule a free consultation to discuss your technology challenges and discover how our expert guidance can accelerate your digital transformation and drive business growth."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact?type=free-consultation"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/portfolio"
        variant="primary"
      />
    </div>
  );
}

export default ITConsultation;