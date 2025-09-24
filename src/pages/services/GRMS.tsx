import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Settings, 
  Hotel, 
  Thermometer, 
  Lightbulb,
  Shield, 
  BarChart3,
  Wifi,
  Clock,
  CheckCircle,
  Star,
  ArrowLeft,
  Users,
  Zap
} from 'lucide-react';
import grmsBanner from '@/assets/grms-banner.jpg';

const GRMS = () => {
  const features = [
    {
      icon: Settings,
      title: 'Centralized Control',
      description: 'Manage all guest rooms from a single dashboard interface'
    },
    {
      icon: Thermometer,
      title: 'Climate Management',
      description: 'Automated HVAC control for optimal guest comfort and energy savings'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Control',
      description: 'Scene-based lighting with occupancy detection and scheduling'
    },
    {
      icon: Shield,
      title: 'Access Control',
      description: 'Integrated door locks and security system management'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Detailed energy usage and occupancy analytics'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Connect all room devices through secure wireless networks'
    }
  ];

  const benefits = [
    'Reduce energy costs by 25-40%',
    'Improve guest satisfaction scores',
    'Streamline maintenance operations',
    'Increase operational efficiency',
    'Real-time monitoring and alerts',
    'Seamless PMS integration'
  ];

  const systemComponents = [
    {
      component: 'Master Controller',
      description: 'Central hub managing all guest room systems',
      features: ['Cloud connectivity', 'PMS integration', 'Real-time monitoring', 'Mobile app control']
    },
    {
      component: 'Room Control Units',
      description: 'In-room controllers for HVAC, lighting, and amenities',
      features: ['Touch panel interface', 'Occupancy sensors', 'Energy monitoring', 'Guest controls']
    },
    {
      component: 'Mobile Management',
      description: 'Staff mobile app for remote monitoring and control',
      features: ['Maintenance alerts', 'Energy dashboards', 'Guest preferences', 'System diagnostics']
    },
    {
      component: 'Guest Interface',
      description: 'Intuitive controls for guest comfort and convenience',
      features: ['Bedside panels', 'Voice control', 'Mobile app', 'Do not disturb']
    }
  ];

  const techSpecs = [
    { feature: 'Protocol Support', value: 'BACnet, Modbus, KNX' },
    { feature: 'PMS Integration', value: 'Opera, Fidelio, Others' },
    { feature: 'Rooms per System', value: 'Up to 1,000' },
    { feature: 'Control Points', value: '50+ per room' },
    { feature: 'Response Time', value: '<2 seconds' },
    { feature: 'Uptime Guarantee', value: '99.9%' }
  ];

  const hotelTypes = [
    {
      type: 'Luxury Hotels',
      description: 'Premium guest experience with advanced automation',
      features: ['Personalized settings', 'Concierge integration', 'Premium materials']
    },
    {
      type: 'Business Hotels',
      description: 'Efficiency-focused solutions for corporate travelers',
      features: ['Quick setup', 'Work-friendly lighting', 'Meeting room integration']
    },
    {
      type: 'Boutique Properties',
      description: 'Customized systems that reflect unique brand identity',
      features: ['Custom interfaces', 'Artistic integration', 'Local touches']
    },
    {
      type: 'Large Chains',
      description: 'Scalable solutions with centralized management',
      features: ['Multi-property control', 'Brand consistency', 'Bulk management']
    }
  ];

  const caseStudies = [
    {
      title: 'Luxury Resort',
      location: 'Maui, Hawaii',
      description: '200-room resort with complete GRMS integration including spa and restaurant controls.',
      results: ['35% energy reduction', '15% increase in guest satisfaction', '50% faster room turnover']
    },
    {
      title: 'Business Hotel Chain',
      location: 'Multiple Locations',
      description: '500+ rooms across 5 properties with centralized management system.',
      results: ['40% maintenance cost reduction', 'Unified reporting', '24/7 remote monitoring']
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
            <span className="text-foreground">GRMS</span>
          </nav>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${grmsBanner})` }}
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
              Guest Room Management System
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
              Comprehensive automation solution for hospitality properties that enhances guest experience while maximizing operational efficiency and energy savings.
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
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Complete Hotel Automation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              GRMS integrates all guest room systems into a unified platform that improves guest satisfaction while reducing operational costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center shadow-card border-0 hover-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">System Components</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive hardware and software components working together seamlessly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {systemComponents.map((component) => (
              <Card key={component.component} className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="gradient-text">{component.component}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {component.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text">How GRMS Works</h2>
              <p className="text-lg text-muted-foreground">
                Our Guest Room Management System creates an intelligent ecosystem that automatically responds to guest presence, preferences, and hotel operations.
              </p>
              <div className="space-y-4">
                <div className="p-4 card-gradient rounded-lg">
                  <h3 className="font-semibold mb-2">Guest Check-In</h3>
                  <p className="text-sm text-muted-foreground">System automatically prepares room based on guest preferences and arrival time.</p>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <h3 className="font-semibold mb-2">Occupancy Detection</h3>
                  <p className="text-sm text-muted-foreground">Sensors monitor room occupancy and adjust systems accordingly for comfort and efficiency.</p>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <h3 className="font-semibold mb-2">Energy Optimization</h3>
                  <p className="text-sm text-muted-foreground">Automatically reduces energy consumption when rooms are unoccupied or checked out.</p>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <h3 className="font-semibold mb-2">Staff Notifications</h3>
                  <p className="text-sm text-muted-foreground">Real-time alerts for maintenance needs, housekeeping status, and system issues.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <Hotel className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Guest Comfort</h4>
                <p className="text-xs text-muted-foreground">Personalized environment control</p>
              </div>
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Energy Savings</h4>
                <p className="text-xs text-muted-foreground">Smart consumption monitoring</p>
              </div>
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Staff Efficiency</h4>
                <p className="text-xs text-muted-foreground">Streamlined operations</p>
              </div>
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Real-time Data</h4>
                <p className="text-xs text-muted-foreground">Performance analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Perfect for All Property Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Customizable solutions designed for different hospitality environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelTypes.map((hotel) => (
              <Card key={hotel.type} className="shadow-card border-0 hover-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">{hotel.type}</CardTitle>
                  <CardDescription className="text-sm">{hotel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {hotel.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in guest satisfaction and operational efficiency
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
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enterprise-grade systems designed for 24/7 operation in demanding hospitality environments.
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
                  <CardTitle className="gradient-text">Implementation Includes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Comprehensive system design</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>All hardware and controllers</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>PMS integration and testing</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Staff training and documentation</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Mobile management app</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>24/7 monitoring and support</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>5-year warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="p-6 hero-gradient rounded-lg text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Custom Pricing</h3>
                <p className="text-white/90">Based on property size and requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real implementations delivering measurable results for hospitality partners
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

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Transform Your Guest Experience</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Implement a comprehensive GRMS solution that delights guests while optimizing your operations and reducing costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-glow transition-smooth" asChild>
              <Link to="/contact">
                Schedule Demo
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

export default GRMS;