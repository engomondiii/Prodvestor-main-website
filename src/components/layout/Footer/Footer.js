/**
 * PRODVESTOR WEBSITE - FOOTER COMPONENT
 * FILE LOCATION: src/components/layout/Footer/Footer.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { footerNavigation, socialLinks } from '../../../data/navigation';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container container">
          {/* Company Info */}
          <div className="footer__column footer__column--about">
            <div className="footer__logo">
              <span className="footer__logo-text">PRODVESTOR</span>
            </div>
            <p className="footer__description">
              We build innovative software solutions that transform businesses and drive growth. 
              Your trusted partner in digital transformation.
            </p>
            <div className="footer__social">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="footer__social-link"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footer__social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__list">
              {footerNavigation.company.map((item, index) => (
                <li key={index} className="footer__list-item">
                  <Link to={item.path} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__list">
              {footerNavigation.services.map((item, index) => (
                <li key={index} className="footer__list-item">
                  <Link to={item.path} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Resources</h3>
            <ul className="footer__list">
              {footerNavigation.resources.map((item, index) => (
                <li key={index} className="footer__list-item">
                  <Link to={item.path} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="footer__container container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Prodvestor. All rights reserved.
            </p>
            <ul className="footer__legal">
              {footerNavigation.legal.map((item, index) => (
                <li key={index} className="footer__legal-item">
                  <Link to={item.path} className="footer__legal-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;