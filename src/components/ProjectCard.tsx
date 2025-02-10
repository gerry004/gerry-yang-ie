interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <div className="h-48 bg-gray-700">
        {/* Add image here when available */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
} 