import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Github, Users, Lightbulb, Rocket, ExternalLink, X, Database, Cloud, Code, Brain, Zap } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Software Engineer with 2+ years of experience building low-latency, cloud-native systems and AI-powered platforms using Python/TypeScript, FastAPI/Node.js, AWS/GCP/Azure, Kafka, Redis, and Docker/Kubernetes. Shipped production services scaling to 1M+ monthly applications, achieved sub-100ms API latency, improved data refresh by 40%, cut infra cost by 30%, and sustained 99.9% uptime through 5× traffic spikes. Architected streaming + RAG/agentic AI solutions (LangChain/Pinecone, Triton serving), processing millions of events with 40% throughput gains and supporting 1,500+ daily queries under 10s latency.";

  const experience = [
    {
      company: "WorkUp",
      role: "Software Engineer Intern",
      location: "Los Angeles, CA",
      dates: "May 2024 – Jul 2024",
      highlights: [
        "Owned backend delivery for job-to-candidate recommendation workflows, building API services (Node.js, Express, TypeScript, MongoDB, AWS) that scaled to 1M+ monthly applications with sub-100ms latency for core endpoints.",
        "Improved performance and reliability by optimizing concurrency and implementing Redis caching, reducing response time by 35% and sustaining consistent throughput for 100K+ users.",
        "Integrated NVIDIA Triton model serving behind inference APIs to enable multi-model recommendations, improving inference throughput by 25% and stabilizing p95 inference latency by 20% through batching and request optimization.",
        "Instrumented structured logging and latency/error metrics for key endpoints, reducing troubleshooting time by 30% and improving release readiness through measurable API health tracking."
      ]
    },
    {
      company: "Xoriant Solutions",
      role: "Software Engineer",
      location: "Mumbai, India",
      dates: "Jul 2021 – Jul 2023",
      highlights: [
        "Orchestrated a full-stack portfolio management platform (React, Node.js, MongoDB, Azure) for real-time stock and hedge-fund analytics, improving data refresh rate by 40% and enabling personalized user experiences at scale.",
        "Engineered low-latency backend services and REST APIs for high-volume financial workflows in a production environment, sustaining 99.9% uptime and meeting reliability and performance SLOs.",
        "Integrated Redis caching with MongoDB in an event-driven access layer, reducing API latency from 2 seconds to 200 milliseconds and stabilizing response times during traffic spikes.",
        "Led cloud-native deployments using AWS Lambda, Docker, and ECS, reducing infrastructure cost by 30% through resource and capacity optimization while maintaining service scalability.",
        "Automated CI/CD with Azure Pipelines and GitHub Actions, cutting release cycle time by 50% and strengthening code quality through reviews and standardized checks.",
        "Implemented real-time monitoring dashboards using MLflow, enabling early issue detection and faster incident resolution."
      ]
    },
    {
      company: "Botonomics Automations",
      role: "Software Engineer Intern",
      location: "Mumbai, India",
      dates: "Jan 2021 – May 2021",
      highlights: [
        "Integrated WhatsApp, Discord, Slack, and Gmail into the chatbot backend using secure REST and webhook APIs, doubling user engagement and expanding cross-channel reach by 40%.",
        "Built a distributed webhook and event management system using Node.js and RabbitMQ to ensure reliable near real-time message processing across channels."
      ]
    }
  ];

  const projects = [
    {
      title: "Agentic AI Misinformation Detection",
      subtitle: "Multi-Agent RAG Fact-Checking System",
      category: "AI/ML Systems",
      introduction: "Engineered a multi-agent RAG system using LangChain and Pinecone to perform autonomous fact-checking across heterogeneous sources, delivering end-to-end responses under 10 seconds.",
      problem: "Misinformation spreads rapidly across multiple platforms, requiring automated fact-checking that can process diverse sources and deliver accurate results quickly.",
      objective: "Build a scalable multi-agent system that can autonomously verify facts across heterogeneous sources with sub-10-second response times.",
      methodology: [
        "Designed multi-agent architecture using LangChain for orchestration.",
        "Implemented vector search with Pinecone for efficient retrieval.",
        "Built FastAPI services for low-latency API responses.",
        "Deployed on GCP Cloud Run for autoscaling and reliability.",
        "Implemented asynchronous Celery and Redis pipelines for workflow optimization."
      ],
      results: [
        "Deployed services handling 1,500+ daily queries.",
        "Achieved end-to-end response times under 10 seconds.",
        "Improved reliability and throughput for multi-step retrieval workflows.",
        "Enabled autonomous fact-checking across heterogeneous sources."
      ],
      conclusion: "Successfully productionized an agentic AI system for misinformation detection, demonstrating expertise in RAG, multi-agent orchestration, and cloud-native deployment.",
      technologies: "LangChain, Pinecone, FastAPI, Docker, GCP Cloud Run, Celery, Redis"
    },
    {
      title: "Cross-Lingual Hate Speech Detection",
      subtitle: "Real-Time Multilingual Inference Pipeline",
      category: "AI/ML Systems",
      introduction: "Built a real-time multilingual inference backend with FastAPI and PostgreSQL, enabling low-latency classification across diverse language inputs. Architected a high-throughput streaming pipeline using Kafka and Celery.",
      problem: "Hate speech detection needs to work across multiple languages in real-time, requiring low-latency inference and high-throughput processing of streaming data.",
      objective: "Create a scalable system for real-time hate speech detection across multiple languages with high throughput and low latency.",
      methodology: [
        "Built real-time multilingual inference backend with FastAPI.",
        "Designed PostgreSQL schema for efficient data storage and retrieval.",
        "Architected high-throughput streaming pipeline using Kafka.",
        "Implemented Celery workers for parallel processing.",
        "Optimized for low-latency classification across diverse language inputs."
      ],
      results: [
        "Enabled low-latency classification across diverse language inputs.",
        "Processed millions of messages through streaming pipeline.",
        "Improved throughput by 40% via parallel worker execution.",
        "Achieved real-time processing at scale."
      ],
      conclusion: "Delivered a production-grade multilingual hate speech detection system with significant throughput improvements through streaming architecture.",
      technologies: "Python, FastAPI, PostgreSQL, Kafka, Celery, Redis"
    },
    {
      title: "Real-Time Stock Trading Platform",
      subtitle: "Full-Stack Trading with Live Market Data",
      category: "Full Stack / FinTech",
      introduction: "Developed a full-stack trading platform using Angular, Node.js, MongoDB, WebSockets, and GCP Cloud Run, enabling real-time portfolio updates, seamless order execution flows, and live market data streaming for 5,000+ concurrent users with sub-100ms execution latency.",
      problem: "Stock trading platforms require real-time data streaming, low-latency order execution, and reliable portfolio management for thousands of concurrent users.",
      objective: "Build a scalable, real-time trading platform with sub-100ms latency and autoscaling capabilities.",
      methodology: [
        "Developed frontend using Angular for responsive trading interface.",
        "Built backend services with Node.js and MongoDB.",
        "Implemented WebSockets for real-time market data streaming.",
        "Deployed on GCP Cloud Run for autoscaling and reliability.",
        "Optimized for sub-100ms execution latency."
      ],
      results: [
        "Supported 5,000+ concurrent users.",
        "Achieved sub-100ms execution latency.",
        "Enabled real-time portfolio updates and live market data streaming.",
        "Delivered seamless order execution flows.",
        "Implemented autoscaling for reliable operations."
      ],
      conclusion: "Successfully built and deployed a high-performance trading platform demonstrating full-stack expertise and cloud-native architecture skills.",
      technologies: "Angular, Node.js, MongoDB, WebSockets, GCP Cloud Run"
    }
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'C++']
    },
    {
      icon: Zap,
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL', 'WebSockets']
    },
    {
      icon: Database,
      title: 'Data & Messaging',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'Apache Kafka', 'RabbitMQ']
    },
    {
      icon: Cloud,
      title: 'Cloud & AI/ML',
      skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'RAG', 'LangChain', 'LLM APIs', 'NVIDIA Triton']
    }
  ];

  const education = [
    {
      school: "University of Southern California",
      degree: "Master of Science in Computer Science",
      location: "Los Angeles, CA, USA",
      dates: "Jan 2024 – Dec 2025",
      details: "Relevant Coursework: Advanced Software Engineering, Distributed Systems, Machine Learning, Cloud Computing"
    },
    {
      school: "Fr. Conceicao Rodrigues Institute of Technology",
      degree: "Bachelor of Engineering, Information Technology",
      location: "Mumbai, India",
      dates: "Jul 2017 – May 2021",
      details: "Relevant Coursework: Data Structures & Algorithms, Database Systems, Computer Networks, Software Engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              SHRITEJ PATIL
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Shritej Patil"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              SHRITEJ PATIL
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Software Engineer | AI/ML Systems | Python, TypeScript, FastAPI/Node | AWS/GCP | Kafka, Redis
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              LOS ANGELES, CA, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'MONTHLY APPLICATIONS', value: '1M+', detail: 'Production Scale' },
              { label: 'API LATENCY', value: '<100ms', detail: 'Sub-100ms Response' },
              { label: 'UPTIME', value: '99.9%', detail: 'Production Reliability' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software Engineer specializing in low-latency, cloud-native systems and AI-powered platforms. Experienced in building production services at scale, optimizing performance, and architecting streaming and agentic AI solutions with measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: 'Low-Latency Systems',
                detail: 'Build high-performance backend services achieving sub-100ms API latency and sustaining 99.9% uptime through 5× traffic spikes. Expert in Redis caching, concurrency optimization, and performance tuning for 100K+ users.'
              },
              {
                icon: Cloud,
                title: 'Cloud-Native Architecture',
                detail: 'Deploy production services on AWS/GCP/Azure using Docker, Kubernetes, and serverless technologies. Reduced infrastructure costs by 30% through resource optimization while maintaining scalability and reliability.'
              },
              {
                icon: Brain,
                title: 'AI/ML Systems',
                detail: 'Architect streaming and RAG/agentic AI solutions using LangChain, Pinecone, and NVIDIA Triton. Process millions of events with 40% throughput gains and support 1,500+ daily queries under 10s latency.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software engineering experience across WorkUp, Xoriant Solutions, and Botonomics Automations, building scalable backend systems and AI-powered platforms.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              AI/ML systems, agentic RAG solutions, and real-time streaming platforms demonstrating expertise in low-latency architecture and cloud-native deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed technical documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
                <p className="text-sm text-brown/70 mt-2">
                  <strong>Technologies:</strong> {projects[selectedProject].technologies}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Technical expertise spanning programming languages, backend frameworks, data systems, cloud platforms, and AI/ML technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss software engineering opportunities, AI/ML systems roles, or backend architecture challenges.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+12136812208"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (213) 681-2208
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/shritej-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Github className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/shritej-patil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:shritejpatil112@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                shritejpatil112@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Shritej Patil · Software Engineer | AI/ML Systems.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;