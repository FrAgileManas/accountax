// src/data/bookkeeping.ts
import { BookkeepingService, BookkeepingBenefit, BookkeepingProcess } from '@/types/bookkeeping';

export const bookkeepingServices: BookkeepingService[] = [
  {
    id: 'daily-bookkeeping',
    title: 'Daily Bookkeeping',
    description: 'Complete daily transaction recording and account maintenance',
    icon: 'BookOpen',
    features: [
      'Transaction recording',
      'Bank reconciliation',
      'Expense tracking',
      'Invoice management'
    ]
  },
  {
    id: 'financial-statements',
    title: 'Financial Statements',
    description: 'Professional financial reports for better business insights',
    icon: 'BarChart3',
    features: [
      'Profit & Loss statements',
      'Balance sheets',
      'Cash flow statements',
      'Monthly reports'
    ]
  },
  {
    id: 'tax-preparation',
    title: 'Tax Preparation',
    description: 'Accurate tax filing and compliance management',
    icon: 'Receipt',
    features: [
      'GST returns filing',
      'Income tax preparation',
      'TDS compliance',
      'Audit support'
    ]
  },
  {
    id: 'accounts-management',
    title: 'Accounts Management',
    description: 'Complete accounts receivable and payable management',
    icon: 'CreditCard',
    features: [
      'Accounts receivable',
      'Accounts payable',
      'Vendor management',
      'Customer statements'
    ]
  }
];

export const bookkeepingBenefits: BookkeepingBenefit[] = [
  {
    id: 'real-time-insights',
    title: 'Real-Time Financial Insights',
    description: 'Get up-to-date financial information to make informed business decisions',
    icon: 'TrendingUp'
  },
  {
    id: 'cost-savings',
    title: 'Significant Cost Savings',
    description: 'Save up to 70% on bookkeeping costs compared to hiring full-time staff',
    icon: 'PiggyBank'
  },
  {
    id: 'expert-team',
    title: 'Expert Accounting Team',
    description: 'Certified accountants with years of experience handling diverse businesses',
    icon: 'Award'
  },
  {
    id: 'secure-cloud',
    title: 'Secure Cloud Access',
    description: 'Access your financial data anytime, anywhere with bank-level security',
    icon: 'Cloud'
  }
];

export const bookkeepingProcess: BookkeepingProcess[] = [
  {
    id: 'assessment',
    step: 1,
    title: 'Business Assessment',
    description: 'We analyze your current bookkeeping needs and business requirements',
    icon: 'Search'
  },
  {
    id: 'setup',
    step: 2,
    title: 'Account Setup',
    description: 'Set up your chart of accounts and integrate with your existing systems',
    icon: 'Settings'
  },
  {
    id: 'daily-work',
    step: 3,
    title: 'Daily Operations',
    description: 'Handle all daily bookkeeping tasks with regular quality checks',
    icon: 'Calendar'
  },
  {
    id: 'reporting',
    step: 4,
    title: 'Regular Reporting',
    description: 'Provide monthly reports and ongoing financial advisory support',
    icon: 'FileBarChart'
  }
];