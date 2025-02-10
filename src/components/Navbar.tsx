'use client';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            GY
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 