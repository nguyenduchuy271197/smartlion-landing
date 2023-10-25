import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export default function SectionHeading({
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <h2 className={cn("text-2xl font-medium uppercase", className)} {...props}>
      {children}
    </h2>
  );
}
