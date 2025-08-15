export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge business needs with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the past 6+ years, I've evolved from a passionate developer into a seasoned full-stack engineer with deep expertise in Salesforce ecosystem. My journey has been marked by continuous learning and delivering impactful solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in building scalable applications using modern technologies like Next.js, Node.js, and Python, while leveraging my Salesforce expertise in Apex, Lightning Web Components, and Flows to create comprehensive business solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="experience-years">6+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="salesforce-years">3+</div>
                <div className="text-gray-600">Years Salesforce</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Modern tech office with collaborative workspace" 
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="about-office-image"
            />
            
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">What I Bring</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                  AI-driven business platform development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                  Seamless cloud integrations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                  High-performance system architecture
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                  Client-focused solution design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
