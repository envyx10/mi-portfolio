// Shared component types
export interface Technology {
  name: string;
  IconComponent: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface TitleProps {
  title: string;
  description: string;
}

export interface Skill {
  iconType: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  websiteUrl?: string; 
  /** "YYYY-MM"; sin `to` = trabajo actual */
  from: string;
  to?: string;
}

export interface Project {
  id?: number;
  title: string;
  kind: string;
  description: string;
  image: string;
  technologies: string[]; 
  githubUrl?: string;
  liveUrl?: string;
  websiteUrl?: string; 
}
