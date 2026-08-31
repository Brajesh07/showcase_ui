"use client";

import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import { ditherSourceToCanvas } from "@/lib/dither";
import { cn } from "@/lib/utils";

type DitheredPdfPreviewProps = {
  src: string;
  className?: string;
};

export function DitheredPdfPreview({ src, className }: DitheredPdfPreviewProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    setStatus("loading");
    host.replaceChildren();

    async function renderPage() {
      try {
        GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`PDF fetch failed: ${response.status}`);
        }
        const data = await response.arrayBuffer();
        const pdf = await getDocument({ data, disableRange: true, disableStream: true })
          .promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.25 });
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = viewport.width;
        pageCanvas.height = viewport.height;
        const canvasContext = pageCanvas.getContext("2d");
        if (!canvasContext) throw new Error("No canvas context");
        await page.render({
          canvas: pageCanvas,
          canvasContext,
          viewport,
        }).promise;
        if (cancelled || !host) return;
        const dithered = ditherSourceToCanvas(
          pageCanvas,
          pageCanvas.width,
          pageCanvas.height,
          2,
          720
        );
        dithered.setAttribute("role", "img");
        dithered.setAttribute("aria-label", "Dithered first page preview");
        dithered.className = "h-auto w-full";
        host.replaceChildren(dithered);
        setStatus("ready");
      } catch (error) {
        console.error("Dithered PDF preview failed", error);
        if (!cancelled) setStatus("error");
      }
    }

    void renderPage();
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-btn border-2 border-ink bg-cream",
        className
      )}
    >
      {status === "loading" ? (
        <p className="px-3 py-8 text-center text-caption text-muted">
          Developing preview…
        </p>
      ) : null}
      {status === "error" ? (
        <p className="px-3 py-8 text-center text-caption text-muted">
          Preview unavailable. Download the original PDF instead.
        </p>
      ) : null}
      <div ref={hostRef} className={status === "ready" ? "block" : "hidden"} />
    </div>
  );
}
