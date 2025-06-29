// src/types/foreign-accounting.ts
import { LucideIcon } from 'lucide-react';

export interface ForeignAccountingService {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface ForeignAccountingBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ForeignAccountingStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}