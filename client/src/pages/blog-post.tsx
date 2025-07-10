import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

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
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      // In a real implementation, this would fetch the specific blog post
      const samplePosts: Record<string, BlogPost> = {
        "ai-trends-2024": {
          slug: "ai-trends-2024",
          title: "The Future of Enterprise AI: Trends to Watch in 2024",
          content: `
# The Future of Enterprise AI: Trends to Watch in 2024

Artificial Intelligence is rapidly transforming the enterprise landscape, offering unprecedented opportunities for businesses to optimize operations, enhance customer experiences, and drive innovation. As we move through 2024, several key trends are emerging that will shape the future of enterprise AI.

## 1. Generative AI Integration

Generative AI technologies are moving beyond experimental phases into production environments. Organizations are integrating these tools into their workflows to:

- Automate content creation
- Enhance customer service through intelligent chatbots
- Streamline software development processes
- Generate insights from complex datasets

## 2. AI-Powered Decision Making

Modern enterprises are leveraging AI to make data-driven decisions at unprecedented speed and accuracy. This includes:

- Predictive analytics for market trends
- Risk assessment and management
- Supply chain optimization
- Financial forecasting and planning

## 3. Ethical AI and Governance

As AI systems become more prevalent, organizations are focusing on:

- Implementing AI governance frameworks
- Ensuring transparency and explainability
- Addressing bias and fairness concerns
- Complying with emerging AI regulations

## 4. Edge AI and Real-Time Processing

The shift towards edge computing is enabling real-time AI processing, allowing for:

- Reduced latency in critical applications
- Enhanced privacy and security
- Lower bandwidth requirements
- Improved reliability in remote environments

## Conclusion

The future of enterprise AI is bright, with organizations that embrace these trends positioned to gain significant competitive advantages. At Forillon Technologies, we help businesses navigate this complex landscape and implement AI solutions that drive real value.
          `,
          category: "AI & Machine Learning",
          date: "2024-03-15",
          featured_image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          author: "Forillon Technologies Team"
        },
        "cloud-architectures": {
          slug: "cloud-architectures",
          title: "Building Resilient Cloud Architectures for Scale",
          content: `
# Building Resilient Cloud Architectures for Scale

In today's digital landscape, building resilient cloud architectures is essential for businesses that need to scale efficiently while maintaining high availability and performance. This guide explores the key principles and best practices for designing cloud infrastructure that grows with your business.

## Core Principles of Resilient Architecture

### 1. Redundancy and Failover

Implementing multiple layers of redundancy ensures that your systems can handle failures gracefully:

- Multi-region deployments
- Load balancing across multiple zones
- Database replication and backup strategies
- Automated failover mechanisms

### 2. Microservices Architecture

Breaking down monolithic applications into microservices provides:

- Better fault isolation
- Independent scaling capabilities
- Faster deployment cycles
- Technology diversity

### 3. Infrastructure as Code

Managing infrastructure through code enables:

- Version control for infrastructure changes
- Reproducible deployments
- Automated provisioning and scaling
- Consistent environments across stages

## Best Practices for Implementation

### Monitoring and Observability

Comprehensive monitoring is crucial for maintaining resilient systems:

- Real-time performance metrics
- Application and infrastructure logs
- Distributed tracing
- Alerting and notification systems

### Security by Design

Security should be integrated into every layer:

- Zero-trust network architecture
- Encryption at rest and in transit
- Identity and access management
- Regular security audits and updates

### Cost Optimization

Balancing performance with cost efficiency:

- Right-sizing resources
- Automated scaling policies
- Reserved instance planning
- Regular cost analysis and optimization

## Conclusion

Building resilient cloud architectures requires careful planning, continuous monitoring, and ongoing optimization. By following these principles and best practices, organizations can create robust systems that scale efficiently and maintain high availability.
          `,
          category: "Cloud Infrastructure",
          date: "2024-03-10",
          featured_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          author: "Forillon Technologies Team"
        },
        "digital-transformation-roi": {
          slug: "digital-transformation-roi",
          title: "Digital Transformation ROI: Measuring Success",
          content: `
# Digital Transformation ROI: Measuring Success

Digital transformation initiatives require significant investment, making it crucial for organizations to measure and demonstrate their return on investment (ROI). This article explores key metrics and frameworks for evaluating the success of digital transformation efforts.

## Understanding Digital Transformation ROI

Digital transformation ROI goes beyond traditional financial metrics to include:

- Operational efficiency improvements
- Customer experience enhancements
- Employee productivity gains
- Innovation acceleration
- Risk reduction

## Key Metrics to Track

### Financial Metrics

- Revenue growth from digital channels
- Cost reduction through automation
- Time-to-market improvements
- Customer acquisition cost reduction

### Operational Metrics

- Process efficiency improvements
- Error rate reductions
- System uptime and reliability
- Data accuracy improvements

### Customer Metrics

- Customer satisfaction scores
- Net Promoter Score (NPS)
- Customer lifetime value
- Digital engagement rates

### Employee Metrics

- Employee satisfaction and engagement
- Skills development and training ROI
- Collaboration effectiveness
- Retention rates

## Measurement Frameworks

### Balanced Scorecard Approach

The balanced scorecard provides a comprehensive view across four perspectives:

1. Financial perspective
2. Customer perspective
3. Internal process perspective
4. Learning and growth perspective

### Value Stream Mapping

This lean methodology helps identify:

- Process inefficiencies
- Bottlenecks and waste
- Automation opportunities
- Value-added activities

## Best Practices for ROI Measurement

### Establish Baseline Metrics

Before implementing changes:

- Document current state processes
- Measure existing performance levels
- Identify improvement targets
- Set realistic timelines

### Regular Monitoring and Reporting

Continuous measurement ensures:

- Early identification of issues
- Timely course corrections
- Stakeholder alignment
- Ongoing optimization opportunities

## Conclusion

Measuring digital transformation ROI requires a comprehensive approach that considers both quantitative and qualitative benefits. By establishing clear metrics and measurement frameworks, organizations can demonstrate value and make informed decisions about future investments.
          `,
          category: "Digital Transformation",
          date: "2024-03-05",
          featured_image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          author: "Forillon Technologies Team"
        }
      };

      const foundPost = samplePosts[params.slug];
      setPost(foundPost || null);
      setLoading(false);
    }
  }, [params?.slug]);

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
          <div className="prose prose-lg max-w-none">
            <div className="text-slate-gray leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-forillon-navy mt-8 mb-4">
                      {paragraph.substring(2)}
                    </h1>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-forillon-navy mt-6 mb-3">
                      {paragraph.substring(3)}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-forillon-navy mt-4 mb-2">
                      {paragraph.substring(4)}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-6 mb-1">
                      {paragraph.substring(2)}
                    </li>
                  );
                } else if (paragraph.trim() === '') {
                  return <br key={index} />;
                } else {
                  return (
                    <p key={index} className="mb-4 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
