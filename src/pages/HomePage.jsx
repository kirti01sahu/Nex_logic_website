import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';

const HomePage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState('/landingpage_video3.mp4');

  return (
    <div className="bg-cream dark:bg-charcoal text-charcoal dark:text-[#E6DED3] transition-colors duration-300">
      <SEOHead
        title="NexLogic | AI, Custom Software & Strategic Consulting"
        description="NexLogic Innovation Private Limited is a technology and strategic consulting company delivering AI systems, custom software platforms, ERP/CRM implementations, and business solutions."
        canonical="/"
      />

      {/* SECTION 1 – FULL SCREEN CINEMATIC HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-[0.35]"
          >
            <source src="/landingpage_video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark transparent overlay */}
          <div className="absolute inset-0 bg-charcoal/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center px-4 mt-16 pt-16 max-w-5xl">
          <ScrollAnimation>
            <span className="text-[9px] md:text-xs uppercase tracking-widest-4xl font-bold text-sage-green mb-6 block">
              AI-POWERED RECRUITMENT SYSTEMS & TECHNOLOGY
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-light leading-[1.1] text-white mb-8">
              Architecting the Future Workforce<br />
              <span className="text-sage-green font-normal">Through Intelligent Recruitment</span>
            </h1>
            <p className="text-[#E6DED3] text-sm md:text-base lg:text-lg font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              eGovTalent, developed by NexLogic, is a premium AI-powered recruitment ecosystem built to unify enterprises, government organizations, HR teams, recruitment partners, and universities. We simplify complex hiring cycles while empowering candidates to discover and secure career-defining opportunities.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/egovtalent" className="w-full sm:w-auto">
                <button
                  className="w-full bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-charcoal px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest-xl transition-all shadow-lg hover:scale-105"
                >
                  Explore eGovTalent
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  className="w-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest-xl transition-all hover:scale-105"
                >
                  Partner With Us
                </button>
              </Link>
            </div>

            {/* Trust Statement */}
            <div className="max-w-2xl mx-auto pt-8 border-t border-white/10 text-center">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#D2C8BB]/80 font-mono font-medium">
                Orchestrating the future of work through trusted technology and intelligent recruitment partnerships.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* SECTION 2 – STORYTELLING SECTION (CORE SERVICES) */}
      <section className="py-24 md:py-36 bg-cream dark:bg-charcoal border-b border-charcoal/5 dark:border-white/5 px-4 md:px-6" id="what-we-do">
        <div className="container-custom max-w-4xl">
          <ScrollAnimation>
            <div className="text-center mb-20 md:mb-28">
              <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">Core Capabilities</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-charcoal dark:text-white leading-tight">
                Our Services.<br />
                <span className="italic font-light text-[#6F6A63] dark:text-[#D2C8BB]/80">Accelerating Digital Evolution.</span>
              </h2>
            </div>
          </ScrollAnimation>

          {/* Staggered core services reveal */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: "01", title: "AI Agentic Development", text: "Autonomous AI agents powered by LLMs (GPT-4, Claude, Llama) and multi-agent frameworks to automate complex workflows and operations.", path: "/development/ai-agentic" },
              { num: "02", title: "Custom Software", text: "End-to-end engineering of modern web, mobile, and cloud-native applications tailored to fit custom business requirements.", path: "/development/custom-software" },
              { num: "03", title: "ERP & CRM Solutions", text: "Resilient systems implementation, configuration, and custom integrations across SAP, Oracle, Salesforce, and Dynamics.", path: "/development/erp-crm" },
              { num: "04", title: "Cyber Security", text: "Comprehensive enterprise security audits, vulnerability assessments, penetration testing, compliance, and threat mitigation.", path: "/services/cyber-security" },
              { num: "05", title: "Strategic Consulting", text: "Expert guidance in business management, e-governance, sales growth architectures, process optimization, and change strategies.", path: "/services" },
              { num: "06", title: "WhatsApp Solutions", text: "Transforming customer engagement with official WhatsApp APIs, conversational chatbot agents, and broadcast managers.", path: "/services/whatsapp-marketing" }
            ].map((item, idx) => (
              <ScrollAnimation key={idx} threshold={0.1}>
                <Link to={item.path} className="block group">
                  <div className="border-b border-charcoal/10 dark:border-white/10 pb-6 flex items-start gap-4 group-hover:border-sage-green dark:group-hover:border-sage-green transition-colors duration-300">
                    <span className="text-xs font-mono text-sage-green font-bold mt-1">{item.num}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2 flex items-center gap-1">
                        <span>{item.title}</span>
                        <span className="material-symbols-outlined text-sm text-sage-green opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                      </h3>
                      <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-xs md:text-sm font-light leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – FEATURED PLATFORM */}
      <section className="py-24 md:py-36 bg-[#F5F1ED] dark:bg-charcoal-light px-4 md:px-6">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side info */}
            <ScrollAnimation>
              <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">Featured Platform</span>
              <h2 className="text-4xl md:text-5xl font-heading font-light text-charcoal dark:text-white mb-6 leading-tight">
                eGovTalent
              </h2>
              <p className="text-lg text-sage-green font-medium mb-6 leading-relaxed">
                The AI-Powered Recruitment Ecosystem Built For Modern Organizations.
              </p>
              <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-sm md:text-base font-light leading-relaxed mb-8">
                Designed to automate recruitment workflows, eGovTalent uses concept-based semantic processing, built-in testing IDEs, and virtual video interviews to identify ideal fits at scale.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/egovtalent">
                  <button className="bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-charcoal px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105">
                    Explore Platform
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setModalVideoSrc('/video_project.mp4');
                    setIsVideoModalOpen(true);
                  }}
                  className="flex items-center gap-2 bg-white dark:bg-charcoal text-charcoal dark:text-white border border-charcoal/10 dark:border-white/10 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-charcoal/80"
                >
                  <span className="material-symbols-outlined text-lg">play_circle</span>
                  <span>Watch Product Tour</span>
                </button>
              </div>
            </ScrollAnimation>
 
            {/* Right side Dashboard Glimpse */}
            <ScrollAnimation>
              <div className="relative group cursor-pointer" onClick={() => {
                setModalVideoSrc('/video_project.mp4');
                setIsVideoModalOpen(true);
              }}>
                <div className="absolute inset-0 bg-[#A8B5A2]/10 rounded-2xl filter blur-2xl transform translate-y-4 group-hover:scale-105 transition-all"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-charcoal/5 dark:border-white/5 bg-charcoal">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src="/video_project.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-charcoal/40">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-all shadow-xl">
                      <span className="material-symbols-outlined text-3xl">play_arrow</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* SECTION 5 – INDUSTRIES */}
      <section className="py-24 md:py-36 bg-[#F5F1ED] dark:bg-charcoal-light px-4 md:px-6">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">Target Markets</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white">
              Who We Serve
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Professionals", sub: "E-Governance Careers", desc: "Empowering E-Governance professionals to discover meaningful career opportunities, grow their expertise, and create lasting public impact." },
              { name: "Organizations", sub: "GovTech Recruitment", desc: "Helping government agencies, consulting firms, and system integrators connect with specialized E-Governance talent efficiently." },
              { name: "Consultants", sub: "Expert Advisory", desc: "Supporting domain experts and advisors in finding high-impact projects, collaborations, and leadership opportunities." },
              { name: "Startups", sub: "Emerging GovTech", desc: "Enabling GovTech innovators and emerging startups to access talent, partnerships, and opportunities within the Digital Governance ecosystem." }
            ].map((ind, i) => (
              <ScrollAnimation key={i}>
                <div className="bg-white dark:bg-charcoal rounded-xl p-8 shadow-warm border border-gray-100 dark:border-white/5 hover:shadow-card hover:border-[#A8B5A2]/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-sage-green font-bold mb-2 block">{ind.sub}</span>
                    <h3 className="text-xl font-heading font-semibold text-charcoal dark:text-white mb-4">{ind.name}</h3>
                    <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-xs md:text-sm font-light leading-relaxed">{ind.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-gray-50 dark:border-white/5 mt-6 flex justify-end">
                    <span className="material-symbols-outlined text-sage-green text-lg font-light">arrow_right_alt</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – RESULTS */}
      <section className="py-20 md:py-28 bg-[#384F3E] text-[#E6DED3] px-4 md:px-6">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest-4xl text-sage-green font-bold mb-4 block">Proven Efficacy</span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white">Engineering Value at Scale</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3x", desc: "Engineering Velocity" },
              { value: "80%", desc: "Operational Cost Cut" },
              { value: "99.9%", desc: "Service SLA Guarantee" },
              { value: "100%", desc: "Client Retention Rate" }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <span className="text-4xl md:text-5xl font-heading font-light text-white block mb-2">{metric.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#D2C8BB] font-semibold">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* PRODUCT TOUR MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-charcoal/95 backdrop-blur-md">
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-sage-green transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-4xl font-light">close</span>
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <video
              key={modalVideoSrc}
              autoPlay
              controls
              className="w-full h-full object-contain"
            >
              <source src={modalVideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
