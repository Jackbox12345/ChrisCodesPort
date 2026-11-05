import { FiArrowUpRight } from 'react-icons/fi';
import { contactLinks } from '../../data/portfolioData';
export default function Contact() {
  return <section id="contact" className="contact-section section-space"><div className="wrap"><p className="eyebrow" data-animate>05 / Next starts here</p><div className="contact-heading" data-animate><h2>Have an idea?<br /><em>Let’s make it real.</em></h2><a className="contact-arrow" href={contactLinks[0].href} aria-label="Email Christian"><FiArrowUpRight aria-hidden="true" /></a></div><div className="contact-bottom" data-animate><p>A website, a dashboard, or a better way to work.<br />Tell me what you have in mind.</p><div className="contact-links">{contactLinks.map(link => <a key={link.type} href={link.href} target={link.type === 'email' ? undefined : '_blank'} rel={link.type === 'email' ? undefined : 'noreferrer'}>{link.label}<FiArrowUpRight aria-hidden="true" /></a>)}</div></div></div></section>;
}
