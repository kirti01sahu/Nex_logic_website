import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../firebase/config';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState('/landing_video.mp4');
  const trackRef = useRef(null);

  const screenshots = [
    {
      title: "eGovTalent Landing Page",
      desc: "Search-centric candidate landing page to explore e-governance job postings.",
      url: "/egov_job_portal_v3.png"
    },
    {
      title: "HR Hiring Dashboard",
      desc: "Track active jobs, shortlist thresholds, and candidate pipeline stages.",
      url: "/egov_hr_command_center_v3.png"
    },
    {
      title: "Job Portal",
      desc: "Semantic-match filter view for candidates to search and apply to positions.",
      url: "/egov_explore_jobs_v3.png"
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Booking your demo...' });

    try {
      const { error } = await supabase
        .from('demo_bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            organization: formData.organization,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setFormStatus({
        type: 'success',
        message: 'Your demo booking request has been submitted successfully! An administrator will contact you shortly.'
      });
      setFormData({ name: '', email: '', phone: '', organization: '' });
    } catch (error) {
      console.error('Error saving demo booking:', error);
      setFormStatus({
        type: 'error',
        message: 'There was a problem submitting your request. Please try again later.'
      });
    }
  };

  useEffect(() => {
    const updateOffset = () => {
      if (trackRef.current && trackRef.current.parentElement) {
        const parentWidth = trackRef.current.parentElement.clientWidth;
        if (parentWidth === 0) {
          // If parent is not yet fully rendered, retry in a moment
          setTimeout(updateOffset, 100);
          return;
        }
        const slideWidth = window.innerWidth < 640 ? 310 : window.innerWidth < 1024 ? 530 : 800;
        const offset = (parentWidth / 2) - (slideWidth / 2) - (activeSlide * slideWidth);
        trackRef.current.style.transform = `translateX(${offset}px)`;
      }
    };

    updateOffset();
    const timer = setTimeout(updateOffset, 50);
    window.addEventListener('resize', updateOffset);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateOffset);
    };
  }, [activeSlide]);

  return (
    <div className="bg-cream dark:bg-charcoal text-charcoal dark:text-[#E6DED3] transition-colors duration-300">
      <SEOHead
        title="NexLogic | AI-Powered Recruitment Ecosystem & Software Solutions"
        description="NexLogic Innovation Private Limited is a technology company behind eGovTalent, an AI-powered recruitment platform for enterprises and government hiring drives."
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
            <source src="/landing_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark transparent overlay */}
          <div className="absolute inset-0 bg-charcoal/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center px-4 mt-16 pt-16 max-w-5xl">
          <ScrollAnimation>
            <span className="text-[9px] md:text-xs uppercase tracking-widest-4xl font-bold text-sage-green mb-6 block">
              AI-POWERED RECRUITMENT ECOSYSTEM
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-light leading-[1.1] text-white mb-8">
              The Future of Recruitment<br />
              <span className="text-sage-green font-normal">Starts Here</span>
            </h1>
            <p className="text-[#E6DED3] text-sm md:text-base lg:text-lg font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              Built by NexLogic, eGovTalent helps governments, enterprises, universities, and staffing agencies automate recruitment through AI-powered hiring workflows.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a href="https://egovtalent.com/" className="w-full sm:w-auto">
                <button className="w-full bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-charcoal px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest-xl transition-all shadow-lg hover:scale-105">
                  Explore eGovTalent
                </button>
              </a>
              <button
                onClick={() => document.getElementById('book-demo').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest-xl transition-all hover:scale-105"
              >
                Book a Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8 border-t border-white/10">
              <div className="text-center border-r border-white/10">
                <span className="text-lg md:text-2xl font-heading font-light text-white block">100+</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#D2C8BB] font-medium">Organizations</span>
              </div>
              <div className="text-center border-r border-white/10">
                <span className="text-lg md:text-2xl font-heading font-light text-white block">80%</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#D2C8BB] font-medium">Faster Hiring</span>
              </div>
              <div className="text-center">
                <span className="text-lg md:text-2xl font-heading font-light text-white block">95%</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#D2C8BB] font-medium">AI Accuracy</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* SECTION 2 – STORYTELLING SECTION */}
      <section className="py-24 md:py-36 bg-cream dark:bg-charcoal border-b border-charcoal/5 dark:border-white/5 px-4 md:px-6">
        <div className="container-custom max-w-4xl">
          <ScrollAnimation>
            <div className="text-center mb-20 md:mb-28">
              <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">The Context</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-charcoal dark:text-white leading-tight">
                Recruitment Has Changed.<br />
                <span className="italic font-light text-[#6F6A63] dark:text-[#D2C8BB]/80">But Most Hiring Systems Have Not.</span>
              </h2>
            </div>
          </ScrollAnimation>

          {/* Staggered challenges reveal */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: "01", title: "Thousands of resumes.", text: "A deluge of applications inundates HR files, drowning qualified profiles in digital noise." },
              { num: "02", title: "Manual screening.", text: "Recruiters waste countless hours looking for matching skill sets, leading to fatigue and oversight." },
              { num: "03", title: "Delayed decisions.", text: "Long candidate screening pipelines delay selections, causing top tier applicants to accept other offers." },
              { num: "04", title: "Poor candidate visibility.", text: "Talent acquisition managers struggle to track candidate progress across disconnected stages." },
              { num: "05", title: "Disconnected workflows.", text: "Assessments, interview coordination, and follow-ups are scattered across emails and spreadsheets." },
              { num: "06", title: "Slow hiring.", text: "The entire hiring process stalls, directly impacting corporate productivity and growth." }
            ].map((item, idx) => (
              <ScrollAnimation key={idx} threshold={0.1}>
                <div className="border-b border-charcoal/10 dark:border-white/10 pb-6 flex items-start gap-4 hover:border-sage-green dark:hover:border-sage-green transition-colors duration-300">
                  <span className="text-xs font-mono text-sage-green font-bold mt-1">{item.num}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">{item.title}</h3>
                    <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-xs md:text-sm font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – INTRODUCING EGOVTALENT */}
      <section className="py-24 md:py-36 bg-[#F5F1ED] dark:bg-charcoal-light px-4 md:px-6">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side info */}
            <ScrollAnimation>
              <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">The Solution</span>
              <h2 className="text-4xl md:text-5xl font-heading font-light text-charcoal dark:text-white mb-6 leading-tight">
                Meet eGovTalent
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
                    window.location.href = 'https://egovtalent.com/';
                  }}
                  className="flex items-center gap-2 bg-white dark:bg-charcoal text-charcoal dark:text-white border border-charcoal/10 dark:border-white/10 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-charcoal/80"
                >
                  <span className="material-symbols-outlined text-lg">play_circle</span>
                  <span>Watch Product Tour</span>
                </button>
                <button
                  onClick={() => document.getElementById('book-demo').scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs uppercase tracking-widest font-bold text-charcoal dark:text-white hover:text-sage-green dark:hover:text-sage-green transition-colors py-3 px-2"
                >
                  Book Demo
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

      {/* SECTION 4 – PRODUCT SHOWCASE */}
      <section className="py-24 md:py-36 bg-cream dark:bg-charcoal overflow-hidden px-4 md:px-6">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">INTUITIVE & EASY TO USE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white">
              A Platform Loved by Recruiters and Candidates
            </h2>
          </div>

          {/* Large Horizontal Slider */}
          <div className="relative">
            <div className="showcase-slider-wrapper">
              <div className="showcase-slider-track" ref={trackRef}>
                {screenshots.map((screen, idx) => (
                  <div
                    key={idx}
                    className={`showcase-item ${idx === activeSlide ? 'active' : 'inactive'}`}
                  >
                    <div className="showcase-screenshot-container dark:bg-charcoal border-charcoal/5 dark:border-white/5">
                      <img
                        src={screen.url}
                        alt={screen.title}
                        className="showcase-screenshot-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-charcoal/10 dark:border-white/10 bg-white dark:bg-charcoal-light flex items-center justify-center text-charcoal dark:text-white hover:scale-105 transition-all shadow-sm"
                aria-label="Previous slide"
              >
                <span className="material-symbols-outlined font-light">arrow_back</span>
              </button>
              
              {/* Pagination */}
              <div className="flex gap-2">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeSlide ? 'bg-[#384F3E] dark:bg-sage-green w-6' : 'bg-charcoal/20 dark:bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx +1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-charcoal/10 dark:border-white/10 bg-white dark:bg-charcoal-light flex items-center justify-center text-charcoal dark:text-white hover:scale-105 transition-all shadow-sm"
                aria-label="Next slide"
              >
                <span className="material-symbols-outlined font-light">arrow_forward</span>
              </button>
            </div>

            {/* Description */}
            <div className="text-center mt-8 max-w-md mx-auto">
              <h3 className="text-xl font-heading font-semibold text-charcoal dark:text-white">
                {screenshots[activeSlide].title}
              </h3>
              <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-sm font-light mt-2 leading-relaxed">
                {screenshots[activeSlide].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – INDUSTRIES */}
      <section className="py-24 md:py-36 bg-[#F5F1ED] dark:bg-charcoal-light px-4 md:px-6">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">Target Adaptations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white">
              Built For Every Hiring Need
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Government", sub: "Recruitment Drives & Public Sector", desc: "Designed with state-grade safety and protocols to coordinate high-volume public sector tests and drives." },
              { name: "Enterprise", sub: "Large Scale & Bulk Hiring", desc: "Streamlines massive candidate intakes with automated testing pipelines and asynchronous video reviews." },
              { name: "Universities", sub: "Campus Placement & Admissions", desc: "Allows campus placement wings to log student records, host hiring companies, and publish results." },
              { name: "Staffing Agencies", sub: "Talent Sourcing & Management", desc: "Integrates parsing filters, assessment templates, and applicant metrics to satisfy agency stakeholders." }
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
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white">Transforming Recruitment At Scale</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "80%", desc: "Faster Screening" },
              { value: "70%", desc: "Less Manual Work" },
              { value: "50%", desc: "Faster Hiring" },
              { value: "100%", desc: "Centralized Hiring Process" }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <span className="text-4xl md:text-5xl font-heading font-light text-white block mb-2">{metric.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#D2C8BB] font-semibold">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – DEMO CTA */}
      <section className="py-24 md:py-36 relative text-[#E6DED3] overflow-hidden" id="book-demo">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Cinematic Office Team Collaboration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1F1F1F]/90 backdrop-blur-sm"></div>
        </div>

        <div className="container-custom relative z-10 max-w-xl px-4">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest-4xl text-sage-green font-bold mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white">See eGovTalent In Action</h2>
            <p className="text-sm text-[#D2C8BB] font-light mt-4">
              Discover how modern organizations hire smarter with AI-powered recruitment.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white/85 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sage-green focus:ring-1 focus:ring-sage-green"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white/85 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sage-green focus:ring-1 focus:ring-sage-green"
                  placeholder="name@organization.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white/85 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sage-green focus:ring-1 focus:ring-sage-green"
                  placeholder="+91 98932 20811"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-white/85 mb-2">Organization *</label>
                <input
                  type="text"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleFormChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sage-green focus:ring-1 focus:ring-sage-green"
                  placeholder="Company / Department Name"
                />
              </div>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg text-xs leading-relaxed ${
                    formStatus.type === 'success'
                      ? 'bg-green-900/30 text-green-200 border border-green-800'
                      : 'bg-red-900/30 text-red-200 border border-red-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="w-full bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-charcoal py-4 rounded-lg font-bold text-xs uppercase tracking-widest-xl transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                {formStatus.type === 'loading' ? 'Submitting...' : 'Book Free Demo'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 8 – NEXLOGIC (THE COMPANY BEHIND EGOVTALENT) */}
      <section className="py-24 md:py-36 bg-[#F5F1ED] dark:bg-charcoal-light px-4 md:px-6">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text info */}
            <ScrollAnimation>
              <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">The Organization</span>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-white mb-6">
                The Company Behind eGovTalent
              </h2>
              <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-sm md:text-base font-light leading-relaxed mb-6">
                eGovTalent is built and maintained by **NexLogic Innovation Private Limited**.
              </p>
              <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-sm md:text-base font-light leading-relaxed mb-8">
                NexLogic is a technology and innovation company specializing in building secure, enterprise-grade digital platforms and AI solutions for government bodies, educational networks, and corporate ecosystems globally.
              </p>
              <Link to="/about">
                <button className="bg-charcoal dark:bg-white text-white dark:text-charcoal px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90">
                  Know More About Us
                </button>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="relative">
                <div className="absolute inset-0 bg-[#A8B5A2]/10 rounded-2xl filter blur-xl transform translate-y-4"></div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                  alt="NexLogic Engineering Labs"
                  className="relative rounded-2xl shadow-xl border border-charcoal/5 dark:border-white/5 object-cover aspect-video w-full"
                />
              </div>
            </ScrollAnimation>
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
