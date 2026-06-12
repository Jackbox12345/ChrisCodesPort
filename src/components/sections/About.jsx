import { skills } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-frame section-reveal px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div data-animate="left">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Useful software, clean interfaces, no extra noise.</h2>
        </div>
        <div className="max-w-4xl" data-animate="up" style={{ '--reveal-delay': '90ms' }}>
          <p className="text-2xl font-semibold leading-snug text-[#202227]">
            I am a programmer with hands-on experience in production support, frontend development, and project delivery. My sweet spot is turning rough ideas into working interfaces people understand quickly.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                className="skill-pill rounded-full border border-[#cfd4c6] bg-white px-4 py-2 text-sm font-bold text-[#202227]"
                data-animate="up"
                key={skill}
                style={{ '--reveal-delay': `${index * 45}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
