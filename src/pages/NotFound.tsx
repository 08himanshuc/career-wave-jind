import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-poppins font-bold text-primary/20">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-muted-foreground">
              Attempted path: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button className="btn-primary flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              You might be interested in:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/#courses" className="text-primary hover:underline text-sm">
                View Courses
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/#about" className="text-primary hover:underline text-sm">
                About Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/#contact" className="text-primary hover:underline text-sm">
                Contact Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/blog" className="text-primary hover:underline text-sm">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
