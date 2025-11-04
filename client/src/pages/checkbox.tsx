import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Loader2,
  ArrowRight,
  CheckCircle2,
  Shield,
  Cloud,
  Server,
  Tag,
  MessageSquare,
  Gamepad2,
  Mic,
  Brain,
  Globe,
  FileCheck,
  PenTool,
  BarChart3,
  Database,
  TrendingUp,
  PlayCircle,
  X,
  Check
} from "lucide-react";
import Navigation from "@/components/navigation";
import { checkboxLeadSchema, type CheckboxLeadForm } from "@shared/schema";
import mindsbourgLogo from "@assets/Mindsbourg-Logo_alt_1761671481551.jpg";
import forillonLogo from "@assets/Logo_1761707930660.png";
import { apiRequest } from "@/lib/queryClient";
import { analytics } from "@/lib/analytics";

// Feature definitions with descriptions
const researchFeatures = [
  { id: "mr-problem", title: "MR Problem assessment", desc: "Define your research objectives with expert guidance", icon: FileCheck, group: "research" },
  { id: "rfp-prep", title: "RFP Preparation / Review", desc: "Professional RFP development and assessment", icon: PenTool, group: "research" },
  { id: "questionnaire", title: "Questionnaire Design", desc: "Build effective survey instruments", icon: FileCheck, group: "research" },
  { id: "data-collection", title: "Data collection", desc: "Comprehensive data gathering services", icon: Database, group: "research" },
  { id: "data-analysis", title: "Data Analysis support", desc: "Expert statistical analysis assistance", icon: BarChart3, group: "research" },
  { id: "data-viz", title: "Data Visualization", desc: "Transform data into compelling visuals", icon: TrendingUp, group: "research" },
  { id: "dashboard-creation", title: "Dashboard Creation", desc: "Build interactive dashboards for your data", icon: BarChart3, group: "research" },
  { id: "integrate-multi-sources", title: "Multi-Source Data Integration", desc: "Combine internal and external datasets", icon: Database, group: "research" },
  { id: "integrate-multi-types", title: "Multi-Type Data Integration", desc: "Integrate text, images, video, and numbers", icon: Database, group: "research" },
  { id: "data-cleaning", title: "Data Cleaning & Prep", desc: "Professional data file preparation", icon: Database, group: "research" },
  { id: "statistical-testing", title: "Advanced Statistical Modelling", desc: "Sophisticated statistical testing", icon: TrendingUp, group: "research" },
  { id: "predictive-analytics", title: "Predictive Analytics", desc: "Forecast trends with ML algorithms", icon: Brain, group: "research" },
  { id: "report-prep", title: "Report Preparation", desc: "Comprehensive report writing support", icon: FileCheck, group: "research" },
  { id: "report-design", title: "Report Design", desc: "Professional visual report creation", icon: PenTool, group: "research" },
  { id: "presentation-design", title: "Presentation Design", desc: "Engaging presentation development", icon: PenTool, group: "research" },
  { id: "research-workshops", title: "Research Workshops", desc: "Hands-on research training sessions", icon: FileCheck, group: "research" },
  { id: "data-workshops", title: "Data Analysis Workshops", desc: "Learn advanced analytics techniques", icon: BarChart3, group: "research" },
  { id: "dedicated-analyst", title: "Dedicated Data Analyst", desc: "Full-time analyst for your projects", icon: Brain, group: "research" },
  { id: "micro-study", title: "Micro Study (≤5 Questions)", desc: "Fast turnaround mini-surveys", icon: FileCheck, group: "research" },
  { id: "mini-study", title: "Mini Study (≤10 Questions)", desc: "Compact surveys with quick insights", icon: FileCheck, group: "research" }
];

const platformFeatures = [
  { id: "cloud-based", title: "Cloud based", desc: "Global deployment in minutes", icon: Cloud, group: "platform" },
  { id: "on-premise", title: "On Premise", desc: "100% data sovereignty guaranteed", icon: Server, group: "platform" },
  { id: "white-labelled", title: "White Labelled", desc: "Your brand, your platform", icon: Tag, group: "platform" },
  { id: "whatsapp-bot", title: "WhatsApp Bot", desc: "Reach 2B users instantly", icon: MessageSquare, group: "platform" },
  { id: "survey-gamification", title: "Survey Gamification", desc: "3x higher completion rates", icon: Gamepad2, group: "platform" },
  { id: "voice-response", title: "Voice response", desc: "Accessible to everyone", icon: Mic, group: "platform" },
  { id: "ai-sentiment", title: "AI Sentiment Analysis", desc: "Real-time emotion tracking", icon: Brain, group: "platform" },
  { id: "multilingual", title: "Multilingual", desc: "Support 100+ languages", icon: Globe, group: "platform" }
];

const allFeatures = [...researchFeatures, ...platformFeatures];

export default function CheckboxLandingPage() {
  const { toast } = useToast();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    document.title = "Build Your Custom Research Platform | Checkbox by Forillon";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'White-label survey platform with UAE hosting. No-code form builder. Enterprise security. Choose your features and get a custom demo.');
    if (!metaDescription.parentNode) document.head.appendChild(metaDescription);
  }, []);

  const form = useForm<CheckboxLeadForm>({
    resolver: zodResolver(checkboxLeadSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      productType: "",
      features: [],
      consent: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: CheckboxLeadForm) => {
      const response = await apiRequest("POST", "/api/checkbox-leads", data);
      return response;
    },
    onSuccess: (response: any) => {
      // Track form submission
      const leadId = response?.leadId || 'unknown';
      analytics.trackFormSubmit(selectedFeatures.length, leadId);

      toast({
        title: "Request submitted!",
        description: "We'll send you a custom demo link shortly.",
      });
      form.reset();
      setFormOpen(false);
      setSuccessOpen(true);
      setSelectedFeatures([]);
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error.message || "Please try again.",
      });
    },
  });

  const toggleFeature = (featureId: string) => {
    const feature = allFeatures.find(f => f.id === featureId);
    if (!feature) return;

    const isCurrentlySelected = selectedFeatures.includes(featureId);
    const action = isCurrentlySelected ? 'remove' : 'add';
    const newCount = isCurrentlySelected ? selectedFeatures.length - 1 : selectedFeatures.length + 1;

    // Track feature selection
    analytics.trackFeatureSelect(
      feature.title,
      feature.group as 'platform' | 'research',
      action,
      newCount
    );

    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const openForm = () => {
    if (selectedFeatures.length === 0) {
      toast({
        variant: "destructive",
        title: "No features selected",
        description: "Please choose at least one feature to continue.",
      });
      return;
    }
    
    // Track form open
    analytics.trackFormOpen(selectedFeatures.length);

    // Detect product type
    const hasResearch = selectedFeatures.some(id => 
      researchFeatures.find(f => f.id === id)
    );
    const hasPlatform = selectedFeatures.some(id => 
      platformFeatures.find(f => f.id === id)
    );
    
    let productType = "";
    if (hasResearch && hasPlatform) productType = "combined";
    else if (hasResearch) productType = "research-helpdesk";
    else if (hasPlatform) productType = "tech-platform";

    const selectedTitles = selectedFeatures
      .map(id => allFeatures.find(f => f.id === id)?.title)
      .filter(Boolean) as string[];

    form.setValue("productType", productType);
    form.setValue("features", selectedTitles);
    setFormOpen(true);
  };

  const onSubmit = (data: CheckboxLeadForm) => {
    submitMutation.mutate(data);
  };

  const selectedCount = selectedFeatures.length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Co-branded Logos */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-48 h-20 flex items-center justify-center">
              <img src={forillonLogo} alt="Forillon Technologies" className="max-h-14 max-w-full object-contain opacity-80" />
            </div>
            <div className="text-2xl font-light text-gray-300">×</div>
            <div className="w-48 h-20 flex items-center justify-center">
              <img src={mindsbourgLogo} alt="Mindsbourg" className="max-h-14 max-w-full object-contain opacity-80" />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-deep-blue leading-tight">
              Build your custom research and survey platform fast
            </h1>
            <p className="text-xl md:text-2xl text-slate-gray mb-4 leading-relaxed">
              Checkbox by Forillon. White-label. UAE hosting option. No-code form builder. Enterprise security.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="bg-accent-cyan hover:bg-vibrant-teal text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  analytics.trackCTAClick('hero_choose_features');
                  document.getElementById('feature-explorer')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-choose-features"
              >
                Choose your features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all"
                onClick={() => {
                  analytics.trackCTAClick('hero_watch_demo');
                  setVideoOpen(true);
                }}
                data-testid="button-watch-demo"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch 60s demo
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap gap-6 justify-center items-center">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Shield className="h-5 w-5 text-success-green" />
              <span className="text-sm font-medium text-slate-gray">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Shield className="h-5 w-5 text-success-green" />
              <span className="text-sm font-medium text-slate-gray">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Server className="h-5 w-5 text-accent-cyan" />
              <span className="text-sm font-medium text-slate-gray">UAE-Hosted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Explorer Section */}
      <section id="feature-explorer" className="py-20 bg-soft-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
              Pick the capabilities you want
            </h2>
            <p className="text-xl text-slate-gray">
              We'll tailor a demo and proposal just for you.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Feature Cards */}
            <div className="lg:col-span-2 space-y-12">
              {/* Research Help Desk Features */}
              <div>
                <h3 className="text-2xl font-bold text-deep-blue mb-6 flex items-center gap-3">
                  <BarChart3 className="h-7 w-7 text-accent-cyan" />
                  Research Help Desk
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {researchFeatures.map((feature) => {
                    const Icon = feature.icon;
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`
                          relative p-4 rounded-xl border-2 text-left transition-all duration-200
                          ${isSelected 
                            ? 'bg-accent-cyan/10 border-accent-cyan shadow-lg scale-[1.02]' 
                            : 'bg-white border-gray-200 hover:border-accent-cyan/50 hover:shadow-md'
                          }
                        `}
                        data-testid={`feature-card-${feature.id}`}
                        aria-pressed={isSelected}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3">
                            <div className="bg-accent-cyan rounded-full p-1">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="flex items-start gap-3">
                          <Icon className={`h-6 w-6 flex-shrink-0 ${isSelected ? 'text-accent-cyan' : 'text-slate-gray'}`} />
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold mb-1 ${isSelected ? 'text-deep-blue' : 'text-slate-gray'}`}>
                              {feature.title}
                            </h4>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tech Survey Platform Features */}
              <div>
                <h3 className="text-2xl font-bold text-deep-blue mb-6 flex items-center gap-3">
                  <Cloud className="h-7 w-7 text-vibrant-teal" />
                  Tech Survey Platform
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {platformFeatures.map((feature) => {
                    const Icon = feature.icon;
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`
                          relative p-4 rounded-xl border-2 text-left transition-all duration-200
                          ${isSelected 
                            ? 'bg-vibrant-teal/10 border-vibrant-teal shadow-lg scale-[1.02]' 
                            : 'bg-white border-gray-200 hover:border-vibrant-teal/50 hover:shadow-md'
                          }
                        `}
                        data-testid={`feature-card-${feature.id}`}
                        aria-pressed={isSelected}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3">
                            <div className="bg-vibrant-teal rounded-full p-1">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="flex items-start gap-3">
                          <Icon className={`h-6 w-6 flex-shrink-0 ${isSelected ? 'text-vibrant-teal' : 'text-slate-gray'}`} />
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold mb-1 ${isSelected ? 'text-deep-blue' : 'text-slate-gray'}`}>
                              {feature.title}
                            </h4>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sticky Summary Panel */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-deep-blue">Your Selection</h3>
                    <div className="bg-cta-highlight text-white text-sm font-bold px-3 py-1 rounded-full">
                      {selectedCount}
                    </div>
                  </div>
                  
                  {selectedCount === 0 ? (
                    <p className="text-gray-500 text-sm">
                      Select features to build your custom platform
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {selectedFeatures.map(id => {
                        const feature = allFeatures.find(f => f.id === id);
                        if (!feature) return null;
                        return (
                          <div 
                            key={id} 
                            className="flex items-center justify-between gap-2 text-sm bg-gray-50 px-3 py-2 rounded-lg"
                          >
                            <span className="text-slate-gray flex-1">{feature.title}</span>
                            <button
                              onClick={() => toggleFeature(id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              aria-label={`Remove ${feature.title}`}
                              data-testid={`remove-${id}`}
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Button
                  onClick={openForm}
                  disabled={selectedCount === 0}
                  className="w-full bg-cta-highlight hover:bg-cta-highlight/90 text-deep-blue font-bold py-6 text-lg rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  data-testid="button-configure-demo"
                >
                  {selectedCount === 0 ? 'Select features first' : 'Configure My Demo'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-success-green" />
                    <span>Free consultation included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <CheckCircle2 className="h-4 w-4 text-success-green" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-deep-blue">Get your custom demo</DialogTitle>
            <DialogDescription className="text-slate-gray">
              {selectedCount} feature{selectedCount !== 1 ? 's' : ''} selected. Fill in your details below.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-deep-blue">Full name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Sarah Ahmed" 
                        {...field} 
                        className="border-gray-300 focus:border-accent-cyan"
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
                    <FormLabel className="text-deep-blue">Company name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your company" 
                        {...field} 
                        className="border-gray-300 focus:border-accent-cyan"
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
                    <FormLabel className="text-deep-blue">Business email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="you@company.com" 
                        {...field} 
                        className="border-gray-300 focus:border-accent-cyan"
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
                    <FormLabel className="text-deep-blue">Phone number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="+971 50 123 4567" 
                        {...field} 
                        className="border-gray-300 focus:border-accent-cyan"
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
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="checkbox-consent"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-slate-gray cursor-pointer">
                        I agree to receive product updates and marketing communications
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full bg-cta-highlight hover:bg-cta-highlight/90 text-deep-blue font-bold py-6 rounded-xl"
                data-testid="button-submit-form"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get my custom demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center py-6">
            <div className="bg-success-green/10 rounded-full p-4 mb-4">
              <CheckCircle2 className="h-16 w-16 text-success-green" />
            </div>
            <DialogTitle className="text-3xl font-bold text-deep-blue mb-2">
              Thank you!
            </DialogTitle>
            <DialogDescription className="text-lg text-slate-gray mb-6">
              We'll send your custom demo link within 24 hours.
            </DialogDescription>
            
            <div className="w-full space-y-4">
              <Button
                className="w-full bg-accent-cyan hover:bg-vibrant-teal text-white font-semibold py-6 rounded-xl"
                onClick={() => {
                  analytics.trackCTAClick('schedule_discovery_call');
                  window.open('https://calendly.com/forillon-tech', '_blank');
                }}
                data-testid="button-schedule-call"
              >
                Schedule a discovery call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-2 border-gray-300 text-slate-gray font-semibold py-6 rounded-xl"
                onClick={() => setSuccessOpen(false)}
                data-testid="button-close-success"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal (Placeholder) */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-deep-blue">Platform Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Demo video would be embedded here</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-48 h-16 flex items-center justify-center">
              <img src={forillonLogo} alt="Forillon Technologies" className="max-h-12 max-w-full object-contain opacity-70" />
            </div>
            <div className="text-2xl font-light text-white/30">×</div>
            <div className="w-48 h-16 flex items-center justify-center">
              <img src={mindsbourgLogo} alt="Mindsbourg" className="max-h-12 max-w-full object-contain opacity-70" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © 2025 Forillon Technologies × Mindsbourg. All Rights Reserved.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <a href="/privacy-policy" className="text-accent-cyan hover:text-white transition-colors">Privacy Policy</a>
              <a href="/contact" className="text-accent-cyan hover:text-white transition-colors">Contact</a>
              <a href="/terms" className="text-accent-cyan hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
