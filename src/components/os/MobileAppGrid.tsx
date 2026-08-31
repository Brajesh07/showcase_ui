"use client";

import { NavGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import { desktopSideIcons } from "@/lib/nav";

export function MobileAppGrid() {
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-5 px-5 pt-4">
      {desktopSideIcons.map((item) => (
        <OsNavLink
          key={item.href}
          href={item.href}
          className="flex flex-col items-center gap-1.5 text-ink active:scale-[0.94]"
        >
          <span className="flex aspect-square w-full max-w-[72px] items-center justify-center overflow-hidden rounded-squircle border-2 border-ink bg-cream">
            <span className="size-12">
              <NavGlyph icon={item.icon} />
            </span>
          </span>
          <span className="text-center text-icon-label leading-tight">
            {item.label}
          </span>
        </OsNavLink>
      ))}
    </div>
  );
}
