import { useState, useEffect } from 'react';
import { X, Volume2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);
  const [language, setLanguage] = useState('english');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const seenPopup = sessionStorage.getItem('careerwave-video-popup-seen');
    if (!seenPopup) {
      // Show popup after a very short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500); // Reduced to 500ms for much faster popup
      return () => clearTimeout(timer);
    }
  }, []);

  // Preload video thumbnail for faster loading
  useEffect(() => {
    if (isOpen && !showVideo) {
      // Preload the video thumbnail
      const img = new Image();
      img.src = 'https://img.youtube.com/vi/WVFlQE_iYlE/maxresdefault.jpg';
    }
  }, [isOpen, showVideo]);

  const handleClose = () => {
    setIsOpen(false);
    setHasSeenPopup(true);
    setShowVideo(false);
    setVideoLoaded(false);
    // Mark as seen in session storage
    sessionStorage.setItem('careerwave-video-popup-seen', 'true');
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'hindi' : 'english');
  };

  const content = {
    english: {
      title: "Career Wave Academy Jind Success Stories",
      subtitle: "Watch Our Students Share Their Journey",
      description: "See how Career Wave Academy Jind helped our students achieve their dreams in NEET, IIT-JEE, CBSE, and NDA exams. Real success stories from real students who made it to top medical and engineering colleges.",
      watchButton: "Watch Success Stories",
      trustBadge: "Student Testimonials"
    },
    hindi: {
      title: "कैरियरवेव एकेडमी की सफलता की कहानियां",
      subtitle: "हमारे छात्रों की यात्रा देखें",
      description: "देखिए कैसे कैरियरवेव एकेडमी ने हमारे छात्रों को NEET, IIT-JEE, CBSE और NDA परीक्षाओं में सफलता दिलाई। असली छात्रों की असली सफलता की कहानियां जिन्होंने शीर्ष मेडिकल और इंजीनियरिंग कॉलेजों में प्रवेश पाया।",
      watchButton: "सफलता की कहानियां देखें",
      trustBadge: "छात्र प्रशंसापत्र"
    }
  };

  const currentContent = content[language as keyof typeof content];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 animate-fadeInUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
        >
          <Globe className="w-4 h-4" />
          {language === 'english' ? 'हिंदी' : 'English'}
        </button>

        {/* Video Embed */}
        <div className="relative">
          <div className="aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
            {/* Loading State */}
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-sm">Loading video...</p>
                </div>
              </div>
            )}
            
            {/* Video Thumbnail - Show immediately for faster perceived loading */}
            {!showVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 cursor-pointer group"
                   onClick={() => setShowVideo(true)}
                   style={{
                     backgroundImage: 'url(https://img.youtube.com/vi/WVFlQE_iYlE/maxresdefault.jpg)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative text-center text-white z-10">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors shadow-lg">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Click to Watch Success Stories</p>
                  <p className="text-sm text-gray-200">Career Wave Academy Jind</p>
                </div>
              </div>
            )}
            
            {/* Actual Video - Only load when user clicks */}
            {showVideo && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WVFlQE_iYlE?si=h74A217wPhayzBvJ&autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1&origin=http://localhost:8080"
                title="Career Wave Academy Jind Success Stories"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                onLoad={handleVideoLoad}
                loading="eager"
              ></iframe>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Volume2 className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-red-600">{currentContent.trustBadge}</span>
          </div>
          
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2">
            {currentContent.title}
          </h3>
          
          <p className="text-lg text-gray-700 mb-2 font-medium">
            {currentContent.subtitle}
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {currentContent.description}
          </p>

          <div className="flex gap-3">
            <Button 
              onClick={handleClose}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              {currentContent.watchButton}
            </Button>
            <Button 
              onClick={handleClose}
              variant="outline"
              className="px-6"
            >
              {language === 'english' ? 'Close' : 'बंद करें'}
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-3 text-center">
            {language === 'english' 
              ? 'Video plays automatically with sound' 
              : 'वीडियो स्वचालित रूप से आवाज के साथ चलता है'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
