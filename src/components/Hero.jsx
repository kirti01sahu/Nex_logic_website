import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    // Small delay to ensure elements are rendered before animating
    const timer = setTimeout(() => {
      // Fade in animations on page load
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      
      tl.from('.hero-label', {
        opacity: 0,
        y: 20,
        duration: 0.6
      })
      .from('.hero-heading', {
        opacity: 0,
        y: 30,
        duration: 0.6
      }, '-=0.3')
      .from('.hero-subtext', {
        opacity: 0,
        y: 20,
        duration: 0.6
      }, '-=0.3')
      .from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.6
      }, '-=0.3');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
          alt="Landing Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Video/Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal/90"></div>
      </div>
      
      <div className="container-custom relative z-10 py-12 md:py-20 lg:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="text-center">
            {/* Label */}
            <div className="hero-label mb-6 md:mb-8">
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white"></span>
            </div>
            
            {/* Main Heading */}
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-light leading-tight tracking-tight text-white mb-6 md:mb-8 drop-shadow-lg">
              Nextlogic — Strategy Led Consulting.
              <span className="block mt-1 md:mt-2">
                Product Driven Execution.
              </span>
              <span className="block italic mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                "Strategy, Software, and SaaS in Sync"
              </span>
            </h1>

            {/* Subheading */}
            <p className="hero-subtext text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed font-light max-w-2xl mx-auto drop-shadow text-center">
              Nextlogic Innovation Private Limited (naxlogic.com) partners with enterprises, startups, and governments to design strategy, build software, and deploy AI‑powered platforms that deliver measurable business outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="bg-white text-charcoal text-xs md:text-sm uppercase tracking-widest-xl font-bold px-8 md:px-10 py-4 md:py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl w-full">
                  Executive Consultation
                </button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <button className="border-2 border-white/80 text-white text-xs md:text-sm uppercase tracking-widest-xl font-bold px-8 md:px-10 py-4 md:py-5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full">
                  Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
