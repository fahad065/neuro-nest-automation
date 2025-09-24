import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Scale, Shield, AlertCircle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Terms & Conditions</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-white/90">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-white/70 mt-4">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fair Terms</h3>
                <p className="text-sm text-muted-foreground">Our terms are designed to be fair and transparent for all parties.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Protection</h3>
                <p className="text-sm text-muted-foreground">These terms protect both your interests and ours.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Clear Guidelines</h3>
                <p className="text-sm text-muted-foreground">Clear expectations for the use of our services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gradient-text">
                  <FileText className="mr-2 h-6 w-6" />
                  Terms & Conditions Details
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    By accessing and using NeuroNest's services, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    [Note: This is placeholder content. Please replace with your actual legal terms and conditions prepared by qualified legal counsel.]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Service Description</h2>
                  <p className="text-muted-foreground mb-4">
                    NeuroNest provides home and commercial automation services including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Smart home automation systems</li>
                    <li>Lighting control solutions</li>
                    <li>Guest Room Management Systems (GRMS)</li>
                    <li>Installation and maintenance services</li>
                    <li>Technical support and consultation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Payment Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    Payment terms for our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Payment schedules will be outlined in individual service contracts</li>
                    <li>All prices are subject to applicable taxes</li>
                    <li>Late payment fees may apply as specified in your contract</li>
                    <li>We accept various payment methods as agreed upon</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Warranties and Disclaimers</h2>
                  <p className="text-muted-foreground mb-4">
                    Our warranty terms:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We provide warranties as specified in individual service agreements</li>
                    <li>Warranty periods vary by product and service type</li>
                    <li>Warranties cover defects in materials and workmanship</li>
                    <li>Normal wear and tear is not covered under warranty</li>
                    <li>Misuse or unauthorized modifications void warranties</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, NeuroNest shall not be liable for any indirect, incidental, 
                    special, or consequential damages arising from the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, 
                    to understand our practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Termination</h2>
                  <p className="text-muted-foreground mb-4">
                    Either party may terminate service agreements under the following conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Breach of contract terms</li>
                    <li>Non-payment of fees</li>
                    <li>Mutual agreement</li>
                    <li>As specified in individual service contracts</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms shall be governed by and construed in accordance with the laws of [Jurisdiction], 
                    without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms & Conditions, please contact us:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    <li>Email: legal@neuronest.com</li>
                    <li>Phone: +1 (234) 567-8900</li>
                    <li>Address: 123 Tech Street, Smart City, SC 12345</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Legal Notice</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    This is placeholder content for demonstration purposes only. Before using these terms and conditions, you must:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                    <li>Have them reviewed and customized by qualified legal counsel</li>
                    <li>Ensure compliance with applicable laws in your jurisdiction</li>
                    <li>Tailor them to your specific business practices and services</li>
                    <li>Update them regularly to reflect changes in your business or legal requirements</li>
                    <li>Consider industry-specific regulations and requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Questions About Our Terms?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any questions about these terms and conditions, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/privacy-policy">
                View Privacy Policy
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;