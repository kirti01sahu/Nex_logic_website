import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTourClick = () => {
    setIsOpen(false);
    if (location.pathname === '/egovtalent') {
      const element = document.getElementById('showcase');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/egovtalent#showcase');
    setTimeout(() => {
      const element = document.getElementById('showcase');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDemoClick = () => {
    setIsOpen(false);
    const element = document.getElementById('book-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // If not on a page with demo form, navigate to egovtalent demo
    navigate('/egovtalent#book-demo');
    setTimeout(() => {
      const element = document.getElementById('book-demo');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactSalesClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  return (
    <div className="floating-action-container" ref={widgetRef}>
      {/* Popover Menu for Explore Widget */}
      {isOpen && (
        <div className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-white/10 rounded-2xl shadow-2xl p-4 mb-2 w-56 flex flex-col gap-1 transition-all duration-300 transform scale-100 origin-bottom-right">
          <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 px-3 pb-2 border-b border-gray-100 dark:border-white/5 mb-1">
            eGovTalent Hub
          </div>
          <button
            onClick={handleTourClick}
            className="flex items-center gap-3 w-full text-left px-3 py-2 text-xs font-semibold text-[#1F1F1F] dark:text-[#E6DED3] hover:bg-taupe/20 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-sage-green">explore</span>
            <span>Product Tour</span>
          </button>
          <button
            onClick={handleDemoClick}
            className="flex items-center gap-3 w-full text-left px-3 py-2 text-xs font-semibold text-[#1F1F1F] dark:text-[#E6DED3] hover:bg-taupe/20 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-sage-green">calendar_today</span>
            <span>Book Demo</span>
          </button>
          <button
            onClick={handleContactSalesClick}
            className="flex items-center gap-3 w-full text-left px-3 py-2 text-xs font-semibold text-[#1F1F1F] dark:text-[#E6DED3] hover:bg-taupe/20 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-sage-green">support_agent</span>
            <span>Contact Sales</span>
          </button>
        </div>
      )}

      {/* Main Explore Badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-widget-btn"
      >
        <span className="material-symbols-outlined text-sm">settings_suggest</span>
        <span>Explore eGovTalent</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919893220811"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-connect-btn floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.821 1.452 5.486 0 9.948-4.469 9.952-9.96.002-2.66-1.033-5.161-2.909-7.04C16.638 1.767 14.134.732 11.48.732 5.99.732 1.53 5.201 1.526 10.692c-.001 1.694.446 3.348 1.298 4.793l-.999 3.647 3.822-.978zm11.667-7.078c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.496.1-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+919893220811"
        className="floating-connect-btn floating-call"
        aria-label="Call Us Directly"
      >
        <span className="material-symbols-outlined text-2xl text-white">call</span>
      </a>
    </div>
  );
};

export default FloatingWidget;
