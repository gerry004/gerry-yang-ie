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
        {/* Hero Section - removed background */}
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Optimising Dublin's Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Helping you cut costs, automate processes, and transform your business operations with custom software solutions, tailored to your needs.
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border border-blue-500 hover:bg-blue-500/10 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Work with Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - removed background */}
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

        {/* Contact Section - removed background */}
        <section id="contact" className="relative w-full">
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Work With Me
              </h2>
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
    title: "Client Management Systems",
    description: "Streamline your client interactions and data management",
    image: "/client-management.png",
    demoUrl: "/demos/client-management"
  },
  {
    title: "Booking Platforms",
    description: "Seamless event scheduling and management solutions",
    image: "/event-booking.png",
    demoUrl: "/demos/events-booking"
  },
  {
    title: "Finance Data Dashboards",
    description: "Real-time insights and analytics for your businesss",
    image: "/finance-dashboard.png",
    demoUrl: "/demos/data-dashboard"
  },
];
