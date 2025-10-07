import { cn } from "@/lib/utils";
import * as React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

function AuthLayout({ children, title, subtitle, className }: AuthLayoutProps) {
  return (
    <div
      className={cn(
        "min-h-screen w-full scale-85 flex items-center justify-center p-4 sm:p-6 bg-background",
        className
      )}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground max-w-sm mx-auto px-2">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

export { AuthLayout };
