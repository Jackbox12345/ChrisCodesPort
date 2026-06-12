import {
  AiOutlineArrowRight,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import { contactLinks } from '../../data/portfolioData';

const iconMap = {
  email: AiOutlineMail,
  linkedin: AiOutlineLinkedin,
  github: AiOutlineGithub,
};

const Contact = () => {
  return (
    <section id="contact" className="section-frame section-reveal px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-[#101114] py-12 md:grid-cols-[1fr_0.75fr] md:py-16">
        <div data-animate="left">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title max-w-4xl">Let us build something clean, fast, and useful.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f635c]">
            Send a message about a website, React app, dashboard, or workflow tool. I will bring structure, care, and a builder mindset.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {contactLinks.map((link, index) => {
            const Icon = iconMap[link.type];
            const isExternal = link.type !== 'email';

            return (
              <a
                className="contact-link group"
                data-animate="right"
                href={link.href}
                key={link.label}
                rel={isExternal ? 'noreferrer' : undefined}
                style={{ '--reveal-delay': `${index * 90}ms` }}
                target={isExternal ? '_blank' : undefined}
              >
                <Icon size={22} aria-hidden="true" />
                {link.label}
                <AiOutlineArrowRight className="ml-auto transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
