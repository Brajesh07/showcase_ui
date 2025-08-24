import React from "react";
import clsx from "clsx";

export interface MorphingCardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * MorphingCard
 * Uses clip-path morph animation & subtle 3d tilt on hover.
 */
export const MorphingCard: React.FC<MorphingCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative group w-80 p-px rounded-3xl overflow-hidden",
        "before:absolute before:inset-0 before:bg-[conic-gradient(from_var(--angle),#0ea5e9,#6366f1,#0ea5e9)] before:animate-spin-slow before:opacity-60",
        "after:absolute after:inset-0 after:bg-neutral-900 after:rounded-[inherit]",
        className
      )}
      style={{ perspective: 1200 }}
    >
      <div className="relative rounded-[inherit] bg-neutral-900/80 backdrop-blur-xl shadow-xl clip-morph animate-morph group-hover:[animation-play-state:paused] transition-transform duration-500 group-hover:rotateX-6 group-hover:-rotateY-6">
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="text-sm text-neutral-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorphingCard;
