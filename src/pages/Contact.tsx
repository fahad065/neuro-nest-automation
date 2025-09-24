import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail,
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    location: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.mobile || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      location: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Street', 'Smart City, SC 12345'],
      action: { text: 'Get Directions', href: 'https://maps.google.com/?q=123+Tech+Street,+Smart+City' }
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (234) 567-8900', 'Mon - Fri: 9AM - 6PM'],
      action: { text: 'Call Now', href: 'tel:+12345678900' }
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Quick responses', 'Available 24/7'],
      action: { text: 'Chat on WhatsApp', href: 'https://wa.me/12345678900' }
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@neuronest.com', 'support@neuronest.com'],
      action: { text: 'Send Email', href: 'mailto:info@neuronest.com' }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Let's Talk About Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-slide-up">
            Ready to transform your ideas into reality? Contact us today and let's bring your vision to life with our innovative automation solutions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="text-center shadow-card border-0 hover-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <div className="text-sm text-muted-foreground mb-4 space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href={info.action.href} target="_blank" rel="noopener noreferrer">
                        {info.action.text}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Google Maps */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 gradient-text">Find Us Here</h2>
                <p className="text-muted-foreground mb-6">
                  Visit our office for a personal consultation and see our automation solutions in action.
                </p>
              </div>
              
              <div className="relative h-96 rounded-lg overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBwNzEyOCBOIDc0LjAwNjAgVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NeuroNest Office Location"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 card-gradient rounded-lg text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Business Hours</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri: 9AM-6PM</p>
                </div>
                <div className="p-4 card-gradient rounded-lg text-center">
                  <MessageCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Response Time</p>
                  <p className="text-xs text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="+1 (234) 567-8900"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="smart-home">Smart Home Automation</SelectItem>
                          <SelectItem value="lighting-control">Lighting Control System</SelectItem>
                          <SelectItem value="grms">GRMS (Guest Room Management)</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full hover-glow transition-smooth">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Prefer Other Ways to Connect?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow transition-smooth" asChild>
              <a href="https://wa.me/12345678900" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+12345678900">
                <Phone className="mr-2 h-5 w-5" />
                Call Directly
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:info@neuronest.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;