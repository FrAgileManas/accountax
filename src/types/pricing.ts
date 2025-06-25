// src/types/pricing.ts
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  billing: string;
  buttonText: string;
  features: string[];
  additionalInfo?: string;
}