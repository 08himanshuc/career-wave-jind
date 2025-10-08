import { GraduationCap, Medal, Star, Trophy } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import Autoplay from 'embla-carousel-autoplay';

const AchieversSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();

  // Student achievers data - replace with actual student data
  const achievers = [
    {
      id: 1,
      name: 'Riya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      exam: 'NEET 2024',
      score: '680/720',
      rank: 'AIR 245',
      college: 'AIIMS Delhi',
      category: 'NEET',
      color: 'bg-green-500',
    },
    {
      id: 2,
      name: 'Arjun Verma',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      exam: 'IIT-JEE 2024',
      score: '298/360',
      rank: 'AIR 512',
      college: 'IIT Delhi',
      category: 'JEE',
      color: 'bg-blue-500',
    },
    {
      id: 3,
      name: 'Priya Singh',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      exam: 'NEET 2024',
      score: '665/720',
      rank: 'AIR 478',
      college: 'MAMC Delhi',
      category: 'NEET',
      color: 'bg-green-500',
    },
    {
      id: 4,
      name: 'Karan Malhotra',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      exam: 'NDA 2024',
      score: '385/900',
      rank: 'Roll No. 1234',
      college: 'NDA Khadakwasla',
      category: 'NDA',
      color: 'bg-orange-500',
    },
    {
      id: 5,
      name: 'Anjali Yadav',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      exam: 'CBSE 12th 2024',
      score: '96.8%',
      rank: 'School Topper',
      college: 'Delhi University',
      category: 'CBSE',
      color: 'bg-purple-500',
    },
    {
      id: 6,
      name: 'Rohit Kumar',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      exam: 'IIT-JEE 2024',
      score: '285/360',
      rank: 'AIR 892',
      college: 'IIT Bombay',
      category: 'JEE',
      color: 'bg-blue-500',
    },
  ];

  return (
    <section id="achievers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 px-4 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
            <Trophy className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Our <span className="text-primary">Achievers</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the brilliant minds who made us proud! Their success is our greatest achievement at Career Wave Academy Jind
          </p>
        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className={`transition-all duration-700 ease-out ${
            carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievers.map((student, index) => (
                <CarouselItem key={student.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card 
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 mobile-optimized"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      opacity: carouselVisible ? 1 : 0,
                      transform: carouselVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                    }}
                  >
                    {/* Student Photo */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 right-3">
                        <div className={`${student.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                          <Star className="w-3 h-3" />
                          {student.category}
                        </div>
                      </div>

                      {/* Rank Badge */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {student.rank}
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="p-6 space-y-3">
                      {/* Name */}
                      <div className="text-center">
                        <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                          {student.name}
                        </h3>
                      </div>

                      {/* Exam Details */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground font-medium">Exam:</span>
                          <span className="text-sm font-semibold text-foreground">{student.exam}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground font-medium">Score:</span>
                          <span className="text-sm font-bold text-primary">{student.score}</span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-xs">College:</span>
                          </div>
                          <span className="text-xs font-semibold text-foreground">{student.college}</span>
                        </div>
                      </div>

                      {/* Achievement Icon */}
                      <div className="flex justify-center pt-2">
                        <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center group-hover:bg-success group-hover:scale-110 transition-all duration-300">
                          <Medal className="w-5 h-5 text-success group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 mobile-optimized" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 mobile-optimized" />
          </Carousel>

          {/* Mobile Swipe Hint */}
          <p className="text-center text-muted-foreground text-sm mt-8 md:hidden animate-pulse-soft">
            ← Swipe to see more achievers →
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-success/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary">1200+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">NEET Qualifiers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">IIT-JEE Selections</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchieversSection;

