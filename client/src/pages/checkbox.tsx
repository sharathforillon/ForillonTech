import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Loader2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { checkboxLeadSchema, type CheckboxLeadForm } from "@shared/schema";
import mindsbourgLogo from "@assets/Mindsbourg-Logo_alt_1761671481551.jpg";
import forillonLogo from "@assets/logo_nobackground_1761671485550.png";

const featureCategories = [
  {
    id: "tech-platform",
    name: "TECH SURVEY PLATFORM",
    features: [
      { id: "cloud-based", title: "Cloud based" },
      { id: "on-premise", title: "On Premise" },
      { id: "white-labelled", title: "White Labelled" },
      { id: "whatsapp-bot", title: "Whatsapp Bot" },
      { id: "survey-gamification", title: "Survey Gamification" },
      { id: "voice-response", title: "Voice response" },
      { id: "ai-sentiment", title: "AI Enabled Real time Sentiment Analysis" },
      { id: "multilingual", title: "Multilingual" }
    ]
  },
  {
    id: "research-helpdesk",
    name: "RESEARCH HELP DESK",
    features: [
      { id: "mr-problem", title: "MR Problem assessment – definition" },
      { id: "rfp-prep", title: "RFP Preparation / Review" },
      { id: "questionnaire", title: "Instrument / Questionnaire Design" },
      { id: "data-collection", title: "Data collection" },
      { id: "data-analysis", title: "Data Analysis support" },
      { id: "data-viz", title: "Data Visualization" },
      { id: "dashboard-creation", title: "Dashboard Creation for Existing Data" },
      { id: "integrate-multi-sources", title: "Integrating Data from Multiple Sources (Int & External Data)" },
      { id: "integrate-multi-types", title: "Integrating Multiple Data Types (text, images, video, numbers)" },
      { id: "data-cleaning", title: "Data Cleaning & Data File Preparation" },
      { id: "statistical-testing", title: "Statistical testing - Advanced Statistical Modelling" },
      { id: "predictive-analytics", title: "Data Analytics - Predictive Analytics" },
      { id: "report-prep", title: "Report Preparation Support" },
      { id: "report-design", title: "Report Design" },
      { id: "presentation-design", title: "Presentation Design" },
      { id: "research-workshops", title: "Research Workshops" },
      { id: "data-workshops", title: "Data Analysis Workshops" },
      { id: "dedicated-analyst", title: "Dedicated Data Analyst" },
      { id: "micro-study", title: "Micro Study (Upto 5 Questions)" },
      { id: "mini-study", title: "Mini Study (upto 10 Questions)" }
    ]
  }
];

export default function CheckboxLandingPage() {
  const { toast } = useToast();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Checkbox — White-Label Survey Platform | Forillon × Mindsbourg";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Checkbox lets UAE enterprises deploy secure, white-label survey and automation platforms on-premise. Powered by Forillon Technologies × Mindsbourg.');

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
      
      const featureTitles = newFeatures.map(id => {
        for (const category of featureCategories) {
          const feature = category.features.find(f => f.id === id);
          if (feature) return feature.title;
        }
        return id;
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 opacity-70" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Co-Branding Logos */}
          <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img 
                src={forillonLogo} 
                alt="Forillon Technologies" 
                className="h-16 w-auto"
              />
            </div>
            <div className="text-5xl font-light text-gray-400">×</div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img 
                src={mindsbourgLogo} 
                alt="Mindsbourg" 
                className="h-16 w-auto"
              />
            </div>
          </div>

          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                White-Label Survey Platform
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Checkbox
              </span>
              <br />
              <span className="text-gray-800 text-5xl md:text-6xl">
                Enterprise Survey Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Control your data. Customize your brand. Deploy securely within UAE.
              <br />
              <span className="text-lg text-gray-600">On-premise. White-labeled. Enterprise-ready.</span>
            </p>
            
            {/* Key Features Pills */}
            <div className="flex flex-wrap gap-4 justify-center mb-12 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md border border-blue-100">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">100% Data Sovereignty</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md border border-purple-100">
                <Zap className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">Rapid Deployment</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md border border-pink-100">
                <CheckCircle2 className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium text-gray-700">Full Customization</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl"
                onClick={scrollToForm}
                data-testid="button-request-poc"
              >
                Request a Free POC
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 border-2 border-purple-200 hover:border-purple-300 font-semibold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
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
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-5 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Customizable Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Select Features You're<br />Interested In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Choose the capabilities that matter most to your organization. Our team will provide a customized demonstration.
            </p>
          </div>

          <Tabs defaultValue="tech-platform" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 mb-12 bg-white/80 backdrop-blur-sm h-auto p-2 rounded-2xl shadow-lg border border-purple-100">
              <TabsTrigger 
                value="tech-platform" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-semibold py-4 text-base md:text-lg rounded-xl transition-all duration-300"
              >
                TECH SURVEY PLATFORM
              </TabsTrigger>
              <TabsTrigger 
                value="research-helpdesk" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-semibold py-4 text-base md:text-lg rounded-xl transition-all duration-300"
              >
                RESEARCH HELP DESK
              </TabsTrigger>
            </TabsList>

            {featureCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                  {category.features.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id);
                    
                    return (
                      <div
                        key={feature.id}
                        className={`group flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 ${
                          isSelected 
                            ? 'border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg scale-105' 
                            : 'border-purple-100 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-md hover:scale-102'
                        }`}
                        data-testid={`feature-item-${feature.id}`}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleFeature(feature.id)}
                          className={`${
                            isSelected 
                              ? "border-purple-500 bg-gradient-to-br from-purple-500 to-pink-500 text-white" 
                              : "border-gray-300"
                          } flex-shrink-0 w-5 h-5 transition-all duration-300`}
                          data-testid={`checkbox-${feature.id}`}
                        />
                        <label 
                          className={`text-sm font-medium cursor-pointer flex-1 transition-colors duration-300 ${
                            isSelected ? 'text-purple-900' : 'text-gray-700 group-hover:text-gray-900'
                          }`}
                          onClick={() => toggleFeature(feature.id)}
                        >
                          {feature.title}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {selectedFeatures.length > 0 && (
            <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 rounded-2xl px-8 py-4 mb-8 shadow-lg">
                <p className="text-gray-800 font-bold text-lg">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {selectedFeatures.length} feature{selectedFeatures.length !== 1 ? 's' : ''} selected
                  </span>
                </p>
              </div>
              <div>
                <Button 
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl"
                  data-testid="button-proceed-to-form"
                >
                  Proceed to Submit Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-5 py-2 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Submit Your Enquiry
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Fill in your details and our team will reach out within 24 hours
            </p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm">
            <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-center">Let's Connect</h3>
                <p className="text-purple-100 text-center text-sm">
                  Complete the form below to start your Checkbox journey
                </p>
              </div>
            </div>
            
            <CardContent className="p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold text-base">Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="John Smith"
                            className="border-2 border-purple-100 focus:border-purple-400 rounded-xl py-6 text-base transition-all duration-300"
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
                        <FormLabel className="text-gray-700 font-semibold text-base">Company Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="ABC Corporation"
                            className="border-2 border-purple-100 focus:border-purple-400 rounded-xl py-6 text-base transition-all duration-300"
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
                        <FormLabel className="text-gray-700 font-semibold text-base">Work Email *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            placeholder="john@company.com"
                            className="border-2 border-purple-100 focus:border-purple-400 rounded-xl py-6 text-base transition-all duration-300"
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
                        <FormLabel className="text-gray-700 font-semibold text-base">Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="+971 50 123 4567"
                            className="border-2 border-purple-100 focus:border-purple-400 rounded-xl py-6 text-base transition-all duration-300"
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
                      <FormItem className="flex flex-row items-start space-x-4 space-y-0 rounded-2xl border-2 border-purple-100 p-5 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 border-purple-300"
                            data-testid="checkbox-consent"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium text-gray-700 cursor-pointer">
                            I agree to be contacted by Forillon Technologies *
                          </FormLabel>
                          <p className="text-xs text-gray-500">
                            We respect your privacy and will only contact you regarding Checkbox.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />

                  {selectedFeatures.length > 0 && (
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6">
                      <p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600" />
                        Selected Features ({selectedFeatures.length}):
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFeatures.map(featureId => {
                          let featureTitle = featureId;
                          for (const category of featureCategories) {
                            const feature = category.features.find(f => f.id === featureId);
                            if (feature) {
                              featureTitle = feature.title;
                              break;
                            }
                          }
                          return (
                            <span 
                              key={featureId}
                              className="inline-flex items-center bg-white border-2 border-purple-300 text-purple-700 text-xs font-medium px-4 py-2 rounded-full shadow-sm"
                            >
                              {featureTitle}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={submitLead.isPending}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl"
                    data-testid="button-submit"
                  >
                    {submitLead.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Logos */}
          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <img src={forillonLogo} alt="Forillon Technologies" className="h-12 w-auto opacity-80" />
            <div className="text-3xl font-light text-white/50">×</div>
            <img src={mindsbourgLogo} alt="Mindsbourg" className="h-12 w-auto opacity-80" />
          </div>
          
          <div className="text-center">
            <p className="text-purple-200 mb-6 text-sm">
              © 2025 Forillon Technologies × Mindsbourg — All Rights Reserved.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="/privacy-policy" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/contact" className="text-purple-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
