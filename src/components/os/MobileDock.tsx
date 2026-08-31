"use client";

import { cn } from "@/lib/utils";
import { NavGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import { dockItems } from "@/lib/nav";
import type { SceneId } from "@/lib/nav";

export function MobileDock({ activeScene }: { activeScene: SceneId }) {
  return (
    <nav
      aria-label="App dock"
      className="mx-4 mb-4 flex items-center justify-around rounded-dock border-2 border-ink bg-cream-alt px-2 py-2 md:hidden"
    >
      {dockItems.map((item) => {
        const active = item.scene === activeScene;
        return (
          <OsNavLink
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className="flex flex-col items-center gap-1 text-ink active:scale-[0.94]"
          >
            <span
              className={cn(
                "flex size-12 items-center justify-center overflow-hidden rounded-squircle border-2 border-ink bg-cream",
                active && "bg-khaki"
              )}
            >
              <span className="size-10">
                <NavGlyph icon={item.icon} />
              </span>
            </span>
            <span className="text-icon-label">{item.label}</span>
          </OsNavLink>
        );
      })}
    </nav>
  );
}
