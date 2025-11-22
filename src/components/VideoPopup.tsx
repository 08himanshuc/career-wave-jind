import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const seenPopup = sessionStorage.getItem('careerwave-video-popup-seen');
    if (!seenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Preload video thumbnail for faster loading
  useEffect(() => {
    if (isOpen && !showVideo) {
      const img = new Image();
      img.src = 'https://img.youtube.com/vi/WVFlQE_iYlE/maxresdefault.jpg';
    }
  }, [isOpen, showVideo]);

  const handleClose = () => {
    setIsOpen(false);
    setShowVideo(false);
    // Mark as seen in session storage
    sessionStorage.setItem('careerwave-video-popup-seen', 'true');
  };

  // Hinglish description
  const description = "Hamare students ne NEET, IIT-JEE, CBSE aur NDA mein top colleges mein selection liya. Dekhiye unki success stories aur kaise Career Wave Academy ne unhein help ki.";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 animate-fadeInUp overflow-hidden">
        {/* Cancel Icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Video Embed */}
        <div className="relative">
          <div className="aspect-video bg-gray-900 overflow-hidden">
            {/* Video Thumbnail with Play Button */}
            {!showVideo && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-gray-900 cursor-pointer group"
                onClick={() => setShowVideo(true)}
                style={{
                  backgroundImage: 'url(https://img.youtube.com/vi/WVFlQE_iYlE/maxresdefault.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <svg className="w-10 h-10 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
            
            {/* Actual Video - Only load when user clicks */}
            {showVideo && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WVFlQE_iYlE?si=h74A217wPhayzBvJ&autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1"
                title="Career Wave Academy Jind Success Stories"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="eager"
              ></iframe>
            )}
          </div>
        </div>

        {/* Hinglish Description */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
