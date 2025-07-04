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
  config?: any; // Fixed typo: was 'congfig'
  // Optional properties for enhanced templates
  color?: string;
  rating?: number;
  downloads?: string;
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

// Additional interfaces for enhanced template functionality
export interface TemplateTheme {
  primary: string;
  secondary: string;
  accent: string;
  headerBg: string;
  tableBg: string;
  textColor: string;
  borderColor: string;
}

export interface ExtendedTemplate extends InvoicingTemplate {
  theme: TemplateTheme;
}

// Generic data interfaces for template previews
export interface InvoiceData {
  company: {
    name: string;
    address: string;
    city: string;
    email: string;
    phone: string;
  };
  client: {
    name: string;
    contact: string;
    address: string;
    city: string;
    email: string;
  };
  invoice: {
    number: string;
    date: string;
    dueDate: string;
    project: string;
  };
  items: Array<{
    description: string;
    quantity: number;
    rate: number;
    amount: number;
  }>;
  totals: {
    subtotal: number;
    tax: number;
    taxRate: number;
    total: number;
  };
}