
import { Scissors, Brush, Palette, Heart, User, Star } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div className="service-card group hover:bg-beauty-primary hover:-translate-y-1">
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-beauty-light flex items-center justify-center group-hover:bg-white">
          <Icon size={28} className="text-beauty-primary" />
        </div>
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-2 text-beauty-dark text-center group-hover:text-white">{title}</h3>
      <p className="text-gray-600 text-center group-hover:text-white/90">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Bridal Makeup",
      description: "Professional bridal makeup services tailored to your style and wedding theme."
    },
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Expert hair cutting, coloring, and styling services for all hair types."
    },
    {
      icon: User,
      title: "Facials & Skincare",
      description: "Rejuvenating facial treatments to nourish and revitalize your skin."
    },
    {
      icon: Heart,
      title: "Body Treatments",
      description: "Relaxing body treatments including massage and body polishing."
    },
    {
      icon: Brush,
      title: "Nail Care",
      description: "Professional manicure and pedicure services with premium products."
    },
    {
      icon: Star,
      title: "Beauty Consultation",
      description: "Personalized beauty consultation to enhance your natural features."
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Experience the best beauty services in town with our expert stylists and premium products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-playfair font-semibold mb-4 text-beauty-dark">
            Looking for a specific service?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer many more specialized beauty services. Contact us for personalized beauty treatments tailored to your needs.
          </p>
          <a href="#contact" className="beauty-btn">
            Contact For More Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
