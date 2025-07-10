import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const blogPosts = [
  {
    slug: "ai-trends-2024",
    title: "The Future of Enterprise AI: Trends to Watch in 2024",
    excerpt: "Explore the latest developments in enterprise AI and how they're reshaping business operations across industries.",
    category: "AI & Machine Learning",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    slug: "cloud-architectures",
    title: "Building Resilient Cloud Architectures for Scale",
    excerpt: "Learn the essential principles and best practices for designing cloud infrastructure that grows with your business.",
    category: "Cloud Infrastructure",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    slug: "digital-transformation-roi",
    title: "Digital Transformation ROI: Measuring Success",
    excerpt: "Discover key metrics and frameworks for evaluating the return on investment of your digital transformation initiatives.",
    category: "Digital Transformation",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 bg-silver-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forillon-navy mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and best practices in enterprise technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-slate-gray mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Badge variant="secondary" className="text-electric-teal bg-electric-teal/10">
                    {post.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-forillon-navy mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-gray mb-4">
                  {post.excerpt}
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
        
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-electric-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors shadow-lg">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
