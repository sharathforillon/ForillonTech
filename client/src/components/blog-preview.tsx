import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  featured_image?: string;
}

export default function BlogPreview() {
  const { data: blogPosts = [] } = useQuery({
    queryKey: ['/api/blog'],
    queryFn: () => fetch('/api/blog').then(res => res.json())
  });

  // Show only the latest 3 posts
  const latestPosts = blogPosts.slice(0, 3);

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
          {latestPosts.map((post: BlogPost) => (
            <Card key={post.slug} className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
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
