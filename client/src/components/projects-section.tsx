import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Driven Business Intelligence",
      description: "Comprehensive AI platform integrating with Salesforce for predictive analytics, automated workflows, and intelligent business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["AI Platform", "Next.js"],
      year: "2024"
    },
    {
      title: "Enterprise CRM Enhancement",
      description: "Custom Lightning Web Components and Apex solutions for enhanced customer relationship management with automated lead scoring.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Salesforce", "LWC"],
      year: "2023"
    },
    {
      title: "Multi-Cloud Integration Hub",
      description: "Scalable integration platform connecting Salesforce with multiple cloud services, enabling seamless data synchronization and workflow automation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Cloud", "Node.js"],
      year: "2023"
    },
    {
      title: "Full-Stack E-commerce Solution",
      description: "Modern e-commerce platform with Next.js frontend, Node.js backend, and integrated payment processing with real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["E-commerce", "React"],
      year: "2024"
    },
    {
      title: "Real-time Analytics Platform",
      description: "Advanced analytics dashboard built with Python and React, providing real-time insights and predictive analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Analytics", "Python"],
      year: "2023"
    },
    {
      title: "Mobile App Backend API",
      description: "Robust Node.js backend API supporting mobile applications with authentication, real-time messaging, and cloud storage integration.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Mobile", "API"],
      year: "2024"
    }
  ];

  const getTagColor = (tag: string) => {
    const colorMap = {
      "AI Platform": "bg-blue-100 text-primary",
      "Next.js": "bg-green-100 text-green-700",
      "Salesforce": "bg-blue-100 text-primary",
      "LWC": "bg-purple-100 text-purple-700",
      "Cloud": "bg-orange-100 text-orange-700",
      "Node.js": "bg-green-100 text-green-700",
      "E-commerce": "bg-green-100 text-green-700",
      "React": "bg-blue-100 text-primary",
      "Analytics": "bg-purple-100 text-purple-700",
      "Python": "bg-red-100 text-red-700",
      "Mobile": "bg-indigo-100 text-indigo-700",
      "API": "bg-purple-100 text-purple-700"
    };
    return colorMap[tag as keyof typeof colorMap] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="projects" className="py-20 glass-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning Salesforce customizations, full-stack applications, and AI-driven platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              data-testid={`project-${index}`}
            >
              <div className="glass-card rounded-xl m-4 mb-0 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`${getTagColor(tag)} px-3 py-1 rounded-full text-sm font-medium mr-2`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button 
                      className="text-gray-400 hover:text-blue-300 transition-colors duration-200"
                      data-testid={`project-github-${index}`}
                    >
                      <Github size={18} />
                    </button>
                    <button 
                      className="text-gray-400 hover:text-blue-300 transition-colors duration-200"
                      data-testid={`project-link-${index}`}
                    >
                      <ExternalLink size={18} />
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="glass-button inline-flex items-center px-8 py-4 font-medium rounded-lg text-white"
            data-testid="view-all-projects"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
