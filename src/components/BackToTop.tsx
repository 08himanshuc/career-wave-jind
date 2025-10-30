import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    console.log('BackToTop handler fired!');
    // Try all common scrollable containers and window
    const selectors = ['main', '.main', '.container', '#root', 'body', 'html'];
    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el && el.scrollTo) {
        try {
          el.scrollTo({ top: 0, behavior: 'smooth' });
        } catch {
          try {
            el.scrollTop = 0;
          } catch {}
        }
      }
    });
    // Always fallback to window
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {}
  };

  return (
    <div
      className={`fixed bottom-28 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:scale-110 transition-all duration-300 mobile-optimized"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default BackToTop;

