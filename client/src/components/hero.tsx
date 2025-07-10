import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-forillon-navy to-slate-gray text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Trusted to <span className="text-electric-teal">Transform</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build intelligent, scalable digital infrastructure for the future with enterprise-grade solutions that drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-electric-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors shadow-lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToAbout}
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-forillon-navy transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
