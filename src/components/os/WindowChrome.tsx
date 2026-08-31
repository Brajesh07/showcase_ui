"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useWindowDrag } from "@/hooks/useWindowDrag";
import { RetroScroll } from "@/components/os/RetroScroll";
import { useWindowManager } from "@/components/os/WindowManager";
import type { WindowId } from "@/lib/nav";

type WindowChromeProps = {
  windowId: WindowId;
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  origin?: { x: number; y: number };
  zIndex?: number;
  stacked?: boolean;
  size?: "default" | "browser" | "doc";
};

function TrafficLights({
  onClose,
  onMinimize,
  disabled,
}: {
  onClose: () => void;
  onMinimize: () => void;
  disabled: boolean;
}) {
  return (
    <div
      className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2"
      style={{ gap: "var(--rd-traffic-gap)" }}
    >
      <button
        type="button"
        aria-label="Close window"
        disabled={disabled}
        className="rounded-full border-2 border-ink bg-soft-red disabled:opacity-50"
        style={{
          width: "var(--rd-traffic-size)",
          height: "var(--rd-traffic-size)",
        }}
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      />
      <button
        type="button"
        aria-label="Minimize window"
        disabled={disabled}
        className="rounded-full border-2 border-ink bg-mustard disabled:opacity-50"
        style={{
          width: "var(--rd-traffic-size)",
          height: "var(--rd-traffic-size)",
        }}
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          onMinimize();
        }}
      />
    </div>
  );
}

export function WindowChrome({
  windowId,
  title,
  children,
  className,
  bodyClassName,
  origin = { x: 0, y: 0 },
  zIndex = 20,
  stacked = false,
  size = "default",
}: WindowChromeProps) {
  const { getPhase, isVisible, close, minimize, focus } = useWindowManager();
  const phase = getPhase(windowId);
  const visible = isVisible(windowId);
  const { offset, dragging, titleBarProps } = useWindowDrag();
  const animating = phase === "closing" || phase === "minimizing";

  if (!visible) return null;

  return (
    <section
      className={cn(
        "flex min-h-0 flex-col",
        stacked
          ? size === "browser"
            ? "pointer-events-auto absolute h-[80vh] w-[80vw]"
            : size === "doc"
              ? "pointer-events-auto absolute w-[min(46rem,calc(100%-6rem))]"
              : "pointer-events-auto absolute w-[min(36rem,calc(100%-8rem))]"
          : "h-full md:h-auto"
      )}
      style={{
        zIndex,
        left: stacked ? `calc(50% + ${origin.x}px)` : undefined,
        top: stacked ? `calc(18% + ${origin.y}px)` : undefined,
        transform: stacked
          ? animating
            ? undefined
            : `translate(-50%, 0) translate(${offset.x}px, ${offset.y}px)`
          : animating
            ? undefined
            : `translate(${offset.x}px, ${offset.y}px)`,
      }}
      onPointerDown={() => focus(windowId)}
    >
      <div
        className={cn(
          "flex min-h-0 flex-col overflow-hidden border-window border-ink bg-cream text-ink",
          stacked
            ? size === "browser"
              ? "h-full max-h-[80vh] rounded-window shadow-window"
              : size === "doc"
                ? "max-h-[min(760px,80vh)] rounded-window shadow-window"
                : "max-h-[min(640px,70vh)] rounded-window shadow-window"
            : "h-full max-md:rounded-none max-md:border-x-0 max-md:border-b-0 max-md:shadow-none md:max-h-[min(640px,70vh)] md:rounded-window md:shadow-window",
          phase === "open" && (stacked ? "animate-window-pop" : "md:animate-window-pop"),
          phase === "closing" && "animate-window-close",
          phase === "minimizing" && "origin-bottom animate-window-minimize",
          className
        )}
      >
        <header
          className={cn(
            "relative z-10 flex h-title-bar shrink-0 items-center justify-center px-12",
            "md:cursor-grab md:select-none",
            dragging && "md:cursor-grabbing"
          )}
          style={{ touchAction: "none" }}
          {...titleBarProps}
        >
          <TrafficLights
            disabled={animating}
            onClose={() => close(windowId)}
            onMinimize={() => minimize(windowId)}
          />
          <h2 className="truncate text-center text-window-title">{title}</h2>
        </header>
        {size === "browser" ? (
          <div
            className={cn(
              "flex min-h-0 flex-1 flex-col overflow-hidden px-6 pb-6",
              bodyClassName
            )}
          >
            {children}
          </div>
        ) : (
          <RetroScroll contentClassName={cn("px-6 pb-6", bodyClassName)}>
            {children}
          </RetroScroll>
        )}
      </div>
    </section>
  );
}
