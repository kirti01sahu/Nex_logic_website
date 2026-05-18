import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Link } from 'react-router-dom';

// Platform Page
export const PlatformPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Our Platform</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              A comprehensive ecosystem of tools and services designed to accelerate your digital transformation.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
    {/* Add platform content here */}
  </div>
);

// Industries Page
export const IndustriesPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Industries We Serve</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Specialized software solutions and AI recruitment technology across multiple industries.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    {/* Software Industries */}
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">SOFTWARE & IT SERVICES</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
            Technology Industries
          </h2>
          <p className="text-lg text-text-muted dark:text-text-dark-muted max-w-3xl mx-auto">
            Custom software development, cloud solutions, and AI-powered systems for tech-driven industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'IT & Software', icon: 'code' },
            { name: 'E-Commerce', icon: 'shopping_cart' },
            { name: 'FinTech', icon: 'account_balance' },
            { name: 'Healthcare IT', icon: 'health_and_safety' },
            { name: 'EdTech', icon: 'school' },
            { name: 'SaaS Platforms', icon: 'cloud' },
            { name: 'Enterprise Software', icon: 'business_center' },
            { name: 'Government Tech', icon: 'account_balance' },
          ].map((industry, idx) => (
            <ScrollAnimation key={idx}>
              <div className="p-6 bg-gradient-to-br from-taupe/20 to-taupe/5 dark:from-charcoal-light to-charcoal border border-taupe/20 dark:border-sandstone/10 rounded-lg hover:border-taupe/40 dark:hover:border-sandstone/30 transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-charcoal dark:text-sandstone mb-3 block">
                  {industry.icon}
                </span>
                <h3 className="text-sm md:text-base font-semibold text-charcoal dark:text-sandstone">
                  {industry.name}
                </h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Recruitment Industries */}
    <section className="py-16 md:py-24 bg-taupe/10 dark:bg-charcoal-light">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">RECRUITMENT INTELLIGENCE</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
            Industries We Recruit For
          </h2>
          <p className="text-lg text-text-muted dark:text-text-dark-muted max-w-3xl mx-auto">
            AI-powered candidate screening, assessment, and hiring automation for enterprise sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'Healthcare', icon: 'medical_services' },
            { name: 'Aviation', icon: 'flight' },
            { name: 'Engineering', icon: 'engineering' },
            { name: 'Manufacturing', icon: 'factory' },
            { name: 'Hospitality', icon: 'hotel' },
            { name: 'Finance', icon: 'monetization_on' },
            { name: 'Retail', icon: 'storefront' },
            { name: 'Logistics', icon: 'local_shipping' },
            { name: 'Government', icon: 'account_balance' },
            { name: 'Telecom', icon: 'phone_in_talk' },
            { name: 'Energy', icon: 'bolt' },
            { name: 'Real Estate', icon: 'home' },
          ].map((industry, idx) => (
            <ScrollAnimation key={idx}>
              <div className="p-6 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-sandstone/10 rounded-lg hover:shadow-lg dark:hover:shadow-lg hover:border-charcoal/20 dark:hover:border-sandstone/20 transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-charcoal dark:text-sandstone mb-3 block">
                  {industry.icon}
                </span>
                <h3 className="text-sm md:text-base font-semibold text-charcoal dark:text-sandstone">
                  {industry.name}
                </h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// Consulting Page
export const ConsultingPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Consulting Services</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Strategic consulting services to transform your business and drive sustainable growth.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// Resources Page
export const ResourcesPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Resources</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Whitepapers, case studies, and insights to help you stay ahead in the digital age.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// Products Page
export const ProductsPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Our Products & Solutions</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Enterprise-grade software products and AI-powered platforms designed to solve real business challenges.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    {/* AI Recruitment Platform */}
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">FEATURED PRODUCT</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
            AI Recruitment Intelligence Platform
          </h2>
          <p className="text-lg text-text-muted dark:text-text-dark-muted max-w-3xl mx-auto">
            Automate your entire recruitment workflow with advanced AI screening, assessments, and hiring intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <ScrollAnimation>
            <div className="space-y-6">
              {[
                { title: 'AI Resume Screening', desc: 'Automatically analyze and rank candidates from bulk uploads', icon: 'description' },
                { title: 'Intelligent Candidate Ranking', desc: 'Semantic matching to find the best-fit candidates', icon: 'trending_up' },
                { title: 'AI Hiring Summaries', desc: 'Auto-generated insights for faster decision making', icon: 'summarize' },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl text-charcoal dark:text-sandstone">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal dark:text-sandstone mb-1">{feature.title}</h3>
                    <p className="text-text-muted dark:text-text-dark-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="space-y-6">
              {[
                { title: 'Online Assessments', desc: 'MCQ tests, coding evaluations, and AI interviews', icon: 'quiz' },
                { title: 'Screening Dashboard', desc: 'Centralized view of all candidates and pipeline', icon: 'dashboard' },
                { title: 'Recruitment Automation', desc: 'Streamline workflows from screening to hiring', icon: 'automation' },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl text-charcoal dark:text-sandstone">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal dark:text-sandstone mb-1">{feature.title}</h3>
                    <p className="text-text-muted dark:text-text-dark-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        <div className="text-center">
          <Link to="/recruitment">
            <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-xs uppercase tracking-widest font-bold px-8 py-3 hover:opacity-90 transition-all">
              Learn More →
            </button>
          </Link>
        </div>
      </div>
    </section>

    {/* Other Products */}
    <section className="py-16 md:py-24 bg-taupe/10 dark:bg-charcoal-light">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone">
            Additional Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: 'BotMinds ADDU Agentic AI',
              desc: 'Next-generation AI agents for business automation and intelligent workflows.',
              icon: 'psychology',
              link: '/products/botminds'
            },
            {
              title: 'WhatsApp Business Solution',
              desc: 'Omnichannel marketing and customer engagement through WhatsApp integration.',
              icon: 'chat',
              link: '/services/whatsapp-marketing'
            },
          ].map((product, idx) => (
            <ScrollAnimation key={idx}>
              <Link to={product.link}>
                <div className="p-8 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-sandstone/10 rounded-xl hover:shadow-lg dark:hover:shadow-lg hover:border-charcoal/20 dark:hover:border-sandstone/20 transition-all duration-300 h-full">
                  <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone mb-4 block">
                    {product.icon}
                  </span>
                  <h3 className="text-2xl font-heading font-light text-charcoal dark:text-sandstone mb-3">
                    {product.title}
                  </h3>
                  <p className="text-text-muted dark:text-text-dark-muted mb-4">
                    {product.desc}
                  </p>
                  <span className="text-charcoal dark:text-sandstone font-semibold text-sm">View Details →</span>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// AI Recruitment Page
export const AIRecruitmentPage = () => (
  <div className="pt-20">
    <section 
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop')`
      }}
    >
      <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">AI Recruitment Intelligence Platform</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Enterprise hiring automation powered by artificial intelligence. Streamline recruitment, reduce hiring time, and find the right talent faster.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    {/* AI Resume Screening */}
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
      <div className="container-custom px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">CORE CAPABILITY</div>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
                AI Resume Screening & Candidate Shortlisting
              </h2>
              <p className="text-lg text-text-muted dark:text-text-dark-muted mb-6">
                Automatically analyze and rank candidates from large resume pools. Our semantic matching algorithm understands context, skills, and experience beyond keyword matching.
              </p>
              <ul className="space-y-3">
                {[
                  'Bulk resume upload & processing',
                  'Semantic candidate matching',
                  'Automatic candidate ranking',
                  'AI-generated scoring explanations',
                  'Bias reduction through AI fairness'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl text-charcoal dark:text-sandstone flex-shrink-0">check_circle</span>
                    <span className="text-text-muted dark:text-text-dark-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="bg-[#A8B5A1] dark:bg-[#2F4538] p-8 md:p-12 rounded-xl border-2 border-[#2F4538]/30 dark:border-[#A8B5A1]/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="material-symbols-outlined text-6xl text-[#2F3B35] dark:text-[#F7F3ED]">description</span>
              <p className="text-sm text-[#2F3B35]/80 dark:text-[#F7F3ED]/80 mt-4">
                Upload hundreds of resumes. Our AI engine analyzes each one, ranks candidates by fit, and surfaces top matches in seconds.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    {/* Hiring Intelligence */}
    <section className="py-16 md:py-24 bg-taupe/10 dark:bg-charcoal-light">
      <div className="container-custom px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="bg-[#2F4538] dark:bg-[#A8B5A1] p-8 md:p-12 rounded-xl border-2 border-[#A8B5A1]/30 dark:border-[#2F4538]/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="material-symbols-outlined text-6xl text-[#F7F3ED] dark:text-[#2F3B35]">insights</span>
              <p className="text-sm text-[#F7F3ED]/80 dark:text-[#2F3B35]/80 mt-4">
                Automatic hiring summaries provide context-aware insights into candidate strengths, experience alignment, and cultural fit indicators.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div>
              <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">DECISION SUPPORT</div>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
                Hiring Intelligence & Candidate Insights
              </h2>
              <p className="text-lg text-text-muted dark:text-text-dark-muted mb-6">
                AI-generated hiring summaries help hiring managers and recruiters make faster, more informed decisions. Get contextual insights for every candidate.
              </p>
              <ul className="space-y-3">
                {[
                  'AI-generated candidate summaries',
                  'Experience alignment scoring',
                  'Skills gap analysis',
                  'Cultural fit recommendations',
                  'Conversation starters for interviews'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl text-charcoal dark:text-sandstone flex-shrink-0">check_circle</span>
                    <span className="text-text-muted dark:text-text-dark-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    {/* Online Assessments */}
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">SKILL VALIDATION</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
            Online Assessments & AI Interviews
          </h2>
          <p className="text-lg text-text-muted dark:text-text-dark-muted max-w-3xl mx-auto">
            Conduct comprehensive assessments to validate candidate skills and cultural alignment before interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: 'MCQ & Knowledge Tests',
              desc: 'Domain-specific multiple-choice questions to assess technical knowledge and domain expertise.',
              icon: 'quiz'
            },
            {
              title: 'Coding Evaluations',
              desc: 'Real-time coding assessments for developers with auto-grading and performance metrics.',
              icon: 'code'
            },
            {
              title: 'AI Interview Evaluation',
              desc: 'Automated video interview analysis with AI scoring on communication, confidence, and relevance.',
              icon: 'videocam'
            },
          ].map((assessment, idx) => (
            <ScrollAnimation key={idx}>
              <div className={`p-6 md:p-8 ${idx % 2 === 0 ? 'bg-[#A8B5A1] dark:bg-[#2F4538]' : 'bg-[#2F4538] dark:bg-[#A8B5A1]'} border-2 ${idx % 2 === 0 ? 'border-[#2F4538]/30 dark:border-[#A8B5A1]/30' : 'border-[#A8B5A1]/30 dark:border-[#2F4538]/30'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                <span className={`material-symbols-outlined text-4xl ${idx % 2 === 0 ? 'text-[#2F3B35] dark:text-[#F7F3ED]' : 'text-[#F7F3ED] dark:text-[#2F3B35]'} mb-4 block`}>
                  {assessment.icon}
                </span>
                <h3 className={`text-xl font-semibold ${idx % 2 === 0 ? 'text-[#2F3B35] dark:text-[#F7F3ED]' : 'text-[#F7F3ED] dark:text-[#2F3B35]'} mb-3`}>
                  {assessment.title}
                </h3>
                <p className={`${idx % 2 === 0 ? 'text-[#2F3B35]/80 dark:text-[#F7F3ED]/80' : 'text-[#F7F3ED]/80 dark:text-[#2F3B35]/80'} text-sm`}>
                  {assessment.desc}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Enterprise Workflows */}
    <section className="py-16 md:py-24 bg-taupe/10 dark:bg-charcoal-light">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">ENTERPRISE SOLUTION</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
            Recruitment Workflow Automation
          </h2>
          <p className="text-lg text-text-muted dark:text-text-dark-muted max-w-3xl mx-auto">
            Streamline your entire recruitment pipeline with automated workflows, intelligent candidate routing, and centralized management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <ScrollAnimation>
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-light text-charcoal dark:text-sandstone">
                Streamlined Pipeline
              </h3>
              {[
                'Automated candidate screening & ranking',
                'Intelligent applicant tracking system',
                'Workflow automation & triggers',
                'Candidate communication automation',
                'Hiring team collaboration tools'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-xl text-charcoal dark:text-sandstone flex-shrink-0 mt-1">arrow_right</span>
                  <span className="text-text-muted dark:text-text-dark-muted">{item}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-light text-charcoal dark:text-sandstone">
                Centralized Dashboard
              </h3>
              {[
                'Real-time recruitment metrics & KPIs',
                'Candidate pipeline visualization',
                'Hiring team performance tracking',
                'Compliance & audit trail',
                'Multi-department coordination'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-xl text-charcoal dark:text-sandstone flex-shrink-0 mt-1">arrow_right</span>
                  <span className="text-text-muted dark:text-text-dark-muted">{item}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 md:py-24 bg-gradient-to-r from-charcoal to-charcoal dark:from-charcoal-light dark:to-charcoal text-white">
      <div className="container-custom px-4 md:px-6 text-center">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Schedule a demo of our AI Recruitment Intelligence Platform and see how you can reduce hiring time by 60% while improving candidate quality.
          </p>
          <Link to="/contact">
            <button className="bg-sandstone text-charcoal text-xs uppercase tracking-widest font-bold px-8 py-3 hover:opacity-90 transition-all">
              Request Demo
            </button>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// Careers Page
export const CareersPage = () => (
  <div className="pt-20">
    <section
      className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')`
      }}
    >
      <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">Join Our Team</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Be part of a dynamic team that's shaping the future of consulting and technology.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
    
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">OPEN POSITIONS</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
            Current Opportunities
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]', btnBg: 'bg-[#2F4538]', btnText: 'text-[#F7F3ED]' },
            { title: 'Marketing Manager', department: 'Marketing', location: 'San Francisco', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]', btnBg: 'bg-[#2F4538]', btnText: 'text-[#F7F3ED]' },
            { title: 'Business Consultant', department: 'Consulting', location: 'New York', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]', btnBg: 'bg-[#F7F3ED]', btnText: 'text-[#2F4538]' },
          ].map((job, index) => (
            <ScrollAnimation key={index}>
              <div className={`${job.bgColor} ${job.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4">
                  {job.title}
                </h3>
                <div className="space-y-2 mb-6 text-sm">
                  <p>
                    <span className="font-semibold">Department:</span> {job.department}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> {job.location}
                  </p>
                </div>
                <Link to="/contact">
                  <button className={`w-full ${job.btnBg} ${job.btnText} py-3 px-6 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity`}>
                    Apply Now
                  </button>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  </div>
);
