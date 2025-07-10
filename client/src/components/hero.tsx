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
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-forillon-navy/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-silver-mist/40 to-transparent"></div>
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
