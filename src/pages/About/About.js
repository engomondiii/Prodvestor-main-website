/**
 * PRODVESTOR WEBSITE - ABOUT PAGE
 * FILE LOCATION: src/pages/About/About.js
 */

import React from 'react';
import Team from '../../components/sections/Team';
import Process from '../../components/sections/Process';
import Stats from '../../components/sections/Stats';
import CTA from '../../components/sections/CTA';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-page__hero">
        <div className="container">
          <div className="about-page__hero-content">
            <h1 className="about-page__title">
              Where Innovation Meets Execution
            </h1>
            <p className="about-page__subtitle">
              Prodvestor is pioneering a new era of technology innovation, building transformative solutions while connecting elite developers from emerging markets with global opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-page__vision-mission">
        <div className="container">
          <div className="about-page__section">
            <div className="about-page__section-icon">🔭</div>
            <h2>Our Vision</h2>
            <p>
              To emerge as the foremost global partner in technological innovation and talent development, delivering impactful, sustainable solutions that shape the future while empowering developers from diverse backgrounds.
            </p>
          </div>

          <div className="about-page__section">
            <div className="about-page__section-icon">🎯</div>
            <h2>Our Mission</h2>
            <ul className="about-page__mission-list">
              
              <li>To conceive, develop, and deploy innovative projects that solve critical challenges and drive consistent value creation</li>
              <li>To mobilize and elevate top-tier software development talent from Kenya and beyond</li>
              <li>To forge strategic partnerships with global tech companies, streamlining their recruitment and onboarding processes</li>
              <li>To champion sustainable growth through equitable partnerships, robust mentorship, and shared incentive models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Strategic Pillars */}
      <section className="about-page__pillars">
        <div className="container">
          <h2 className="about-page__section-title">Our Core Strategic Pillars</h2>
          <p className="about-page__section-description">
            Five interconnected pillars that drive our mission and maximize our competitive advantages
          </p>

          <div className="about-page__pillars-grid">
            <div className="about-page__pillar">
            <div className="about-page__pillar-icon">💡</div>

             <h3>Innovative Project Incubation</h3>
              <p>
                Identifying market gaps and developing proprietary tech solutions using AI, Blockchain, Cloud Computing, with focus on scalability, sustainability, and user-centric design.
              </p>
            </div>

            <div className="about-page__pillar">
               <div className="about-page__pillar-icon">🌍</div>
              <h3>Global Talent Mobilization</h3>
              <p>
                Leading conduit for connecting highly skilled software developers from emerging markets with global tech companies through rigorous vetting, proactive sourcing, and seamless integration.
              </p>
              
            </div>

            <div className="about-page__pillar">
              <div className="about-page__pillar-icon">👨‍💻</div>
              <h3>Developer Empowerment</h3>
              <p>
                Fostering growth through continuous learning, competitive compensation, clear career progression, and unique equity-sharing opportunities in successful projects.
              </p>
            </div>

            <div className="about-page__pillar">
              <div className="about-page__pillar-icon">🤝</div>
              <h3>Strategic Global Partnerships</h3>
              <p>
                Forging robust alliances with organizations like South Korean NGOs, Matakiri, and Chakan Bridge to expand reach and access new markets and opportunities.
              </p>
            </div>

            <div className="about-page__pillar">
              <div className="about-page__pillar-icon">🌱</div>
              <h3>Sustainability & Impact</h3>
              <p>
                Integrating ESG principles, developing eco-friendly solutions, empowering underserved communities, and maintaining ethical practices across all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <Stats
        title="Prodvestor by the Numbers"
        stats={[
          { icon: '👥', number: '44+', label: 'Expert Developers' },
          { icon: '👔', number: '6', label: 'Visionary Directors' },
          { icon: '🚀', number: '100+', label: 'Projects Delivered' },
          { icon: '🌐', number: '50+', label: 'Global Partners' },
          { icon: '📈', number: '10+', label: 'Years Experience' }
        ]}
        columns={5}
      />

      {/* Services Overview */}
      <section className="about-page__services-overview">
        <div className="container">
          <h2 className="about-page__section-title">What We Offer</h2>
          <p className="about-page__section-description">
            Technology solutions that transform businesses—innovative development, global talent, and strategic expertise
          </p>

          <div className="about-page__services-grid">
            <div className="about-page__service">
              <div className="about-page__service-icon">💻</div>
               <h3>Project Development Services</h3>
              <p>
                Custom SaaS platforms, web and mobile applications, AI/ML solutions, blockchain applications, and cloud-native systems across healthcare, education, finance, and sustainability.
              </p>
            </div>

            <div className="about-page__service">
              <div className="about-page__service-icon">🎯</div>
              <h3>Talent Acquisition Services</h3>
              <p>
                Comprehensive technical interviews, rigorous screening, seamless onboarding, and post-hire support for developers across all experience levels and technology stacks.
              </p>
             
            </div>

            <div className="about-page__service">
              <div className="about-page__service-icon">📚</div>
              <h3>Training & Mentorship</h3>
              <p>
                Expert-led programs in full-stack development, mobile apps, cloud computing, AI/ML, with personalized mentorship, real-world projects, and job placement support.
              </p>
            </div>

            <div className="about-page__service">
              <div className="about-page__service-icon">🔒</div>
              <h3>IT Consultation Services</h3>
              <p>
                Software development advisory, cloud solutions, cybersecurity audits, digital transformation roadmaps, and DevOps implementation for optimized business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <Process
        subtitle="How We Work"
        title="Our Proven Development Process"
        description="A systematic approach to delivering excellence in every project"
      />

      {/* Competitive Advantage */}
      <section className="about-page__advantage">
        <div className="container">
          <h2 className="about-page__section-title">Why Choose Prodvestor</h2>
          
          <div className="about-page__advantages-grid">
            <div className="about-page__advantage-item">
              <h3>Localized Expertise with Global Reach</h3>
              <p>
                Deep understanding of the Kenyan developer ecosystem combined with proven ability to connect talent globally creates a unique pipeline competitors struggle to replicate.
              </p>
            </div>

            <div className="about-page__advantage-item">
              <h3>Unique Hybrid Business Model</h3>
              <p>
                Integrated approach offering diversified revenue streams and synergistic opportunities between talent acquisition and project development.
              </p>
            </div>

            <div className="about-page__advantage-item">
              <h3>Developer-Centric Philosophy</h3>
              <p>
                Commitment to equitable remuneration, continuous growth, mentorship, and unique equity-sharing in projects ensures high retention and quality.
              </p>
            </div>

            <div className="about-page__advantage-item">
              <h3>Robust Strategic Partnerships</h3>
              <p>
                Collaborations with South Korean NGOs, Matakiri, and Chakan Bridge provide immediate market access, enhanced credibility, and accelerated growth.
              </p>
            </div>

            <div className="about-page__advantage-item">
              <h3>Commitment to ESG & Impact</h3>
              <p>
                Integration of environmental sustainability and social impact resonates with partners and talent who prioritize ethical business practices.
              </p>
            </div>

            <div className="about-page__advantage-item">
              <h3>Comprehensive Service Portfolio</h3>
              <p>
                Full suite of services addressing multiple client needs fosters deeper and more lucrative long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team
        subtitle="Meet the Innovators"
        title="Our Leadership & Development Team"
        description="Powered by 44 skilled developers and 6 visionary directors committed to transforming the global tech landscape"
        limit={8}
      />

      {/* CTA */}
      <CTA
        title="Join the Prodvestor Community"
        description="Whether you're a developer seeking opportunities, a company needing talent, or an organization looking for innovative solutions, let's build the future together."
        primaryButtonText="Get In Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Opportunities"
        secondaryButtonLink="/careers"
        variant="primary"
      />
    </div>
  );
}

export default About;