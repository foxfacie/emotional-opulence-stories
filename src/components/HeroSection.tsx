
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-champagne-50 via-gold-100 to-saffron-100">
      {/* Background Video Placeholder with Animation */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Indian Wedding"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 text-overlay"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 floating-particles"></div>

      {/* Mandala Overlay */}
      <div className="absolute inset-0 mandala-pattern"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-scale">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-shadow-luxury">
              <span className="inline-block animate-slide-in-up gold-shimmer bg-clip-text text-transparent">Saath</span>{' '}
              <span className="inline-block animate-slide-in-up text-gold-300" style={{ animationDelay: '0.2s' }}>Nibhana</span>
            </h1>
            <p className="text-xl md:text-2xl text-champagne-100 mb-8 animate-slide-in-up font-light text-shadow-gold" style={{ animationDelay: '0.4s' }}>
              Crafting Once-in-a-Lifetime Emotional Journeys
            </p>
            <p className="text-lg text-champagne-200 mb-12 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              Where tradition meets luxury, and every moment becomes a treasured memory. 
              Experience the artistry of authentic Indian wedding celebrations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="btn-luxury text-white px-8 py-4 text-lg font-semibold hover-lift rounded-full"
            >
              Begin Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gold-300 text-gold-200 hover:bg-gold-500/20 hover:text-white px-8 py-4 text-lg font-semibold hover-lift rounded-full backdrop-blur-sm"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-300 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gold-300 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-champagne-200 text-sm mt-2 font-medium text-shadow-gold">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
