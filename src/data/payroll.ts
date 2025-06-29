// src/data/payroll.ts
import { PayrollService, PayrollBenefit, PayrollProcess } from '@/types/payroll';

export const payrollServices: PayrollService[] = [
  {
    id: 'salary-processing',
    title: 'Salary Processing',
    description: 'Accurate and timely salary calculations with all statutory compliances',
    icon: 'Calculator',
    features: [
      'Monthly salary processing',
      'PF & ESI calculations',
      'Tax deductions (TDS)',
      'Overtime calculations'
    ]
  },
  {
    id: 'compliance-management',
    title: 'Compliance Management',
    description: 'Complete statutory compliance handling for worry-free operations',
    icon: 'Shield',
    features: [
      'PF returns filing',
      'ESI compliance',
      'Professional tax',
      'Labour law compliance'
    ]
  },
  {
    id: 'employee-management',
    title: 'Employee Management',
    description: 'Comprehensive employee data management and reporting',
    icon: 'Users',
    features: [
      'Employee database',
      'Attendance tracking',
      'Leave management',
      'Performance tracking'
    ]
  },
  {
    id: 'payroll-reports',
    title: 'Payroll Reports',
    description: 'Detailed reports and analytics for better decision making',
    icon: 'FileText',
    features: [
      'Monthly payroll reports',
      'Tax computation sheets',
      'Compliance reports',
      'Custom analytics'
    ]
  }
];

export const payrollBenefits: PayrollBenefit[] = [
  {
    id: 'cost-effective',
    title: 'Cost-Effective Solution',
    description: 'Reduce operational costs by up to 60% compared to in-house payroll management',
    icon: 'DollarSign'
  },
  {
    id: 'accuracy',
    title: '100% Accuracy Guaranteed',
    description: 'Our experienced team ensures error-free payroll processing with double verification',
    icon: 'CheckCircle'
  },
  {
    id: 'compliance',
    title: 'Complete Compliance',
    description: 'Stay updated with latest statutory changes and maintain full compliance',
    icon: 'Shield'
  },
  {
    id: 'security',
    title: 'Data Security',
    description: 'Bank-level security protocols to protect your sensitive employee data',
    icon: 'Lock'
  }
];

export const payrollProcess: PayrollProcess[] = [
  {
    id: 'consultation',
    step: 1,
    title: 'Initial Consultation',
    description: 'We understand your current payroll setup and specific requirements',
    icon: 'MessageSquare'
  },
  {
    id: 'setup',
    step: 2,
    title: 'System Setup',
    description: 'Configure payroll parameters, employee data, and compliance settings',
    icon: 'Settings'
  },
  {
    id: 'processing',
    step: 3,
    title: 'Monthly Processing',
    description: 'Process payroll, generate payslips, and handle all statutory filings',
    icon: 'Play'
  },
  {
    id: 'delivery',
    step: 4,
    title: 'Report Delivery',
    description: 'Deliver comprehensive reports and maintain ongoing support',
    icon: 'FileCheck'
  }
];