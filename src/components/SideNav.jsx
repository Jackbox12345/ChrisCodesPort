import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navItems = [
  { href: '#main', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((current) => !current);
  const closeNav = () => setNav(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/14 bg-[#101114]/72 px-4 py-3 text-white shadow-2xl shadow-black/10 backdrop-blur-xl">
        <a className="nav-brand text-sm font-black uppercase tracking-[0.22em]" href="#main" onClick={closeNav}>
          CL
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a className="nav-link rounded-full px-4 py-2 text-sm font-bold text-white/68" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="hidden rounded-full bg-[#d9ff67] px-4 py-2 text-sm font-black text-[#101114] transition hover:bg-white md:inline-flex" href="#contact">
          Let us talk
        </a>

        <button
          aria-label={nav ? 'Close navigation' : 'Open navigation'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 text-white md:hidden"
          onClick={toggleNav}
          type="button"
        >
          {nav ? <AiOutlineClose size={22} aria-hidden="true" /> : <AiOutlineMenu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {nav && (
        <div className="mobile-menu mx-auto mt-3 grid max-w-7xl gap-2 rounded-2xl border border-white/14 bg-[#101114]/94 p-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:hidden">
          {navItems.map((item, index) => (
            <a
              className="mobile-menu-link rounded-xl px-4 py-3 text-lg font-black text-white/78"
              href={item.href}
              key={item.href}
              onClick={closeNav}
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default SideNav;
