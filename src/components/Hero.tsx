import { ArrowRight, Award, Users, BookOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import heroImage from '@/assets/hero-academy.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Career Wave Academy Jind - Best Coaching Academy in Jind City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 w-full max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Hero Content */}
          <div className="text-white space-y-6 animate-fadeInUp">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Excellence in Education Since 2009
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Career Wave Academy Jind
              </span>
              <br />
              <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                (CWA Jind) - Best Coaching Academy in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                  Jind City
                </span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg">
              Career Wave Academy Jind - Where dreams meet success. Expert coaching for NEET, IIT-JEE, CBSE & NDA with proven results. Located opposite DRDA, near Jeevan Deep Hospital, Shiv Colony, Jind, Haryana.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-6">
              <div className="text-center animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                <div className="text-2xl sm:text-3xl font-bold font-poppins animate-bounce-gentle">1200+</div>
                <div className="text-white/80 text-xs sm:text-sm">Students Success</div>
              </div>
              <div className="text-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <div className="text-2xl sm:text-3xl font-bold font-poppins animate-bounce-gentle" style={{animationDelay: '0.5s'}}>95%</div>
                <div className="text-white/80 text-xs sm:text-sm">Success Rate</div>
              </div>
              <div className="text-center animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                <div className="text-2xl sm:text-3xl font-bold font-poppins animate-bounce-gentle" style={{animationDelay: '1s'}}>15+</div>
                <div className="text-white/80 text-xs sm:text-sm">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="btn-success text-lg px-8 py-4 group"
                onClick={() => window.location.href = 'tel:+918460597155'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <WhatsAppButton 
                  message="Hi! I'm interested in Career Wave Academy Jind courses. Can you please provide more information about admissions and course details?"
                className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                WhatsApp Us
              </WhatsAppButton>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hidden lg:flex flex-col space-y-6 animate-slideInRight">
            <div className="academy-card p-6 bg-white/10 backdrop-blur-sm border border-white/20 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center animate-pulse-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="font-poppins font-semibold">Expert Faculty</h3>
                  <p className="text-white/80 text-sm">Experienced & Qualified Teachers</p>
                </div>
              </div>
            </div>

            <div className="academy-card p-6 bg-white/10 backdrop-blur-sm border border-white/20 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="font-poppins font-semibold">Smart Classes</h3>
                  <p className="text-white/80 text-sm">AC Rooms with Smart TVs</p>
                </div>
              </div>
            </div>

            <div className="academy-card p-6 bg-white/10 backdrop-blur-sm border border-white/20 animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center animate-pulse-glow" style={{animationDelay: '1s'}}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="font-poppins font-semibold">Proven Results</h3>
                  <p className="text-white/80 text-sm">1200+ Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;