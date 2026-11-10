import { FiArrowDown, FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { hero } from '../../data/portfolioData';
import Galaxy from '../Galaxy';

export default function Hero() {
  return (
    <section id="main" className="hero">
      <div className="wrap hero-content">
        <div className="hero-topline hero-enter">
          <p className="eyebrow">Ideas worth exploring. Experiences worth building.</p>
          <span className="edition">PORTFOLIO / CL</span>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-role hero-enter"><span className="status-dot" /> IT Full Stack Developer</p>
            <h1 aria-label={hero.name}>
              <span className="title-line"><span>Christian</span></span>
              <span className="title-line"><span><em>Lapitan.</em></span></span>
            </h1>
            <p className="hero-description hero-enter">{hero.intro}</p>
            <div className="hero-actions hero-enter">
              <a className="button button-galaxy" href="#projects">
                Explore my work
                <span className="button-icon"><FiArrowDownRight aria-hidden="true" /></span>
              </a>
              <a className="hero-contact" href="#contact">Let’s talk <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <Galaxy />
        </div>
        <div className="hero-foot hero-enter">
          <span>DESIGN-MINDED. DETAIL-DRIVEN.</span>
          <span>REACT / LARAVEL / HUMAN INTERFACES</span>
          <a className="scroll-cue" href="#projects" aria-label="Scroll to selected projects"><FiArrowDown aria-hidden="true" /></a>
          <div className="hero-flight-path" aria-hidden="true">
            <div className="hero-ufo">
              <svg viewBox="0 0 60 32" focusable="false">
                <path className="ufo-beam" d="m22 20-7 10h30l-7-10Z" fill="url(#ufo-beam-gradient)" />
                <path d="M22 15c1-7 5-11 8-11s7 4 8 11Z" fill="#8dcde7" stroke="#d8efff" strokeWidth="1" />
                <ellipse cx="30" cy="17" rx="23" ry="7" fill="#bba6e8" stroke="#eadfff" strokeWidth="1" />
                <path d="M11 17c7 5 31 5 38 0-4 8-34 8-38 0Z" fill="#604c91" />
                <circle cx="19" cy="20" r="1.5" fill="#9ff8ff" />
                <circle cx="30" cy="21" r="1.5" fill="#ffe9a8" />
                <circle cx="41" cy="20" r="1.5" fill="#9ff8ff" />
                <defs>
                  <linearGradient id="ufo-beam-gradient" x1="30" y1="20" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#bffcff" stopOpacity=".5" />
                    <stop offset="1" stopColor="#bffcff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="hero-spaceship">
              <svg viewBox="0 0 64 32" focusable="false">
                <path className="ship-exhaust" d="M22 12 1 16 22 20Z" fill="#a78bfa" />
                <path d="m25 13-7-10 18 8M25 19l-7 10 18-8" fill="#9174c9" stroke="#c7afff" strokeWidth="1" />
                <path d="M19 11h18c9 0 16 5 19 5-3 0-10 5-19 5H19l4-5Z" fill="#dce7f5" stroke="#a9b5d8" strokeWidth="1" />
                <path d="M35 12c5 0 9 2 12 4H34Z" fill="#6fb9db" />
                <path d="M22 14h-6v4h6" fill="#e6caff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
