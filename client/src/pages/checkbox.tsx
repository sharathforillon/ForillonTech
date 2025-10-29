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
  Shield,
  Zap,
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
  ChevronRight,
  TrendingUp,
  Lock
} from "lucide-react";
import Navigation from "@/components/navigation";
import { checkboxLeadSchema, type CheckboxLeadForm } from "@shared/schema";
import mindsbourgLogo from "@assets/Mindsbourg-Logo_alt_1761671481551.jpg";
import forillonLogo from "@assets/Logo_1761673001798.png";

const platformFeatures = [
  { id: "cloud-based", title: "Cloud based", icon: Cloud, benefit: "Deploy globally in minutes", category: "tech" },
  { id: "on-premise", title: "On Premise", icon: Server, benefit: "100% data sovereignty guaranteed", category: "tech" },
  { id: "white-labelled", title: "White Labelled", icon: Tag, benefit: "Your brand, your platform", category: "tech" },
  { id: "whatsapp-bot", title: "WhatsApp Bot", icon: MessageSquare, benefit: "Reach 2B users instantly", category: "tech" },
  { id: "survey-gamification", title: "Survey Gamification", icon: Gamepad2, benefit: "3x higher completion rates", category: "tech" },
  { id: "voice-response", title: "Voice response", icon: Mic, benefit: "Accessible to everyone", category: "tech" },
  { id: "ai-sentiment", title: "AI Real-time Sentiment Analysis", icon: Brain, benefit: "40% faster insights", category: "tech" },
  { id: "multilingual", title: "Multilingual", icon: Globe, benefit: "Support 100+ languages", category: "tech" }
];

const researchFeatures = [
  { id: "mr-problem", title: "MR Problem assessment – definition", icon: FileCheck, category: "research" },
  { id: "rfp-prep", title: "RFP Preparation / Review", icon: PenTool, category: "research" },
  { id: "questionnaire", title: "Instrument / Questionnaire Design", icon: FileCheck, category: "research" },
  { id: "data-collection", title: "Data collection", icon: Database, category: "research" },
  { id: "data-analysis", title: "Data Analysis support", icon: BarChart3, category: "research" },
  { id: "data-viz", title: "Data Visualization", icon: TrendingUp, category: "research" },
  { id: "dashboard-creation", title: "Dashboard Creation for Existing Data", icon: BarChart3, category: "research" },
  { id: "integrate-multi-sources", title: "Integrating Data from Multiple Sources", icon: Database, category: "research" },
  { id: "integrate-multi-types", title: "Integrating Multiple Data Types", icon: Database, category: "research" },
  { id: "data-cleaning", title: "Data Cleaning & Data File Preparation", icon: Database, category: "research" },
  { id: "statistical-testing", title: "Statistical testing - Advanced Statistical Modelling", icon: TrendingUp, category: "research" },
  { id: "predictive-analytics", title: "Data Analytics - Predictive Analytics", icon: Brain, category: "research" },
  { id: "report-prep", title: "Report Preparation Support", icon: FileCheck, category: "research" },
  { id: "report-design", title: "Report Design", icon: PenTool, category: "research" },
  { id: "presentation-design", title: "Presentation Design", icon: PenTool, category: "research" },
  { id: "research-workshops", title: "Research Workshops", icon: FileCheck, category: "research" },
  { id: "data-workshops", title: "Data Analysis Workshops", icon: BarChart3, category: "research" },
  { id: "dedicated-analyst", title: "Dedicated Data Analyst", icon: Brain, category: "research" },
  { id: "micro-study", title: "Micro Study (Up to 5 Questions)", icon: FileCheck, category: "research" },
  { id: "mini-study", title: "Mini Study (up to 10 Questions)", icon: FileCheck, category: "research" }
];

export default function EnterpriseSurveyPlatform() {
  const { toast } = useToast();
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'tech' | 'research'>('tech');

  useEffect(() => {
    document.title = "Enterprise Survey Platform — White-Label Solutions | Forillon × Mindsbourg";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Deploy enterprise survey platforms on-premise with 100% data sovereignty. Trusted by UAE enterprises. ISO 27001 | GDPR compliant | UAE-hosted.');
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

  const getSelectedFeatures = () => {
    const allFeatures = [...platformFeatures, ...researchFeatures];
    return selectedFeatureIds
      .map(id => allFeatures.find(f => f.id === id))
      .filter(Boolean)
      .map(f => f!.title);
  };

  // Detect product type based on selected features
  const detectProductType = () => {
    const allFeatures = [...platformFeatures, ...researchFeatures];
    const selectedCategories = selectedFeatureIds
      .map(id => allFeatures.find(f => f.id === id)?.category)
      .filter(Boolean);
    
    const hasTech = selectedCategories.includes('tech');
    const hasResearch = selectedCategories.includes('research');
    
    if (hasTech && hasResearch) return 'combined';
    if (hasTech) return 'tech-platform';
    if (hasResearch) return 'research-helpdesk';
    return '';
  };

  // Sync feature selection with form
  useEffect(() => {
    const selectedFeatureNames = getSelectedFeatures();
    form.setValue('features', selectedFeatureNames, { shouldValidate: true });
  }, [selectedFeatureIds]);

  // Sync product type with form
  useEffect(() => {
    const productType = detectProductType();
    form.setValue('productType', productType, { shouldValidate: true });
  }, [selectedFeatureIds]);

  const submitLead = useMutation({
    mutationFn: async (data: CheckboxLeadForm) => {
      // Form data already has features and productType synced via useEffect
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
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Our team will contact you within 24 hours.",
      });
      form.reset();
      setSelectedFeatureIds([]);
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const formSection = document.querySelector('#inquiry-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatureIds(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  // Count features by category
  const techCount = selectedFeatureIds.filter(id => 
    platformFeatures.find(f => f.id === id)
  ).length;
  const researchCount = selectedFeatureIds.filter(id => 
    researchFeatures.find(f => f.id === id)
  ).length;

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navigation />
      
      {/* Trust Badge Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-violet-900 to-purple-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-xs md:text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="h-4 w-px bg-white/30" />
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>GDPR Compliant</span>
          </div>
          <div className="h-4 w-px bg-white/30" />
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            <span>UAE-Hosted</span>
          </div>
          <div className="h-4 w-px bg-white/30" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Data Sovereignty</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Co-branded Logos - Same Size */}
          <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-indigo-100">
              <img src={forillonLogo} alt="Forillon Technologies" className="h-16 w-auto object-contain" />
            </div>
            <div className="text-4xl font-light text-gray-400">×</div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-indigo-100">
              <img src={mindsbourgLogo} alt="Mindsbourg" className="h-16 w-auto object-contain" />
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Enterprise Survey Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              Control your data. Customize your brand. Deploy securely within UAE.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-12">
              On-premise. White-labeled. Enterprise-ready.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 justify-center mb-12 max-w-4xl mx-auto">
              <div className="group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base font-semibold text-gray-800">100% Data Sovereignty</span>
                </div>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base font-semibold text-gray-800">Rapid Deployment</span>
                </div>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border-2 border-violet-100 hover:border-violet-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base font-semibold text-gray-800">Full Customization</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-2xl"
                onClick={scrollToForm}
                data-testid="button-claim-study"
              >
                Get Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 text-indigo-700 border-2 border-indigo-300 hover:border-indigo-400 font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
                onClick={scrollToForm}
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">UAE Enterprises</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-gray-600 font-medium">Uptime SLA</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Zero
              </div>
              <div className="text-gray-600 font-medium">Data Breaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Selection Section - Tabbed Interface */}
      <section id="feature-selection" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-violet-100 px-5 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">Choose Your Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Select Features You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Choose capabilities from both Tech Platform and Research Services
            </p>
            <p className="text-base text-indigo-600 font-medium">
              Mix and match features from both categories to build your perfect solution
            </p>
          </div>

          {/* Tabbed Feature Selection */}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'tech' | 'research')} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white p-2 rounded-2xl shadow-lg border border-indigo-100 h-auto">
              <TabsTrigger 
                value="tech" 
                className="py-4 px-6 text-base font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
                data-testid="tab-tech-platform"
              >
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  <span>Tech Survey Platform</span>
                  {techCount > 0 && (
                    <span className="ml-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {techCount}
                    </span>
                  )}
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="research" 
                className="py-4 px-6 text-base font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
                data-testid="tab-research-helpdesk"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Research Help Desk</span>
                  {researchCount > 0 && (
                    <span className="ml-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {researchCount}
                    </span>
                  )}
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tech" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {platformFeatures.map((feature) => {
                  const isSelected = selectedFeatureIds.includes(feature.id);
                  const Icon = feature.icon;
                  
                  return (
                    <div
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`group flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg scale-105' 
                          : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md'
                      }`}
                      data-testid={`feature-item-${feature.id}`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {isSelected ? (
                          <CheckCircle2 className="w-6 h-6 text-amber-600" />
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-md" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-1">
                          <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-amber-600' : 'text-gray-400'}`} />
                          <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-500 ml-7">
                          {feature.benefit}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {researchFeatures.map((feature) => {
                  const isSelected = selectedFeatureIds.includes(feature.id);
                  const Icon = feature.icon;
                  
                  return (
                    <div
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`group flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg scale-105' 
                          : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md'
                      }`}
                      data-testid={`feature-item-${feature.id}`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {isSelected ? (
                          <CheckCircle2 className="w-6 h-6 text-amber-600" />
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-md" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-1">
                          <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-amber-600' : 'text-gray-400'}`} />
                          <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          {/* Selected Features Summary */}
          {selectedFeatureIds.length > 0 && (
            <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200 rounded-2xl px-8 py-4 mb-8 shadow-lg">
                <p className="text-gray-800 font-bold text-lg mb-2">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {selectedFeatureIds.length} feature{selectedFeatureIds.length !== 1 ? 's' : ''} selected
                  </span>
                </p>
                {techCount > 0 && researchCount > 0 && (
                  <p className="text-sm text-gray-600">
                    {techCount} Tech Platform • {researchCount} Research Services
                  </p>
                )}
              </div>
              <div>
                <Button 
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl"
                  data-testid="button-proceed-to-form"
                >
                  Continue to Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="inquiry-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-5 py-2 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Almost There</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Request Your Demo
            </h2>
            <p className="text-lg text-gray-600">
              Fill in your details and our team will reach out within 24 hours
            </p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden rounded-3xl">
            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-2">Let's Connect</h3>
                <p className="text-indigo-100 text-center text-sm">
                  {selectedFeatureIds.length > 0 
                    ? `You've selected ${selectedFeatureIds.length} feature${selectedFeatureIds.length !== 1 ? 's' : ''} for your custom demo`
                    : 'Complete the form below to start your journey'}
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
                            placeholder="e.g., Ahmed Al Maktoum"
                            className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300"
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
                            placeholder="e.g., Dubai Health Authority"
                            className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300"
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
                            placeholder="e.g., ahmed@company.ae"
                            className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300"
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
                            placeholder="e.g., +971 50 123 4567"
                            className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300"
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
                      <FormItem className="flex flex-row items-start space-x-4 space-y-0 rounded-2xl border-2 border-indigo-100 p-5 bg-gradient-to-br from-indigo-50/50 to-violet-50/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 border-indigo-300"
                            data-testid="checkbox-consent"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium text-gray-700 cursor-pointer">
                            I agree to be contacted by Forillon Technologies *
                          </FormLabel>
                          <p className="text-xs text-gray-500">
                            We respect your privacy and will only contact you regarding our enterprise solutions.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />

                  {selectedFeatureIds.length > 0 && (
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
                      <p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-amber-600" />
                        Your Selected Features ({selectedFeatureIds.length}):
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {getSelectedFeatures().map((title, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center bg-white border-2 border-amber-300 text-amber-700 text-xs font-medium px-4 py-2 rounded-full shadow-sm"
                          >
                            {title}
                          </span>
                        ))}
                      </div>
                      {techCount > 0 && researchCount > 0 && (
                        <div className="mt-4 pt-4 border-t border-amber-200">
                          <p className="text-xs text-gray-600 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-indigo-600" />
                            <span className="font-semibold">Combined Solution:</span> {techCount} Tech Platform + {researchCount} Research Services
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={submitLead.isPending || selectedFeatureIds.length === 0}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl disabled:opacity-50"
                    data-testid="button-submit"
                  >
                    {submitLead.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {selectedFeatureIds.length === 0 && (
                    <p className="text-center text-sm text-gray-500">
                      Please select at least one feature above to continue
                    </p>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white/90">
            Enterprise Survey Platform
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80">
            Deploy in days. Own your data. Scale without limits.
          </p>

          <div className="flex flex-wrap gap-8 justify-center mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">Used by 50+ UAE enterprises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">99.99% uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">Zero data breaches</div>
            </div>
          </div>

          <Button 
            size="lg"
            onClick={scrollToForm}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 rounded-2xl"
            data-testid="button-deploy"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 font-semibold text-lg mb-4">Trusted by leading UAE organizations</p>
          <div className="flex flex-wrap gap-6 justify-center items-center text-gray-500 font-medium">
            <span>Emirates NBD</span>
            <span>•</span>
            <span>Dubai Health Authority</span>
            <span>•</span>
            <span>Abu Dhabi Government</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <img src={forillonLogo} alt="Forillon Technologies" className="h-14 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain" />
            <div className="text-3xl font-light text-white/40">×</div>
            <img src={mindsbourgLogo} alt="Mindsbourg" className="h-14 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain" />
          </div>
          
          <div className="text-center">
            <p className="text-white/60 mb-6 text-sm">
              © 2025 Forillon Technologies × Mindsbourg — All Rights Reserved.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="/privacy-policy" className="text-indigo-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/contact" className="text-indigo-300 hover:text-white transition-colors">
                Contact
              </a>
              <a href="/terms" className="text-indigo-300 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
