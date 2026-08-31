export type Bookmark = {
  title: string;
  url: string;
  aliases: string[];
};

export const noteBookmarks: Bookmark[] = [
  {
    title: "RSVR Tech",
    url: "https://rsvrtech.com/",
    aliases: ["rsvr", "rsvr tech", "rsvrtech", "rsvrtech.com"],
  },
  {
    title: "Vanguard Diagnostics",
    url: "https://vanguarddiagnostics.com/",
    aliases: [
      "vanguard",
      "vanguard diagnostics",
      "vanguarddiagnostics",
      "vanguarddiagnostics.com",
    ],
  },
  {
    title: "Cosimo",
    url: "https://cosimo.art/",
    aliases: ["cosimo", "cosimo art", "cosimo.art"],
  },
  {
    title: "Go Ethical Marketplace",
    url: "https://www.facebook.com/GoEthicalMarketplace/",
    aliases: [
      "go ethical",
      "goethical",
      "go ethical marketplace",
      "goethicalmarketplace",
    ],
  },
  {
    title: "Decyfr Sport",
    url: "https://decyfrsport.com/",
    aliases: ["decyfr", "decyfr sport", "decyfrsport", "decyfrsport.com"],
  },
  {
    title: "SpellBee",
    url: "https://spellbee.org/",
    aliases: ["spellbee", "spell bee", "spelling bee", "spellbee.org"],
  },
  {
    title: "Dizrupt Studio",
    url: "https://dizruptstudio.vercel.app/",
    aliases: [
      "dizrupt",
      "dizrupt studio",
      "dizruptstudio",
      "dizruptstudio.vercel.app",
    ],
  },
];

function compact(value: string) {
  return value
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/^www\./, "")
    .replace(/[^a-z0-9]/g, "");
}

function bookmarkKeys(bookmark: Bookmark): string[] {
  const hostname = new URL(bookmark.url).hostname.replace(/^www\./, "");
  const name = hostname.split(".").slice(0, -1).join("");
  return [
    compact(bookmark.title),
    compact(hostname),
    compact(name),
    compact(bookmark.url),
    ...bookmark.aliases.map(compact),
  ].filter(Boolean);
}

export function matchBookmark(query: string): Bookmark | null {
  const compactQuery = compact(query);
  if (compactQuery.length < 3) return null;

  let best: { bookmark: Bookmark; score: number } | null = null;

  for (const bookmark of noteBookmarks) {
    for (const key of bookmarkKeys(bookmark)) {
      let score = 0;
      if (compactQuery === key) score = 1000 + key.length;
      else if (compactQuery.startsWith(key) && key.length >= 4)
        score = 400 + key.length;
      else if (key.startsWith(compactQuery) && compactQuery.length >= 4)
        score = 500 + compactQuery.length;
      else if (compactQuery.includes(key) && key.length >= 6)
        score = 200 + key.length;
      if (score > 0 && (!best || score > best.score)) {
        best = { bookmark, score };
      }
    }
  }

  return best?.bookmark ?? null;
}
