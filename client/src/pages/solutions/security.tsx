import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield, Lock, Eye, Search, Target, AlertTriangle } from "lucide-react";

export default function Security() {
  const benefits = [
    "99.99% threat detection and prevention with advanced AI monitoring",
    "Comprehensive ISG testing and penetration testing services",
    "Zero-trust security architecture for comprehensive data protection",
    "Compliance with industry standards (SOC 2, ISO 27001, GDPR)",
    "24/7 security operations center with rapid incident response",
    "Vulnerability assessment and security validation testing"
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Threat Protection",
      description: "Advanced threat detection and prevention systems with real-time monitoring and response"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "End-to-end data encryption and secure access controls for sensitive business information"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "Continuous security monitoring with advanced analytics and automated threat response"
    },
    {
      icon: Target,
      title: "Penetration Testing",
      description: "Comprehensive PEN testing with simulated cyber attacks to identify vulnerabilities before attackers do"
    },
    {
      icon: Search,
      title: "ISG Testing & Compliance",
      description: "Information Security Governance testing to ensure your security frameworks meet industry standards and regulatory requirements"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Systematic identification and analysis of security weaknesses across your infrastructure and applications"
    }
  ];

  const testingServices = [
    {
      icon: Shield,
      title: "Information Security Governance (ISG) Testing",
      description: "Comprehensive evaluation of your security governance framework to ensure compliance with industry standards and regulatory requirements.",
      features: [
        "Security policy and procedure assessment",
        "Compliance gap analysis (ISO 27001, SOC 2, NIST)",
        "Risk management framework evaluation",
        "Security awareness and training assessment",
        "Incident response plan testing"
      ]
    },
    {
      icon: Target,
      title: "Penetration Testing (PEN Testing)",
      description: "Simulated cyber attacks to identify vulnerabilities and security weaknesses before malicious actors exploit them.",
      features: [
        "External and internal network penetration testing",
        "Web application security testing",
        "Wireless network security assessment",
        "Social engineering and phishing simulations",
        "Physical security testing"
      ]
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description: "Systematic identification and analysis of security weaknesses across your infrastructure, applications, and processes.",
      features: [
        "Automated vulnerability scanning",
        "Manual security testing",
        "Configuration review and hardening",
        "Database security assessment",
        "Cloud security posture evaluation"
      ]
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
                <span className="text-electric-teal font-semibold text-sm">ENTERPRISE SECURITY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.3)' }}>
                Enterprise Security & Testing
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0px 0px 6px rgba(0,0,0,0.2)' }}>
                Comprehensive security frameworks, ISG testing, and penetration testing to protect your digital assets from vulnerabilities and attacks.
              </p>
              <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
                Secure Your Enterprise <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Cybersecurity"
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
              Complete Security Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated security solutions including testing, compliance validation, and threat protection to defend against vulnerabilities and attacks.
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Security Operations"
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
              Security Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security services designed to protect your enterprise from evolving cyber threats.
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

      {/* Security Testing Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6">
              Security Testing & Validation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing services to identify vulnerabilities and validate your security posture against real-world threats.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testingServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-electric-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-electric-teal" />
                  </div>
                  <CardTitle className="text-xl text-forillon-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-electric-teal flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-xl text-silver-mist mb-8">
            Let's build a comprehensive security framework that protects your enterprise while enabling growth and innovation.
          </p>
          <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
            Schedule Security Assessment <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}