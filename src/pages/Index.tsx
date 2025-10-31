import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FounderDirector from '@/components/FounderDirector';
import AchieversSection from '@/components/AchieversSection';
import GallerySection from '@/components/GallerySection';
import Courses from '@/components/Courses';
import WhyChoose from '@/components/WhyChoose';
import About from '@/components/About';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import BackToTop from '@/components/BackToTop';
import VideoPopup from '@/components/VideoPopup';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="overflow-x-hidden bg-background pb-20 md:pb-0">
        <Hero />
        <FounderDirector />
        <AchieversSection />
        <GallerySection />
        <Courses />
        <WhyChoose />
        <About />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
      <BackToTop />
      <VideoPopup />
    </div>
  );
};

export default Index;
