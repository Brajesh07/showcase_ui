"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export type OsDialogAction = {
  label: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
};

export function OsDialog({
  title,
  children,
  onClose,
  actions,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
  actions?: OsDialogAction[];
}) {
  const resolved = actions ?? [{ label: "OK", onClick: onClose }];

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      style={{
        backgroundColor: "color-mix(in srgb, var(--rd-ink) 20%, transparent)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="os-dialog-title"
        className="w-full max-w-sm border-2 border-ink bg-cream p-5 shadow-window"
      >
        <p className="text-caption text-muted">System dialog</p>
        <h2 id="os-dialog-title" className="mt-1 text-h2">
          {title}
        </h2>
        <div className="mt-3 text-body">{children}</div>
        <div className="mt-5 flex flex-wrap gap-3">
          {resolved.map((action) => (
            <Button
              key={action.label}
              type="button"
              variant={action.variant ?? "primary"}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
