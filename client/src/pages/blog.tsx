import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  featured_image?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch from your CMS or markdown files
    const samplePosts: BlogPost[] = [
      {
        slug: "ai-trends-2024",
        title: "The Future of Enterprise AI: Trends to Watch in 2024",
        description: "Explore the latest developments in enterprise AI and how they're reshaping business operations across industries.",
        category: "AI & Machine Learning",
        date: "2024-03-15",
        featured_image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      {
        slug: "cloud-architectures",
        title: "Building Resilient Cloud Architectures for Scale",
        description: "Learn the essential principles and best practices for designing cloud infrastructure that grows with your business.",
        category: "Cloud Infrastructure",
        date: "2024-03-10",
        featured_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      },
      {
        slug: "digital-transformation-roi",
        title: "Digital Transformation ROI: Measuring Success",
        description: "Discover key metrics and frameworks for evaluating the return on investment of your digital transformation initiatives.",
        category: "Digital Transformation",
        date: "2024-03-05",
        featured_image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      }
    ];
    
    setPosts(samplePosts);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-ice-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ice-white">
      <Navigation />
      
      {/* Blog Header */}
      <section className="bg-gradient-to-br from-forillon-navy to-slate-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Latest <span className="text-electric-teal">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest trends, insights, and best practices in enterprise technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                {post.featured_image && (
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-slate-gray mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="mx-2">•</span>
                    <Badge variant="secondary" className="text-electric-teal bg-electric-teal/10">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-forillon-navy mb-3">
                    {post.title}
                  </h3>
                  <p className="text-slate-gray mb-4">
                    {post.description}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-electric-teal font-semibold hover:text-teal-600 transition-colors">
                      Read More →
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
