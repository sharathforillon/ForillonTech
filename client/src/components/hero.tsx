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
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* McKinsey-inspired Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/6153354/6153354-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/3196284/3196284-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      
      {/* Sophisticated Overlay - McKinsey Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-forillon-navy/85 via-forillon-navy/80 to-slate-gray/85"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-electric-teal rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-electric-teal rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-electric-teal rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* McKinsey-style Badge */}
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-electric-teal mr-3" />
            <span className="text-white font-medium tracking-wide">ENTERPRISE AI & DIGITAL TRANSFORMATION</span>
          </div>
          
          {/* Main Headline - McKinsey Style */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight text-white leading-tight">
            Transforming
            <span className="block font-bold text-electric-teal">Enterprise</span>
            <span className="block font-light">Intelligence</span>
          </h1>
          
          {/* Sophisticated Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We architect comprehensive digital transformations that position global enterprises 
            at the forefront of technological innovation and operational excellence.
          </p>
          
          {/* Clean CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={() => window.open('https://calendly.com/forillon-technologies/consultation', '_blank')}
              className="bg-electric-teal hover:bg-electric-teal/90 text-white px-10 py-4 text-lg font-medium shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToSolutions}
              className="border-2 border-white text-white px-10 py-4 text-lg font-medium hover:bg-white hover:text-forillon-navy transition-all duration-300 rounded-full"
            >
              Explore Solutions <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
          
          {/* Enterprise Stats - McKinsey Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-electric-teal mb-2">{stat.number}</div>
                <div className="text-sm text-white/80 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Trust Indicators - McKinsey Style */}
        <div className="mt-20 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-4xl mx-auto">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/80 text-sm font-light tracking-wide">
                Trusted by Fortune 500 companies • Toronto, Canada • Global Impact
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-electric-teal fill-current" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">Excellence Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
