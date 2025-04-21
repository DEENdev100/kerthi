
import { Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-beauty-pink rounded-full animate-float opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-beauty-light rounded-full animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beauty salon stylist" 
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beauty salon interior" 
                  className="rounded-lg shadow-lg h-60 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Facial treatment" 
                  className="rounded-lg shadow-lg h-60 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Makeup products" 
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center mb-4 px-4 py-2 bg-beauty-light rounded-full">
              <Users size={18} className="text-beauty-primary mr-2" />
              <span className="text-beauty-primary font-medium">About Our Salon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-beauty-dark">
              The Best Beauty Parlor in <span className="text-beauty-primary">Your City</span>
            </h2>
            
            <p className="text-gray-600 mb-4">
              Welcome to Serene Beauty, where beauty meets excellence. Established in 2010, we have been providing premium beauty services to our valued clients for over a decade.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our team of expert stylists and beauticians are trained to deliver exceptional services tailored to your unique needs. We use only premium products to ensure the best results for our clients.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-playfair font-semibold mb-2 text-beauty-dark">Our Mission</h3>
                <p className="text-gray-600">To enhance natural beauty and boost confidence through our premium services.</p>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-semibold mb-2 text-beauty-dark">Our Vision</h3>
                <p className="text-gray-600">To be the most trusted beauty destination known for excellence and innovation.</p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="px-8 py-2 bg-white shadow rounded-lg">
                <p className="text-3xl font-playfair font-bold text-beauty-primary">12+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="px-8 py-2 bg-white shadow rounded-lg">
                <p className="text-3xl font-playfair font-bold text-beauty-primary">15+</p>
                <p className="text-sm text-gray-600">Expert Stylists</p>
              </div>
              <div className="px-8 py-2 bg-white shadow rounded-lg">
                <p className="text-3xl font-playfair font-bold text-beauty-primary">5K+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
