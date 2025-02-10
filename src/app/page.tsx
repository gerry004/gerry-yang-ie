import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Optimising Dublin's Businesses with Custom Software Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transforming your business operations with AI-powered software solutions
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Projects
            </button>
            <button className="border border-blue-500 hover:bg-blue-500/10 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Work with Me
            </button>
          </div>
        </div>
      </section>

      {/* Who You Are Section */}
      <section className="container mx-auto px-4 py-24 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Who You Are?</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              You are a business owner. Customer demands are growing and your staff are stretched beyond capacity. 
              Menial tasks are taking over their day and they are losing sight of what is important. 
              You think "this is not how my business should run…"
            </p>
            <p>
              You hear all the buzz with AI and know that your business needs to become more efficient to compete. 
              If only you had an extra team member to help… That's where we come in!
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-24 bg-gray-800/50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Work With Me</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

const projects = [
  {
    title: "Client Management System",
    description: "Streamline your client interactions and data management",
    image: "/client-mgmt.jpg",
  },
  {
    title: "Events Booking Platform",
    description: "Seamless event scheduling and management solution",
    image: "/events-booking.jpg",
  },
  {
    title: "Data Dashboard",
    description: "Real-time insights and analytics for your business",
    image: "/data-dashboard.jpg",
  },
];
