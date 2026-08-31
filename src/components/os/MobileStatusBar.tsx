"use client";

import { useEffect, useState } from "react";
import { OsNavLink } from "@/components/os/OsNavLink";
import { BatteryGlyph, SettingsGlyph } from "@/components/os/OsIcons";

function formatClock(date: Date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export function MobileStatusBar() {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const tick = () => setTime(formatClock(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex h-6 items-center justify-between px-4 text-ink">
      <span className="text-icon-label tabular-nums">{time}</span>
      <div className="flex items-center gap-2">
        <BatteryGlyph />
        <OsNavLink
          href="/settings"
          aria-label="Settings"
          className="flex size-6 items-center justify-center active:scale-[0.94]"
        >
          <span className="size-5">
            <SettingsGlyph />
          </span>
        </OsNavLink>
      </div>
    </div>
  );
}
