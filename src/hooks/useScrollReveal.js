import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-animate]');
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    let frame = 0;
    const revealAll = () => items.forEach(item => item.classList.add('is-visible'));
    const observe = () => {
      observer?.disconnect();
      if (media.matches || !('IntersectionObserver' in window)) {
        revealAll();
        return;
      }
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const above = entry.boundingClientRect.bottom <= (entry.rootBounds?.top ?? 0);
          entry.target.classList.toggle('is-above', !entry.isIntersecting && above);
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      }, {
        // Start the exit while a small part is still visible at the viewport edge.
        rootMargin: '-8% 0px -10% 0px',
        threshold: 0,
      });
      items.forEach(item => { item.classList.add('reveal-ready'); observer.observe(item); });
    };
    observe();
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', max > 0 ? window.scrollY / max : 0);
      document.documentElement.style.setProperty('--hero-offset', media.matches ? '0px' : `${Math.min(window.scrollY, window.innerHeight) * 0.18}px`);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const onMotionChange = () => { observe(); schedule(); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', onMotionChange);
    update();
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      media.removeEventListener('change', onMotionChange);
      items.forEach(item => item.classList.remove('reveal-ready', 'is-visible', 'is-above'));
      document.documentElement.style.removeProperty('--hero-offset');
      document.documentElement.style.removeProperty('--scroll-progress');
    };
  }, []);
}
