import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, TrendingUp, Star, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CTASection } from "@/components/common/cta";

const AboutPage = () => {
  const stats = [
    {
      label: "AI Descriptions",
      value: "1000+",
      description: "Optimized Product Listings",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      label: "Price Insights",
      value: "Real-Time",
      description: "Market & Competitor Tracking",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      label: "Sentiment Analysis",
      value: "AI-Powered",
      description: "Customer Feedback Insights",
      icon: <Star className="w-6 h-6" />,
    },
    {
      label: "Competitor Analysis",
      value: "Comprehensive",
      description: "AI-Driven Market Trends",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI-Powered E-Commerce Optimization
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leverage AI to enhance product listings, optimize pricing, and gain
            valuable insights into your market and competitors. Stay ahead with
            real-time AI-driven analytics.
          </p>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 transition-all hover:border-primary/50"
            >
              <div className="absolute top-0 right-0 p-4 text-primary/20">
                {stat.icon}
              </div>
              <CardContent className="pt-8">
                <div className="text-4xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Mission Section */}
        <Card className="mb-20 border-2">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At OptiEcomAI, our goal is to revolutionize e-commerce with
              AI-driven solutions. We empower businesses to optimize product
              listings, track competitor strategies, and analyze customer
              sentiment in real time. Our AI tools make it easy to enhance
              product visibility, improve pricing decisions, and drive better
              sales performance.
            </p>
          </CardContent>
        </Card>

        {/* Enhanced CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
