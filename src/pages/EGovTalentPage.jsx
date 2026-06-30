import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollAnimation from '../components/ScrollAnimation';

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let observer;
    let animationFrameId;

    const startCounter = () => {
      const startTime = performance.now();
      const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * numericTarget);
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(numericTarget);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounter();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  const suffix = target.replace(/[0-9]/g, '');
  return (
    <span ref={elementRef} className="text-4xl md:text-5xl font-heading font-light text-white block mb-2">
      {count}{suffix}
    </span>
  );
};

const EGovTalentPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const trackRef = useRef(null);

  const screenshots = [
    {
      title: "eGovTalent Landing Page",
      desc: "Search-centric candidate landing page to explore e-governance job postings.",
      benefits: ["Unified job registry", "Instant search queries", "Mobile responsive search"],
      url: "/egov_job_portal_v3.png"
    },
    {
      title: "HR Hiring Dashboard",
      desc: "Track active jobs, shortlist thresholds, and candidate pipeline stages.",
      benefits: ["Real-time candidate stages", "Hiring funnel velocity", "Custom shortlist thresholds"],
      url: "/egov_hr_command_center_v3.png"
    },
    {
      title: "Candidate Explore Jobs",
      desc: "Semantic-match filter view for candidates to search and apply to positions.",
      benefits: ["Semantic skill matches", "Custom filter grids", "One-click application logs"],
      url: "/egov_explore_jobs_v3.png"
    },
    {
      title: "Client Collaboration Hub",
      desc: "Monitor recruitment funnels, review shared candidate profiles, and manage corporate client feedback.",
      benefits: ["Direct profile sharing", "Interactive funnel stages", "Structured corporate review"],
      url: "/egov_client_portal_v3.png"
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const updateOffset = () => {
      if (trackRef.current && trackRef.current.parentElement) {
        const parentWidth = trackRef.current.parentElement.clientWidth;
        if (parentWidth === 0) {
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
        title="eGovTalent | Flagship AI-Powered Recruitment Platform by NexLogic"
        description="Discover eGovTalent, India's flagship AI recruitment platform. Automate candidate sourcing, screening, assessments, and scheduling. Book a free demo today."
        canonical="/egovtalent"
      />

      {/* SECTION 1 – HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-cream dark:bg-charcoal text-charcoal dark:text-[#E6DED3] overflow-hidden">
        {/* Subtle grid graphic background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-12 px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 text-left">
              <ScrollAnimation>
                <span className="text-[10px] uppercase tracking-widest-4xl font-bold text-[#384F3E] dark:text-sage-green mb-4 block">
                  FLAGSHIP ENTERPRISE PRODUCT
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light leading-tight text-charcoal dark:text-white mb-6">
                  AI-Powered<br />
                  <span className="text-[#384F3E] dark:text-sage-green font-normal">Recruitment Ecosystem</span>
                </h1>
                <p className="text-[#6F6A63] dark:text-[#D2C8BB] text-sm md:text-base lg:text-lg font-light mb-8 max-w-xl leading-relaxed">
                  Streamline sourcing, screening, assessments, interviews and hiring through one intelligent platform.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/contact">
                    <button
                      className="bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-charcoal px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105"
                    >
                      Book Demo
                    </button>
                  </Link>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="flex items-center gap-2 bg-[#384F3E]/5 dark:bg-white/5 border border-charcoal/10 dark:border-white/20 hover:bg-charcoal/5 dark:hover:bg-white/10 text-charcoal dark:text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105"
                  >
                    <span className="material-symbols-outlined text-lg">play_circle</span>
                    <span>Watch Product Tour</span>
                  </button>
                  <button
                    onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs uppercase tracking-widest font-bold text-charcoal dark:text-white hover:text-sage-green dark:hover:text-sage-green transition-colors py-3.5 px-2"
                  >
                    Explore Features
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-charcoal/10 dark:border-white/10">
                  <div>
                    <span className="text-lg md:text-xl font-bold text-charcoal dark:text-white block">100+</span>
                    <span className="text-[8px] uppercase tracking-widest text-[#6F6A63] dark:text-[#D2C8BB]/80">Organizations</span>
                  </div>
                  <div>
                    <span className="text-lg md:text-xl font-bold text-charcoal dark:text-white block">80%</span>
                    <span className="text-[8px] uppercase tracking-widest text-[#6F6A63] dark:text-[#D2C8BB]/80">Faster Hiring</span>
                  </div>
                  <div>
                    <span className="text-lg md:text-xl font-bold text-charcoal dark:text-white block">95%</span>
                    <span className="text-[8px] uppercase tracking-widest text-[#6F6A63] dark:text-[#D2C8BB]/80">AI Accuracy</span>
                  </div>
                  <div>
                    <span className="text-lg md:text-xl font-bold text-[#384F3E] dark:text-[#A8B5A2] block">Enterprise</span>
                    <span className="text-[8px] uppercase tracking-widest text-[#6F6A63] dark:text-[#D2C8BB]/80">Ready</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Hero Mockup */}
            <div className="lg:col-span-6">
              <ScrollAnimation>
                <div className="relative">
                  <div className="absolute inset-0 bg-sage-green/5 rounded-2xl filter blur-3xl transform translate-y-6"></div>
                  <img
                    src="/egov_hr_dashboard.png"
                    alt="eGovTalent Product Mockup"
                    className="relative rounded-2xl shadow-2xl border border-charcoal/5 dark:border-white/5 w-full h-auto"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – WHY EGOVTALENT */}
      <section className="py-24 md:py-32 bg-cream dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-5xl">
          <ScrollAnimation>
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">The Value</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white">
                Recruitment Without Complexity
              </h2>
            </div>
          </ScrollAnimation>

          {/* Problem vs Solution Comparison Cards */}
          <div className="space-y-6">
            {[
              {
                prob: "Too Many Resumes",
                probText: "HR teams spend hours manually parsing thousands of incoming profiles, missing key talent due to fatigue.",
                sol: "AI Resume Screening",
                solText: "Parse, analyze, and semantically score thousands of applications instantly based on matching skills, not keywords."
              },
              {
                prob: "Manual Screening",
                probText: "Screening interviews are subjective, slow, and prone to coordinator bias and inconsistent evaluations.",
                sol: "Semantic Matches & Video Logs",
                solText: "eGovTalent automatically runs skill rankings and async video interviews with autogenerated metrics."
              },
              {
                prob: "Slow Hiring",
                probText: "Snail-paced communications cause high-value candidate dropoffs and delays in office production.",
                sol: "Automated Assessment IDEs",
                solText: "Dispatch HR Interviews or MCQ questionnaires instantly on candidate application to expedite the pipeline."
              },
              {
                prob: "Poor Visibility",
                probText: "Hiring status updates are fragmented across spreadsheets, emails, and chat folders.",
                sol: "Consolidated Pipelines",
                solText: "Track candidate stages, exam logs, video responses, and history records on one secure manager board."
              },
              {
                prob: "Disconnected Processes",
                probText: "Operating multiple tools for job posting, testing, video calls, and analytics increases administrative overhead.",
                sol: "Unified Workspace Portal",
                solText: "Handle job postings, bulk uploads, tests, reviews, and metric analytics inside a single platform."
              }
            ].map((card, i) => (
              <ScrollAnimation key={i}>
                <div className="grid md:grid-cols-2 bg-white dark:bg-[#1C1714] rounded-2xl overflow-hidden shadow-md border border-charcoal/5 dark:border-white/5 hover:border-sage-green/40 transition-all duration-300">
                  {/* Left: Problem */}
                  <div className="p-8 border-b md:border-b-0 md:border-r border-charcoal/10 dark:border-white/10 flex flex-col justify-center bg-[#FAF8F5] dark:bg-[#251F1C]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-lg text-[#C84B31] dark:text-[#E07A5F] select-none">error</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#C84B31] dark:text-[#E07A5F]">The Friction</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#1F1F1F] dark:text-white mb-2">{card.prob}</h4>
                    <p className="text-[#4E4A42] dark:text-[#D2C8BB] text-sm font-light leading-relaxed">{card.probText}</p>
                  </div>
                  {/* Right: Solution */}
                  <div className="p-8 bg-[#384F3E]/5 dark:bg-[#A8B5A2]/5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-lg text-[#384F3E] dark:text-[#A8B5A2] select-none">check_circle</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#384F3E] dark:text-[#A8B5A2]">eGovTalent Solution</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#384F3E] dark:text-[#A8B5A2] mb-2">{card.sol}</h4>
                    <p className="text-[#2B352E] dark:text-[#E6DED3] text-sm font-light leading-relaxed">{card.solText}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 4 – PRODUCT SHOWCASE */}
      <section className="py-24 md:py-32 bg-cream dark:bg-charcoal overflow-hidden px-4 md:px-6">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">INTUITIVE & EASY TO USE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white">
              A Platform Loved by Recruiters and Candidates
            </h2>
          </div>

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

      {/* SECTION 5 – CORE FEATURES */}
      <section className="py-24 md:py-32 bg-[#F5F1ED] dark:bg-charcoal-light px-4 md:px-6" id="features">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">Core Suite</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white">
              Everything Needed For Modern Recruitment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "psychology", title: "AI Resume Screening", desc: "Performs conceptual semantic matches over lists of profiles instantly." },
              { icon: "star_half", title: "Candidate Ranking", desc: "Auto scores applicant profiles to order them by suitability." },
              { icon: "code", title: "Online Assessments", desc: "Integrated sandbox compiling HR Interview and MCQ questions in real-time." },
              { icon: "video_chat", title: "Interview Management", desc: "Record async candidate responses and track manager calendar schedules." },
              { icon: "assignment_ind", title: "Applicant Tracking System", desc: "Custom pipeline builder to log applicants through stages." },
              { icon: "database", title: "Talent Database", desc: "Searchable internal registry containing historically received logs." },
              { icon: "analytics", title: "Analytics & Reports", desc: "Provides converted velocity indices and ROI metrics in PDF/Excel." },
              { icon: "admin_panel_settings", title: "Role Based Access", desc: "Assign clear action permissions for reviewers, admins, and students." }
            ].map((feat, i) => (
              <ScrollAnimation key={i}>
                <div className="bg-white dark:bg-charcoal p-8 rounded-xl border border-charcoal/5 dark:border-white/5 shadow-sm hover:shadow-card hover:border-[#A8B5A2]/30 transition-all duration-300 h-full flex flex-col">
                  <span className="material-symbols-outlined text-3xl text-sage-green mb-6">{feat.icon}</span>
                  <h3 className="text-sm font-bold text-charcoal dark:text-white mb-2">{feat.title}</h3>
                  <p className="text-[#6F6A63] dark:text-[#D2C8BB]/70 text-xs md:text-sm font-light leading-relaxed flex-grow">{feat.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 7 – INDUSTRIES */}
      <section className="py-24 md:py-32 bg-[#F5F1ED] dark:bg-charcoal-light px-4 md:px-6">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">Target Deployments</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-white">
              Built For Every Hiring Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Government",
                use: "State selection exams & public hiring registries.",
                benefits: "Compliant architectures and high concurrency logs.",
                icon: "account_balance"
              },
              {
                name: "Enterprises",
                use: "Corporate software developers & sales hires.",
                benefits: "Decreased hiring times and direct applicant sync.",
                icon: "business"
              },
              {
                name: "Universities",
                use: "Student placements cells & campus drives.",
                benefits: "Centralized logs and direct company invitations.",
                icon: "school"
              },
              {
                name: "Staffing Agencies",
                use: "Client profiles screening and agency portfolios.",
                benefits: "White-label metric logs and bulk uploads.",
                icon: "diversity_3"
              }
            ].map((ind, i) => (
              <ScrollAnimation key={i}>
                <div className="bg-white dark:bg-charcoal p-8 rounded-xl border border-charcoal/5 dark:border-white/5 shadow-sm hover:shadow-card hover:border-[#A8B5A2]/30 transition-all duration-300 h-full flex flex-col">
                  <span className="material-symbols-outlined text-3xl text-sage-green mb-6">{ind.icon}</span>
                  <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-4">{ind.name}</h3>
                  <div className="space-y-4 text-xs md:text-sm text-[#6F6A63] dark:text-[#D2C8BB]/70 font-light flex-grow">
                    <div>
                      <strong className="text-charcoal dark:text-white font-semibold block mb-1">Use Case:</strong>
                      {ind.use}
                    </div>
                    <div className="border-t border-charcoal/5 dark:border-white/5 pt-3">
                      <strong className="text-charcoal dark:text-white font-semibold block mb-1">Benefit:</strong>
                      {ind.benefits}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 – RESULTS & IMPACT */}
      <section className="py-20 md:py-28 bg-[#384F3E] text-[#E6DED3] px-4 md:px-6">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest-4xl text-sage-green font-bold mb-4 block">Proven Efficacy</span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white">Recruitment Outcomes That Matter</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "80%", desc: "Faster Screening" },
              { value: "70%", desc: "Less Manual Work" },
              { value: "50%", desc: "Faster Hiring" },
              { value: "100%", desc: "Centralized Process" }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <AnimatedCounter target={metric.value} />
                <span className="text-[10px] uppercase tracking-widest text-[#D2C8BB] font-semibold">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 11 – FAQ */}
      <section className="py-24 md:py-32 bg-cream dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest-4xl text-[#6F6A63] dark:text-[#D2C8BB]/60 font-bold mb-4 block">Platform FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does AI screening work?",
                a: "eGovTalent parses candidate resumes contextually, extracting skills, work details, and projects to match them semantically against your job description concepts instead of doing simple word matches."
              },
              {
                q: "Can I conduct assessments?",
                a: "Yes. Our platform includes an online assessment IDE supporting MCQ tests, aptitude questionnaires, and dynamic compiler code testing in 20+ programming languages."
              },
              {
                q: "Can universities use eGovTalent?",
                a: "Absolutely. eGovTalent has a dedicated campus deployment plan configured for placement wings to manage student registers and host recruiter assessment drives."
              },
              {
                q: "Does it support bulk hiring?",
                a: "Yes. The parsing engine allows bulk uploads of hundreds of resumes simultaneously, matching and ordering them in less than three minutes."
              },
              {
                q: "Is the platform customizable?",
                a: "Yes. Enterprise and government tiers support white-label portals, custom pipeline stages, role permissions, and integration APIs for existing HR setups."
              }
            ].map((faq, idx) => (
              <ScrollAnimation key={idx}>
                <div className="bg-white dark:bg-charcoal-light rounded-xl overflow-hidden border border-charcoal/5 dark:border-white/5 shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-sm md:text-base font-semibold text-charcoal dark:text-white">{faq.q}</h3>
                    <span className="material-symbols-outlined text-sage-green transition-transform duration-300">
                      {activeFaq === idx ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="px-6 pb-6 text-xs md:text-sm text-[#6F6A63] dark:text-[#D2C8BB]/70 font-light leading-relaxed border-t border-gray-50 dark:border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollAnimation>
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
              key="/video_project.mp4"
              autoPlay
              controls
              className="w-full h-full object-contain"
            >
              <source src="/video_project.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

    </div>
  );
};

export default EGovTalentPage;
