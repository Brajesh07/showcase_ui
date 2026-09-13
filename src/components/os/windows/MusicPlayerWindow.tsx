"use client";

/**
 * TODO(later): keep this player mounted above WindowChrome so audio
 * continues after minimize/close. Closing the window unmounts this
 * component and stops playback today.
 */

import { useEffect, useRef, useState } from "react";
import { DitheredImage } from "@/components/os/DitheredImage";
import { OsEmptyFrame } from "@/components/os/OsEmptyFrame";
import { OsNavLink } from "@/components/os/OsNavLink";
import { Button } from "@/components/ui/button";
import { MUSIC_DEFAULT_VOLUME, musicPlaylist } from "@/data/trash";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function Slider({
  label,
  value,
  max,
  onSeek,
}: {
  label: string;
  value: number;
  max: number;
  onSeek: (next: number) => void;
}) {
  const safeMax = max > 0 ? max : 1;
  const ratio = Math.min(1, Math.max(0, value / safeMax));

  return (
    <div className="flex items-center gap-2">
      <span className="w-10 shrink-0 text-caption">{label}</span>
      <div
        role="slider"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={Math.round(safeMax)}
        aria-valuenow={Math.round(value)}
        className="h-3.5 flex-1 cursor-pointer overflow-hidden rounded-full border-2 border-ink bg-cream-alt"
        onPointerDown={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          onSeek(((event.clientX - rect.left) / rect.width) * safeMax);
        }}
      >
        <div
          className="h-full rounded-full bg-sky-blue"
          style={{ width: `${Math.round(ratio * 100)}%` }}
        />
      </div>
    </div>
  );
}

export function MusicPlayerWindow() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(MUSIC_DEFAULT_VOLUME);
  const track = musicPlaylist[index];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const playingRef = useRef(playing);
  playingRef.current = playing;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return;
    audio.src = track.src;
    audio.load();
    setCurrent(0);
    if (playingRef.current) void audio.play();
  }, [index, track]);

  function goTo(nextIndex: number) {
    if (!musicPlaylist.length) return;
    setIndex((nextIndex + musicPlaylist.length) % musicPlaylist.length);
    setPlaying(true);
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio || !track) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    void audio.play();
    setPlaying(true);
  }

  if (!track) {
    return (
      <>
        <p className="text-caption text-muted">Playlist empty</p>
        <p className="mt-3 text-body">
          Drop mp3s in <span className="font-bold">/public/music</span> and add
          entries in <span className="font-bold">src/data/trash.ts</span>.
        </p>
        <div className="mt-6">
          <Button asChild variant="secondary">
            <OsNavLink href="/trash/hobby">Back to Hobby</OsNavLink>
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => goTo(index + 1)}
      />
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="mx-auto w-full max-w-[220px] shrink-0 overflow-hidden border-2 border-ink">
          {track.cover ? (
            <DitheredImage
              src={track.cover}
              alt={track.title}
              className="aspect-square w-full"
              cover
              maxWidth={320}
            />
          ) : (
            <OsEmptyFrame className="aspect-square" label="No cover" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-caption text-muted">Now playing</p>
          <h1 className="mt-1 text-h1">{track.title}</h1>
          <p className="mt-1 text-h2 text-muted">{track.artist}</p>
          <div className="mt-4 flex items-center gap-4 text-h2 leading-none">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => goTo(index - 1)}
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
              onClick={() => goTo(index + 1)}
            >
              ⏭
            </button>
          </div>
          <div className="mt-4 space-y-2">
            <Slider
              label={formatTime(current)}
              value={current}
              max={duration}
              onSeek={(next) => {
                const audio = audioRef.current;
                if (!audio) return;
                audio.currentTime = next;
                setCurrent(next);
              }}
            />
            <Slider
              label="vol"
              value={volume}
              max={1}
              onSeek={setVolume}
            />
          </div>
        </div>
      </div>
      <ul className="mt-6 space-y-1 border-2 border-ink bg-cream-alt">
        {musicPlaylist.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "flex w-full items-center justify-between px-3 py-2 text-left text-body",
                i === index && "bg-khaki"
              )}
            >
              <span className="truncate">{item.title}</span>
              <span className="ml-3 shrink-0 text-caption text-muted">
                {item.artist}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button asChild variant="secondary">
          <OsNavLink href="/trash/hobby">Back to Hobby</OsNavLink>
        </Button>
      </div>
    </>
  );
}
