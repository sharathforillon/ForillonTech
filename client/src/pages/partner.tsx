import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Handshake, Users, Target, ArrowRight, Calendar, Loader2 } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { partnershipInquirySchema, type PartnershipInquiry } from "@shared/schema";

export default function Partner() {
  const { toast } = useToast();
  
  const form = useForm<PartnershipInquiry>({
    resolver: zodResolver(partnershipInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      companyName: "",
      companySize: "",
      industry: "",
      website: "",
      partnershipType: [],
      projectBudget: "",
      timeline: "",
      description: "",
    },
  });

  const submitPartnershipInquiry = useMutation({
    mutationFn: async (data: PartnershipInquiry) => {
      // Save to database first
      const dbResponse = await fetch('/api/partnership', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!dbResponse.ok) {
        console.error('Failed to save to database, but continuing with email');
      }
      
      // Then try to send email
      const emailResponse = await fetch('/api/partnership-inquiry', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return { database: dbResponse.ok, email: emailResponse.ok };
    },
    onSuccess: () => {
      toast({
        title: "Partnership Inquiry Sent!",
        description: "Thank you for your interest in partnering with us. Our partnerships team will contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      console.error('Partnership inquiry error:', error);
      toast({
        title: "Error",
        description: "Failed to send partnership inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: PartnershipInquiry) => {
    console.log('Form submission data:', data);
    console.log('Form errors:', form.formState.errors);
    submitPartnershipInquiry.mutate(data);
  };

  const partnershipBenefits = [
    {
      icon: Target,
      title: "Strategic Growth",
      description: "Access to cutting-edge technology solutions and innovative frameworks that accelerate your market position."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with our network of technology leaders, industry experts, and experienced consultants."
    },
    {
      icon: Handshake,
      title: "Collaborative Success",
      description: "Joint go-to-market strategies, co-branded solutions, and shared success metrics that drive mutual growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-forillon-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Partner With Forillon Technologies
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join forces with us to deliver innovative technology solutions that transform businesses and drive industry growth.
          </p>
          <Button 
            className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3"
            onClick={() => {
              const formSection = document.querySelector('form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Partnership Discussion
          </Button>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forillon-navy">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe in the power of collaboration to create solutions that exceed what any single organization can achieve alone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 text-electric-teal mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-forillon-navy">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center bg-forillon-navy text-white rounded-t-lg">
              <CardTitle className="text-2xl">Partnership Inquiry Form</CardTitle>
              <p className="text-white/90 mt-2">
                Tell us about your organization and how we can collaborate to achieve mutual success.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Contact Information */}
                  <div className="bg-white p-6 rounded-lg border-l-4 border-electric-teal">
                    <h3 className="text-lg font-semibold text-forillon-navy mb-4">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Job Title *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="bg-white p-6 rounded-lg border-l-4 border-electric-teal">
                    <h3 className="text-lg font-semibold text-forillon-navy mb-4">Company Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                              </FormControl>
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
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Size *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select company size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                                <SelectItem value="small">Small (11-50 employees)</SelectItem>
                                <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                                <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                                <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website (Optional)</FormLabel>
                            <FormControl>
                              <Input type="url" placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Partnership Details */}
                  <div className="bg-white p-6 rounded-lg border-l-4 border-electric-teal">
                    <h3 className="text-lg font-semibold text-forillon-navy mb-4">Partnership Details</h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="partnershipType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Partnership Types *</FormLabel>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                { value: "technology", label: "Technology Integration" },
                                { value: "reseller", label: "Reseller Partnership" },
                                { value: "joint-venture", label: "Joint Venture" },
                                { value: "strategic", label: "Strategic Alliance" },
                                { value: "consulting", label: "Consulting Partnership" },
                                { value: "other", label: "Other" },
                              ].map((item) => (
                                <div key={item.value} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={item.value}
                                    checked={field.value?.includes(item.value)}
                                    onCheckedChange={(checked) => {
                                      const updatedValue = checked
                                        ? [...(field.value || []), item.value]
                                        : (field.value || []).filter((value) => value !== item.value);
                                      field.onChange(updatedValue);
                                    }}
                                  />
                                  <label htmlFor={item.value} className="text-sm font-medium leading-none">
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="projectBudget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expected Investment Range *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="10k">$10K - $50K</SelectItem>
                                  <SelectItem value="50k">$50K - $100K</SelectItem>
                                  <SelectItem value="100k">$100K - $500K</SelectItem>
                                  <SelectItem value="500k">$500K - $1M</SelectItem>
                                  <SelectItem value="1m">$1M+</SelectItem>
                                  <SelectItem value="discuss">Prefer to discuss</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                                  <SelectItem value="short">Short term (1-3 months)</SelectItem>
                                  <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                                  <SelectItem value="long">Long term (6+ months)</SelectItem>
                                  <SelectItem value="ongoing">Ongoing partnership</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Description */}
                  <div className="bg-white p-6 rounded-lg border-l-4 border-electric-teal">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Partnership Proposal & Goals (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="min-h-[120px]"
                              placeholder="Describe your partnership goals, what you're looking to achieve, and how you envision our collaboration..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button 
                      type="submit"
                      disabled={submitPartnershipInquiry.isPending}
                      className="bg-electric-teal hover:bg-electric-teal/90 text-white text-lg px-8 py-3 flex-1"
                    >
                      {submitPartnershipInquiry.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Partnership Inquiry <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
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
              </Form>
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
              onClick={() => window.open('mailto:sreddy@forillontech.com', '_blank')}
            >
              Email Us Directly
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}