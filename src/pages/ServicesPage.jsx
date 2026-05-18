import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';

const ServicesPage = () => {
  const services = [
    {
      title: 'Sales & Growth Consulting',
      description: 'Strategic sales and growth consulting to scale your business revenue.',
      path: '/services/sales-growth-consulting',
      features: ['Sales Strategy', 'Revenue Growth', 'Market Expansion', 'Performance Analytics'],
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Management & Business Consulting',
      description: 'Expert guidance to improve organizational efficiency and decision-making.',
      path: '/services/management-consulting',
      features: ['Strategy Planning', 'Change Management', 'Process Optimization', 'Leadership Development'],
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Talent Acquisition',
      description: 'Optimize human resources with strategic talent management solutions.',
      path: '/services/hr-consulting',
      features: ['Talent Acquisition', 'Performance Management', 'Training', 'HR Technology'],
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'E-Governance Consulting',
      description: 'Digital governance solutions for public sector transformation.',
      path: '/services/e-governance-consulting',
      features: ['Digital Services', 'Citizen Engagement', 'Data Management', 'Compliance'],
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
  ];

  const nextGenSolutions = [
    {
      title: 'AI Agentic Development',
      description: 'Autonomous AI agents powered by LLMs like GPT-4, Claude, and custom models for intelligent automation.',
      path: '/development/ai-agentic',
      features: ['Autonomous AI Agents', 'Multi-Agent Systems', 'LLM Integration', 'RAG Architecture'],
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored web, mobile, and cloud applications built with modern frameworks and best practices.',
      path: '/development/custom-software',
      features: ['Web Applications', 'Mobile Apps (iOS/Android)', 'Cloud-Native Solutions', 'API Development'],
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'ERP / CRM Solutions',
      description: 'Comprehensive ERP and CRM implementation across SAP, Microsoft Dynamics, Oracle, Salesforce, and more.',
      path: '/development/erp-crm',
      features: ['Multi-Platform Support', 'Custom Development', 'Cloud Migration', 'System Integration'],
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Cyber Security',
      description: 'Enterprise-grade security solutions and risk management for your business.',
      path: '/services/cyber-security',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
  ];

  const products = [
    {
      title: 'AI Recruitment Intelligence Platform',
      description: 'Enterprise hiring automation with AI-powered resume screening, candidate ranking, and recruitment workflow automation.',
      path: '/recruitment',
      features: ['AI Resume Screening', 'Candidate Ranking', 'Online Assessments', 'Hiring Dashboards'],
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      title: 'BotMinds ADDU Agentic AI - AI Automation Platform',
      description: 'AI-powered automation platform that reduces IT burden and boosts productivity.',
      path: '/products/botminds',
      features: ['AI Automation', 'Smart Alerts', 'Seamless Integration', 'Real-time Analytics'],
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'WhatsApp Business Solution',
      description: 'Transform customer engagement with WhatsApp Business API, chatbots, and automated campaigns.',
      path: '/services/whatsapp-marketing',
      features: ['WhatsApp API', 'Broadcast Campaigns', 'Chatbot Automation', 'E-Commerce Integration'],
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
  ];

  return (
    <div>
      <SEOHead
        title="Services — NexLogic Software, AI & Consulting Solutions"
        description="Explore NexLogic Innovation Private Limited's full range of services: AI development, custom software, ERP/CRM, cybersecurity, and strategic consulting. naxlogic.com"
        canonical="/services"
      />
      {/* Hero Section */}}
      <section
        className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
                Our Services & Products
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Comprehensive consulting and technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">WHAT WE OFFER</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Consulting Services
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Expert consulting services to transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ScrollAnimation key={index}>
                <Link to={service.path}>
                  <div className={`${service.bgColor} ${service.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300 h-full`}>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="mb-6 opacity-90">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <span className="material-symbols-outlined text-lg">check</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center font-semibold hover:underline text-sm uppercase tracking-widest">
                      Learn More
                      <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
          
          {/* Second row with 2 centered cards */}
          <div className="grid md:grid-cols-1 gap-6 md:gap-8 max-w-2xl mx-auto mt-6 md:mt-8">
            {services.slice(3).map((service, index) => (
              <ScrollAnimation key={index + 3}>
                <Link to={service.path}>
                  <div className={`${service.bgColor} ${service.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300 h-full`}>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="mb-6 opacity-90">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <span className="material-symbols-outlined text-lg">check</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center font-semibold hover:underline text-sm uppercase tracking-widest">
                      Learn More
                      <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Next-Gen Solutions Section */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">DEVELOPMENT SERVICES</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Next-Gen Solutions
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Cutting-edge software development and AI-powered solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {nextGenSolutions.map((solution, index) => (
              <ScrollAnimation key={index}>
                <Link to={solution.path}>
                  <div className={`${solution.bgColor} ${solution.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300 h-full`}>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">
                      {solution.title}
                    </h3>
                    <p className="mb-6 opacity-90">
                      {solution.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <span className="material-symbols-outlined text-lg">check</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center font-semibold hover:underline text-sm uppercase tracking-widest">
                      Learn More
                      <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">OUR INNOVATIONS</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Products
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Innovative products designed to solve real business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ScrollAnimation key={index}>
                <Link to={product.path}>
                  <div className={`${product.bgColor} ${product.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300 h-full`}>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">
                      {product.title}
                    </h3>
                    <p className="mb-6 opacity-90">
                      {product.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <span className="material-symbols-outlined text-lg">check</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center font-semibold hover:underline text-sm uppercase tracking-widest">
                      Learn More
                      <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                We create tailored solutions that address your unique business challenges.
              </p>
              <Link to="/contact">
                <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                  Get Started
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

