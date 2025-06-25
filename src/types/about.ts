export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image?: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutStats {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface AboutContent {
  mission: string;
  vision: string;
  story: string;
  stats: AboutStats[];
  values: CompanyValue[];
  team: TeamMember[];
}