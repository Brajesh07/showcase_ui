"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavGlyph } from "@/components/os/OsIcons";
import { useWindowManager } from "@/components/os/WindowManager";
import { dockItems, hrefToWindowId } from "@/lib/nav";
import type { SceneId } from "@/lib/nav";

export function Dock({ activeScene }: { activeScene: SceneId }) {
  const { getPhase, focusedId, restore } = useWindowManager();
  const router = useRouter();
  const pathname = usePathname();
  const [bounceId, setBounceId] = useState<string | null>(null);

  return (
    <nav
      aria-label="Desktop dock"
      className="pointer-events-auto absolute bottom-5 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-3 rounded-dock border-2 border-ink bg-cream-alt px-4 py-2 md:flex"
    >
      {dockItems.map((item) => {
        const id = hrefToWindowId(item.href);
        const phase = getPhase(id);
        const active = item.scene === activeScene && focusedId === id;
        const running =
          phase === "open" ||
          phase === "minimized" ||
          phase === "minimizing" ||
          phase === "closing";
        const bouncing = bounceId === id;

        return (
          <button
            key={item.href}
            type="button"
            title={item.label}
            aria-current={active ? "true" : undefined}
            aria-label={item.label}
            className="relative flex size-11 items-center justify-center text-ink"
            onClick={() => {
              const current = getPhase(id);
              const isFresh = current === "absent" || current === "closed";
              if (isFresh) {
                setBounceId(id);
                window.setTimeout(() => {
                  setBounceId((value) => (value === id ? null : value));
                }, 700);
              }
              restore(id);
              if (pathname !== "/") router.replace("/");
            }}
          >
            <span
              className={cn(
                "size-11",
                active && "scale-105",
                bouncing && "animate-dock-bounce"
              )}
            >
              <NavGlyph icon={item.icon} />
            </span>
            {running ? (
              <span className="absolute -bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-ink" />
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}
