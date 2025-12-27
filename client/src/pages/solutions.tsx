import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Cpu, Globe } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI & Digital Transformation",
      description: "Architect intelligent systems that fundamentally reshape how your organization operates and competes.",
      features: ["AI Strategy Development", "Intelligent Automation", "Machine Learning Implementation", "Digital Process Optimization"],
      category: "Transformation",
      link: "/solutions/ai-transformation"
    },
    {
      icon: Database,
      title: "Technology Infrastructure",
      description: "Enterprise-grade infrastructure that scales with your ambitions while maintaining security and performance.",
      features: ["System Integration", "Microservices Architecture", "API Design", "Scalable Cloud Architecture"],
      category: "Infrastructure",
      link: "/solutions/infrastructure"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Modernization",
      description: "Strategic cloud migration that modernizes your infrastructure while ensuring zero business disruption.",
      features: ["Legacy System Modernization", "Cloud Migration", "Zero-Downtime Migration", "Cloud-Native Architecture"],
      category: "Cloud",
      link: "/solutions/cloud-migration"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Testing",
      description: "Comprehensive security frameworks, compliance solutions, ISG testing, and penetration testing to protect your digital assets from vulnerabilities and attacks.",
      features: ["ISG Testing & Compliance", "Penetration Testing", "Vulnerability Assessment", "Security Monitoring"],
      category: "Security",
      link: "/solutions/security"
    },
    {
      icon: Zap,
      title: "Performance Engineering",
      description: "Data-driven optimization strategies to maximize efficiency and ROI across your technology investments.",
      features: ["Performance Optimization", "System Monitoring", "Efficiency Analysis", "Proactive Maintenance"],
      category: "Performance",
      link: "/solutions/performance"
    },
    {
      icon: Brain,
      title: "Digital Innovation Strategy",
      description: "Strategic consulting to identify emerging technologies and innovation opportunities that drive competitive advantage.",
      features: ["Innovation Roadmap Development", "Technology Trend Analysis", "Digital Strategy Planning", "Future-Ready Solutions"],
      category: "Strategy",
      link: "/solutions/digital-innovation"
    },
    {
      icon: Globe,
      title: "AI Readiness & Sovereignty",
      description: "Comprehensive assessment of AI maturity and data sovereignty posture to navigate regulatory complexity and unlock AI's full potential.",
      features: ["AI Maturity Assessment", "Data Sovereignty Analysis", "Regulatory Compliance Review", "Custom AI Roadmap"],
      category: "Assessment",
      link: "/solutions/ai-readiness"
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Our Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Comprehensive technology solutions designed to transform your enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Transform Your Business
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end solutions 
              that drive measurable business outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <solution.icon className="h-8 w-8 text-electric-teal" />
                    <Badge variant="secondary">{solution.category}</Badge>
                  </div>
                  <CardTitle className="text-xl text-forillon-navy">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-electric-teal rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={solution.link}>
                    <Button variant="outline" className="w-full border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Our Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A proven methodology that ensures successful transformation outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-forillon-navy">Assess</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of your current state and transformation readiness
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-forillon-navy">Design</h3>
              <p className="text-gray-600 text-sm">
                Strategic roadmap development with clear milestones and success metrics
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-forillon-navy">Implement</h3>
              <p className="text-gray-600 text-sm">
                Phased implementation with continuous monitoring and optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-forillon-navy">Optimize</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support and optimization to maximize return on investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-silver-mist mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can drive your business forward
          </p>
          <Link href="/contact">
            <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3">
              Start Your Transformation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}