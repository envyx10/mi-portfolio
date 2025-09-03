import type { TitleProps } from "@/types/components";
import { SectionTitle } from "./SectionTitle";

export function AboutTitle({ title, description }: TitleProps) {
  return <SectionTitle title={title} description={description} />;
}
