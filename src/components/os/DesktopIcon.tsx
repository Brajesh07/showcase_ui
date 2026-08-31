"use client";

import { cn } from "@/lib/utils";
import { NavGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import type { NavItem } from "@/lib/nav";

type DesktopIconProps = {
  item: NavItem;
  active?: boolean;
};

export function DesktopIcon({ item, active }: DesktopIconProps) {
  return (
    <OsNavLink
      href={item.href}
      className={cn(
        "flex w-20 flex-col items-center gap-icon-gap text-ink outline-none",
        "active:scale-[0.94]",
        "focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-ink"
      )}
    >
      <span
        className={cn(
          "size-14 text-ink",
          active && "drop-shadow-[0_2px_0_rgba(33,29,23,0.18)]"
        )}
      >
        <NavGlyph icon={item.icon} />
      </span>
      <span className="text-center text-icon-label leading-tight">
        {item.label}
      </span>
    </OsNavLink>
  );
}
