import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const FAQSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "What courses does Career Wave Academy Jind offer?",
      answer: "We offer comprehensive coaching for NEET (Medical), IIT-JEE (Engineering), CBSE & HBSE Board Classes (9th to 12th), and NDA (Defence) preparation. Each course is designed with expert faculty and proven teaching methodologies."
    },
    {
      question: "What is the admission process and fee structure?",
      answer: "Admissions are open throughout the year with limited seats per batch. Fee structure varies by course and class. Please contact us at +91 98127 26612 for detailed fee information and available payment plans. We also offer scholarships for meritorious students."
    },
    {
      question: "What are the batch timings?",
      answer: "Our classes run primarily in the morning and afternoon. Exact class timings vary by course and section. Please contact us for the latest schedule and availability."
    },
    {
      question: "What is your teaching methodology?",
      answer: "Our teaching methodology includes conceptual learning, regular practice sessions, doubt-clearing classes, weekly tests, and comprehensive study materials. We focus on both board exams and competitive exam preparation with personalized attention to each student."
    },
    {
      question: "Do you provide study materials and mock tests?",
      answer: "Yes, we provide comprehensive study materials, practice worksheets, and regular mock tests designed by our expert faculty. Students also get access to previous years' question papers and detailed performance analysis after each test."
    },
    {
      question: "What is your success rate?",
      answer: "We are proud of our consistent track record since 2009. Our students have successfully cleared NEET, IIT-JEE, and NDA exams with excellent ranks. Many of our CBSE students have scored 95%+ in board exams. Check our Achievers section for success stories."
    },
    {
      question: "Where is Career Wave Academy located in Jind?",
      answer: "We are located on the 1st floor of Punjab & Sindh Bank Building, Opposite D.R.D.A, Huda Market, Shiv Colony, Jind, Haryana - 126102. We are easily accessible from all parts of Jind city."
    },
    {
      question: "Can I get a free demo class before admission?",
      answer: "Yes, we offer free demo classes for all courses. This helps students and parents understand our teaching methods and interact with our faculty. Contact us to schedule your free demo class at your convenience."
    },
    {
      question: "Do you offer online classes?",
      answer: "We primarily focus on offline classroom teaching for better interaction and learning outcomes. However, we do provide online doubt-clearing sessions and recorded lectures for revision. Contact us for more details on hybrid learning options."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Got Questions? <span className="text-primary">We've Got Answers</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our courses, admissions, and teaching methodology.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          ref={faqRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Contact CTA */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919812726612"
                className="inline-flex items-center justify-center btn-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Call +91 98127 26612
              </a>
              <a
                href="https://wa.me/919812726612?text=Hi!%20I%20have%20some%20questions%20about%20Career%20Wave%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

