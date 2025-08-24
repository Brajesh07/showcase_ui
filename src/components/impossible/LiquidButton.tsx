import React from "react";
import clsx from "clsx";

/**
 * LiquidButton
 * An "impossible" feeling button using layered pseudo-like spans, gooey filter, and animated gradients.
 */
export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden rounded-full transition-[filter,transform] duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 active:scale-95",
        "group",
        variant === "primary"
          ? "text-white"
          : "text-cyan-300 border border-cyan-300/40 backdrop-blur-sm",
        className
      )}
      {...rest}
    >
      <span className="absolute inset-0 -z-10">
        <span
          className={clsx(
            "absolute inset-0 animate-liquid bg-[radial-gradient(circle_at_30%_20%,#06b6d4_0%,transparent_60%),radial-gradient(circle_at_70%_80%,#3b82f6_0%,transparent_55%)] opacity-90",
            variant === "secondary" && "mix-blend-screen"
          )}
        />
        <span className="absolute inset-0 backdrop-blur-[6px] saturate-[1.4]" />
        <span className="absolute inset-0 border border-white/10 rounded-full shadow-[0_0_0_1px_#06b6d480,0_0_20px_6px_#0891b2_inset]" />
      </span>
      <span className="relative flex items-center gap-2">
        {children}
        <span className="h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_8px_2px_#a5f3fc] animate-pulse" />
      </span>
      <span className="pointer-events-none absolute -inset-6 -z-20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 bg-[conic-gradient(from_var(--angle),#06b6d4,#3b82f6,#06b6d4)] animate-spin-slow" />
    </button>
  );
};

export default LiquidButton;
