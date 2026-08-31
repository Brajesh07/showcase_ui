export type Track = {
  id: string;
  title: string;
  src: string;
};

export const DEFAULT_VOLUME = 0.05;

export const playlist: Track[] = [
  { id: "baby-stop", title: "Baby Stop", src: "/videos/Baby-Stop.mp4" },
  {
    id: "espresso",
    title: "Sabrina Carpenter — Espresso",
    src: "/videos/espresso.mp4",
  },
  {
    id: "what-was-i-made-for",
    title: "Bongo Cat — What Was I Made For",
    src: "/videos/what-was-i-made-for.mp4",
  },
  { id: "waste", title: "Kxllswxtch — WASTE", src: "/videos/waste.mp4" },
  {
    id: "beer-song",
    title: "Diesel — Beer Song",
    src: "/videos/beer-song.mp4",
  },
];
