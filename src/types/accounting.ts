// src/types/accounting.ts
export interface AccountingService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface AccountingBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AccountingProcess {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}