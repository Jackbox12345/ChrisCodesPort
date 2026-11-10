import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-space wrap">
      <div className="section-heading" data-animate>
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2>Ideas explored.<br /><em>Solutions delivered.</em></h2>
        </div>
        <p>Purpose-built tools for the people<br />and workflows behind the screen.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={project.featured ? 'project project-featured' : 'project'} key={project.title} data-animate>
            <div className="project-cosmos" aria-hidden="true">
              <span className="celestial-ringed"><span /></span>
              <span className="celestial-moon" />
              <span className="celestial-blue" />
              <span className="celestial-cluster" />
            </div>
            <div className="project-topline">
              <span className="project-category"><span aria-hidden="true" />{project.category}</span>
              <span className="project-index" aria-hidden="true">PROJECT / 0{index + 1}</span>
            </div>
            <div className={`project-visual project-visual-${index}`}>
              <div className="project-image-frame">
                <div className="window-bar" aria-hidden="true">
                  <i /><i /><i /><span>{project.title.toLowerCase().replaceAll(' ', '-')}</span>
                </div>
                <img
                  src={project.image}
                  alt={project.imageAlt || `${project.title} application screenshot`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
              <div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="projects-outro" data-animate>
        <p>Have a workflow that could work better?</p>
        <a href="#contact">Let’s build your next tool <FiArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}
