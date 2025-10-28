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
  Lock,
  Clock
} from "lucide-react";
import Navigation from "@/components/navigation";
import { checkboxLeadSchema, type CheckboxLeadForm } from "@shared/schema";
import mindsbourgLogo from "@assets/Mindsbourg-Logo_alt_1761671481551.jpg";
import forillonLogo from "@assets/logo_nobackground_1761671485550.png";

const platformFeatures = [
  { id: "cloud-based", title: "Cloud based", icon: Cloud, benefit: "Deploy globally in minutes" },
  { id: "on-premise", title: "On Premise", icon: Server, benefit: "100% data sovereignty guaranteed" },
  { id: "white-labelled", title: "White Labelled", icon: Tag, benefit: "Your brand, your platform" },
  { id: "whatsapp-bot", title: "WhatsApp Bot", icon: MessageSquare, benefit: "Reach 2B users instantly" },
  { id: "survey-gamification", title: "Survey Gamification", icon: Gamepad2, benefit: "3x higher completion rates" },
  { id: "voice-response", title: "Voice response", icon: Mic, benefit: "Accessible to everyone" },
  { id: "ai-sentiment", title: "AI Real-time Sentiment Analysis", icon: Brain, benefit: "40% faster insights" },
  { id: "multilingual", title: "Multilingual", icon: Globe, benefit: "Support 100+ languages" }
];

const researchFeatures = [
  { id: "mr-problem", title: "MR Problem assessment – definition", icon: FileCheck },
  { id: "rfp-prep", title: "RFP Preparation / Review", icon: PenTool },
  { id: "questionnaire", title: "Instrument / Questionnaire Design", icon: FileCheck },
  { id: "data-collection", title: "Data collection", icon: Database },
  { id: "data-analysis", title: "Data Analysis support", icon: BarChart3 },
  { id: "data-viz", title: "Data Visualization", icon: TrendingUp },
  { id: "dashboard-creation", title: "Dashboard Creation for Existing Data", icon: BarChart3 },
  { id: "integrate-multi-sources", title: "Integrating Data from Multiple Sources", icon: Database },
  { id: "integrate-multi-types", title: "Integrating Multiple Data Types", icon: Database },
  { id: "data-cleaning", title: "Data Cleaning & Data File Preparation", icon: Database },
  { id: "statistical-testing", title: "Statistical testing - Advanced Statistical Modelling", icon: TrendingUp },
  { id: "predictive-analytics", title: "Data Analytics - Predictive Analytics", icon: Brain },
  { id: "report-prep", title: "Report Preparation Support", icon: FileCheck },
  { id: "report-design", title: "Report Design", icon: PenTool },
  { id: "presentation-design", title: "Presentation Design", icon: PenTool },
  { id: "research-workshops", title: "Research Workshops", icon: FileCheck },
  { id: "data-workshops", title: "Data Analysis Workshops", icon: BarChart3 },
  { id: "dedicated-analyst", title: "Dedicated Data Analyst", icon: Brain },
  { id: "micro-study", title: "Micro Study (Up to 5 Questions)", icon: FileCheck },
  { id: "mini-study", title: "Mini Study (up to 10 Questions)", icon: FileCheck }
];

const allFeatures = [...platformFeatures, ...researchFeatures];

export default function CheckboxLandingPage() {
  const { toast } = useToast();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [formStep, setFormStep] = useState(1);
  const [productType, setProductType] = useState<'tech' | 'research' | null>(null);

  useEffect(() => {
    document.title = "Checkbox Enterprise — White-Label Survey Platform | Forillon × Mindsbourg";
    
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

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => {
      const newFeatures = prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId];
      
      const featureTitles = newFeatures.map(id => {
        const feature = allFeatures.find(f => f.id === id);
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
        title: "Success!",
        description: "Our team will contact you within 24 hours.",
      });
      form.reset();
      setSelectedFeatures([]);
      setFormStep(1);
      setProductType(null);
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

  const nextStep = () => {
    if (formStep === 1) {
      const { name, company, email, phone } = form.getValues();
      if (name && company && email && phone) {
        setFormStep(2);
      } else {
        toast({
          title: "Required Fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    } else if (formStep === 2 && productType) {
      setFormStep(3);
    } else if (formStep === 2) {
      toast({
        title: "Product Selection",
        description: "Please select a product type.",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

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
          {/* Co-branded Logos */}
          <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-indigo-100">
              <img src={forillonLogo} alt="Forillon Technologies" className="h-14 w-auto" />
            </div>
            <div className="text-4xl font-light text-gray-400">×</div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-indigo-100">
              <img src={mindsbourgLogo} alt="Mindsbourg" className="h-14 w-auto" />
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Checkbox
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Enterprise Survey Platform
            </h2>
            
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
                Claim Your Free Micro-Study
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

      {/* Multi-Step Form */}
      <section id="inquiry-form" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md border border-indigo-100 mb-6">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">Start Your Insights Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600">
              Team contacting you in &lt;24h • Your data never leaves UAE servers
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    formStep >= step 
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {formStep > step ? <CheckCircle2 className="w-5 h-5" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`h-1 w-20 md:w-32 transition-all duration-300 ${
                      formStep > step ? 'bg-gradient-to-r from-indigo-600 to-violet-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600 font-medium">
              <span>Your Details</span>
              <span>Product Type</span>
              <span>Features</span>
            </div>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden rounded-3xl">
            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center">
                  {formStep === 1 && "Tell us about yourself"}
                  {formStep === 2 && "Select your product"}
                  {formStep === 3 && "Choose your features"}
                </h3>
              </div>
            </div>

            <CardContent className="p-8 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Basic Info */}
                  {formStep === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
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
                                className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300 focus:scale-[1.02]"
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
                                className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300 focus:scale-[1.02]"
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
                                className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300 focus:scale-[1.02]"
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
                                className="border-2 border-indigo-100 focus:border-indigo-400 rounded-xl py-6 text-base transition-all duration-300 focus:scale-[1.02]"
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl"
                        data-testid="button-next-step-1"
                      >
                        Continue
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Product Selection */}
                  {formStep === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                      <div className="text-center mb-6">
                        <p className="text-gray-600">Select the product that best fits your needs</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div 
                          onClick={() => {
                            setProductType('tech');
                            form.setValue('productType', 'tech-platform', { shouldValidate: true });
                          }}
                          className={`group cursor-pointer p-8 rounded-2xl border-3 transition-all duration-300 hover:scale-105 ${
                            productType === 'tech' 
                              ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-violet-50 shadow-xl' 
                              : 'border-gray-200 bg-white hover:border-indigo-300 shadow-md hover:shadow-lg'
                          }`}
                          data-testid="product-tech-platform"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <Database className={`w-12 h-12 ${productType === 'tech' ? 'text-indigo-600' : 'text-gray-400'}`} />
                            {productType === 'tech' && <CheckCircle2 className="w-8 h-8 text-indigo-600" />}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Tech Survey Platform</h3>
                          <p className="text-gray-600 text-sm">Cloud-based and on-premise survey solutions with advanced features</p>
                        </div>

                        <div 
                          onClick={() => {
                            setProductType('research');
                            form.setValue('productType', 'research-helpdesk', { shouldValidate: true });
                          }}
                          className={`group cursor-pointer p-8 rounded-2xl border-3 transition-all duration-300 hover:scale-105 ${
                            productType === 'research' 
                              ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl' 
                              : 'border-gray-200 bg-white hover:border-amber-300 shadow-md hover:shadow-lg'
                          }`}
                          data-testid="product-research-helpdesk"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <Brain className={`w-12 h-12 ${productType === 'research' ? 'text-amber-600' : 'text-gray-400'}`} />
                            {productType === 'research' && <CheckCircle2 className="w-8 h-8 text-amber-600" />}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Research Help Desk</h3>
                          <p className="text-gray-600 text-sm">Comprehensive research support and data analysis services</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-6 rounded-2xl"
                          data-testid="button-prev-step-2"
                        >
                          Back
                        </Button>
                        <Button 
                          type="button"
                          onClick={nextStep}
                          disabled={!productType}
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                          data-testid="button-next-step-2"
                        >
                          Continue
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Feature Selection */}
                  {formStep === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                      <div className="text-center mb-6">
                        <p className="text-gray-600">Select up to 6 features for your custom demo</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 max-h-96 overflow-y-auto p-2">
                        {(productType === 'tech' ? platformFeatures : researchFeatures).map((feature) => {
                          const isSelected = selectedFeatures.includes(feature.id);
                          const Icon = feature.icon;
                          
                          return (
                            <div
                              key={feature.id}
                              className={`group flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                isSelected 
                                  ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg scale-105' 
                                  : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md'
                              } ${selectedFeatures.length >= 6 && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
                              onClick={() => {
                                if (selectedFeatures.length < 6 || isSelected) {
                                  toggleFeature(feature.id);
                                }
                              }}
                              data-testid={`feature-item-${feature.id}`}
                            >
                              <Checkbox
                                checked={isSelected}
                                onCheckedChange={() => {
                                  if (selectedFeatures.length < 6 || isSelected) {
                                    toggleFeature(feature.id);
                                  }
                                }}
                                disabled={selectedFeatures.length >= 6 && !isSelected}
                                className={`${isSelected ? "border-amber-500 bg-amber-500" : ""} flex-shrink-0 mt-1`}
                                data-testid={`checkbox-${feature.id}`}
                              />
                              <div className="flex-1">
                                <div className="flex items-start gap-2 mb-1">
                                  <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-amber-600' : 'text-gray-400'}`} />
                                  <label className="text-sm font-semibold text-gray-800 cursor-pointer leading-tight">
                                    {feature.title}
                                  </label>
                                </div>
                                {(feature as typeof platformFeatures[0]).benefit && (
                                  <p className="text-xs text-gray-500 ml-7">
                                    {(feature as typeof platformFeatures[0]).benefit}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {selectedFeatures.length >= 6 && (
                        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-center">
                          <p className="text-sm font-medium text-amber-800">
                            Maximum 6 features selected. Deselect to choose different features.
                          </p>
                        </div>
                      )}

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
                                We respect your privacy and will only contact you regarding Checkbox.
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button 
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-6 rounded-2xl"
                          data-testid="button-prev-step-3"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={submitLead.isPending || selectedFeatures.length === 0}
                          className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl disabled:opacity-50"
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
                      </div>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Showcase - Tabbed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-violet-100 px-5 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">Powerful Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of features to build your perfect solution
            </p>
          </div>

          <Tabs defaultValue="platform" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 bg-slate-100 h-auto p-2 rounded-2xl shadow-md">
              <TabsTrigger 
                value="platform" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white font-bold py-4 text-base rounded-xl transition-all duration-300"
              >
                Tech Survey Platform
              </TabsTrigger>
              <TabsTrigger 
                value="research" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white font-bold py-4 text-base rounded-xl transition-all duration-300"
              >
                Research Help Desk
              </TabsTrigger>
            </TabsList>

            <TabsContent value="platform" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platformFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.id} className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{feature.benefit}</p>
                      <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Learn more <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {researchFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.id} className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <button className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Learn more <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Checkbox
          </h1>
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
            data-testid="button-deploy-checkbox"
          >
            Deploy Checkbox Today
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
            <img src={forillonLogo} alt="Forillon Technologies" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <div className="text-3xl font-light text-white/40">×</div>
            <img src={mindsbourgLogo} alt="Mindsbourg" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
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
