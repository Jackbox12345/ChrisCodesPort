import { useEffect, useRef, useState } from 'react';
import { skills, stats } from '../../data/portfolioData';

const introduction = 'I’m Christian, a programmer who turns rough ideas into interfaces people understand.';

export default function About() {
  const introRef = useRef(null);
  const [characterCount, setCharacterCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    let timer;
    let cancelled = false;
    let position = 0;

    const finish = () => {
      clearTimeout(timer);
      observer?.disconnect();
      setCharacterCount(introduction.length);
      setTyping(false);
    };
    const typeNext = () => {
      if (cancelled) return;
      position += 1;
      setCharacterCount(position);
      if (position < introduction.length) {
        const previous = introduction[position - 1];
        timer = setTimeout(typeNext, /[, .]/.test(previous) ? 65 : 28);
      } else setTyping(false);
    };
    const onPreferenceChange = () => {
      if (motion.matches) finish();
    };

    if (motion.matches || !('IntersectionObserver' in window)) {
      finish();
    } else {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect();
          setTyping(true);
          timer = setTimeout(typeNext, 350);
        }
      }, { threshold: 0.5 });
      observer.observe(introRef.current);
    }
    motion.addEventListener('change', onPreferenceChange);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      observer?.disconnect();
      motion.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  return (
    <section id="about" className="about-section section-space">
      <div className="about-cosmos" aria-hidden="true">
        <span className="celestial-ringed"><span /></span>
        <span className="celestial-moon" />
        <span className="celestial-blue" />
        <span className="celestial-cluster" />
        <span className="celestial-sun celestial-sun-gold" />
        <span className="celestial-sun celestial-sun-blue" />
        <span className="celestial-sun celestial-sun-distant" />
      </div>
      <div className="wrap about-layout">
        <div data-animate>
          <p className="eyebrow">02 / Behind the code</p>
          <h2>A builder’s mind.<br /><em>An eye for detail.</em></h2>
          <div className="about-mark" aria-hidden="true">&#123;<span>cl</span>&#125;</div>
        </div>
        <div data-animate>
          <p className="about-intro typewriter" ref={introRef}>
            <span className="sr-only">{introduction}</span>
            <span className="typing-reserve" aria-hidden="true">{introduction}</span>
            <span className="typing-text" aria-hidden="true">
              {introduction.slice(0, characterCount)}
              {typing && <span className="typing-caret" />}
            </span>
          </p>
          <p className="body-copy">With hands-on experience in production support, frontend development, and project delivery, I care about the parts that make software useful: clear interactions, reliable workflows, and the details that feel effortless.</p>
          <div className="stats">
            {stats.map(stat => (
              <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
            ))}
          </div>
          <p className="eyebrow toolbox-label">My everyday toolkit</p>
          <div className="tags skill-tags">
            {skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
