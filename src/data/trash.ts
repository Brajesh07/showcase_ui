import type { FolderColor } from "@/data/site";

export type TrashFolderId = "hobby" | "games";

export type HobbyItemId = "basketball" | "sketching" | "music";

export type MusicTrack = {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover?: string;
};

export const trashFolders: {
  id: TrashFolderId;
  label: string;
  href: string;
  color: FolderColor;
}[] = [
  {
    id: "hobby",
    label: "Hobby",
    href: "/trash/hobby",
    color: "coralPeach",
  },
  {
    id: "games",
    label: "Games",
    href: "/trash/games",
    color: "mintTeal",
  },
];

export const hobbyItems: {
  id: HobbyItemId;
  label: string;
  href: string;
  kind: "image" | "music";
  src?: string;
  caption: string;
}[] = [
  {
    id: "basketball",
    label: "basketball.PNG",
    href: "/trash/hobby/basketball",
    kind: "image",
    src: "/images/basketball.png",
    caption: "{{hobby caption}}",
  },
  {
    id: "sketching",
    label: "sketch.PNG",
    href: "/trash/hobby/sketching",
    kind: "image",
    src: "/images/sketch.jpg",
    caption: "{{hobby caption}}",
  },
  {
    id: "music",
    label: "Music",
    href: "/trash/hobby/music",
    kind: "music",
    caption: "{{hobby caption}}",
  },
];

export const MUSIC_DEFAULT_VOLUME = 0.4;

export const musicPlaylist: MusicTrack[] = [
  {
    id: "baby-stop",
    title: "Baby Stop",
    artist: "{{artist}}",
    src: "/music/Baby Stop.mp3",
  },
  {
    id: "espresso",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    src: "/music/Sabrina Carpenter - Espresso.mp3",
  },
  {
    id: "sunflower",
    title: "Sunflower",
    artist: "{{artist}}",
    src: "/music/Sunflower.mp3",
  },
];

export function getHobbyItem(id: string) {
  return hobbyItems.find((item) => item.id === id);
}
