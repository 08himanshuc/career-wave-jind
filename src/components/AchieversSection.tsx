import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';

// Import WhatsApp images
import whatsappImage1 from '@/assets/WhatsApp Image 2025-11-18 at 19.12.00.jpeg';
import whatsappImage2 from '@/assets/WhatsApp Image 2025-11-18 at 19.12.01 (1).jpeg';
import whatsappImage3 from '@/assets/WhatsApp Image 2025-11-18 at 19.12.01 (2).jpeg';
import whatsappImage4 from '@/assets/WhatsApp Image 2025-11-18 at 19.12.01.jpeg';

const AchieversSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: scrollRef, isVisible: scrollVisible } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Array of 4 achiever images
  const achieverImages = [
    whatsappImage1,
    whatsappImage2,
    whatsappImage3,
    whatsappImage4,
  ];

  // Calculate scroll amount (one image width + gap)
  const getScrollAmount = useCallback(() => {
    if (!containerRef.current) return 0;
    const container = containerRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return 0;
    // Get computed width including gap (gap-6 = 24px = 1.5rem)
    const gap = 24; // 6 * 4px = 24px (gap-6)
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
    
    // Use a fixed scroll amount for mobile or calculate it
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;
    
    const gap = 24; // gap-6 = 24px
    const scrollAmount = firstChild.offsetWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    
    // If at the start, loop to the end for infinite scroll
    if (currentScroll <= 5) { // Add small tolerance for rounding
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
  }, []);

  const scrollRight = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Use a fixed scroll amount for mobile or calculate it
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;
    
    const gap = 24; // gap-6 = 24px
    const scrollAmount = firstChild.offsetWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    
    // If at the end, loop to the start for infinite scroll
    if (currentScroll >= maxScroll - 5) { // Add small tolerance for rounding
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
  }, []);

  // Auto-scroll effect - every 2 seconds from left to right (infinite, non-stop)
  useEffect(() => {
    if (!containerRef.current || !scrollVisible) return;

    const container = containerRef.current;
    
    // Function to auto-scroll to the right
    const autoScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const scrollAmount = getScrollAmount();
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      // Calculate next scroll position
      let nextScroll = currentScroll + scrollAmount;
      
      // If we've reached or passed the end, reset to start for infinite loop
      if (nextScroll >= maxScroll) {
        nextScroll = 0;
      }
      
      container.scrollTo({
        left: nextScroll,
        behavior: 'smooth',
      });
    };

    // Start auto-scroll every 4 seconds (4000ms)
    autoScrollIntervalRef.current = setInterval(autoScroll, 4000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [scrollVisible, getScrollAmount]);

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

        {/* Achievers Images with Auto-Scroll */}
        <div 
          ref={scrollRef}
          className={`transition-all duration-700 ease-out relative ${
            scrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

          <div className="overflow-hidden relative">
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide justify-center"
              style={{
                scrollSnapType: 'x mandatory',
              }}
            >
              {achieverImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group flex items-center justify-center"
                  style={{
                    width: 'calc(25% - 18px)', // Show all 4 at once on desktop
                    minWidth: '300px', // Minimum width for each image on mobile
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-white/90 backdrop-blur-sm h-full w-full flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Achiever ${index + 1}`}
                      className="w-full h-auto object-contain max-h-[700px] mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate images for seamless loop */}
              {achieverImages.map((image, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 group flex items-center justify-center"
                  style={{
                    width: 'calc(25% - 18px)',
                    minWidth: '300px',
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-white/90 backdrop-blur-sm h-full w-full flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Achiever ${index + 1}`}
                      className="w-full h-auto object-contain max-h-[700px] mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
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

export default AchieversSection;

