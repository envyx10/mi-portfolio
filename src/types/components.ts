/** "YYYY-MM" */
export type YearMonth = `${number}-${number}`;

export type ProjectKind = "TFG" | "Prácticas" | "Diseño" | "Herramienta";

export interface Skill {
  title: string;
  description: string;
  tags: string[];
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  description: string;
  websiteUrl?: string; 
  /** sin `to` = trabajo actual */
  from: YearMonth;
  to?: YearMonth;
}

export interface Project {
  title: string;
  kind: ProjectKind;
  description: string;
  image: string;
  technologies: string[]; 
  githubUrl?: string;
  websiteUrl?: string; 
}
