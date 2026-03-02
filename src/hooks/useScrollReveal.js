import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.sr, .sr-fade, .sr-left');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
