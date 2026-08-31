"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DesktopIcon } from "@/components/os/DesktopIcon";
import { DesktopWidget } from "@/components/os/DesktopWidget";
import { Dock } from "@/components/os/Dock";
import { MobileHomeCarousel } from "@/components/os/MobileHomeCarousel";
import { MobileDock } from "@/components/os/MobileDock";
import { MobileStatusBar } from "@/components/os/MobileStatusBar";
import { SceneBackdrop } from "@/components/os/SceneBackdrop";
import { DesktopWindowLayer } from "@/components/os/DesktopWindowLayer";
import { useWindowManager } from "@/components/os/WindowManager";
import { useWallpaper } from "@/components/os/WallpaperContext";
import {
  desktopSideIcons,
  hrefToWindowId,
  sceneFromPath,
  windowIdToScene,
} from "@/lib/nav";
import { profile } from "@/data/site";

export function OsShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { windows, focusedId, restore } = useWindowManager();
  const { wallpaper } = useWallpaper();
  const desktopScene = focusedId ? windowIdToScene(focusedId) : "home";
  const mobileScene = sceneFromPath(pathname);
  const isMobileHome = pathname === "/";

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    if (pathname === "/") return;
    restore(hrefToWindowId(pathname));
    router.replace("/");
  }, [pathname, restore, router]);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <SceneBackdrop wallpaper={wallpaper} />

      <DesktopWidget />

      <aside className="pointer-events-auto absolute right-8 top-8 z-10 hidden flex-col gap-5 md:flex">
        {desktopSideIcons.map((item) => (
          <DesktopIcon
            key={item.href}
            item={item}
            active={item.scene === desktopScene}
          />
        ))}
      </aside>

      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        <DesktopWindowLayer windows={windows} stacked />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col md:hidden">
        <MobileStatusBar />

        {isMobileHome ? (
          <div className="flex min-h-0 flex-1 flex-col">
            <p className="px-5 pb-1 pt-3 text-h2">{profile.name}</p>
            <MobileHomeCarousel />
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        )}

        <MobileDock activeScene={mobileScene} />
      </div>

      <Dock activeScene={desktopScene} />
    </div>
  );
}
