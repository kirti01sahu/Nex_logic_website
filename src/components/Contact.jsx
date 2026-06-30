import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    // Replace with actual API call
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 1500);
  };

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Optionally focus the first input
      setTimeout(() => document.getElementById('name')?.focus(), 800);
    }
  };

  return (
    <>
      {/* SECTION 2 – CONTACT EXPERIENCE */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark border-b border-charcoal/5 dark:border-white/5" id="contact-section">
        <div className="container-custom px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Form (Order 2 on mobile, Order 1 on Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScrollAnimation>
                <div className="bg-white dark:bg-charcoal-light rounded-2xl p-8 md:p-12 shadow-warm border border-charcoal/5 dark:border-white/5">
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal dark:text-white mb-2">
                      Send an Inquiry
                    </h3>
                    <p className="text-sm text-brown-grey dark:text-text-dark-muted">
                      Please fill out the form below and we will get back to you promptly.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-brown-grey dark:text-text-dark-muted mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-xl bg-sandstone-light dark:bg-charcoal border border-transparent focus:bg-white dark:focus:bg-charcoal-light focus:border-sage-green focus:ring-1 focus:ring-sage-green text-charcoal dark:text-white placeholder-brown-grey/50 transition-all duration-300 outline-none shadow-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-brown-grey dark:text-text-dark-muted mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-xl bg-sandstone-light dark:bg-charcoal border border-transparent focus:bg-white dark:focus:bg-charcoal-light focus:border-sage-green focus:ring-1 focus:ring-sage-green text-charcoal dark:text-white placeholder-brown-grey/50 transition-all duration-300 outline-none shadow-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-brown-grey dark:text-text-dark-muted mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-sandstone-light dark:bg-charcoal border border-transparent focus:bg-white dark:focus:bg-charcoal-light focus:border-sage-green focus:ring-1 focus:ring-sage-green text-charcoal dark:text-white placeholder-brown-grey/50 transition-all duration-300 outline-none shadow-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-brown-grey dark:text-text-dark-muted mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-sandstone-light dark:bg-charcoal border border-transparent focus:bg-white dark:focus:bg-charcoal-light focus:border-sage-green focus:ring-1 focus:ring-sage-green text-charcoal dark:text-white placeholder-brown-grey/50 transition-all duration-300 outline-none shadow-sm"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-brown-grey dark:text-text-dark-muted mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-sandstone-light dark:bg-charcoal border border-transparent focus:bg-white dark:focus:bg-charcoal-light focus:border-sage-green focus:ring-1 focus:ring-sage-green text-charcoal dark:text-white placeholder-brown-grey/50 transition-all duration-300 outline-none shadow-sm"
                        placeholder="How can we partner with you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-brown-grey dark:text-text-dark-muted mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-5 py-4 rounded-xl bg-sandstone-light dark:bg-charcoal border border-transparent focus:bg-white dark:focus:bg-charcoal-light focus:border-sage-green focus:ring-1 focus:ring-sage-green text-charcoal dark:text-white placeholder-brown-grey/50 transition-all duration-300 outline-none shadow-sm resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {/* Status Message */}
                    {status.message && (
                      <div
                        className={`p-4 rounded-xl flex items-start gap-3 animate-fade-in ${
                          status.type === 'success'
                            ? 'bg-sage-green/10 border border-sage-green/20 text-[#2c3d31] dark:text-sage-green'
                            : status.type === 'loading'
                            ? 'bg-charcoal/5 dark:bg-white/5 text-charcoal dark:text-white'
                            : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800/30'
                        }`}
                      >
                        <span className="material-symbols-outlined mt-0.5">
                          {status.type === 'success' ? 'check_circle' : status.type === 'loading' ? 'hourglass_empty' : 'error'}
                        </span>
                        <span className="text-sm font-medium">{status.message}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status.type === 'loading'}
                      className={`w-full py-4.5 rounded-full font-bold text-xs uppercase tracking-widest-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                        status.type === 'loading'
                          ? 'bg-brown-grey text-white cursor-not-allowed'
                          : 'bg-charcoal dark:bg-sandstone text-white dark:text-charcoal hover:bg-dark-olive dark:hover:bg-white hover:-translate-y-1 hover:shadow-lg'
                      }`}
                    >
                      {status.type === 'loading' ? (
                        <>
                          <span className="animate-spin material-symbols-outlined text-sm">sync</span>
                          Processing...
                        </>
                      ) : (
                        'Let\'s Connect'
                      )}
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Side: Information Panel (Order 1 on mobile, Order 2 on Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <ScrollAnimation>
                <div className="bg-white dark:bg-charcoal-light rounded-2xl p-8 md:p-10 shadow-warm border border-charcoal/5 dark:border-white/5">
                  <h3 className="text-xl font-heading font-semibold text-charcoal dark:text-white mb-8 border-b border-charcoal/10 dark:border-white/10 pb-4">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-sandstone-light dark:bg-charcoal flex items-center justify-center flex-shrink-0 group-hover:bg-sage-green/20 transition-colors">
                        <span className="material-symbols-outlined text-sage-green">mail</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest font-bold text-brown-grey dark:text-text-dark-muted mb-1">Email</span>
                        <a href="mailto:info@naxlogic.com" className="block text-sm text-charcoal dark:text-sandstone hover:text-sage-green dark:hover:text-sage-green transition-colors mb-0.5">info@naxlogic.com</a>
                        <a href="mailto:support@naxlogic.com" className="block text-sm text-charcoal dark:text-sandstone hover:text-sage-green dark:hover:text-sage-green transition-colors">support@naxlogic.com</a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-sandstone-light dark:bg-charcoal flex items-center justify-center flex-shrink-0 group-hover:bg-sage-green/20 transition-colors">
                        <span className="material-symbols-outlined text-sage-green">call</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest font-bold text-brown-grey dark:text-text-dark-muted mb-1">Phone</span>
                        <a href="tel:+919893220811" className="block text-sm text-charcoal dark:text-sandstone hover:text-sage-green dark:hover:text-sage-green transition-colors">+91 9893220811</a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-sandstone-light dark:bg-charcoal flex items-center justify-center flex-shrink-0 group-hover:bg-sage-green/20 transition-colors">
                        <span className="material-symbols-outlined text-sage-green">location_on</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest font-bold text-brown-grey dark:text-text-dark-muted mb-1">Office Location</span>
                        <p className="text-sm text-charcoal dark:text-sandstone leading-relaxed">
                          MANIT Incubation Center, Rolta<br />
                          Bhopal, Madhya Pradesh
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-sandstone-light dark:bg-charcoal flex items-center justify-center flex-shrink-0 group-hover:bg-sage-green/20 transition-colors">
                        <span className="material-symbols-outlined text-sage-green">schedule</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest font-bold text-brown-grey dark:text-text-dark-muted mb-1">Business Hours</span>
                        <p className="text-sm text-charcoal dark:text-sandstone">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-charcoal dark:text-sandstone">Sat: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Why Contact NexLogic Card */}
              <ScrollAnimation>
                <div className="bg-dark-olive text-cream rounded-2xl p-8 md:p-10 shadow-warm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-6 relative z-10">
                    Why Contact NexLogic?
                  </h3>
                  
                  <ul className="space-y-4 relative z-10">
                    {[
                      "AI-Powered Recruitment Solutions",
                      "Enterprise Digital Transformation",
                      "Government Project Expertise",
                      "Dedicated Technical Support"
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sage-green text-sm">check_circle</span>
                        <span className="text-sm font-light">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3 – PARTNERSHIP CTA */}
      <section className="py-24 bg-cream dark:bg-charcoal-light border-b border-charcoal/5 dark:border-white/5">
        <div className="container-custom px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-white mb-6">
                Looking for a Strategic Technology Partner?
              </h2>
              <p className="text-sm md:text-base text-brown-grey dark:text-text-dark-muted leading-relaxed">
                NexLogic collaborates with enterprises, government organizations, universities, staffing agencies, and innovators to build modern recruitment solutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Enterprise Solutions */}
            <ScrollAnimation>
              <div className="bg-white dark:bg-charcoal rounded-2xl p-8 shadow-sm border border-charcoal/5 dark:border-white/5 hover:-translate-y-1 hover:shadow-card transition-all duration-300 h-full flex flex-col text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-sage-green/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-sage-green text-2xl">domain</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-charcoal dark:text-white mb-3">Enterprise Solutions</h3>
                <p className="text-xs text-brown-grey dark:text-text-dark-muted mb-8 flex-grow">
                  Learn how we can modernize your hiring process and implement AI-driven HR technology.
                </p>
                <button onClick={handleScrollToForm} className="w-full border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-colors">
                  Talk to Sales
                </button>
              </div>
            </ScrollAnimation>

            {/* Become a Partner */}
            <ScrollAnimation>
              <div className="bg-white dark:bg-charcoal rounded-2xl p-8 shadow-sm border border-charcoal/5 dark:border-white/5 hover:-translate-y-1 hover:shadow-card transition-all duration-300 h-full flex flex-col text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-sage-green/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-sage-green text-2xl">handshake</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-charcoal dark:text-white mb-3">Become a Partner</h3>
                <p className="text-xs text-brown-grey dark:text-text-dark-muted mb-8 flex-grow">
                  Explore strategic partnership opportunities, integrations, and collaborative ventures with NexLogic.
                </p>
                <button onClick={handleScrollToForm} className="w-full border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-colors">
                  Partner With Us
                </button>
              </div>
            </ScrollAnimation>

            {/* Candidate Support */}
            <ScrollAnimation>
              <div className="bg-white dark:bg-charcoal rounded-2xl p-8 shadow-sm border border-charcoal/5 dark:border-white/5 hover:-translate-y-1 hover:shadow-card transition-all duration-300 h-full flex flex-col text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-sage-green/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-sage-green text-2xl">support_agent</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-charcoal dark:text-white mb-3">Candidate Support</h3>
                <p className="text-xs text-brown-grey dark:text-text-dark-muted mb-8 flex-grow">
                  Need help with eGovTalent, your profile, or a recent job application?
                </p>
                <Link to="/egovtalent" className="block w-full">
                  <button className="w-full border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-colors">
                    Visit eGovTalent
                  </button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OFFICE LOCATION */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="container-custom px-4 md:px-6">
          <ScrollAnimation>
            <div className="bg-white dark:bg-charcoal-light rounded-3xl overflow-hidden shadow-card border border-charcoal/5 dark:border-white/5">
              <div className="grid md:grid-cols-2">
                {/* Map Details */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-sage-green mb-4 block">Headquarters</span>
                  <h3 className="text-3xl font-heading font-light text-charcoal dark:text-white mb-6">
                    Visit Our Office
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="text-sm font-bold text-charcoal dark:text-sandstone mb-1">Address</h4>
                      <p className="text-sm text-brown-grey dark:text-text-dark-muted leading-relaxed">
                        MANIT Incubation Center, Rolta<br />
                        Maulana Azad National Institute of Technology (MANIT) Campus<br />
                        Bhopal, Madhya Pradesh 462003
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-charcoal dark:text-sandstone mb-1">Quick Directions</h4>
                      <p className="text-sm text-brown-grey dark:text-text-dark-muted">
                        Located inside the prestigious MANIT campus. Please carry a valid ID for campus entry.
                      </p>
                    </div>
                  </div>
                  
                  <a href="https://maps.google.com/?q=MANIT+Incubation+Center+Rolta+Bhopal" target="_blank" rel="noopener noreferrer">
                    <button className="bg-charcoal dark:bg-sandstone text-white dark:text-charcoal hover:bg-dark-olive dark:hover:bg-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">directions</span>
                      Get Directions
                    </button>
                  </a>
                </div>
                
                {/* Map Embed */}
                <div className="h-[400px] md:h-auto w-full relative bg-sandstone/30 dark:bg-charcoal-light/50">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2163909772277!2d77.4001923!3d23.2352219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4269df9100eb%3A0xc68297d022ea1320!2sMaulana%20Azad%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NexLogic Office Location Map"
                    className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Contact;
