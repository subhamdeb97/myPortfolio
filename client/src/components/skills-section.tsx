import { Cloud, Code, Server, CloudUpload, Database, Brain } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Salesforce",
      icon: Cloud,
      color: "blue",
      skills: ["Apex", "Lightning Web Components", "Flows", "SOQL", "Salesforce APIs"]
    },
    {
      title: "Frontend",
      icon: Code,
      color: "green",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "purple",
      skills: ["Node.js", "Python", "REST APIs", "GraphQL", "Express.js"]
    },
    {
      title: "Cloud & DevOps",
      icon: CloudUpload,
      color: "orange",
      skills: ["AWS", "Docker", "Git", "CI/CD", "Vercel"]
    },
    {
      title: "Database",
      icon: Database,
      color: "red",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"]
    },
    {
      title: "AI & Analytics",
      icon: Brain,
      color: "indigo",
      skills: ["OpenAI APIs", "Machine Learning", "Data Analytics", "TensorFlow", "pandas"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", text: "text-primary", icon: "text-primary", skill: "bg-blue-50 text-primary" },
      green: { bg: "bg-green-100", text: "text-green-600", icon: "text-green-600", skill: "bg-green-50 text-green-700" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", icon: "text-purple-600", skill: "bg-purple-50 text-purple-700" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", icon: "text-orange-600", skill: "bg-orange-50 text-orange-700" },
      red: { bg: "bg-red-100", text: "text-red-600", icon: "text-red-600", skill: "bg-red-50 text-red-700" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", icon: "text-indigo-600", skill: "bg-indigo-50 text-indigo-700" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning Salesforce ecosystem and modern web technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div 
                key={category.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className={`${colors.icon} text-xl`} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className={`inline-block ${colors.skill} px-3 py-2 rounded-full text-sm font-medium ${skillIndex % 2 === 1 ? 'ml-2' : ''}`}
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
