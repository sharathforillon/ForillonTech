import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Server, Shield, Zap } from "lucide-react";

export default function Infrastructure() {
  const benefits = [
    "99.9% uptime guarantee with enterprise-grade reliability",
    "Scalable cloud architecture that grows with your business",
    "Zero-compromise security with advanced threat protection",
    "50% reduction in infrastructure costs through optimization",
    "24/7 monitoring and proactive maintenance support"
  ];

  const capabilities = [
    {
      icon: Server,
      title: "Cloud Architecture",
      description: "Scalable, resilient cloud infrastructures designed for enterprise performance and reliability"
    },
    {
      icon: Shield,
      title: "Security Framework",
      description: "Multi-layered security architecture with advanced threat detection and prevention"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance systems engineered for speed, efficiency, and optimal resource utilization"
    }
  ];

  return (
    <div className="min-h-screen bg-ice-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-forillon-navy py-20 lg:py-32 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-forillon-navy/90 to-forillon-navy/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/20 rounded-full mb-6">
                <span className="text-electric-teal font-semibold text-sm">TECHNOLOGY INFRASTRUCTURE</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                Enterprise Infrastructure That Scales
              </h1>
              <p className="text-xl md:text-2xl text-silver-mist mb-8">
                Enterprise-grade infrastructure that scales with your ambitions while maintaining security, performance, and reliability.
              </p>
              <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
                Build Your Infrastructure <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Technology Infrastructure"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6">
              Infrastructure That Delivers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our infrastructure solutions provide the foundation for your digital transformation with guaranteed performance and reliability.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-forillon-navy mb-8">
                What You Can Expect
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-electric-teal mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Data Center"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6">
              Infrastructure Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure services designed for enterprise reliability and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-electric-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-electric-teal" />
                </div>
                <h3 className="text-xl font-semibold text-forillon-navy mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Enterprise Infrastructure?
          </h2>
          <p className="text-xl text-silver-mist mb-8">
            Let's architect the technology foundation that will power your organization's growth for years to come.
          </p>
          <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
            Schedule Infrastructure Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}