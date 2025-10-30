import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  message = "Hi! I'm interested in Career Wave Academy Jind courses. Can you please provide more information?", 
  className = "",
  children
}: WhatsAppButtonProps) => {
  const phoneNumber = "919812726612";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      {children || (
        <>
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </>
      )}
    </Button>
  );
};

export default WhatsAppButton;
