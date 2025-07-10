export default function WhyForillon() {
  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "99.9%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" }
  ];

  const reasons = [
    {
      number: "01",
      title: "Proven Track Record",
      description: "Successfully delivered 200+ enterprise projects with 99.9% client satisfaction rate and measurable ROI improvements."
    },
    {
      number: "02",
      title: "Industry Expertise",
      description: "Deep domain knowledge across finance, healthcare, manufacturing, and technology sectors with specialized solutions."
    },
    {
      number: "03",
      title: "Agile Methodology",
      description: "Rapid deployment and iterative improvement cycles that deliver value quickly while adapting to changing requirements."
    },
    {
      number: "04",
      title: "24/7 Support",
      description: "Comprehensive ongoing support and maintenance ensuring your systems operate at peak performance around the clock."
    }
  ];

  return (
    <section id="why-forillon" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-4">
            Why Choose Forillon
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Partner with industry leaders who understand the complexities of modern enterprise technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="text-4xl font-bold text-electric-teal">
                  {reason.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forillon-navy mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-gray">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaboration" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            
            <div className="grid grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-silver-mist rounded-lg">
                  <div className="text-2xl font-bold text-forillon-navy">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
