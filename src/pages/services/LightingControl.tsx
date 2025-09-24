import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Lightbulb, 
  Palette, 
  Clock, 
  Smartphone,
  Zap, 
  Settings,
  Sun,
  Moon,
  CheckCircle,
  Star,
  ArrowLeft
} from 'lucide-react';
import lightingBanner from '@/assets/lighting-banner.jpg';

const LightingControl = () => {
  const features = [
    {
      icon: Palette,
      title: 'Color & Dimming Control',
      description: 'Full spectrum color control and precise dimming for any mood'
    },
    {
      icon: Clock,
      title: 'Automated Scheduling',
      description: 'Program lights to follow your daily routines automatically'
    },
    {
      icon: Smartphone,
      title: 'Remote Control',
      description: 'Control lights from anywhere using your smartphone or voice'
    },
    {
      icon: Sun,
      title: 'Daylight Harvesting',
      description: 'Automatically adjust lighting based on natural light levels'
    },
    {
      icon: Settings,
      title: 'Scene Presets',
      description: 'Create custom lighting scenes for different activities'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Smart LED technology reduces energy consumption by 60%'
    }
  ];

  const benefits = [
    'Reduce energy costs by up to 60%',
    'Extend bulb lifespan by 50%',
    'Create perfect ambiance for any occasion',
    'Improve home security with automated lighting',
    'Increase property value',
    'Reduce eye strain and improve comfort'
  ];

  const lightingZones = [
    {
      zone: 'Living Areas',
      features: ['Ambient lighting scenes', 'Entertainment modes', 'Automated dimming'],
      description: 'Perfect lighting for relaxation, entertainment, and daily activities'
    },
    {
      zone: 'Kitchen & Dining',
      features: ['Task lighting control', 'Dining ambiance', 'Under-cabinet lighting'],
      description: 'Functional and aesthetic lighting for cooking and dining experiences'
    },
    {
      zone: 'Bedrooms',
      features: ['Wake-up lighting', 'Sleep schedules', 'Blackout control'],
      description: 'Circadian rhythm support for better sleep and wake cycles'
    },
    {
      zone: 'Outdoor Spaces',
      features: ['Security lighting', 'Landscape accents', 'Weather automation'],
      description: 'Beautiful and secure outdoor lighting that responds to conditions'
    }
  ];

  const techSpecs = [
    { feature: 'Control Protocol', value: 'Lutron, KNX, DALI' },
    { feature: 'Load Types', value: 'LED, Halogen, Fluorescent' },
    { feature: 'Dimming Range', value: '0.1% - 100%' },
    { feature: 'Color Temperature', value: '2700K - 6500K' },
    { feature: 'Zones per System', value: 'Up to 100' },
    { feature: 'Scene Capacity', value: 'Unlimited' }
  ];

  const caseStudies = [
    {
      title: 'Luxury Residence',
      location: 'Beverly Hills, CA',
      description: '8,000 sq ft home with complete lighting automation including landscape and pool lighting.',
      results: ['65% energy reduction', '24 custom scenes', 'Automated security lighting']
    },
    {
      title: 'Modern Office',
      location: 'Seattle, WA',
      description: 'Corporate office with daylight harvesting and occupancy-based lighting control.',
      results: ['70% energy savings', 'Improved productivity', 'LEED certification support']
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
            <span className="text-foreground">Lighting Control</span>
          </nav>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${lightingBanner})` }}
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
              Lighting Control System
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
              Intelligent lighting solutions that create perfect ambiance, enhance security, and significantly reduce energy consumption.
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

      {/* System Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">System Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced lighting control technology that adapts to your lifestyle and optimizes energy efficiency
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

      {/* Lighting Zones */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Smart Lighting Zones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Customized lighting solutions for every area of your home or business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {lightingZones.map((zone) => (
              <Card key={zone.zone} className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="gradient-text">{zone.zone}</CardTitle>
                  <CardDescription>{zone.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {zone.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Lightbulb className="h-4 w-4 text-primary mr-2" />
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
              <h2 className="text-4xl font-bold gradient-text">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Our lighting control systems use advanced technology to create intelligent, responsive lighting that adapts to your needs throughout the day.
              </p>
              <div className="space-y-4">
                <div className="p-4 card-gradient rounded-lg">
                  <h3 className="font-semibold mb-2">1. Smart Sensors</h3>
                  <p className="text-sm text-muted-foreground">Occupancy and daylight sensors automatically adjust lighting based on presence and natural light levels.</p>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <h3 className="font-semibold mb-2">2. Intelligent Control</h3>
                  <p className="text-sm text-muted-foreground">Central processor manages all lighting zones, scenes, and schedules according to your preferences.</p>
                </div>
                <div className="p-4 card-gradient rounded-lg">
                  <h3 className="font-semibold mb-2">3. User Interface</h3>
                  <p className="text-sm text-muted-foreground">Control via wall panels, mobile app, or voice commands for ultimate convenience.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <Sun className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Day Mode</h4>
                <p className="text-xs text-muted-foreground">Bright, energizing light for productivity</p>
              </div>
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <Moon className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Night Mode</h4>
                <p className="text-xs text-muted-foreground">Warm, dimmed light for relaxation</p>
              </div>
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Auto Mode</h4>
                <p className="text-xs text-muted-foreground">Responds to occupancy and time</p>
              </div>
              <div className="p-6 text-center card-gradient rounded-lg shadow-card">
                <Settings className="h-12 w-12 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Scene Mode</h4>
                <p className="text-xs text-muted-foreground">Custom presets for any occasion</p>
              </div>
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
              Why smart lighting control is a valuable investment for any property
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
                Professional-grade lighting control systems compatible with all major manufacturers and fixture types.
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
                  <CardTitle className="gradient-text">Package Includes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>System design and consultation</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>All control panels and dimmers</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Smart LED fixtures (optional)</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Mobile app setup and training</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>Scene programming</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-2" />
                      <span>2-year warranty and support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="p-6 hero-gradient rounded-lg text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Starting at $800</h3>
                <p className="text-white/90">Basic lighting control for 3-4 rooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Project Examples</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real installations showcasing the impact of intelligent lighting control
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
          <h2 className="text-4xl font-bold mb-4">Illuminate Your Space Intelligently</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Transform your lighting with smart control systems that save energy, enhance ambiance, and provide ultimate convenience.
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

export default LightingControl;