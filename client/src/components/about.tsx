import { Zap, CheckCircle, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-4">
            About Forillon Technologies
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            We are enterprise technology consultants specializing in digital transformation, AI consulting, and scalable infrastructure solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech office environment" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
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
