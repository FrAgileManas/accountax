// src/data/pricing-data.ts
import { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "2,999",
    billing: "month",
    buttonText: "Get Started",
    features: [
      "Up to 100 transactions per month",
      "Basic financial reports",
      "Email support",
      "GST filing assistance",
      "Bank reconciliation",
      "Invoice generation"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    description: "Best for growing businesses",
    price: "5,999",
    billing: "month",
    buttonText: "Choose Professional",
    features: [
      "Up to 500 transactions per month",
      "Advanced financial reports",
      "Priority phone & email support",
      "GST filing & compliance",
      "Multi-bank reconciliation",
      "Custom invoice templates",
      "Expense tracking",
      "Tax planning consultation",
      "Monthly financial review"
    ],
    additionalInfo: "Most popular choice for small to medium businesses"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For established businesses with complex needs",
    price: "12,999",
    billing: "month",
    buttonText: "Contact Sales",
    features: [
      "Unlimited transactions",
      "Comprehensive financial analytics",
      "Dedicated account manager",
      "Full compliance management",
      "Multi-entity consolidation",
      "Advanced automation",
      "Custom integrations",
      "Quarterly business reviews",
      "Priority audit support",
      "24/7 phone support"
    ],
    additionalInfo: "Includes dedicated onboarding and training"
  }
];