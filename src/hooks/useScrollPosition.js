import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: null,
    isScrolling: false
  });
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollPosition({
        x: window.scrollX,
        y: currentScrollY,
        direction,
        isScrolling: true
      });
      setLastScrollY(currentScrollY);
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollPosition(prev => ({ ...prev, isScrolling: false }));
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return scrollPosition;
}

export default useScrollPosition;