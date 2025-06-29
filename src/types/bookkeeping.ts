// src/types/bookkeeping.ts
export interface BookkeepingService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BookkeepingBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BookkeepingProcess {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}