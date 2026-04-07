import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SecurityPage = () => {
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
              <h1 className="text-4xl md:text-5xl font-heading font-light mb-8 mt-4">Security Policy</h1>
              
              <p className="text-sm text-text-muted dark:text-text-dark-muted mb-8">
                Last Updated: February 2026
              </p>

              {/* Quick Navigation */}
              <div className="bg-taupe/20 dark:bg-charcoal-light p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4 text-lg">Quick Navigation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['overview', 'encryption', 'access', 'data', 'vulnerability', 'compliance', 'incident', 'contact'].map((section) => (
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

              {/* 1. Security Overview */}
              <section id="overview" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  1. Security Overview
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  At Nextlogic Innovation Private Limited, security is a top priority. We implement comprehensive security measures to protect your data and systems from unauthorized access, disclosure, alteration, and destruction.
                </p>
                <p className="text-sm leading-relaxed">
                  This Security Policy outlines the security practices and procedures we employ to safeguard your information and that of our organization.
                </p>
              </section>

              {/* 2. Encryption & Data Protection */}
              <section id="encryption" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  2. Encryption & Data Protection
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We use industry-standard encryption protocols to protect data in transit and at rest:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• TLS 1.2+ encryption for all data transmission</li>
                  <li>• AES-256 encryption for stored sensitive data</li>
                  <li>• Secure Socket Layer (SSL) certificates on all web properties</li>
                  <li>• End-to-end encryption for sensitive communications</li>
                  <li>• Regular encryption key rotation</li>
                </ul>
              </section>

              {/* 3. Access Control */}
              <section id="access" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  3. Access Control
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We implement strict access control measures to ensure only authorized personnel can access sensitive information:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• Multi-factor authentication (MFA) for all user accounts</li>
                  <li>• Role-based access control (RBAC) implementation</li>
                  <li>• Principle of least privilege for system access</li>
                  <li>• Regular access reviews and audits</li>
                  <li>• Immediate revocation of access upon separation</li>
                  <li>• Session timeouts and secure password policies</li>
                </ul>
              </section>

              {/* 4. Data Security Measures */}
              <section id="data" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  4. Data Security Measures
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Our data security practices include:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• Automated backup systems with secure storage</li>
                  <li>• Data redundancy across secure facilities</li>
                  <li>• Secure data disposal procedures</li>
                  <li>• Database activity monitoring and logging</li>
                  <li>• Intrusion detection and prevention systems</li>
                  <li>• Regular security patches and updates</li>
                </ul>
              </section>

              {/* 5. Vulnerability Management */}
              <section id="vulnerability" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  5. Vulnerability Management
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We proactively identify and remediate security vulnerabilities:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• Regular vulnerability assessments and penetration testing</li>
                  <li>• Continuous code review and security testing</li>
                  <li>• Responsible disclosure program</li>
                  <li>• Security patch management and deployment</li>
                  <li>• Threat intelligence monitoring</li>
                  <li>• Security incident response procedures</li>
                </ul>
              </section>

              {/* 6. Compliance & Standards */}
              <section id="compliance" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  6. Compliance & Standards
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Nextlogic Innovation Private Limited complies with major security standards and regulations:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• ISO 27001 Information Security Management</li>
                  <li>• GDPR (General Data Protection Regulation) compliance</li>
                  <li>• PCI DSS (Payment Card Industry Data Security Standard)</li>
                  <li>• SOC 2 Type II certifications</li>
                  <li>• OWASP secure coding practices</li>
                  <li>• Regular third-party security audits</li>
                </ul>
              </section>

              {/* 7. Incident Response */}
              <section id="incident" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  7. Incident Response & Reporting
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  In the event of a security incident, we follow established response procedures:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• Immediate incident detection and containment</li>
                  <li>• Root cause analysis and investigation</li>
                  <li>• Affected party notification within required timeframes</li>
                  <li>• Remediation and recovery measures</li>
                  <li>• Post-incident reviews and improvements</li>
                  <li>• Regulatory notification as required by law</li>
                </ul>
              </section>

              {/* 8. Employee Security */}
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  8. Employee Security Training
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  All Nextlogic Innovation Private Limited employees receive regular security training:
                </p>
                <ul className="text-sm space-y-2 ml-4 mb-4">
                  <li>• Annual security awareness training</li>
                  <li>• Phishing awareness and prevention</li>
                  <li>• Data protection best practices</li>
                  <li>• Secure development practices</li>
                  <li>• Incident reporting procedures</li>
                </ul>
              </section>

              {/* 9. Contact Us */}
              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-heading font-light mb-4 mt-8 border-b border-charcoal/20 dark:border-sandstone/20 pb-2">
                  9. Report Security Issues
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  If you discover a security vulnerability, please report it responsibly to our security team:
                </p>
                <div className={`${theme === 'dark' ? 'bg-charcoal-light' : 'bg-gray-100'} p-6 rounded-lg text-sm space-y-2`}>
                  <p><strong>Security Team</strong></p>
                  <p><strong>Email:</strong> <a href="mailto:security@naxlogic.com" className="hover:underline text-charcoal dark:text-sandstone">security@naxlogic.com</a></p>
                  <p><strong>General Inquiries:</strong> <a href="mailto:info@naxlogic.com" className="hover:underline text-charcoal dark:text-sandstone">info@naxlogic.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+919893220811" className="hover:underline text-charcoal dark:text-sandstone">+91 9893220811</a></p>
                  <p className="text-xs text-text-muted dark:text-text-dark-muted mt-4">
                    Please allow 48 hours for an initial response to security inquiries.
                  </p>
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

export default SecurityPage;
