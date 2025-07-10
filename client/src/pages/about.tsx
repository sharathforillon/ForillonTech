import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-ice-white">
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
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              About Forillon
            </h1>
            <p className="text-xl md:text-2xl text-silver-mist max-w-3xl mx-auto">
              Pioneering the future of enterprise technology through intelligent transformation
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded on the principle that intelligence should become infrastructure, 
                Forillon Technologies emerged from a vision to transform how enterprises 
                approach digital transformation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that the future belongs to organizations that can seamlessly 
                integrate artificial intelligence into their core operations, creating 
                intelligent systems that adapt, learn, and evolve.
              </p>
              <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Our Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide every decision and innovation at Forillon
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-electric-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-forillon-navy">Human-Centered</h3>
              <p className="text-gray-600">
                Technology should amplify human potential, not replace it. We design 
                solutions that empower people to achieve more.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Target className="h-12 w-12 text-electric-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-forillon-navy">Purpose-Driven</h3>
              <p className="text-gray-600">
                Every solution we create serves a clear purpose: to transform 
                businesses and improve outcomes for all stakeholders.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Award className="h-12 w-12 text-electric-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-forillon-navy">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every aspect of our work, from initial 
                consultation to final implementation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Visionary leaders driving innovation in enterprise technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-forillon-navy">John Smith</h3>
              <p className="text-electric-teal font-medium mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                20+ years in enterprise technology and digital transformation
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-forillon-navy">Sarah Johnson</h3>
              <p className="text-electric-teal font-medium mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                AI research pioneer with expertise in machine learning and infrastructure
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-forillon-navy">Michael Chen</h3>
              <p className="text-electric-teal font-medium mb-2">Chief Operating Officer</p>
              <p className="text-gray-600 text-sm">
                Operations excellence leader with focus on scalable business transformation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}