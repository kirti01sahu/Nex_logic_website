import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services does Nexlogic Innovation Private Limited offer?',
      answer: 'We offer a comprehensive range of services including Software Development, Digital Marketing, Cyber Security, IT Consulting, Management Consulting, Business Consulting, HR Consulting, E-Governance solutions, Market Research, and WhatsApp Marketing.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Small projects may take 4-8 weeks, while enterprise-level transformations typically range from 6-12 months. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you work with startups or only enterprises?',
      answer: 'We work with organizations of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to meet the specific needs and budget constraints of each client.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and retainer agreements. Pricing depends on project scope, duration, and resource requirements. Contact us for a customized quote.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and optimization. We believe in long-term partnerships and are committed to your continued success.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have extensive experience across multiple industries including Retail, Finance, Healthcare, Manufacturing, Technology, Education, Government, and Telecommunications. Our cross-industry expertise brings valuable insights to every project.',
    },
    {
      question: 'How do you ensure project success?',
      answer: 'We follow proven methodologies including Agile and DevOps practices, maintain transparent communication, conduct regular progress reviews, and leverage our experienced team of professionals. Our track record speaks for itself with a 98% client satisfaction rate.',
    },
    {
      question: 'Can you help with cloud migration?',
      answer: 'Absolutely! We specialize in cloud migration strategies for AWS, Azure, and Google Cloud. Our services include assessment, planning, migration, optimization, and ongoing cloud management.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-background-light dark:bg-background-dark" id="faq">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="text-body">
              Find answers to common questions about our services and how we work.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index}>
              <div className="luxury-card cursor-pointer" onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-heading font-semibold text-text-primary dark:text-text-dark flex-1">
                    {faq.question}
                  </h3>
                  <button
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-section-light dark:bg-section-dark flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-label={openIndex === index ? 'Close' : 'Open'}
                  >
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-text-muted dark:text-text-dark-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mt-16 text-center p-8 bg-section-light dark:bg-section-dark rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
              Still have questions?
            </h3>
            <p className="text-text-muted dark:text-text-dark-muted mb-6">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <a href="/contact">
              <button className="btn-primary">
                Contact Us
              </button>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQ;
