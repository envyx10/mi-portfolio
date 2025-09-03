import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useMouseTracker } from "@/hooks/useMouseTracker";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  cardType?: "skill" | "experience" | "project";
}

export function BaseCard({ children, className = "", cardType = "skill" }: BaseCardProps) {
  const { handleMouseMove, handleMouseLeave } = useMouseTracker();

  return (
    <div
      className={`${cardType}-card relative group cursor-pointer p-[2px] rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-white/10 card-mouse-tracker ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 card-gradient-effect"></div>

      <Card className="relative bg-black/40 border-transparent backdrop-blur-sm hover:bg-black/30 transition-all duration-300 h-full rounded-lg">
        <CardContent className="p-5 sm:p-6">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
