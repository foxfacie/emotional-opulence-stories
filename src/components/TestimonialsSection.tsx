
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Priya & Arjun Sharma",
    location: "Jaipur Wedding",
    content: "Saath Nibhana transformed our dreams into reality! Every detail was perfected with such cultural authenticity and luxury that our guests are still talking about it months later.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Ananya & Vikram Patel",
    location: "Goa Destination Wedding",
    content: "The attention to traditional ceremonies combined with modern luxury was breathtaking. They made our beachside wedding feel like a royal celebration.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Kavya & Rohan Agarwal",
    location: "Mumbai Heritage Venue",
    content: "From mehndi to reception, every event was a masterpiece. The team's dedication to preserving our family traditions while adding their luxury touch was incredible.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-gold-400' : 'text-gray-300'} animate-sparkle`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-maroon-50 to-gold-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-maroon-800 mb-6 animate-slide-in-up">
            Cherished Memories
          </h2>
          <p className="text-xl text-maroon-600 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            The joy in our couples' words is the greatest testament to our commitment to creating 
            extraordinary celebrations that honor tradition and exceed expectations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
            <div className="p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentIndex 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-8 absolute inset-0 p-8 md:p-12'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-gold-300 shadow-lg"
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl text-maroon-700 mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <p className="font-bold text-maroon-800 text-lg">{testimonial.name}</p>
                        <p className="text-saffron-600 font-semibold">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 pb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-saffron-500 w-8 animate-glow' 
                      : 'bg-maroon-300 hover:bg-maroon-400'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Floating Confetti Effect */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="text-4xl opacity-20">🎊</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-4xl opacity-20">✨</div>
        </div>
        <div className="absolute top-1/2 left-20 animate-sparkle">
          <div className="text-3xl opacity-15">🌸</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
