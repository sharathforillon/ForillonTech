import { Zap, CheckCircle, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding-lg bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/8 rounded-lg mb-8">
            <span className="text-electric-teal font-medium text-label-lg">ABOUT FORILLON TECHNOLOGIES</span>
          </div>
          <h2 className="text-heading-xl md:text-display-lg text-forillon-navy mb-6 leading-tight">
            Where Intelligence Becomes
            <span className="block text-electric-teal">Infrastructure</span>
          </h2>
          <p className="text-body-lg text-slate-gray max-w-4xl mx-auto">
            We are enterprise technology consultants specializing in digital transformation, AI consulting, and scalable infrastructure solutions that power the future of business.
          </p>
        </div>
        
        {/* Horizontal Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="card-elevated p-8 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-electric-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-heading-md text-forillon-navy mb-4">Innovation-Driven</h3>
            <p className="text-body-md text-slate-gray leading-relaxed">
              Leveraging cutting-edge technologies to solve complex business challenges and drive digital transformation.
            </p>
          </div>
          
          <div className="card-elevated p-8 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-electric-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-heading-md text-forillon-navy mb-4">Enterprise-Grade</h3>
            <p className="text-body-md text-slate-gray leading-relaxed">
              Delivering robust, scalable solutions that meet the highest standards of security, performance, and reliability.
            </p>
          </div>
          
          <div className="card-elevated p-8 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-electric-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-heading-md text-forillon-navy mb-4">Expert Team</h3>
            <p className="text-body-md text-slate-gray leading-relaxed">
              Our consultants bring decades of experience in enterprise architecture, AI implementation, and digital strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
