// src/types/benefits.ts
import { LucideIcon } from "lucide-react";

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}