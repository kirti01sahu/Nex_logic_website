import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import SEOHead from '../components/SEOHead';

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About NexLogic Innovation Private Limited',
  url: 'https://naxlogic.com/about',
  description: 'Learn about NexLogic Innovation Private Limited — a consulting-led AI and software company founded in 2026, operating at naxlogic.com.',
  mainEntity: {
    '@type': 'Organization',
    name: 'NexLogic Innovation Private Limited',
    alternateName: 'NexLogic',
    url: 'https://naxlogic.com',
    foundingDate: '2026',
  },
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      <SEOHead
        title="About Us — NexLogic Innovation Private Limited"
        description="NexLogic Innovation Private Limited (naxlogic.com) is a consulting-led technology company delivering AI, ERP/CRM, and custom software. Learn who we are, our mission and leadership."
        canonical="/about"
        schema={aboutSchema}
      />
      {/* Hero */}
      <section className="section relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`
          }}
        />
        
        <div className="container-custom relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6 text-white drop-shadow-lg">NexLogic Innovation Private Limited — Global Consulting & AI Technology Company</h1>
              <p className="text-xl text-white/90 leading-relaxed drop-shadow">
                NexLogic Innovation Private Limited is a consulting-driven technology company delivering AI-powered platforms, enterprise software, and strategic digital solutions. Formed in April 2026, NexLogic (naxlogic.com) helps organisations design digital strategy, build scalable systems, and achieve measurable business outcomes with confidence and security.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom max-w-5xl">
          <ScrollAnimation>
            <div className="space-y-8">
              <p className="text-body text-lg">
                NexLogic Innovation Private Limited is a consulting-led technology company that architects AI-driven platforms, enterprise-grade software, and strategic digital solutions for enterprises, startups, and public institutions. Founded in April 2026, NexLogic is focused on building practical, high-impact digital systems from day one.
              </p>
              <p className="text-body text-lg">
                Operating at the intersection of consulting, engineering, and artificial intelligence, NexLogic bridges the gap between strategic vision and execution. Our leadership teams modernise technology landscapes, optimise operations, and build future-ready digital ecosystems that enable organisations to compete, innovate, and grow in the digital economy.
              </p>
              <p className="text-body text-lg">
                As a consulting and technology partner, NexLogic delivers enterprise-grade solutions across IT consulting, software engineering, AI and automation, SaaS platforms, cloud transformation, cybersecurity, and e-governance. Our multidisciplinary teams combine strategic advisory with deep engineering capabilities to design secure, scalable, and high-performance systems aligned with real business objectives.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CEO Perspective */}
      <section className="section bg-section-light dark:bg-section-dark">
        <div className="container-custom max-w-5xl">
          <ScrollAnimation>
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-4">CEO’s Perspective</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="space-y-6 text-body text-lg">
              <p>
                Ritesh Pandey is a technology strategist, business leader, and entrepreneur who believes that real success lies at the intersection of strategy, execution, and scalable systems. With over 17+ years of experience across globally recognized firms such as PwC, EY, KPMG, Grant Thornton, and BDO, along with 4+ years of entrepreneurship expertise, he brings a powerful blend of global consulting exposure and real-world business execution. Having worked on enterprise and government transformation initiatives, he is known for turning complex business challenges into structured, scalable, and execution-ready systems that deliver measurable impact.
              </p>
              <p>
                Having witnessed firsthand where strategies fail — not in vision, but in execution — he founded NexLogic Innovation Private Limited with a clear mission: to bridge this critical gap. He believes that in today’s rapidly evolving digital economy, organizations must go beyond adopting technology and focus on building intelligent, future-ready systems that continuously evolve. His leadership combines consulting precision with entrepreneurial agility, enabling businesses to move faster, scale smarter, and create long-term value.
              </p>
              <p className="text-xl font-heading font-semibold text-black dark:text-sandstone text-center pt-2">
                “Execution creates value. Systems create scale. Discipline creates lasting success.”
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Our Consulting-Driven Approach</h2>
              <p className="text-body max-w-3xl mx-auto">
                Our approach is built on three core pillars:
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-[#E8DDD0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <h3 className="text-2xl font-heading font-semibold text-[#2F3B35] mb-4">
                  Strategy
                </h3>
                <p className="text-[#2F3B35]/80">
                  Designing digital and business transformation roadmaps aligned with organisational goals.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-[#C9D8BF] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <h3 className="text-2xl font-heading font-semibold text-[#2F3B35] mb-4">
                  Engineering
                </h3>
                <p className="text-[#2F3B35]/80">
                  Building scalable, secure, and high-performance software and platforms.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-[#A8B5A1] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <h3 className="text-2xl font-heading font-semibold text-[#2F3B35] mb-4">
                  Intelligence
                </h3>
                <p className="text-[#2F3B35]/80">
                  Embedding AI, automation, and data-driven capabilities into every solution.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <p className="text-body text-lg">
                We help organisations reduce operational complexity, strengthen cybersecurity, accelerate decision-making, and unlock new digital revenue streams. From enterprise IT transformation and AI-powered automation to GovTech and industry-specific platforms, we convert complex ideas into practical, high-impact solutions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-section-light dark:bg-section-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Industries We Serve</h2>
              <p className="text-body max-w-4xl mx-auto mb-8">
                NexLogic serves a diverse portfolio of clients across government, IT, BFSI, education, real estate, and enterprise sectors. Our proprietary SaaS platforms and AI-driven solutions empower organisations to optimise operations, enhance digital resilience, and deliver superior customer experiences.
              </p>
              <p className="text-xl font-semibold text-text-primary dark:text-text-dark">
                We measure success not by technology delivered, but by business value created — productivity gains, risk reduction, scalability, and sustainable growth.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6">Our Vision</h2>
              <p className="text-body text-lg mb-6">
                At NexLogic, innovation is not an option — it is a discipline. We continuously invest in AI, automation, cybersecurity, and emerging technologies to help organisations stay ahead of disruption.
              </p>
              <p className="text-xl font-heading font-semibold text-black">
                NexLogic Innovation Private Limited, founded in April 2026, is where consulting meets engineering and strategy becomes scalable technology.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
