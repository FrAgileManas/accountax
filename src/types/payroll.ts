// src/types/payroll.ts
export interface PayrollService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PayrollBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PayrollProcess {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}