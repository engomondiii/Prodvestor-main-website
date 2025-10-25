/**
 * PRODVESTOR WEBSITE - SERVICES PAGE
 * FILE LOCATION: src/pages/Services/ServicesPage.js
 */

import React from 'react';
import Services from '../../components/sections/Services';
import Stats from '../../components/sections/Stats';
import Process from '../../components/sections/Process';
import CTA from '../../components/sections/CTA';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-page__hero">
        <div className="container">
          <div className="services-page__hero-content">
            <h1 className="services-page__title">
              Comprehensive Technology Solutions
            </h1>
            <p className="services-page__subtitle">
              From elite talent acquisition to innovative project development, expert training, and strategic IT consultation—Prodvestor delivers end-to-end technology services that drive business growth and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="services-page__categories">
        <div className="container">
          <h2 className="services-page__section-title">Our Service Pillars</h2>
          <p className="services-page__section-description">
            Four comprehensive service areas designed to meet all your technology needs
          </p>

          <div className="services-page__categories-grid">
            <div className="services-page__category">
              <div className="services-page__category-icon">🎯</div>
              <h3>Talent Acquisition Services</h3>
              <p>
                Connect with elite software developers from emerging markets through our rigorous vetting process, comprehensive technical interviews, and seamless onboarding support.
              </p>
              <ul className="services-page__category-features">
                <li>Multi-stage technical vetting</li>
                <li>Frontend, Backend, Full-Stack developers</li>
                <li>Mobile, DevOps, AI/ML specialists</li>
                <li>Immediate deployment ready</li>
              </ul>
            </div>

            <div className="services-page__category">
              <div className="services-page__category-icon">💻</div>
              <h3>Project Development Services</h3>
              <p>
                Custom software solutions, SaaS platforms, AI/ML applications, blockchain solutions, and cloud-native systems across all industries.
              </p>
              <ul className="services-page__category-features">
                <li>Custom SaaS development</li>
                <li>Web & mobile applications</li>
                <li>AI/ML & blockchain solutions</li>
                <li>Healthcare, education, fintech</li>
              </ul>
            </div>

            <div className="services-page__category">
              <div className="services-page__category-icon">📚</div>
              <h3>Training & Mentorship</h3>
              <p>
                Expert-led training programs in cutting-edge technologies with personalized mentorship, real-world projects, and job placement support.
              </p>
              <ul className="services-page__category-features">
                <li>Full-stack development training</li>
                <li>Mobile app development</li>
                <li>Cloud computing & DevOps</li>
                <li>AI/ML specialization</li>
              </ul>
            </div>

            <div className="services-page__category">
              <div className="services-page__category-icon">🔒</div>
              <h3>IT Consultation Services</h3>
              <p>
                Strategic technology advisory, cloud solutions, cybersecurity audits, digital transformation, and system optimization expertise.
              </p>
              <ul className="services-page__category-features">
                <li>Software development advisory</li>
                <li>Cloud migration & optimization</li>
                <li>Cybersecurity assessments</li>
                <li>Digital transformation roadmaps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <Services
        title="Complete Service Portfolio"
        description="Explore our comprehensive range of technology services designed to meet diverse business needs"
        showAll={true}
      />

      {/* Technology Stack */}
      <section className="services-page__tech-stack">
        <div className="container">
          <h2 className="services-page__section-title">Technologies We Master</h2>
          <p className="services-page__section-description">
            Cutting-edge technologies and frameworks powering our solutions
          </p>

          <div className="services-page__tech-categories">
            <div className="services-page__tech-category">
              <h3>Frontend</h3>
              <div className="services-page__tech-tags">
                <span>React</span>
                <span>Angular</span>
                <span>Vue.js</span>
                <span>Next.js</span>
                <span>TypeScript</span>
              </div>
            </div>

            <div className="services-page__tech-category">
              <h3>Backend</h3>
              <div className="services-page__tech-tags">
                <span>Node.js</span>
                <span>Python/Django</span>
                <span>Ruby on Rails</span>
                <span>.NET</span>
                <span>PHP/Laravel</span>
              </div>
            </div>

            <div className="services-page__tech-category">
              <h3>Mobile</h3>
              <div className="services-page__tech-tags">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Swift</span>
                <span>Kotlin</span>
                <span>Ionic</span>
              </div>
            </div>

            <div className="services-page__tech-category">
              <h3>Cloud & DevOps</h3>
              <div className="services-page__tech-tags">
                <span>AWS</span>
                <span>Azure</span>
                <span>Google Cloud</span>
                <span>Docker</span>
                <span>Kubernetes</span>
              </div>
            </div>

            <div className="services-page__tech-category">
              <h3>Emerging Tech</h3>
              <div className="services-page__tech-tags">
                <span>AI/ML</span>
                <span>Blockchain</span>
                <span>IoT</span>
                <span>AR/VR</span>
                <span>Big Data</span>
              </div>
            </div>

            <div className="services-page__tech-category">
              <h3>Databases</h3>
              <div className="services-page__tech-tags">
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        title="Proven Track Record"
        stats={[
          { icon: '🚀', number: '100+', label: 'Projects Delivered' },
          { icon: '👥', number: '44+', label: 'Expert Developers' },
          { icon: '⭐', number: '98%', label: 'Client Satisfaction' },
          { icon: '🌍', number: '50+', label: 'Global Partners' }
        ]}
        variant="primary"
      />

      {/* Process */}
      <Process
        subtitle="How We Work"
        title="Our Service Delivery Process"
        description="A proven methodology ensuring excellence in every engagement"
      />

      {/* Industries Served */}
      <section className="services-page__industries">
        <div className="container">
          <h2 className="services-page__section-title">Industries We Serve</h2>
          <p className="services-page__section-description">
            Cross-industry expertise delivering tailored solutions
          </p>

          <div className="services-page__industries-grid">
            <div className="services-page__industry">
              <div className="services-page__industry-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Telemedicine, AI diagnostics, patient management systems</p>
            </div>

            <div className="services-page__industry">
              <div className="services-page__industry-icon">🎓</div>
              <h3>Education</h3>
              <p>E-learning platforms, LMS, educational gamification</p>
            </div>

            <div className="services-page__industry">
              <div className="services-page__industry-icon">💰</div>
              <h3>Finance</h3>
              <p>Fintech solutions, payment systems, financial analytics</p>
            </div>

            <div className="services-page__industry">
              <div className="services-page__industry-icon">🛒</div>
              <h3>Retail & E-commerce</h3>
              <p>Online stores, inventory management, analytics</p>
            </div>

            <div className="services-page__industry">
              <div className="services-page__industry-icon">🌱</div>
              <h3>Agriculture</h3>
              <p>AgriTech solutions, farm management, supply chain</p>
            </div>

            <div className="services-page__industry">
              <div className="services-page__industry-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>Carbon tracking, green supply chain, climate solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Transform Your Business?"
        description="Let's discuss how Prodvestor's comprehensive technology services can accelerate your digital transformation and drive sustainable growth."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        variant="primary"
      />
    </div>
  );
}

export default ServicesPage;