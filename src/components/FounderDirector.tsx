import useScrollAnimation from '@/hooks/use-scroll-animation';

const FounderDirector = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="founder-director" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`transition-all duration-700 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mx-auto max-w-md academy-card p-6 text-center hover-lift mobile-optimized">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src="https://ik.imagekit.io/mony/director.png?updatedAt=1757738741603"
                alt="Founder & Director of Career Wave Academy Jind"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-poppins font-semibold text-foreground">Founder & Director</h3>
              <p className="text-sm text-muted-foreground">Lead Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDirector;

