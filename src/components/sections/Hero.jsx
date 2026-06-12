import { AiOutlineArrowRight, AiOutlineMail } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { hero, stats } from '../../data/portfolioData';

const Hero = () => {
  return (
    <section id="main" className="relative isolate min-h-screen overflow-hidden">
      <img
        className="hero-media absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src={hero.background}
        alt="Workspace background"
      />
      <div className="absolute inset-0 -z-10 bg-[#101114]/68" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#101114] to-transparent" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-12 pt-28 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="reveal-word mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.28em] text-[#d9ff67]">
              <BsBriefcase aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="headline-mask max-w-5xl text-6xl font-black leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              {hero.name}
            </h1>
            <p className="reveal-word delay-150 mt-7 max-w-2xl text-lg leading-8 text-white sm:text-xl">
              {hero.intro}
            </p>
            <div className="reveal-word delay-250 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="modern-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff67] px-6 py-3 font-black text-[#101114]"
                href="#projects"
              >
                View work
                <AiOutlineArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                className="modern-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 font-black text-white"
                href="#contact"
              >
                Contact me
                <AiOutlineMail aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="reveal-word delay-350 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => (
              <div className="metric-row border-t border-white/20 py-5 text-white" key={item.label}>
                <p className="text-4xl font-black tracking-tight">{item.value}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-white/58">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
