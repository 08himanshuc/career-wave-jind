import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp, GraduationCap, Stethoscope, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FloatingActionButton from '@/components/FloatingActionButton';
import MobileCTABar from '@/components/MobileCTABar';
import BackToTop from '@/components/BackToTop';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Prepare for NEET 2025: Complete Study Guide",
      excerpt: "Everything you need to know about NEET preparation, study strategies, and tips from our expert faculty.",
      category: "NEET Preparation",
      author: "Dr. Rajesh Kumar",
      date: "Coming Soon",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      icon: Stethoscope,
      color: "bg-green-500",
      comingSoon: true
    },
    {
      id: 2,
      title: "IIT-JEE Success Stories: From Dream to Reality",
      excerpt: "Inspiring stories of our students who cracked IIT-JEE and achieved their engineering dreams.",
      category: "Success Stories",
      author: "Prof. Anjali Sharma",
      date: "Coming Soon",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      icon: TrendingUp,
      color: "bg-blue-500",
      comingSoon: true
    },
    {
      id: 3,
      title: "CBSE Board Exam Tips: Score 95%+ in Class 12",
      excerpt: "Proven strategies and techniques to excel in CBSE board exams and secure top grades.",
      category: "Board Exams",
      author: "Ms. Priya Singh",
      date: "Coming Soon",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      icon: GraduationCap,
      color: "bg-purple-500",
      comingSoon: true
    }
  ];

  const categories = ["All", "NEET Preparation", "Success Stories", "Board Exams", "Study Tips", "Career Guidance"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-20 md:pb-0">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Blog' }]} />
        </div>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Educational Blog
              </div>
              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6">
                Learn, Grow & <span className="text-primary">Succeed</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Expert insights, study tips, and success stories to help you achieve your academic goals.
              </p>
              <Link to="/">
                <Button variant="outline" className="inline-flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    index === 0 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const IconComponent = post.icon;
                return (
                  <Card 
                    key={post.id}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Blog Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Coming Soon Badge */}
                      {post.comingSoon && (
                        <div className="absolute top-4 left-4 bg-yellow-300 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                          Coming Soon
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`${post.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                          <IconComponent className="w-3 h-3" />
                          {post.category}
                        </div>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-poppins font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="w-full group/btn"
                        disabled={post.comingSoon}
                      >
                        {post.comingSoon ? (
                          "Coming Soon"
                        ) : (
                          <>
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-20">
              <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  More Articles Coming Soon!
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're working on bringing you valuable content about exam preparation, study tips, and success strategies. Stay tuned!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/#contact">
                    <Button className="btn-primary">
                      Contact Us for Inquiries
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButton />
      <MobileCTABar />
      <BackToTop />
    </div>
  );
};

export default Blog;
