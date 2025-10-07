import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialButtonProps extends React.ComponentProps<"button"> {
  provider: "google" | "facebook";
  icon?: React.ReactNode;
}

function SocialButton({
  className,
  provider,
  icon,
  children,
  ...props
}: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      size="duolingo"
      className={cn(
        "flex items-center justify-center gap-2 sm:gap-3 rounded-2xl font-bold",
        className
      )}
      {...props}
    >
      {icon || (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          {provider === "google" ? (
            <path
              d="M19.99 10.187c0-.82-.069-1.417-.216-2.037h-9.62v3.591h5.62c-.113.9-.683 2.25-1.965 3.158l-.017.114 2.85 2.217.198.019c1.817-1.68 2.865-4.149 2.865-7.062z"
              fill="#4285F4"
            />
          ) : (
            <path
              d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1.5 10.5v2.75c0 .414-.336.75-.75.75H9.25c-.414 0-.75-.336-.75-.75v-2.75h-2.75c-.414 0-.75-.336-.75-.75V9.25c0-.414.336-.75.75-.75h2.75v-2.75c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75v2.75h2.75c.414 0 .75.336.75.75v.5c0 .414-.336.75-.75.75H11.5z"
              fill="#4267B2"
            />
          )}
        </svg>
      )}
      {children}
    </Button>
  );
}

export { SocialButton };
