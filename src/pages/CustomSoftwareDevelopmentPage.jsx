import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SEOHead from '../components/SEOHead';
import TechStack from '../components/TechStack';

gsap.registerPlugin(ScrollTrigger);

const CustomSoftwareDevelopmentPage = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );
    
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

  const services = [
    { 
      icon: 'web', 
      title: 'Web Application Development', 
      description: 'Modern, responsive web applications built with React, Vue, Angular, or Next.js for optimal performance and user experience.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]' 
    },
    { 
      icon: 'phone_iphone', 
      title: 'Mobile App Development', 
      description: 'Native iOS and Android apps, or cross-platform solutions with React Native and Flutter for faster time-to-market.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]' 
    },
    { 
      icon: 'cloud', 
      title: 'Cloud-Native Solutions', 
      description: 'Scalable cloud applications leveraging AWS, Azure, or Google Cloud for reliability and performance.',
      bgColor: 'bg-[#E8DDD0]', 
      textColor: 'text-[#2F3B35]' 
    }
  ];

  const solutions = [
    {
      icon: 'storefront',
      title: 'E-Commerce Platforms',
      description: 'Full-featured online stores with payment integration, inventory management, and customer analytics.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'admin_panel_settings',
      title: 'Enterprise Software',
      description: 'Custom ERP, CRM, and business management systems tailored to your workflows and processes.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'campaign',
      title: 'SaaS Products',
      description: 'Multi-tenant SaaS platforms with subscription management, billing, and user authentication.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'api',
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation, security, and scalability.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    }
  ];

  const features = [
    {
      title: 'Responsive Design',
      desc: 'Mobile-first, adaptive interfaces that work seamlessly across all devices and screen sizes',
      icon: 'devices'
    },
    {
      title: 'Performance Optimized',
      desc: 'Fast loading times, efficient code, and optimized assets for superior user experience',
      icon: 'speed'
    },
    {
      title: 'Secure & Compliant',
      desc: 'Industry-standard security practices, encryption, and compliance with data protection regulations',
      icon: 'shield'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Built to grow with your business, handling increased traffic and data volumes effortlessly',
      icon: 'trending_up'
    },
    {
      title: 'Real-Time Features',
      desc: 'WebSocket integration for live updates, notifications, and collaborative features',
      icon: 'sync'
    },
    {
      title: 'Third-Party Integration',
      desc: 'Seamless integration with payment gateways, CRMs, analytics, and other business tools',
      icon: 'integration_instructions'
    }
  ];

  const technologies = {
    frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Material UI'],
    backend: ['Node.js', 'Python/Django', 'Java/Spring Boot', '.NET Core', 'Ruby on Rails', 'PHP/Laravel'],
    mobile: [
      { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original-wordmark.svg', name: 'Android (Java)' },
      { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original-wordmark.svg', name: 'Kotlin' },
      { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original-wordmark.svg', name: 'iOS Swift' },
      { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', name: 'React Native' },
      { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', name: 'Flutter' }
    ],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    tools: ['Git', 'CI/CD', 'Jest', 'Cypress', 'Webpack', 'GraphQL']
  };

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Deep dive into your business goals, user needs, and technical requirements'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Create intuitive, visually appealing designs with user journey mapping'
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'Iterative development sprints with regular demos and feedback incorporation'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Comprehensive testing including unit, integration, and end-to-end tests'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth launch with ongoing maintenance, updates, and technical support'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: 'health_and_safety' },
    { name: 'Finance', icon: 'account_balance' },
    { name: 'E-Commerce', icon: 'shopping_cart' },
    { name: 'Education', icon: 'school' },
    { name: 'Real Estate', icon: 'home' },
    { name: 'Logistics', icon: 'local_shipping' }
  ];

  return (
    <div>
      <SEOHead
        title="Custom Software Development — NexLogic"
        description="NexLogic Innovation Private Limited offers custom web, mobile and cloud software development tailored to your business needs. Get expert NexLogic software solutions at naxlogic.com."
        canonical="/development/custom-software"
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-heading flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl text-white">devices</span>
              <span className="text-sm uppercase tracking-widest text-white/80">Next-Gen Solutions</span>
            </div>
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Custom Software Development
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              Transform your ideas into powerful digital solutions—web applications, mobile apps, and enterprise systems built with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Development Services
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              End-to-end software development tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate ${service.bgColor} ${service.textColor} p-8 rounded-xl hover:scale-105 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-heading mb-3">{service.title}</h3>
                <p className="leading-relaxed opacity-90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Solutions We Build
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className={`scroll-animate ${solution.bgColor} ${solution.textColor} p-6 rounded-xl hover:shadow-xl transition-shadow duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{solution.icon}</span>
                <h3 className="font-heading mb-2 text-lg">{solution.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              What We Deliver
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Modern software features that exceed user expectations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="scroll-animate bg-taupe/20 dark:bg-charcoal-light p-6 rounded-xl border-2 border-[#2F3B35]/10 dark:border-sandstone/20 hover:border-[#2F4538] dark:hover:border-[#C9D8BF] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl mb-3 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-heading mb-2 text-charcoal dark:text-sandstone">{feature.title}</h3>
                <p className="text-brown-grey dark:text-text-dark-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              A proven methodology for successful software delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#2F4538] dark:text-[#C9D8BF] mb-4 font-heading">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading mb-3 text-charcoal dark:text-sandstone">{item.title}</h3>
                <p className="text-sm text-brown-grey dark:text-text-dark-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="scroll-animate grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white dark:bg-charcoal p-6 rounded-xl text-center hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-4xl mb-3 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {industry.icon}
                </span>
                <h3 className="text-sm font-heading text-charcoal dark:text-sandstone">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#2F4538] text-white">
        <div className="container-custom px-4 md:px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a roadmap to bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-[#2F4538] text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-[#E8DDD0] transition-all">
                Get Started
              </button>
            </Link>
            <Link to="/development">
              <button className="bg-transparent border-2 border-white text-white text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-white/10 transition-all">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopmentPage;
