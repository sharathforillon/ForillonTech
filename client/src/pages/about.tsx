import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-ice-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forillon-navy via-forillon-navy to-electric-teal/20 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-electric-teal text-white text-sm font-medium rounded-full">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Where Innovation Meets Heart
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Building Technology<br />
                <span className="text-electric-teal">That Transforms Lives</span>
              </h1>
              <p className="text-xl text-silver-mist mb-8 leading-relaxed">
                We don't just create software — we craft solutions that understand, 
                empower, and uplift the human experience. Every line of code, every interface, 
                every innovation is designed with one purpose: to make life better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-electric-teal hover:bg-electric-teal/90 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('our-story');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Discover Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-teal mb-2">500+</div>
                    <div className="text-silver-mist text-sm">Lives Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-teal mb-2">16</div>
                    <div className="text-silver-mist text-sm">Years of Innovation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-teal mb-2">98%</div>
                    <div className="text-silver-mist text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-teal mb-2">∞</div>
                    <div className="text-silver-mist text-sm">Possibilities</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <blockquote className="text-white italic text-center">
                    "Technology is only as valuable as the lives it touches."
                  </blockquote>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-teal rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-silver-mist to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-teal rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-forillon-navy">Our Vision</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                To build technology that deeply understands, empowers, and uplifts the human experience—everywhere it's used.
              </p>
            </div>
            
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-forillon-navy rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-forillon-navy">Our Mission</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                We craft intelligent, intuitive solutions that solve real-world problems, enhance lives, and drive meaningful progress—by putting people at the heart of every innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="our-story" className="py-20 bg-white">
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

      {/* Global Presence */}
      <section className="py-20 bg-gradient-to-br from-forillon-navy to-electric-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Global Presence, Local Impact
            </h2>
            <p className="text-xl text-silver-mist max-w-3xl mx-auto">
              Serving clients across North America with deep local expertise and global perspective
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mr-4">
                  <svg className="w-8 h-8 text-electric-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">American Operations</h3>
                  <p className="text-electric-teal font-medium">New York, New York</p>
                </div>
              </div>
              <p className="text-lg text-silver-mist leading-relaxed mb-6">
                Forillon Technologies maintains a strong presence in America's financial and technology capital. 
                Our New York operations serve as a gateway to the American market, bringing 
                our innovative solutions to businesses across the country.
              </p>
              <p className="text-lg text-silver-mist leading-relaxed">
                From AI consulting to digital transformation, we're helping American enterprises 
                harness the power of technology to drive growth and competitive advantage.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-electric-teal mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <h4 className="text-xl font-bold text-white mb-2">North American Reach</h4>
                  <p className="text-silver-mist">Serving clients coast to coast</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-electric-teal mb-1">2</div>
                    <div className="text-silver-mist text-sm">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-electric-teal mb-1">50+</div>
                    <div className="text-silver-mist text-sm">American Clients</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <p className="text-white italic">
                    "Bridging innovation across borders"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}