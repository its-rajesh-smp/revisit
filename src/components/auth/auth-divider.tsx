import * as React from "react";
import { cn } from "@/lib/utils";

interface AuthDividerProps {
  text?: string;
  className?: string;
}

function AuthDivider({ text = "OR", className }: AuthDividerProps) {
  return (
    <div className={cn("flex items-center gap-4 my-5 sm:my-6", className)}>
      <div className="flex-1 h-[1px] bg-border" />
      <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase">
        {text}
      </span>
      <div className="flex-1 h-[1px] bg-border" />
    </div>
  );
}

export { AuthDivider };
