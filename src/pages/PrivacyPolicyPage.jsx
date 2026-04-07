import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const PrivacyPolicyPage = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          {/* Modal */}
          <div className={`${theme === 'dark' ? 'bg-charcoal' : 'bg-white'} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl`}>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="sticky top-0 right-0 z-10 bg-charcoal dark:bg-sandstone text-white dark:text-charcoal p-3 hover:opacity-90 transition-opacity absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
              aria-label="Close"
            >
              <span className="text-2xl font-bold">×</span>
            </button>

            {/* Content */}
            <div className={`p-8 md:p-12 ${theme === 'dark' ? 'text-sandstone' : 'text-charcoal'}`}>
              <h1 className="text-4xl md:text-5xl font-heading font-light mb-8 mt-4">Privacy Policy</h1>
              
              <p className="text-sm text-text-muted dark:text-text-dark-muted mb-8">
                Last Updated: February 2026
              </p>

              {/* Quick Navigation */}
              <div className="bg-taupe/20 dark:bg-charcoal-light p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4 text-lg">Quick Navigation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['introduction', 'information', 'usage', 'protection', 'cookies', 'sharing', 'rights', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-left text-sm hover:underline text-charcoal dark:text-sandstone transition-colors"
                    >
                      • {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* 1. Introduction */}
              <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  1. Introduction
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Nexlogic Innovation Private Limited ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (naxlogic.com) and use our services.
                </p>
                <p className="text-sm leading-relaxed">
                  Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not access our website or use our services. By accessing and using our website, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                </p>
              </section>

              {/* 2. Information We Collect */}
              <section id="information" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  2. Information We Collect
                </h2>
                
                <h3 className="text-lg font-semibold mb-3 mt-6">2.1 Personal Information</h3>
                <p className="text-sm leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including but not limited to:
                </p>
                <ul className="text-sm space-y-2 mb-4 ml-4">
                  <li>• Full name, email address, and phone number</li>
                  <li>• Company information and business details</li>
                  <li>• Postal address and other contact details</li>
                  <li>• Information provided through contact forms and inquiries</li>
                  <li>• Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-sm leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="text-sm space-y-2 mb-4 ml-4">
                  <li>• IP address and browser type</li>
                  <li>• Pages visited and time spent on our website</li>
                  <li>• Referral source and device information</li>
                  <li>• Cookies and similar tracking technologies</li>
                  <li>• Geographic location (if permitted)</li>
                </ul>
              </section>

              {/* 3. How We Use Your Information */}
              <section id="usage" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  3. How We Use Your Information
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="text-sm space-y-2 mb-4 ml-4">
                  <li>• Providing, maintaining, and improving our services</li>
                  <li>• Responding to your inquiries and customer support requests</li>
                  <li>• Processing transactions and sending related confirmations</li>
                  <li>• Sending marketing communications and promotional materials (with your consent)</li>
                  <li>• Analyzing usage patterns to improve user experience</li>
                  <li>• Complying with legal obligations and protecting our rights</li>
                  <li>• Preventing fraud and ensuring security</li>
                </ul>
              </section>

              {/* 4. Data Protection */}
              <section id="protection" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  4. Data Protection & Security
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
                </p>
                <p className="text-sm leading-relaxed">
                  We use industry-standard encryption protocols (HTTPS) to protect sensitive information. Your payment information is processed by secure third-party payment processors who maintain PCI DSS compliance.
                </p>
              </section>

              {/* 5. Cookies & Tracking */}
              <section id="cookies" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  5. Cookies & Tracking Technologies
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your experience. These include:
                </p>
                <ul className="text-sm space-y-2 mb-4 ml-4">
                  <li>• Session cookies for maintaining login information</li>
                  <li>• Preference cookies for storing your theme and settings</li>
                  <li>• Analytics cookies for understanding user behavior</li>
                  <li>• Marketing cookies for personalized advertisements</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  You can control cookie settings through your browser. Please note that disabling cookies may affect website functionality.
                </p>
              </section>

              {/* 6. Information Sharing */}
              <section id="sharing" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  6. Information Sharing & Disclosure
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We do not sell your personal information to third parties. However, we may share information in the following circumstances:
                </p>
                <ul className="text-sm space-y-2 mb-4 ml-4">
                  <li>• With service providers who assist in our operations (under confidentiality agreements)</li>
                  <li>• When required by law or legal process</li>
                  <li>• To protect our rights, privacy, safety, or property</li>
                  <li>• In connection with a merger, acquisition, or asset sale</li>
                  <li>• With your explicit consent</li>
                </ul>
              </section>

              {/* 7. Your Privacy Rights */}
              <section id="rights" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  7. Your Privacy Rights
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="text-sm space-y-2 mb-4 ml-4">
                  <li>• Right to access your personal information</li>
                  <li>• Right to request correction or deletion of your data</li>
                  <li>• Right to opt-out of marketing communications</li>
                  <li>• Right to data portability</li>
                  <li>• Right to withdraw consent</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  To exercise any of these rights, please contact us using the information provided in the Contact Us section below.
                </p>
              </section>

              {/* 8. Contact Us */}
              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  8. Contact Us
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className={`${theme === 'dark' ? 'bg-charcoal-light' : 'bg-gray-100'} p-6 rounded-lg text-sm space-y-2`}>
                  <p><strong>Nexlogic Innovation Private Limited</strong></p>
                  <p>MANIT Incubation Center, Rolta<br />Bhopal, MP 462026, India</p>
                  <p><strong>Email:</strong> <a href="mailto:info@naxlogic.com" className="hover:underline text-charcoal dark:text-sandstone">info@naxlogic.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+919893220811" className="hover:underline text-charcoal dark:text-sandstone">+91 9893220811</a></p>
                  <p><strong>Response Time:</strong> We will respond to your inquiry within 7 business days.</p>
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of any material changes by posting the updated policy on our website with an updated "Last Updated" date. Your continued use of our website following the posting of revised Privacy Policy means that you accept and agree to the changes.
                </p>
              </section>

              {/* Close Button at Bottom */}
              <div className="mt-12 pt-8 border-t border-charcoal/20 dark:border-sandstone/20">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-charcoal dark:bg-sandstone text-white dark:text-charcoal py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicyPage;
