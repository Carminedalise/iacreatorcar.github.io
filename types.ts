
export type Language = 'it' | 'en';

/**
 * Fix: title and description made optional because they are managed 
 * via the translation system (translations.ts) based on the project id.
 */
export interface Project {
  id: string;
  title?: string;
  description?: string;
  links: {
    label: string;
    url: string;
    primary?: boolean;
    secondary?: boolean;
    accent?: boolean;
  }[];
  tags?: string[];
  color?: 'accent' | 'primary' | 'secondary' | 'neutral';
  credsNote?: boolean;
}

export interface TranslationSet {
  subtitle: string;
  missionTitle: string;
  missionText: string;
  secSkills: string;
  thCat: string;
  thTool: string;
  thSoft: string;
  s1: string;
  s2: string;
  secProjects: string;
  contactTitle: string;
  contactMsg: string;
  credsNote: string;
  footer: string;
  projects: Record<string, { title: string; description: string }>;
}
