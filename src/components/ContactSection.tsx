
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-saffron-50 via-white to-maroon-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 floating-particles opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-maroon-800 mb-6 animate-slide-in-up">
            Begin Your Journey
          </h2>
          <p className="text-xl text-maroon-600 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Let us craft your perfect celebration. Share your dreams with us, and we'll transform 
            them into an unforgettable experience that honors your traditions and exceeds your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl hover-lift animate-fade-in-scale">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-maroon-700 font-semibold mb-2">Your Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-maroon-200 focus:border-saffron-400 focus:ring-saffron-400"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-maroon-700 font-semibold mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-maroon-200 focus:border-saffron-400 focus:ring-saffron-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-maroon-700 font-semibold mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-maroon-200 focus:border-saffron-400 focus:ring-saffron-400"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-maroon-700 font-semibold mb-2">Event Date</label>
                  <Input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="border-maroon-200 focus:border-saffron-400 focus:ring-saffron-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-maroon-700 font-semibold mb-2">Tell us about your dream wedding</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-maroon-200 focus:border-saffron-400 focus:ring-saffron-400"
                  placeholder="Share your vision, preferences, and any special requirements..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-saffron-500 via-gold-500 to-maroon-500 hover:from-saffron-600 hover:via-gold-600 hover:to-maroon-600 text-white py-4 text-lg font-semibold hover-lift animate-glow"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-sparkle">✨</span>
                    Message Sent Successfully!
                    <span className="animate-sparkle">✨</span>
                  </span>
                ) : (
                  'Start Planning My Dream Wedding'
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <Card className="p-6 bg-gradient-to-br from-saffron-100 to-gold-100 border-saffron-200 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-saffron-500 rounded-full flex items-center justify-center text-white text-xl animate-glow">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-maroon-800 mb-1">Call Us</h4>
                  <p className="text-maroon-600">+91 98765 43210</p>
                  <p className="text-maroon-600">+91 87654 32109</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-gold-100 to-maroon-100 border-gold-200 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white text-xl animate-glow">
                  📧
                </div>
                <div>
                  <h4 className="font-bold text-maroon-800 mb-1">Email Us</h4>
                  <p className="text-maroon-600">hello@saathnibhana.com</p>
                  <p className="text-maroon-600">weddings@saathnibhana.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-maroon-100 to-rosegold-100 border-maroon-200 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-maroon-500 rounded-full flex items-center justify-center text-white text-xl animate-glow">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-maroon-800 mb-1">Visit Us</h4>
                  <p className="text-maroon-600">123 Heritage Plaza,</p>
                  <p className="text-maroon-600">Connaught Place, New Delhi</p>
                  <p className="text-maroon-600">India - 110001</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-rosegold-100 to-saffron-100 border-rosegold-200 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rosegold-500 rounded-full flex items-center justify-center text-white text-xl animate-glow">
                  💬
                </div>
                <div>
                  <h4 className="font-bold text-maroon-800 mb-1">WhatsApp</h4>
                  <p className="text-maroon-600">Quick consultation available</p>
                  <p className="text-maroon-600">+91 98765 43210</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
