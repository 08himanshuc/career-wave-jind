import { Target, Eye, Heart } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide quality education and guidance that empowers students to achieve their academic goals and career aspirations.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted and preferred coaching academy in Jind, known for academic excellence and student success.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Dedication, Excellence, Integrity, and Care for every student who walks through our doors.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 px-4 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            About <span className="text-primary">Career Wave Academy Jind</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Established as the leading coaching institute in Jind, Haryana, Career Wave Academy Jind is committed to providing exceptional education and nurturing future leaders. Located opposite DRDA, near Jeevan Deep Hospital in Shiv Colony, we serve students from across Jind and surrounding areas.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div 
          ref={valuesRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.title}
                className="academy-card p-8 text-center hover-lift mobile-optimized"
                style={{
                  transitionDelay: `${index * 150}ms`,
                  opacity: valuesVisible ? 1 : 0,
                  transform: valuesVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;