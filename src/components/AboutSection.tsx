
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-champagne-100 to-maroon-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-slide-in-up">
              <h2 className="text-5xl font-bold text-maroon-800 mb-6 text-shadow-luxury">
                Where Dreams Meet
                <span className="block text-saffron-600">Sacred Traditions</span>
              </h2>
              <p className="text-xl text-charcoal-700 leading-relaxed mb-8">
                For over two decades, Saath Nibhana has been the trusted guardian of India's 
                most cherished wedding traditions, elevating each celebration to unprecedented 
                heights of luxury and cultural authenticity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 card-luxury hover-lift animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl mb-4 text-saffron-600 font-bold">1000+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Celebrations Crafted</h4>
                <p className="text-charcoal-600 text-sm">Each one a unique masterpiece of cultural elegance</p>
              </Card>

              <Card className="p-6 card-luxury hover-lift animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl mb-4 text-gold-600 font-bold">50+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Luxury Venues</h4>
                <p className="text-charcoal-600 text-sm">From heritage palaces to exotic destinations</p>
              </Card>

              <Card className="p-6 card-luxury hover-lift animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl mb-4 text-maroon-600 font-bold">25+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Expert Artisans</h4>
                <p className="text-charcoal-600 text-sm">Master craftspeople preserving ancient traditions</p>
              </Card>

              <Card className="p-6 card-luxury hover-lift animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl mb-4 text-rosegold-600 font-bold">15+</div>
                <h4 className="font-bold text-maroon-800 mb-2">Years of Excellence</h4>
                <p className="text-charcoal-600 text-sm">Building trust through exceptional experiences</p>
              </Card>
            </div>

            <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <blockquote className="text-lg italic text-maroon-800 border-l-4 border-saffron-500 pl-6 bg-gradient-to-r from-saffron-50 to-gold-50 p-6 rounded-r-lg shadow-lg">
                "We don't just plan weddings—we craft once-in-a-lifetime emotional journeys 
                that honor your heritage while creating memories that last forever."
              </blockquote>
              <p className="text-charcoal-700 mt-4 font-semibold">— Founder, Saath Nibhana</p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-200">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
                alt="Traditional Indian Wedding Setup"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-saffron-500 to-gold-600 rounded-full animate-float opacity-90 shadow-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-maroon-600 to-rosegold-600 rounded-full animate-float opacity-80 shadow-xl" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-2 w-8 h-8 bg-gradient-to-br from-gold-500 to-saffron-600 rounded-full animate-sparkle shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
