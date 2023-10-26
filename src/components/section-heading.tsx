import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export default function SectionHeading({
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold uppercase flex items-center gap-4",
        className
      )}
      {...props}
    >
      <span className="w-6 h-6 bg-primary rounded-full"></span>
      {children}
    </h2>
  );
}
