import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const TermsPage = () => {
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
              <h1 className="text-4xl md:text-5xl font-heading font-light mb-8 mt-4">Terms of Service</h1>
              
              <p className="text-sm text-text-muted dark:text-text-dark-muted mb-8">
                Last Updated: February 2026
              </p>

              {/* Quick Navigation */}
              <div className="bg-taupe/20 dark:bg-charcoal-light p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4 text-lg">Quick Navigation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['acceptance', 'use', 'intellectual', 'disclaimers', 'liability', 'indemnification', 'termination', 'contact'].map((section) => (
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

              {/* 1. Acceptance of Terms */}
              <section id="acceptance" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  By accessing and using the Nexlogic Innovation Private Limited website (naxlogic.com) and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              {/* 2. Use License */}
              <section id="use" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  2. Use License
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Nexlogic Innovation Private Limited website (naxlogic.com) for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• Modifying or copying the materials</li>
                  <li>• Using the materials for any commercial purpose or for any public display</li>
                  <li>• Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>• Removing any copyright or other proprietary notations from the materials</li>
                  <li>• Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </section>

              {/* 3. Disclaimer */}
              <section id="disclaimers" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  3. Disclaimer
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  The materials on the Nexlogic Innovation Private Limited website (naxlogic.com) are provided on an "as is" basis. Nexlogic Innovation Private Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              {/* 4. Limitations of Liability */}
              <section id="liability" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  4. Limitations of Liability
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  In no event shall Nexlogic Innovation Private Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Nexlogic Innovation Private Limited website, even if Nexlogic Innovation Private Limited or an authorized representative has been notified of the possibility of such damage.
                </p>
              </section>

              {/* 5. Accuracy of Materials */}
              <section id="intellectual" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  5. Accuracy of Materials & Intellectual Property
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  The materials appearing on the Nexlogic Innovation Private Limited website could include technical, typographical, or photographic errors. Nexlogic Innovation Private Limited does not warrant that any of the materials on its website are accurate, complete, or current. Nexlogic may make changes to the materials contained on its website at any time without notice.
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Nexlogic Innovation Private Limited or its content suppliers and is protected by international copyright laws.
                </p>
              </section>

              {/* 6. Links */}
              <section id="indemnification" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  6. Links & Third-Party Content
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Nexlogic Innovation Private Limited has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Nexlogic Innovation Private Limited of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              {/* 7. Modifications */}
              <section id="termination" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  7. Modifications & Termination
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Nexlogic Innovation Private Limited may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  Nexlogic Innovation Private Limited may terminate your access to the website at any time without notice for conduct that it believes violates the terms of service or the rights of others.
                </p>
              </section>

              {/* 8. Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  8. Governing Law
                </h2>
                <p className="text-sm leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Bhopal, Madhya Pradesh.
                </p>
              </section>

              {/* 9. Contact Us */}
              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  9. Contact Us
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className={`${theme === 'dark' ? 'bg-charcoal-light' : 'bg-gray-100'} p-6 rounded-lg text-sm space-y-2`}>
                  <p><strong>Nexlogic Innovation Private Limited</strong></p>
                  <p>MANIT Incubation Center, Rolta<br />Bhopal, MP 462026, India</p>
                  <p><strong>Email:</strong> <a href="mailto:info@naxlogic.com" className="hover:underline text-charcoal dark:text-sandstone">info@naxlogic.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+919893220811" className="hover:underline text-charcoal dark:text-sandstone">+91 9893220811</a></p>
                </div>
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

export default TermsPage;
