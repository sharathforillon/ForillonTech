import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Sparkles, Shield, Zap, TrendingUp, CheckCircle, Star } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "200+", label: "Enterprise Transformations", icon: TrendingUp },
    { number: "99.9%", label: "System Uptime Guaranteed", icon: Shield },
    { number: "15+", label: "Years of Excellence", icon: Star },
    { number: "24/7", label: "Support & Monitoring", icon: Zap }
  ];

  const achievements = [
    "Fortune 500 trusted partner",
    "AI transformation specialist",
    "Cloud migration expert",
    "Enterprise security certified"
  ];

  return (
    <section className="relative bg-gradient-to-br from-forillon-navy via-forillon-navy/95 to-electric-teal/20 section-padding-xl overflow-hidden min-h-screen flex items-center">
      {/* IBM-inspired Clean Background */}
      <div className="absolute inset-0 z-0">
        {/* Minimal Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(20, 184, 166, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(20, 184, 166, 0.02) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px'
            }}
          ></div>
        </div>
        
        {/* Enhanced Ambient Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-electric-teal/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 -right-16 w-64 h-64 bg-white/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-56 h-56 bg-electric-teal/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Enhanced Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-teal/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-electric-teal/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-electric-teal/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/20 border border-electric-teal/30 rounded-lg mb-8">
              <Sparkles className="w-4 h-4 text-electric-teal mr-2" />
              <span className="text-electric-teal font-medium text-label-lg">ENTERPRISE AI & DIGITAL TRANSFORMATION</span>
            </div>
            
            <h1 className="text-display-lg md:text-display-xl tracking-tight text-white leading-none mb-8">
              The science of
              <span className="block text-electric-teal">transformation</span>
            </h1>
            
            <p className="text-body-lg text-white/90 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Where trusted expertise meets powerful technology. We drive high-impact outcomes using advanced AI and data-driven approaches to tackle your most critical challenges.
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center px-3 py-2 bg-white/10 rounded-lg border border-electric-teal/30">
                  <CheckCircle className="w-4 h-4 mr-2 text-electric-teal" />
                  <span className="text-label-lg text-white font-medium">{achievement}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
                className="btn-primary px-8 py-4 text-body-lg font-medium focus-enterprise h-12"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToSolutions}
                className="btn-secondary px-8 py-4 text-body-lg font-medium focus-enterprise h-12"
              >
                Explore Solutions <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - Enterprise Intelligence Visual */}
          <div className="relative">
            {/* Enhanced Enterprise Intelligence Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 h-96 border border-electric-teal/30">
              {/* Dynamic Dark Background */}
              <div className="w-full h-full bg-gradient-to-br from-forillon-navy/80 via-electric-teal/10 to-forillon-navy/60"></div>
              
              {/* Enhanced Geometric Patterns */}
              <div className="absolute inset-0">
                <div 
                  className="w-full h-full opacity-30 animate-pulse"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(20, 184, 166, 0.3) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(20, 184, 166, 0.3) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(20, 184, 166, 0.3) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(20, 184, 166, 0.3) 75%)
                    `,
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
                  }}
                ></div>
              </div>
              
              {/* Enhanced AI/Tech Icons Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 mx-auto mb-4 bg-electric-teal/20 border border-electric-teal/40 rounded-2xl flex items-center justify-center animate-pulse">
                    <Sparkles className="w-14 h-14 text-electric-teal" />
                  </div>
                  <p className="text-white font-bold text-xl">Artificial Intelligence</p>
                  <p className="text-electric-teal font-medium text-sm mt-2">Enterprise Solutions</p>
                </div>
              </div>
              
              {/* Dynamic Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/20 to-transparent"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-electric-teal/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-lg animate-pulse delay-2000"></div>
            </div>
            
            {/* Overlay Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300 border border-electric-teal/20">
                    <div className="w-8 h-8 bg-electric-teal/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-4 h-4 text-electric-teal" />
                    </div>
                    <div className="text-xl font-bold text-forillon-navy mb-1">{stat.number}</div>
                    <div className="text-xs text-slate-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-electric-teal/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-gray text-sm">
                Trusted by Fortune 500 companies • Based in Dubai, UAE & Toronto, Canada • Serving Globally
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-electric-teal fill-current" />
                ))}
              </div>
              <span className="text-forillon-navy text-sm font-medium">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
