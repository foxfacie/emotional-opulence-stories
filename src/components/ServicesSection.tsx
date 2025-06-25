
import React from 'react';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: "Mehndi Ceremonies",
    description: "Intricate henna artistry celebrations with traditional music and joyful gatherings",
    color: "from-green-400 to-emerald-500",
    bgImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    icon: "🎨"
  },
  {
    title: "Haldi Rituals",
    description: "Sacred turmeric ceremonies filled with laughter, blessings, and golden memories",
    color: "from-yellow-400 to-orange-500",
    bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    icon: "🌟"
  },
  {
    title: "Sangeet Celebrations",
    description: "Musical extravaganzas with choreographed dances and unforgettable performances",
    color: "from-purple-400 to-pink-500",
    bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    icon: "🎵"
  },
  {
    title: "Wedding Ceremonies",
    description: "Sacred vows exchanged in magnificent mandaps with divine blessings",
    color: "from-red-400 to-rose-500",
    bgImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
    icon: "💍"
  },
  {
    title: "Reception Galas",
    description: "Elegant celebrations uniting families with luxury dining and entertainment",
    color: "from-gold-400 to-amber-500",
    bgImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    icon: "🥂"
  },
  {
    title: "Destination Weddings",
    description: "Exotic venues transformed into fairy-tale settings for your special day",
    color: "from-blue-400 to-indigo-500",
    bgImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
    icon: "🏰"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-saffron-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-maroon-800 mb-6 animate-slide-in-up">
            Our Sacred Services
          </h2>
          <p className="text-xl text-maroon-600 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Every tradition honored, every moment elevated. We orchestrate the symphony of your celebrations 
            with meticulous attention to cultural authenticity and luxury refinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden h-80 hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-4xl mb-4 animate-sparkle">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-shadow-luxury">{service.title}</h3>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift animate-glow">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
