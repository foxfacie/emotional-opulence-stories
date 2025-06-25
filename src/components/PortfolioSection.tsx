
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const portfolioItems = [
  {
    id: 1,
    title: "Royal Rajasthani Wedding",
    couple: "Arjun & Priya",
    category: "Palace Wedding",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    description: "A magnificent celebration at City Palace, Udaipur with traditional Rajasthani grandeur"
  },
  {
    id: 2,
    title: "Beachside Goan Celebration",
    couple: "Vikram & Ananya",
    category: "Destination Wedding",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    description: "Sunset vows by the Arabian Sea with Portuguese-Indian fusion elegance"
  },
  {
    id: 3,
    title: "Heritage Mumbai Mansion",
    couple: "Rohan & Kavya",
    category: "Heritage Venue",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    description: "Art Deco grandeur meets traditional ceremonies in South Mumbai"
  },
  {
    id: 4,
    title: "Himalayan Hill Station",
    couple: "Aditya & Meera",
    category: "Mountain Wedding",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    description: "Sacred vows amidst snow-capped peaks and ancient temple architecture"
  },
  {
    id: 5,
    title: "Kerala Backwater Bliss",
    couple: "Karthik & Divya",
    category: "Backwater Wedding",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    description: "Traditional Kerala ceremonies on decorated houseboats and coconut groves"
  },
  {
    id: 6,
    title: "Desert Safari Romance",
    couple: "Ishaan & Riya",
    category: "Desert Wedding",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80",
    description: "Thar Desert luxury camping with camel processions and starlit ceremonies"
  }
];

const PortfolioSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-saffron-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-maroon-800 mb-6 animate-slide-in-up">
            Timeless Celebrations
          </h2>
          <p className="text-xl text-maroon-600 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Each wedding is a unique story woven with threads of tradition, love, and luxury. 
            Witness the magic we create for couples across incredible destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl hover-lift animate-fade-in-scale cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-sparkle">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-shadow-luxury">{item.title}</h3>
                  <p className="text-gold-200 font-semibold mb-2">{item.couple}</p>
                  <p className={`text-white/80 transition-all duration-300 ${
                    hoveredItem === item.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 hover:from-saffron-600 hover:via-gold-600 hover:to-maroon-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover-lift animate-glow shadow-2xl">
            View Complete Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
