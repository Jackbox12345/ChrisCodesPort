import { experience } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="work" className="section-frame section-reveal px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div data-animate="left">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Work shaped by real deadlines and real users.</h2>
        </div>
        <div className="border-t border-[#cfd4c6]">
          {experience.map((item, index) => (
            <article
              className="experience-row grid gap-5 border-b border-[#cfd4c6] py-8 md:grid-cols-[0.3fr_0.7fr] md:gap-8"
              data-animate="right"
              key={`${item.year}-${item.role}`}
              style={{ '--reveal-delay': `${index * 110}ms` }}
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c75a3b]">{item.year}</p>
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-2xl font-black text-[#101114]">{item.role}</h3>
                  <p className="font-bold text-[#566052]">{item.company}</p>
                </div>
                <p className="mt-4 max-w-2xl leading-7 text-[#5f635c]">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
