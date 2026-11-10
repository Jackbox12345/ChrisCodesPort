import { services } from '../../data/portfolioData';
export default function Services() {
  return <section id="services" className="wrap section-space"><div className="section-heading" data-animate><div><p className="eyebrow">03 / What I bring</p><h2>From the first idea<br /><em>to the final detail.</em></h2></div><p>Practical development.<br />Carefully considered interfaces.</p></div><div className="service-list">{services.map((service, index) => { const Icon = service.icon; return <article className="service-row" data-animate key={service.title} style={{ '--reveal-delay': `${index * 70}ms` }}><span className="row-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.detail}</p><Icon aria-hidden="true" /></article>; })}</div></section>;
}
