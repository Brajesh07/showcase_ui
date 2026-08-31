"use client";

import { useEffect, useRef, useState } from "react";
import { coverSquareCanvas, ditherSourceToCanvas } from "@/lib/dither";
import { cn } from "@/lib/utils";

type DitheredImageProps = {
  src: string;
  alt: string;
  className?: string;
  canvasClassName?: string;
  pixelSize?: number;
  maxWidth?: number;
  cover?: boolean;
};

export function DitheredImage({
  src,
  alt,
  className,
  canvasClassName,
  pixelSize = 2,
  maxWidth = 480,
  cover = false,
}: DitheredImageProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.replaceChildren();
    setFailed(false);

    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      const source = cover
        ? coverSquareCanvas(
            image,
            image.naturalWidth,
            image.naturalHeight,
            Math.min(maxWidth, 320)
          )
        : image;
      const width = cover ? source.width : image.naturalWidth;
      const height = cover ? source.height : image.naturalHeight;
      const canvas = ditherSourceToCanvas(
        source,
        width,
        height,
        pixelSize,
        maxWidth
      );
      canvas.setAttribute("role", "img");
      canvas.setAttribute("aria-label", alt);
      canvas.className = cn("h-full w-full object-cover", canvasClassName);
      host.replaceChildren(canvas);
    };
    image.onerror = () => setFailed(true);
    image.src = src;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [alt, canvasClassName, cover, maxWidth, pixelSize, src]);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center border-2 border-ink bg-cream text-caption text-muted",
          className
        )}
      >
        Image missing
      </div>
    );
  }

  return <div ref={hostRef} className={className} />;
}
