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
              <Link href="/about" className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors">
                About
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors flex items-center">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/solutions/ai-transformation" className="w-full px-4 py-2 text-forillon-navy hover:bg-electric-teal/10">
                      AI & Digital Transformation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/solutions/infrastructure" className="w-full px-4 py-2 text-forillon-navy hover:bg-electric-teal/10">
                      Technology Infrastructure
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/solutions/cloud-migration" className="w-full px-4 py-2 text-forillon-navy hover:bg-electric-teal/10">
                      Cloud Migration & Modernization
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/solutions/security" className="w-full px-4 py-2 text-forillon-navy hover:bg-electric-teal/10">
                      Enterprise Security
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/solutions/performance" className="w-full px-4 py-2 text-forillon-navy hover:bg-electric-teal/10">
                      Performance Engineering
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/solutions" className="w-full px-4 py-2 text-electric-teal font-semibold hover:bg-electric-teal/10">
                      View All Solutions
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/why-forillon" className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors">
                Why Forillon
              </Link>
              <Link href="/blog" className="text-white hover:text-electric-teal px-3 py-2 text-sm font-semibold transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="bg-electric-teal text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-transparent hover:text-electric-teal border-2 border-electric-teal transition-all">
                Contact
              </Link>
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
            <Link href="/about" className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/solutions" className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link href="/why-forillon" className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
              Why Forillon
            </Link>
            <Link href="/blog" className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-electric-teal block px-3 py-2 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
