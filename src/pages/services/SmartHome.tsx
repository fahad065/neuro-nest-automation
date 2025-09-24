import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Home, 
  Smartphone, 
  Mic, 
  Shield, 
  Zap, 
  Thermometer,
  Music,
  Camera,
  CheckCircle,
  Star,
  ArrowLeft
} from 'lucide-react';
import smartHomeBanner from '@/assets/smart-home-banner.jpg';

const SmartHome = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile App Control',
      description: 'Control everything from anywhere with our intuitive mobile app'
    },
    {
      icon: Mic,
      title: 'Voice Integration',
      description: 'Works with Alexa, Google Assistant, and Apple HomeKit'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Integrated security cameras, sensors, and smart locks'
    },
    {
      icon: Zap,
      title: 'Energy Management',
      description: 'Optimize energy usage and reduce utility bills'
    },
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Automated HVAC systems for perfect comfort'
    },
    {
      icon: Music,
      title: 'Entertainment Systems',
      description: 'Whole-home audio and smart TV integration'
    }
  ];

  const benefits = [
    'Increased home value by 15-20%',
    'Reduce energy costs by up to 30%',
    'Enhanced security and peace of mind',
    'Improved daily convenience and comfort',
    'Remote monitoring and control',
    'Customizable automation scenes'
  ];

  const techSpecs = [
    { feature: 'Wireless Protocol', value: 'Z-Wave, Zigbee, WiFi' },
    { feature: 'Hub Required', value: 'Yes (included)' },
    { feature: 'Mobile App', value: 'iOS & Android' },
    { feature: 'Voice Control', value: 'Alexa, Google, Siri' },
    { feature: 'Maximum Devices', value: '200+ per hub' },
    { feature: 'Cloud Backup', value: 'Included' }
  ];

  const caseStudies = [
    {
      title: 'Modern Family Home',
      location: 'Austin, TX',
      description: 'Complete automation of 4,500 sq ft home including lighting, security, HVAC, and entertainment systems.',
      results: ['35% energy savings', '100% client satisfaction', '24/7 monitoring active']
    },
    {
      title: 'Downtown Condo',
      location: 'Miami, FL',
      description: 'Compact smart home solution for urban living with focus on security and energy efficiency.',
      results: ['40% utility reduction', 'Enhanced security', 'Remote access enabled']
    }
  ];

  const relatedServices = [
    {
      title: 'Lighting Control',
      description: 'Intelligent lighting solutions',
      href: '/services/lighting-control'
    },
    {
      title: 'GRMS',
      description: 'Guest room management system',
      href: '/services/grms'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Smart Home</span>
          </nav>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${smartHomeBanner})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white" asChild>
                <Link to="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Smart Home Automation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
              Transform your house into an intelligent home with comprehensive automation solutions that enhance comfort, security, and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="hover-glow transition-smooth" asChild>
                <Link to="/quotation">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/contact">
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">How Smart Home Automation Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our smart home systems integrate seamlessly with your lifestyle, learning your preferences and automating daily routines for maximum comfort and efficiency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 card-gradient rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-3">Centralized Control Hub</h3>
                <p className="text-muted-foreground">
                  A powerful hub connects all your smart devices, creating a unified ecosystem that can be controlled from a single interface.
                </p>
              </div>
              <div className="p-6 card-gradient rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-3">Intelligent Automation</h3>
                <p className="text-muted-foreground">
                  Set up custom scenes and schedules that automatically adjust lighting, temperature, security, and entertainment based on your routines.
                </p>
              </div>
              <div className="p-6 card-gradient rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-3">Remote Access</h3>
                <p className="text-muted-foreground">
                  Monitor and control your home from anywhere in the world using our mobile app or voice commands.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="text-center shadow-card border-0 hover-glow transition-smooth">
                    <CardContent className="p-4">
                      <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why homeowners choose our smart home automation solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center p-4 card-gradient rounded-lg shadow-card">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our smart home systems are built on industry-leading technology platforms, ensuring reliability, scalability, and future-proofing.
              </p>
              <div className="space-y-4">
                {techSpecs.map((spec) => (
                  <div key={spec.feature} className="flex justify-between items-center p-4 card-gradient rounded-lg">
                    <span className="font-medium">{spec.feature}</span>
                    <span className="text-primary font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="gradient-text">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Professional consultation and design</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>All hardware and devices</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Complete installation and setup</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Mobile app configuration</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>User training and documentation</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>1-year warranty and support</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Ongoing system monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="p-6 hero-gradient rounded-lg text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Starting at $2,500</h3>
                <p className="text-white/90">Basic smart home package for 2-3 rooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results from satisfied homeowners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">{study.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Related Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complement your smart home with these additional automation solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {relatedServices.map((service) => (
              <Card key={service.title} className="text-center shadow-card border-0 hover-glow transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get started with a free consultation and discover how smart home automation can enhance your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-glow transition-smooth" asChild>
              <Link to="/contact">
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/quotation">
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHome;