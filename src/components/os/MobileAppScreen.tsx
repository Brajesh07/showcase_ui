import type { ReactNode } from "react";
import { RetroScroll } from "@/components/os/RetroScroll";

export function MobileAppScreen({
  title,
  children,
  flush = false,
}: {
  title: string;
  children: ReactNode;
  flush?: boolean;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex h-11 shrink-0 items-center justify-center px-4">
        <h1 className="text-window-title">{title}</h1>
      </header>
      {flush ? (
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 pb-3">
          {children}
        </div>
      ) : (
        <RetroScroll contentClassName="px-5 pb-4">{children}</RetroScroll>
      )}
    </div>
  );
}
