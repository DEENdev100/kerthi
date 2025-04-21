
import { Scissors, Brush, Palette, Heart, User, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const accentBg = [
  "bg-gradient-to-br from-beauty-primary/90 to-beauty-pink/80",
  "bg-gradient-to-br from-beauty-cream/90 to-beauty-secondary/70",
  "bg-gradient-to-br from-beauty-peach/90 to-beauty-primary/50",
];

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  accentIndex,
}: {
  icon: any;
  title: string;
  description: string;
  accentIndex: number;
}) => {
  return (
    <Card className={`group overflow-hidden shadow-lg border-0 ${accentBg[accentIndex % accentBg.length]} hover:scale-105 transition-transform duration-300`}>
      <CardContent className="pt-8 pb-5">
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
            <Icon size={28} className="text-beauty-primary" />
          </div>
        </div>
        <h3 className="text-xl font-playfair font-semibold mb-2 text-beauty-dark text-center group-hover:text-beauty-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-700 text-center group-hover:text-gray-900/90 transition-colors">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Bridal Makeup",
      description: "Professional bridal makeup services tailored to your style and wedding theme.",
    },
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Expert hair cutting, coloring, and styling services for all hair types.",
    },
    {
      icon: User,
      title: "Facials & Skincare",
      description: "Rejuvenating facial treatments to nourish and revitalize your skin.",
    },
    {
      icon: Heart,
      title: "Body Treatments",
      description: "Relaxing body treatments including massage and body polishing.",
    },
    {
      icon: Brush,
      title: "Nail Care",
      description: "Professional manicure and pedicure services with premium products.",
    },
    {
      icon: Star,
      title: "Beauty Consultation",
      description: "Personalized beauty consultation to enhance your natural features.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              accentIndex={index}
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
