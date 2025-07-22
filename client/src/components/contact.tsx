import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, CheckCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const benefits = [
    "15+ years of enterprise experience",
    "200+ successful transformations",
    "24/7 support and maintenance"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ice-white to-white text-forillon-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto mb-8">
            Ready to transform your business? Let's discuss your technology challenges and create a roadmap for success.
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3"
              onClick={() => window.open('https://calendly.com/forillon-technologies/consultation', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white text-lg px-8 py-3"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-gray">+971 558627601 (Dubai)</div>
                    <div className="text-slate-gray">+1 6475648494 (Toronto)</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-gray">contact@forillontech.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-teal rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Offices</div>
                    <div className="text-slate-gray">Dubai Silicon Oasis, Dubai, UAE</div>
                    <div className="text-slate-gray">Toronto, Ontario, Canada</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Choose Forillon?</h3>
              <ul className="space-y-2 text-slate-gray">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-electric-teal mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-electric-teal/20">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-electric-teal/30 rounded-md text-forillon-navy placeholder-slate-gray focus:outline-none focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-electric-teal/30 rounded-md text-forillon-navy placeholder-slate-gray focus:outline-none focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-electric-teal/30 rounded-md text-forillon-navy placeholder-slate-gray focus:outline-none focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-electric-teal/30 rounded-md text-forillon-navy placeholder-slate-gray focus:outline-none focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-electric-teal/30 rounded-md text-forillon-navy placeholder-slate-gray focus:outline-none focus:ring-2 focus:ring-electric-teal focus:border-electric-teal resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-teal text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
