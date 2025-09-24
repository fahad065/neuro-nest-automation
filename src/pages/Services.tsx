import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Home, 
  Lightbulb, 
  Settings, 
  Shield, 
  Zap, 
  Users,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'smart-home',
      title: 'Smart Home',
      description: 'Complete home automation solutions that integrate seamlessly with your lifestyle',
      icon: Home,
      href: '/services/smart-home',
      features: [
        'Voice Control Integration',
        'Mobile App Control',
        'Energy Management',
        'Security Systems',
        'Climate Control',
        'Entertainment Systems'
      ],
      price: 'Starting at $2,500'
    },
    {
      id: 'lighting-control',
      title: 'Lighting Control System',
      description: 'Intelligent lighting solutions for ambiance, efficiency, and convenience',
      icon: Lightbulb,
      href: '/services/lighting-control',
      features: [
        'Scene-Based Control',
        'Automated Scheduling',
        'Dimming & Color Control',
        'Motion Sensors',
        'Energy Optimization',
        'Remote Access'
      ],
      price: 'Starting at $800'
    },
    {
      id: 'grms',
      title: 'GRMS (Guest Room Management)',
      description: 'Comprehensive guest room management system for hospitality industry',
      icon: Settings,
      href: '/services/grms',
      features: [
        'Centralized Control',
        'Guest Comfort Settings',
        'Energy Management',
        'Maintenance Alerts',
        'Integration with PMS',
        'Real-time Monitoring'
      ],
      price: 'Custom Pricing'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Installation',
      description: 'Professional technicians with years of experience',
      icon: Shield
    },
    {
      title: 'Ongoing Support',
      description: '24/7 technical support and maintenance services',
      icon: Users
    },
    {
      title: 'Energy Savings',
      description: 'Smart systems that reduce energy consumption by up to 30%',
      icon: Zap
    }
  ];

  const keyFeatures = [
    'Seamless Integration',
    'User-Friendly Interface',
    'Scalable Solutions',
    'Remote Monitoring',
    'Custom Programming',
    'Professional Training'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Automation Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Transform your space with our comprehensive automation solutions designed for modern living and business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="group hover-glow transition-smooth border-0 shadow-card h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl gradient-text">{service.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <div className="text-lg font-semibold text-primary mt-2">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <div className="space-y-3 flex-1">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full group-hover:shadow-glow transition-smooth mt-auto" asChild>
                      <Link to={service.href}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All our automation services include these essential features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyFeatures.map((feature) => (
              <div key={feature} className="text-center p-4 card-gradient rounded-lg shadow-card">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose NeuroNest?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional approach and cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text">Features Overview</h2>
              <p className="text-lg text-muted-foreground">
                Our automation systems are designed with the latest technology to provide seamless integration, 
                intuitive control, and reliable performance. Whether you're looking to automate your home or 
                upgrade your business facility, we have the expertise and solutions to meet your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 card-gradient rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">30%</div>
                  <div className="text-sm text-muted-foreground">Energy Savings</div>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">5 Year</div>
                  <div className="text-sm text-muted-foreground">Warranty</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 card-gradient rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span>Free consultation and system design</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span>Professional installation and configuration</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span>User training and documentation</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span>Ongoing support and maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span>Mobile app and remote access</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span>System monitoring and updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover the perfect automation solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-glow transition-smooth" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/quotation">
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;