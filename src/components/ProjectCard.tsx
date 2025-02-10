'use client';

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
}

export default function ProjectCard({ title, description, image, demoUrl }: ProjectCardProps) {
  const handleClick = () => {
    window.open(demoUrl, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
    >
      <div className="h-64 bg-gray-700 relative overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <span className="text-blue-400 font-medium">View Demo →</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
} 