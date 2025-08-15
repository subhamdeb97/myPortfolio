import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeDownload = () => {
    // In a real implementation, this would link to an actual resume PDF
    console.log('Resume download requested');
    // window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="pt-16 min-h-screen gradient-bg flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-blue-300 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Subham Deb
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-medium">
                Salesforce Developer & Full-Stack Engineer
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              With over 6 years of experience, including 3+ years specializing in Salesforce, I create scalable solutions using modern technologies. From AI-driven business platforms to cloud integrations, I build high-performance systems tailored to client needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactClick}
                className="glass-button inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg text-white"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={handleResumeDownload}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                data-testid="button-resume"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="glass-card rounded-2xl p-4">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with code on screen" 
                className="rounded-xl w-full h-auto"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
