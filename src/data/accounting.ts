// src/data/accounting.ts
import { AccountingService, AccountingBenefit, AccountingProcess } from '@/types/accounting';

export const accountingServices: AccountingService[] = [
  {
    id: 'financial-accounting',
    title: 'Financial Accounting',
    description: 'Complete financial record maintenance and reporting services',
    icon: 'Calculator',
    features: [
      'General ledger maintenance',
      'Trial balance preparation',
      'Financial statements',
      'Account reconciliations'
    ]
  },
  {
    id: 'management-accounting',
    title: 'Management Accounting',
    description: 'Strategic financial analysis and business performance insights',
    icon: 'PieChart',
    features: [
      'Cost accounting',
      'Budget preparation',
      'Variance analysis',
      'Performance reports'
    ]
  },
  {
    id: 'tax-accounting',
    title: 'Tax Accounting',
    description: 'Comprehensive tax planning and compliance management',
    icon: 'FileText',
    features: [
      'Corporate tax planning',
      'GST compliance',
      'Tax return preparation',
      'Audit support'
    ]
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    description: 'Independent verification and assurance services',
    icon: 'Search',
    features: [
      'Internal audits',
      'External audit support',
      'Compliance audits',
      'Risk assessments'
    ]
  },
  {
    id: 'advisory-consulting',
    title: 'Advisory & Consulting',
    description: 'Strategic financial consulting for business growth',
    icon: 'TrendingUp',
    features: [
      'Financial planning',
      'Business valuation',
      'Merger & acquisition',
      'CFO services'
    ]
  },
  {
    id: 'regulatory-compliance',
    title: 'Regulatory Compliance',
    description: 'Stay compliant with all accounting standards and regulations',
    icon: 'Shield',
    features: [
      'IndAS compliance',
      'Companies Act compliance',
      'ROC filings',
      'Regulatory reporting'
    ]
  }
];

export const accountingBenefits: AccountingBenefit[] = [
  {
    id: 'expert-guidance',
    title: 'Expert Financial Guidance',
    description: 'Get insights from certified chartered accountants with extensive industry experience',
    icon: 'Award'
  },
  {
    id: 'cost-efficiency',
    title: 'Cost-Effective Solutions',
    description: 'Reduce accounting costs by up to 50% while maintaining highest quality standards',
    icon: 'DollarSign'
  },
  {
    id: 'accuracy-compliance',
    title: 'Accuracy & Compliance',
    description: 'Ensure 100% accuracy and full compliance with all regulatory requirements',
    icon: 'CheckCircle'
  },
  {
    id: 'scalable-services',
    title: 'Scalable Services',
    description: 'Our services grow with your business, from startup to enterprise level',
    icon: 'ArrowUp'
  }
];

export const accountingProcess: AccountingProcess[] = [
  {
    id: 'consultation',
    step: 1,
    title: 'Initial Consultation',
    description: 'Understand your business model, accounting needs, and current challenges',
    icon: 'MessageCircle'
  },
  {
    id: 'analysis',
    step: 2,
    title: 'Financial Analysis',
    description: 'Analyze existing financial processes and identify improvement opportunities',
    icon: 'BarChart'
  },
  {
    id: 'implementation',
    step: 3,
    title: 'System Implementation',
    description: 'Set up accounting systems, processes, and ensure smooth transition',
    icon: 'Settings'
  },
  {
    id: 'monitoring',
    step: 4,
    title: 'Ongoing Monitoring',
    description: 'Continuous monitoring, reporting, and strategic advisory support',
    icon: 'Monitor'
  }
];