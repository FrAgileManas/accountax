// src/data/tax-consulting.ts
import { 
  Calculator, 
  FileText, 
  Shield, 
  TrendingUp, 
  Users, 
  Building,
  DollarSign,
  Clock,
  Award,
  Target
} from 'lucide-react';
import { TaxConsultingService, TaxConsultingBenefit, TaxConsultingStep } from '@/types/tax-consulting';

export const taxConsultingServices: TaxConsultingService[] = [
  {
    icon: Calculator,
    title: "Tax Planning & Strategy",
    description: "Proactive tax planning to minimize your tax burden and maximize savings throughout the year.",
    features: [
      "Annual tax planning sessions",
      "Quarterly tax projections",
      "Strategic timing of income and expenses",
      "Tax-efficient investment strategies"
    ]
  },
  {
    icon: FileText,
    title: "Tax Compliance & Filing",
    description: "Accurate and timely tax return preparation for individuals and businesses of all sizes.",
    features: [
      "Individual tax returns (ITR-1 to ITR-7)",
      "Corporate tax returns",
      "GST return filing",
      "TDS compliance and returns"
    ]
  },
  {
    icon: Shield,
    title: "Tax Audit Support",
    description: "Expert representation and support during tax audits and assessments.",
    features: [
      "Audit notice response",
      "Document preparation",
      "Tax authority representation",
      "Appeal filing and follow-up"
    ]
  },
  {
    icon: Building,
    title: "Business Tax Solutions",
    description: "Comprehensive tax solutions for businesses, from startups to established corporations.",
    features: [
      "Corporate restructuring advice",
      "Transfer pricing documentation",
      "International tax planning",
      "Merger & acquisition tax support"
    ]
  },
  {
    icon: TrendingUp,
    title: "Tax Optimization",
    description: "Identify opportunities to reduce tax liability through legal deductions and exemptions.",
    features: [
      "Deduction maximization",
      "Tax credit identification",
      "Loss optimization strategies",
      "Section-wise tax planning"
    ]
  },
  {
    icon: Users,
    title: "Advisory Services",
    description: "Expert tax advice and consulting for complex financial and business decisions.",
    features: [
      "Tax implications of business decisions",
      "Regulatory compliance guidance",
      "Cross-border tax advisory",
      "Tax-efficient business structuring"
    ]
  }
];

export const taxConsultingBenefits: TaxConsultingBenefit[] = [
  {
    icon: DollarSign,
    title: "Maximize Savings",
    description: "Our expert strategies help you legally minimize tax liability and maximize your savings."
  },
  {
    icon: Shield,
    title: "Ensure Compliance",
    description: "Stay compliant with all tax regulations and avoid penalties with our expert guidance."
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Focus on your core business while we handle all your tax-related requirements efficiently."
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Work with certified tax professionals with years of experience in tax consulting."
  }
];

export const taxConsultingProcess: TaxConsultingStep[] = [
  {
    step: 1,
    title: "Consultation & Assessment",
    description: "We begin with a comprehensive review of your current tax situation and financial goals.",
    details: [
      "Analysis of previous tax returns",
      "Review of current financial position",
      "Identification of tax planning opportunities",
      "Discussion of business/personal objectives"
    ]
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Based on our assessment, we develop a customized tax strategy tailored to your needs.",
    details: [
      "Tax planning roadmap creation",
      "Timeline for implementation",
      "Risk assessment and mitigation",
      "Expected savings calculation"
    ]
  },
  {
    step: 3,
    title: "Implementation",
    description: "We execute the tax strategy with precision, ensuring all requirements are met.",
    details: [
      "Document preparation and filing",
      "Coordination with relevant authorities",
      "Regular progress monitoring",
      "Adjustment as needed"
    ]
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "Continuous monitoring and support to ensure your tax strategy remains optimized.",
    details: [
      "Regular reviews and updates",
      "Quarterly check-ins",
      "Year-end tax planning",
      "Audit support when needed"
    ]
  }
];