
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beauty-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-4">Serene Beauty</h2>
            <p className="text-gray-300 mb-4">
              Your destination for premium beauty services. We are committed to enhancing your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-beauty-primary flex items-center justify-center hover:bg-beauty-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-beauty-primary flex items-center justify-center hover:bg-beauty-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-beauty-primary flex items-center justify-center hover:bg-beauty-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bridal Makeup</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hair Styling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facials & Skincare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Body Treatments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nail Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Beauty Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Beauty Lane, New York, NY 10001, USA</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>contact@serenebeauty.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⏰</span>
                <span>Mon-Fri: 9AM - 8PM<br />Sat: 10AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Serene Beauty Salon. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
