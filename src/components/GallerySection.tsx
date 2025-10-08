import { Award, Trophy, Calendar } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import Autoplay from 'embla-carousel-autoplay';

const GallerySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();

  // Gallery images data - replace with actual achievement photos
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=675&fit=crop',
      title: 'Annual Function 2024',
      description: 'Celebrating excellence with our students and parents',
      category: 'Event',
      icon: Calendar,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=675&fit=crop',
      title: 'Topper Award Ceremony',
      description: 'Honoring our NEET & IIT-JEE toppers',
      category: 'Achievement',
      icon: Trophy,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&h=675&fit=crop',
      title: 'Educational Tour 2024',
      description: 'Learning beyond the classroom - Science Museum Delhi',
      category: 'Event',
      icon: Calendar,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=675&fit=crop',
      title: 'Best Academy Award',
      description: 'Recognized as Best Coaching Institute in Jind',
      category: 'Achievement',
      icon: Award,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop',
      title: 'Parent-Teacher Meet',
      description: 'Building strong partnerships for student success',
      category: 'Event',
      icon: Calendar,
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 px-4 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
            <Award className="w-4 h-4 mr-2" />
            Achievements & Events
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Our <span className="text-primary">Achievements & Events</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Proud moments from our journey at Career Wave Academy Jind - celebrating success, growth, and memorable experiences
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
                delay: 4000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {galleryItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <CarouselItem key={item.id}>
                    <div className="group relative">
                      {/* Image Container */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                          <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 animate-fadeInLeft">
                            <IconComponent className="w-4 h-4" />
                            {item.category}
                          </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-2 animate-fadeInUp">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-base sm:text-lg animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                            {item.description}
                          </p>
                        </div>

                        {/* Slide Number Indicator */}
                        <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {index + 1} / {galleryItems.length}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 mobile-optimized" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 mobile-optimized" />
          </Carousel>

          {/* Mobile Swipe Hint */}
          <p className="text-center text-muted-foreground text-sm mt-6 md:hidden animate-pulse-soft">
            ← Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

