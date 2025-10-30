import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileCTABar = () => {
  const isMobile = useIsMobile();

  // Only show on mobile devices
  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-lg md:hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3">
          {/* Call Button */}
          <Button
            className="flex-1 btn-primary flex items-center justify-center gap-2 h-12 mobile-optimized"
            onClick={() => window.location.href = 'tel:+919812726612'}
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Call Now</span>
          </Button>

          {/* WhatsApp Button */}
          <Button
            className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-2 h-12 mobile-optimized"
            onClick={() => window.open('https://wa.me/919812726612?text=Hi!%20I%27m%20interested%20in%20Career%20Wave%20Academy%20Jind%20courses.', '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileCTABar;

