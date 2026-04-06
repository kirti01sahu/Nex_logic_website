import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SoftwareDevelopmentPage = () => {
  useEffect(() => {
    // Faster hero animation
    gsap.fromTo('.hero-heading', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );
    
    // Optimized scroll animations with faster timing
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
            once: true // Only animate once
          }
        }
      );
    });
  }, []);

  const technologies = [
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', name: 'React', category: 'Frontend', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', name: 'Node.js', category: 'Backend', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg', name: 'Python', category: 'Backend', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', name: 'Java', category: 'Backend', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg', name: 'PHP', category: 'Backend', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', name: 'MySQL', category: 'Database', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg', name: 'PostgreSQL', category: 'Database', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS', category: 'Cloud', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' }
  ];

  const mobileLanguages = [
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original-wordmark.svg', name: 'Android (Java)', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original-wordmark.svg', name: 'Kotlin', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original-wordmark.svg', name: 'iOS Swift', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', name: 'React Native', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', name: 'Flutter', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'Javascript', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg', name: 'Docker', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' }
  ];

  const offerings = [
    { icon: 'web', title: 'Web Design and Development', description: 'Comprehensive design, development, and optimization for your online presence.', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' },
    { icon: 'palette', title: 'UI / UX Design', description: 'Intuitive interfaces and engaging experiences for optimal user satisfaction.', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'smartphone', title: 'Mobile Optimization', description: 'Responsive design ensuring seamless performance across various mobile devices.', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'language', title: 'Digital Experience', description: 'Transform your online presence with immersive digital experiences that captivate audiences.', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { icon: 'psychology', title: 'Project Strategy', description: 'Crafting tailored project strategies ensuring seamless execution and optimal resource allocation.', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' },
    { icon: 'code', title: 'Development', description: 'Drive growth and innovation with expert development services tailored to unlock your business potential.', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Welcome to Nexlogic: Your Partner in Website Development
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              At Nexlogic, we specialize in crafting dynamic and engaging websites that help businesses thrive in the digital age. With a team of experienced developers and designers, we combine creativity, innovation, and technical expertise to deliver bespoke solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Technologies */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Technologies
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className={`scroll-animate ${tech.bgColor} ${tech.textColor} p-6 rounded-xl text-center hover:opacity-90 transition-opacity duration-300`}>
                <img src={tech.logo} alt={tech.name} className="w-16 h-16 mx-auto mb-3 object-contain" />
                <h3 className="font-heading mb-1">{tech.name}</h3>
                <p className="text-xs uppercase tracking-widest opacity-75">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Design & Build */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Website Design & Build
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Websites can no longer just make sales, as in this day and age they also need to be able to engage and entertain. This is where we can help.
            </p>
          </div>
          <div className="bg-white dark:bg-charcoal p-8 md:p-12 scroll-animate">
            <h3 className="text-2xl font-heading mb-6 text-charcoal dark:text-sandstone">Services Include:</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-brown-grey dark:text-text-dark-muted">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-charcoal dark:text-sandstone flex-shrink-0">check_circle</span>
                <span>Full custom website build</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-charcoal dark:text-sandstone flex-shrink-0">check_circle</span>
                <span>Marketing microsite build</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-charcoal dark:text-sandstone flex-shrink-0">check_circle</span>
                <span>Competition website build</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-charcoal dark:text-sandstone flex-shrink-0">check_circle</span>
                <span>On-going maintenance & support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mobile Application Development */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Mobile Application Development
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              We are expertise in mobile application development. Our highly skilled, experienced and professional developers create topnotch applications.
            </p>
          </div>
          <div className="bg-taupe/20 dark:bg-charcoal-light p-8 md:p-12 scroll-animate mb-12">
            <h3 className="text-2xl font-heading mb-6 text-charcoal dark:text-sandstone">Our Technologies:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mobileLanguages.map((lang, index) => (
                <div key={index} className={`${lang.bgColor} ${lang.textColor} p-4 text-center hover:opacity-90 transition-opacity duration-300`}>
                  <img src={lang.logo} alt={lang.name} className="w-12 h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm font-medium">{lang.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API & Payment Gateway */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              API & Payment Gateway Integration
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['RESTful API Development', 'Payment Gateway Integration', 'Razorpay Integration', 'PayU Integration', 'Third-party API Integration', 'Custom API Solutions'].map((item, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl text-center">
                <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone mb-4 block">cloud_sync</span>
                <h3 className="text-lg font-heading text-charcoal dark:text-sandstone">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center scroll-animate mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              Your website should be a bold reflection of the quality you provide.
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted mb-8">
              Here's how we make that happen:
            </p>
            <Link to="/contact">
              <button className="bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:opacity-90 transition-all">
                Get a proposal
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">WHAT WE OFFER</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              What We're Offering Creative
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Digital Service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className={`scroll-animate ${offering.bgColor} ${offering.textColor} p-6 md:p-8 hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{offering.icon}</span>
                <h3 className="text-xl font-heading mb-3">{offering.title}</h3>
                <p className="leading-relaxed opacity-90">{offering.description}</p>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Let our expert developers and designers build the digital solution your business deserves.
            </p>
            <Link to="/contact">
              <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                Start Your Project Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
