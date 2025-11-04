/**
 * PRODVESTOR WEBSITE - SCROLL TO TOP COMPONENT
 * Automatically scrolls to top when route changes
 * FILE LOCATION: src/components/common/ScrollToTop.js
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;