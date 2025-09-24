import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in automation technology',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Expert in smart home systems and IoT integration',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Engineer',
      bio: 'Specializes in lighting control and energy management',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Davis',
      role: 'Design Director',
      bio: 'Creates intuitive user experiences for automation systems',
      image: '/api/placeholder/300/300'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Winner of Smart Home Technology Award 2023'
    },
    {
      icon: Users,
      title: 'Trusted by 500+ Clients',
      description: 'Residential and commercial automation projects'
    },
    {
      icon: Shield,
      title: 'Certified Partners',
      description: 'Authorized dealers of leading automation brands'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge automation technology'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every solution is tailored to enhance our clients\' quality of life'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Built to last with 24/7 support and maintenance services'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Smart systems designed to optimize energy usage and reduce costs'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started with a vision to make smart homes accessible to everyone'
    },
    {
      year: '2019',
      title: 'First 100 Installations',
      description: 'Reached our first milestone with successful home automation projects'
    },
    {
      year: '2021',
      title: 'Commercial Expansion',
      description: 'Launched GRMS solutions for hospitality industry'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Awarded Smart Home Technology Company of the Year'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Pioneering AI-powered automation solutions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About NeuroNest
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-slide-up">
            Pioneering the future of intelligent automation with innovative solutions that transform how people interact with their spaces
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2018, NeuroNest emerged from a simple vision: to make intelligent automation 
                accessible and beneficial for everyone. What started as a small team of passionate engineers 
                has grown into a leading automation company serving hundreds of satisfied clients.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that technology should enhance lives, not complicate them. That's why we focus 
                on creating seamless, intuitive automation experiences that work harmoniously with your 
                lifestyle and business needs.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 card-gradient rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 card-gradient rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center p-4 card-gradient rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-8 card-gradient rounded-lg shadow-card">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To revolutionize how people interact with their living and working spaces through 
                  innovative automation technology that enhances comfort, efficiency, and security.
                </p>
              </div>
              <div className="p-8 card-gradient rounded-lg shadow-card">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  Creating a world where intelligent automation seamlessly integrates into everyday life, 
                  making spaces more responsive, sustainable, and enjoyable for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center shadow-card border-0 hover-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The experts behind NeuroNest's innovative automation solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-card border-0 overflow-hidden hover-glow transition-smooth">
                <div className="h-48 bg-gradient-primary flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our company's growth and innovation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={event.year} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    {event.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition from industry leaders and satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.title} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have transformed their spaces with NeuroNest automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-glow transition-smooth" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;