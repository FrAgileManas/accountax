import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is important to us. This policy explains how we handle
            your data.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                This Privacy Policy explains how Lumovate Intelligence
                (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects,
                uses, and protects your information when you use our AI-powered
                e-commerce platform. By using our service, you agree to the
                collection and use of information in accordance with this
                policy.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    1.1 Account Information
                  </h3>
                  <p className="text-muted-foreground">
                    We use Clerk for authentication services, which manages:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Email address and authentication credentials</li>
                    <li>Profile information (name, profile picture)</li>
                    <li>Account preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    1.2 Order & Transaction Data
                  </h3>
                  <p className="text-muted-foreground">
                    We collect and process order and transaction details for:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Order tracking and fulfillment</li>
                    <li>AI-driven pricing and competitor analysis</li>
                    <li>Customer sentiment analysis on reviews</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    1.3 Payment Information
                  </h3>
                  <p className="text-muted-foreground">
                    Payment processing is handled securely through Razorpay. We
                    do not store your payment details on our servers.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1.4 Usage Information</h3>
                  <p className="text-muted-foreground">
                    We collect data about how you use our platform, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Product description and SEO tool usage</li>
                    <li>Competitor and pricing analysis interactions</li>
                    <li>Review sentiment analysis requests</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    2.1 AI-Powered Services
                  </h3>
                  <p className="text-muted-foreground">
                    We use AI to generate product descriptions, analyze pricing
                    trends, and extract insights from customer reviews.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    2.2 Service Improvements
                  </h3>
                  <p className="text-muted-foreground">
                    Usage data helps us improve AI recommendations and platform
                    performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle>3. Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Secure authentication through Clerk</li>
                <li>Encrypted data transmission using TLS</li>
                <li>Secure payment processing through Razorpay</li>
                <li>Regular security updates and monitoring</li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>4. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the &quot;last updated&quot; date.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>5. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please
                contact us at:
                <br />
                <span className="font-medium">
                  support@lumovateintelligence.com
                </span>
              </p>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground mt-8">
            <p>Last updated: February 8, 2025</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
