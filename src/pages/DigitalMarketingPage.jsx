import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useRazorpay from '../context/useRazorpay';
import SEOHead from '../components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPage = () => {
  const [currency, setCurrency] = useState('INR'); // INR or USD
  const { initiatePayment } = useRazorpay();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '.hero-heading',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );

    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(
        element,
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
            once: true,
          },
        }
      );
    });
  }, []);

  // Currency conversion function with doubled prices for Standard/Premium
  const convertPrice = (inrPrice) => {
    const numPrice = parseInt(inrPrice.replace('₹', ''));
    if (currency === 'USD') {
      // Fixed USD prices - doubled for Standard/Premium, contact for Enterprise
      const usdPriceMap = {
        7999: 192,   // RAW (Standard)
        11999: 288,  // MINIMAL (Premium)
        14999: 360,  // CULINARY (Premium)
        17999: 432,  // ULTRA CULINARY (Premium)
        29999: 720   // Premium Package
      };
      const result = usdPriceMap[numPrice];
      if (result === undefined) {
        return `$${Math.round(numPrice / 83)}`;
      }
      return `$${result}`;
    }
    return inrPrice;
  };

  // Handle payment for plan
  const handlePayment = (plan) => {
    // Get the price value
    const priceStr = plan.price.replace('₹', '');
    let amount = parseInt(priceStr);
    let curr = 'INR';

    // Convert to appropriate currency
    if (currency === 'USD') {
      const usdPriceMap = {
        7999: 192,
        11999: 288,
        14999: 360,
        17999: 432,
        29999: 720
      };
      amount = usdPriceMap[parseInt(priceStr)] || Math.round(amount / 83);
      curr = 'USD';
    }

    initiatePayment({
      amount: amount,
      currency: curr,
      name: `Digital Marketing - ${plan.name} Plan`,
      description: 'Monthly Subscription',
      planType: plan.name,
      onSuccess: (paymentData) => {
        // Handle successful payment
        console.log('Payment successful:', paymentData);
        alert(`Payment Successful! \n\nPayment ID: ${paymentData.razorpay_payment_id}\n\nThank you for subscribing to ${plan.name} plan. Our team will contact you shortly to start your campaign.`);
        
        // TODO: Send payment details to your backend to:
        // 1. Verify payment signature
        // 2. Create user subscription
        // 3. Send confirmation email
      },
      onFailure: (error) => {
        console.error('Payment failed:', error);
        alert(`Payment Failed: ${error.description || 'Please try again'}`);
      }
    });
  };

  const plans = [
    {
      name: 'RAW',
      price: '₹7999',
      features: [
        'Website Audit',
        'Support for Keyword Research',
        'On Page SEO',
        'Link Building',
        'Google and Web Analytics',
        'Social Media Profile Handling'
      ],
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      name: 'MINIMAL',
      price: '₹11999',
      features: [
        'Website Audit',
        'Support for Keyword Research',
        'On Page SEO',
        'Link Building',
        'Broken Link Removal',
        'Social Media Profile Handling'
      ],
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      name: 'CULINARY',
      price: '₹14999',
      popular: true,
      features: [
        'Website Audit',
        'Support for Keyword Research',
        'On Page SEO',
        'Link Building',
        'Google and Web Analytics',
        'Social Media Marketing',
        'Email Campaign',
        'Content Marketing'
      ],
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      name: 'ULTRA CULINARY',
      price: '₹17999',
      features: [
        'Website Audit',
        'Support for Keyword Research',
        'On Page SEO',
        'Link Building',
        'Google and Web Analytics',
        'Social Media Profile Handling',
        'Broken Link Removal',
        'Social Media Marketing',
        'Email Campaign',
        'SMS Campaign',
        'Adwords Campaign',
        'App Marketing',
        'Videos and Brochure Creation'
      ],
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  const testimonials = [
    {
      quote: "The digital marketing strategy from NexLogic Innovation Private Limited transformed our online presence. We saw a 300% increase in organic traffic within just 3 months. Their team truly understands SEO and social media marketing!",
      author: "Priya Sharma",
      position: "E-commerce Startup"
    },
    {
      quote: "What impressed us most was their data-driven approach. Every campaign was tracked, analyzed, and optimized. Our conversion rates doubled and cost-per-acquisition dropped significantly.",
      author: "Vikram Desai",
      position: "SaaS Company"
    },
    {
      quote: "NexLogic Innovation Private Limited brought creativity and professionalism to our digital campaigns. Their content strategy and social media management helped us build a strong brand presence online.",
      author: "Anjali Reddy",
      position: "Healthcare Provider"
    },
    {
      quote: "The team is always available and responsive. They regularly provide detailed reports and insights. Our Google Ads campaigns have never performed better!",
      author: "Rahul Kapoor",
      position: "Real Estate Firm"
    },
    {
      quote: "Switching to NexLogic Innovation Private Limited for our digital marketing was a game changer. Their holistic approach covering SEO, PPC, and social media gave us the edge over competitors.",
      author: "Sneha Patel",
      position: "Fashion Retail"
    },
    {
      quote: "Professional, knowledgeable, and results-oriented. NexLogic Innovation Private Limited helped us scale our digital presence from zero to hero. Highly recommend their services!",
      author: "Arjun Mehta",
      position: "Tech Startup"
    }
  ];

  return (
    <div>
      <SEOHead
        title="Digital Marketing Services"
        description="Drive measurable growth with NexLogic Innovation Private Limited's data-driven digital marketing — SEO, PPC, social media, and content strategy tailored for your business. Visit naxlogic.com."
        canonical="https://naxlogic.com/digital-marketing"
      />
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              HERE WE TAKE CARE OF YOUR<br />ONLINE PRESENCE
            </h1>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">WHAT WE OFFER</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              DIGITAL MARKETING PLANS & SERVICES
            </h2>
            
            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="text-sm font-medium text-text-muted dark:text-text-dark-muted">Currency:</span>
              <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    currency === 'USD'
                      ? 'bg-[#2F3B35] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  $ USD
                </button>
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    currency === 'INR'
                      ? 'bg-[#2F3B35] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  ₹ INR
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`scroll-animate ${plan.bgColor} p-6 md:p-8 ${plan.textColor} rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-charcoal text-white text-xs uppercase tracking-widest px-4 py-2">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-heading mb-2">{plan.name}</h3>
                <div className="text-4xl font-light mb-6">{convertPrice(plan.price)}<span className="text-lg">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="material-symbols-outlined text-lg">check</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handlePayment(plan)}
                  className={`w-full ${plan.bgColor === 'bg-[#2F4538]' ? 'bg-white text-charcoal' : 'bg-charcoal text-white'} py-3 px-6 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity`}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          {/* Premium Package */}
          <div className="scroll-animate bg-gradient-to-br from-[#2F4538] to-[#1a2820] p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-sm uppercase tracking-widest mb-4 text-white/70">PREMIUM PACKAGE</div>
              <h3 className="text-3xl md:text-4xl font-heading mb-4">SOFTWARE DEVELOPMENT + DIGITAL MARKETING</h3>
              <div className="text-4xl font-light mb-6">{convertPrice('₹29999')}<span className="text-lg">/mo</span></div>
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                This is the premium service offered by us in which we provide the Software development for your business as well as Digital Marketing Services to grow your business. Our highly skilled, experienced and professional software developers are able to design and develop the software with all the functionalities you require and our dynamic Digital Marketing Team will help you to grow your business and achieve your market goals and make profits. In this service you are also able to customise your package according to your business needs.
              </p>
              <button 
                onClick={() => handlePayment({ name: 'Premium Package', price: '₹29999' })}
                className="bg-white text-charcoal py-4 px-10 text-sm uppercase tracking-widest font-bold hover:bg-white/90 transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">Testimonial</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 md:p-8 rounded-xl shadow-card">
                <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-charcoal/10 dark:border-sandstone/10 pt-4">
                  <div className="font-heading text-charcoal dark:text-sandstone">{testimonial.author}</div>
                  <div className="text-sm text-brown-grey dark:text-text-dark-muted">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-6">
              Ready to Boost Your Online Presence?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Get a free consultation with our digital marketing experts and discover how we can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                Schedule Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
