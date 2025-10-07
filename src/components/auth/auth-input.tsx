import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface AuthInputProps extends React.ComponentProps<"input"> {
  rightContent?: React.ReactNode;
  containerClassName?: string;
}

function AuthInput({
  className,
  type = "text",
  rightContent,
  containerClassName,
  ...props
}: AuthInputProps) {
  return (
    <div className={cn("relative w-full", containerClassName)}>
      <Input
        type={type}
        variant="duolingo"
        className={cn(rightContent && "pr-16 sm:pr-20", className)}
        {...props}
      />
      {rightContent && (
        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2">
          {rightContent}
        </div>
      )}
    </div>
  );
}

export { AuthInput };
