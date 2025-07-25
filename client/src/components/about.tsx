import { Zap, CheckCircle, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding-lg relative overflow-hidden">
      {/* Professional Background Cover Photo */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=85')`
          }}
        ></div>
        {/* Lighter Overlay for More Background Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/60 to-white/75"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ice-white/30 via-transparent to-ice-white/20"></div>
      </div>
      
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-electric-teal/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-electric-teal/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-forillon-navy/5 rotate-45"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-20">
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
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="AI and machine learning neural networks representing enterprise intelligence infrastructure" 
                className="img-enterprise w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-heading-md text-forillon-navy mb-3">Innovation-Driven</h3>
                  <p className="text-body-md text-slate-gray">
                    Leveraging cutting-edge technologies to solve complex business challenges and drive digital transformation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-elevated p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-heading-md text-forillon-navy mb-3">Enterprise-Grade</h3>
                  <p className="text-body-md text-slate-gray">
                    Delivering robust, scalable solutions that meet the highest standards of security, performance, and reliability.
                  </p>
                </div>
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
