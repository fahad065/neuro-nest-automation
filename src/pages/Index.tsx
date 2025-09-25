import React, { useEffect, useRef, useState } from 'react';
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
  Star,
  CheckCircle,
  Play,
  X,
  ExternalLink,
  Target,
  Eye,
  Rocket,
  Globe
} from 'lucide-react';

import * as THREE from 'three'

// Import your hero images
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

// Partner logos data
const partners = [
  {
    name: 'ABB',
    logo: 'ABB',
    url: 'https://www.abb.com',
    description: 'Global technology leader in electrification and automation',
    color: '#FF0000'
  },
  {
    name: 'RZONE',
    logo: 'RZONE',
    url: 'https://www.rzone.com',
    description: 'Advanced home automation solutions',
    color: '#0066CC'
  },
  {
    name: 'Allaway',
    logo: 'allaway',
    url: 'https://www.allaway.com',
    description: 'Smart building management systems',
    color: '#00A859'
  },
  {
    name: 'Apricum',
    logo: 'Apricum',
    url: 'https://www.apricum.com',
    description: 'Energy management and consulting',
    color: '#FF6B00'
  },
  {
    name: 'Arcus-EDS',
    logo: 'arcus-eds',
    url: 'https://www.arcus-eds.com',
    description: 'Electrical distribution systems',
    color: '#8B5CF6'
  },
  {
    name: 'B.E.C.',
    logo: 'B.E.C.',
    url: 'https://www.bec.com',
    description: 'Building automation controls',
    color: '#10B981'
  }
];

// Video Modal Component
const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X size={32} />
        </button>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <video 
            controls 
            autoPlay 
            className="w-full h-full"
            poster="https://images.unsplash.com/photo-1558089687-db4b18a75d6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold">Smart Home Automation Demo</h3>
          <p className="text-gray-300">See how NeuroNest transforms ordinary homes into intelligent living spaces</p>
        </div>
      </div>
    </div>
  );
};

// Simple Three.js Network Effect
const createNetworkEffect = (container: HTMLDivElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  
  // Style the canvas to ensure it's above the background image
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.zIndex = '10';
  
  container.appendChild(renderer.domElement);

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 100;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.03,
    color: 0x3b82f6,
    transparent: true,
    opacity: 0.8
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Create lines for connections
  const linesMaterial = new THREE.LineBasicMaterial({ 
    color: 0x60a5fa, 
    transparent: true, 
    opacity: 0.4
  });
  let linesMesh: THREE.LineSegments | null = null;

  // Mouse interaction
  const mouse = new THREE.Vector2();
  const handleMouseMove = (event: MouseEvent) => {
    if (window.innerWidth <= 768) return;
    
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('mousemove', handleMouseMove);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);

    // Update particles
    const positions = particlesGeometry.attributes.position.array as Float32Array;
    const originalPositions = [...posArray];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Add subtle floating motion
      positions[i] = originalPositions[i] + Math.sin(Date.now() * 0.001 + i) * 0.01;
      positions[i + 1] = originalPositions[i + 1] + Math.cos(Date.now() * 0.001 + i) * 0.01;

      // Mouse interaction
      if (window.innerWidth > 768) {
        const dx = positions[i] - mouse.x * 5;
        const dy = positions[i + 1] - mouse.y * 5;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 2) {
          const force = (2 - distance) * 0.02;
          positions[i] += dx * force;
          positions[i + 1] += dy * force;
        }
      }
    }

    particlesGeometry.attributes.position.needsUpdate = true;

    // Update connections
    const linePositions: number[] = [];
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 1.5) {
          linePositions.push(
            positions[i3], positions[i3 + 1], positions[i3 + 2],
            positions[j3], positions[j3 + 1], positions[j3 + 2]
          );
        }
      }
    }

    // Remove old lines
    if (linesMesh) {
      scene.remove(linesMesh);
    }

    // Add new lines
    if (linePositions.length > 0) {
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesMesh = new THREE.LineSegments(lineGeometry, linesMaterial);
      scene.add(linesMesh);
    }

    renderer.render(scene, camera);
  };

  animate();

  // Handle resize
  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
    renderer.dispose();
  };
};

// Background Image with Network Overlay
const HeroBackground = ({ imageUrl, isActive }: { imageUrl: string; isActive: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && isActive) {
      const cleanup = createNetworkEffect(containerRef.current);
      return cleanup;
    }
  }, [isActive]);

  return (
    <div className={`absolute inset-0 transition-opacity duration-1000 ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 z-10" />
    </div>
  );
};

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const heroImages = [heroBg1, heroBg2, heroBg3];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      title: 'Smart Home',
      description: 'Complete home automation solutions for modern living',
      icon: Home,
      href: '/services/smart-home',
      features: ['Voice Control', 'Mobile App', 'Energy Saving']
    },
    {
      title: 'Lighting Control',
      description: 'Intelligent lighting systems for ambiance and efficiency',
      icon: Lightbulb,
      href: '/services/lighting-control',
      features: ['Scene Control', 'Automated Scheduling', 'Dimming']
    },
    {
      title: 'GRMS',
      description: 'Guest Room Management System for hospitality',
      icon: Settings,
      href: '/services/grms',
      features: ['Centralized Control', 'Guest Comfort', 'Energy Management']
    }
  ];

  const features = [
    {
      title: 'Professional Installation',
      description: 'Expert technicians ensure seamless integration',
      icon: Shield
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      icon: Users
    },
    {
      title: 'Energy Efficient',
      description: 'Smart systems that reduce energy consumption',
      icon: Zap
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'NeuroNest transformed our home into a smart sanctuary. The automation is seamless and has improved our quality of life significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Hotel Manager',
      content: 'The GRMS system has streamlined our operations and enhanced guest satisfaction. Highly recommend their professional service.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Business Owner',
      content: 'Their lighting control system not only looks amazing but has also reduced our energy costs by 30%. Excellent investment.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Network Effects */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <HeroBackground
              key={index}
              imageUrl={image}
              isActive={index === currentImageIndex}
            />
          ))}
        </div>
        
        {/* Clean Gradient Overlay (No Purple) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-gray-900/30" />
        
        {/* Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to the
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Future of Living
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90">
            Transform your space with intelligent automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/20"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Image Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver exceptional automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/20 w-full h-32 overflow-hidden"
                title={partner.description}
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${partner.color}20, transparent)`
                  }}
                />
                
                {/* Logo container */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div 
                    className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                    style={{ color: partner.color }}
                  >
                    {partner.logo}
                  </div>
                  
                  {/* Hover effect - description slide up */}
                  <div className="absolute bottom-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center space-x-1 bg-black/70 rounded-full px-2 py-1 backdrop-blur-sm">
                      <span className="text-xs text-white">Visit</span>
                      <ExternalLink className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Border glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 0 2px ${partner.color}40`,
                    background: `linear-gradient(135deg, ${partner.color}10, transparent)`
                  }}
                />
              </a>
            ))}
          </div>

          {/* Additional decorative element */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-muted-foreground">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-300"></div>
              <span className="text-sm">Industry Leading Partnerships</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Purpose & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving innovation in automation technology to create smarter, more sustainable living environments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Mission Card */}
            <div className="group relative h-full">
              <div className="h-full rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To revolutionize how people interact with their living and working spaces through 
                  innovative automation technology that enhances comfort, efficiency, and security.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Rocket className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm font-medium text-muted-foreground">Innovation</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm font-medium text-muted-foreground">Efficiency</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Home className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm font-medium text-muted-foreground">Comfort</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm font-medium text-muted-foreground">Security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative h-full">
              <div className="h-full rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Creating a world where intelligent automation seamlessly integrates into everyday life, 
                  making spaces more responsive, sustainable, and enjoyable for everyone.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm font-medium text-muted-foreground">Global Impact</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm font-medium text-muted-foreground">Sustainability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm font-medium text-gray-600">Homes Automated</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm font-medium text-gray-600">Commercial Projects</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-sm font-medium text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-gray-600">Support Available</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300" asChild>
                      <Link to={service.href}>
                        Learn More
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

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Why Choose NeuroNest?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional approach and cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get started with a free consultation and discover how NeuroNest can revolutionize your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/20"
              onClick={() => setIsVideoOpen(true)}
            >
              Watch Demo Video
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;