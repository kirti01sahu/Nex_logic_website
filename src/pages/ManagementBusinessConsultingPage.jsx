import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ManagementBusinessConsultingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-heading',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );

    gsap.fromTo(
      '.hero-subtext',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: 'power2.out' }
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

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen md:h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.7) 100%), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 text-center text-white relative z-10">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Management & Business Consulting
          </h1>
          <p className="hero-subtext text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            We work with leadership teams to reshape business models, streamline operations, and drive digital transformation across the enterprise.
          </p>
        </div>
      </section>

      {/* What We Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F5EFE7] dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-5xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              What We Deliver
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Strategic Transformation',
                description: 'Reimagine business models and drive organizational transformation.',
                bgColor: 'bg-[#E8DDD0]',
                textColor: 'text-[#2F3B35]'
              },
              {
                number: '02',
                title: 'Operational Excellence',
                description: 'Streamline processes, reduce costs, and improve performance.',
                bgColor: 'bg-[#C9D8BF]',
                textColor: 'text-[#2F3B35]'
              },
              {
                number: '03',
                title: 'Change Leadership',
                description: 'Navigate complex transformations with structured change management.',
                bgColor: 'bg-[#2F4538]',
                textColor: 'text-[#F7F3ED]'
              },
            ].map((item, index) => (
              <ScrollAnimation key={index}>
                <div className={`scroll-animate text-center ${item.bgColor} ${item.textColor} p-6 md:p-8 rounded-xl h-full flex flex-col`}>
                  <div className="text-5xl md:text-6xl font-heading font-bold opacity-20 mb-4">
                    {item.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed opacity-90 flex-grow">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="scroll-animate">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal dark:text-sandstone">
                Strategic Transformation for Enterprise Excellence
              </h2>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted mb-6 leading-relaxed">
                In a rapidly evolving business landscape, successful organizations need more than operational efficiency—they need strategic insight coupled with execution excellence. Our management consulting practice helps leadership teams reimagine their business models, optimize organizational structures, and navigate transformational change with confidence.
              </p>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
                We combine deep industry expertise, analytical rigor, and proven change management methodologies to deliver sustainable business transformation.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F5EFE7] dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Our Services
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Business Model Innovation',
                description: 'Redesign your business model to capture new market opportunities and create sustainable competitive advantage.',
                bgColor: 'bg-[#E8DDD0]',
                textColor: 'text-[#2F3B35]'
              },
              {
                title: 'Operational Excellence',
                description: 'Streamline processes, reduce costs, and improve performance through lean methodologies and continuous improvement.',
                bgColor: 'bg-[#C9D8BF]',
                textColor: 'text-[#2F3B35]'
              },
              {
                title: 'Organizational Design',
                description: 'Build agile, efficient organizational structures aligned with strategic objectives and market dynamics.',
                bgColor: 'bg-[#2F4538]',
                textColor: 'text-[#F7F3ED]'
              },
              {
                title: 'Digital Transformation',
                description: 'Guide organizations through comprehensive digital evolution, from strategy to execution and organizational change.',
                bgColor: 'bg-[#A8B5A1]',
                textColor: 'text-[#2F3B35]'
              },
              {
                title: 'Mergers & Integrations',
                description: 'Navigate complex M&A transactions with strategic due diligence, integration planning, and post-merger optimization.',
                bgColor: 'bg-[#E8DDD0]',
                textColor: 'text-[#2F3B35]'
              },
              {
                title: 'Change Management',
                description: 'Lead organizational change successfully through structured transformation programs and stakeholder engagement.',
                bgColor: 'bg-[#C9D8BF]',
                textColor: 'text-[#2F3B35]'
              },
            ].map((item, index) => (
              <ScrollAnimation key={index}>
                <div className={`scroll-animate ${item.bgColor} ${item.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300 h-full flex flex-col`}>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 flex-grow">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Our Approach
            </h2>
          </ScrollAnimation>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Strategic Assessment',
                description: 'Deep analysis of your business, market, competitive landscape, and organizational capabilities to identify opportunities and challenges.',
                bgColor: 'bg-[#E8DDD0]',
                textColor: 'text-[#2F3B35]'
              },
              {
                step: '02',
                title: 'Strategy Development',
                description: 'Co-create a compelling vision and roadmap for transformation aligned with your stakeholders and market realities.',
                bgColor: 'bg-[#C9D8BF]',
                textColor: 'text-[#2F3B35]'
              },
              {
                step: '03',
                title: 'Implementation Planning',
                description: 'Develop detailed implementation plans with clear milestones, resource allocation, and success metrics.',
                bgColor: 'bg-[#2F4538]',
                textColor: 'text-[#F7F3ED]'
              },
              {
                step: '04',
                title: 'Execution & Optimization',
                description: 'Guide implementation, manage change, and continuously optimize as your organization evolves.',
                bgColor: 'bg-[#A8B5A1]',
                textColor: 'text-[#2F3B35]'
              },
            ].map((item, index) => (
              <ScrollAnimation key={index}>
                <div className={`scroll-animate ${item.bgColor} ${item.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="text-4xl md:text-5xl font-heading font-bold opacity-40 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base opacity-90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-charcoal text-white px-4 md:px-6">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how strategic management consulting can unlock new growth and operational excellence.
            </p>
            <Link to="/contact">
              <button className="bg-sandstone text-charcoal text-base md:text-lg font-bold px-8 md:px-10 py-3 hover:opacity-90 transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal dark:text-sandstone">
              Join Our Consulting Team
            </h2>
            <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted mb-8">
              We're hiring consultants and strategists who are passionate about helping organizations transform. Build your career with a team that drives impact.
            </p>
            <Link to="/careers">
              <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-base md:text-lg font-bold px-8 md:px-10 py-3 hover:opacity-90 transition-all duration-300">
                View Open Positions
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ManagementBusinessConsultingPage;
