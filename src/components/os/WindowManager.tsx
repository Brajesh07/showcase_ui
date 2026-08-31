"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { hrefToWindowId, type WindowId } from "@/lib/nav";

export type WindowPhase =
  | "open"
  | "closing"
  | "minimizing"
  | "closed"
  | "minimized";

export const WINDOW_CLOSE_MS = 150;
export const WINDOW_MINIMIZE_MS = 320;

export type OsWindow = {
  id: WindowId;
  phase: WindowPhase;
  z: number;
  origin: { x: number; y: number };
};

type WindowManagerValue = {
  windows: OsWindow[];
  focusedId: WindowId | null;
  getWindow: (id: WindowId) => OsWindow | undefined;
  getPhase: (id: WindowId) => WindowPhase | "absent";
  isVisible: (id: WindowId) => boolean;
  open: (id: WindowId) => void;
  focus: (id: WindowId) => void;
  close: (id: WindowId) => void;
  minimize: (id: WindowId) => void;
  restore: (hrefOrId: string) => void;
};

const WindowManagerContext = createContext<WindowManagerValue | null>(null);

function nextOrigin(count: number) {
  const step = 28;
  return { x: (count % 6) * step, y: (count % 6) * step };
}

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<OsWindow[]>([
    { id: "welcome", phase: "open", z: 1, origin: { x: 0, y: 0 } },
  ]);
  const zRef = useRef(1);
  const timers = useRef<Record<string, number>>({});

  const clearTimer = useCallback((id: string) => {
    const existing = timers.current[id];
    if (existing) window.clearTimeout(existing);
    delete timers.current[id];
  }, []);

  const raise = useCallback((list: OsWindow[], id: WindowId) => {
    zRef.current += 1;
    return list.map((item) =>
      item.id === id ? { ...item, z: zRef.current } : item
    );
  }, []);

  const open = useCallback(
    (id: WindowId) => {
      clearTimer(id);
      setWindows((current) => {
        const existing = current.find((item) => item.id === id);
        if (existing) {
          return raise(
            current.map((item) =>
              item.id === id ? { ...item, phase: "open" } : item
            ),
            id
          );
        }
        zRef.current += 1;
        return [
          ...current,
          {
            id,
            phase: "open",
            z: zRef.current,
            origin: nextOrigin(current.length),
          },
        ];
      });
    },
    [clearTimer, raise]
  );

  const focus = useCallback(
    (id: WindowId) => {
      setWindows((current) => {
        if (!current.some((item) => item.id === id && item.phase === "open")) {
          return current;
        }
        return raise(current, id);
      });
    },
    [raise]
  );

  const close = useCallback(
    (id: WindowId) => {
      setWindows((current) => {
        const existing = current.find((item) => item.id === id);
        if (!existing || existing.phase !== "open") return current;
        return current.map((item) =>
          item.id === id ? { ...item, phase: "closing" } : item
        );
      });
      clearTimer(id);
      timers.current[id] = window.setTimeout(() => {
        setWindows((current) =>
          current.map((item) =>
            item.id === id ? { ...item, phase: "closed" } : item
          )
        );
      }, WINDOW_CLOSE_MS);
    },
    [clearTimer]
  );

  const minimize = useCallback(
    (id: WindowId) => {
      setWindows((current) => {
        const existing = current.find((item) => item.id === id);
        if (!existing || existing.phase !== "open") return current;
        return current.map((item) =>
          item.id === id ? { ...item, phase: "minimizing" } : item
        );
      });
      clearTimer(id);
      timers.current[id] = window.setTimeout(() => {
        setWindows((current) =>
          current.map((item) =>
            item.id === id ? { ...item, phase: "minimized" } : item
          )
        );
      }, WINDOW_MINIMIZE_MS);
    },
    [clearTimer]
  );

  const restore = useCallback(
    (hrefOrId: string) => {
      const id = hrefOrId.startsWith("/")
        ? hrefToWindowId(hrefOrId)
        : hrefOrId;
      open(id);
    },
    [open]
  );

  const focusedId = useMemo(() => {
    const openWindows = windows.filter((item) => item.phase === "open");
    if (openWindows.length === 0) return null;
    return openWindows.reduce((top, item) => (item.z > top.z ? item : top))
      .id;
  }, [windows]);

  const getWindow = useCallback(
    (id: WindowId) => windows.find((item) => item.id === id),
    [windows]
  );

  const getPhase = useCallback(
    (id: WindowId): WindowPhase | "absent" =>
      windows.find((item) => item.id === id)?.phase ?? "absent",
    [windows]
  );

  const isVisible = useCallback(
    (id: WindowId) => {
      const phase = windows.find((item) => item.id === id)?.phase;
      return phase === "open" || phase === "closing" || phase === "minimizing";
    },
    [windows]
  );

  const value = useMemo(
    () => ({
      windows,
      focusedId,
      getWindow,
      getPhase,
      isVisible,
      open,
      focus,
      close,
      minimize,
      restore,
    }),
    [
      windows,
      focusedId,
      getWindow,
      getPhase,
      isVisible,
      open,
      focus,
      close,
      minimize,
      restore,
    ]
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error("useWindowManager must be used within WindowManagerProvider");
  }
  return ctx;
}
