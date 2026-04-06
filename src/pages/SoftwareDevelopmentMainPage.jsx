import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SoftwareDevelopmentMainPage = () => {
  useEffect(() => {
    // Hero animation
    gsap.fromTo('.hero-heading', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );
    
    // Scroll animations
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: element, 
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
  }, []);

  const developmentServices = [
    {
      icon: 'psychology',
      title: 'AI Agentic Development',
      description: 'Build intelligent autonomous agents powered by cutting-edge AI that can reason, learn, and execute complex tasks.',
      link: '/development/ai-agentic',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]',
      features: ['Autonomous AI Agents', 'LLM Integration', 'Multi-Agent Systems', 'RAG Architecture']
    },
    {
      icon: 'devices',
      title: 'Custom Software Development',
      description: 'Tailored digital solutions including modern websites, mobile applications, and enterprise software systems.',
      link: '/development/custom-software',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions', 'API Development']
    },
    {
      icon: 'account_tree',
      title: 'ERP / CRM Solutions',
      description: 'Comprehensive ERP and CRM implementation across SAP, Microsoft Dynamics, Oracle, Salesforce, Odoo, and Zoho platforms.',
      link: '/development/erp-crm',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]',
      features: ['Multi-Platform Support', 'Custom Development', ' SAP System Integration','Customised ERP/CRM Solutions']
    }
  ];

  const benefits = [
    { icon: 'rocket_launch', title: 'Accelerated Delivery', description: 'Agile methodologies and rapid development cycles' },
    { icon: 'shield', title: 'Enterprise Security', description: 'Industry-standard security practices and compliance' },
    { icon: 'tune', title: 'Scalable Architecture', description: 'Built to grow with your business needs' },
    { icon: 'support_agent', title: 'Ongoing Support', description: '24/7 maintenance and technical assistance' }
  ];

  const technologies = [
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', name: 'React', category: 'Frontend' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', name: 'Node.js', category: 'Backend' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg', name: 'Python', category: 'Backend' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', name: 'Java', category: 'Backend' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', name: 'TypeScript', category: 'Frontend' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg', name: 'PHP', category: 'Backend' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', name: 'MySQL', category: 'Database' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg', name: 'PostgreSQL', category: 'Database' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', name: 'MongoDB', category: 'Database' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS', category: 'Cloud' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', name: 'Azure', category: 'Cloud' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg', name: 'Docker', category: 'DevOps' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Your Partner in Next-Gen Solutions
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              At Nexlogic, we specialize in crafting dynamic and innovative solutions that help businesses thrive in the digital age. With experienced developers and designers, we combine creativity, innovation, and technical expertise to deliver bespoke solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Development Services Cards */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Choose Your Development Path
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Select the development service that aligns with your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {developmentServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="scroll-animate block group"
              >
                <div className={`${service.bgColor} ${service.textColor} p-8 rounded-xl hover:scale-105 transition-all duration-300 h-full`}>
                  <span className="material-symbols-outlined text-6xl mb-6 block group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading mb-4">{service.title}</h3>
                  <p className="leading-relaxed opacity-90 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 opacity-80">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 font-medium mt-auto pt-4 border-t border-current/20">
                    <span>Explore Service</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Development Services */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto mb-8">
              Your digital solution should be a bold reflection of the quality you provide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl text-center hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {benefit.icon}
                </span>
                <h3 className="font-heading mb-2 text-lg text-charcoal dark:text-sandstone">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-brown-grey dark:text-text-dark-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional Offerings */}
          <div className="mt-16">
            <div className="text-center mb-12 scroll-animate">
              <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">WHAT WE OFFER</div>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
                Creative Digital Services
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="scroll-animate bg-[#A8B5A1] text-[#2F3B35] p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block">web</span>
                <h3 className="text-xl font-heading mb-3">Web Design & Development</h3>
                <p className="leading-relaxed opacity-90">Comprehensive design, development, and optimization for your online presence.</p>
              </div>
              <div className="scroll-animate bg-[#E8DDD0] text-[#2F3B35] p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block">palette</span>
                <h3 className="text-xl font-heading mb-3">UI / UX Design</h3>
                <p className="leading-relaxed opacity-90">Intuitive interfaces and engaging experiences for optimal user satisfaction.</p>
              </div>
              <div className="scroll-animate bg-[#C9D8BF] text-[#2F3B35] p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block">smartphone</span>
                <h3 className="text-xl font-heading mb-3">Mobile Optimization</h3>
                <p className="leading-relaxed opacity-90">Responsive design ensuring seamless performance across various mobile devices.</p>
              </div>
              <div className="scroll-animate bg-[#2F4538] text-[#F7F3ED] p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block">language</span>
                <h3 className="text-xl font-heading mb-3">Digital Experience</h3>
                <p className="leading-relaxed opacity-90">Transform your online presence with immersive digital experiences.</p>
              </div>
              <div className="scroll-animate bg-[#A8B5A1] text-[#2F3B35] p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block">psychology</span>
                <h3 className="text-xl font-heading mb-3">Project Strategy</h3>
                <p className="leading-relaxed opacity-90">Tailored strategies ensuring seamless execution and optimal resource allocation.</p>
              </div>
              <div className="scroll-animate bg-[#E8DDD0] text-[#2F3B35] p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block">cloud_sync</span>
                <h3 className="text-xl font-heading mb-3">API Integration</h3>
                <p className="leading-relaxed opacity-90">Seamless integration with third-party services and payment gateways.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Technology Expertise
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to deliver exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="scroll-animate bg-taupe/20 dark:bg-charcoal-light p-6 rounded-xl text-center hover:bg-[#2F4538] dark:hover:bg-[#C9D8BF] hover:scale-105 transition-all duration-300 group"
              >
                <img src={tech.logo} alt={tech.name} className="w-16 h-16 mx-auto mb-3 object-contain" />
                <h3 className="font-heading text-charcoal dark:text-sandstone group-hover:text-white dark:group-hover:text-[#2F3B35] mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-brown-grey dark:text-text-dark-muted group-hover:text-white/80 dark:group-hover:text-[#2F3B35]/80">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#2F4538] text-white">
        <div className="container-custom px-4 md:px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a development roadmap tailored to your needs
          </p>
          <Link to="/contact">
            <button className="bg-white text-[#2F4538] text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-[#E8DDD0] transition-all">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentMainPage;
