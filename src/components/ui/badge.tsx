import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent bg-success/20 text-success border-success/30",
        warning:
          "border-transparent bg-warning/20 text-warning border-warning/30",
        info:
          "border-transparent bg-info/20 text-info border-info/30",
        danger:
          "border-transparent bg-danger/20 text-danger border-danger/30",
        tier1:
          "border-transparent bg-primary/20 text-primary border-primary/30",
        tier2:
          "border-transparent bg-secondary/20 text-secondary border-secondary/30",
        tier3:
          "border-transparent bg-muted text-muted-foreground border-border",
        glass:
          "bg-muted/50 backdrop-blur-sm border-border/50 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
