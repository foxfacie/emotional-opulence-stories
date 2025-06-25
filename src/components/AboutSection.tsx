
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-rosegold-50 to-maroon-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-slide-in-up">
              <h2 className="text-5xl font-bold text-maroon-800 mb-6">
                Where Dreams Meet
                <span className="block text-saffron-600">Sacred Traditions</span>
              </h2>
              <p className="text-xl text-maroon-600 leading-relaxed mb-8">
                For over two decades, Saath Nibhana has been the trusted guardian of India's 
                most cherished wedding traditions, elevating each celebration to unprecedented 
                heights of luxury and cultural authenticity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur hover-lift animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl mb-4 text-saffron-500">1000+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Celebrations Crafted</h4>
                <p className="text-maroon-600 text-sm">Each one a unique masterpiece of cultural elegance</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur hover-lift animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl mb-4 text-gold-500">50+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Luxury Venues</h4>
                <p className="text-maroon-600 text-sm">From heritage palaces to exotic destinations</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur hover-lift animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl mb-4 text-maroon-500">25+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Expert Artisans</h4>
                <p className="text-maroon-600 text-sm">Master craftspeople preserving ancient traditions</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur hover-lift animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl mb-4 text-rosegold-500">15+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Years of Excellence</h4>
                <p className="text-maroon-600 text-sm">Building trust through exceptional experiences</p>
              </Card>
            </div>

            <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <blockquote className="text-lg italic text-maroon-700 border-l-4 border-saffron-400 pl-6 bg-saffron-50 p-6 rounded-r-lg">
                "We don't just plan weddings—we craft once-in-a-lifetime emotional journeys 
                that honor your heritage while creating memories that last forever."
              </blockquote>
              <p className="text-maroon-600 mt-4 font-semibold">— Founder, Saath Nibhana</p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
                alt="Traditional Indian Wedding Setup"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-maroon-400 to-rosegold-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-2 w-8 h-8 bg-gradient-to-br from-gold-400 to-saffron-500 rounded-full animate-sparkle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
