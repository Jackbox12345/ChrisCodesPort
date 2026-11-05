import { experience } from '../../data/portfolioData';
export default function Experience() {
  return <section id="work" className="wrap section-space experience-section"><div data-animate><p className="eyebrow">04 / The journey</p><h2>Learning by<br /><em>building.</em></h2></div><div>{experience.map(item => <article className="experience-row" data-animate key={item.role}><p className="eyebrow">{item.year}</p><h3>{item.role}</h3><p className="company">{item.company}</p><p className="body-copy">{item.detail}</p></article>)}</div></section>;
}
