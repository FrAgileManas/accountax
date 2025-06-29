export interface InvoicingFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface InvoicingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface InvoicingBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InvoicingTemplate {
  id: string;
  name: string;
  description: string;
  image?: string;
  category: string;
}

export interface InvoicingStats {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface InvoicingContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: InvoicingFeature[];
  benefits: InvoicingBenefit[];
  templates: InvoicingTemplate[];
  stats: InvoicingStats[];
  plans: InvoicingPlan[];
}