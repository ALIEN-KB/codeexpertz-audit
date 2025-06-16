import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 h-12 flex items-center">
      <div className="container mx-auto px-4 py-0 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/LOGO.webp" alt="Code Expert Logo" style={{ height: '90px', width: 'auto' }} />
          <span className="text-xl font-bold text-gray-900">Code<span className="text-orange-500">Expert</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" onClick={() => handleScroll('hero')} className="text-gray-600 hover:text-orange-500 font-medium transition-colors text-sm">Home</a>
          <a href="#services" onClick={() => handleScroll('services')} className="text-gray-600 hover:text-orange-500 font-medium transition-colors text-sm">Services</a>
          <a href="#about" onClick={() => handleScroll('about')} className="text-gray-600 hover:text-orange-500 font-medium transition-colors text-sm">About</a>
          <a href="#work" onClick={() => handleScroll('work')} className="text-gray-600 hover:text-orange-500 font-medium transition-colors text-sm">Our Work</a>
          <a href="#contact" onClick={() => handleScroll('contact')} className="text-gray-600 hover:text-orange-500 font-medium transition-colors text-sm">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hover:bg-orange-50">
            {isOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-12 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col items-center space-y-6 py-8">
            <a 
              href="#hero" 
              onClick={() => handleScroll('hero')} 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg w-full text-center py-2 hover:bg-orange-50"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => handleScroll('services')} 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg w-full text-center py-2 hover:bg-orange-50"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => handleScroll('about')} 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg w-full text-center py-2 hover:bg-orange-50"
            >
              About
            </a>
            <a 
              href="#work" 
              onClick={() => handleScroll('work')} 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg w-full text-center py-2 hover:bg-orange-50"
            >
              Our Work
            </a>
            <a 
              href="#contact" 
              onClick={() => handleScroll('contact')} 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg w-full text-center py-2 hover:bg-orange-50"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 