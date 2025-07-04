import { InvoicingContent } from "@/types/invoicing";

export const invoicingData: InvoicingContent = {
  hero: {
    title: "Professional Invoicing Solutions",
    subtitle: "Create, Send & Track Invoices Effortlessly",
    description: "Streamline your billing process with our comprehensive invoicing platform. From professional templates to automated reminders, everything you need to get paid faster."
  },

  stats: [
    {
      id: "1",
      label: "Faster Payments",
      value: "3x",
      description: "Get paid 3 times faster with automated follow-ups"
    },
    {
      id: "2",
      label: "Time Saved",
      value: "75",
      suffix: "%",
      description: "Reduce invoicing time with automation"
    },
    {
      id: "3",
      label: "Invoice Templates",
      value: "50",
      suffix: "+",
      description: "Professional templates for every business"
    },
    {
      id: "4",
      label: "Payment Methods",
      value: "10",
      suffix: "+",
      description: "Multiple payment options for clients"
    }
  ],

  features: [
    {
      id: "1",
      title: "Smart Invoice Creation",
      description: "Create professional invoices in seconds with intelligent templates and auto-fill features.",
      icon: "📄",
      benefits: [
        "Drag & drop invoice builder",
        "Auto-calculate taxes and totals",
        "Custom branding options",
        "Multi-currency support"
      ]
    },
    {
      id: "2",
      title: "Automated Workflows",
      description: "Set up automated invoice delivery, payment reminders, and follow-up sequences.",
      icon: "⚡",
      benefits: [
        "Scheduled invoice sending",
        "Smart payment reminders",
        "Escalation workflows",
        "Auto-generated reports"
      ]
    },
    {
      id: "3",
      title: "Payment Integration",
      description: "Accept payments directly through invoices with integrated payment gateways.",
      icon: "💳",
      benefits: [
        "Online payment buttons",
        "Multiple payment methods",
        "Instant payment notifications",
        "Secure payment processing"
      ]
    },
    {
      id: "4",
      title: "Real-time Tracking",
      description: "Monitor invoice status, payment history, and client interactions in real-time.",
      icon: "📊",
      benefits: [
        "Invoice status tracking",
        "Payment analytics",
        "Client communication log",
        "Overdue alerts"
      ]
    }
  ],

  benefits: [
    {
      id: "1",
      title: "Faster Cash Flow",
      description: "Get paid 3x faster with automated reminders and integrated payment options.",
      icon: "💰"
    },
    {
      id: "2",
      title: "Professional Image",
      description: "Impress clients with beautifully designed, branded invoices that reflect your business.",
      icon: "✨"
    },
    {
      id: "3",
      title: "Reduced Errors",
      description: "Eliminate manual errors with automated calculations and data validation.",
      icon: "🎯"
    },
    {
      id: "4",
      title: "Time Savings",
      description: "Save hours each week with automated invoicing workflows and templates.",
      icon: "⏱️"
    },
    {
      id: "5",
      title: "Better Organization",
      description: "Keep all your invoices, payments, and client data organized in one place.",
      icon: "📁"
    },
    {
      id: "6",
      title: "Compliance Ready",
      description: "Stay compliant with tax regulations and accounting standards automatically.",
      icon: "📋"
    }
  ],

  // Extended templates with additional properties (backward compatible)
  templates: [
    {
      id: "1",
      name: "Professional Services",
      description: "Perfect for consultants, agencies, and service providers",
      category: "Services",
      // New optional properties
      color: "blue",
      rating: 4.8,
      downloads: "2.1k"
    },
    {
      id: "2",
      name: "Product Sales",
      description: "Ideal for product-based businesses and e-commerce",
      category: "Products",
      color: "green",
      rating: 4.9,
      downloads: "1.8k"
    },
    {
      id: "3",
      name: "Freelancer",
      description: "Simple, clean design for freelancers and contractors",
      category: "Freelance",
      color: "purple",
      rating: 4.7,
      downloads: "3.2k"
    },
    {
      id: "4",
      name: "Modern Corporate",
      description: "Contemporary design for modern businesses",
      category: "Corporate",
      color: "slate",
      rating: 4.6,
      downloads: "1.5k"
    },
    {
      id: "5",
      name: "Creative Agency",
      description: "Stylish template for creative professionals",
      category: "Creative",
      color: "orange",
      rating: 4.8,
      downloads: "2.3k"
    },
    {
      id: "6",
      name: "Minimal Clean",
      description: "Clean, minimalist design for any business",
      category: "Minimal",
      color: "gray",
      rating: 4.5,
      downloads: "1.9k"
    }
  ],

  plans: [
    {
      id: "1",
      name: "Starter",
      price: "₹999",
      period: "month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "50 invoices per month",
        "5 invoice templates",
        "Basic payment integration",
        "Email support",
        "Invoice tracking"
      ],
      buttonText: "Start Free Trial"
    },
    {
      id: "2",
      name: "Professional",
      price: "₹1,999",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited invoices",
        "25+ invoice templates",
        "Advanced payment options",
        "Automated reminders",
        "Priority support",
        "Custom branding",
        "Analytics dashboard"
      ],
      isPopular: true,
      buttonText: "Start Free Trial"
    },
    {
      id: "3",
      name: "Enterprise",
      price: "₹3,999",
      period: "month",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Multi-user access",
        "API integration",
        "Custom workflows",
        "Dedicated account manager",
        "White-label options",
        "Advanced reporting"
      ],
      buttonText: "Contact Sales"
    }
  ]
};