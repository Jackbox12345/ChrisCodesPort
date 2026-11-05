import SideNav from './components/SideNav';
import About from './components/sections/About';
import MeteorField from './components/MeteorField';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  return <div className="site-shell">
    <MeteorField />
    <a className="skip-link" href="#content">Skip to content</a>
    <div className="scroll-progress" aria-hidden="true" />
    <SideNav />
    <main id="content" tabIndex={-1}><Hero /><Projects /><About /><Services /><Experience /><Contact /></main>
    <footer className="site-footer wrap"><a href="#main">CHRIS<span> / </span>CODES</a><p>Built with intention. Made with React.</p><a href="#main">Back to top ↑</a></footer>
  </div>;
}
