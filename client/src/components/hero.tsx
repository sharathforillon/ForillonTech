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
    <section className="relative bg-silver-mist py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forillon-navy/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-forillon-navy">
            Trusted to Transform
          </h1>
          <p className="text-xl md:text-2xl text-slate-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Where Intelligence Becomes Infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-forillon-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-transparent hover:text-forillon-navy border-2 border-electric-teal transition-all shadow-lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToAbout}
              className="border-2 border-forillon-navy text-forillon-navy px-6 py-3 rounded-md font-semibold hover:bg-forillon-navy hover:text-white transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
