import { GraduationCap, Stethoscope, Calculator, Shield, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import neetImage from '@/assets/neet-course.jpg';
import iitJeeImage from '@/assets/iit-jee-course.jpg';
import cbseImage from '@/assets/cbse-course.jpg';
import ndaImage from '@/assets/nda-course.jpg';

const Courses = () => {
  const courses = [
    {
      icon: Stethoscope,
      title: 'NEET Coaching',
      description: 'Complete preparation for medical entrance with expert biology, chemistry & physics coaching.',
      features: ['Expert Faculty', 'Mock Tests', 'Study Material', '1-on-1 Doubt Sessions'],
      image: neetImage,
      popular: true,
    },
    {
      icon: Calculator,
      title: 'IIT-JEE Coaching',
      description: 'Comprehensive JEE Main & Advanced preparation with advanced problem-solving techniques.',
      features: ['Advanced Math', 'Physics Labs', 'Chemistry Practicals', 'Previous Year Papers'],
      image: iitJeeImage,
      popular: false,
    },
    {
      icon: GraduationCap,
      title: 'CBSE & HBSE Classes',
      description: 'Board exam preparation for Class 11th & 12th with conceptual clarity and exam strategy.',
      features: ['Board Pattern', 'Sample Papers', 'Regular Tests', 'Progress Tracking'],
      image: cbseImage,
      popular: false,
    },
    {
      icon: Shield,
      title: 'NDA Preparation',
      description: 'National Defence Academy coaching with comprehensive math, GAT & SSB interview prep.',
      features: ['Mathematics', 'General Ability', 'SSB Interview', 'Physical Training'],
      image: ndaImage,
      popular: false,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coaching programs designed to help students excel in competitive exams and board studies
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div 
                key={course.title}
                className="course-card relative animate-fadeInUp group"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-6 bg-success text-success-foreground px-4 py-1 rounded-full text-sm font-medium z-10 animate-bounce-gentle">
                    Most Popular
                  </div>
                )}
                
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={course.image} 
                    alt={`${course.title} - Career Wave Academy Jind`}
                    className="course-image w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="image-overlay"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  {/* Shimmer effect on hover */}
                  <div className="shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-poppins font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div 
                        key={feature} 
                        className="flex items-center gap-2 text-sm animate-fadeInLeft"
                        style={{animationDelay: `${(index * 0.15) + (featureIndex * 0.1)}s`}}
                      >
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      className="btn-primary flex-1 group/btn"
                      onClick={() => window.location.href = 'tel:+918460597155'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <WhatsAppButton 
                      message={`Hi! I'm interested in ${course.title} course. Can you please provide more information about fees, duration, and admission process?`}
                      className="btn-success flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="academy-card p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-success/5 animate-pulse-glow"></div>
            <div className="relative">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of successful students who achieved their dreams with Career Wave Academy Jind
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-primary text-lg px-8 py-4 animate-bounce-gentle"
                  onClick={() => window.location.href = 'tel:+918460597155'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Free Counseling
                </Button>
                <WhatsAppButton 
                  message="Hi! I would like to get free counseling for Career Wave Academy Jind courses. Can you please help me choose the right course for my career goals?"
                  className="btn-success text-lg px-8 py-4 animate-bounce-gentle"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Counseling
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;