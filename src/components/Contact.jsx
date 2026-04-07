import React, { useState } from 'react';
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
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section className="section bg-background-light dark:bg-background-dark py-12 md:py-20 lg:py-24" id="contact">
      <div className="container-custom px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">Get in Touch</h2>
            <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <ScrollAnimation>
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-[#2F3B35] focus:border-transparent transition-all"
                      placeholder="Subhash Maurya"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-[#2F3B35] focus:border-transparent transition-all"
                      placeholder="RkmDev@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-[#2F3B35] focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-[#2F3B35] focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-[#2F3B35] focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-[#2F3B35] focus:border-transparent resize-none transition-all"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                        : status.type === 'error'
                        ? 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                        : 'bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#2F3B35] hover:bg-[#1F2B25] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Information Cards */}
          <div className="space-y-6">
            <ScrollAnimation>
              <div className="bg-[#E8DDD0] p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#2F3B35] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2F3B35] text-lg mb-2">Email Us</h4>
                    <p className="text-[#2F3B35]/80 text-sm mb-1">
                      <a href="mailto:info@naxlogic.com" className="hover:text-[#2F3B35] transition-colors">info@naxlogic.com</a>
                    </p>
                    <p className="text-[#2F3B35]/80 text-sm">
                      <a href="mailto:support@naxlogic.com" className="hover:text-[#2F3B35] transition-colors">support@naxlogic.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-[#C9D8BF] p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#2F3B35] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl">call</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2F3B35] text-lg mb-2">Call Us</h4>
                    <p className="text-[#2F3B35]/80 text-sm mb-1">
                      <a href="tel:+917464048311" className="hover:text-[#2F3B35] transition-colors">+91 9893220811</a>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-[#A8B5A1] p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#2F3B35] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2F3B35] text-lg mb-2">Office Address</h4>
                    <p className="text-[#2F3B35]/80 text-sm mb-3">
                      MANIT Incubation Center, Rolta
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-gradient-to-br from-[#2F3B35] to-[#1F2B25] p-8 rounded-2xl shadow-xl text-white">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Business Hours</h4>
                    <p className="text-white/80 text-sm mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/80 text-sm mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-white/80 text-sm">Sunday: Closed</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <h4 className="font-semibold text-white text-lg mb-3">Schedule a Consultation</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Book a free 30-minute consultation call with our experts.
                  </p>
                  <button className="w-full bg-white text-[#2F3B35] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Book a Call
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
