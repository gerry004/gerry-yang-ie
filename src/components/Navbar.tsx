'use client';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-md border-b border-white/5" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-medium tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            GY
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {['Problems', 'Projects', 'Process', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors relative group"
              >
                {item}
                <span className="absolute inset-x-2 bottom-1.5 h-px bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 