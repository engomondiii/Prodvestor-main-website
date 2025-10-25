/**
 * PRODVESTOR WEBSITE - MOBILE MENU COMPONENT
 * FILE LOCATION: src/components/layout/MobileMenu/MobileMenu.js
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavigation, ctaButtons } from '../../../data/navigation';
import './MobileMenu.css';

function MobileMenu({ isOpen, onClose }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    onClose();
    setActiveDropdown(null);
  }, [location, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleDropdown = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    onClose();
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-menu__overlay ${isOpen ? 'mobile-menu__overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu__content">
          <ul className="mobile-menu__list">
            {mainNavigation.map((item) => (
              <li
                key={item.id}
                className={`mobile-menu__item ${
                  isActivePath(item.path) ? 'mobile-menu__item--active' : ''
                }`}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="mobile-menu__link mobile-menu__link--dropdown"
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                    >
                      {item.label}
                      <span
                        className={`mobile-menu__arrow ${
                          activeDropdown === item.id ? 'mobile-menu__arrow--open' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {activeDropdown === item.id && (
                      <ul className="mobile-menu__dropdown">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.id} className="mobile-menu__dropdown-item">
                            <Link
                              to={subItem.path}
                              className="mobile-menu__dropdown-link"
                              onClick={handleLinkClick}
                            >
                              {subItem.icon && (
                                <span className="mobile-menu__dropdown-icon">
                                  {subItem.icon}
                                </span>
                              )}
                              <span className="mobile-menu__dropdown-label">
                                {subItem.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="mobile-menu__link"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mobile-menu__cta">
            <Link
              to={ctaButtons.primary.path}
              className="btn btn--primary btn--block"
              onClick={handleLinkClick}
            >
              {ctaButtons.primary.label}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;