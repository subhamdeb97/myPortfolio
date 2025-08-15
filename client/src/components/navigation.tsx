import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Subham Deb</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavClick('#home')} 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('#about')} 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('#skills')} 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavClick('#projects')} 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick('#contact')} 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavClick('#home')}
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('#skills')}
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick('#projects')}
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
