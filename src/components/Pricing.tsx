
import { Check } from 'lucide-react';

const PriceCard = ({ title, price, features, isPopular = false, buttonText = "Choose Plan" }: { 
  title: string; 
  price: string; 
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 relative ${isPopular ? 'border-2 border-beauty-primary transform hover:-translate-y-1' : 'transform hover:-translate-y-1 border border-gray-100'} transition duration-300`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-beauty-primary text-white text-sm px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-playfair font-semibold text-beauty-dark mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-playfair font-bold text-beauty-primary">${price}</span>
        <span className="text-gray-600"> / session</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-beauty-primary mr-2 mt-1 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-md font-medium transition-colors duration-300 ${isPopular ? 'bg-beauty-primary text-white hover:bg-beauty-secondary' : 'bg-beauty-light text-beauty-primary hover:bg-beauty-primary hover:text-white'}`}>
        {buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  const basicFeatures = [
    "Basic facial treatment",
    "Simple makeup application",
    "Basic hair styling",
    "Regular manicure",
    "15% off on products"
  ];
  
  const standardFeatures = [
    "Premium facial treatment",
    "Professional makeup application",
    "Advanced hair styling",
    "Gel manicure & regular pedicure",
    "Free hair consultation",
    "25% off on products"
  ];
  
  const premiumFeatures = [
    "Luxury facial treatment",
    "Bridal/Event makeup",
    "Complete hair transformation",
    "Gel manicure & pedicure",
    "Free beauty consultation",
    "Complementary hair spa",
    "35% off on products"
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the perfect beauty package that suits your needs and budget. Quality service at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PriceCard
            title="Basic Beauty"
            price="49"
            features={basicFeatures}
            buttonText="Book Appointment"
          />
          
          <PriceCard
            title="Standard Beauty"
            price="99"
            features={standardFeatures}
            isPopular={true}
            buttonText="Book Appointment"
          />
          
          <PriceCard
            title="Premium Beauty"
            price="149"
            features={premiumFeatures}
            buttonText="Book Appointment"
          />
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-playfair font-semibold text-beauty-dark mb-4 text-center">Individual Service Pricing</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-playfair font-medium text-xl text-beauty-primary mb-4">Facial & Skincare</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Basic Facial</span>
                  <span className="font-medium">$35</span>
                </li>
                <li className="flex justify-between">
                  <span>Hydrating Facial</span>
                  <span className="font-medium">$45</span>
                </li>
                <li className="flex justify-between">
                  <span>Anti-Aging Treatment</span>
                  <span className="font-medium">$60</span>
                </li>
                <li className="flex justify-between">
                  <span>Deep Cleansing</span>
                  <span className="font-medium">$50</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-medium text-xl text-beauty-primary mb-4">Hair & Styling</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Hair Cut</span>
                  <span className="font-medium">$30</span>
                </li>
                <li className="flex justify-between">
                  <span>Hair Coloring</span>
                  <span className="font-medium">$75+</span>
                </li>
                <li className="flex justify-between">
                  <span>Hair Styling</span>
                  <span className="font-medium">$55</span>
                </li>
                <li className="flex justify-between">
                  <span>Hair Treatment</span>
                  <span className="font-medium">$65</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-medium text-xl text-beauty-primary mb-4">Makeup</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Regular Makeup</span>
                  <span className="font-medium">$40</span>
                </li>
                <li className="flex justify-between">
                  <span>Party Makeup</span>
                  <span className="font-medium">$70</span>
                </li>
                <li className="flex justify-between">
                  <span>Bridal Makeup</span>
                  <span className="font-medium">$150+</span>
                </li>
                <li className="flex justify-between">
                  <span>Eye Makeup</span>
                  <span className="font-medium">$25</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-medium text-xl text-beauty-primary mb-4">Nail Care</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Manicure</span>
                  <span className="font-medium">$25</span>
                </li>
                <li className="flex justify-between">
                  <span>Pedicure</span>
                  <span className="font-medium">$35</span>
                </li>
                <li className="flex justify-between">
                  <span>Gel Nails</span>
                  <span className="font-medium">$45</span>
                </li>
                <li className="flex justify-between">
                  <span>Nail Art</span>
                  <span className="font-medium">$15+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
