/**
 * PRODVESTOR WEBSITE - SCROLL TO TOP COMPONENT
 * FILE LOCATION: src/components/common/ScrollToTop/ScrollToTop.js
 */

import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop({
  showAt = 300,
  smooth = true,
  className = '',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAt) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAt]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''} ${className}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      {...props}
    >
      <span className="scroll-to-top__icon">↑</span>
    </button>
  );
}

export default ScrollToTop;