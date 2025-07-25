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
    <section className="relative section-padding-xl min-h-screen flex items-center bg-white">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/8 rounded-lg mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-electric-teal" />
              <span className="font-medium text-label-lg text-electric-teal">ENTERPRISE AI & DIGITAL TRANSFORMATION</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6 text-gray-900">
              The science of
              <span className="block text-electric-teal">transformation</span>
            </h1>

            <p className="text-lg text-gray-600 mb-4 font-medium">
              Powering enterprise AI adoption across finance, healthcare, manufacturing & retail
            </p>
            
            <p className="text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-gray-700 font-medium">
              Where trusted expertise meets powerful technology. We drive high-impact outcomes using advanced AI and data-driven approaches to tackle your most critical challenges.
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-electric-teal/30 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 mr-3 text-electric-teal" />
                  <span className="text-base font-semibold text-gray-900">{achievement}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
                className="bg-electric-teal hover:bg-electric-teal/90 text-white px-10 py-5 text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 h-16"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToSolutions}
                className="border-2 border-forillon-navy text-forillon-navy hover:bg-forillon-navy hover:text-white px-10 py-5 text-xl font-bold transition-all duration-200 h-16"
              >
                Explore Solutions <ArrowRight className="ml-3 h-6 w-6" />
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
            
            {/* Enhanced Stats Card with Color Variation */}
            <div className="absolute -bottom-12 left-2 right-2">
              <div className="bg-gradient-to-br from-forillon-navy to-forillon-navy/90 rounded-3xl shadow-2xl border border-electric-teal/20 p-12 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                      <div className="mb-6">
                        <div className="w-24 h-24 bg-electric-teal rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                          <stat.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white mb-3">
                        {stat.number}
                      </div>
                      <div className="text-base text-gray-200 font-semibold leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Trust Indicators */}
        <div className="mt-32 pt-8 border-t border-electric-teal/20">
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
