import type { TitleProps } from "@/types/components";
import { SectionTitle } from "./SectionTitle";

export function ProjectsTitle({ title, description }: TitleProps) {
  return <SectionTitle title={title} description={description} />;
}
