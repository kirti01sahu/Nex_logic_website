import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const Services = () => {
  const services = [
    {
      title: 'Sales & Growth Consulting',
      description: 'We design sales strategies, GTM plans, and revenue operations models that help you build predictable, scalable growth.',
      path: '/services/management-consulting',
      icon: 'trending_up',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]',
      dateColor: 'text-[#7A8479]',
      descColor: 'text-[#5A6359]',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
      date: 'Insights / Solutions'
    },
    {
      title: 'Management & Business Consulting',
      description: 'We work with leadership teams to reshape business models, streamline operations, and drive digital transformation across the enterprise.',
      path: '/services/management-consulting',
      icon: 'business_center',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]',
      dateColor: 'text-[#A8B5A1]',
      descColor: 'text-[#D4DDCE]',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop',
      date: 'CEO / Testimonial'
    },
    {
      title: 'Talent Acquisition',
      description: 'We help you architect future ready teams through workforce planning, talent advisory, and tech enabled hiring and HR processes.',
      path: '/services/hr-consulting',
      icon: 'groups',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]',
      dateColor: 'text-[#6A7A62]',
      descColor: 'text-[#4A5A42]',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop',
      date: 'Case Studies'
    },
    {
      title: 'Software Development & Product Engineering',
      description: 'We design and build secure, scalable web, mobile, and integration solutions that translate strategy into robust digital products.',
      path: '/services/software-development',
      icon: 'code',
      bgColor: 'bg-[#F5EFE7]',
      textColor: 'text-[#2F3B35]',
      dateColor: 'text-[#7A8479]',
      descColor: 'text-[#5A6359]',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
      date: 'Assessments / Solutions'
    },
    {
      title: 'Cyber Security',
      description: 'We deliver next generation cybersecurity solutions that safeguard data, infrastructure, and operations against evolving threats through advanced VAPT, red teaming, and expert consultancy.',
      path: '/services/cyber-security',
      icon: 'shield',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]',
      dateColor: 'text-[#4A5A42]',
      descColor: 'text-[#3A4A32]',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
      date: 'Government / Solutions'
    },
    {
      title: 'SaaS Platforms',
      description: 'We offer BotMinds ADDU Agentic AI that turns complex IT operations into a proactive, self healing system—cutting tickets, improving compliance, and freeing teams to focus on strategic work.',
      path: '/botminds',
      icon: 'layers',
      bgColor: 'bg-[#B8C8B1]',
      textColor: 'text-[#2F3B35]',
      dateColor: 'text-[#5A6A52]',
      descColor: 'text-[#4A5A42]',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      date: 'Partner / Case Studies'
    },
  ];

  return (
    <section className="section bg-[#F5EFE7] dark:bg-charcoal-light py-12 md:py-20 lg:py-24" id="services">
      <div className="container-custom px-4 md:px-6">
        <ScrollAnimation>
          <div className="max-w-3xl mb-12 md:mb-20 lg:mb-24">
            <div className="text-[#7A8479] dark:text-sandstone text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium mb-3 md:mb-4">Service Offerings</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2F3B35] dark:text-sandstone mb-4 md:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Custom Engineered Excellence</h2>
            <p className="text-[#5A6359] dark:text-text-dark-muted text-sm md:text-base leading-relaxed font-light">
              We bring together consulting, engineering, and SaaS platforms to solve complex business and technology challenges end to end.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index}>
              <Link to={service.path}>
                <div className={`${service.bgColor} overflow-hidden transition-all duration-300 hover:shadow-lg shadow-sm h-full flex flex-col group`}>
                  
                  {/* Image Section */}
                  <div className="relative h-40 md:h-44 lg:h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:opacity-95 transition-opacity duration-500 ease-out"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 md:p-6 lg:p-7 pt-5 md:pt-6 flex flex-col flex-grow">
                    {/* Category/Date */}
                    <p className={`text-[9px] md:text-[10px] uppercase tracking-[0.12em] font-medium mb-3 md:mb-4 ${service.dateColor}`}>
                      {service.date}
                    </p>

                    {/* Title */}
                    <h3 className={`text-lg md:text-xl font-serif leading-tight mb-3 md:mb-4 ${service.textColor}`} style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-[13px] md:text-[14px] leading-relaxed mb-5 md:mb-6 flex-grow font-light ${service.descColor}`}>
                      {service.description}
                    </p>

                    {/* Read More CTA */}
                    <div className={`inline-flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.12em] font-medium transition-all duration-300 group-hover:gap-3 ${service.textColor}`}>
                      Learn more
                      <span className="material-symbols-outlined text-sm font-light">arrow_right_alt</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mt-12 md:mt-16">
            <Link to="/services">
              <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-xs md:text-sm uppercase tracking-widest-xl font-bold px-8 md:px-10 py-4 md:py-5 hover:opacity-90 transition-all duration-300 shadow-card w-full sm:w-auto">
                View All Services
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Services;
