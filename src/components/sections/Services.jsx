import { services } from '../../data/portfolioData';

const Services = () => {
  return (
    <section id="services" className="section-frame section-reveal bg-[#101114] px-5 py-24 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker text-[#d9ff67]" data-animate="up">
          Capabilities
        </p>
        <div
          className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          data-animate="up"
          style={{ '--reveal-delay': '80ms' }}
        >
          <h2 className="section-title max-w-3xl text-white">What I can help ship.</h2>
          <p className="max-w-md text-base leading-7 text-white/62">
            Focused builds with enough polish to feel intentional, and enough restraint to stay useful.
          </p>
        </div>
        <div className="mt-12 grid border-t border-white/12 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                className="modern-panel group border-b border-white/12 py-8 md:border-r md:px-7 md:last:border-r-0"
                data-animate="up"
                key={service.title}
                style={{ '--reveal-delay': `${140 + index * 90}ms` }}
              >
                <Icon className="text-[#d9ff67] transition duration-300 group-hover:-translate-y-1" size={28} aria-hidden="true" />
                <h3 className="mt-8 text-2xl font-black tracking-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/62">{service.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
