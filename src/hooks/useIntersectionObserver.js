import { useState, useEffect, useRef } from 'react';

function useIntersectionObserver(options = {}) {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
          if (triggerOnce) observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(target);
    return () => { if (target) observer.unobserve(target); };
  }, [threshold, root, rootMargin, triggerOnce, hasIntersected]);

  return { ref: targetRef, isIntersecting, hasIntersected };
}

export default useIntersectionObserver;