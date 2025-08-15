export default function Footer() {
  return (
    <footer className="glass-section py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Subham Deb</h3>
            <p className="text-gray-300 leading-relaxed">
              Salesforce Developer & Full-Stack Engineer creating scalable solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Salesforce Development</li>
              <li>Full-Stack Web Development</li>
              <li>AI Platform Integration</li>
              <li>Cloud Solutions</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>subham.deb@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available for Remote Work</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Subham Deb. All rights reserved. Built with React and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
}
