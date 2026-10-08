export interface Skill {
  title: string;
  description: string;
  tags: string[];
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
  title: string;
  kind: string;
  description: string;
  image: string;
  technologies: string[]; 
  githubUrl?: string;
  websiteUrl?: string; 
}
