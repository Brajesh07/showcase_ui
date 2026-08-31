import { cn } from "@/lib/utils";
import type { WallpaperId } from "@/data/wallpapers";

function Cloud({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute rounded-full bg-cream-alt opacity-90", className)}
    />
  );
}

export function WallpaperArt({ id }: { id: WallpaperId }) {
  switch (id) {
    case "meadow":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-khaki from-45% to-grass-light" />
          <Cloud className="left-[12%] top-10 h-10 w-28" />
          <Cloud className="left-[38%] top-6 h-8 w-20" />
          <Cloud className="right-[14%] top-16 h-12 w-32" />
        </>
      );
    case "hills":
      return (
        <>
          <div className="absolute inset-0 bg-khaki" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 rounded-t-[45%] bg-mint-teal" />
        </>
      );
    case "sky":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-sky-blue from-30% to-cream" />
          <Cloud className="right-[18%] top-12 h-11 w-36" />
          <Cloud className="left-[10%] top-20 h-8 w-24" />
        </>
      );
    case "stripes":
      return <div className="absolute inset-0 bg-scene-contact" />;
    case "khaki":
      return <div className="absolute inset-0 bg-khaki" />;
    case "mustard":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-mustard to-khaki" />
          <Cloud className="left-[20%] top-8 h-9 w-24" />
        </>
      );
    case "mint":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-mint-teal to-grass-light" />
          <div className="absolute inset-x-[-8%] bottom-0 h-1/3 rounded-t-[50%] bg-khaki/70" />
        </>
      );
    case "peach":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-salmon-pink via-coral-peach to-mustard" />
          <Cloud className="right-[12%] top-8 h-10 w-28" />
        </>
      );
    case "dots":
      return <div className="absolute inset-0 bg-doc-grid" />;
    default:
      return <div className="absolute inset-0 bg-khaki" />;
  }
}

export function SceneBackdrop({ wallpaper }: { wallpaper: WallpaperId }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <WallpaperArt id={wallpaper} />
    </div>
  );
}
