import { useEffect } from 'react';

function useIntersectionObserverOnResize(elementId, threshold = 0.1, minWidth = 600) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < minWidth) {
        const element = document.getElementById(elementId);

        if (!element) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          { threshold }
        );

        observer.observe(element);

        return () => {
          observer.unobserve(element);
        };
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementId, threshold, minWidth]);
}

export default useIntersectionObserverOnResize;
