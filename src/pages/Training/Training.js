/**
 * PRODVESTOR WEBSITE - TRAINING & MENTORSHIP PAGE
 * FILE LOCATION: src/pages/Training/Training.js
 */

import React from 'react';
import Button from '../../components/common/Button';
import Stats from '../../components/sections/Stats';
import Process from '../../components/sections/Process';
import CTA from '../../components/sections/CTA';
import './Training.css';

function Training() {
  const trainingPrograms = [
    {
      icon: '🌐',
      title: 'Full-Stack Web Development',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      description: 'Comprehensive training in modern web development covering frontend, backend, and database technologies.',
      topics: [
        'HTML5, CSS3, JavaScript ES6+',
        'React.js & Next.js',
        'Node.js & Express',
        'MongoDB & PostgreSQL',
        'RESTful APIs & GraphQL'
      ],
      price: 'Contact for pricing'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Build cross-platform mobile applications using modern frameworks and native development.',
      topics: [
        'React Native fundamentals',
        'Flutter & Dart',
        'iOS development (Swift)',
        'Android development (Kotlin)',
        'App deployment & monetization'
      ],
      price: 'Contact for pricing'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing & DevOps',
      duration: '10 weeks',
      level: 'Intermediate to Advanced',
      description: 'Master cloud platforms and DevOps practices for scalable application deployment.',
      topics: [
        'AWS, Azure, Google Cloud',
        'Docker & Kubernetes',
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Monitoring & logging'
      ],
      price: 'Contact for pricing'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      duration: '14 weeks',
      level: 'Advanced',
      description: 'Deep dive into artificial intelligence, machine learning, and data science applications.',
      topics: [
        'Python for ML',
        'TensorFlow & PyTorch',
        'Neural networks',
        'Natural language processing',
        'Computer vision'
      ],
      price: 'Contact for pricing'
    }
  ];

  return (
    <div className="training-page">
      {/* Hero Section */}
      <section className="training__hero">
        <div className="container">
          <div className="training__hero-content">
            <h1 className="training__title">
              Training & Mentorship Programs
            </h1>
            <p className="training__subtitle">
              Accelerate your tech career with expert-led training programs, personalized mentorship, and real-world project experience. From beginner to advanced, we equip you with the skills to succeed in the global tech industry.
            </p>
            <div className="training__hero-actions">
              <Button to="/contact" variant="primary" size="large">
                Enroll Now
              </Button>
              <Button to="/contact?type=course-info" variant="outline" size="large">
                Course Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="training__programs">
        <div className="container">
          <h2 className="training__section-title">
            Expert-Led Training Programs
          </h2>
          <p className="training__section-description">
            Comprehensive courses designed to build industry-ready skills
          </p>

          <div className="training__programs-grid">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="training__program-card">
                <div className="training__program-header">
                  <div className="training__program-icon">{program.icon}</div>
                  <div className="training__program-meta">
                    <span className="training__program-duration">{program.duration}</span>
                    <span className="training__program-level">{program.level}</span>
                  </div>
                </div>

                <h3>{program.title}</h3>
                <p>{program.description}</p>

                <div className="training__program-topics">
                  <h4>What You'll Learn:</h4>
                  <ul>
                    {program.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>

                <div className="training__program-footer">
                  <span className="training__program-price">{program.price}</span>
                  <Button to="/contact" variant="primary" size="small">
                    Enroll
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="training__features">
        <div className="container">
          <h2 className="training__section-title">
            What Makes Our Training Unique?
          </h2>
          <div className="training__features-grid">
            <div className="training__feature">
              <div className="training__feature-icon">👨‍🏫</div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with 10+ years of real-world experience in software development.</p>
            </div>

            <div className="training__feature">
              <div className="training__feature-icon">🎯</div>
              <h3>Hands-On Projects</h3>
              <p>Build a portfolio of real-world projects that demonstrate your skills to potential employers.</p>
            </div>

            <div className="training__feature">
              <div className="training__feature-icon">👥</div>
              <h3>Personalized Mentorship</h3>
              <p>One-on-one guidance from senior developers to accelerate your learning and career growth.</p>
            </div>

            <div className="training__feature">
              <div className="training__feature-icon">💼</div>
              <h3>Job Placement Support</h3>
              <p>Direct connections to our network of 50+ global partners actively seeking developers.</p>
            </div>

            <div className="training__feature">
              <div className="training__feature-icon">📜</div>
              <h3>Industry Certifications</h3>
              <p>Earn recognized certifications that validate your skills and boost your professional credibility.</p>
            </div>

            <div className="training__feature">
              <div className="training__feature-icon">🌍</div>
              <h3>Global Standards</h3>
              <p>Training aligned with international best practices and industry standards for worldwide recognition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        title="Training Success Metrics"
        stats={[
          { icon: '👨‍🎓', number: '500+', label: 'Students Trained' },
          { icon: '💼', number: '85%', label: 'Job Placement Rate' },
          { icon: '⭐', number: '4.8/5', label: 'Student Rating' },
          { icon: '🌐', number: '30+', label: 'Countries Reached' }
        ]}
        variant="primary"
      />

      {/* Learning Path */}
      <section className="training__path">
        <div className="container">
          <h2 className="training__section-title">
            Your Learning Journey
          </h2>
          <div className="training__path-steps">
            <div className="training__path-step">
              <div className="training__path-number">1</div>
              <h3>Assessment</h3>
              <p>Evaluate your current skills and career goals to recommend the best program.</p>
            </div>

            <div className="training__path-step">
              <div className="training__path-number">2</div>
              <h3>Enrollment</h3>
              <p>Complete registration and gain access to learning materials and resources.</p>
            </div>

            <div className="training__path-step">
              <div className="training__path-number">3</div>
              <h3>Intensive Training</h3>
              <p>Participate in structured lessons, hands-on labs, and collaborative projects.</p>
            </div>

            <div className="training__path-step">
              <div className="training__path-number">4</div>
              <h3>Mentorship</h3>
              <p>Regular one-on-one sessions with experienced mentors for personalized guidance.</p>
            </div>

            <div className="training__path-step">
              <div className="training__path-number">5</div>
              <h3>Capstone Project</h3>
              <p>Build a complete application showcasing all skills learned during the program.</p>
            </div>

            <div className="training__path-step">
              <div className="training__path-number">6</div>
              <h3>Career Support</h3>
              <p>Resume building, interview prep, and direct introductions to hiring partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="training__corporate">
        <div className="container">
          <h2 className="training__section-title">
            Corporate Training Solutions
          </h2>
          <p className="training__section-description">
            Custom training programs for teams and organizations
          </p>

          <div className="training__corporate-grid">
            <div className="training__corporate-card">
              <h3>Team Upskilling</h3>
              <p>Enhance your team's capabilities with customized training in emerging technologies and best practices.</p>
            </div>

            <div className="training__corporate-card">
              <h3>Technology Transition</h3>
              <p>Smooth migration to new technology stacks with comprehensive training and hands-on support.</p>
            </div>

            <div className="training__corporate-card">
              <h3>Custom Curricula</h3>
              <p>Tailored training programs aligned with your specific business needs and technology stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Launch Your Tech Career?"
        description="Join hundreds of successful graduates who transformed their careers through our training programs. Start your journey with Prodvestor today."
        primaryButtonText="Enroll Now"
        primaryButtonLink="/contact?type=enrollment"
        secondaryButtonText="Download Brochure"
        secondaryButtonLink="/contact?type=brochure"
        variant="primary"
      />
    </div>
  );
}

export default Training;