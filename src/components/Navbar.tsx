
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-playfair font-bold text-beauty-primary">
          Serene Beauty
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-beauty-dark hover:text-beauty-primary transition-colors">Home</a>
          <a href="#services" className="text-beauty-dark hover:text-beauty-primary transition-colors">Services</a>
          <a href="#about" className="text-beauty-dark hover:text-beauty-primary transition-colors">About Us</a>
          <a href="#pricing" className="text-beauty-dark hover:text-beauty-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="text-beauty-dark hover:text-beauty-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-beauty-dark hover:text-beauty-primary transition-colors">Contact</a>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-beauty-primary p-2" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container flex flex-col py-4 space-y-4">
            <a href="#home" className="text-beauty-dark hover:text-beauty-primary transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-beauty-dark hover:text-beauty-primary transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-beauty-dark hover:text-beauty-primary transition-colors" onClick={toggleMenu}>About Us</a>
            <a href="#pricing" className="text-beauty-dark hover:text-beauty-primary transition-colors" onClick={toggleMenu}>Pricing</a>
            <a href="#testimonials" className="text-beauty-dark hover:text-beauty-primary transition-colors" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-beauty-dark hover:text-beauty-primary transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
