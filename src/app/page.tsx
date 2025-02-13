'use client';

import { useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';

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
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Optimising Dublin's Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Cut costs, automate workflows, and future-proof your operations with custom software built for your needs.
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('problems')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Tell Me More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section id="problems" className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-24">
              {/* First Problem */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Software Should Simplify Your Work - Not Complicate It
                </h2>
                <p className="text-xl text-gray-300">
                  Manual processes. Disconnected tools. Endless spreadsheets. If your team spends more time fighting clunky software than serving customers, it's time for a change. We design custom software that automates workflows, unifies data, and turns chaos into clarity—so you can focus on growing your Dublin business.
                </p>
              </div>

              {/* Second Problem */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Transform Operations with Software Built for Your Ambitions
                </h2>
                <p className="text-xl text-gray-300">
                  Forget off-the-shelf solutions that never quite fit. We partner with Dublin businesses like yours to build tools that work the way YOU work. Whether you need to streamline client management, automate bookings, or turn data into actionable insights, we'll craft a system that cuts costs, saves time, and scales with your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Work Section */}
        <section id="projects" className="relative w-full">
          <div className="container mx-auto px-4 py-32 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              How Can We Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                A Simple, Transparent, Stress-Free Process
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-medium">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-200">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full">
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-2xl mx-auto">
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
