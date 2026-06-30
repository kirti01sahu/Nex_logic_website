import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 bg-cream dark:bg-charcoal min-h-screen text-charcoal dark:text-[#E6DED3] transition-colors duration-300">
      <SEOHead
        title="Contact NexLogic — Start Your Recruitment Transformation Today"
        description="Contact NexLogic Innovation Private Limited (naxlogic.com). Reach out for strategic enterprise partnerships, custom AI-powered software, or dedicated support."
        canonical="/contact"
      />
      {/* Hero Banner */}
      <section
        className="relative min-h-[550px] md:min-h-[650px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.9) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2560&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom px-4 md:px-6 py-20 relative z-10 text-center max-w-4xl">
          <ScrollAnimation>
            <span className="text-[10px] md:text-xs uppercase tracking-widest-4xl font-bold text-sage-green mb-6 block">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Let's Build the <span className="text-sage-green font-normal">Future Together</span>
            </h1>
            <p className="text-sage-green uppercase tracking-widest-xl text-xs font-semibold mb-6">
              Start Your Recruitment Transformation Today
            </p>
            <p className="text-[#E6DED3] text-sm md:text-base lg:text-lg font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Whether you are an enterprise, a government organization, a recruitment partner, or a candidate, the NexLogic team is ready to help you navigate and succeed in your digital evolution.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-charcoal px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest-xl transition-all shadow-lg hover:scale-105"
              >
                Contact Our Team
              </button>
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest-xl transition-all hover:scale-105"
              >
                Book a Demo
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Content (Section 2, 3, 4) */}
      <Contact />
    </div>
  );
};

export default ContactPage;

