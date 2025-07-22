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
    <section className="relative bg-gradient-to-br from-white via-ice-white to-silver-mist/30 py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Modern Geometric Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-ice-white/90 to-silver-mist/10"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(49, 216, 185, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(49, 216, 185, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite'
            }}
          ></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-electric-teal/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-electric-teal/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 border-2 border-electric-teal/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 right-40 w-20 h-20 bg-gradient-to-r from-electric-teal/20 to-transparent rotate-12 animate-float"></div>
        </div>
        
        {/* Dynamic Light Rays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-electric-teal/40 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-electric-teal/30 via-transparent to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-electric-teal/20 via-transparent to-transparent animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-electric-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-electric-teal/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-electric-teal/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-electric-teal mr-2" />
              <span className="text-electric-teal font-semibold text-sm">ENTERPRISE AI & DIGITAL TRANSFORMATION</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-forillon-navy leading-tight">
              Trusted to
              <span className="block text-electric-teal">Transform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-gray mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Where <span className="text-electric-teal font-semibold">Intelligence</span> becomes <span className="text-electric-teal font-semibold">Infrastructure</span>. 
              We architect enterprise-grade solutions that scale with your ambitions.
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {achievements.map((achievement, index) => (
                <Badge key={index} variant="secondary" className="bg-electric-teal/10 text-forillon-navy border-electric-teal/30">
                  <CheckCircle className="w-3 h-3 mr-1 text-electric-teal" />
                  {achievement}
                </Badge>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                onClick={() => window.open('https://calendly.com/forillon-technologies/consultation', '_blank')}
                className="bg-electric-teal hover:bg-electric-teal/90 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToSolutions}
                className="border-2 border-electric-teal text-electric-teal px-8 py-4 text-lg font-semibold hover:bg-electric-teal hover:text-white transition-all duration-300"
              >
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - Enterprise Intelligence Visual */}
          <div className="relative">
            {/* Background Tech Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="AI and machine learning visualization representing enterprise intelligence" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/30 to-forillon-navy/20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forillon-navy/40"></div>
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
