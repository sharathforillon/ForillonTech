import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Solutions from "@/pages/solutions";
import WhyForillon from "@/pages/why-forillon";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import NotFound from "@/pages/not-found";
import AITransformation from "@/pages/solutions/ai-transformation";
import Infrastructure from "@/pages/solutions/infrastructure";
import CloudMigration from "@/pages/solutions/cloud-migration";
import Security from "@/pages/solutions/security";
import Performance from "@/pages/solutions/performance";
import AIConsulting from "@/pages/solutions/ai-consulting";
import DigitalTransformation from "@/pages/solutions/digital-transformation";
import EnterpriseArchitecture from "@/pages/solutions/enterprise-architecture";
import AISecurity from "@/pages/solutions/ai-security";
import IntelligentAutomation from "@/pages/solutions/intelligent-automation";
import CustomAIDevelopment from "@/pages/solutions/custom-ai-development";
import Careers from "@/pages/careers";
import Partner from "@/pages/partner";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CookiePolicy from "@/pages/cookie-policy";
import DatabaseExport from "@/pages/database-export";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/solutions/ai-transformation" component={AITransformation} />
      <Route path="/solutions/infrastructure" component={Infrastructure} />
      <Route path="/solutions/cloud-migration" component={CloudMigration} />
      <Route path="/solutions/security" component={Security} />
      <Route path="/solutions/performance" component={Performance} />
      <Route path="/solutions/ai-consulting" component={AIConsulting} />
      <Route path="/solutions/digital-transformation" component={DigitalTransformation} />
      <Route path="/solutions/enterprise-architecture" component={EnterpriseArchitecture} />
      <Route path="/solutions/ai-security" component={AISecurity} />
      <Route path="/solutions/intelligent-automation" component={IntelligentAutomation} />
      <Route path="/solutions/custom-ai-development" component={CustomAIDevelopment} />
      <Route path="/why-forillon" component={WhyForillon} />
      <Route path="/contact" component={Contact} />
      <Route path="/partner" component={Partner} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/careers" component={Careers} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/database-export" component={DatabaseExport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
