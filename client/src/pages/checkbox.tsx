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
  X,
  Check
} from "lucide-react";
import { checkboxLeadSchema, type CheckboxLeadForm } from "@shared/schema";
import mindsbourgLogo from "@assets/Mindsbourg-Logo_alt_1761671481551.jpg";
import forillonLogo from "@assets/image_1762228948953.png";
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
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    document.title = "Build Your Custom Research Platform | Martech by Forillon";
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
      demoConsent: false,
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
      {/* Hero Section - Full Screen Landing */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B3C5D] via-[#005A7F] to-[#007C91]">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          {/* Co-branded Logos */}
          <div className="flex items-center justify-center gap-8 mb-12 animate-fade-in">
            <div className="w-56 h-24 flex items-center justify-center bg-white rounded-lg shadow-2xl px-6 py-4">
              <img src={forillonLogo} alt="Forillon Technologies" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="text-3xl font-light text-white/60">×</div>
            <div className="w-56 h-24 flex items-center justify-center bg-white rounded-lg shadow-2xl px-6 py-4">
              <img src={mindsbourgLogo} alt="Mindsbourg" className="max-h-16 max-w-full object-contain" />
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
            <div className="mb-8 inline-block">
              <span className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-base font-bold border-2 border-white/30 shadow-2xl">
                🚀 Enterprise Survey Platform • Made in UAE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 60px rgba(0,164,204,0.3)'}}>
              Build your custom research platform in{" "}
              <span className="inline-block text-[#FFD700] animate-pulse" style={{textShadow: '0 0 30px rgba(255,215,0,0.6), 0 4px 20px rgba(0,0,0,0.5)'}}>
                days, not months
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed font-medium" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
              White-label survey & research platform. UAE data sovereignty. Zero-code builder. Bank-grade security.
            </p>
            
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto font-light" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>
              Pick exactly what you need. From basic surveys to AI-powered sentiment analysis. Deploy on-premise or cloud. Your brand, your rules.
            </p>
            <div className="flex justify-center mt-12">
              <Button 
                size="lg" 
                className="bg-cta-highlight hover:bg-yellow-500 text-deep-blue px-10 py-7 text-xl font-bold rounded-xl shadow-2xl hover:shadow-cta-highlight/50 hover:scale-105 transition-all duration-300 group"
                onClick={() => {
                  analytics.trackCTAClick('hero_choose_features');
                  document.getElementById('feature-explorer')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-choose-features"
              >
                Choose Your Features
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Value Props */}
            <div className="flex flex-wrap gap-6 justify-center mt-14 text-white">
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl border border-white/30">
                <div className="bg-emerald-500 p-2 rounded-full shadow-lg">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl border border-white/30">
                <div className="bg-emerald-500 p-2 rounded-full shadow-lg">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>100% data sovereignty</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl border border-white/30">
                <div className="bg-emerald-500 p-2 rounded-full shadow-lg">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>No technical skills needed</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 flex flex-wrap gap-6 justify-center items-center animate-fade-in-up delay-200">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-7 py-4 rounded-full shadow-2xl border-2 border-white/40">
              <Shield className="h-7 w-7 text-emerald-400" />
              <span className="text-base font-bold text-white" style={{textShadow: '0 2px 6px rgba(0,0,0,0.3)'}}>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-7 py-4 rounded-full shadow-2xl border-2 border-white/40">
              <Shield className="h-7 w-7 text-emerald-400" />
              <span className="text-base font-bold text-white" style={{textShadow: '0 2px 6px rgba(0,0,0,0.3)'}}>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-7 py-4 rounded-full shadow-2xl border-2 border-white/40">
              <Server className="h-7 w-7 text-yellow-400" />
              <span className="text-base font-bold text-white" style={{textShadow: '0 2px 6px rgba(0,0,0,0.3)'}}>UAE Data Centers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Explorer Section */}
      <section id="feature-explorer" className="py-16 bg-gradient-to-br from-soft-neutral via-white to-soft-neutral min-h-screen pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4 bg-gradient-to-r from-deep-blue via-accent-cyan to-vibrant-teal bg-clip-text text-transparent">
              Pick the capabilities you want
            </h2>
            <p className="text-xl text-slate-gray">
              We'll tailor a demo and proposal just for you.
            </p>
          </div>

          {/* Two-Column Feature Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Research Help Desk Features - Left Column */}
            <div className="bg-white rounded-2xl shadow-xl border border-accent-cyan/20 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-accent-cyan/30">
                <div className="bg-gradient-to-br from-accent-cyan to-vibrant-teal p-3 rounded-xl shadow-lg">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-blue">Research Help Desk</h3>
              </div>
              <div className="grid gap-3 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-accent-cyan/30 scrollbar-track-gray-100">
                {researchFeatures.map((feature) => {
                  const Icon = feature.icon;
                  const isSelected = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`
                        relative p-3 rounded-lg border-2 text-left transition-all duration-200 hover:scale-[1.01]
                        ${isSelected 
                          ? 'bg-gradient-to-br from-accent-cyan/10 to-vibrant-teal/10 border-accent-cyan shadow-md' 
                          : 'bg-gray-50 border-gray-200 hover:border-accent-cyan/50 hover:shadow-sm'
                        }
                      `}
                      data-testid={`feature-card-${feature.id}`}
                      aria-pressed={isSelected}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2">
                          <div className="bg-accent-cyan rounded-full p-0.5 shadow-lg">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 flex-shrink-0 ${isSelected ? 'text-accent-cyan' : 'text-slate-gray'}`} />
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold text-sm ${isSelected ? 'text-deep-blue' : 'text-slate-gray'}`}>
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tech Survey Platform Features - Right Column */}
            <div className="bg-white rounded-2xl shadow-xl border border-vibrant-teal/20 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-vibrant-teal/30">
                <div className="bg-gradient-to-br from-vibrant-teal to-accent-cyan p-3 rounded-xl shadow-lg">
                  <Cloud className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-blue">Tech Survey Platform</h3>
              </div>
              <div className="grid gap-3 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-vibrant-teal/30 scrollbar-track-gray-100">
                {platformFeatures.map((feature) => {
                  const Icon = feature.icon;
                  const isSelected = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`
                        relative p-3 rounded-lg border-2 text-left transition-all duration-200 hover:scale-[1.01]
                        ${isSelected 
                          ? 'bg-gradient-to-br from-vibrant-teal/10 to-accent-cyan/10 border-vibrant-teal shadow-md' 
                          : 'bg-gray-50 border-gray-200 hover:border-vibrant-teal/50 hover:shadow-sm'
                        }
                      `}
                      data-testid={`feature-card-${feature.id}`}
                      aria-pressed={isSelected}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2">
                          <div className="bg-vibrant-teal rounded-full p-0.5 shadow-lg">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 flex-shrink-0 ${isSelected ? 'text-vibrant-teal' : 'text-slate-gray'}`} />
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold text-sm ${isSelected ? 'text-deep-blue' : 'text-slate-gray'}`}>
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Floating Selection Panel - Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-300" style={{
        opacity: selectedCount > 0 ? 1 : 0,
        pointerEvents: selectedCount > 0 ? 'auto' : 'none',
        transform: selectedCount > 0 ? 'translateY(0)' : 'translateY(100%)'
      }}>
        <div className="bg-gradient-to-r from-deep-blue via-accent-cyan to-vibrant-teal backdrop-blur-xl bg-opacity-95 shadow-2xl border-t-4 border-cta-highlight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left: Selection Count & Preview */}
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-cta-highlight text-deep-blue font-black text-2xl px-4 py-2 rounded-full shadow-lg animate-pulse">
                    {selectedCount}
                  </div>
                  <div>
                    <p className="font-bold text-lg">Feature{selectedCount !== 1 ? 's' : ''} Selected</p>
                    <p className="text-sm text-white/80">Build your custom platform</p>
                  </div>
                </div>
                {/* Selected feature pills */}
                <div className="hidden lg:flex items-center gap-2 max-w-md overflow-x-auto">
                  {selectedFeatures.slice(0, 3).map(id => {
                    const feature = allFeatures.find(f => f.id === id);
                    if (!feature) return null;
                    return (
                      <div 
                        key={id} 
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1"
                      >
                        {feature.title}
                        <button
                          onClick={() => toggleFeature(id)}
                          className="hover:bg-white/30 rounded-full p-0.5 transition-colors"
                          aria-label={`Remove ${feature.title}`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    );
                  })}
                  {selectedCount > 3 && (
                    <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                      +{selectedCount - 3} more
                    </div>
                  )}
                </div>
              </div>

              {/* Right: CTA Button */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={openForm}
                  size="lg"
                  className="bg-cta-highlight hover:bg-yellow-500 text-deep-blue font-black px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-cta-highlight/50 hover:scale-105 transition-all duration-300 group"
                  data-testid="button-request-demo"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <button
                  onClick={() => setSelectedFeatures([])}
                  className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
                  aria-label="Clear all selections"
                  data-testid="button-clear-all"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                name="demoConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="checkbox-demo-consent"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-deep-blue cursor-pointer font-medium">
                        I agree to be contacted regarding the product demo request *
                      </FormLabel>
                      <FormMessage />
                    </div>
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
              One of our team members will reach out to you within 24 hours.
            </DialogDescription>
            
            <div className="w-full">
              <Button
                className="w-full bg-accent-cyan hover:bg-vibrant-teal text-white font-semibold py-6 rounded-xl"
                onClick={() => setSuccessOpen(false)}
                data-testid="button-close-success"
              >
                Close
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-48 h-16 flex items-center justify-center bg-white rounded-lg shadow-xl px-4 py-3">
              <img src={forillonLogo} alt="Forillon Technologies" className="max-h-12 max-w-full object-contain" />
            </div>
            <div className="text-2xl font-light text-white/30">×</div>
            <div className="w-48 h-16 flex items-center justify-center bg-white rounded-lg shadow-xl px-4 py-3">
              <img src={mindsbourgLogo} alt="Mindsbourg" className="max-h-12 max-w-full object-contain" />
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
