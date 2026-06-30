import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import TextLogo from './TextLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isDarkHero = !isScrolled && (location.pathname === '/' || (location.pathname === '/egovtalent' && theme === 'dark'));

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'eGovTalent', path: '/egovtalent' },
    { name: 'Solutions', path: '/development' },
    { name: 'Services', path: '/services' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-cream/90 dark:bg-charcoal/95 backdrop-blur-md py-3 shadow-lg border-charcoal/10 dark:border-white/5'
          : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="container-custom px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <TextLogo forceDarkLogo={isDarkHero} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest-xl font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                    isActive
                      ? isDarkHero ? 'text-sage-green' : 'text-[#384F3E] dark:text-sage-green'
                      : isDarkHero
                        ? 'text-white/80 hover:text-white'
                        : 'text-[#6F6A63] dark:text-[#E6DED3]/80 hover:text-[#1F1F1F] dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Book a Demo Button */}
            <Link
              to="/contact"
              className="bg-[#384F3E] hover:bg-[#A8B5A2] text-white hover:text-[#1F1F1F] text-xs uppercase tracking-widest-xl font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:scale-105 whitespace-nowrap"
            >
              Book a Demo
            </Link>

            {/* Candidate Register Button */}
            <a
              href="https://egovtalent.com/candidate/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs uppercase tracking-widest-xl font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 border whitespace-nowrap ${
                isDarkHero
                  ? 'border-white/20 hover:border-white text-white bg-white/5 hover:bg-white/10'
                  : 'border-[#384F3E]/30 hover:border-[#384F3E] text-[#384F3E] dark:border-white/20 dark:hover:border-white dark:text-white hover:bg-[#384F3E]/5 dark:hover:bg-white/5'
              }`}
            >
              Candidate Registration
            </a>
          </nav>

          {/* Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkHero
                  ? 'hover:bg-white/10 text-white'
                  : 'hover:bg-charcoal/5 dark:hover:bg-white/5 text-charcoal dark:text-sandstone'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                isDarkHero
                  ? 'hover:bg-white/10 text-white'
                  : 'hover:bg-charcoal/5 dark:hover:bg-white/5 text-charcoal dark:text-sandstone'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 px-3 bg-cream dark:bg-charcoal border border-charcoal/10 dark:border-white/5 rounded-2xl shadow-xl transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xs uppercase tracking-widest-xl font-bold transition-colors py-2 px-3 rounded-lg ${
                      isActive
                        ? 'text-sage-green bg-charcoal/5 dark:bg-white/5'
                        : 'text-[#6F6A63] dark:text-white/80 hover:text-[#1F1F1F] dark:hover:text-white hover:bg-charcoal/5 dark:hover:bg-white/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#384F3E] hover:bg-[#A8B5A2] text-white text-center text-xs uppercase tracking-widest-xl font-bold py-3 rounded-lg transition-all"
              >
                Book a Demo
              </Link>
              <a
                href="https://egovtalent.com/candidate/login"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#384F3E]/30 dark:border-white/20 text-[#384F3E] dark:text-white text-center text-xs uppercase tracking-widest-xl font-bold py-3 rounded-lg transition-all"
              >
                Candidate Registration
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
