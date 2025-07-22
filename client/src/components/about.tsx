import { Zap, CheckCircle, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-ice-white relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-32 h-32 border border-electric-teal/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-electric-teal/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-forillon-navy/5 rotate-45"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/10 rounded-full mb-6">
            <span className="text-electric-teal font-semibold text-sm">ABOUT FORILLON TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-forillon-navy mb-6 leading-tight">
            Where Intelligence Becomes
            <span className="block text-electric-teal">Infrastructure</span>
          </h2>
          <p className="text-xl text-slate-gray max-w-4xl mx-auto leading-relaxed">
            We are enterprise technology consultants specializing in digital transformation, AI consulting, and scalable infrastructure solutions that power the future of business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern tech office environment" 
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-forillon-navy mb-2">Innovation-Driven</h3>
                <p className="text-slate-gray">
                  Leveraging cutting-edge technologies to solve complex business challenges and drive digital transformation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-forillon-navy mb-2">Enterprise-Grade</h3>
                <p className="text-slate-gray">
                  Delivering robust, scalable solutions that meet the highest standards of security, performance, and reliability.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-forillon-navy mb-2">Expert Team</h3>
                <p className="text-slate-gray">
                  Our consultants bring decades of experience in enterprise architecture, AI implementation, and digital strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
