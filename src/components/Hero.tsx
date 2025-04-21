
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Decorative Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Beauty Salon Background"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.70)" }}
        />
        {/* Soft accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-beauty-primary/70 via-beauty-cream/50 to-white/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      <div className="relative container mx-auto grid md:grid-cols-2 gap-8 items-center z-10">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-beauty-dark mb-4 drop-shadow-xl">
            Best Beauty Parlour in <span className="text-beauty-primary">New York</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
            Experience premium <strong>bridal makeup</strong>, <strong>facials</strong>, <strong>hair styling</strong>, and more at New York's top beauty salon. Our expert stylists personalize every service for your unique look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#services" className="beauty-btn shadow-md shadow-beauty-primary/40">
              Explore Services <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#contact" className="beauty-btn-outline">
              Book Appointment
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="bg-white/90 p-3 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Rating</p>
              <div className="flex items-center">
                <div className="text-yellow-500 text-lg">★★★★★</div>
                <p className="ml-2 font-semibold">4.9/5</p>
              </div>
            </div>
            <div className="bg-white/90 p-3 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Happy Clients</p>
              <p className="font-semibold text-lg">5,000+</p>
            </div>
            <div className="bg-white/90 p-3 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Expert Stylists</p>
              <p className="font-semibold text-lg">15+</p>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block w-[420px] h-[420px] rounded-full overflow-hidden shadow-xl shadow-beauty-primary/30 hover:scale-105 transition-transform duration-300">
          {/* Circular floating accent backgrounds */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-beauty-cream rounded-full animate-float opacity-70 blur-md"></div>
          <div
            className="absolute -bottom-5 -right-5 w-32 h-32 bg-beauty-peach rounded-full animate-float opacity-70 blur-md"
            style={{ animationDelay: '1s' }}
          ></div>
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
            alt="Beauty salon treatment"
            className="w-full h-full object-cover"
          />
          {/* Logo inside circle */}
          <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
      {/* Service Highlights */}
      <div className="relative z-10 container mx-auto mt-16 py-6 px-4 md:px-8 bg-white/90 rounded-xl shadow-md shadow-beauty-primary/10 backdrop-blur">
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
