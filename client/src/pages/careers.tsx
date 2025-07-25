import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Users, Trophy, Heart, Zap } from "lucide-react";

export default function Careers() {
  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented teams across diverse projects and cutting-edge technologies"
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Continuous learning, skill development, and career advancement paths"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive health benefits"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Lead innovative projects with the latest AI and enterprise technologies"
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      location: "Remote / Toronto / Dubai",
      type: "Full-time",
      description: "Lead AI model development and deployment for enterprise clients"
    },
    {
      title: "Cloud Solutions Architect",
      location: "Remote / Toronto / Dubai", 
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions"
    },
    {
      title: "Digital Transformation Consultant",
      location: "Remote / Toronto / Dubai",
      type: "Full-time", 
      description: "Guide enterprise clients through comprehensive digital modernization"
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Toronto / Dubai",
      type: "Full-time",
      description: "Build and maintain CI/CD pipelines and infrastructure automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build the future of enterprise technology with Forillon Technologies. 
            Join a team of passionate innovators transforming businesses worldwide.
          </p>
          <Button 
            className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3"
            onClick={() => window.location.href = 'mailto:careers@forillontech.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Apply Now
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a company that values innovation, growth, and work-life balance 
              while working on transformative technology projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-electric-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-electric-teal" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with cutting-edge 
              technology projects and innovative enterprise solutions.
            </p>
          </div>
          
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{position.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <span className="px-2 py-1 bg-electric-teal/10 text-electric-teal rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button 
                      className="bg-electric-teal hover:bg-electric-teal/90 text-white px-6 py-2"
                      onClick={() => window.location.href = 'mailto:careers@forillontech.com?subject=Application for ' + position.title}
                    >
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-electric-teal rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Don't see the right role?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              We're always looking for talented individuals. Send us your resume and 
              let's discuss how you can contribute to our mission.
            </p>
            <Button 
              className="bg-white hover:bg-gray-50 text-electric-teal text-lg px-10 py-4 font-semibold"
              onClick={() => window.location.href = 'mailto:careers@forillontech.com?subject=General Application'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}