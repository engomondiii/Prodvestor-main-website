/**
 * PRODVESTOR WEBSITE - NAVIGATION COMPONENT
 * FILE LOCATION: src/components/layout/Navigation/Navigation.js
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavigation } from '../../../data/navigation';
import './Navigation.css';

function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation__list">
        {mainNavigation.map((item) => (
          <li
            key={item.id}
            className={`navigation__item ${
              item.dropdown ? 'navigation__item--has-dropdown' : ''
            } ${isActivePath(item.path) ? 'navigation__item--active' : ''}`}
            onMouseLeave={closeDropdown}
          >
            {item.dropdown ? (
              <>
                <button
                  className="navigation__link navigation__link--dropdown"
                  onClick={() => toggleDropdown(item.id)}
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  aria-expanded={activeDropdown === item.id}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className="navigation__arrow">▼</span>
                </button>
                {activeDropdown === item.id && (
                  <ul className="navigation__dropdown">
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.id}
                        className={`navigation__dropdown-item ${
                          subItem.featured ? 'navigation__dropdown-item--featured' : ''
                        }`}
                      >
                        <Link
                          to={subItem.path}
                          className="navigation__dropdown-link"
                          onClick={closeDropdown}
                        >
                          {subItem.icon && (
                            <span className="navigation__dropdown-icon">
                              {subItem.icon}
                            </span>
                          )}
                          <div className="navigation__dropdown-content">
                            <span className="navigation__dropdown-label">
                              {subItem.label}
                            </span>
                            {subItem.description && (
                              <span className="navigation__dropdown-description">
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
              <Link to={item.path} className="navigation__link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;