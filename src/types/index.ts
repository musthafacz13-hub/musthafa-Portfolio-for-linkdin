/**
 * Data structures and types for Musthafa's Portfolio.
 * Designed to cleanly separate frontend presentation from future content population.
 */

export type ProjectPlatform = 'web' | 'android' | 'full-stack';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  platform: ProjectPlatform;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  category: string;
  description?: string;
  items: string[];
}

export interface ExperienceRecord {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export type ContactChannelType = 'email' | 'whatsapp' | 'github' | 'linkedin';

export interface ContactChannel {
  type: ContactChannelType;
  label: string;
  description: string;
  isConfigured: boolean;
  value?: string;
  url?: string;
}
