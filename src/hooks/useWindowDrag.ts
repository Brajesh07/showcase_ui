"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

const DESKTOP_MIN = 768;

export function useWindowDrag() {
  const start = useRef({ x: 0, y: 0, ox: 0, oy: 0 });
  const dragging = useRef(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const onPointerMove = useCallback((event: PointerEvent) => {
    if (!dragging.current) return;
    setOffset({
      x: start.current.ox + (event.clientX - start.current.x),
      y: start.current.oy + (event.clientY - start.current.y),
    });
  }, []);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("pointercancel", onPointerUp);
  }, [onPointerMove]);

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (event.button !== 0) return;
      if (window.innerWidth < DESKTOP_MIN) return;
      event.preventDefault();
      dragging.current = true;
      setIsDragging(true);
      start.current = {
        x: event.clientX,
        y: event.clientY,
        ox: offset.x,
        oy: offset.y,
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
    },
    [offset.x, offset.y, onPointerMove, onPointerUp]
  );

  useEffect(() => {
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  return {
    offset,
    dragging: isDragging,
    titleBarProps: {
      onPointerDown,
    },
  };
}
