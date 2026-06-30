import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

/* ─── shared input classes ─────────────────────────────────────────────── */
const inputCls =
  'w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-charcoal border border-gray-200 dark:border-white/10 ' +
  'text-charcoal dark:text-[#E6DED3] placeholder-[#6F6A63] dark:placeholder-[#D2C8BB]/50 text-sm ' +
  'focus:outline-none focus:ring-2 focus:ring-[#384F3E] focus:border-transparent ' +
  'hover:border-[#384F3E]/40 dark:hover:border-[#A8B5A2]/30 transition-all duration-200';

const labelCls =
  'block text-xs font-bold uppercase tracking-widest text-[#6F6A63] dark:text-[#D2C8BB]/70 mb-2';

/* ─── card classes ─────────────────────────────────────────────────────── */
const infoCls =
  'bg-white dark:bg-charcoal-light p-7 rounded-2xl shadow-warm border border-gray-100 dark:border-white/5 ' +
  'hover:shadow-card hover:border-[#A8B5A2]/30 transition-all duration-300 flex items-start gap-5';

const iconWrap =
  'flex-shrink-0 w-13 h-13 w-[52px] h-[52px] bg-[#384F3E]/10 dark:bg-[#A8B5A2]/10 rounded-xl ' +
  'flex items-center justify-center';

/* ─────────────────────────────────────────────────────────────────────── */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message…' });
    setTimeout(() => {
      setStatus({
        type: 'success',
        message:
          "Thank you! Your message has been sent successfully. We'll respond within one business day.",
      });
      setFormData({ name: '', email: '', phone: '', company: '', inquiry: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact-form"
      className="bg-cream dark:bg-charcoal py-20 md:py-28 px-4 md:px-6"
    >
      <div className="container-custom max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-3 block">
              Reach Out
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white mb-5 leading-tight">
              Get in Touch
            </h2>
            <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-sm md:text-base font-light leading-relaxed">
              Ready to transform your business? Tell us about your project and our team will connect with you promptly.
            </p>
          </div>
        </ScrollAnimation>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14 items-start">

          {/* ══ LEFT – Contact Form (wider) ══ */}
          <ScrollAnimation>
            <div className="lg:col-span-3 bg-white dark:bg-charcoal-light p-8 md:p-10 rounded-2xl shadow-card border border-gray-100 dark:border-white/5">
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold text-charcoal dark:text-white mb-2">
                  Send Us a Message
                </h3>
                <div className="w-10 h-0.5 bg-[#384F3E] rounded-full" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Row 1 – Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelCls}>Full Name *</label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      required className={inputCls}
                      placeholder="e.g. Aditya Sharma"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>Email Address *</label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required className={inputCls}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Row 2 – Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone Number</label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className={inputCls}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>Company / Organisation</label>
                    <input
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      className={inputCls}
                      placeholder="Your organisation name"
                    />
                  </div>
                </div>

                {/* Row 3 – Purpose of Inquiry (new dropdown) */}
                <div>
                  <label htmlFor="inquiry" className={labelCls}>Purpose of Inquiry *</label>
                  <div className="relative">
                    <select
                      id="inquiry" name="inquiry"
                      value={formData.inquiry} onChange={handleChange}
                      required
                      className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="" disabled>Select a purpose…</option>
                      <option value="Enterprise Solution">Enterprise Solution</option>
                      <option value="Product Demo">Product Demo</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Support">Support</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#6F6A63] text-lg">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Row 4 – Subject */}
                <div>
                  <label htmlFor="subject" className={labelCls}>Subject *</label>
                  <input
                    type="text" id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    required className={inputCls}
                    placeholder="Brief description of your enquiry"
                  />
                </div>

                {/* Row 5 – Message */}
                <div>
                  <label htmlFor="message" className={labelCls}>Message *</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    required rows="5"
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about your project, goals, or challenges…"
                  />
                </div>

                {/* Status */}
                {status.message && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium border ${
                      status.type === 'success'
                        ? 'bg-[#384F3E]/10 text-[#384F3E] dark:text-[#A8B5A2] border-[#384F3E]/20'
                        : status.type === 'error'
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800'
                        : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">
                        {status.type === 'success' ? 'check_circle' : status.type === 'error' ? 'error' : 'hourglass_top'}
                      </span>
                      {status.message}
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-[#384F3E] hover:bg-[#2F3B35] disabled:opacity-60 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {status.type === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                      Sending…
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-base">send</span>
                    </>
                  )}
                </button>

                {/* Response note */}
                <p className="text-center text-[11px] text-[#6F6A63] dark:text-[#D2C8BB]/50 font-light">
                  We typically respond within one business day.
                </p>
              </form>
            </div>
          </ScrollAnimation>

          {/* ══ RIGHT – Contact Info Cards ══ */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Email */}
            <ScrollAnimation>
              <div className={infoCls}>
                <div className={iconWrap}>
                  <span className="material-symbols-outlined text-[#384F3E] dark:text-[#A8B5A2] text-2xl">mail</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#384F3E] dark:text-[#A8B5A2] block mb-1">Email Us</span>
                  <a
                    href="mailto:info@naxlogic.com"
                    className="block text-sm font-semibold text-charcoal dark:text-white hover:text-[#384F3E] dark:hover:text-[#A8B5A2] transition-colors mb-0.5"
                  >
                    info@naxlogic.com
                  </a>
                  <a
                    href="mailto:support@naxlogic.com"
                    className="block text-sm text-[#6F6A63] dark:text-[#D2C8BB]/70 hover:text-[#384F3E] dark:hover:text-[#A8B5A2] transition-colors"
                  >
                    support@naxlogic.com
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Phone */}
            <ScrollAnimation>
              <div className={infoCls}>
                <div className={iconWrap}>
                  <span className="material-symbols-outlined text-[#384F3E] dark:text-[#A8B5A2] text-2xl">call</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#384F3E] dark:text-[#A8B5A2] block mb-1">Call Us</span>
                  <a
                    href="tel:+919893220811"
                    className="block text-sm font-semibold text-charcoal dark:text-white hover:text-[#384F3E] dark:hover:text-[#A8B5A2] transition-colors"
                  >
                    +91 9893220811
                  </a>
                  <p className="text-xs text-[#6F6A63] dark:text-[#D2C8BB]/50 mt-1 font-light">Mon–Sat, 9 AM – 6 PM IST</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Office */}
            <ScrollAnimation>
              <a
                href="https://maps.google.com/?q=MANIT+Incubation+Center+Bhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`${infoCls} group-hover:border-[#384F3E]/30 dark:group-hover:border-[#A8B5A2]/30`}>
                  <div className={iconWrap}>
                    <span className="material-symbols-outlined text-[#384F3E] dark:text-[#A8B5A2] text-2xl">location_on</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#384F3E] dark:text-[#A8B5A2] block mb-1">Office Address</span>
                    <p className="text-sm font-semibold text-charcoal dark:text-white leading-snug">
                      MANIT Incubation Center, Rolta
                    </p>
                    <p className="text-xs text-[#6F6A63] dark:text-[#D2C8BB]/50 mt-1 font-light flex items-center gap-1 group-hover:text-[#384F3E] dark:group-hover:text-[#A8B5A2] transition-colors">
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                      Open in Google Maps
                    </p>
                  </div>
                </div>
              </a>
            </ScrollAnimation>

            {/* Business Hours / Book a Call */}
            <ScrollAnimation>
              <div className="bg-gradient-to-br from-[#384F3E] to-[#2F3B35] p-7 rounded-2xl shadow-xl border border-white/5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-[52px] h-[52px] bg-white/15 backdrop-blur rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl">schedule</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#A8B5A2] block mb-2">Business Hours</span>
                    <p className="text-white/90 text-sm font-medium mb-0.5">Mon – Fri: 9:00 AM – 6:00 PM</p>
                    <p className="text-white/70 text-sm mb-0.5">Saturday: 10:00 AM – 4:00 PM</p>
                    <p className="text-white/50 text-xs">Sunday: Closed</p>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-5">
                  <p className="text-white font-semibold text-sm mb-1">Schedule a Consultation</p>
                  <p className="text-white/65 text-xs font-light mb-4 leading-relaxed">
                    Book a free 30-minute call with our experts and explore how we can help.
                  </p>
                  <button className="w-full bg-white hover:bg-[#A8B5A2] text-[#384F3E] hover:text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-base">event</span>
                    Book a Call
                  </button>
                </div>
              </div>
            </ScrollAnimation>

          </div>{/* end right col */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
