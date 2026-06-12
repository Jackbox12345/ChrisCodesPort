import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section-frame section-reveal bg-[#e7ece1] px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate="up">
          <div>
            <p className="section-kicker">Selected Projects</p>
            <h2 className="section-title max-w-3xl">Project work with a sharper product feel.</h2>
          </div>
          <a className="modern-link inline-flex items-center gap-2 font-black text-[#101114]" href="#contact">
            Start a project
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              className="project-card group overflow-hidden rounded-lg bg-[#101114] text-white"
              data-animate={index % 2 === 0 ? 'left' : 'right'}
              key={project.title}
              style={{ '--reveal-delay': `${120 + index * 110}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  className="h-72 w-full object-cover opacity-[0.82] transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d9ff67]">{project.category}</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight">{project.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{project.detail}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span className="rounded-full border border-white/14 px-3 py-2 text-xs font-black text-white/75" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
