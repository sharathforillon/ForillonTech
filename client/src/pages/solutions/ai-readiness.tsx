import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  Brain, 
  Shield, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  Building,
  Lock,
  Database,
  TrendingUp,
  Users,
  FileCheck,
  Layers,
  Gauge,
  Scale,
  MapPin,
  Server,
  Eye,
  Lightbulb,
  AlertTriangle,
  Award
} from "lucide-react";

export default function AIReadiness() {
  const benefits = [
    "Comprehensive AI maturity assessment across 8 critical dimensions",
    "Data sovereignty gap analysis aligned with regional regulations (UAE, EU, APAC)",
    "Custom AI adoption roadmap with prioritized use cases and quick wins",
    "Risk mitigation framework for responsible AI deployment",
    "Executive-ready reports with clear ROI projections and timelines",
    "Vendor-neutral recommendations for AI infrastructure and platforms"
  ];

  const assessmentDimensions = [
    {
      icon: Database,
      title: "Data Infrastructure",
      description: "Evaluate your data architecture, quality, governance, and accessibility for AI workloads",
      metrics: ["Data quality score", "Pipeline maturity", "Governance compliance"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Assess AI security posture, privacy controls, and regulatory alignment",
      metrics: ["Security readiness", "Privacy compliance", "Audit trail capability"]
    },
    {
      icon: Users,
      title: "Talent & Culture",
      description: "Measure organizational AI literacy, skills gaps, and innovation culture",
      metrics: ["AI skill density", "Change readiness", "Innovation quotient"]
    },
    {
      icon: Layers,
      title: "Technology Stack",
      description: "Analyze infrastructure scalability, cloud readiness, and integration capabilities",
      metrics: ["Cloud maturity", "API ecosystem", "Compute capacity"]
    },
    {
      icon: Target,
      title: "Strategy Alignment",
      description: "Evaluate AI strategy coherence with business objectives and market positioning",
      metrics: ["Strategic clarity", "Use case pipeline", "Competitive positioning"]
    },
    {
      icon: Scale,
      title: "Governance Framework",
      description: "Review AI ethics policies, decision-making processes, and accountability structures",
      metrics: ["Policy maturity", "Ethics framework", "Accountability clarity"]
    },
    {
      icon: Gauge,
      title: "Operational Readiness",
      description: "Assess MLOps capabilities, model lifecycle management, and deployment practices",
      metrics: ["MLOps maturity", "Model monitoring", "Deployment velocity"]
    },
    {
      icon: Globe,
      title: "Data Sovereignty",
      description: "Evaluate data residency compliance, cross-border data flows, and local regulations",
      metrics: ["Residency compliance", "Transfer mechanisms", "Local law alignment"]
    }
  ];

  const sovereigntyServices = [
    {
      icon: MapPin,
      title: "Data Residency Assessment",
      description: "Comprehensive analysis of where your data resides, flows, and is processed across your AI systems.",
      features: [
        "Multi-cloud data flow mapping and visualization",
        "Cross-border transfer mechanism evaluation",
        "Data classification and sensitivity analysis",
        "Storage location compliance verification",
        "Third-party data processor assessment"
      ]
    },
    {
      icon: Lock,
      title: "Regulatory Compliance Review",
      description: "Deep dive into regional AI and data regulations affecting your operations.",
      features: [
        "UAE PDPL (Personal Data Protection Law) alignment",
        "EU AI Act readiness assessment",
        "GDPR cross-border transfer compliance",
        "Industry-specific regulations (DIFC, ADGM, healthcare)",
        "Upcoming regulation impact analysis"
      ]
    },
    {
      icon: Server,
      title: "Sovereign AI Architecture",
      description: "Design recommendations for AI infrastructure that maintains data sovereignty.",
      features: [
        "On-premise vs cloud hybrid architecture design",
        "Regional AI model hosting strategies",
        "Federated learning implementation options",
        "Edge AI deployment for data-sensitive workloads",
        "Sovereign cloud provider evaluation"
      ]
    },
    {
      icon: Eye,
      title: "AI Transparency & Explainability",
      description: "Frameworks for understanding and explaining AI decisions to regulators and stakeholders.",
      features: [
        "Model interpretability assessment",
        "Decision audit trail implementation",
        "Bias detection and mitigation strategies",
        "Stakeholder communication frameworks",
        "Regulatory disclosure templates"
      ]
    }
  ];

  const readinessServices = [
    {
      icon: Brain,
      title: "AI Use Case Discovery",
      description: "Systematic identification and prioritization of high-impact AI opportunities across your organization.",
      features: [
        "Cross-functional stakeholder workshops",
        "Industry benchmark analysis and best practices",
        "Feasibility and impact scoring methodology",
        "Quick-win identification for early momentum",
        "Long-term transformation roadmap development"
      ]
    },
    {
      icon: TrendingUp,
      title: "AI Maturity Benchmarking",
      description: "Compare your AI capabilities against industry leaders and regional competitors.",
      features: [
        "Proprietary AI maturity model assessment",
        "Industry and regional peer benchmarking",
        "Capability gap analysis with prioritization",
        "Best practice recommendations",
        "Maturity improvement roadmap"
      ]
    },
    {
      icon: Building,
      title: "Enterprise AI Readiness",
      description: "Holistic evaluation of organizational readiness for enterprise-scale AI adoption.",
      features: [
        "Executive sponsorship and governance assessment",
        "Budget and resource allocation analysis",
        "Vendor and technology ecosystem evaluation",
        "Integration complexity assessment",
        "Change management readiness scoring"
      ]
    },
    {
      icon: FileCheck,
      title: "AI Risk Assessment",
      description: "Comprehensive risk identification and mitigation planning for responsible AI deployment.",
      features: [
        "Technical risk evaluation (model drift, bias, security)",
        "Operational risk assessment (dependency, scalability)",
        "Reputational risk analysis (ethics, public perception)",
        "Regulatory risk mapping and compliance gaps",
        "Risk mitigation roadmap with controls"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Scoping",
      description: "Initial stakeholder interviews, objective setting, and assessment scope definition tailored to your organization.",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Data Collection",
      description: "Systematic gathering of documentation, system access, and structured interviews across business units.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Multi-Dimensional Assessment",
      description: "Deep evaluation across all 8 dimensions using our proprietary AI readiness framework.",
      duration: "3-4 weeks"
    },
    {
      step: "04",
      title: "Analysis & Benchmarking",
      description: "Comparative analysis against industry benchmarks and regional best practices.",
      duration: "1-2 weeks"
    },
    {
      step: "05",
      title: "Roadmap Development",
      description: "Creation of prioritized recommendations, implementation roadmap, and business case.",
      duration: "2 weeks"
    },
    {
      step: "06",
      title: "Executive Presentation",
      description: "Comprehensive findings presentation to leadership with actionable next steps.",
      duration: "1 week"
    }
  ];

  const whyItMatters = [
    {
      icon: AlertTriangle,
      title: "Regulatory Landscape is Shifting",
      description: "The UAE PDPL, EU AI Act, and emerging regulations across APAC are creating new compliance requirements. Organizations must understand their exposure before it becomes a liability."
    },
    {
      icon: Globe,
      title: "Data Sovereignty is Strategic",
      description: "With increasing geopolitical tensions and digital nationalism, where your AI processes data has become a strategic business decision, not just a technical one."
    },
    {
      icon: Award,
      title: "First-Mover Advantage",
      description: "Organizations that establish robust AI governance and sovereignty frameworks now will be positioned as trusted partners in an increasingly regulated market."
    },
    {
      icon: Lightbulb,
      title: "AI Success Requires Foundation",
      description: "80% of AI projects fail to deliver expected value. A proper readiness assessment identifies gaps before significant investment, dramatically improving success rates."
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
        <div className="absolute inset-0 bg-gradient-to-br from-forillon-navy via-forillon-navy/95 to-electric-teal/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/20 rounded-full mb-6" data-testid="badge-hero-category">
                <span className="text-electric-teal font-semibold text-sm">AI READINESS & SOVEREIGNTY ASSESSMENT</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.3)' }} data-testid="text-hero-title">
                Are You Ready for AI?<br/>
                <span className="text-electric-teal">Is Your Data Sovereign?</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0px 0px 6px rgba(0,0,0,0.2)' }}>
                Comprehensive assessment of your organization's AI maturity and data sovereignty posture. 
                Navigate regulatory complexity with confidence and unlock AI's full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-4 shadow-lg"
                  onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
                  data-testid="button-schedule-assessment"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Assessment
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-forillon-navy text-lg px-8 py-4"
                  onClick={() => window.location.href = '/contact'}
                  data-testid="button-contact-us"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {assessmentDimensions.slice(0, 4).map((dimension, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" data-testid={`card-dimension-preview-${index}`}>
                  <dimension.icon className="h-8 w-8 text-electric-teal mb-3" />
                  <h3 className="text-white font-semibold mb-2">{dimension.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {dimension.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-electric-teal/20 text-electric-teal text-xs">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-electric-teal text-electric-teal" data-testid="badge-benefits-section">WHY THIS ASSESSMENT</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6" data-testid="text-benefits-heading">
              What You'll Receive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive evaluation that provides clarity, confidence, and a clear path forward for your AI initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-electric-teal/5 transition-colors" data-testid={`card-benefit-${index}`}>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-electric-teal rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="text-why-matters-heading">
              Why This Matters Now
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The AI landscape is evolving rapidly. Organizations that assess and prepare today will lead tomorrow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyItMatters.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20" data-testid={`card-why-matters-${index}`}>
                <item.icon className="h-10 w-10 text-electric-teal mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Assessment Dimensions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-electric-teal text-electric-teal" data-testid="badge-dimensions-section">COMPREHENSIVE FRAMEWORK</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6" data-testid="text-dimensions-heading">
              8 Critical Assessment Dimensions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proprietary framework evaluates your organization across 8 interconnected dimensions 
              to provide a holistic view of AI readiness and sovereignty posture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentDimensions.map((dimension, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-electric-teal" data-testid={`card-dimension-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-electric-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <dimension.icon className="h-6 w-6 text-electric-teal" />
                  </div>
                  <CardTitle className="text-lg text-forillon-navy">{dimension.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{dimension.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {dimension.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sovereignty Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-forillon-navy text-forillon-navy" data-testid="badge-sovereignty-section">DATA SOVEREIGNTY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6" data-testid="text-sovereignty-heading">
              Data Sovereignty Assessment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the complex landscape of data residency, cross-border transfers, and regional regulations 
              with our specialized sovereignty assessment services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sovereigntyServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow" data-testid={`card-sovereignty-service-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-forillon-navy rounded-xl flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-forillon-navy">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-electric-teal flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Readiness Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-electric-teal text-electric-teal" data-testid="badge-readiness-section">AI READINESS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6" data-testid="text-readiness-heading">
              AI Readiness Assessment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evaluate your organization's preparedness to successfully adopt and scale AI initiatives 
              with our comprehensive readiness assessment services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {readinessServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow" data-testid={`card-readiness-service-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-electric-teal rounded-xl flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-forillon-navy">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-electric-teal flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-electric-teal text-electric-teal" data-testid="badge-process-section">OUR METHODOLOGY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-6" data-testid="text-process-heading">
              Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, proven methodology that delivers actionable insights within 10-14 weeks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative" data-testid={`card-process-step-${index}`}>
                <div className="bg-gray-50 rounded-xl p-8 h-full hover:shadow-md transition-shadow">
                  <div className="text-5xl font-bold text-electric-teal/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-forillon-navy mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <Badge variant="outline" className="border-electric-teal text-electric-teal">
                    {step.duration}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Expertise */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-electric-teal text-electric-teal" data-testid="badge-regional-section">REGIONAL EXPERTISE</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="text-regional-heading">
                Deep Understanding of UAE & Regional Regulations
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team brings specialized knowledge of the regulatory landscape across the UAE, GCC, 
                and broader Middle East region. We understand the nuances of local requirements and 
                help you navigate complexity with confidence.
              </p>
              <ul className="space-y-4">
                {[
                  "UAE Personal Data Protection Law (PDPL) expertise",
                  "DIFC and ADGM regulatory framework knowledge",
                  "Cross-border data transfer mechanism design",
                  "Regional AI ethics and governance best practices",
                  "Healthcare, finance, and government sector specialization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-electric-teal flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center" data-testid="stat-assessments">
                <div className="text-4xl font-bold text-electric-teal mb-2" data-testid="text-stat-50">50+</div>
                <p className="text-gray-300">Assessments Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center" data-testid="stat-experience">
                <div className="text-4xl font-bold text-electric-teal mb-2" data-testid="text-stat-15">15+</div>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center" data-testid="stat-dimensions">
                <div className="text-4xl font-bold text-electric-teal mb-2" data-testid="text-stat-8">8</div>
                <p className="text-gray-300">Assessment Dimensions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center" data-testid="stat-neutral">
                <div className="text-4xl font-bold text-electric-teal mb-2" data-testid="text-stat-100">100%</div>
                <p className="text-gray-300">Vendor Neutral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-electric-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="text-cta-heading">
            Ready to Assess Your AI Readiness?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a complimentary 30-minute consultation to discuss your organization's 
            AI ambitions and data sovereignty requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-forillon-navy hover:bg-gray-100 text-lg px-8 py-4 shadow-lg"
              onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
              data-testid="button-schedule-consultation"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-forillon-navy text-lg px-8 py-4"
              onClick={() => window.location.href = '/contact'}
              data-testid="button-contact-team"
            >
              Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
