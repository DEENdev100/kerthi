
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert('Form submitted! In a real implementation, this would send your message to the salon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to book an appointment? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-beauty-dark">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-beauty-light flex items-center justify-center mr-4">
                  <Phone size={20} className="text-beauty-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-beauty-dark mb-1">Phone Number</h4>
                  <p className="text-gray-600">+1 (234) 567-8901</p>
                  <p className="text-gray-600">+1 (234) 567-8902</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-beauty-light flex items-center justify-center mr-4">
                  <Mail size={20} className="text-beauty-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-beauty-dark mb-1">Email Address</h4>
                  <p className="text-gray-600">contact@serenebeauty.com</p>
                  <p className="text-gray-600">appointments@serenebeauty.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-beauty-light flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-beauty-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-beauty-dark mb-1">Our Location</h4>
                  <p className="text-gray-600">123 Beauty Lane, New York, NY 10001, USA</p>
                  <p className="text-gray-600">Near Central Park</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-beauty-light flex items-center justify-center mr-4">
                  <Clock size={20} className="text-beauty-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-beauty-dark mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215171764059!2d-73.98823492404331!3d40.75850897138487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259abe377578d%3A0xd57f63eb89296a4!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1682418237641!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon Location"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-beauty-dark">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-beauty-dark mb-1">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-beauty-dark mb-1">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-beauty-dark mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-beauty-dark mb-1">Service Interested In*</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="facial">Facial & Skincare</option>
                  <option value="hair">Hair Styling</option>
                  <option value="makeup">Makeup</option>
                  <option value="nails">Nail Care</option>
                  <option value="bridal">Bridal Package</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-beauty-dark mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Tell us more about what you're looking for..."
                ></textarea>
              </div>
              
              <button type="submit" className="beauty-btn w-full">
                Send Message
              </button>
              
              <p className="text-sm text-gray-600">
                By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
