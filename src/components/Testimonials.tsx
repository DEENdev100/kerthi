
import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sophia Anderson",
    role: "Regular Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The facial treatment I received was absolutely amazing! My skin feels so refreshed and rejuvenated. The staff was professional and attentive to my specific skin concerns.",
    rating: 5
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Bridal Client",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "I had my bridal makeup done here and couldn't be happier! The artist understood exactly what I wanted and made me look stunning for my special day.",
    rating: 5
  },
  {
    id: 3,
    name: "Olivia Martin",
    role: "Monthly Subscriber",
    image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The spa packages are worth every penny! I get a monthly treatment and my skin has never been better. The ambiance is so relaxing and the staff is wonderful.",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "First-time Client",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "I was hesitant at first as a guy, but the team made me feel comfortable. The men's facial and haircut were excellent! Will definitely return.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-beauty-light to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. See what our happy clients have to say about their experience with us.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-slide transition-opacity duration-500 absolute w-full ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={18} 
                            className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                      
                      <div>
                        <h4 className="font-playfair font-semibold text-lg text-beauty-dark">{testimonial.name}</h4>
                        <p className="text-beauty-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-beauty-primary text-beauty-primary flex items-center justify-center hover:bg-beauty-primary hover:text-white transition-colors"
            >
              &lt;
            </button>
            
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-beauty-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-beauty-primary text-beauty-primary flex items-center justify-center hover:bg-beauty-primary hover:text-white transition-colors"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
