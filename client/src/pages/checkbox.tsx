import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  CheckSquare, 
  Server, 
  Palette, 
  Plug, 
  Globe, 
  Wifi, 
  Shield, 
  Workflow, 
  BarChart3, 
  KeyRound,
  Loader2,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { checkboxLeadSchema, type CheckboxLeadForm } from "@shared/schema";

const features = [
  {
    id: "survey-builder",
    title: "Survey Builder (Drag & Drop)",
    description: "Intuitive drag-and-drop interface for creating complex surveys without coding",
    icon: CheckSquare
  },
  {
    id: "on-prem-hosting",
    title: "On-Prem Hosting (Data stays in UAE)",
    description: "Deploy securely within UAE borders, ensuring full data sovereignty compliance",
    icon: Server
  },
  {
    id: "white-label",
    title: "Full White-Label Customization",
    description: "Complete branding control with custom colors, logos, and domain names",
    icon: Palette
  },
  {
    id: "api-integration",
    title: "API & Integration Support",
    description: "RESTful APIs and webhooks for seamless integration with your existing systems",
    icon: Plug
  },
  {
    id: "multilingual",
    title: "Multilingual Support (English / Arabic)",
    description: "Native support for English and Arabic with RTL layout optimization",
    icon: Globe
  },
  {
    id: "offline-collection",
    title: "Offline / Field Data Collection",
    description: "Collect data without internet connectivity, sync when back online",
    icon: Wifi
  },
  {
    id: "security",
    title: "Role-Based Access & Security Logs",
    description: "Granular permissions, audit trails, and comprehensive security logging",
    icon: Shield
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Automate responses, notifications, and data processing workflows",
    icon: Workflow
  },
  {
    id: "analytics",
    title: "Advanced Analytics Dashboard",
    description: "Real-time insights with customizable reports and data visualization",
    icon: BarChart3
  },
  {
    id: "enterprise-sso",
    title: "Enterprise SSO (SAML / OAuth)",
    description: "Seamless authentication with SAML, OAuth, and Active Directory integration",
    icon: KeyRound
  }
];

export default function CheckboxLandingPage() {
  const { toast } = useToast();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Checkbox — White-Label Survey Platform | Forillon × Mindsbourg";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Checkbox lets UAE enterprises deploy secure, white-label survey and automation platforms on-premise. Powered by Forillon Technologies × Mindsbourg.');

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Checkbox — White-Label Survey Platform | Forillon × Mindsbourg' },
      { property: 'og:description', content: 'Control your data. Customize your brand. Deploy securely within UAE.' },
      { property: 'og:type', content: 'website' },
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
  }, []);
  
  const form = useForm<CheckboxLeadForm>({
    resolver: zodResolver(checkboxLeadSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      features: [],
      consent: false,
    },
  });

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => {
      const newFeatures = prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId];
      
      // Map feature IDs to human-readable titles for the API
      const featureTitles = newFeatures.map(id => {
        const feature = features.find(f => f.id === id);
        return feature ? feature.title : id;
      });
      
      form.setValue('features', featureTitles, { shouldValidate: true, shouldDirty: true });
      return newFeatures;
    });
  };

  const submitLead = useMutation({
    mutationFn: async (data: CheckboxLeadForm) => {
      const response = await fetch('/api/lead', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit lead');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Thank You!",
        description: data.message || "Our team will contact you within 24 hours.",
      });
      form.reset();
      setSelectedFeatures([]);
    },
    onError: (error) => {
      console.error('Lead submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CheckboxLeadForm) => {
    submitLead.mutate(data);
  };

  const scrollToForm = () => {
    const formSection = document.querySelector('#lead-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{
        background: "linear-gradient(135deg, #0A0F2C 0%, #1a2456 100%)"
      }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Co-Branding Header */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="text-white text-2xl font-bold tracking-wide">
              FORILLON TECHNOLOGIES
            </div>
            <div className="text-[#D4AF37] text-3xl">×</div>
            <div className="text-[#D4AF37] text-2xl font-bold tracking-wide">
              MINDSBOURG
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Checkbox — Your White-Label,<br />On-Prem Survey Platform<br />for UAE Enterprises
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Control your data. Customize your brand. Deploy securely within UAE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A0F2C] font-semibold text-lg px-8 py-6"
                onClick={scrollToForm}
                data-testid="button-request-poc"
              >
                Request a Free POC
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6"
                onClick={scrollToFeatures}
                data-testid="button-explore-features"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Selection Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A0F2C]">
              Select Features You're Interested In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the capabilities that matter most to your organization. Our team will provide a customized demonstration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => {
              const isSelected = selectedFeatures.includes(feature.id);
              const Icon = feature.icon;
              
              return (
                <Card
                  key={feature.id}
                  className={`transition-all duration-300 hover:shadow-xl ${
                    isSelected 
                      ? 'border-[#D4AF37] border-2 shadow-lg bg-[#D4AF37]/5' 
                      : 'border-gray-200 hover:border-[#D4AF37]/50'
                  }`}
                  data-testid={`feature-card-${feature.id}`}
                >
                  <CardContent className="p-6 cursor-pointer" onClick={() => toggleFeature(feature.id)}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        isSelected ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-[#0A0F2C]'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg text-[#0A0F2C]">
                            {feature.title}
                          </h3>
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) => {
                              // Prevent double toggle from card click
                              if (checked !== isSelected) {
                                toggleFeature(feature.id);
                              }
                            }}
                            className={isSelected ? "border-[#D4AF37] bg-[#D4AF37]" : ""}
                            data-testid={`checkbox-${feature.id}`}
                          />
                        </div>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {selectedFeatures.length > 0 && (
            <div className="text-center">
              <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37] rounded-lg px-6 py-3 mb-6">
                <p className="text-[#0A0F2C] font-semibold">
                  {selectedFeatures.length} feature{selectedFeatures.length !== 1 ? 's' : ''} selected
                </p>
              </div>
              <div>
                <Button 
                  onClick={scrollToForm}
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A0F2C] font-semibold px-8"
                  data-testid="button-proceed-to-form"
                >
                  Proceed to Submit Enquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-t-4 border-[#D4AF37]">
            <div className="bg-[#0A0F2C] text-white p-8 rounded-t-lg">
              <h2 className="text-3xl font-bold mb-3 text-center">Submit Your Enquiry</h2>
              <p className="text-white/90 text-center">
                Fill in your details and our team will reach out within 24 hours to discuss your requirements.
              </p>
            </div>
            
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A0F2C] font-semibold">Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="John Smith"
                            className="border-gray-300 focus:border-[#D4AF37]"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A0F2C] font-semibold">Company Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="ABC Corporation"
                            className="border-gray-300 focus:border-[#D4AF37]"
                            data-testid="input-company"
                          />
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
                        <FormLabel className="text-[#0A0F2C] font-semibold">Work Email *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            placeholder="john@company.com"
                            className="border-gray-300 focus:border-[#D4AF37]"
                            data-testid="input-email"
                          />
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
                        <FormLabel className="text-[#0A0F2C] font-semibold">Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="+971 50 123 4567"
                            className="border-gray-300 focus:border-[#D4AF37]"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-200 p-4 bg-gray-50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                            data-testid="checkbox-consent"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium text-[#0A0F2C] cursor-pointer">
                            I agree to be contacted by Forillon Technologies *
                          </FormLabel>
                          <p className="text-xs text-gray-600">
                            We respect your privacy and will only contact you regarding Checkbox.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />

                  {selectedFeatures.length > 0 && (
                    <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-lg p-4">
                      <p className="text-sm font-semibold text-[#0A0F2C] mb-2">
                        Selected Features ({selectedFeatures.length}):
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFeatures.map(featureId => {
                          const feature = features.find(f => f.id === featureId);
                          return feature ? (
                            <span 
                              key={featureId}
                              className="inline-flex items-center bg-white border border-[#D4AF37] text-[#0A0F2C] text-xs px-3 py-1 rounded-full"
                            >
                              {feature.title}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={submitLead.isPending}
                    className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A0F2C] font-semibold text-lg py-6"
                    data-testid="button-submit"
                  >
                    {submitLead.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0F2C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 mb-4">
            © Forillon Technologies × Mindsbourg — All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="/privacy-policy" className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">
              Privacy Policy
            </a>
            <a href="/contact" className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
