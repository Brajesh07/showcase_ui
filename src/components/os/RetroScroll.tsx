"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const MIN_THUMB = 22;
const STEP = 72;

function Arrow({ down }: { down?: boolean }) {
  return (
    <svg
      viewBox="0 0 10 10"
      className={cn("size-2.5", down && "rotate-180")}
      aria-hidden
    >
      <path fill="currentColor" d="M5 2.2 8.6 7.8H1.4Z" />
    </svg>
  );
}

export function RetroScroll({
  children,
  className,
  contentClassName,
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startY: number; startScroll: number } | null>(null);
  const [metrics, setMetrics] = useState({
    scrollTop: 0,
    scrollHeight: 1,
    clientHeight: 1,
    trackHeight: 1,
  });

  const sync = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport) return;
    setMetrics({
      scrollTop: viewport.scrollTop,
      scrollHeight: viewport.scrollHeight,
      clientHeight: viewport.clientHeight,
      trackHeight: track?.clientHeight ?? 1,
    });
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(viewport);
    if (viewport.firstElementChild) observer.observe(viewport.firstElementChild);
    if (trackRef.current) observer.observe(trackRef.current);
    viewport.addEventListener("scroll", sync, { passive: true });
    return () => {
      observer.disconnect();
      viewport.removeEventListener("scroll", sync);
    };
  }, [sync]);

  const overflow = Math.max(0, metrics.scrollHeight - metrics.clientHeight);
  const canScroll = overflow > 1;
  const thumbHeight = canScroll
    ? Math.max(
        MIN_THUMB,
        (metrics.clientHeight / metrics.scrollHeight) * metrics.trackHeight
      )
    : metrics.trackHeight;
  const maxThumb = Math.max(0, metrics.trackHeight - thumbHeight);
  const thumbTop =
    canScroll && maxThumb > 0
      ? (metrics.scrollTop / overflow) * maxThumb
      : 0;

  function scrollBy(delta: number) {
    viewportRef.current?.scrollBy({ top: delta, behavior: "auto" });
  }

  function onThumbPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!canScroll) return;
    event.preventDefault();
    event.stopPropagation();
    dragRef.current = {
      startY: event.clientY,
      startScroll: viewportRef.current?.scrollTop ?? 0,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onThumbPointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const viewport = viewportRef.current;
    if (!drag || !viewport || maxThumb <= 0) return;
    const ratio = overflow / maxThumb;
    viewport.scrollTop = drag.startScroll + (event.clientY - drag.startY) * ratio;
  }

  function onThumbPointerUp() {
    dragRef.current = null;
  }

  function onTrackPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!canScroll || event.target !== event.currentTarget) return;
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;
    const rect = track.getBoundingClientRect();
    const y = event.clientY - rect.top - thumbHeight / 2;
    const next = Math.min(maxThumb, Math.max(0, y));
    viewport.scrollTop = (next / maxThumb) * overflow;
  }

  return (
    <div className={cn("flex min-h-0 min-w-0 flex-1", className)}>
      <div
        ref={viewportRef}
        className={cn(
          "min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden",
          "scrollbar-none",
          contentClassName
        )}
      >
        <div>{children}</div>
      </div>
      <div className="flex w-[26px] shrink-0 flex-col border-l-2 border-ink bg-cream">
        <button
          type="button"
          aria-label="Scroll up"
          disabled={!canScroll}
          className="m-0.5 flex h-[20px] shrink-0 items-center justify-center border-2 border-ink bg-cream-alt text-ink shadow-[2px_2px_0_0_var(--rd-ink)] hover:bg-khaki disabled:text-muted"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => scrollBy(-STEP)}
        >
          <Arrow />
        </button>
        <div
          ref={trackRef}
          className="relative min-h-0 flex-1"
          onPointerDown={onTrackPointerDown}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-1 left-[7px] w-px bg-ink"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-1 right-[7px] w-px bg-ink"
          />
          <div
            role="scrollbar"
            aria-orientation="vertical"
            aria-valuenow={Math.round(metrics.scrollTop)}
            aria-valuemin={0}
            aria-valuemax={Math.round(overflow)}
            className="absolute left-1/2 z-10 flex w-full -translate-x-1/2 cursor-pointer justify-center"
            style={{ top: thumbTop, height: thumbHeight }}
            onPointerDown={onThumbPointerDown}
            onPointerMove={onThumbPointerMove}
            onPointerUp={onThumbPointerUp}
            onPointerCancel={onThumbPointerUp}
          >
            <span className="h-full w-0.5 bg-ink" />
          </div>
        </div>
        <button
          type="button"
          aria-label="Scroll down"
          disabled={!canScroll}
          className="m-0.5 flex h-[20px] shrink-0 items-center justify-center border-2 border-ink bg-cream-alt text-ink shadow-[2px_2px_0_0_var(--rd-ink)] hover:bg-khaki disabled:text-muted"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => scrollBy(STEP)}
        >
          <Arrow down />
        </button>
      </div>
    </div>
  );
}
