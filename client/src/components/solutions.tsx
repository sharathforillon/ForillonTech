import { ArrowRight, CheckCircle, Calendar, ExternalLink, Users, Building, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const serviceCards = [
  {
    icon: "🤖",
    title: "AI & Digital Transformation",
    description: "Architect intelligent systems that fundamentally reshape how your organization operates and competes.",
    keyBenefits: ["30% operational efficiency gains", "AI-driven decision making"],
    cta: "Explore AI Solutions",
    link: "/solutions/ai-transformation",
    hover: "from-blue-50 to-indigo-50"
  },
  {
    icon: "🏗️",
    title: "Technology Infrastructure",
    description: "Enterprise-grade infrastructure that scales with your ambitions while maintaining security and performance.",
    keyBenefits: ["99.9% uptime guarantee", "Scalable cloud architecture"],
    cta: "Build Infrastructure",
    link: "/solutions/infrastructure",
    hover: "from-teal-50 to-cyan-50"
  },
  {
    icon: "☁️",
    title: "Cloud Migration & Modernization",
    description: "Strategic cloud migration that modernizes your infrastructure while ensuring zero business disruption.",
    keyBenefits: ["40% cost reduction", "Zero-downtime migration"],
    cta: "Start Migration",
    link: "/solutions/cloud-migration",
    hover: "from-purple-50 to-violet-50"
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description: "Comprehensive security frameworks and compliance solutions that protect your digital assets.",
    keyBenefits: ["99.99% threat detection", "Zero-trust architecture"],
    cta: "Secure Enterprise",
    link: "/solutions/security",
    hover: "from-red-50 to-pink-50"
  },
  {
    icon: "⚡",
    title: "Performance Engineering",
    description: "Data-driven optimization strategies to maximize efficiency and ROI across your technology investments.",
    keyBenefits: ["70% performance improvement", "Proactive monitoring"],
    cta: "Optimize Performance",
    link: "/solutions/performance",
    hover: "from-yellow-50 to-orange-50"
  },
  {
    icon: "🔧",
    title: "Digital Innovation Consulting",
    description: "Strategic consulting to identify and implement cutting-edge technologies that drive competitive advantage.",
    keyBenefits: ["Innovation roadmap", "Future-ready solutions"],
    cta: "Innovate with Us",
    link: "/solutions",
    hover: "from-green-50 to-emerald-50"
  }
];

const socialProof = [
  {
    company: "Fortune 500 Financial Services",
    project: "AI-Powered Risk Assessment Platform",
    result: "40% reduction in processing time, 99.7% accuracy",
    industry: "Financial Services",
    icon: Building
  },
  {
    company: "Global Manufacturing Corp",
    project: "Enterprise Cloud Migration",
    result: "60% infrastructure cost savings, zero downtime",
    industry: "Manufacturing",
    icon: TrendingUp
  },
  {
    company: "Healthcare Innovation Group",
    project: "HIPAA-Compliant Security Framework",
    result: "100% compliance, 50% faster deployment",
    industry: "Healthcare",
    icon: Users
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-electric-teal/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-electric-teal/10 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 border border-forillon-navy/10 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-forillon-navy/5 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCards.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-electric-teal/10 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-forillon-navy group-hover:text-electric-teal transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.keyBenefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-electric-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-electric-teal hover:bg-electric-teal/90 text-white mt-4"
                  onClick={() => window.location.href = service.link}
                >
                  {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="bg-silver-mist rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-forillon-navy mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sample engagements showcasing our expertise across diverse industries and complex challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialProof.map((proof, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <proof.icon className="h-8 w-8 text-electric-teal mr-3" />
                    <Badge variant="secondary" className="text-xs">
                      {proof.industry}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-forillon-navy mb-2">
                    {proof.company}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {proof.project}
                  </p>
                  <p className="text-sm font-medium text-electric-teal">
                    {proof.result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-forillon-navy rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to transform your enterprise?
          </h3>
          <p className="text-lg text-silver-mist mb-8 max-w-2xl mx-auto">
            Let's discuss how our strategic technology solutions can drive your organization's next phase of growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3"
              onClick={() => window.open('https://calendly.com/forillon-technologies', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white text-lg px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
