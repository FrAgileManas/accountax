import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Terms and Conditions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using our platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                These Terms and Conditions (&quot;Terms&quot;) govern your
                access to and use of OptiEcomAi&apos;s platform and services. By
                using our platform, you agree to be bound by these Terms.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle>1. Service Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  OptiEcomAi provides a unified platform for accessing various
                  AI models and tools, including but not limited to GPT-4,
                  Claude, Gemini, DALL·E, and other AI services.
                </p>

                <div>
                  <h3 className="font-semibold mb-2">
                    1.1 Service Availability
                  </h3>
                  <p className="text-muted-foreground">
                    While we strive to maintain high availability, our service
                    depends on third-party AI providers. Service interruptions
                    may occur due to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Maintenance or updates</li>
                    <li>Third-party AI service disruptions</li>
                    <li>Technical issues beyond our control</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1.2 Platform Updates</h3>
                  <p className="text-muted-foreground">
                    We continuously improve our platform and may add, modify, or
                    remove features. We&apos;ll notify users about significant
                    changes through email or platform announcements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage and Credits */}
          <Card>
            <CardHeader>
              <CardTitle>2. Usage and Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">2.1 Credit System</h3>
                  <p className="text-muted-foreground">
                    Our platform operates on a credit-based system:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Credits are deducted based on the AI services used</li>
                    <li>Credits never expire</li>
                    <li>
                      No usage limits as long as you have available credits
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2.2 Fair Usage</h3>
                  <p className="text-muted-foreground">
                    While we don&apos;t impose strict usage limits, we expect
                    users to utilize the platform responsibly and not engage in
                    activities that could harm the service or other users.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription and Payments */}
          <Card>
            <CardHeader>
              <CardTitle>3. Subscription and Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">3.1 Billing</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>
                      Subscription fees are charged according to your chosen
                      plan
                    </li>
                    <li>You can cancel your subscription at any time</li>
                    <li>
                      After cancellation, you can use remaining credits until
                      your billing period ends
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3.2 Refund Policy</h3>
                  <p className="text-muted-foreground">
                    We do not offer refunds for purchased credits or
                    subscription plans. You can cancel your subscription anytime
                    to prevent future charges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content and AI Outputs */}
          <Card>
            <CardHeader>
              <CardTitle>4. Content and AI Outputs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">4.1 User Rights</h3>
                  <p className="text-muted-foreground">
                    You retain full rights to use any AI-generated content
                    obtained through our platform for any purpose.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4.2 Content Disclaimer</h3>
                  <p className="text-muted-foreground">
                    We don&apos;t guarantee the accuracy, quality, or
                    appropriateness of AI-generated content. Users are
                    responsible for reviewing and validating AI outputs before
                    use.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>5. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our service is provided &quot;as is&quot; without warranties
                  of any kind. We are not liable for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Service interruptions or downtime</li>
                  <li>Accuracy or quality of AI-generated content</li>
                  <li>Third-party AI service disruptions</li>
                  <li>Any indirect, consequential, or incidental damages</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>6. Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of India. Any disputes
                arising from these Terms or your use of the platform will be
                subject to the exclusive jurisdiction of the courts in India.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>7. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. We will notify
                users of any material changes via email or through the platform.
                Continued use of the platform after such changes constitutes
                acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us
                at:
                <br />
                <span className="font-medium">
                  support@lumovateintelligence.com
                </span>
              </p>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground mt-8">
            <p>Last updated: January 21, 2025</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
