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
    <section className="relative section-padding-xl overflow-hidden min-h-screen flex items-center bg-gray-900">
      {/* Clean Background with Professional Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Enterprise Technology Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=85')`
          }}
        ></div>
        
        {/* Professional Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-forillon-navy/95 via-forillon-navy/90 to-forillon-navy/95"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        {/* Subtle Ambient Lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-teal/8 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/15 rounded-lg mb-8 border border-electric-teal/30">
              <Sparkles className="w-4 h-4 text-electric-teal mr-2" />
              <span className="text-electric-teal font-medium text-label-lg">ENTERPRISE AI & DIGITAL TRANSFORMATION</span>
            </div>
            
            <h1 className="text-display-lg md:text-display-xl tracking-tight text-white leading-none mb-8 drop-shadow-lg">
              The science of
              <span className="block text-electric-teal">transformation</span>
            </h1>
            
            <p className="text-body-lg text-gray-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              Where trusted expertise meets powerful technology. We drive high-impact outcomes using advanced AI and data-driven approaches to tackle your most critical challenges.
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center px-3 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-electric-teal/30">
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
            {/* Enterprise Intelligence Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 h-96">
              {/* Futuristic Enterprise Technology Image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Futuristic data center and cloud computing visualization representing cutting-edge enterprise AI technology" 
                className="w-full h-full object-cover" 
              />
              
              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-forillon-navy/60 via-forillon-navy/40 to-electric-teal/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forillon-navy/50"></div>
              
              {/* Enterprise Tech Icons Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Enterprise AI</p>
                  <p className="text-white/80 text-sm">Transformation</p>
                </div>
              </div>
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
