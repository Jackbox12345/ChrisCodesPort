import { FiArrowDown, FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { hero } from '../../data/portfolioData';

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
              <a className="hero-contact" href="#contact">Let's talk <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="galaxy-scene hero-enter" aria-hidden="true">
            <div className="galaxy-halo" />
            <div className="galaxy-disc"><div className="galaxy-arms" /><div className="galaxy-core" /></div>
            <div className="galaxy-orbit" />
            <span className="galaxy-coordinate">A UNIVERSE OF POSSIBILITIES</span>
          </div>
        </div>
        <div className="hero-foot hero-enter">
          <span>DESIGN-MINDED. DETAIL-DRIVEN.</span>
          <span>REACT / LARAVEL / HUMAN INTERFACES</span>
          <a className="scroll-cue" href="#projects" aria-label="Scroll to selected projects"><FiArrowDown aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
