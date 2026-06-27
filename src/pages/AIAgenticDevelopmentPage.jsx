import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SEOHead from '../components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const AIAgenticDevelopmentPage = () => {
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
      icon: 'psychology', 
      title: 'Autonomous AI Agents', 
      description: 'Develop intelligent agents that can make decisions, learn from interactions, and execute complex workflows autonomously.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]' 
    },
    { 
      icon: 'hub', 
      title: 'Multi-Agent Systems', 
      description: 'Build coordinated agent ecosystems where multiple AI agents collaborate to solve complex business problems.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]' 
    },
    { 
      icon: 'auto_awesome', 
      title: 'LLM Integration', 
      description: 'Integrate advanced large language models (GPT-4, Claude, Llama) for natural language understanding and generation.',
      bgColor: 'bg-[#E8DDD0]', 
      textColor: 'text-[#2F3B35]' 
    }
  ];

  const capabilities = [
    {
      icon: 'memory',
      title: 'RAG Architecture',
      description: 'Retrieval-Augmented Generation for context-aware AI responses with your proprietary data.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'workspaces',
      title: 'Agent Orchestration',
      description: 'Design and implement sophisticated agent workflows with tools, memory, and reasoning capabilities.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'psychology_alt',
      title: 'Custom AI Models',
      description: 'Fine-tune and deploy specialized AI models tailored to your specific use cases and industry.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'api',
      title: 'AI API Development',
      description: 'Build scalable APIs for AI services with proper rate limiting, caching, and monitoring.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Agents',
      desc: 'Intelligent chatbots that understand context, resolve issues, and escalate when needed',
      icon: 'support_agent'
    },
    {
      title: 'Data Analysis Agents',
      desc: 'Autonomous agents that query databases, analyze trends, and generate insights',
      icon: 'analytics'
    },
    {
      title: 'Process Automation',
      desc: 'AI agents that handle repetitive tasks, document processing, and workflow automation',
      icon: 'automation'
    },
    {
      title: 'Research Assistants',
      desc: 'Agents that gather information, summarize documents, and provide intelligent recommendations',
      icon: 'manage_search'
    },
    {
      title: 'Code Generation Agents',
      desc: 'AI-powered development assistants that write, review, and optimize code',
      icon: 'code'
    },
    {
      title: 'Content Creation',
      desc: 'Intelligent agents for generating marketing content, reports, and documentation',
      icon: 'edit_note'
    }
  ];

  const technologies = [
    'LangChain', 'LangGraph', 'OpenAI GPT-4', 'Claude 3', 'Azure OpenAI',
    'Pinecone', 'ChromaDB', 'FAISS', 'LlamaIndex', 'Hugging Face',
    'Python', 'FastAPI', 'React', 'Vector Databases', 'Semantic Search'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Understand your business needs and identify optimal AI agent use cases'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design agent workflows, knowledge bases, and integration points'
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Build, train, and fine-tune agents with your specific data and requirements'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing for accuracy, reliability, and performance optimization'
    },
    {
      step: '05',
      title: 'Deployment & Monitoring',
      description: 'Deploy with monitoring, logging, and continuous improvement feedback loops'
    }
  ];

  return (
    <div>
      <SEOHead
        title="AI Agentic Development — NexLogic"
        description="NexLogic Innovation Private Limited builds autonomous AI agents, multi-agent systems, and LLM-integrated platforms. Enterprise-grade AI agentic development at naxlogic.com."
        canonical="/development/ai-agentic"
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-heading flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl text-white">psychology</span>
              <span className="text-sm uppercase tracking-widest text-white/80">Next-Gen Solutions</span>
            </div>
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              AI Agentic Development
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              Harness the power of autonomous AI agents that think, reason, and act—transforming how your business operates with intelligent automation and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Core AI Agent Capabilities
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Building intelligent systems that go beyond traditional automation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Technical Capabilities */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Advanced Technical Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className={`scroll-animate ${capability.bgColor} ${capability.textColor} p-6 rounded-xl hover:shadow-xl transition-shadow duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{capability.icon}</span>
                <h3 className="font-heading mb-2 text-lg">{capability.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              AI agents solving complex business challenges across industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="scroll-animate bg-taupe/20 dark:bg-charcoal-light p-6 rounded-xl border-2 border-[#2F3B35]/10 dark:border-sandstone/20 hover:border-[#2F4538] dark:hover:border-[#C9D8BF] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl mb-3 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {useCase.icon}
                </span>
                <h3 className="text-xl font-heading mb-2 text-charcoal dark:text-sandstone">{useCase.title}</h3>
                <p className="text-brown-grey dark:text-text-dark-muted">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              A structured approach to building robust AI agent systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#2F4538] dark:text-[#C9D8BF] mb-4 font-heading">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading mb-3 text-charcoal dark:text-sandstone">{item.title}</h3>
                <p className="text-sm text-brown-grey dark:text-text-dark-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              AI Technology Stack
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Leveraging cutting-edge AI frameworks and tools
            </p>
          </div>
          <div className="scroll-animate flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-taupe/30 dark:bg-charcoal-light text-charcoal dark:text-sandstone rounded-full text-sm font-medium hover:bg-[#2F4538] hover:text-white dark:hover:bg-[#C9D8BF] dark:hover:text-[#2F3B35] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#2F4538] text-white">
        <div className="container-custom px-4 md:px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
            Ready to Build Intelligent AI Agents?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's explore how autonomous AI agents can transform your business operations and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-[#2F4538] text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-[#E8DDD0] transition-all">
                Schedule Consultation
              </button>
            </Link>
            <Link to="/development">
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

export default AIAgenticDevelopmentPage;
