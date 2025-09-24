import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/neuronest-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '/about' },
    { name: 'Quotation', href: '/quotation' },
  ];

  const services = [
    { name: 'Smart Home', href: '/services/smart-home' },
    { name: 'Lighting Control', href: '/services/lighting-control' },
    { name: 'GRMS', href: '/services/grms' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="NeuroNest Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-primary-glow">NeuroNest</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming homes with intelligent automation solutions. 
              Creating smarter, more efficient living spaces for the future.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 hover-glow transition-smooth"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-glow">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-glow">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-glow">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p>123 Tech Street</p>
                  <p>Smart City, SC 12345</p>
                </div>
              </div>
              
              <a 
                href="tel:+1234567890" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (234) 567-8900</span>
              </a>
              
              <a 
                href="mailto:info@neuronest.com" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>info@neuronest.com</span>
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>WhatsApp Chat</span>
              </a>

              <a 
                href="https://maps.google.com/?q=123+Tech+Street,+Smart+City" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <ExternalLink className="h-4 w-4 text-primary" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
              <span>&copy; 2024 NeuroNest. All rights reserved.</span>
              <div className="flex space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Watermark */}
            <div className="text-xs text-muted-foreground/60">
              Powered by NeuroNest Technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;