import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechCorp Global',
      rating: 5,
      text: 'NexLogic Innovation Private Limited transformed our entire digital infrastructure. Their expertise and dedication to our success exceeded all expectations. The ROI has been phenomenal.',
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'InnovateSoft',
      rating: 5,
      text: 'Working with NexLogic Innovation Private Limited was a game-changer for our organization. Their team brought innovative solutions and delivered results faster than we thought possible.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'VP of Operations',
      company: 'Global Retail Inc',
      rating: 5,
      text: 'The level of professionalism and expertise demonstrated by NexLogic Innovation Private Limited is unmatched. They truly understand our business needs and deliver solutions that work.',
    },
    {
      name: 'David Thompson',
      position: 'Director of IT',
      company: 'Financial Services Co',
      rating: 5,
      text: 'Exceptional service from start to finish. NexLogic Innovation Private Limited not only met our technical requirements but also provided strategic guidance that added tremendous value.',
    },
    {
      name: 'Lisa Anderson',
      position: 'Chief Marketing Officer',
      company: 'Digital Solutions Ltd',
      rating: 5,
      text: 'The digital marketing strategies implemented by NexLogic Innovation Private Limited increased our online presence by 300%. Their data-driven approach delivers measurable results.',
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-section-light dark:bg-section-dark py-12 md:py-20 lg:py-24" id="testimonials">
      <div className="container-custom px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">Client Testimonials</h2>
            <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card relative">
              {/* Main Testimonial */}
              <div className="text-center mb-8">
                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-text-muted dark:text-text-dark-muted italic leading-relaxed mb-6">
                  "{testimonials[activeTestimonial].text}"
                </p>

                {/* Client Info */}
                <div>
                  <h4 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-text-muted dark:text-text-dark-muted">
                    {testimonials[activeTestimonial].position} at {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-section-light dark:bg-section-dark hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-primary w-8'
                          : 'bg-border-light dark:bg-border-dark'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-section-light dark:bg-section-dark hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Client Logos */}
            <div className="mt-16">
              <p className="text-center text-text-muted dark:text-text-dark-muted text-sm uppercase tracking-wide mb-8">
                Trusted by Leading Organizations
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-section-light dark:bg-section-dark rounded-lg"
                  >
                    <p className="font-semibold text-text-primary dark:text-text-dark text-sm">{testimonial.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
