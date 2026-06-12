import SideNav from './components/SideNav';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import useScrollReveal from './hooks/useScrollReveal';

const App = () => {
  useScrollReveal();

  return (
    <div className="site-shell min-h-screen bg-[#f6f7f2] text-[#101114]">
      <SideNav />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
