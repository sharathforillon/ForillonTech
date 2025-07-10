import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center cursor-pointer">
                <img 
                  src="/assets/logo_nobackground_1752130704893.png" 
                  alt="Forillon Technologies" 
                  className="h-8 w-auto mr-3"
                />
                <span className="text-xl font-semibold text-forillon-navy">
                  Forillon Technologies
                </span>
              </a>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-sm font-medium transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('why-forillon')}
                className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-sm font-medium transition-colors"
              >
                Why Forillon
              </button>
              <Link href="/blog">
                <a className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-sm font-medium transition-colors">
                  Blog
                </a>
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-electric-teal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-gray hover:text-forillon-navy"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-silver-mist">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-gray hover:text-forillon-navy block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-slate-gray hover:text-forillon-navy block px-3 py-2 text-base font-medium w-full text-left"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('why-forillon')}
              className="text-slate-gray hover:text-forillon-navy block px-3 py-2 text-base font-medium w-full text-left"
            >
              Why Forillon
            </button>
            <Link href="/blog">
              <a className="text-slate-gray hover:text-forillon-navy block px-3 py-2 text-base font-medium">
                Blog
              </a>
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-gray hover:text-forillon-navy block px-3 py-2 text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
