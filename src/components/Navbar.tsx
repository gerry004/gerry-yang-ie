'use client';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black border-b border-white/10" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-medium tracking-tight text-white">
            GY
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {['Problems', 'Projects', 'Process', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 