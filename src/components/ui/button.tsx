import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-btn border-2 px-5 py-2.5 text-body font-bold transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  {
    variants: {
      variant: {
        primary:
          "border-ink bg-ink text-cream hover:-translate-y-px active:translate-y-px active:shadow-none",
        secondary: "border-ink bg-cream-alt text-ink hover:-translate-y-px",
        disabled:
          "pointer-events-none border-disabled bg-disabled text-disabled-text",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const resolved = disabled ? "disabled" : variant;

    return (
      <Comp
        className={cn(buttonVariants({ variant: resolved }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
