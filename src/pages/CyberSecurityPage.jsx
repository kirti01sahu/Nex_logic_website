import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CyberSecurityPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-heading',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );

    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(
        element,
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
            once: true,
          },
        }
      );
    });
  }, []);

  const coreFeatures = [
    {
      icon: 'shield',
      title: 'Advanced Threat Protection',
      description: 'Real-time monitoring and defense against evolving cyber threats with AI-powered security systems.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'lock',
      title: 'Data Encryption',
      description: 'End-to-end encryption for sensitive data at rest and in transit, ensuring maximum protection.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'visibility',
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock surveillance of your infrastructure with instant threat detection and response.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      icon: 'verified_user',
      title: 'Compliance Management',
      description: 'Ensure adherence to industry standards like ISO 27001, GDPR, HIPAA, and PCI-DSS.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'bug_report',
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits and penetration testing to identify and fix vulnerabilities.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'hub',
      title: 'Infrastructure Security',
      description: 'Secure your networks, servers, and cloud infrastructure against unauthorized access.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  const threats = [
    {
      icon: 'lock',
      title: 'Ransomware Protection',
      description: 'Advanced defense mechanisms against ransomware attacks with automated backup and recovery systems.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      icon: 'mail',
      title: 'Phishing Prevention',
      description: 'Email security solutions with AI-powered phishing detection and user awareness training.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'shield',
      title: 'DDoS Mitigation',
      description: 'Distributed denial-of-service protection to ensure your services remain available during attacks.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'bug_report',
      title: 'Malware Defense',
      description: 'Multi-layered malware protection with behavioral analysis and signature-based detection.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  const services = [
    {
      icon: 'security',
      title: 'Network Security',
      description: 'Implement robust firewalls, intrusion detection systems, and secure network architecture to protect against external threats.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      icon: 'cloud_sync',
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure with advanced access controls, encryption, and continuous monitoring across AWS, Azure, and GCP.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'verified_user',
      title: 'Identity & Access Management',
      description: 'Implement zero-trust security models with multi-factor authentication and role-based access controls.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'bug_report',
      title: 'Incident Response',
      description: 'Rapid response to security incidents with forensic analysis, containment strategies, and recovery procedures.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'policy',
      title: 'Security Consulting',
      description: 'Expert guidance on cybersecurity strategy, risk assessment, and compliance requirements for your organization.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      icon: 'school',
      title: 'Security Awareness Training',
      description: 'Educate your team on cybersecurity best practices, phishing awareness, and safe computing habits.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="text-white/70 text-xs md:text-sm uppercase tracking-widest mb-4 hero-heading">About Us</div>
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Empowering Businesses with Next-Gen Cybersecurity Solutions
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              At Nexlogic, we are dedicated to delivering state-of-the-art cybersecurity solutions that empower businesses to thrive in the digital age. Our advanced technologies and tailored strategies ensure robust protection against evolving cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="scroll-animate">
              <div className="mb-4">
                <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone">security</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading mb-3 text-charcoal dark:text-sandstone">Advanced Cybersecurity Solutions</h3>
              <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed">
                Cutting-edge security technologies powered by AI and machine learning
              </p>
            </div>
            <div className="scroll-animate">
              <div className="mb-4">
                <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone">shield</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading mb-3 text-charcoal dark:text-sandstone">Comprehensive Protection</h3>
              <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed">
                Multi-layered defense strategy covering all aspects of your digital infrastructure
              </p>
            </div>
            <div className="scroll-animate">
              <div className="mb-4">
                <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone">rocket_launch</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading mb-3 text-charcoal dark:text-sandstone">Next-Generation Solutions</h3>
              <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed">
                Future-proof security architecture that adapts to emerging threats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Security Features */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Core Security Features
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from all angles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`scroll-animate ${feature.bgColor} ${feature.textColor} p-6 md:p-8 hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-heading mb-3">{feature.title}</h3>
                <p className="leading-relaxed opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Against Modern Threats */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Protection Against Modern Threats
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <div key={index} className={`scroll-animate ${threat.bgColor} ${threat.textColor} p-6 rounded-xl text-center hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{threat.icon}</span>
                <h3 className="text-lg font-heading mb-3">{threat.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Security Services */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">WHAT WE'RE OFFERING</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Comprehensive Security Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate ${service.bgColor} ${service.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-heading mb-3">{service.title}</h3>
                <p className="leading-relaxed opacity-90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Don't wait for a security breach. Get a free security assessment and discover vulnerabilities before attackers do.
            </p>
            <Link to="/contact">
              <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                Get Free Security Assessment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityPage;
