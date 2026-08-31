"use client";

import { useEffect, useRef, useState } from "react";
import { DesktopWidget } from "@/components/os/DesktopWidget";
import { NavGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import { desktopSideIcons } from "@/lib/nav";
import { cn } from "@/lib/utils";

function AppIcons({ columns }: { columns: 2 | 4 }) {
  return (
    <div
      className={cn(
        "grid gap-x-3 gap-y-4",
        columns === 4 ? "grid-cols-4" : "grid-cols-2",
      )}
    >
      {desktopSideIcons.map((item) => (
        <OsNavLink
          key={item.href}
          href={item.href}
          className="flex flex-col items-center gap-1.5 text-ink active:scale-[0.94]"
        >
          <span className="flex aspect-square w-full max-w-[72px] items-center justify-center overflow-hidden rounded-squircle border-2 border-ink bg-cream">
            <span className="size-11 min-[550px]:size-12">
              <NavGlyph icon={item.icon} />
            </span>
          </span>
          <span className="text-center text-icon-label leading-tight">
            {item.label}
          </span>
        </OsNavLink>
      ))}
    </div>
  );
}

export function MobileHomeCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(2);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 550px)");
    const sync = () => {
      const next = mq.matches ? 1 : 2;
      setPageCount(next);
      setPage(0);
      scrollerRef.current?.scrollTo({ left: 0 });
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function onScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const next = Math.round(el.scrollLeft / el.clientWidth);
    setPage(Math.min(pageCount - 1, Math.max(0, next)));
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <section className="flex w-full shrink-0 snap-center flex-col px-5 pt-2">
          <div className="flex min-[550px]:flex-row min-[550px]:items-start min-[550px]:gap-4 max-[550px]:h-72">
            <div className="mx-auto aspect-square w-full  min-[550px]:mx-0 min-[550px]:w-[46%] min-[550px]:max-w-none min-[550px]:shrink-0 h-full">
              <DesktopWidget variant="mobile" />
            </div>
            <div className="hidden min-h-0 min-[550px]:block min-[550px]:flex-1">
              <AppIcons columns={2} />
            </div>
          </div>
        </section>

        <section className="w-full shrink-0 snap-center px-5 pt-2 min-[550px]:hidden">
          <AppIcons columns={4} />
        </section>
      </div>

      <div className="flex justify-center gap-2 pb-2 pt-3">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to page ${i + 1}`}
            className={cn(
              "size-2 rounded-full border-2 border-ink",
              page === i ? "bg-ink" : "bg-cream",
            )}
            onClick={() => {
              const el = scrollerRef.current;
              if (!el) return;
              el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </div>
  );
}
