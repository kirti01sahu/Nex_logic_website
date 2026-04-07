import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SEOHead from '../components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const ERPCRMDevelopmentPage = () => {
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

  const erpCrmSystems = [
    { 
      icon: 'account_tree', 
      title: 'SAP Solutions', 
      description: 'SAP S/4HANA, ECC, and Business One implementation, ABAP development, Fiori apps, and S/4HANA migration services.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]',
      features: ['SAP S/4HANA', 'SAP ECC', 'ABAP Development', 'SAP Fiori']
    },
    { 
      icon: 'hub', 
      title: 'Microsoft Dynamics', 
      description: 'Dynamics 365 Finance, Supply Chain, Sales, and Customer Service implementation and customization.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]',
      features: ['Dynamics 365', 'Power Platform', 'Azure Integration', 'Custom Workflows']
    },
    { 
      icon: 'storefront', 
      title: 'Oracle ERP & CRM', 
      description: 'Oracle Cloud ERP, NetSuite, and Oracle CX implementation with complete business process optimization.',
      bgColor: 'bg-[#E8DDD0]', 
      textColor: 'text-[#2F3B35]',
      features: ['Oracle Cloud', 'NetSuite', 'Oracle CX', 'PeopleSoft']
    },
    { 
      icon: 'campaign', 
      title: 'Salesforce', 
      description: 'Salesforce Sales Cloud, Service Cloud, Marketing Cloud implementation and custom development.',
      bgColor: 'bg-[#A8B5A1]', 
      textColor: 'text-[#2F3B35]',
      features: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Apex Development']
    },
    { 
      icon: 'factory', 
      title: 'Odoo ERP', 
      description: 'Open-source Odoo ERP implementation covering all business operations from sales to manufacturing.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]',
      features: ['Sales', 'Inventory', 'Manufacturing', 'Accounting']
    },
    { 
      icon: 'handshake', 
      title: 'Zoho CRM', 
      description: 'Zoho CRM and Zoho One suite implementation for streamlined customer relationship management.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]',
      features: ['Zoho CRM', 'Zoho One', 'Custom Modules', 'Workflow Automation']
    }
  ];

  const services = [
    { 
      icon: 'settings', 
      title: 'ERP Implementation', 
      description: 'End-to-end ERP implementation services including requirements analysis, solution design, and seamless deployment.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]' 
    },
    { 
      icon: 'groups', 
      title: 'CRM Solutions', 
      description: 'Comprehensive CRM implementation to manage customer interactions, sales pipelines, and marketing campaigns.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]' 
    },
    { 
      icon: 'sync', 
      title: 'System Integration', 
      description: 'Seamless integration between ERP, CRM, and other business systems for unified data and processes.',
      bgColor: 'bg-[#E8DDD0]', 
      textColor: 'text-[#2F3B35]' 
    }
  ];

  const modules = [
    {
      icon: 'wallet',
      title: 'Finance & Accounting',
      description: 'Financial management, accounting, budgeting, and financial reporting across all systems.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'inventory_2',
      title: 'Supply Chain Management',
      description: 'Procurement, inventory management, warehouse operations, and logistics optimization.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'shopping_cart',
      title: 'Sales & Distribution',
      description: 'Order management, pricing, billing, and complete order-to-cash process automation.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Manufacturing',
      description: 'Production planning, shop floor control, quality management, and manufacturing execution.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      icon: 'groups',
      title: 'Human Resources',
      description: 'HR management, payroll, talent acquisition, performance management, and workforce planning.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'pie_chart',
      title: 'Business Intelligence',
      description: 'Data analytics, reporting, dashboards, and business intelligence for informed decision-making.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'support_agent',
      title: 'Customer Service',
      description: 'Customer support, case management, service ticketing, and customer satisfaction tracking.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'trending_up',
      title: 'Sales Automation',
      description: 'Lead management, opportunity tracking, sales forecasting, and sales performance analytics.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    }
  ];

  const capabilities = [
    {
      title: 'Custom Development',
      desc: 'Custom modules, workflows, and extensions tailored to your business requirements',
      icon: 'code'
    },
    {
      title: 'Cloud Migration',
      desc: 'Migrate on-premise ERP/CRM systems to cloud platforms with minimal disruption',
      icon: 'cloud_upload'
    },
    {
      title: 'Mobile Solutions',
      desc: 'Mobile apps for ERP/CRM access on the go with offline capabilities',
      icon: 'phone_iphone'
    },
    {
      title: 'API Integration',
      desc: 'Connect ERP/CRM with third-party applications, e-commerce, and legacy systems',
      icon: 'api'
    },
    {
      title: 'Process Automation',
      desc: 'Workflow automation, robotic process automation (RPA), and business process optimization',
      icon: 'automation'
    },
    {
      title: 'Training & Support',
      desc: 'Comprehensive user training, documentation, and 24/7 technical support',
      icon: 'school'
    }
  ];

  const technologies = [
    'SAP S/4HANA', 'SAP ECC', 'SAP Business One', 'Microsoft Dynamics 365', 'Dynamics AX',
    'Oracle Cloud ERP', 'Oracle NetSuite', 'Salesforce', 'Odoo', 'Zoho CRM',
    'Microsoft Power Platform', 'SAP Fiori', 'SAPUI5', 'ABAP', 'Apex',
    'REST APIs', 'SOAP', 'Azure', 'AWS', 'Google Cloud'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Understand your business processes, pain points, and system requirements'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Design ERP/CRM architecture, customizations, and integration strategy'
    },
    {
      step: '03',
      title: 'Configuration & Development',
      description: 'System configuration, custom development, and data migration preparation'
    },
    {
      step: '04',
      title: 'Testing & Training',
      description: 'Comprehensive testing, user training, and change management'
    },
    {
      step: '05',
      title: 'Go-Live & Support',
      description: 'Production deployment with hypercare support and continuous optimization'
    }
  ];

  const benefits = [
    { icon: 'business_center', title: 'Streamlined Operations', description: 'Automate and optimize business processes' },
    { icon: 'insights', title: 'Data-Driven Decisions', description: 'Real-time insights and analytics' },
    { icon: 'savings', title: 'Cost Reduction', description: 'Reduce operational costs and improve ROI' },
    { icon: 'verified', title: 'Scalability', description: 'Grow your business without system limitations' }
  ];

  const industries = [
    { name: 'Manufacturing', icon: 'factory' },
    { name: 'Retail', icon: 'storefront' },
    { name: 'Healthcare', icon: 'health_and_safety' },
    { name: 'Finance', icon: 'account_balance' },
    { name: 'Logistics', icon: 'local_shipping' },
    { name: 'Technology', icon: 'computer' }
  ];

  return (
    <div>
      <SEOHead
        title="ERP & CRM Development — Nextlogic Software Solutions"
        description="Nextlogic Innovation Private Limited implements SAP, Microsoft Dynamics, Oracle, Salesforce and custom ERP/CRM solutions. Expert Nextlogic CRM development at naxlogic.com."
        canonical="/development/erp-crm"
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-heading flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl text-white">account_tree</span>
              <span className="text-sm uppercase tracking-widest text-white/80">Next-Gen Solutions</span>
            </div>
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              ERP & CRM Solutions
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              Transform your enterprise with comprehensive ERP and CRM solutions—from implementation and customization to cloud migration and ongoing support across SAP, Microsoft, Oracle, Salesforce, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ERP/CRM Systems We Support */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              ERP & CRM Systems We Support
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Expert implementation and customization across leading enterprise platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpCrmSystems.map((system, index) => (
              <div key={index} className={`scroll-animate ${system.bgColor} ${system.textColor} p-8 rounded-xl hover:scale-105 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{system.icon}</span>
                <h3 className="text-2xl font-heading mb-3">{system.title}</h3>
                <p className="leading-relaxed opacity-90 mb-4">{system.description}</p>
                <div className="space-y-1">
                  {system.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm opacity-80">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Services
            </h2>
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

      {/* Functional Modules */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Functional Modules & Capabilities
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Comprehensive business process coverage across all ERP and CRM systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div key={index} className={`scroll-animate ${module.bgColor} ${module.textColor} p-6 rounded-xl hover:shadow-xl transition-shadow duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{module.icon}</span>
                <h3 className="font-heading mb-2 text-lg">{module.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Technical Capabilities
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Advanced development and customization expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl border-2 border-[#2F3B35]/10 dark:border-sandstone/20 hover:border-[#2F4538] dark:hover:border-[#C9D8BF] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl mb-3 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {capability.icon}
                </span>
                <h3 className="text-xl font-heading mb-2 text-charcoal dark:text-sandstone">{capability.title}</h3>
                <p className="text-brown-grey dark:text-text-dark-muted">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Structured approach for successful ERP/CRM deployments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="scroll-animate bg-taupe/20 dark:bg-charcoal-light p-6 rounded-xl text-center">
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

      {/* Business Benefits */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Business Benefits
            </h2>
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
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Technology Expertise
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Comprehensive knowledge across the ERP/CRM ecosystem
            </p>
          </div>
          <div className="scroll-animate flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-taupe/30 dark:bg-charcoal-light text-charcoal dark:text-sandstone rounded-full text-sm font-medium hover:bg-[#2F4538] hover:text-white dark:hover:bg-[#C9D8BF] dark:hover:text-[#2F3B35] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your ERP/CRM requirements and create a roadmap for digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-[#2F4538] text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-[#E8DDD0] transition-all">
                Consult Our Experts
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

export default ERPCRMDevelopmentPage;
