"use client";

import { DitheredImage } from "@/components/os/DitheredImage";
import { SocialIconLink } from "@/components/os/SocialIconLink";
import { WallpaperArt } from "@/components/os/SceneBackdrop";
import { useWallpaper } from "@/components/os/WallpaperContext";
import { profile } from "@/data/site";
import { wallpapers } from "@/data/wallpapers";
import { cn } from "@/lib/utils";

export function SettingsWindow() {
  const { wallpaper, setWallpaper } = useWallpaper();

  return (
    <>
      <div className="flex flex-col items-center">
        <DitheredImage
          src={profile.photoSrc}
          alt={profile.name}
          className="size-28 overflow-hidden rounded-full border-[3px] border-ink bg-cream"
          canvasClassName="object-cover"
          pixelSize={2}
          maxWidth={280}
          cover
        />
        <h1 className="mt-4 text-h1">{profile.name}</h1>
        <p className="text-body">{profile.title}</p>
      </div>
      <ul className="mt-8 space-y-3">
        <li className="flex items-start gap-3 py-3">
          <span className="w-20 shrink-0 text-caption text-muted">Phone</span>
          <span className="text-body">{profile.phone}</span>
        </li>
        <li className="flex items-start gap-3 py-3">
          <span className="w-20 shrink-0 text-caption text-muted">Address</span>
          <span className="text-body">{profile.address}</span>
        </li>
      </ul>
      <div className="mt-4 flex gap-3">
        {profile.social.map((item) => (
          <SocialIconLink
            key={item.id}
            id={item.id}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>

      <section className="mt-8">
        <h2 className="text-h2">Wallpaper</h2>
        <p className="mt-1 text-caption text-muted">
          Same desktop on every app. Pick one and it sticks.
        </p>
        <ul className="mt-3 grid grid-cols-3 gap-2">
          {wallpapers.map((item) => {
            const selected = item.id === wallpaper;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setWallpaper(item.id)}
                  aria-pressed={selected}
                  className={cn(
                    "w-full overflow-hidden border-2 border-ink bg-cream text-left",
                    selected && "shadow-hard"
                  )}
                >
                  <span className="relative block h-12 overflow-hidden">
                    <WallpaperArt id={item.id} />
                  </span>
                  <span className="block px-1.5 py-1 text-center text-caption font-bold">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
