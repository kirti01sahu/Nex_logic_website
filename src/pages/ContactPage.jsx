import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <SEOHead
        title="Contact Nextlogic — Get in Touch"
        description="Contact Nextlogic Innovation Private Limited (naxlogic.com). Request a consultation for AI development, software solutions, ERP/CRM, or strategic consulting."
        canonical="/contact"
      />
      {/* Hero */}
      <section
        className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">Contact Us</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Let's discuss how we can help transform your business. Our team is ready to answer your questions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </div>
  );
};

export default ContactPage;
