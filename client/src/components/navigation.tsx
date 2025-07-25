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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-electric-teal/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <img 
                src={F_nobackground} 
                alt="Forillon Technologies" 
                className="h-10 w-auto mr-3"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-forillon-navy">
                  Forillon Technologies
                </span>
                <span className="text-xs text-electric-teal font-medium">
                  Trusted to Transform
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-body-md font-bold transition-colors focus-enterprise">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-body-md font-bold transition-colors flex items-center focus-enterprise">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-100 shadow-lg rounded-lg p-2">
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
              <Link href="/why-forillon" className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-body-md font-bold transition-colors focus-enterprise">
                Why Forillon
              </Link>
              <Link href="/about" className="text-slate-gray hover:text-forillon-navy px-3 py-2 text-body-md font-bold transition-colors focus-enterprise">
                About
              </Link>
              <Link href="/contact" className="btn-primary px-4 py-2 font-bold focus-enterprise">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-forillon-navy hover:text-electric-teal"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 bg-white/98 backdrop-blur-lg border-t-2 border-electric-teal/30 shadow-lg">
            <Link href="/" className="text-forillon-navy hover:text-electric-teal block px-3 py-2 text-base font-bold" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-forillon-navy hover:text-electric-teal block px-3 py-2 text-base font-bold" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/solutions" className="text-forillon-navy hover:text-electric-teal block px-3 py-2 text-base font-bold" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link href="/why-forillon" className="text-forillon-navy hover:text-electric-teal block px-3 py-2 text-base font-bold" onClick={() => setIsMenuOpen(false)}>
              Why Forillon
            </Link>
            <Link href="/blog" className="text-forillon-navy hover:text-electric-teal block px-3 py-2 text-base font-bold" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-forillon-navy hover:text-electric-teal block px-3 py-2 text-base font-bold" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
