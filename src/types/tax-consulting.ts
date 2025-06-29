// src/types/tax-consulting.ts
import { LucideIcon } from 'lucide-react';

export interface TaxConsultingService {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface TaxConsultingBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TaxConsultingStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}