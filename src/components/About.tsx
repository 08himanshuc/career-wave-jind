import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Experienced teachers with proven track records in competitive exam coaching.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Study Material',
      description: 'Updated syllabus-based content with practice papers and mock tests.',
    },
    {
      icon: Award,
      title: 'Proven Success Rate',
      description: '95% success rate with 1200+ students achieving their target scores.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            About <span className="text-primary">Career Wave Academy Jind</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established as the leading coaching institute in Jind, Haryana, Career Wave Academy Jind is committed to providing exceptional education and nurturing future leaders. Located opposite DRDA, near Jeevan Deep Hospital in Shiv Colony, we serve students from across Jind and surrounding areas.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6 animate-fadeInUp">
            <h3 className="text-3xl font-poppins font-semibold text-foreground">
              Why Choose Career Wave Academy Jind?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located in the heart of Jind City, opposite DRDA and near Jeevan Deep Hospital in Shiv Colony, Career Wave Academy Jind has been the cornerstone of academic excellence since 2009. We believe that every student has the potential to achieve greatness with the right guidance and support. Our strategic location makes us easily accessible to students from all parts of Jind, Haryana.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our state-of-the-art facilities include air-conditioned classrooms equipped with smart TVs, ensuring students learn in a comfortable environment that promotes focus and engagement. We specialize in NEET, IIT-JEE, CBSE, HBSE, and NDA preparation with a proven track record of success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Career Wave Academy Jind, we understand the unique challenges faced by students preparing for competitive exams. Our expert faculty, comprehensive study materials, and personalized attention ensure that every student receives the support they need to excel in their chosen field.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center animate-scaleIn" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold font-poppins text-primary animate-bounce-gentle">15+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="text-center animate-scaleIn" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl font-bold font-poppins text-primary animate-bounce-gentle" style={{animationDelay: '0.5s'}}>1200+</div>
                <div className="text-muted-foreground text-sm">Success Stories</div>
              </div>
              <div className="text-center animate-scaleIn" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-bold font-poppins text-primary animate-bounce-gentle" style={{animationDelay: '1s'}}>95%</div>
                <div className="text-muted-foreground text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="academy-card p-6 animate-fadeInRight group hover:bg-primary/5"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 animate-pulse-glow">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-poppins font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.title}
                className="academy-card p-8 text-center animate-scaleIn"
                style={{animationDelay: `${index * 0.2}s`}}
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