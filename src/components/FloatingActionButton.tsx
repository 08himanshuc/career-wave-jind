import { useState } from 'react';
import { Phone, MessageCircle, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.location.href = 'tel:+919812726612',
      color: 'bg-primary hover:bg-primary/90',
      delay: 'delay-75'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/919812726612', '_blank'),
      color: 'bg-green-500 hover:bg-green-600',
      delay: 'delay-100'
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.location.href = 'mailto:info@cwajind.in',
      color: 'bg-blue-500 hover:bg-blue-600',
      delay: 'delay-150'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <div className={`flex flex-col gap-3 mb-4 transition-all duration-500 ease-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <div
              key={option.label}
              className={`flex items-center gap-3 transition-all duration-300 ease-out ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="bg-background text-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
                {option.label}
              </span>
              <Button
                size="icon"
                className={`w-12 h-12 rounded-full ${option.color} text-white shadow-lg hover:scale-110 transition-all duration-300 mobile-optimized`}
                onClick={option.action}
              >
                <IconComponent className="w-5 h-5" />
              </Button>
            </div>
          );
        })}
      </div>

      {/* Main FAB */}
      <Button
        size="icon"
        className={`w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:scale-110 transition-all duration-300 mobile-optimized ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
