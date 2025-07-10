import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-ice-white">
      {/* Hero Section */}
      <section className="relative bg-forillon-navy py-24 lg:py-40 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-forillon-navy/85 via-forillon-navy/80 to-electric-teal/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-forillon-navy/60 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-electric-teal/20 text-electric-teal rounded-full text-sm font-medium border border-electric-teal/30">
                Where Innovation Meets Heart
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white leading-tight">
              Every Great Journey<br />
              <span className="text-electric-teal">Begins with a Spark</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver-mist max-w-4xl mx-auto mb-12 leading-relaxed">
              At Forillon Technologies, we believe technology should be more than code and hardware. 
              It should be a force for good — solving real problems, opening possibilities, and empowering everyone to reach their potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white px-8 py-3 text-lg font-semibold">
                Discover Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forillon-navy px-8 py-3 text-lg font-semibold">
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-electric-teal rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-electric-teal rounded-full opacity-80 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Our Story
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Every great journey begins with a spark — a moment of clarity where passion meets purpose.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Forillon Technologies was born from exactly that: a vision to create technology that truly makes a difference. 
                Not just for businesses, but for people. For communities. For a future that's smarter, more connected, and more human.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We started as a small group of dreamers and doers who believed that technology could be more than just code and hardware. 
                It could be a force for good — solving real problems, opening new possibilities, and empowering everyone to reach their full potential.
              </p>
              <p className="text-lg text-gray-700">
                In a world flooded with noise and complexity, we chose a different path: to build solutions that are simple to use, 
                yet powerful in impact. That's the heartbeat of Forillon — creating technology that feels effortless but drives extraordinary change.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Innovation and technology"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-forillon-navy">Why We Do What We Do</h3>
              <p className="text-lg text-gray-700 mb-6">
                Technology is everywhere — but not everywhere does technology truly work for people. 
                We saw too many products built without heart, without deep understanding of the people who use them. 
                So we set out to do it differently.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to blend innovation with empathy. To listen closely to the challenges faced by our partners and users. 
                To create tools that don't just work — but inspire confidence, spark creativity, and open doors.
              </p>
              <p className="text-lg text-gray-700">
                Because at the end of the day, technology is only as valuable as the lives it touches. 
                And we want to touch lives in ways that matter.
              </p>
            </div>
          </div>
          
          <div className="bg-silver-mist rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-forillon-navy text-center">Our Culture: Bold, Collaborative, Curious</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  At Forillon, we are builders, creators, and lifelong learners. We embrace big ideas and the messy process of making them real. 
                  We know innovation requires courage — to question the usual, to take risks, and to keep pushing when the road gets tough.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  We celebrate diversity of thought and background, because it makes us stronger and fuels creativity. 
                  Every voice matters, every perspective counts — and together we create something far greater than the sum of its parts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-6 text-forillon-navy">Partnerships That Propel Us Forward</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
              We believe the best technology emerges from genuine collaboration. That's why we work hand-in-hand with visionary clients 
              and industry leaders who share our values and hunger for impact. Together, we turn challenges into opportunities and ideas into breakthroughs.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              Our success is measured not just in products shipped, but in lasting relationships built on trust, transparency, and shared ambition.
            </p>
            <Button className="bg-electric-teal hover:bg-electric-teal/90 text-white">
              Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-forillon-navy rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">The Road Ahead</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              The future is full of promise — new technologies, new possibilities, new ways to improve how we live and work. 
              Forillon Technologies is excited to be at the forefront, leading with integrity, passion, and a relentless drive to make a difference.
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto">
              This is just the beginning. We invite you to join us — as partners, collaborators, or simply believers — 
              in shaping a world where technology serves humanity, elevates potential, and inspires hope.
            </p>
            <p className="text-xl font-semibold text-electric-teal">
              Forillon Technologies — Where Innovation Meets Heart.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Our Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide every decision and innovation at Forillon
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-electric-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-forillon-navy">Human-Centered</h3>
              <p className="text-gray-600">
                Technology should amplify human potential, not replace it. We design 
                solutions that empower people to achieve more.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Target className="h-12 w-12 text-electric-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-forillon-navy">Purpose-Driven</h3>
              <p className="text-gray-600">
                Every solution we create serves a clear purpose: to transform 
                businesses and improve outcomes for all stakeholders.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Award className="h-12 w-12 text-electric-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-forillon-navy">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every aspect of our work, from initial 
                consultation to final implementation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Visionary leaders driving innovation in enterprise technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-forillon-navy">John Smith</h3>
              <p className="text-electric-teal font-medium mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                20+ years in enterprise technology and digital transformation
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-forillon-navy">Sarah Johnson</h3>
              <p className="text-electric-teal font-medium mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                AI research pioneer with expertise in machine learning and infrastructure
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-forillon-navy">Michael Chen</h3>
              <p className="text-electric-teal font-medium mb-2">Chief Operating Officer</p>
              <p className="text-gray-600 text-sm">
                Operations excellence leader with focus on scalable business transformation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}