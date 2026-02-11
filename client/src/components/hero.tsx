import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Sparkles, Shield, Zap, TrendingUp, CheckCircle, Star, Award, Lightbulb } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import ibmBadge from "@/assets/images/ibm-patent-badge.png";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

function AnimatedStat({ stat, index }: { stat: { number: string; label: string; icon: any; static?: boolean }; index: number }) {
  const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
  const suffix = stat.number.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericValue, 2000 + index * 200);

  return (
    <div ref={ref} className="text-center group hover:scale-105 transition-all duration-300">
      <div className="mb-6">
        <div className="w-24 h-24 bg-electric-teal rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
          <stat.icon className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-3">
        {stat.static ? stat.number : `${count}${suffix}`}
      </div>
      <div className="text-base text-gray-700 font-semibold leading-tight">
        {stat.label}
      </div>
    </div>
  );
}

function AnimatedStatMobile({ stat, index }: { stat: { number: string; label: string; icon: any; static?: boolean }; index: number }) {
  const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
  const suffix = stat.number.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericValue, 2000 + index * 200);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-3">
        <div className="w-12 h-12 bg-electric-teal rounded-xl flex items-center justify-center mx-auto shadow-lg">
          <stat.icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-xl font-bold text-gray-900 mb-1">
        {stat.static ? stat.number : `${count}${suffix}`}
      </div>
      <div className="text-xs text-gray-700 font-semibold leading-tight">
        {stat.label}
      </div>
    </div>
  );
}

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
    { number: "99%", label: "System Uptime Guaranteed", icon: Shield },
    { number: "15+", label: "Years of Excellence", icon: Star },
    { number: "24 x 7", label: "Support & Monitoring", icon: Zap, static: true }
  ];

  const achievements = [
    "Fortune 500 trusted partner",
    "Cloud migration expert",
    "Enterprise security certified"
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="video-hero-background"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay gradients for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/10 backdrop-blur-sm rounded-lg mb-8 border border-electric-teal/20">
              <Sparkles className="w-4 h-4 mr-2 text-electric-teal" />
              <span className="font-medium text-label-lg text-electric-teal">ENTERPRISE AI & DIGITAL TRANSFORMATION</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-8 text-gray-900">
              The science of
              <span className="block text-electric-teal">transformation</span>
            </h1>
            
            <p className="text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-gray-700 font-medium">
              Where trusted expertise meets powerful technology. We drive high-impact outcomes using advanced AI and data-driven approaches to tackle your most critical challenges.
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-electric-teal/30 transition-all duration-300 shadow-sm">
                  <CheckCircle className="w-5 h-5 mr-3 text-electric-teal" />
                  <span className="text-base font-semibold text-gray-900">{achievement}</span>
                </div>
              ))}
            </div>
            
            {/* Patent Credibility Badge */}
            <div className="flex justify-center lg:justify-start mb-8">
              <a 
                href="/about" 
                className="inline-flex items-center gap-3 px-5 py-3 bg-forillon-navy rounded-xl hover:bg-forillon-navy/90 transition-colors group cursor-pointer shadow-lg border border-white/10"
                data-testid="link-patent-credibility"
              >
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">IBM Inventor • 2 USPTO AI Patents</p>
                    <p className="text-gray-300 text-xs">Founded by a recognized AI innovator</p>
                  </div>
                  <div className="w-14 h-14 bg-transparent flex items-center justify-center flex-shrink-0">
                    <img src={ibmBadge} alt="IBM Patent Badge" className="w-full h-full object-contain filter brightness-110 contrast-110" />
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-electric-teal group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
                className="btn-primary px-8 py-4 text-body-lg font-medium focus-enterprise h-12 w-full sm:w-auto shadow-lg"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToSolutions}
                className="btn-secondary px-8 py-4 text-body-lg font-medium focus-enterprise h-12 w-full sm:w-auto bg-white/80 backdrop-blur-sm"
              >
                Explore Solutions <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Stats - Only visible on mobile, right after CTA */}
            <div className="sm:hidden mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <AnimatedStatMobile key={index} stat={stat} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Enterprise Intelligence Visual - Hidden on mobile */}
          <div className="relative mt-12 lg:mt-0 hidden sm:block">
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
            
            {/* Enhanced Stats Card with Animated Counters */}
            <div className="absolute -bottom-12 left-2 right-2">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-12">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <AnimatedStat key={index} stat={stat} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Bottom Trust Indicators */}
        <div className="mt-8 sm:mt-32 pt-6 sm:pt-8 border-t border-electric-teal/20">
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
