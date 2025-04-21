
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-beauty-light to-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-beauty-dark mb-4">
            Discover Your <span className="text-beauty-primary">Natural Beauty</span> With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
            Experience premium beauty services at the Best Beauty Parlor in Town. Our expert stylists provide exceptional services tailored to your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#services" className="beauty-btn">
              Explore Services <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#contact" className="beauty-btn-outline">
              Book Appointment
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">Rating</p>
              <div className="flex items-center">
                <div className="text-yellow-500 text-lg">★★★★★</div>
                <p className="ml-2 font-semibold">4.9/5</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">Happy Clients</p>
              <p className="font-semibold text-lg">5,000+</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">Expert Stylists</p>
              <p className="font-semibold text-lg">15+</p>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-beauty-cream rounded-full animate-float opacity-70"></div>
          <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-beauty-peach rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Beauty salon treatment" 
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 py-6 px-4 md:px-8 bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <h3 className="font-playfair text-2xl font-bold text-beauty-primary">Bridal Makeup</h3>
            <p className="text-gray-600">Professional bridal services</p>
          </div>
          <div className="p-4">
            <h3 className="font-playfair text-2xl font-bold text-beauty-primary">Hair Styling</h3>
            <p className="text-gray-600">Cut, color and styling</p>
          </div>
          <div className="p-4">
            <h3 className="font-playfair text-2xl font-bold text-beauty-primary">Facials</h3>
            <p className="text-gray-600">Rejuvenating treatments</p>
          </div>
          <div className="p-4">
            <h3 className="font-playfair text-2xl font-bold text-beauty-primary">Nail Care</h3>
            <p className="text-gray-600">Manicure & pedicure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
