export const WALLPAPER_IDS = [
  "meadow",
  "hills",
  "sky",
  "stripes",
  "khaki",
  "mustard",
  "mint",
  "peach",
  "dots",
] as const;

export type WallpaperId = (typeof WALLPAPER_IDS)[number];

export const wallpapers: { id: WallpaperId; label: string }[] = [
  { id: "meadow", label: "Meadow" },
  { id: "hills", label: "Hills" },
  { id: "sky", label: "Sky" },
  { id: "stripes", label: "Stripes" },
  { id: "khaki", label: "Khaki" },
  { id: "mustard", label: "Mustard" },
  { id: "mint", label: "Mint" },
  { id: "peach", label: "Peach" },
  { id: "dots", label: "Dots" },
];

export const DEFAULT_WALLPAPER: WallpaperId = "meadow";

export function isWallpaperId(value: string | null): value is WallpaperId {
  return WALLPAPER_IDS.includes(value as WallpaperId);
}
