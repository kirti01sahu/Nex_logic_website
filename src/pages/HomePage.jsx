import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SEOHead from '../components/SEOHead';

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is naxlogic.com the official NexLogic website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. naxlogic.com is the official website of NexLogic Innovation Private Limited. The company is officially registered as "NexLogic Innovation Private Limited" and operates online at naxlogic.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is NexLogic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexLogic Innovation Private Limited is a technology company founded in 2026. NexLogic is a Software Development & AI Solutions company + Enterprise Recruitment Technology Provider. We deliver AI development, custom software, ERP/CRM solutions, cybersecurity, strategic consulting, AND AI-powered recruitment intelligence platform for enterprises, startups, and governments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does NexLogic offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexLogic offers: (1) Software: AI agentic development, custom software development, ERP/CRM implementation, cybersecurity, strategic consulting, and SaaS platforms. (2) Recruitment: AI resume screening, candidate ranking, online assessments, AI interview evaluation, and recruitment workflow automation through our AI Recruitment Intelligence Platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the NexLogic AI Recruitment Intelligence Platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexLogic AI Recruitment Intelligence Platform is an enterprise hiring automation solution. Features include: AI-powered resume screening and candidate ranking, bulk resume upload, semantic candidate matching, online assessments (MCQ, coding, AI interviews), hiring intelligence dashboards, and complete recruitment workflow automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is NexLogic Innovation Private Limited located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexLogic Innovation Private Limited is based at MANIT Incubation Center, Bhopal, Madhya Pradesh, India. Contact us at info@naxlogic.com or +91 9893220811.',
      },
    },
  ],
};

const HomePage = () => {
  return (
    <div>
      <SEOHead
        title="NexLogic Innovation Private Limited | AI, Software & Consulting | naxlogic.com"
        description="NexLogic Innovation Private Limited (naxlogic.com) — India's leading AI development, custom software, ERP/CRM and strategic consulting company. Search NexLogic and discover us."
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {/* Years of Experience */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">workspace_premium</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">7+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Years of Experience</span>
            </div>

            {/* Consulting Assignments */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">business_center</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">100+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Consulting </span>
            </div>

            {/* Software Solutions */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">code</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">50+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Software Solutions</span>
            </div>

            {/* AI Recruitment */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">groups</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">10k+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Candidates Screened</span>
            </div>

            {/* Government Clients */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">account_balance</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">10+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Government Clients</span>
            </div>

            {/* SaaS Downloads */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">download</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">27k+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">SaaS Clients</span>
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Universal Integration Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-[#E8DDD0] dark:bg-background-dark overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#2F3B35]/60 dark:text-text-dark-muted mb-4 block">ECOSYSTEM</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#2F3B35] dark:text-text-dark mb-6">Universal Integration</h2>
            <p className="text-lg text-[#2F3B35]/70 dark:text-text-dark-muted mt-6 max-w-2xl mx-auto leading-relaxed">
              Connecting the AI Engine to your existing operational core through secure, high-bandwidth pipelines.
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-3 gap-12 items-center justify-items-center relative py-16">
              {/* Top Center - Legacy ERP */}
              <div className="col-span-3 flex justify-center relative mb-8">
                {/* Vertical line from top card to center */}
                <div className="absolute top-full w-0.5 h-8 bg-gradient-to-b from-[#2F3B35]/20 to-transparent dark:from-white/20 left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-6 py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl lg:text-3xl">storage</span>
                  <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">LEGACY ERP</span>
                </div>
              </div>

              {/* Middle Row with horizontal connectors */}
              <div className="relative flex items-center justify-center">
                {/* Connector line to center */}
                <div className="absolute -right-6 w-6 h-0.5 bg-gradient-to-r from-[#2F3B35]/20 to-transparent dark:from-white/20"></div>
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-6 py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl lg:text-3xl">lan</span>
                  <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">ON-PREM</span>
                </div>
              </div>

              {/* Center - AI Engine */}
              <div className="flex items-center justify-center relative">
                {/* Vertical connector lines */}
                <div className="absolute -top-8 w-0.5 h-8 bg-gradient-to-b from-transparent to-[#2F3B35]/20 dark:to-white/20 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute -bottom-8 w-0.5 h-8 bg-gradient-to-t from-transparent to-[#2F3B35]/20 dark:to-white/20 left-1/2 transform -translate-x-1/2"></div>
                
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-[#1F1F1F] dark:bg-[#0F0F0F] rounded-full flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.9)] ring-2 sm:ring-3 md:ring-4 ring-white/20 dark:ring-white/30 relative z-10">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">grain</span>
                  <span className="font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase mt-1 sm:mt-2 md:mt-3 tracking-[0.2em] sm:tracking-[0.25em]">AI ENGINE</span>
                </div>
              </div>

              {/* Middle Right - CRM Hub */}
              <div className="relative flex items-center justify-center">
                {/* Connector line to center */}
                <div className="absolute -left-6 w-6 h-0.5 bg-gradient-to-l from-[#2F3B35]/20 to-transparent dark:from-white/20"></div>
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-6 py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl lg:text-3xl">groups</span>
                  <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">CRM HUB</span>
                </div>
              </div>

              {/* Bottom Center - SaaS Stack */}
              <div className="col-span-3 flex justify-center relative mt-8">
                {/* Vertical line from center to bottom card */}
                <div className="absolute bottom-full w-0.5 h-8 bg-gradient-to-t from-[#2F3B35]/20 to-transparent dark:from-white/20 left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-6 py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl lg:text-3xl">cloud_done</span>
                  <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">SAAS STACK</span>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center space-y-6">
              {/* Top - Legacy ERP */}
              <div className="w-full flex justify-center">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl">storage</span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">LEGACY ERP</span>
                </div>
              </div>
              <div className="w-0.5 h-4 bg-gradient-to-b from-[#2F3B35]/20 to-transparent dark:from-white/20"></div>

              {/* On-Prem */}
              <div className="w-full flex justify-center">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl">lan</span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">ON-PREM</span>
                </div>
              </div>
              <div className="w-0.5 h-4 bg-gradient-to-b from-[#2F3B35]/20 to-transparent dark:from-white/20"></div>

              {/* AI Engine */}
              <div className="w-full flex justify-center py-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#1F1F1F] dark:bg-[#0F0F0F] rounded-full flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.9)] ring-2 ring-white/20 dark:ring-white/30">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl font-light">grain</span>
                  <span className="font-bold text-[7px] sm:text-[8px] uppercase mt-1 tracking-[0.2em]">AI ENGINE</span>
                </div>
              </div>
              <div className="w-0.5 h-4 bg-gradient-to-b from-[#2F3B35]/20 to-transparent dark:from-white/20"></div>

              {/* CRM Hub */}
              <div className="w-full flex justify-center">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl">groups</span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">CRM HUB</span>
                </div>
              </div>
              <div className="w-0.5 h-4 bg-gradient-to-b from-[#2F3B35]/20 to-transparent dark:from-white/20"></div>

              {/* SaaS Stack */}
              <div className="w-full flex justify-center">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl">cloud_done</span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">SAAS STACK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Clarity Section — Helps Google associate naxlogic.com with NexLogic */}
      <section className="py-16 md:py-20 bg-[#2F3B35] dark:bg-[#1a2420]">
        <div className="container-custom px-4 md:px-6 max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-4 block">ABOUT NexLogic</span>
          <h2 className="text-3xl md:text-4xl font-heading font-light text-white mb-6">
            Technology Solutions & Recruitment Platform Company
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            <strong className="text-white">NexLogic Innovation Private Limited</strong> is a technology company headquartered in Bhopal, India. We operate as both:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-sandstone mb-3">Software & AI Solutions</h3>
              <p className="text-white/70 text-sm">Custom software development, AI agents, ERP/CRM systems, cloud solutions, SaaS platforms, and enterprise consulting.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sandstone mb-3">AI Recruitment Platform</h3>
              <p className="text-white/70 text-sm">Enterprise hiring automation with AI resume screening, candidate ranking, assessments, and recruitment workflow automation.</p>
            </div>
          </div>
          <p className="text-white/70 text-base leading-relaxed">
            NexLogic (operating at <strong className="text-white">naxlogic.com</strong>) combines software expertise with recruitment intelligence to deliver enterprise technology solutions and talent acquisition automation.
          </p>
        </div>
      </section>

      {/* FAQ Section — Voice & AI Search Optimised */}
      <section className="py-16 md:py-20 bg-[#E8DDD0] dark:bg-background-dark">
        <div className="container-custom px-4 md:px-6 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#2F3B35]/60 mb-4 block">FREQUENTLY ASKED</span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-[#2F3B35] dark:text-sandstone">Questions About NexLogic</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'Is naxlogic.com the NexLogic website?',
                a: 'Yes. naxlogic.com is the official website of NexLogic Innovation Private Limited. The brand name is NexLogic and the domain is naxlogic.com.',
              },
              {
                q: 'What is NexLogic?',
                a: 'NexLogic is a Software Development & AI Solutions company + Enterprise Recruitment Technology Provider. We build custom software, AI agents, ERP/CRM systems, SaaS platforms, strategic consulting, AND an AI Recruitment Intelligence Platform for enterprise hiring automation.',
              },
              {
                q: 'What is the NexLogic AI Recruitment Intelligence Platform?',
                a: 'Our AI Recruitment Platform automates the entire hiring workflow: AI resume screening, semantic candidate ranking, bulk uploads, online assessments (MCQ, coding, AI interviews), hiring intelligence dashboards, and workflow automation to reduce hiring time by up to 60%.',
              },
              {
                q: 'How can I contact NexLogic?',
                a: 'Reach NexLogic Innovation Private Limited at info@naxlogic.com or call +91 9893220811. Our office is at MANIT Incubation Center, Bhopal, Madhya Pradesh, India.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-white/70 dark:bg-charcoal-light rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#2F3B35] dark:text-sandstone mb-3">{q}</h3>
                <p className="text-[#2F3B35]/80 dark:text-text-dark-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
