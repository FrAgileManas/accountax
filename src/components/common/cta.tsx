import React from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  TrendingUp,
  Star,
  Rocket,
  Mail,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export const CTASection = ({ isContactButton = false }) => {
  const features = [
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      name: "AI-Powered Descriptions",
      examples: ["Professional", "Sales-Optimized", "Short & Crisp"],
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      name: "Pricing Insights",
      examples: [
        "Real-Time Monitoring",
        "AI Price Suggestions",
        "Historical Trends",
      ],
    },
    {
      icon: <Star className="w-5 h-5" />,
      name: "Sentiment Analysis",
      examples: [
        "Positive Reviews",
        "Negative Reviews",
        "Fake Review Detection",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      name: "Competitor Analysis",
      examples: ["Competitor Pricing", "Market Trends", "Winning Strategies"],
    },
  ];

  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Enhanced gradient background with glow effect */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/5 dark:to-transparent animate-gradient" />

        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-background/60 to-background/40 backdrop-blur-[1px]" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-75" />
      </div>

      {/* Content */}
      <div className="relative p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                Supercharge Your E-Commerce Success
              </span>
            </h2>
            <p className="text-xl text-foreground/90 drop-shadow-sm">
              Leverage AI to enhance your product listings, optimize pricing,
              and analyze competitors effortlessly.
            </p>
          </div>

          {/* Feature Grid with glass effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group bg-background/60 hover:bg-background/80 backdrop-blur-md rounded-lg p-6 border border-primary/20 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {feature.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1 bg-primary/10 hover:bg-primary/15 rounded-full text-sm font-medium text-primary transition-colors duration-200"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Link href="/" className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                <span>Start Your Free Trial</span>
              </Link>
            </Button>
            {isContactButton ? (
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/50 bg-background/80 hover:bg-background shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/50 bg-background/80 hover:bg-background shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  <span>View Pricing</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
