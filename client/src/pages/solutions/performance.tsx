import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, BarChart, Settings } from "lucide-react";

export default function Performance() {
  const benefits = [
    "70% improvement in system performance and response times",
    "Data-driven optimization strategies for maximum ROI",
    "Proactive monitoring and performance tuning capabilities",
    "Scalable architecture that handles peak loads efficiently",
    "Comprehensive performance analytics and reporting"
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Advanced performance tuning and optimization strategies for maximum system efficiency"
    },
    {
      icon: BarChart,
      title: "Analytics & Monitoring",
      description: "Real-time performance monitoring with comprehensive analytics and predictive insights"
    },
    {
      icon: Settings,
      title: "System Tuning",
      description: "Continuous system optimization and fine-tuning for sustained high performance"
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
        <div className="absolute inset-0 bg-forillon-navy/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/20 rounded-full mb-6">
                <span className="text-electric-teal font-semibold text-sm">PERFORMANCE ENGINEERING</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.3)' }}>
                Maximum Performance, Proven Results
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0px 0px 6px rgba(0,0,0,0.2)' }}>
                Data-driven optimization strategies to maximize efficiency and ROI across your technology investments.
              </p>
              <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
                Optimize Performance <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Performance Analytics"
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
              Performance Engineering Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our performance engineering solutions deliver measurable improvements in system efficiency and business outcomes.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Performance Metrics"
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
              Performance Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive performance engineering services designed to maximize your technology ROI.
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
            Ready to Maximize Performance?
          </h2>
          <p className="text-xl text-silver-mist mb-8">
            Let's optimize your technology infrastructure for peak performance and maximum business value.
          </p>
          <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
            Schedule Performance Assessment <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}