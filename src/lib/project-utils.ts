import type { Project } from "@/types/components";

export function getProjectPrimaryUrl(project: Project): string | null {
  if (project.liveUrl && project.liveUrl !== "#") return project.liveUrl;
  if (project.websiteUrl && project.websiteUrl !== "#") return project.websiteUrl;
  if (project.githubUrl && project.githubUrl !== "#") return project.githubUrl;
  return null;
}

export function hasValidUrl(url: string | undefined): boolean {
  return Boolean(url && url !== "#");
}

export function scrollToSection(sectionId: string): void {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
