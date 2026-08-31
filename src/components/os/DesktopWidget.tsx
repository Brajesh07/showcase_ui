"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HomeGlyph } from "@/components/os/OsIcons";
import { coverSquareCanvas, ditherSourceToCanvas } from "@/lib/dither";
import { DEFAULT_VOLUME, playlist } from "@/data/playlist";
import { cn } from "@/lib/utils";

function useClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    if (!now) return { time: "\u00a0", date: "\u00a0" };
    return {
      time: new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }).format(now),
      date: new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }).format(now),
    };
  }, [now]);
}

function useFakeLoad() {
  const [cpu, setCpu] = useState(0.14);
  const [ram, setRam] = useState(0.24);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCpu(0.08 + Math.random() * 0.14);
      setRam(0.16 + Math.random() * 0.16);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return { cpu, ram };
}

function Meter({
  label,
  value,
  fillClass,
  onSeek,
}: {
  label: string;
  value: number;
  fillClass: string;
  onSeek?: (next: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-8 shrink-0 text-caption">{label}</span>
      <div
        role={onSeek ? "slider" : "meter"}
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value * 100)}
        className={cn(
          "h-3.5 flex-1 overflow-hidden rounded-full border-2 border-ink bg-cream-alt",
          onSeek && "cursor-pointer"
        )}
        onPointerDown={
          onSeek
            ? (event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                onSeek(
                  Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
                );
              }
            : undefined
        }
      >
        <div
          className={cn("h-full rounded-full", fillClass)}
          style={{ width: `${Math.round(value * 100)}%` }}
        />
      </div>
    </div>
  );
}

export function DesktopWidget({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const isMobile = variant === "mobile";
  const { time, date } = useClock();
  const { cpu, ram } = useFakeLoad();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const volumeRef = useRef(DEFAULT_VOLUME);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const track = playlist[index];
  volumeRef.current = volume;

  function paint() {
    const video = videoRef.current;
    const host = hostRef.current;
    if (!video || !host || video.readyState < 2) return;
    const size = 96;
    const square = coverSquareCanvas(
      video,
      video.videoWidth || size,
      video.videoHeight || size,
      size
    );
    const canvas = ditherSourceToCanvas(square, size, size, 2, size);
    canvas.className = "h-full w-full object-cover";
    host.replaceChildren(canvas);
  }

  function startTick() {
    window.cancelAnimationFrame(frameRef.current);
    const tick = () => {
      const video = videoRef.current;
      if (!video || video.paused) return;
      paint();
      frameRef.current = window.requestAnimationFrame(tick);
    };
    frameRef.current = window.requestAnimationFrame(tick);
  }

  function playTrack(src: string) {
    audioRef.current?.pause();
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volumeRef.current;
    audioRef.current = audio;
    void audio.play();

    const video = videoRef.current;
    if (video) {
      video.pause();
      video.muted = true;
      video.loop = true;
      video.src = src;
      void video.play().then(() => {
        paint();
        startTick();
      });
    }
  }

  function goTo(nextIndex: number) {
    const next = playlist[nextIndex];
    if (!next) return;
    setIndex(nextIndex);
    setPlaying(true);
    playTrack(next.src);
  }

  function togglePlay() {
    if (playing) {
      audioRef.current?.pause();
      videoRef.current?.pause();
      window.cancelAnimationFrame(frameRef.current);
      setPlaying(false);
      return;
    }
    goTo(index);
  }

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(frameRef.current);
      audioRef.current?.pause();
    };
  }, []);

  return (
    <aside
      className={cn(
        "pointer-events-auto relative rounded-window border-2 border-ink bg-cream",
        isMobile
          ? "flex h-full w-full flex-col overflow-hidden px-3 py-3"
          : "absolute left-8 top-8 z-10 hidden w-[228px] flex-col px-4 py-4 md:flex"
      )}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none absolute h-px w-px opacity-0"
      />
      <div className={cn("min-w-0", isMobile && "flex flex-1 flex-col")}>
        <div className={cn("mx-auto", isMobile ? "size-12" : "size-14")}>
          <HomeGlyph />
        </div>
        <p className={cn("text-center text-h2", isMobile ? "mt-2" : "mt-3")}>
          {time}
        </p>
        <p className="text-center text-caption text-muted">{date}</p>

        <div className={cn("space-y-2", isMobile ? "mt-3" : "mt-4")}>
          <Meter
            label="vol"
            value={volume}
            fillClass="bg-sky-blue"
            onSeek={setVolume}
          />
          <Meter label="cpu" value={cpu} fillClass="bg-grass-light" />
          <Meter label="ram" value={ram} fillClass="bg-salmon-pink" />
        </div>
      </div>

      <div className={cn("flex items-center gap-3", isMobile ? "mt-auto" : "mt-5")}>
        <div className="size-12 shrink-0 overflow-hidden rounded-[4px] border-2 border-ink bg-cream">
          <div ref={hostRef} className="h-full w-full" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-caption">{track.title}</p>
          <div className="mt-1 flex items-center gap-3 text-h2 leading-none">
            <button
              type="button"
              aria-label="Previous"
              onClick={() =>
                goTo((index - 1 + playlist.length) % playlist.length)
              }
            >
              ⏮
            </button>
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play"}
              onClick={togglePlay}
            >
              {playing ? "⏸" : "▶"}
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => goTo((index + 1) % playlist.length)}
            >
              ⏭
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
