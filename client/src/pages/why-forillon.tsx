import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Award, Users, Lightbulb } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function WhyForillon() {
  const advantages = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Deep industry knowledge with a track record of successful enterprise transformations"
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Tailored solutions designed around your unique business needs and objectives"
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Cutting-edge technology solutions that keep you ahead of the competition"
    },
    {
      icon: CheckCircle,
      title: "Measurable Results",
      description: "Clear ROI and performance metrics that demonstrate tangible business value"
    }
  ];

  const testimonials = [
    {
      quote: "Forillon transformed our entire digital infrastructure. The results exceeded our expectations.",
      author: "Sarah Mitchell",
      role: "CTO, TechCorp Industries",
      rating: 5
    },
    {
      quote: "Their AI consulting services helped us identify opportunities we never knew existed.",
      author: "David Rodriguez",
      role: "VP of Operations, Global Manufacturing",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and results-driven. Forillon is our trusted technology partner.",
      author: "Emily Chen",
      role: "Chief Innovation Officer, FinanceForward",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Enterprise Clients" }
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Why Choose Forillon?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              The strategic advantages that make us your ideal technology transformation partner
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-electric-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              The Forillon Advantage
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              What sets us apart in the competitive landscape of technology consulting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <advantage.icon className="h-8 w-8 text-electric-teal mr-4" />
                    <CardTitle className="text-xl text-forillon-navy">{advantage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
                Our Proven Methodology
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We've refined our approach through hundreds of successful transformations, 
                creating a methodology that minimizes risk while maximizing results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-electric-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-forillon-navy">Risk-First Approach:</strong>
                    <span className="text-gray-600 ml-2">Identify and mitigate potential challenges before they impact your project</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-electric-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-forillon-navy">Agile Implementation:</strong>
                    <span className="text-gray-600 ml-2">Iterative development with continuous feedback and optimization</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-electric-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-forillon-navy">Knowledge Transfer:</strong>
                    <span className="text-gray-600 ml-2">Comprehensive training to ensure your team can maintain and evolve the solution</span>
                  </div>
                </li>
              </ul>
              <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white">
                Learn About Our Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Strategic planning"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from real clients who have transformed their businesses with Forillon
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-forillon-navy">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Experience the Forillon Difference
          </h2>
          <p className="text-xl text-silver-mist mb-8 max-w-2xl mx-auto">
            Join the growing number of enterprises that have chosen Forillon as their trusted technology partner
          </p>
          <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}