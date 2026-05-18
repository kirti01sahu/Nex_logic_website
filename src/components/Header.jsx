import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import TextLogo from './TextLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Overview', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  const navigationOrder = [
    { name: 'Overview', path: '/' },
    { name: 'Our Story', path: '/about' },
    { type: 'dropdown' }, // What We Do dropdown placeholder
    { name: 'Careers', path: '/careers' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  const whatWeDoMenu = {
    consulting: {
      title: 'Consulting',
      items: [
        { name: 'Sales & Growth Consulting', path: '/services/sales-growth-consulting' },
        { name: 'Management & Business Consulting', path: '/services/management-consulting' },
        { name: 'Talent Acquisition Consulting', path: '/services/hr-consulting' },
        { name: 'E-Governance Consulting', path: '/services/e-governance-consulting' },
      ]
    },
    nextGen: {
      title: 'Next-Gen Solutions',
      icon: 'rocket_launch',
      main: { name: 'View All Development Services', path: '/development' },
      items: [
        { name: 'AI Agentic Development', path: '/development/ai-agentic', icon: 'psychology' },
        { name: 'Custom Software Development', path: '/development/custom-software', icon: 'devices' },
        { name: 'ERP / CRM', path: '/development/erp-crm', icon: 'account_tree' },
        { name: 'Cyber Security', path: '/services/cyber-security', icon: 'security' },
      ]
    },
    products: {
      title: 'Products',
      icon: 'inventory_2',
      main: { name: 'View All Products', path: '/services' },
      items: [
        { name: 'AI Recruitment Intelligence Platform', path: '/recruitment', icon: 'groups' },
        { name: 'BotMinds ADDU Agentic AI', path: '/products/botminds', icon: 'psychology' },
        { name: 'WhatsApp Business Solution', path: '/services/whatsapp-marketing', icon: 'chat' },
      ]
    }
  };

  const developmentMenu = {
    main: {
      title: 'Next-Gen Solutions',
      path: '/development',
      description: 'Explore all development services'
    },
    services: [
      { name: 'AI Agentic Development', path: '/development/ai-agentic', icon: 'psychology' },
      { name: 'Custom Software Development', path: '/development/custom-software', icon: 'devices' },
      { name: 'ERP / CRM', path: '/development/erp-crm', icon: 'account_tree' },
    ]
  };

  return (
    <header
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(to right, #1e1e1e 0%, #1e1e1e 100%)' 
          : 'linear-gradient(to right, #e8e8dc 0%, #e8e8dc 100%)'
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-charcoal/10 dark:border-sandstone/10 shadow-sm"
    >
      <div className="container-custom px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <TextLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 ml-16">
            {navigationOrder.map((item, index) => {
              if (item.type === 'dropdown') {
                // What We Do Dropdown
                return (
                  <div 
                    key="what-we-do"
                    onMouseEnter={() => setIsWhatWeDoOpen(true)}
                    onMouseLeave={() => setIsWhatWeDoOpen(false)}
                    className="relative"
                  >
                    <button className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 flex items-center gap-1 ${
                      isWhatWeDoOpen
                        ? 'text-charcoal dark:text-sandstone'
                        : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                    }`}>
                      What We Do
                    </button>

                    {/* Dropdown Menu */}
                    {isWhatWeDoOpen && (
                      <div className="absolute left-0 mt-0 w-80 bg-white dark:bg-charcoal rounded-2xl shadow-2xl border border-charcoal/10 dark:border-sandstone/10 py-4 z-50">
                        {/* Consulting Section */}
                        <div className="border-b border-charcoal/10 dark:border-sandstone/10">
                          <button
                            onClick={() => toggleSection('consulting')}
                            className="w-full flex items-center justify-between px-6 py-4 text-xs uppercase tracking-widest font-bold text-charcoal dark:text-sandstone hover:bg-taupe/20 dark:hover:bg-charcoal-light transition-colors"
                          >
                            <span>Consulting</span>
                            <svg 
                              className={`w-4 h-4 transition-transform ${expandedSection === 'consulting' ? 'rotate-180' : ''}`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {expandedSection === 'consulting' && (
                            <div className="space-y-0 pb-2">
                              {whatWeDoMenu.consulting.items.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="block px-6 py-3 text-sm text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-200"
                                  onClick={() => {
                                    setIsWhatWeDoOpen(false);
                                    setExpandedSection(null);
                                  }}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Next-Gen Solutions Section */}
                        <div className="border-b border-charcoal/10 dark:border-sandstone/10">
                          <button
                            onClick={() => toggleSection('nextgen')}
                            className="w-full flex items-center justify-between px-6 py-4 text-xs uppercase tracking-widest font-bold text-charcoal dark:text-sandstone hover:bg-taupe/20 dark:hover:bg-charcoal-light transition-colors"
                          >
                            <span>Next-Gen Solutions</span>
                            <svg 
                              className={`w-4 h-4 transition-transform ${expandedSection === 'nextgen' ? 'rotate-180' : ''}`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {expandedSection === 'nextgen' && (
                            <div className="pb-2">
                              <Link
                                to={whatWeDoMenu.nextGen.main.path}
                                className="block px-6 py-4 mb-2 bg-taupe/20 dark:bg-charcoal-light hover:bg-taupe/40 dark:hover:bg-charcoal-light/80 transition-colors duration-200 mx-3 rounded-xl"
                                onClick={() => {
                                  setIsWhatWeDoOpen(false);
                                  setExpandedSection(null);
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-2xl text-[#2F4538] dark:text-[#C9D8BF]">
                                    rocket_launch
                                  </span>
                                  <span className="text-sm font-medium text-charcoal dark:text-sandstone">
                                    {whatWeDoMenu.nextGen.main.name}
                                  </span>
                                </div>
                              </Link>
                              <div className="space-y-0">
                                {whatWeDoMenu.nextGen.items.map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    className="flex items-center gap-3 px-6 py-3 text-sm text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-200"
                                    onClick={() => {
                                      setIsWhatWeDoOpen(false);
                                      setExpandedSection(null);
                                    }}
                                  >
                                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Products Section */}
                        <div>
                          <button
                            onClick={() => toggleSection('products')}
                            className="w-full flex items-center justify-between px-6 py-4 text-xs uppercase tracking-widest font-bold text-charcoal dark:text-sandstone hover:bg-taupe/20 dark:hover:bg-charcoal-light transition-colors"
                          >
                            <span>Products</span>
                            <svg 
                              className={`w-4 h-4 transition-transform ${expandedSection === 'products' ? 'rotate-180' : ''}`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {expandedSection === 'products' && (
                            <div className="pb-2">
                              <Link
                                to={whatWeDoMenu.products.main.path}
                                className="block px-6 py-4 mb-2 bg-taupe/20 dark:bg-charcoal-light hover:bg-taupe/40 dark:hover:bg-charcoal-light/80 transition-colors duration-200 mx-3 rounded-xl"
                                onClick={() => {
                                  setIsWhatWeDoOpen(false);
                                  setExpandedSection(null);
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-2xl text-[#2F4538] dark:text-[#C9D8BF]">
                                    inventory_2
                                  </span>
                                  <span className="text-sm font-medium text-charcoal dark:text-sandstone">
                                    {whatWeDoMenu.products.main.name}
                                  </span>
                                </div>
                              </Link>
                              <div className="space-y-0">
                                {whatWeDoMenu.products.items.map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    className="flex items-center gap-3 px-6 py-3 text-sm text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-200"
                                    onClick={() => {
                                      setIsWhatWeDoOpen(false);
                                      setExpandedSection(null);
                                    }}
                                  >
                                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                // Regular navigation items
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'text-charcoal dark:text-sandstone'
                        : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="block p-1.5 md:p-2 rounded-lg hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 md:w-5 h-4 md:h-5 text-brown-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 md:w-5 h-4 md:h-5 text-sandstone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            <Link to="/contact" className="hidden md:block">
              <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-xs uppercase tracking-widest-xl font-bold px-6 md:px-8 py-2.5 md:py-3 hover:opacity-90 transition-all">
                Inquire
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 md:p-2 rounded-lg hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 md:w-6 h-5 md:h-6 text-charcoal dark:text-sandstone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 md:w-6 h-5 md:h-6 text-charcoal dark:text-sandstone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-charcoal/10 dark:border-sandstone/10">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  location.pathname === '/'
                    ? 'text-charcoal dark:text-sandstone'
                    : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                }`}
              >
                Overview
              </Link>

              <Link
                to="/about"
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  location.pathname === '/about'
                    ? 'text-charcoal dark:text-sandstone'
                    : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                }`}
              >
                Our Story
              </Link>

              {/* What We Do - Collapsible */}
              <div>
                <button
                  onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium transition-colors duration-300 text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone"
                >
                  <span>What We Do</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isWhatWeDoOpen && (
                  <div className="mt-3 ml-4 space-y-3 pb-2">
                    {/* Consulting */}
                    <div>
                      <button
                        onClick={() => setMobileExpandedSection(mobileExpandedSection === 'consulting' ? null : 'consulting')}
                        className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-charcoal dark:text-sandstone hover:opacity-80 transition-opacity"
                      >
                        <span>Consulting</span>
                        <svg 
                          className={`w-3 h-3 transition-transform ${mobileExpandedSection === 'consulting' ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpandedSection === 'consulting' && (
                        <div className="mt-2 ml-3 space-y-2">
                          {whatWeDoMenu.consulting.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              className="block text-xs text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone transition-colors py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Next-Gen Solutions */}
                    <div>
                      <button
                        onClick={() => setMobileExpandedSection(mobileExpandedSection === 'nextgen' ? null : 'nextgen')}
                        className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-charcoal dark:text-sandstone hover:opacity-80 transition-opacity"
                      >
                        <span>Next-Gen Solutions</span>
                        <svg 
                          className={`w-3 h-3 transition-transform ${mobileExpandedSection === 'nextgen' ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpandedSection === 'nextgen' && (
                        <div className="mt-2 ml-3 space-y-2">
                          <Link
                            to={whatWeDoMenu.nextGen.main.path}
                            className="block text-xs font-medium text-charcoal dark:text-sandstone bg-taupe/30 dark:bg-charcoal-light px-3 py-2 rounded-lg"
                          >
                            {whatWeDoMenu.nextGen.main.name}
                          </Link>
                          {whatWeDoMenu.nextGen.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              className="flex items-center gap-2 text-xs text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone transition-colors py-1"
                            >
                              <span className="material-symbols-outlined text-sm">{item.icon}</span>
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Products */}
                    <div>
                      <button
                        onClick={() => setMobileExpandedSection(mobileExpandedSection === 'products' ? null : 'products')}
                        className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-charcoal dark:text-sandstone hover:opacity-80 transition-opacity"
                      >
                        <span>Products</span>
                        <svg 
                          className={`w-3 h-3 transition-transform ${mobileExpandedSection === 'products' ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpandedSection === 'products' && (
                        <div className="mt-2 ml-3 space-y-2">
                          <Link
                            to={whatWeDoMenu.products.main.path}
                            className="block text-xs font-medium text-charcoal dark:text-sandstone bg-taupe/30 dark:bg-charcoal-light px-3 py-2 rounded-lg"
                          >
                            {whatWeDoMenu.products.main.name}
                          </Link>
                          {whatWeDoMenu.products.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              className="flex items-center gap-2 text-xs text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone transition-colors py-1"
                            >
                              <span className="material-symbols-outlined text-sm">{item.icon}</span>
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/careers"
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  location.pathname === '/careers'
                    ? 'text-charcoal dark:text-sandstone'
                    : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                }`}
              >
                Careers
              </Link>

              <Link
                to="/contact"
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  location.pathname === '/contact'
                    ? 'text-charcoal dark:text-sandstone'
                    : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                }`}
              >
                Get in Touch
              </Link>

              <Link to="/contact" className="pt-2">
                <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-xs uppercase tracking-widest-xl font-bold px-6 py-2.5 hover:opacity-90 transition-all w-full">
                  Inquire
                </button>
              </Link>

              {/* Theme Toggle for Mobile */}
              <div className="pt-4 border-t border-charcoal/10 dark:border-sandstone/10">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-medium text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone transition-colors py-2"
                >
                  <span>Theme</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">{theme === 'light' ? 'Light' : 'Dark'}</span>
                    {theme === 'light' ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
