
import React from 'react';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: "Mehndi Ceremonies",
    description: "Intricate henna artistry celebrations with traditional music and joyful gatherings",
    color: "from-emerald-500 to-emerald-700",
    bgImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    icon: "🎨"
  },
  {
    title: "Haldi Rituals",
    description: "Sacred turmeric ceremonies filled with laughter, blessings, and golden memories",
    color: "from-saffron-500 to-gold-600",
    bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    icon: "🌟"
  },
  {
    title: "Sangeet Celebrations",
    description: "Musical extravaganzas with choreographed dances and unforgettable performances",
    color: "from-indigo-600 to-rosegold-600",
    bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    icon: "🎵"
  },
  {
    title: "Wedding Ceremonies",
    description: "Sacred vows exchanged in magnificent mandaps with divine blessings",
    color: "from-ruby-500 to-maroon-700",
    bgImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
    icon: "💍"
  },
  {
    title: "Reception Galas",
    description: "Elegant celebrations uniting families with luxury dining and entertainment",
    color: "from-gold-500 to-saffron-600",
    bgImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    icon: "🥂"
  },
  {
    title: "Destination Weddings",
    description: "Exotic venues transformed into fairy-tale settings for your special day",
    color: "from-indigo-500 to-emerald-600",
    bgImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
    icon: "🏰"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-maroon-800 to-charcoal-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-champagne-50 mb-6 animate-slide-in-up text-shadow-gold">
            Our Sacred Services
          </h2>
          <p className="text-xl text-champagne-200 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Every tradition honored, every moment elevated. We orchestrate the symphony of your celebrations 
            with meticulous attention to cultural authenticity and luxury refinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden h-80 hover-lift animate-fade-in-scale border-2 border-gold-200/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-85 group-hover:opacity-90 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-4xl mb-4 animate-sparkle drop-shadow-lg">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-shadow-luxury">{service.title}</h3>
                  <p className="text-white/95 group-hover:text-white transition-colors duration-300 text-shadow-gold">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-luxury text-white px-12 py-4 rounded-full text-lg font-semibold hover-lift animate-glow shadow-2xl">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
