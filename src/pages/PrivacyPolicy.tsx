import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Privacy Policy</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-white/70 mt-4">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
                <p className="text-sm text-muted-foreground">We use industry-standard security measures to protect your personal information.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">We're clear about what data we collect and how we use it.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your Control</h3>
                <p className="text-sm text-muted-foreground">You have control over your personal information and privacy settings.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gradient-text">
                  <FileText className="mr-2 h-6 w-6" />
                  Privacy Policy Details
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Fill out contact forms or request quotes</li>
                    <li>Create an account or profile</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via phone, email, or chat</li>
                    <li>Participate in surveys or feedback</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic mt-4">
                    [Note: This is placeholder content. Please replace with your actual legal privacy policy prepared by qualified legal counsel.]
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide and improve our services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send you updates about our services</li>
                    <li>Process payments and transactions</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Information Sharing</h2>
                  <p className="text-muted-foreground mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and property</li>
                    <li>With trusted service providers who assist us</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Security</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Secure data storage and transmission</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    <li>Email: privacy@neuronest.com</li>
                    <li>Phone: +1 (234) 567-8900</li>
                    <li>Address: 123 Tech Street, Smart City, SC 12345</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Legal Notice</h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    This is placeholder content for demonstration purposes only. Before using this privacy policy, you must:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                    <li>Have it reviewed and customized by qualified legal counsel</li>
                    <li>Ensure compliance with applicable privacy laws (GDPR, CCPA, etc.)</li>
                    <li>Update it to reflect your actual data practices</li>
                    <li>Keep it current with any changes to your business or legal requirements</li>
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
          <h2 className="text-3xl font-bold mb-4 gradient-text">Questions About Your Privacy?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're committed to protecting your privacy. If you have any questions or concerns, don't hesitate to reach out.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;