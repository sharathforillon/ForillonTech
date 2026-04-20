import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Lightbulb, TrendingUp, Target, Users } from "lucide-react";

export default function DigitalInnovation() {
  const benefits = [
    "Innovation roadmap development with clear implementation timelines",
    "Technology trend analysis to identify competitive advantages",
    "Digital strategy planning aligned with business objectives",
    "Future-ready solutions that scale with market demands",
    "Strategic partnerships and ecosystem development",
    "Change management and innovation culture transformation"
  ];

  const capabilities = [
    {
      icon: Lightbulb,
      title: "Innovation Assessment",
      description: "Comprehensive evaluation of your current innovation capabilities and market positioning"
    },
    {
      icon: TrendingUp,
      title: "Technology Roadmapping",
      description: "Strategic technology roadmaps that align emerging innovations with business goals"
    },
    {
      icon: Target,
      title: "Digital Strategy Design",
      description: "Custom digital strategies that leverage cutting-edge technologies for competitive advantage"
    },
    {
      icon: Users,
      title: "Innovation Culture",
      description: "Building innovation-driven cultures with frameworks for continuous digital transformation"
    }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Digital Innovation Assessment",
      description: "Comprehensive evaluation of your organization's digital maturity and innovation potential.",
      features: [
        "Current state analysis and digital readiness assessment",
        "Innovation capability evaluation",
        "Competitive landscape and market opportunity analysis",
        "Technology gap identification",
        "Innovation culture and organizational readiness"
      ]
    },
    {
      icon: TrendingUp,
      title: "Strategic Technology Roadmapping",
      description: "Development of strategic technology roadmaps aligned with business objectives and market trends.",
      features: [
        "Emerging technology evaluation and selection",
        "Implementation timeline and milestone planning",
        "Resource allocation and investment prioritization",
        "Risk assessment and mitigation strategies",
        "ROI projections and success metrics"
      ]
    },
    {
      icon: Target,
      title: "Digital Transformation Strategy",
      description: "Comprehensive digital transformation strategies that drive sustainable competitive advantage.",
      features: [
        "Digital strategy development and alignment",
        "Business model innovation and optimization",
        "Customer experience transformation",
        "Operational excellence through digital tools",
        "Data-driven decision making frameworks"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 rounded-lg mb-8">
            <Lightbulb className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-green-700 font-medium text-sm uppercase tracking-wide">STRATEGIC INNOVATION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Innovation Strategy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with strategic consulting that identifies emerging technologies 
            and innovation opportunities to drive sustainable competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
              onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
            >
              <Target className="mr-2 h-5 w-5" />
              Strategy Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Innovation Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Drive digital transformation with strategic innovation consulting that positions 
              your organization at the forefront of technological advancement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Innovation Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive innovation consulting services that transform how your organization 
              approaches digital transformation and competitive strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <capability.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-gray-900">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Innovation Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic consulting services designed to accelerate your digital innovation 
              journey and establish sustainable competitive advantages.
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Drive Innovation?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Partner with us to develop strategic innovation capabilities that position 
            your organization for long-term success in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
            >
              Schedule Innovation Assessment
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}