import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a 
              href="tel:+918460597155" 
              className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>+91 84605 97155</span>
            </a>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Jind, Haryana</span>
            </div>
          </div>
          <div className="text-xs">
            Best Coaching Academy in Jind City
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-poppins font-bold text-primary">
                Career Wave Academy Jind
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Best Coaching in Jind</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                className="btn-primary hidden sm:flex items-center gap-2"
                onClick={() => window.location.href = 'tel:+918460597155'}
              >
                <Phone className="w-4 h-4" />
                Call Us
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <Button 
                  className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
                  onClick={() => window.location.href = 'tel:+918460597155'}
                >
                  <Phone className="w-4 h-4" />
                  Call +91 84605 97155
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;