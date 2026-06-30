import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <SEOHead
        title="Contact NexLogic — Let's Build Something Great Together"
        description="Contact NexLogic Innovation Private Limited. Request a consultation for AI development, software solutions, ERP/CRM, strategic consulting, or partnership opportunities."
        canonical="/contact"
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[560px] md:min-h-[640px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        {/* Layered dark overlay – improves readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/75 to-charcoal/90 z-0" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)'
          }}
        />

        <div className="container-custom px-4 md:px-6 py-20 md:py-28 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#A8B5A2] mb-6 border border-[#A8B5A2]/30 px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/5">
                Enterprise · Partners · Government · Candidates
              </span>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white mb-6 leading-[1.1]">
                Let's Build Something<br />
                <span className="text-[#A8B5A2] font-normal italic">Great Together</span>
              </h1>

              {/* Sub-heading */}
              <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                Whether you're an enterprise client, government organization, recruitment partner, or talented candidate — our team is ready to craft solutions that move the needle.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact#contact-form">
                  <button className="bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-charcoal px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg">
                    Book a Demo
                  </button>
                </Link>
                <Link to="/contact#contact-form">
                  <button className="border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream dark:from-charcoal to-transparent z-10" />
      </section>

      {/* ── CONTACT FORM + INFO ── */}
      <Contact />
    </div>
  );
};

export default ContactPage;
