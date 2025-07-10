import { Monitor, Lightbulb, Settings, Package, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    icon: Monitor,
    title: "Digital Infrastructure",
    description: "Scalable cloud architectures and enterprise infrastructure solutions that grow with your business needs."
  },
  {
    icon: Lightbulb,
    title: "AI & Machine Learning",
    description: "Intelligent automation and AI-driven insights to optimize operations and drive innovation."
  },
  {
    icon: Settings,
    title: "Digital Transformation",
    description: "End-to-end transformation strategies that modernize your business processes and technology stack."
  },
  {
    icon: Package,
    title: "Enterprise Architecture",
    description: "Strategic technology blueprints that align IT capabilities with business objectives and goals."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Comprehensive security frameworks and compliance solutions to protect your digital assets."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Data-driven optimization strategies to maximize efficiency and ROI across your technology investments."
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-silver-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-electric-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-electric-teal" />
                </div>
                <h3 className="text-xl font-semibold text-forillon-navy mb-4">
                  {solution.title}
                </h3>
                <p className="text-slate-gray mb-6">
                  {solution.description}
                </p>
                <button className="text-electric-teal font-semibold hover:text-teal-600 transition-colors">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
