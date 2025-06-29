// src/data/foreign-accounting.ts
import { 
  Globe, 
  FileText, 
  TrendingUp, 
  Shield, 
  Building2, 
  Calculator,
  CheckCircle,
  Clock,
  Users,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { ForeignAccountingService, ForeignAccountingBenefit, ForeignAccountingStep } from '@/types/foreign-accounting';

export const foreignAccountingServices: ForeignAccountingService[] = [
  {
    icon: Globe,
    title: "International GAAP Compliance",
    description: "Ensure your financial statements comply with international accounting standards across multiple jurisdictions.",
    features: [
      "IFRS implementation and compliance",
      "US GAAP conversion services",
      "Multi-country financial reporting",
      "Regulatory compliance monitoring"
    ]
  },
  {
    icon: FileText,
    title: "Cross-Border Bookkeeping",
    description: "Comprehensive bookkeeping services for businesses operating across international borders.",
    features: [
      "Multi-currency transaction recording",
      "Foreign exchange management",
      "Inter-company reconciliation",
      "Subsidiary accounting coordination"
    ]
  },
  {
    icon: Calculator,
    title: "Transfer Pricing Documentation",
    description: "Expert documentation and compliance for transfer pricing regulations across countries.",
    features: [
      "Transfer pricing studies",
      "Documentation preparation",
      "Arm's length principle compliance",
      "Country-by-country reporting"
    ]
  },
  {
    icon: Building2,
    title: "Subsidiary Accounting",
    description: "Complete accounting solutions for foreign subsidiaries and branch operations.",
    features: [
      "Subsidiary setup and structuring",
      "Local statutory compliance",
      "Consolidation services",
      "Branch accounting management"
    ]
  },
  {
    icon: TrendingUp,
    title: "Foreign Investment Reporting",
    description: "Specialized reporting for foreign direct investments and overseas business activities.",
    features: [
      "FDI compliance reporting",
      "Investment valuation services",
      "Regulatory filing assistance",
      "Performance monitoring"
    ]
  },
  {
    icon: Shield,
    title: "Tax Treaty Optimization",
    description: "Leverage international tax treaties to minimize global tax burden and avoid double taxation.",
    features: [
      "Tax treaty analysis",
      "Double taxation relief",
      "Withholding tax optimization",
      "Cross-border tax planning"
    ]
  }
];

export const foreignAccountingBenefits: ForeignAccountingBenefit[] = [
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Deep knowledge of international accounting standards and regulations across multiple countries."
  },
  {
    icon: CheckCircle,
    title: "Compliance Assurance",
    description: "Stay compliant with local and international regulations while maintaining financial transparency."
  },
  {
    icon: Clock,
    title: "Time Zone Coverage",
    description: "Round-the-clock support across different time zones for seamless global operations."
  },
  {
    icon: Zap,
    title: "Cost Efficiency",
    description: "Reduce operational costs while maintaining high-quality international accounting standards."
  }
];

export const foreignAccountingProcess: ForeignAccountingStep[] = [
  {
    step: 1,
    title: "Global Assessment",
    description: "Comprehensive evaluation of your international operations and accounting requirements.",
    details: [
      "Review current international structure",
      "Identify compliance gaps and risks",
      "Assess reporting requirements by jurisdiction",
      "Evaluate existing accounting systems"
    ]
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Create a tailored foreign accounting strategy aligned with your global business objectives.",
    details: [
      "Design optimal accounting structure",
      "Develop compliance framework",
      "Plan implementation timeline",
      "Establish reporting protocols"
    ]
  },
  {
    step: 3,
    title: "System Implementation",
    description: "Deploy international accounting systems and processes across all jurisdictions.",
    details: [
      "Set up multi-currency accounting",
      "Implement consolidation processes",
      "Establish inter-company procedures",
      "Train local teams on new systems"
    ]
  },
  {
    step: 4,
    title: "Ongoing Management",
    description: "Continuous monitoring and management of your international accounting operations.",
    details: [
      "Regular compliance monitoring",
      "Monthly financial reporting",
      "Quarterly review meetings",
      "Annual strategy optimization"
    ]
  }
];