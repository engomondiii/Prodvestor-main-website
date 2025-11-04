/**
 * PRODVESTOR WEBSITE - TALENT ACQUISITION SERVICE PAGE
 * FILE LOCATION: src/pages/TalentAcquisition/TalentAcquisition.js
 */

import React from 'react';
import Button from '../../components/common/Button';

import Stats from '../../components/sections/Stats';
import Process from '../../components/sections/Process';
import CTA from '../../components/sections/CTA';
import './TalentAcquisition.css';

function TalentAcquisition() {
  const talentProcess = [
    {
      icon: '🔍',
      title: 'Sourcing',
      description: 'Active recruitment from developer communities, LinkedIn, and our extensive pre-vetted database of professionals.'
    },
    {
      icon: '✅',
      title: 'Screening',
      description: 'Multi-stage vetting process assessing technical expertise, problem-solving abilities, and soft skills.'
    },
    {
      icon: '💬',
      title: 'Technical Interviews',
      description: 'In-depth technical evaluations led by domain-specific experts across all technology stacks.'
    },
    {
      icon: '📋',
      title: 'Recommendation',
      description: 'Curated candidate profiles with detailed assessments tailored to your specific requirements.'
    },
    {
      icon: '🤝',
      title: 'Onboarding',
      description: 'Comprehensive documentation, seamless integration support, and post-placement follow-up.'
    },
    {
      icon: '📈',
      title: 'Continuous Support',
      description: 'Ongoing performance tracking and support to ensure long-term success of placements.'
    }
  ];

  return (
    <div className="talent-acquisition-page">
      {/* Hero Section */}
      <section className="talent-acquisition__hero">
        <div className="container">
          <div className="talent-acquisition__hero-content">
            <h1 className="talent-acquisition__title">
              Global Talent Mobilization Services
            </h1>
            <p className="talent-acquisition__subtitle">
              Connect with elite software developers from emerging markets through our rigorous vetting process and seamless integration support. We bridge the global talent gap with highly skilled professionals ready to drive your projects forward.
            </p>
            <div className="talent-acquisition__hero-actions">
              <Button to="/contact" variant="primary" size="large">
                Hire Developers
              </Button>
              <Button to="/portfolio" variant="outline" size="large">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="talent-acquisition__value">
        <div className="container">
          <h2 className="talent-acquisition__section-title">
            Why Choose Prodvestor for Talent Acquisition?
          </h2>
          <div className="talent-acquisition__value-grid">
            <div className="talent-acquisition__value-item">
              <div className="talent-acquisition__value-icon">🎯</div>
              <h3>Rigorous Vetting Process</h3>
              <p>
                Multi-stage assessment including technical interviews, problem-solving evaluations, and soft skills analysis ensuring only top-tier talent.
              </p>
            </div>

            <div className="talent-acquisition__value-item">
              <div className="talent-acquisition__value-icon">⚡</div>
              <h3>Immediate Deployment</h3>
              <p>
                Access to our database of 44+ pre-vetted developers across all experience levels and technology stacks ready for immediate placement.
              </p>
            </div>

            <div className="talent-acquisition__value-item">
              <div className="talent-acquisition__value-icon">💰</div>
              <h3>Cost-Effective Solutions</h3>
              <p>
                Competitive pricing leveraging our position in emerging markets without compromising on quality or expertise.
              </p>
            </div>

            <div className="talent-acquisition__value-item">
              <div className="talent-acquisition__value-icon">🌍</div>
              <h3>Global Reach, Local Expertise</h3>
              <p>
                Deep understanding of the Kenyan and East African developer ecosystem combined with proven international placement success.
              </p>
            </div>

            <div className="talent-acquisition__value-item">
              <div className="talent-acquisition__value-icon">🤝</div>
              <h3>End-to-End Support</h3>
              <p>
                From initial screening to post-placement follow-up, we ensure smooth integration and long-term success.
              </p>
            </div>

            <div className="talent-acquisition__value-item">
              <div className="talent-acquisition__value-icon">📊</div>
              <h3>Quality Assurance</h3>
              <p>
                Ongoing performance monitoring and support ensuring developers meet and exceed expectations consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Expertise */}
      <section className="talent-acquisition__expertise">
        <div className="container">
          <h2 className="talent-acquisition__section-title">
            Developer Expertise Across All Technology Stacks
          </h2>
          <p className="talent-acquisition__section-description">
            Our talent pool spans the full spectrum of modern software development
          </p>

          <div className="talent-acquisition__expertise-grid">
            <div className="talent-acquisition__expertise-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React, Angular, Vue.js</li>
                <li>Next.js, Nuxt.js</li>
                <li>TypeScript, JavaScript</li>
                <li>HTML5, CSS3, Sass</li>
                <li>Responsive Design, PWAs</li>
              </ul>
            </div>

            <div className="talent-acquisition__expertise-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js, Express</li>
                <li>Python, Django, Flask</li>
                <li>Ruby on Rails</li>
                <li>PHP, Laravel</li>
                <li>.NET, Java, Spring Boot</li>
              </ul>
            </div>

            <div className="talent-acquisition__expertise-category">
              <h3>Mobile Development</h3>
              <ul>
                <li>React Native</li>
                <li>Flutter, Dart</li>
                <li>iOS (Swift, SwiftUI)</li>
                <li>Android (Kotlin, Java)</li>
                <li>Ionic, Xamarin</li>
              </ul>
            </div>

            <div className="talent-acquisition__expertise-category">
              <h3>DevOps & Cloud</h3>
              <ul>
                <li>AWS, Azure, Google Cloud</li>
                <li>Docker, Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Terraform, Ansible</li>
                <li>Monitoring & Logging</li>
              </ul>
            </div>

            <div className="talent-acquisition__expertise-category">
              <h3>Data & AI/ML</h3>
              <ul>
                <li>Machine Learning (TensorFlow, PyTorch)</li>
                <li>Data Science (Pandas, NumPy)</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Big Data (Spark, Hadoop)</li>
              </ul>
            </div>

            <div className="talent-acquisition__expertise-category">
              <h3>Emerging Technologies</h3>
              <ul>
                <li>Blockchain (Ethereum, Solidity)</li>
                <li>IoT Development</li>
                <li>AR/VR Applications</li>
                <li>Microservices Architecture</li>
                <li>Serverless Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Levels */}
      <section className="talent-acquisition__levels">
        <div className="container">
          <h2 className="talent-acquisition__section-title">
            Developers at All Experience Levels
          </h2>
          <div className="talent-acquisition__levels-grid">
            <div className="talent-acquisition__level-card">
              <div className="talent-acquisition__level-badge">Junior</div>
              <h3>Junior Developers</h3>
              <p className="talent-acquisition__level-experience">1-3 Years Experience</p>
              <ul className="talent-acquisition__level-features">
                <li>Recent graduates & bootcamp alumni</li>
                <li>Strong foundational skills</li>
                <li>Eager to learn and grow</li>
                <li>Cost-effective solution</li>
                <li>Fresh perspectives</li>
              </ul>
              <p className="talent-acquisition__level-price">
                Starting from $200/placement
              </p>
            </div>

            <div className="talent-acquisition__level-card talent-acquisition__level-card--featured">
              <div className="talent-acquisition__level-badge">Mid-Level</div>
              <h3>Mid-Level Developers</h3>
              <p className="talent-acquisition__level-experience">3-6 Years Experience</p>
              <ul className="talent-acquisition__level-features">
                <li>Proven project delivery</li>
                <li>Strong technical competency</li>
                <li>Mentorship capabilities</li>
                <li>Independent problem-solving</li>
                <li>Best value proposition</li>
              </ul>
              <p className="talent-acquisition__level-price">
                Starting from $500/placement
              </p>
            </div>

            <div className="talent-acquisition__level-card">
              <div className="talent-acquisition__level-badge">Senior</div>
              <h3>Senior Developers</h3>
              <p className="talent-acquisition__level-experience">6+ Years Experience</p>
              <ul className="talent-acquisition__level-features">
                <li>Architecture & design leadership</li>
                <li>Team mentorship experience</li>
                <li>Strategic technical decisions</li>
                <li>Cross-functional collaboration</li>
                <li>Complex project management</li>
              </ul>
              <p className="talent-acquisition__level-price">
                Starting from $800/placement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        title="Our Track Record"
        stats={[
          { icon: '👥', number: '44+', label: 'Vetted Developers' },
          { icon: '🌍', number: '50+', label: 'Successful Placements' },
          { icon: '⭐', number: '98%', label: 'Client Satisfaction' },
          { icon: '⏱️', number: '48hrs', label: 'Average Matching Time' }
        ]}
        variant="primary"
      />

      {/* Process */}
      <Process
        subtitle="Our Methodology"
        title="Streamlined Talent Acquisition Process"
        description="Six proven steps to connect you with exceptional developers"
        steps={talentProcess}
      />

      {/* Pricing */}
      <section className="talent-acquisition__pricing">
        <div className="container">
          <h2 className="talent-acquisition__section-title">
            Transparent, Competitive Pricing
          </h2>
          <p className="talent-acquisition__section-description">
            Tiered pricing based on experience level with volume discounts available
          </p>

          <div className="talent-acquisition__pricing-info">
            <div className="talent-acquisition__pricing-card">
              <h3>Standard Placement Fees</h3>
              <ul>
                <li>Junior Developers (1-3 years): $200 per placement</li>
                <li>Mid-Level Developers (3-6 years): $500 per placement</li>
                <li>Senior Developers (6+ years): $800 per placement</li>
              </ul>
            </div>

            <div className="talent-acquisition__pricing-card">
              <h3>Volume Discounts</h3>
              <ul>
                <li>Batch of 10+ developers: 15% discount</li>
                <li>Batch of 20+ developers: 25% discount</li>
                <li>Enterprise partnerships: Custom pricing</li>
              </ul>
            </div>

            <div className="talent-acquisition__pricing-card">
              <h3>Retainer Agreements</h3>
              <ul>
                <li>Ongoing sourcing & vetting services</li>
                <li>Priority access to talent pool</li>
                <li>Dedicated account management</li>
                <li>Custom SLA agreements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="talent-acquisition__partnerships">
        <div className="container">
          <h2 className="talent-acquisition__section-title">
            Strategic Global Partnerships
          </h2>
          <div className="talent-acquisition__partnerships-grid">
            <div className="talent-acquisition__partnership">
              <h3>🇰🇷 South Korean NGO Partnership</h3>
              <p>
                Dedicated channel for placing Kenyan developers into South Korean tech companies, addressing critical talent shortages.
              </p>
            </div>

            <div className="talent-acquisition__partnership">
              <h3>🇰🇪 Matakiri Collaboration</h3>
              <p>
                Co-branding and joint development initiatives amplifying project visibility and fostering shared innovation.
              </p>
            </div>

            <div className="talent-acquisition__partnership">
              <h3>🌉 Chakan Bridge Network</h3>
              <p>
                Strengthening global reach and talent acquisition network through strategic international connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Build Your Dream Team?"
        description="Let's connect you with elite developers who will transform your technology projects. Start hiring today with Prodvestor's proven talent acquisition services."
        primaryButtonText="Request Developers"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonLink="/contact?type=consultation"
        variant="primary"
      />
    </div>
  );
}

export default TalentAcquisition;