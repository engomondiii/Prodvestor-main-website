/**
 * PRODVESTOR WEBSITE - HOME PAGE (UPDATED)
 * FILE LOCATION: src/pages/Home/Home.js
 */

import React from 'react';
import Hero from '../../components/sections/Hero';
import Services from '../../components/sections/Services';
import About from '../../components/sections/About';
import Projects from '../../components/sections/Projects';
import Stats from '../../components/sections/Stats';
import Testimonials from '../../components/sections/Testimonials';
import Partners from '../../components/sections/Partners';
import CTA from '../../components/sections/CTA';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero
        subtitle="Where Innovation Meets Execution"
        title="Empowering Global Tech Through African Excellence"
        highlightText="African Excellence"
        description="We build innovative solutions that transform industries while connecting skilled software developers from emerging markets with global opportunities. From cutting-edge project development to strategic talent acquisition, we're reshaping the future of technology."
        primaryCTA={{
          text: 'Partner With Us',
          link: '/contact'
        }}
        secondaryCTA={{
          text: 'Explore Our Services',
          link: '/services'
        }}
        image="assets/images/hero/hero1.jpg"
        floatingBadge={{
          icon: '⭐',
          title: 'Industry Leading',
          text: '98% Client Satisfaction'
        }}
      />

      {/* Services Section */}
      <Services
        subtitle="What We Do"
        title="Comprehensive Technology Solutions"
        description="From cutting-edge project development and strategic IT consultation to specialized training programs and elite talent acquisition, Prodvestor delivers comprehensive technology solutions that drive business growth."
        limit={6}
      />

      {/* About Section */}
      <About
        subtitle="About Prodvestor"
        title="Where Talent Meets Innovation"
        description="Prodvestor is pioneering a new era of global tech collaboration. We mobilize top-tier software developers from Kenya and emerging markets, connecting them with international opportunities while simultaneously building transformative technology solutions."
        features={[
          {
             icon: '💡',
            title: 'Innovation at Scale',
            description: 'Developing proprietary and collaborative tech solutions across healthcare, education, sustainability, and beyond using AI, blockchain, and cloud technologies.'
            },
          {
             icon: '🌍',
            title: 'Global Talent Mobilization',
            description: 'Rigorous vetting and placement of skilled developers from emerging markets into international tech companies, solving global talent shortages.'
         
           
          },
          {
            icon: '🤝',
            title: 'Developer Empowerment',
            description: 'Comprehensive training, mentorship, competitive compensation, and unique equity-sharing opportunities that foster growth and community.'
          }
        ]}
        ctaText="Learn More About Us"
        ctaLink="/about"
      />

      {/* Stats Section */}
      <Stats
        stats={[
          { icon: '🚀', number: '100+', label: 'Projects Delivered' },
          { icon: '👥', number: '44+', label: 'Expert Developers' },
          { icon: '🌐', number: '50+', label: 'Global Partners' },
          { icon: '⭐', number: '10+', label: 'Years Experience' }
        ]}
        variant="primary"
      />

      {/* Featured Projects */}
      <Projects
        subtitle="Our Work"
        title="Innovation That Makes an Impact"
        description="Explore our portfolio of transformative technology solutions spanning healthcare, education, sustainability, and business optimization."
        limit={6}
      />

      {/* Testimonials */}
      <Testimonials
        subtitle="Client Success Stories"
        title="What Our Partners Say"
        description="Hear from global companies and organizations who have experienced the Prodvestor difference."
        limit={3}
      />

      {/* Partners */}
      <Partners
        subtitle="Trusted Partners"
        title="Collaborating With Industry Leaders"
        description="We've built strategic alliances with leading organizations across Kenya, South Korea, and beyond."
      />

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Technology Strategy?"
        description="Whether you need elite developers, innovative solutions, expert consultation, or comprehensive training programs, Prodvestor is your trusted partner for technology excellence."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        variant="primary"
      />
    </div>
  );
}

export default Home;