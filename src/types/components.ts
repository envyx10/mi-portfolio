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
  tech: string[]; // Array de tecnologías usadas
  technologies?: string[]; // Alias para compatibilidad
  github?: string;
  githubUrl?: string; // Alias para compatibilidad
  demo?: string;
  liveUrl?: string; // Alias para compatibilidad
  website?: string;
}
