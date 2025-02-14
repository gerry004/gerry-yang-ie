'use client';

import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const spots = document.querySelectorAll('.light-spot-1, .light-spot-2, .light-spot-3, .light-spot-4');
      
      spots.forEach((spot, index) => {
        const speed = 1 - (index * 0.1); // Different parallax speeds
        const yPos = scrolled * speed * 0.05; // Reduced movement speed
        const scale = 1 + (scrolled * 0.0001 * speed);
        if (spot instanceof HTMLElement) {
          spot.style.transform = `translateY(${yPos}px) scale(${scale})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 10% of the element is visible
        rootMargin: '50px', // Start animation slightly before element comes into view
      }
    );

    // Select all elements to animate
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.opacity = '0'; // Set initial opacity
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="animated-background">
        <div className="light-spot-1" />
        <div className="light-spot-2" />
        <div className="light-spot-3" />
        <div className="light-spot-4" />
      </div>
      <main className="relative bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="animate-on-scroll">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  Optimising{' '}
                  <span className="relative">
                    <span className="relative z-10">Dublin Businesses</span>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl">
                  Cut costs, automate workflows, and future-proof your operations with custom software built for your needs.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => scrollToSection('problems')}
                    className="bg-[#0F1115] hover:bg-black text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    Tell Me More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Content - Process Visualization */}
              <div className="hidden lg:block animate-on-scroll">
                <div className="relative bg-[#f7f7f7] rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Process Nodes */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Process Automation</h3>
                      <p className="text-sm text-gray-500">Streamline workflows & tasks</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Data Analytics</h3>
                      <p className="text-sm text-gray-500">Real-time business insights</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Client Management Systems</h3>
                      <p className="text-sm text-gray-500">Centralise client data</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Event & Booking Platforms</h3>
                      <p className="text-sm text-gray-500">Seamless scheduling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section id="problems" className="relative py-32 bg-gray-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto space-y-32">
              {/* First Problem */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll">
                  <div className="bg-gray-800/80 p-8 rounded-2xl">
                    <div className="mb-8">
                      <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 inline-block">
                        Who You Are
                      </span>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Drowning in Busywork, Not Growing Your Business?
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-400">
                        You're a driven business owner, but...
                      </p>
                      <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Your team wastes hours on repetitive, menial tasks instead of delighting customers.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Your data is scattered across spreadsheets, emails, and apps—making it impossible to spot trends or act decisively.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Your tools create more work, not less, with clunky interfaces and disconnected workflows.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Illustration showing messy data */}
                <div className="animate-on-scroll">
                  <div className="bg-gray-800/80 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4 relative">
                      {/* Scattered Jigsaw Pieces */}
                      <div className="aspect-square bg-gray-900/50 rounded-xl p-4 transform rotate-12 transition-transform hover:rotate-0"
                           style={{ clipPath: "path('M 0,50 C 0,33 17,33 17,50 L 17,83 C 17,100 0,100 0,83 Z M 17,50 C 17,67 33,67 33,50 L 33,17 C 33,0 17,0 17,17 Z')" }}>
                        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="aspect-square bg-gray-900/50 rounded-xl p-4 transform -rotate-6 translate-y-4 transition-transform hover:rotate-0 hover:translate-y-0"
                           style={{ clipPath: "path('M 50,0 C 33,0 33,17 50,17 L 83,17 C 100,17 100,0 83,0 Z M 50,17 C 67,17 67,33 50,33 L 17,33 C 0,33 0,17 17,17 Z')" }}>
                        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="aspect-square bg-gray-900/50 rounded-xl p-4 transform translate-x-6 rotate-45 transition-transform hover:rotate-0 hover:translate-x-0"
                           style={{ clipPath: "path('M 100,50 C 100,33 83,33 83,50 L 83,83 C 83,100 100,100 100,83 Z M 83,50 C 83,67 67,67 67,50 L 67,17 C 67,0 83,0 83,17 Z')" }}>
                        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Problem/Solution */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Illustration showing connected system */}
                <div className="animate-on-scroll order-2 lg:order-1">
                  <div className="bg-gray-800/80 rounded-2xl p-8">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-0.5 bg-blue-500/10 rounded-xl overflow-hidden">
                        {/* Connected Jigsaw Pieces */}
                        {['Spreadsheets', 'Emails', 'Apps', 'Central System'].map((item, i) => (
                          <div key={i} 
                               className="aspect-square bg-gray-900/50 p-4 transition-transform hover:scale-95"
                               style={{
                                 clipPath: i === 0 ? "path('M 0,50 C 0,33 17,33 17,50 L 17,83 C 17,100 0,100 0,83 Z M 17,50 C 17,67 33,67 33,50 L 33,17 C 33,0 17,0 17,17 Z')" :
                                          i === 1 ? "path('M 50,0 C 33,0 33,17 50,17 L 83,17 C 100,17 100,0 83,0 Z M 50,17 C 67,17 67,33 50,33 L 17,33 C 0,33 0,17 17,17 Z')" :
                                          i === 2 ? "path('M 100,50 C 100,33 83,33 83,50 L 83,83 C 83,100 100,100 100,83 Z M 83,50 C 83,67 67,67 67,50 L 67,17 C 67,0 83,0 83,17 Z')" :
                                          "path('M 50,100 C 33,100 33,83 50,83 L 83,83 C 100,83 100,100 83,100 Z M 50,83 C 67,83 67,67 50,67 L 17,67 C 0,67 0,83 17,83 Z')"
                               }}>
                            <div className="w-full h-full bg-blue-500/10 rounded-lg flex items-center justify-center flex-col gap-2">
                              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                              </svg>
                              <span className="text-sm text-blue-400">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animate-on-scroll order-1 lg:order-2">
                  <div className="bg-gray-800/80 p-8 rounded-2xl">
                    <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 inline-block">
                      How We Help
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                      Tailored Software That Optimises Your Business
                    </h2>
                    <div className="space-y-4">
                      <p className="text-gray-400">
                        We design custom software that...
                      </p>
                      <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Automates the grunt work → Free your team to focus on customers, not busywork.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Centralizes your data → Turn fragmented numbers into clear, actionable insights.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Simplifies your tools → Replace clunky apps with one intuitive system built for your workflow.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Work Section */}
        <section id="projects" className="relative w-full bg-white py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black text-center animate-on-scroll">
                  Sample Projects
                </h2>
              </div>

              <div className="grid gap-16">
                {projects.map((project, index) => (
                  <div key={index} className="animate-on-scroll">
                    <a href={project.demoUrl} className="group relative block">
                      <div className="bg-[#f7f7f7] rounded-2xl p-6 lg:p-8 transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div className="order-2 lg:order-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                              {project.description}
                            </p>
                            <p className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors">
                              Explore Demo <ArrowRight className="w-4 h-4" />
                            </p>
                          </div>
                          <div className="order-1 lg:order-2">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-lg">
                              {/* Project Screenshot */}
                              <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] flex items-center px-3">
                                <div className="flex gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                                </div>
                              </div>
                              <div className="absolute top-8 inset-x-0 bottom-0 bg-gray-50">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="relative py-32 bg-gray-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center animate-on-scroll">
                A Simple, Transparent, Stress-Free Process
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-1/2" />
                
                {processSteps.map((step, index) => (
                  <div key={step.title} className="animate-on-scroll mb-12 last:mb-0">
                    <div className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      {/* Timeline Node */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-gray-800 transform -translate-x-1/2 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{index + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700/50">
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full bg-white">
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-2xl mx-auto animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
                Let&apos;s Optimise Your Business
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Ready to ditch inefficiencies? Whether you need a custom dashboard, client management system, or a full process automation overhaul, we&apos;ll craft a solution that fits.
              </p>
              <div className="bg-[#f7f7f7] p-8 rounded-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Add this footer section just before the closing main tag */}
      <footer className="bg-black text-gray-200">
          <div className="border-t border-gray-800 p-4 text-center">
            <p>Copyright &copy; {new Date().getFullYear()} Gerry Yang. All rights reserved.</p>
          </div>
      </footer>
    </>
  );
}

const projects = [
  {
    title: "Data Insights Dashboards",
    description: "Turn chaos into clarity. Get real-time insights with custom dashboards that track KPIs, predict trends, and empower smarter decisions.",
    image: "/finance-dashboard.png",
    demoUrl: "/demos/data-dashboard"
  },
  {
    title: "Client Management Systems",
    description: "Build stronger relationships. We create CRM tools that centralise client data, automate follow-ups, and help your team deliver standout service.",
    image: "/client-management.png",
    demoUrl: "/demos/client-management"
  },
  {
    title: "Event & Booking Platforms",
    description: "Fill seats, not spreadsheets. We build seamless booking systems for events, appointments, or reservations - integrated with payments, reminders, and analytics.",
    image: "/event-booking.png",
    demoUrl: "/demos/events-booking"
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "We'll meet to understand your business, current processes, and pain points."
  },
  {
    title: "Proposal",
    description: "We'll create a detailed proposal for your approval."
  },
  {
    title: "Development",
    description: "We'll work with you to design, build, and test your tailored software."
  },
  {
    title: "Delivery",
    description: "We'll help you integrate your tailored software seemlessly into your business."
  },
  {
    title: "Support",
    description: "We'll provide ongoing support to ensure your business thrives."
  }
];
