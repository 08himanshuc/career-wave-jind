import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Achievers', href: '#achievers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const courses = [
    'NEET Coaching',
    'IIT-JEE Coaching', 
    'CBSE & HBSE Classes',
    'NDA Preparation',
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins font-bold">
              Career Wave Academy Jind
            </h3>
            <p className="text-white/80 text-sm">
              Best Coaching Academy in Jind City
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering students to achieve their dreams through quality education and expert guidance since 2009. Located opposite DRDA, near Jeevan Deep Hospital in Shiv Colony, Jind, Haryana - we are the premier destination for NEET, IIT-JEE, CBSE, and NDA preparation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.facebook.com/careerwaveacademy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 cursor-pointer transition-all duration-200"
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/career_wave_academy?utm_source=ig_web_button_share_sheet&igsh=MWJzbnJsd2FxN2w4cg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 cursor-pointer transition-all duration-200"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.youtube.com/@cwaeducationjind9912" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 cursor-pointer transition-all duration-200"
                title="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">
              Our Courses
            </h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course} className="text-white/70 text-sm">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-white/70 flex-shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  1st floor, Punjab & Sindh Bank Building, Opposite D.R.D.A, Huda Market, Shiv Colony, Jind, Haryana - 126102
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/70" />
                <a 
                  href="tel:+918460597155"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  +91 84605 97155
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/70" />
                <a 
                  href="mailto:info@cwajind.in"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  info@cwajind.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-white/60 text-sm">
                © 2025 Career Wave Academy Jind. All rights reserved.
              </p>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Link 
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link 
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <p className="text-white/60 text-sm text-center md:text-right">
              Best Coaching Academy in Jind City | NEET | IIT-JEE | CBSE | NDA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;