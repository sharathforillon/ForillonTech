import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const expertiseAreas = [
  {
    category: "Strategic Consulting",
    title: "AI & Digital Transformation",
    description: "We architect intelligent systems that fundamentally reshape how your organization operates, thinks, and competes.",
    outcomes: ["30% operational efficiency gains", "AI-driven decision making", "Future-ready architecture"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    category: "Enterprise Architecture",
    title: "Technology Infrastructure",
    description: "Enterprise-grade infrastructure that scales with your ambitions while maintaining security and performance.",
    outcomes: ["99.9% uptime guarantee", "Scalable cloud architecture", "Zero-compromise security"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const capabilities = [
  "Strategic Technology Planning",
  "AI Implementation & Optimization",
  "Cloud Migration & Modernization",
  "Enterprise Security Architecture",
  "Performance & Scalability Engineering",
  "Digital Innovation Consulting"
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/10 rounded-full mb-6">
            <span className="text-electric-teal font-semibold text-sm">ENTERPRISE SOLUTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-forillon-navy mb-6">
            Technology that transforms<br />
            <span className="text-electric-teal">business outcomes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just implement technology—we architect strategic advantages that position your organization for sustained competitive leadership.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="space-y-16 mb-20">
          {expertiseAreas.map((area, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-forillon-navy/10 rounded-full mb-4">
                  <span className="text-forillon-navy font-medium text-sm">{area.category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6">
                  {area.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {area.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {area.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-electric-teal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="rounded-lg shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forillon-navy/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="bg-silver-mist rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-forillon-navy mb-4">
              Core Capabilities
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive expertise spans the full spectrum of enterprise technology challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-electric-teal rounded-full mr-4"></div>
                <span className="text-forillon-navy font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-forillon-navy mb-6">
            Ready to transform your enterprise?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our strategic technology solutions can drive your organization's next phase of growth.
          </p>
          <Button className="bg-forillon-navy hover:bg-forillon-navy/90 text-white text-lg px-8 py-3">
            Schedule Strategic Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
