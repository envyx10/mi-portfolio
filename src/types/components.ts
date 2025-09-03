// Tipos compartidos para componentes
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
}

export interface Experience {
  iconType: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  technologies: string[]; // Array de tecnologías usadas
  githubUrl?: string;
  liveUrl?: string;
}
