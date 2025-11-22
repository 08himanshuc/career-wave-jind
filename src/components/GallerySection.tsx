import { Award, Trophy, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useEffect, useRef, useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Calculate scroll amount (one image width + gap)
  const getScrollAmount = useCallback(() => {
    if (!containerRef.current) return 0;
    const container = containerRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return 0;
    const gap = 24; // gap-6 = 24px
    return firstChild.offsetWidth + gap;
  }, []);

  // Manual navigation functions
  const scrollLeft = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;
    
    const gap = 24;
    const scrollAmount = firstChild.offsetWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    
    const handleScrollEnd = () => {
      const singleItemWidth = container.scrollWidth / 2 / galleryItems.length;
      const newIndex = Math.round(container.scrollLeft / singleItemWidth) % galleryItems.length;
      setCurrentIndex(newIndex);
      container.removeEventListener('scrollend', handleScrollEnd);
    };
    container.addEventListener('scrollend', handleScrollEnd);
    
    if (currentScroll <= 5) {
      container.scrollTo({
        left: maxScroll,
        behavior: 'smooth',
      });
    } else {
      const newScroll = Math.max(0, currentScroll - scrollAmount);
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  }, [galleryItems.length]);

  const scrollRight = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;
    
    const gap = 24;
    const scrollAmount = firstChild.offsetWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    
    const handleScrollEnd = () => {
      const singleItemWidth = container.scrollWidth / 2 / galleryItems.length;
      const newIndex = Math.round(container.scrollLeft / singleItemWidth) % galleryItems.length;
      setCurrentIndex(newIndex);
      container.removeEventListener('scrollend', handleScrollEnd);
    };
    container.addEventListener('scrollend', handleScrollEnd);
    
    if (currentScroll >= maxScroll - 5) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      const newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  }, [galleryItems.length]);

  // Update current index based on scroll position
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const updateIndex = () => {
      if (!container) return;
      const currentScroll = container.scrollLeft;
      const singleItemWidth = container.scrollWidth / 2 / galleryItems.length;
      
      // Calculate which item is currently in view
      const scrollIndex = Math.round(currentScroll / singleItemWidth) % galleryItems.length;
      setCurrentIndex(scrollIndex >= 0 ? scrollIndex : galleryItems.length - 1);
    };

    // Use a timeout to debounce scroll events
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateIndex, 100);
    };

    container.addEventListener('scroll', handleScroll);
    updateIndex(); // Initial update
    
    return () => {
      clearTimeout(timeoutId);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [galleryItems.length]);

  // Auto-scroll effect - every 4 seconds
  useEffect(() => {
    if (!containerRef.current || !carouselVisible) return;

    const container = containerRef.current;
    
    const autoScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const scrollAmount = getScrollAmount();
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      let nextScroll = currentScroll + scrollAmount;
      
      if (nextScroll >= maxScroll) {
        nextScroll = 0;
      }
      
      container.scrollTo({
        left: nextScroll,
        behavior: 'smooth',
      });
    };

    autoScrollIntervalRef.current = setInterval(autoScroll, 4000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [carouselVisible, getScrollAmount]);

  // Get current item details
  const currentItem = galleryItems[currentIndex];
  const IconComponent = currentItem?.icon || Calendar;

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

        {/* Gallery Slider */}
        <div 
          ref={carouselRef}
          className={`transition-all duration-700 ease-out relative ${
            carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Arrow Button */}
          <Button
            onClick={scrollLeft}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary shadow-lg h-12 w-12 rounded-full hidden md:flex items-center justify-center transition-all duration-300 mobile-optimized"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </Button>

          {/* Right Arrow Button */}
          <Button
            onClick={scrollRight}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary shadow-lg h-12 w-12 rounded-full hidden md:flex items-center justify-center transition-all duration-300 mobile-optimized"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </Button>

          {/* Images Slider */}
          <div className="overflow-hidden relative">
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide justify-center"
              style={{
                scrollSnapType: 'x mandatory',
              }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 group"
                  style={{
                    width: '100%',
                    maxWidth: '1000px',
                    minWidth: '100%',
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate images for seamless loop */}
              {galleryItems.map((item, index) => (
                <div
                  key={`duplicate-${item.id}`}
                  className="flex-shrink-0 group"
                  style={{
                    width: '100%',
                    maxWidth: '1000px',
                    minWidth: '100%',
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Details Below in White Area */}
          <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  {currentItem?.category}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {galleryItems.length}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-3">
                {currentItem?.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {currentItem?.description}
              </p>
            </div>
          </div>

          {/* Mobile Arrow Buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden z-20 relative">
            <Button
              onClick={scrollLeft}
              onTouchStart={(e) => {
                e.preventDefault();
                scrollLeft(e);
              }}
              type="button"
              variant="outline"
              size="icon"
              className="bg-white hover:bg-white active:bg-primary/10 border-2 border-primary/20 active:border-primary shadow-lg h-14 w-14 rounded-full transition-all duration-300 mobile-optimized touch-manipulation cursor-pointer"
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                pointerEvents: 'auto',
                zIndex: 20,
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-7 w-7 text-primary" />
            </Button>
            <Button
              onClick={scrollRight}
              onTouchStart={(e) => {
                e.preventDefault();
                scrollRight(e);
              }}
              type="button"
              variant="outline"
              size="icon"
              className="bg-white hover:bg-white active:bg-primary/10 border-2 border-primary/20 active:border-primary shadow-lg h-14 w-14 rounded-full transition-all duration-300 mobile-optimized touch-manipulation cursor-pointer"
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                pointerEvents: 'auto',
                zIndex: 20,
              }}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-7 w-7 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

