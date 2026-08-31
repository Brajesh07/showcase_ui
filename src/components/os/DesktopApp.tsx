"use client";

import type { ReactNode } from "react";
import { Suspense } from "react";
import { WindowManagerProvider } from "@/components/os/WindowManager";
import { WallpaperProvider } from "@/components/os/WallpaperContext";
import { OsShell } from "@/components/os/OsShell";

export function DesktopApp({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <WindowManagerProvider>
        <WallpaperProvider>
          <OsShell>{children}</OsShell>
        </WallpaperProvider>
      </WindowManagerProvider>
    </Suspense>
  );
}
