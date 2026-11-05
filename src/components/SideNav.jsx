import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const links = [['#projects', 'Work'], ['#about', 'About'], ['#services', 'Expertise'], ['#work', 'Experience']];
export default function SideNav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = event => { if (event.matches) setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => { window.removeEventListener('keydown', closeOnEscape); desktop.removeEventListener('change', closeOnDesktop); };
  }, [open]);
  return <header className="site-header">
    <nav className="wrap header-inner" aria-label="Main navigation">
      <a className="brand" href="#main" onClick={() => setOpen(false)}>CHRIS<span> / </span>CODES<span className="brand-dot">.</span></a>
      <div className="desktop-nav">{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</div>
      <a className="nav-contact" href="#contact">Let’s talk <FiArrowUpRight aria-hidden="true" /></a>
      <button className="menu-toggle" type="button" ref={toggle} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
    </nav>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{[...links, ['#contact', 'Contact']].map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<FiArrowUpRight aria-hidden="true" /></a>)}</nav>
  </header>;
}
