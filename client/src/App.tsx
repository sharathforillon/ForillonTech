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
      <Route path="/why-forillon" component={WhyForillon} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
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
