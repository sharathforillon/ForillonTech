import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Shield, Lock, Eye, CheckCircle } from "lucide-react";

export default function AISecurity() {
  const features = [
    {
      icon: Shield,
      title: "AI Risk Assessment",
      description: "Comprehensive evaluation of AI security vulnerabilities"
    },
    {
      icon: Lock,
      title: "Model Protection",
      description: "Secure AI models against adversarial attacks and data poisoning"
    },
    {
      icon: Eye,
      title: "Privacy Compliance",
      description: "Ensure AI systems meet privacy regulations and standards"
    },
    {
      icon: CheckCircle,
      title: "Governance Framework",
      description: "Establish robust AI governance and ethical guidelines"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Security & Governance
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Secure your AI initiatives with comprehensive security frameworks, 
            risk assessment, and governance strategies that protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3"
              onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Security Assessment
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
              Comprehensive AI Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect your AI investments with enterprise-grade security measures 
              and governance frameworks designed for the AI era.
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
              Secure your AI future
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Let's build comprehensive security and governance for your AI initiatives.
            </p>
            <Button 
              className="bg-white hover:bg-gray-50 text-electric-teal text-lg px-10 py-4 font-semibold"
              onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Secure Your AI
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}