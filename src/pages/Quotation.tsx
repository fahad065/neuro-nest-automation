import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Calculator, 
  FileText, 
  Upload, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Phone,
  Mail
} from 'lucide-react';

const Quotation = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectLocation: '',
    budget: '',
    timeline: '',
    description: '',
    services: [] as string[],
    hasPlans: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Request Submitted!",
      description: "Thank you for your request. We'll prepare a detailed quote and get back to you within 48 hours.",
    });

    // Reset form
    setFormData({
      projectType: '',
      fullName: '',
      email: '',
      phone: '',
      company: '',
      projectLocation: '',
      budget: '',
      timeline: '',
      description: '',
      services: [],
      hasPlans: false
    });
  };

  const services = [
    { id: 'smart-home', label: 'Smart Home Automation' },
    { id: 'lighting', label: 'Lighting Control System' },
    { id: 'grms', label: 'GRMS (Guest Room Management)' },
    { id: 'security', label: 'Security Systems' },
    { id: 'hvac', label: 'HVAC Control' },
    { id: 'entertainment', label: 'Entertainment Systems' },
    { id: 'energy', label: 'Energy Management' },
    { id: 'consultation', label: 'Consultation Services' }
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'I need guidance on budget'
  ];

  const timelineOptions = [
    'ASAP (Rush Job)',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible timeline'
  ];

  const processSteps = [
    {
      icon: FileText,
      title: 'Submit Request',
      description: 'Fill out our detailed quotation form'
    },
    {
      icon: Phone,
      title: 'Consultation Call',
      description: 'We schedule a call to discuss your needs'
    },
    {
      icon: Calculator,
      title: 'Detailed Quote',
      description: 'Receive a comprehensive project proposal'
    },
    {
      icon: CheckCircle,
      title: 'Project Start',
      description: 'Begin your automation journey'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Request a Quote
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-slide-up">
            Get a detailed, customized quote for your automation project. Our experts will analyze your requirements and provide comprehensive pricing.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Quote Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial request to project start - here's how we work with you
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center space-y-4">
                  <div className="relative">
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text">Project Details</CardTitle>
                <CardDescription className="text-lg">
                  Please provide as much detail as possible to help us create an accurate quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Project Type */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Home</SelectItem>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="hospitality">Hotel/Hospitality</SelectItem>
                        <SelectItem value="retrofit">Existing System Upgrade</SelectItem>
                        <SelectItem value="new-construction">New Construction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Contact Information</h3>
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (234) 567-8900"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Project Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectLocation">Project Location</Label>
                        <Input
                          id="projectLocation"
                          name="projectLocation"
                          value={formData.projectLocation}
                          onChange={handleInputChange}
                          placeholder="City, State"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>{range}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Services Required</h3>
                    <p className="text-sm text-muted-foreground">Select all services you're interested in:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceToggle(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="text-sm cursor-pointer">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When would you like to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelineOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please describe your project in detail. Include: space size, specific requirements, current systems, goals, and any special considerations..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <div className="p-6 border-2 border-dashed border-border rounded-lg text-center space-y-4">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-sm font-medium">Upload Project Files (Optional)</p>
                        <p className="text-xs text-muted-foreground">
                          Floor plans, photos, or specifications (Max 10MB per file)
                        </p>
                      </div>
                      <Button type="button" variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasPlans"
                        checked={formData.hasPlans}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, hasPlans: checked as boolean }))}
                      />
                      <Label htmlFor="hasPlans" className="text-sm">
                        I have architectural plans or detailed specifications to share
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full hover-glow transition-smooth">
                      <Calculator className="mr-2 h-5 w-5" />
                      Request Detailed Quote
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      You'll receive a detailed quote within 48 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">What to Expect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what happens after you submit your quote request
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">48-Hour Response</h3>
                <p className="text-sm text-muted-foreground">
                  We'll review your requirements and schedule a consultation call within 48 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Detailed Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a comprehensive quote with itemized pricing and project timeline.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Follow-Up Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our team remains available to answer questions and refine the proposal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quotation;