import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Handshake, Users, Target, ArrowRight, Calendar } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Partner() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    companySize: "",
    industry: "",
    partnershipType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Partnership Inquiry Sent!",
      description: "Thank you for your interest in partnering with us. Our partnerships team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      title: "",
      phone: "",
      companySize: "",
      industry: "",
      partnershipType: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const partnershipBenefits = [
    {
      icon: Target,
      title: "Strategic Growth",
      description: "Access to cutting-edge technology solutions and innovative frameworks that accelerate your market position."
    },
    {
      icon: Users,
      title: "Expert Collaboration",
      description: "Work directly with our seasoned technology leaders and industry specialists on joint initiatives."
    },
    {
      icon: Handshake,
      title: "Mutual Value Creation",
      description: "Build long-term partnerships that create sustainable value for both our organizations and customers."
    }
  ];

  return (
    <div className="min-h-screen bg-ice-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-forillon-navy py-20 lg:py-32 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-electric-teal text-white text-sm font-medium rounded-full">
                <Handshake className="w-4 h-4 mr-2" />
                Partnership Opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Partner with Forillon
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Build the future of technology together. Join us in creating solutions that transform industries and empower businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Why Partner with Us?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Forge strategic alliances that drive innovation and create lasting value for your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-silver-mist rounded-xl">
                <benefit.icon className="h-12 w-12 text-electric-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-forillon-navy">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-forillon-navy mb-4">
                Let's Explore Partnership Opportunities
              </CardTitle>
              <p className="text-gray-600 text-lg">
                Tell us about your organization and how we can create value together
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-electric-teal">
                  <h3 className="text-lg font-semibold text-forillon-navy mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-electric-teal">
                  <h3 className="text-lg font-semibold text-forillon-navy mb-4">Company Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select onValueChange={(value) => handleSelectChange('industry', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Financial Services</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail & E-commerce</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="companySize">Company Size *</Label>
                      <Select onValueChange={(value) => handleSelectChange('companySize', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                          <SelectItem value="small">Small (11-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                          <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Partnership Details */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-electric-teal">
                  <h3 className="text-lg font-semibold text-forillon-navy mb-4">Partnership Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="partnershipType">Partnership Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange('partnershipType', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology Integration</SelectItem>
                          <SelectItem value="reseller">Reseller Partnership</SelectItem>
                          <SelectItem value="joint-venture">Joint Venture</SelectItem>
                          <SelectItem value="strategic">Strategic Alliance</SelectItem>
                          <SelectItem value="consulting">Consulting Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                          <SelectItem value="short">Short term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long term (6+ months)</SelectItem>
                          <SelectItem value="ongoing">Ongoing partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="budget">Expected Investment Range</Label>
                      <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k">$10K - $50K</SelectItem>
                          <SelectItem value="50k">$50K - $100K</SelectItem>
                          <SelectItem value="100k">$100K - $500K</SelectItem>
                          <SelectItem value="500k">$500K - $1M</SelectItem>
                          <SelectItem value="1m">$1M+</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Partnership Proposal & Goals *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Describe your partnership goals, what you're looking to achieve, and how you envision our collaboration..."
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit"
                    className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3 flex-1"
                  >
                    Submit Partnership Inquiry <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white text-lg px-8 py-3"
                    onClick={() => window.open('https://calendly.com/sreddy-forillontech/30min', '_blank')}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Build Something Amazing Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our network of successful partners and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3"
              onClick={() => {
                const formSection = document.querySelector('form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Partnership Discussion
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-forillon-navy text-lg px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              General Inquiries
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}