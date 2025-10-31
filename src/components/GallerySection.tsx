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
      image: 'https://ik.imagekit.io/mony/1.png?updatedAt=1757737087088',
      title: 'Annual Function 2024',
      description: 'Annual Function highlights at Career Wave Academy Jind',
      category: 'Event',
      icon: Calendar,
    },
    {
      id: 2,
      image: 'https://ik.imagekit.io/mony/3.png?updatedAt=1757737140744',
      title: 'Annual Function 2024 (Moment)',
      description: 'Stage performance and celebrations from Annual Function 2024.',
      category: 'Event',
      icon: Calendar,
    },
    {
      id: 3,
      image: 'https://ik.imagekit.io/mony/7.png?updatedAt=1757737140242',
      title: 'Independence Day (15 August)',
      description: 'Celebration of 15 August with staff and students.',
      category: 'National Event',
      icon: Trophy,
    },
    {
      id: 4,
      image: 'https://ik.imagekit.io/mony/6.png?updatedAt=1757737140585',
      title: 'Students in Class',
      description: 'Students attending classroom session - focus on learning.',
      category: 'Academics',
      icon: Calendar,
    },
    {
      id: 5,
      image: 'https://ik.imagekit.io/mony/2.png?updatedAt=1757737139767',
      title: 'In-Class Activities',
      description: 'Interactive learning and participation in classroom.',
      category: 'Academics',
      icon: Calendar,
    },
    {
      id: 6,
      image: 'https://ik.imagekit.io/mony/5.png?updatedAt=1757737140461',
      title: 'Student at Work',
      description: 'Students working on assignments and projects.',
      category: 'Academics',
      icon: Calendar,
    },
    {
      id: 7,
      image: 'https://ik.imagekit.io/mony/4.png?updatedAt=1757737140254',
      title: 'Prizes & Competition',
      description: 'Prize distribution and competition winners.',
      category: 'Achievement',
      icon: Award,
    },
    {
      id: 8,
      image: 'https://ik.imagekit.io/mony/event?updatedAt=1758194092890',
      title: 'Study Tour',
      description: 'Students on an educational tour organized by Career Wave Academy Jind.',
      category: 'Event',
      icon: Calendar,
    },
    {
      id: 9,
      image: 'https://ik.imagekit.io/mony/science2?updatedAt=1758194550214',
      title: 'Student Projects',
      description: 'Projects made by our students (see more: https://ik.imagekit.io/mony/science3?updatedAt=1758194550767).',
      category: 'Project',
      icon: Award,
    },
    // Additional: competition event variations if you want more than 7 total, just uncomment below
    // {
    //   id: 8,
    //   image: 'https://ik.imagekit.io/mony/competition1?updatedAt=1758193967800',
    //   title: 'Competition (Moment 1)',
    //   description: 'Students receiving awards at competitions.',
    //   category: 'Competition',
    //   icon: Trophy,
    // },
    // {
    //   id: 9,
    //   image: 'https://ik.imagekit.io/mony/competition2?updatedAt=1758193965520',
    //   title: 'Competition (Moment 2)',
    //   description: 'Another winning moment at the event.',
    //   category: 'Competition',
    //   icon: Trophy,
    // },
    // {
    //   id: 10,
    //   image: 'https://ik.imagekit.io/mony/competition3?updatedAt=1758193965835',
    //   title: 'Competition (Moment 3)',
    //   description: 'Celebrating talent and effort in competition.',
    //   category: 'Competition',
    //   icon: Trophy,
    // },
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
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
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

