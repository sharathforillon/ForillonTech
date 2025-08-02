import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield, Search, Target, AlertTriangle, Lock, Eye } from "lucide-react";

export default function SecurityTesting() {
  const benefits = [
    "Comprehensive vulnerability assessment and threat identification",
    "ISG compliance validation against industry standards (ISO 27001, NIST)",
    "Advanced penetration testing with real-world attack simulations",
    "Detailed security reports with actionable remediation strategies",
    "Continuous security monitoring and ongoing assessment programs"
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

  const methodologies = [
    {
      icon: AlertTriangle,
      title: "OWASP Testing Framework",
      description: "Industry-standard testing methodologies following OWASP guidelines for comprehensive security assessment."
    },
    {
      icon: Lock,
      title: "NIST Cybersecurity Framework",
      description: "Structured approach aligned with NIST guidelines for identifying, protecting, and responding to threats."
    },
    {
      icon: Eye,
      title: "PTES Methodology",
      description: "Penetration Testing Execution Standard for thorough and repeatable security testing processes."
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
          <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-forillon-navy/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/20 rounded-full mb-6">
                <span className="text-electric-teal font-semibold text-sm">SECURITY TESTING</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.3)' }}>
                ISG Testing & Penetration Testing
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0px 0px 6px rgba(0,0,0,0.2)' }}>
                Identify vulnerabilities and strengthen your security posture with comprehensive testing services that protect against cyber threats and ensure compliance.
              </p>
              <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
                Start Security Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Security Testing"
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
              Proactive Security Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of cyber threats with comprehensive security testing that identifies vulnerabilities before they become security incidents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-electric-teal flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6">
              Comprehensive Security Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From governance assessment to penetration testing, we provide complete security validation to protect your organization.
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

      {/* Methodologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6">
              Industry-Standard Testing Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow established frameworks and methodologies to ensure comprehensive, reliable, and repeatable security assessments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-electric-teal/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <methodology.icon className="h-8 w-8 text-electric-teal" />
                </div>
                <h3 className="text-xl font-semibold text-forillon-navy mb-4">{methodology.title}</h3>
                <p className="text-gray-600">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Security Testing Process
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A systematic approach to identifying, analyzing, and remediating security vulnerabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment Planning", description: "Define scope, objectives, and testing methodology" },
              { step: "02", title: "Discovery & Reconnaissance", description: "Information gathering and vulnerability identification" },
              { step: "03", title: "Testing & Exploitation", description: "Controlled testing of identified vulnerabilities" },
              { step: "04", title: "Reporting & Remediation", description: "Detailed findings with actionable recommendations" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-electric-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-white/80">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-electric-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Organization Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for a security incident. Start your comprehensive security assessment and protect your business from cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-white/90 text-electric-teal text-lg px-8 py-3">
              Schedule Security Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-electric-teal text-lg px-8 py-3"
              onClick={() => window.location.href = '/partner'}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}