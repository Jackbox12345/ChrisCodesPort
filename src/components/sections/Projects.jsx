import { projects } from '../../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-space wrap">
      <div className="section-heading" data-animate>
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2>Real problems.<br /><em>Useful solutions.</em></h2>
        </div>
        <p>A selection of tools built to make<br />everyday work a little easier.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={project.featured ? 'project project-featured' : 'project'} key={project.title}>
            <div className={`project-visual project-visual-${index}`} data-animate="scale">
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
              <span className="project-index" aria-hidden="true">0{index + 1}</span>
            </div>
            <div className="project-info" data-animate>
              <div>
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
              </div>
              <p>{project.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
