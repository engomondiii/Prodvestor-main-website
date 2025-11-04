/**
 * PRODVESTOR WEBSITE - HEADER COMPONENT (MODERNIZED)
 * Main navigation header with glassmorphism and smooth animations
 * 
 * FILE LOCATION: src/components/layout/Header/Header.js
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavigation, ctaButtons } from '../../../data/navigation';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  // Handle scroll effect for sticky header with smooth transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleDropdownMouseEnter = (itemId) => {
    // Clear any pending close timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemId);
  };

  const handleDropdownMouseLeave = () => {
    // Delay closing to allow smooth transition to dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="Prodvestor Home">
          <div className="header__logo-icon">
            <span className="header__logo-text">PRODVESTOR</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav hide-mobile" aria-label="Main navigation">
          <ul className="header__nav-list">
            {mainNavigation.map((item) => (
              <li
                key={item.id}
                className={`header__nav-item ${
                  item.dropdown ? 'header__nav-item--dropdown' : ''
                } ${isActivePath(item.path) ? 'header__nav-item--active' : ''}`}
                onMouseEnter={() => item.dropdown && handleDropdownMouseEnter(item.id)}
                onMouseLeave={() => item.dropdown && handleDropdownMouseLeave()}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="header__nav-link header__nav-link--dropdown"
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span className="header__dropdown-arrow">▼</span>
                    </button>
                    {activeDropdown === item.id && (
                      <ul 
                        className="header__dropdown"
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                        }}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        {item.dropdown.map((subItem) => (
                          <li
                            key={subItem.id}
                            className={`header__dropdown-item ${
                              subItem.featured ? 'header__dropdown-item--featured' : ''
                            }`}
                          >
                            <Link
                              to={subItem.path}
                              className="header__dropdown-link"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.icon && (
                                <span className="header__dropdown-icon">
                                  {subItem.icon}
                                </span>
                              )}
                              <div className="header__dropdown-content">
                                <span className="header__dropdown-label">
                                  {subItem.label}
                                </span>
                                {subItem.description && (
                                  <span className="header__dropdown-description">
                                    {subItem.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="header__nav-link"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="header__cta hide-mobile">
          <Link
            to={ctaButtons.primary.path}
            className="btn btn--primary"
          >
            {ctaButtons.primary.label}
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="header__mobile-toggle show-mobile"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`header__overlay ${isMobileMenuOpen ? 'header__overlay--visible' : ''}`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Navigation */}
      <nav
        className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <ul className="header__mobile-list">
          {mainNavigation.map((item) => (
            <li
              key={item.id}
              className={`header__mobile-item ${
                isActivePath(item.path) ? 'header__mobile-item--active' : ''
              }`}
            >
              {item.dropdown ? (
                <>
                  <button
                    className="header__mobile-link header__mobile-link--dropdown"
                    onClick={() => toggleDropdown(item.id)}
                    aria-expanded={activeDropdown === item.id}
                  >
                    {item.label}
                    <span className={`header__mobile-arrow ${
                      activeDropdown === item.id ? 'header__mobile-arrow--open' : ''
                    }`}>▼</span>
                  </button>
                  {activeDropdown === item.id && (
                    <ul className="header__mobile-dropdown">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.path}
                            className="header__mobile-dropdown-link"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.icon && (
                              <span className="header__mobile-dropdown-icon">
                                {subItem.icon}
                              </span>
                            )}
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="header__mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile CTA Button */}
        <div className="header__mobile-cta">
          <Link
            to={ctaButtons.primary.path}
            className="btn btn--primary btn--block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {ctaButtons.primary.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;