import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SEOHead from '../components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppBusinessMarketingPage = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );
    
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: element, 
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
  }, []);

  const services = [
    { 
      icon: 'chat', 
      title: 'WhatsApp Business API', 
      description: 'Leverage official WhatsApp Business API for scalable, automated customer communication and engagement.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-white' 
    },
    { 
      icon: 'campaign', 
      title: 'Broadcast Campaigns', 
      description: 'Send targeted promotional messages, updates, and offers to segmented customer lists with high engagement rates.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]' 
    },
    { 
      icon: 'smart_toy', 
      title: 'Chatbot Automation', 
      description: 'AI-powered chatbots for instant responses, 24/7 customer support, lead qualification, and order processing.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]' 
    },
    { 
      icon: 'shopping_cart', 
      title: 'E-Commerce Integration', 
      description: 'Seamless product catalog, shopping cart, payment gateway integration for complete in-chat shopping experience.',
      bgColor: 'bg-[#E8DDD0]', 
      textColor: 'text-[#2F3B35]' 
    },
    { 
      icon: 'support_agent', 
      title: 'Customer Support', 
      description: 'Multi-agent team inbox, ticket management, conversation routing, and customer support analytics.',
      bgColor: 'bg-[#A8B5A1]', 
      textColor: 'text-[#2F3B35]' 
    },
    { 
      icon: 'insights', 
      title: 'Analytics & Reporting', 
      description: 'Comprehensive analytics dashboard tracking message delivery, engagement rates, conversion metrics, and ROI.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]' 
    }
  ];

  const features = [
    {
      icon: 'verified',
      title: 'Official Business Account',
      description: 'Verified green tick badge for brand authenticity and customer trust'
    },
    {
      icon: 'schedule',
      title: 'Automated Messages',
      description: 'Welcome messages, away messages, quick replies, and scheduled broadcasts'
    },
    {
      icon: 'groups',
      title: 'Contact Management',
      description: 'Advanced contact segmentation, tags, custom fields, and CRM integration'
    },
    {
      icon: 'attach_file',
      title: 'Rich Media Support',
      description: 'Images, videos, documents, location sharing, and interactive buttons'
    },
    {
      icon: 'language',
      title: 'Multi-language Support',
      description: 'Communicate with customers in their preferred language automatically'
    },
    {
      icon: 'security',
      title: 'End-to-End Encryption',
      description: 'Secure communication with WhatsApp\'s enterprise-grade encryption'
    }
  ];

  const useCases = [
    {
      title: 'E-Commerce & Retail',
      description: 'Product catalogs, order confirmations, shipping updates, abandoned cart recovery',
      icon: 'storefront',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-white'
    },
    {
      title: 'Healthcare',
      description: 'Appointment reminders, prescription updates, health tips, telemedicine consultations',
      icon: 'health_and_safety',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Banking & Finance',
      description: 'Transaction alerts, account updates, loan status, payment reminders',
      icon: 'account_balance',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Education',
      description: 'Course updates, admission notifications, fee reminders, study materials',
      icon: 'school',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Real Estate',
      description: 'Property listings, site visit scheduling, document sharing, lead nurturing',
      icon: 'home',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Travel & Hospitality',
      description: 'Booking confirmations, itinerary updates, check-in reminders, customer feedback',
      icon: 'flight',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-white'
    }
  ];

  const benefits = [
    { icon: 'trending_up', title: '98% Open Rate', description: 'Higher engagement than email or SMS' },
    { icon: 'speed', title: 'Instant Delivery', description: 'Real-time message delivery and responses' },
    { icon: 'savings', title: 'Cost Effective', description: 'Lower cost per message than traditional channels' },
    { icon: 'thumb_up', title: 'High Conversion', description: 'Superior conversion rates and customer satisfaction' }
  ];

  const integrations = [
    'Shopify', 'WooCommerce', 'Magento', 'Salesforce', 'HubSpot', 'Zoho CRM',
    'Google Sheets', 'Zapier', 'Make (Integromat)', 'Stripe', 'PayPal', 'Razorpay'
  ];

  return (
    <div>
      <SEOHead
        title="WhatsApp Business Marketing"
        description="Engage customers at scale with Nexlogic Innovation Private Limited's WhatsApp Business marketing solutions — automated campaigns, chatbots, and rich media messaging. naxlogic.com"
        canonical="https://naxlogic.com/whatsapp-business-marketing"
      />
      {/* Hero Section */}}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(47, 69, 56, 0.85) 0%, rgba(47, 69, 56, 0.9) 100%), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-heading flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl text-white">chat</span>
              <span className="text-sm uppercase tracking-widest text-white/90"></span>
            </div>
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              WhatsApp Business Solution
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/95 leading-relaxed">
              Transform customer engagement with WhatsApp Business API. Reach over 2 billion users with automated messaging, chatbots, and personalized marketing campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our WhatsApp Marketing Services
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Comprehensive WhatsApp Business solutions to scale your customer communication
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate ${service.bgColor} ${service.textColor} p-8 rounded-xl hover:scale-105 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-heading mb-3">{service.title}</h3>
                <p className="leading-relaxed opacity-90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Key Features
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Advanced features to power your WhatsApp Business presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl border-2 border-[#2F3B35]/10 dark:border-sandstone/20 hover:border-charcoal dark:hover:border-sandstone transition-all duration-300">
                <span className="material-symbols-outlined text-4xl mb-3 block text-charcoal dark:text-sandstone">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-heading mb-2 text-charcoal dark:text-sandstone">{feature.title}</h3>
                <p className="text-brown-grey dark:text-text-dark-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Industry Use Cases
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              WhatsApp Business solutions tailored for your industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className={`scroll-animate ${useCase.bgColor} ${useCase.textColor} p-8 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{useCase.icon}</span>
                <h3 className="text-2xl font-heading mb-3">{useCase.title}</h3>
                <p className="leading-relaxed opacity-90">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Why Choose WhatsApp Marketing?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl text-center hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block text-charcoal dark:text-sandstone">
                  {benefit.icon}
                </span>
                <h3 className="font-heading mb-2 text-lg text-charcoal dark:text-sandstone">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-brown-grey dark:text-text-dark-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Connect WhatsApp with your existing tools and platforms
            </p>
          </div>
          <div className="scroll-animate flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-taupe/30 dark:bg-charcoal-light text-charcoal dark:text-sandstone rounded-full text-sm font-medium hover:bg-charcoal hover:text-white dark:hover:bg-sandstone dark:hover:text-charcoal transition-all duration-300 cursor-default"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#2F4538] text-white">
        <div className="container-custom px-4 md:px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
            Ready to Scale Your Business with WhatsApp?
          </h2>
          <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Connect with over 2 billion users and transform your customer engagement today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-charcoal text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-gray-100 transition-all">
                Get Started Today
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-transparent border-2 border-white text-white text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-white/10 transition-all">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppBusinessMarketingPage;
