import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Solutions from "@/components/solutions";
import WhyForillon from "@/components/why-forillon";
import BlogPreview from "@/components/blog-preview";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ice-white">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <WhyForillon />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
}
