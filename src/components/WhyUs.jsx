import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const WhyUs = () => {
  const advantages = [
    {
      title: 'Expert Team',
      description: 'Industry-leading professionals with decades of combined experience in consulting and technology.',
    },
    {
      title: 'Innovation Driven',
      description: 'Cutting-edge solutions leveraging the latest technologies and best practices.',
    },
    {
      title: 'Rapid Delivery',
      description: 'Agile methodologies ensuring fast time-to-market without compromising quality.',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes for flawless execution.',
    },
    {
      title: 'Partnership Approach',
      description: 'We work alongside you as a trusted partner, not just a vendor.',
    },
    {
      title: 'Proven Results',
      description: 'Track record of delivering measurable ROI and business impact.',
    },
  ];

  return (
    <section className="section bg-section-light dark:bg-section-dark py-12 md:py-20 lg:py-24" id="why-us">
      <div className="container-custom px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">Why Choose Nexlogic?</h2>
            <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted">
              We combine strategic thinking, technical expertise, and a client-first approach to deliver exceptional value.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <ScrollAnimation key={index}>
              <div className="luxury-card hover:-translate-y-2 text-center p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm md:text-base text-text-muted dark:text-text-dark-muted leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mt-16 p-8 md:p-12 bg-card-light dark:bg-card-dark rounded-2xl border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading-md mb-4">Our Commitment to Excellence</h3>
                <p className="text-body mb-4">
                  We don't just deliver projects – we build lasting partnerships. Our commitment to your success goes beyond contract completion.
                </p>
                <ul className="space-y-3">
                  {[
                    '24/7 Support & Maintenance',
                    'Transparent Communication',
                    'Scalable Solutions',
                    'Continuous Improvement',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-text-muted dark:text-text-dark-muted">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-section-light dark:bg-section-dark rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-text-muted dark:text-text-dark-muted">On-Time Delivery Rate</div>
                </div>
                <div className="p-6 bg-section-light dark:bg-section-dark rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">5x</div>
                  <div className="text-text-muted dark:text-text-dark-muted">Average ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhyUs;
