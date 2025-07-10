import { useRoute } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  category: string;
  date: string;
  featured_image?: string;
  author?: string;
}

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  const { data: post, isLoading: loading } = useQuery({
    queryKey: ['/api/blog', params?.slug],
    queryFn: () => fetch(`/api/blog/${params?.slug}`).then(res => res.json()),
    enabled: !!params?.slug
  });

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

  if (!post) {
    return (
      <div className="min-h-screen bg-ice-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-forillon-navy mb-4">Post Not Found</h1>
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ice-white">
      <Navigation />
      
      {/* Blog Post Header */}
      <section className="bg-gradient-to-br from-forillon-navy to-slate-gray text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:text-electric-teal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center text-sm text-gray-200 mb-4">
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span className="mx-2">•</span>
            <Badge variant="secondary" className="text-electric-teal bg-electric-teal/20">
              {post.category}
            </Badge>
            {post.author && (
              <>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image && (
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={post.featured_image} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg -mt-10 relative z-10"
            />
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-forillon-navy prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-gray prose-p:leading-relaxed prose-li:text-slate-gray prose-strong:text-forillon-navy">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
