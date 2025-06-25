
import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import ScrollTrigger from './animations/ScrollTrigger';
import ParticleSystem from './animations/ParticleSystem';

const services = [
  {
    title: "Mehndi Ceremonies",
    description: "Intricate henna artistry celebrations with traditional music and joyful gatherings",
    color: "from-emerald-500 to-emerald-700",
    bgImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    icon: "🎨",
    particles: ['#10B981', '#059669', '#047857']
  },
  {
    title: "Haldi Rituals",
    description: "Sacred turmeric ceremonies filled with laughter, blessings, and golden memories",
    color: "from-saffron-500 to-gold-600",
    bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    icon: "🌟",
    particles: ['#FF9933', '#D4AF37', '#F59E0B']
  },
  {
    title: "Sangeet Celebrations",
    description: "Musical extravaganzas with choreographed dances and unforgettable performances",
    color: "from-indigo-600 to-rosegold-600",
    bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    icon: "🎵",
    particles: ['#2B3A67', '#B76E79', '#8B5CF6']
  },
  {
    title: "Wedding Ceremonies",
    description: "Sacred vows exchanged in magnificent mandaps with divine blessings",
    color: "from-ruby-500 to-maroon-700",
    bgImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
    icon: "💍",
    particles: ['#C32148', '#6D1A36', '#DC2626']
  },
  {
    title: "Reception Galas",
    description: "Elegant celebrations uniting families with luxury dining and entertainment",
    color: "from-gold-500 to-saffron-600",
    bgImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    icon: "🥂",
    particles: ['#D4AF37', '#FF9933', '#F59E0B']
  },
  {
    title: "Destination Weddings",
    description: "Exotic venues transformed into fairy-tale settings for your special day",
    color: "from-indigo-500 to-emerald-600",
    bgImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
    icon: "🏰",
    particles: ['#2B3A67', '#10B981', '#6366F1']
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-maroon-900 via-maroon-800 to-charcoal-900 overflow-hidden">
      {/* Background Particle System */}
      <ParticleSystem 
        particleCount={60}
        colors={['#FF9933', '#D4AF37', '#6D1A36', '#B76E79']}
        className="opacity-30"
      />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-saffron-500/10 to-transparent rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-radial from-gold-500/15 to-transparent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollTrigger threshold={0.2} animation="slideUp">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-champagne-50 mb-8 text-shadow-gold">
              Our Sacred Services
            </h2>
            <p className="text-2xl text-champagne-200 max-w-4xl mx-auto leading-relaxed">
              Every tradition honored, every moment elevated. We orchestrate the symphony of your celebrations 
              with meticulous attention to cultural authenticity and luxury refinement.
            </p>
          </div>
        </ScrollTrigger>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ScrollTrigger 
              key={service.title}
              threshold={0.3}
              animation="scaleIn"
              delay={index * 150}
              duration={800}
            >
              <Card 
                className="group relative overflow-hidden h-96 hover-lift-enhanced cursor-pointer border-3 border-gold-200/20 transform transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service-specific particles */}
                {hoveredService === index && (
                  <ParticleSystem 
                    particleCount={30}
                    colors={service.particles}
                    className="absolute inset-0 z-10"
                  />
                )}

                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-85 group-hover:opacity-90 transition-all duration-500`}></div>
                </div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-300/50 rounded-lg transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-400/0 via-gold-400/50 to-gold-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                {/* Content */}
                <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-shadow-luxury group-hover:text-gold-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/90 group-hover:text-white transition-colors duration-300 text-shadow-gold leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Icon on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-8 h-8 bg-gold-400/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xs">✨</span>
                  </div>
                </div>
              </Card>
            </ScrollTrigger>
          ))}
        </div>

        <ScrollTrigger threshold={0.5} animation="fadeIn" delay={600}>
          <div className="text-center mt-16">
            <button className="btn-luxury-enhanced text-white px-16 py-6 rounded-full text-xl font-semibold hover-lift-enhanced shadow-2xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Explore All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-saffron-600 via-gold-600 to-maroon-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default ServicesSection;
