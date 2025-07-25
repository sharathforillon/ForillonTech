import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Building, Network, Settings, Shield } from "lucide-react";

export default function EnterpriseArchitecture() {
  const features = [
    {
      icon: Building,
      title: "Architecture Design",
      description: "Scalable and robust enterprise architecture frameworks"
    },
    {
      icon: Network,
      title: "System Integration",
      description: "Seamless integration of complex enterprise systems"
    },
    {
      icon: Settings,
      title: "Technology Alignment",
      description: "Align technology stack with business objectives"
    },
    {
      icon: Shield,
      title: "Governance Framework",
      description: "Establish architecture governance and standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Enterprise Architecture
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Design and implement scalable enterprise architectures that align 
            technology investments with business strategy and drive organizational growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3"
              onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Architecture Review
            </Button>
            <Button 
              variant="outline" 
              className="border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white text-lg px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise Architecture Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help organizations build robust, scalable, and future-ready 
              enterprise architectures that support business transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-electric-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-electric-teal" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-electric-teal rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Build your future-ready architecture
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Let's design an enterprise architecture that scales with your business growth.
            </p>
            <Button 
              className="bg-white hover:bg-gray-50 text-electric-teal text-lg px-10 py-4 font-semibold"
              onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Start Architecture Planning
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}