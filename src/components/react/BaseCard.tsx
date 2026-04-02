import type { ReactNode } from "react";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  cardType?: "skill" | "experience" | "project";
}

export function BaseCard({ children, className = "", cardType = "skill" }: BaseCardProps) {
  return (
    <div
      className={`${cardType}-card group rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-zinc-100 hover:border-zinc-700 transition-colors duration-200 ${className}`}
    >
      <div className="p-5 sm:p-6">
        {children}
      </div>
    </div>
  );
}
