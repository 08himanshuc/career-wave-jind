import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 84605 97155',
      action: 'tel:+918460597155',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 84605 97155',
      action: 'https://wa.me/918460597155',
      bgColor: 'bg-success/10',
      iconColor: 'text-success',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@cwajind.in',
      action: 'mailto:info@cwajind.in',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Sat: 9:00 AM - 8:00 PM',
      action: null,
      bgColor: 'bg-muted',
      iconColor: 'text-muted-foreground',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey to success? Get in touch with us today for admissions and course information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fadeInUp">
              <h3 className="text-3xl font-poppins font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Visit us at our modern facility in the heart of Jind City or reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="p-6 hover:shadow-lg transition-all duration-200 animate-slideInRight"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${info.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-poppins font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {info.details}
                        </p>
                      </div>
                      {info.action && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (info.action.startsWith('http')) {
                              window.open(info.action, '_blank');
                            } else {
                              window.location.href = info.action;
                            }
                          }}
                        >
                          Contact
                        </Button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Address */}
            <Card className="p-6 animate-fadeInUp">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    Our Location
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    1st floor, Punjab & Sindh Bank Building,<br />
                    Opposite D.R.D.A, Huda Market,<br />
                    Shiv Colony, Jind, Haryana - 126102
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map and CTA */}
          <div className="space-y-8 animate-fadeInUp">
            {/* Map with Click to Navigate */}
            <Card className="p-0 overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center relative group cursor-pointer"
                     onClick={() => window.open('https://www.google.com/maps/place/Career+Wave+Academy+Jind/@29.3118822,76.3288897,21z/data=!4m6!3m5!1s0x391205bc86cf8c95:0x1bdba88e7612f20d!8m2!3d29.3118912!4d76.328837!16s%2Fg%2F11h7cnmf24?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D', '_blank')}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.123456789!2d76.3140234!3d29.3158774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a3a1234567890%3A0x1234567890abcdef!2sJind%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                    <p className="text-sm font-medium text-gray-800">Click to open in Google Maps</p>
                    <p className="text-xs text-gray-600">Get directions to our location</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Ready to Join Career Wave Academy Jind?
              </h3>
              <p className="text-muted-foreground mb-6">
                Take the first step towards your success. Contact us today for free counseling and course information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-primary flex items-center gap-2"
                  onClick={() => window.location.href = 'tel:+918460597155'}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <WhatsAppButton 
                  message="Hi! I'm interested in Career Wave Academy Jind courses. Can you please provide more information about admissions and course details?"
                  className="btn-success flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </WhatsAppButton>
              </div>
            </Card>

            {/* Admission Info */}
            <Card className="p-6 bg-success/5 border-success/20">
              <h4 className="font-poppins font-semibold text-foreground mb-2">
                📚 Admissions Open
              </h4>
              <p className="text-muted-foreground text-sm">
                Hurry up! Limited seats available for the new batch. Contact us today to secure your spot.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;