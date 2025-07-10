import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Innovation Drive", "Tech Hub City, TC 12345", "United States"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM EST"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@forillon.com", "support@forillon.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen bg-ice-white">
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
        <div className="absolute inset-0 bg-gradient-to-r from-forillon-navy/90 to-forillon-navy/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-silver-mist max-w-3xl mx-auto">
              Ready to transform your enterprise? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-forillon-navy">Get In Touch</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
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
                        <Label htmlFor="email">Email Address</Label>
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
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Tell us about your project or how we can help..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-electric-teal hover:bg-electric-teal/90 text-white"
                    >
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-forillon-navy mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  We're here to help you navigate your digital transformation journey. 
                  Reach out through any of these channels.
                </p>
              </div>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start">
                    <info.icon className="h-6 w-6 text-electric-teal mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-forillon-navy mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-silver-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Located in the heart of the technology district
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-electric-teal mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">123 Innovation Drive, Tech Hub City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-forillon-navy mb-2">
                How long does a typical transformation project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity, typically ranging from 3-18 months. 
                We provide detailed timelines during our initial consultation.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-forillon-navy mb-2">
                Do you provide ongoing support after implementation?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive support packages including maintenance, optimization, 
                and evolution services to ensure long-term success.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-forillon-navy mb-2">
                What industries do you specialize in?
              </h3>
              <p className="text-gray-600">
                We work across all industries, with particular expertise in finance, healthcare, 
                manufacturing, and technology sectors.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}