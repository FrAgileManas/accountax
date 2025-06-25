// src/data/benefits-data.ts
import { Shield, Clock, Users, TrendingUp, Smartphone, HeadphonesIcon } from "lucide-react";
import { Benefit } from "@/types/benefits";

export const benefits: Benefit[] = [
  {
    id: "expertise",
    title: "Expert Team",
    description: "Our certified professionals bring years of experience and deep industry knowledge to handle your financial needs with precision.",
    icon: Users,
    features: [
      "Certified Chartered Accountants",
      "Industry-specific expertise",
      "Continuous professional development",
      "Proven track record"
    ]
  },
  {
    id: "technology",
    title: "Technology-Driven",
    description: "We leverage cutting-edge technology and modern tools to provide efficient, accurate, and secure financial services.",
    icon: Smartphone,
    features: [
      "Cloud-based accounting systems",
      "Real-time financial reporting",
      "Automated compliance tracking",
      "Secure data management"
    ]
  },
  {
    id: "compliance",
    title: "100% Compliance",
    description: "Stay ahead of regulatory changes with our comprehensive compliance management and proactive advisory services.",
    icon: Shield,
    features: [
      "GST & Income Tax compliance",
      "Regulatory updates & alerts",
      "Audit preparation support",
      "Risk management guidance"
    ]
  },
  {
    id: "time-saving",
    title: "Time-Efficient",
    description: "Focus on growing your business while we handle all your accounting needs efficiently and within deadlines.",
    icon: Clock,
    features: [
      "Quick turnaround times",
      "Streamlined processes",
      "Deadline management",
      "Efficient workflow systems"
    ]
  },
  {
    id: "growth-focused",
    title: "Growth-Oriented",
    description: "We don't just maintain books; we provide strategic insights to help your business grow and thrive in the market.",
    icon: TrendingUp,
    features: [
      "Financial analysis & insights",
      "Business growth strategies",
      "Performance monitoring",
      "Strategic planning support"
    ]
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Get dedicated support whenever you need it with our responsive customer service and expert guidance.",
    icon: HeadphonesIcon,
    features: [
      "Round-the-clock availability",
      "Dedicated account managers",
      "Multi-channel support",
      "Quick response times"
    ]
  }
];