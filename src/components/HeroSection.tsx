
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import FloatingMandap from './3D/FloatingMandap';
import ParticleSystem from './animations/ParticleSystem';
import TextReveal from './animations/TextReveal';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-champagne-50 via-gold-100 to-saffron-100">
      {/* 3D Background */}
      <FloatingMandap />
      
      {/* Particle System */}
      <ParticleSystem 
        particleCount={80}
        colors={['#FF9933', '#D4AF37', '#6D1A36', '#B76E79']}
        className="opacity-60"
      />

      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-10">
        <img 
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Indian Wedding"
          className="w-full h-full object-cover"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px) translateX(${mousePosition.x * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Animated mandalas */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 opacity-20"
          style={{
            transform: `rotate(${scrollY * 0.1}deg) scale(${1 + mousePosition.x * 0.1})`
          }}
        >
          <div className="w-full h-full border-4 border-gold-400 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border-2 border-saffron-400 rounded-full animate-spin-reverse"></div>
        </div>
        
        <div 
          className="absolute bottom-32 right-16 w-24 h-24 opacity-15"
          style={{
            transform: `rotate(${-scrollY * 0.15}deg) scale(${1 + mousePosition.y * 0.1})`
          }}
        >
          <div className="w-full h-full border-3 border-maroon-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <TextReveal
              text="Saath Nibhana"
              className="text-7xl md:text-9xl font-bold text-white mb-6 text-shadow-luxury"
              delay={500}
              duration={1200}
            />
            <TextReveal
              text="Crafting Once-in-a-Lifetime Emotional Journeys"
              className="text-2xl md:text-3xl text-champagne-100 mb-8 font-light text-shadow-gold"
              delay={1000}
              duration={1000}
            />
            <TextReveal
              text="Where tradition meets luxury, and every moment becomes a treasured memory. Experience the artistry of authentic Indian wedding celebrations."
              className="text-lg text-champagne-200 mb-12 max-w-3xl mx-auto leading-relaxed"
              delay={1500}
              duration={800}
            />
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fadeInUp"
            style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
          >
            <Button 
              size="lg" 
              className="btn-luxury-enhanced text-white px-10 py-5 text-xl font-semibold hover-lift-enhanced rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #FF9933 0%, #D4AF37 50%, #B76E79 100%)',
                boxShadow: '0 8px 32px rgba(255, 153, 51, 0.4)'
              }}
            >
              Begin Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-3 border-gold-300 text-gold-200 hover:bg-gold-500/30 hover:text-white px-10 py-5 text-xl font-semibold hover-lift-enhanced rounded-full backdrop-blur-md bg-white/10 transform transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="relative">
          <div className="w-8 h-12 border-3 border-gold-300 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-2 h-4 bg-gradient-to-b from-gold-300 to-saffron-400 rounded-full mt-3 animate-pulse"></div>
          </div>
          <div className="absolute -inset-2 border border-gold-300/30 rounded-full animate-ping"></div>
        </div>
        <p className="text-champagne-200 text-sm mt-3 font-medium text-shadow-gold">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
