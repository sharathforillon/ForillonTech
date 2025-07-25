import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import forilonLogo from "@assets/logo_nobackground_1752130704893.png";

import F_nobackground from "@assets/F-nobackground.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer group">
              <img 
                src={F_nobackground} 
                alt="Forillon Technologies" 
                className="h-8 w-auto mr-3 transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-forillon-navy tracking-tight">
                  Forillon
                </span>
                <span className="text-xs text-electric-teal font-medium -mt-1">
                  Technologies
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-forillon-navy transition-colors duration-200 flex items-center rounded-md hover:bg-gray-50">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 bg-white border border-gray-200 shadow-xl rounded-xl p-3 mt-2">
                  <div className="space-y-1">
                    <DropdownMenuItem asChild>
                      <Link href="/solutions/ai-transformation" className="flex flex-col px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-semibold text-forillon-navy">AI & Digital Transformation</span>
                        <span className="text-xs text-gray-500 mt-1">Intelligent automation and AI strategy</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/solutions/infrastructure" className="flex flex-col px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-semibold text-forillon-navy">Technology Infrastructure</span>
                        <span className="text-xs text-gray-500 mt-1">Scalable enterprise systems</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/solutions/cloud-migration" className="flex flex-col px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-semibold text-forillon-navy">Cloud Migration & Modernization</span>
                        <span className="text-xs text-gray-500 mt-1">Cloud-native transformation</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/solutions/security" className="flex flex-col px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-semibold text-forillon-navy">Enterprise Security</span>
                        <span className="text-xs text-gray-500 mt-1">Comprehensive security solutions</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/solutions/performance" className="flex flex-col px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-semibold text-forillon-navy">Performance Engineering</span>
                        <span className="text-xs text-gray-500 mt-1">Optimization and reliability</span>
                      </Link>
                    </DropdownMenuItem>
                    <div className="border-t border-gray-100 mt-3 pt-3">
                      <DropdownMenuItem asChild>
                        <Link href="/solutions" className="flex items-center px-4 py-3 rounded-lg hover:bg-electric-teal/5 transition-colors">
                          <span className="text-sm font-semibold text-electric-teal">View All Solutions →</span>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="/why-forillon" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-forillon-navy transition-colors duration-200 rounded-md hover:bg-gray-50">
                Why Forillon
              </Link>
              
              <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-forillon-navy transition-colors duration-200 rounded-md hover:bg-gray-50">
                About
              </Link>
            </div>
            
            {/* CTA Button */}
            <div className="ml-8">
              <Link href="/contact" className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-forillon-navy hover:bg-forillon-navy/90 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-forillon-navy hover:bg-gray-50 rounded-md transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="px-4 py-6 space-y-4 bg-white">
            <div className="space-y-3">
              <Link 
                href="/solutions" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-forillon-navy hover:bg-gray-50 rounded-md transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/why-forillon" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-forillon-navy hover:bg-gray-50 rounded-md transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Why Forillon
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-forillon-navy hover:bg-gray-50 rounded-md transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <Link 
                href="/contact" 
                className="block w-full px-6 py-3 text-center text-sm font-semibold text-white bg-forillon-navy hover:bg-forillon-navy/90 rounded-lg transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
