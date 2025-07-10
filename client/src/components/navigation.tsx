import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import forilonLogo from "@assets/Untitled design (2)_1752132662612.png";

import F_nobackground from "@assets/F-nobackground.png";

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
    <nav className="sticky top-0 z-50 bg-forillon-navy border-b border-forillon-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <img 
                src={F_nobackground} 
                alt="Forillon Technologies" 
                className="h-8 w-auto mr-3 brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white">
                  Forillon Technologies
                </span>
                <span className="text-xs text-electric-teal font-medium">
                  Trusted to Transform
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('why-forillon')}
                className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors"
              >
                Why Forillon
              </button>
              <Link href="/blog" className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors">
                Blog
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-electric-teal text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-transparent hover:text-electric-teal border-2 border-electric-teal transition-all"
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
              className="text-white hover:text-electric-teal"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-forillon-navy border-t border-electric-teal">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold w-full text-left"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('why-forillon')}
              className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold w-full text-left"
            >
              Why Forillon
            </button>
            <Link href="/blog" className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold">
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
