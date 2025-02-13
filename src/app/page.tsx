'use client';

import { useEffect, useRef } from 'react';
import ProjectCard from '@/components/ProjectCard';
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
        // Removed rotation for a cleaner look
        
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
                <div className="mb-4">
                  <span className="bg-[#f7f7f7] text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                    CUSTOM SOFTWARE SOLUTIONS
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  Optimise Your{' '}
                  <span className="relative">
                    <span className="relative z-10">Dublin Business</span>
                    <div className="absolute bottom-2 left-0 w-full h-4 bg-[#FFE168] -z-0"></div>
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
                  {/* Process Flow Visualization */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Process Nodes */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Custom Solutions</h3>
                      <p className="text-sm text-gray-500">Built for your workflow</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Scalable Systems</h3>
                      <p className="text-sm text-gray-500">Grow with confidence</p>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <path d="M150 100 L250 200" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                      <path d="M250 100 L150 200" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                    </svg>
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
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Software Should Simplify Your Work - Not Complicate It
                  </h2>
                  <p className="text-xl text-gray-400">
                    Manual processes. Disconnected tools. Endless spreadsheets. If your team spends more time fighting clunky software than serving customers, it's time for a change. We design custom software that automates workflows, unifies data, and turns chaos into clarity—so you can focus on growing your Dublin business.
                  </p>
                </div>
                {/* Animated Illustration */}
                <div className="animate-on-scroll">
                  <div className="bg-gray-800 rounded-2xl p-8">
                    <div className="space-y-4">
                      {/* Animated Process Flow */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="flex-1 h-16 bg-gray-700/50 rounded-xl animate-pulse" />
                      </div>
                      {/* Transformed Process */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1 h-16 bg-gray-700/50 rounded-xl animate-pulse delay-150" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Problem */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Animated Illustration */}
                <div className="animate-on-scroll order-2 lg:order-1">
                  <div className="bg-gray-800 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i}
                          className="aspect-square bg-gray-700/50 rounded-xl overflow-hidden"
                        >
                          <div className="w-full h-full bg-gradient-to-br from-gray-700/50 to-gray-600/50 animate-pulse" style={{
                            animationDelay: `${i * 150}ms`
                          }} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                      <div className="px-4 py-2 bg-blue-500/10 rounded-lg">
                        <span className="text-blue-400 text-sm font-medium">Scalable Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animate-on-scroll order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Transform Operations with Software Built for Your Ambitions
                  </h2>
                  <p className="text-xl text-gray-400">
                    Forget off-the-shelf solutions that never quite fit. We partner with Dublin businesses like yours to build tools that work the way YOU work. Whether you need to streamline client management, automate bookings, or turn data into actionable insights, we'll craft a system that cuts costs, saves time, and scales with your goals.
                  </p>
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
                <span className="bg-[#f7f7f7] text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                  MODERN CRM STACK
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
                  One hub for all relationships
                </h2>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl">
                  Manage sales, recruiting, partnerships, fundraising, & more. Accelerate prospecting with LinkedIn Extension. 
                  Easily find and validate emails. Streamline your deal pipeline workflow and outreach efforts all from a single platform.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {['Custom Collections', 'Lists', 'Forms', 'Cadence', 'Activities', 'LinkedIn Extension', 'Automation'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-16">
                {projects.map((project, index) => (
                  <div key={project.title} className="animate-on-scroll">
                    <div className="group relative">
                      {/* Project Card with larger image */}
                      <div className="bg-[#f7f7f7] rounded-2xl p-6 lg:p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div className="order-2 lg:order-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                              {project.description}
                            </p>
                            <a 
                              href={project.demoUrl}
                              className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
                            >
                              Explore Demo <ArrowRight className="w-4 h-4" />
                            </a>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-on-scroll">
                A Simple, Transparent, Stress-Free Process
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="animate-on-scroll">
                    <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-medium">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-200">{step.title}</h3>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full">
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-2xl mx-auto animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Optimise Your Business
              </h2>
              <p className="text-xl text-gray-300 text-center mb-12">
                Ready to ditch inefficiencies? Whether you need a custom dashboard, CRM, or a full process automation overhaul, we'll craft a solution that fits.
              </p>
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const projects = [
  {
    title: "Data-Driven Dashboards",
    description: "Turn chaos into clarity. Get real-time insights with custom dashboards that track KPIs, predict trends, and empower smarter decisions for Dublin's competitive markets.",
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
    description: "We'll meet to map your goals, pain points, and budget."
  },
  {
    title: "Proposal",
    description: "We'll create a detailed proposal for your approval."
  },
  {
    title: "Development",
    description: "We'll work with you to design, build, and test the software."
  },
  {
    title: "Delivery",
    description: "We'll deliver the software and provide ongoing support."
  }
];
