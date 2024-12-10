import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Bus Pass System",
      description: "A simple bus pass system where students can purchase bus pass and bus-incharges can validate the same.",
      image: "https://res.cloudinary.com/dfbibvdhq/image/upload/v1733763572/Screenshot_2024-12-09_at_10.26.42_PM_iwrwae.png",
      github: "https://github.com/arunlorenz/Bus-Pass-System",
      demo: "https://bus-pass-sys.vercel.app/"
    },
    {
      title: "Air Quality Monitoring System",
      description: "A real-time air quality monitoring and alerting embedded system",
      image: "https://res.cloudinary.com/dfbibvdhq/image/upload/v1733763953/Screenshot_2024-12-09_at_10.35.38_PM_kcuuav.png",
      github: "https://github.com/arunlorenz/AirQualityMonitoring",
      //demo: "https://demo.com"
    },
    {
      title: "Instagram Non Follower Analysis",
      description: "A simple flask app that returns comprehensive list of the accounts you follow who don't follow you back",
      image: "https://res.cloudinary.com/dfbibvdhq/image/upload/v1733765952/instagram_hdnaox.jpg",
      github: "https://github.com/arunlorenz/instagram-non-followers-analysis",
      //demo: "https://demo.com"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-zinc-600 hover:text-zinc-900 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-zinc-600">A collection of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-zinc-600 hover:text-zinc-900"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-zinc-600 hover:text-zinc-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}