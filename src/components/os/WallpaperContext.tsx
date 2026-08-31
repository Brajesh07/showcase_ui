"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_WALLPAPER,
  isWallpaperId,
  type WallpaperId,
} from "@/data/wallpapers";

const STORAGE_KEY = "rd-wallpaper";

type WallpaperContextValue = {
  wallpaper: WallpaperId;
  setWallpaper: (id: WallpaperId) => void;
};

const WallpaperContext = createContext<WallpaperContextValue | null>(null);

export function WallpaperProvider({ children }: { children: ReactNode }) {
  const [wallpaper, setWallpaperState] = useState<WallpaperId>(DEFAULT_WALLPAPER);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isWallpaperId(stored)) setWallpaperState(stored);
  }, []);

  const setWallpaper = useCallback((id: WallpaperId) => {
    setWallpaperState(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const value = useMemo(
    () => ({ wallpaper, setWallpaper }),
    [setWallpaper, wallpaper]
  );

  return (
    <WallpaperContext.Provider value={value}>{children}</WallpaperContext.Provider>
  );
}

export function useWallpaper() {
  const context = useContext(WallpaperContext);
  if (!context) {
    throw new Error("useWallpaper must be used within WallpaperProvider");
  }
  return context;
}
