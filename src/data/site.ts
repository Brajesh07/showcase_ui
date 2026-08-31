export const profile = {
  name: "Brajesh Tanwar",
  title: "Full-stack JavaScript developer",
  summary:
    "Full-stack JavaScript developer with a strong frontend background and previous experience in graphic design, motion graphics, video editing, and UI/UX. I build web applications, mobile applications, AI-powered tools, and automation systems using modern JavaScript technologies.",
  email: "{{EMAIL}}",
  phone: "{{PHONE}}",
  address: "{{ADDRESS}}",
  photoSrc: "/images/profile-img.jpg",
  social: [
    { id: "linkedin" as const, label: "LinkedIn", href: "{{LINKEDIN_URL}}" },
    { id: "instagram" as const, label: "Instagram", href: "{{INSTAGRAM_URL}}" },
  ],
};

export type FolderColor =
  | "salmonPink"
  | "mintTeal"
  | "coralPeach"
  | "mustardYellow"
  | "grassGreenLight"
  | "softRed";

export type Project = {
  slug: string;
  title: string;
  folderColor: FolderColor;
  url: string;
  stack: string;
  imageSrc: string | null;
  what: string;
  audience: string;
  note: string;
};

export const projects: Project[] = [
  {
    slug: "rsvr-tech",
    title: "RSVR Tech",
    folderColor: "salmonPink",
    url: "https://rsvrtech.com/",
    stack: "Astro, Tailwind CSS, Emdash",
    imageSrc: "/images/projects/rsvr-tech.svg",
    what: "AI governance and contract-operations consultancy. Helps SMEs find shadow AI exposure, set practical controls, and build safer workflows via WorkLex AI and Contractrix AI.",
    audience:
      "SME and mid-market leaders (roughly 50–500 employees) in the UK, US, ANZ, Europe, and Singapore — CEOs, COOs, legal ops, and CFOs facing unmanaged AI or contract workflow friction.",
    note: "Products named WorkLex AI (workplace AI data safety) and Contractrix AI (contract intake, triage, routing). Entry point is a free 30-minute Snapshot.",
  },
  {
    slug: "vanguard-diagnostics",
    title: "Vanguard Diagnostics",
    folderColor: "mintTeal",
    url: "https://vanguarddiagnostics.com/",
    stack: "Astro, Tailwind CSS, Emdash",
    imageSrc: "/images/projects/vanguard-diagnostics.png",
    what: "Indian IVD company that develops, manufactures, and markets diagnostic products — flagship hematology reagents, plus typhoid RT-PCR and related tests.",
    audience:
      "Labs, non-manufacturing diagnostic companies, and healthcare buyers in India and emerging markets seeking affordable, locally made diagnostics.",
    note: "Highlights a patented Typhoid RT-PCR for Salmonella typhi & paratyphi in blood, and positions as a Make-in-India manufacturing partner.",
  },
  {
    slug: "cosimo",
    title: "Cosimo",
    folderColor: "coralPeach",
    url: "https://cosimo.art/",
    stack: "Astro, Tailwind CSS, Emdash",
    imageSrc: "/images/projects/cosimo.svg",
    what: "Artist-focused marketplace brand evolving into a new site. Copy frames Cosimo as helping artists build sustainable careers.",
    audience:
      "Artists and creative studios (mailing list placeholder emails like you@studio.com).",
    note: "Coming soon after seven years as a marketplace; new site not launched yet — waitlist only.",
  },
  {
    slug: "go-ethical-marketplace",
    title: "GoEthical Marketplace",
    folderColor: "mustardYellow",
    url: "https://www.facebook.com/GoEthicalMarketplace/",
    stack: "Next.js, Material UI",
    imageSrc: null,
    what: "Facebook App page for GoEthical Marketplace. Main posts feed was blocked (“This page isn’t available right now”); visible title and About only.",
    audience:
      "Unclear from blocked Facebook surface; About lists category App page and links to goethical.com.",
    note: "Original website is offline (domain no longer serves the marketplace). About shows UK phone and ~652 followers.",
  },
  {
    slug: "decyfr-sport",
    title: "Decyfr Sport",
    folderColor: "grassGreenLight",
    url: "https://decyfrsport.com/",
    stack: "HTML, CSS, WordPress",
    imageSrc: "/images/projects/decyfr-sport.png",
    what: "NFL / American football media and fan-acquisition site (“UNLOCK FANDOM”) with news, previews, and original programming for international markets.",
    audience:
      "NFL fans plus teams, leagues, and rights-holders seeking fans in international and non-endemic markets.",
    note: "About calls it an NFL Super Bowl-accredited UK venture using content localisation, original programming, and stealth learning.",
  },
  {
    slug: "spellbee",
    title: "SpellBee",
    folderColor: "softRed",
    url: "https://spellbee.org/",
    stack: "",
    imageSrc: "/images/projects/spellbee.png",
    what: "Free Spelling Bee word game: form words from a 7-letter honeycomb hive including the center letter, with daily and unlimited modes plus a solver.",
    audience:
      "Casual word-game players who want daily puzzles, practice, rankings, and related word games on the same site.",
    note: "Also offers Spelling Bee Solver, hints via short ad clips, and sister games (WordGuess, Connect, Wordly, etc.). Stack not stated on the page.",
  },
  {
    slug: "dizrupt-studio",
    title: "Dizrupt Studio",
    folderColor: "salmonPink",
    url: "https://dizruptstudio.vercel.app/",
    stack: "Next.js",
    imageSrc: "/images/projects/dizrupt-studio.png",
    what: "Design-first agency for brand identity, social creative, print, and website design, with optional smart automation.",
    audience:
      "New and growing businesses buying monthly/yearly design retainers (Starter, Growth, Pro plans in INR).",
    note: "Hosted on Vercel; page meta says “Generated by create next app.” Other stack details not clear on the page.",
  },
];

export type DocumentKind = "resume" | "education" | "letters" | "certificates";

export type SiteDocument = {
  slug: string;
  kind: DocumentKind;
  title: string;
  description: string;
  pdfHref: string;
};

export const documents: SiteDocument[] = [
  {
    slug: "professional-resume",
    kind: "resume",
    title: "Professional Resume",
    description:
      "In-app preview is a 1-bit ink-and-cream dither of page one. Download keeps the original PDF.",
    pdfHref: "/files/professional-resume.pdf",
  },
  {
    slug: "education-degrees",
    kind: "education",
    title: "{{EDUCATION_1_TITLE}}",
    description: "{{EDUCATION_1_DETAILS}}",
    pdfHref: "{{EDUCATION_1_PDF}}",
  },
  {
    slug: "education-degrees-2",
    kind: "education",
    title: "{{EDUCATION_2_TITLE}}",
    description: "{{EDUCATION_2_DETAILS}}",
    pdfHref: "{{EDUCATION_2_PDF}}",
  },
  {
    slug: "company-letter-1",
    kind: "letters",
    title: "{{LETTER_1_TITLE}}",
    description: "{{LETTER_1_DETAILS}}",
    pdfHref: "{{LETTER_1_PDF}}",
  },
  {
    slug: "certificate-1",
    kind: "certificates",
    title: "{{CERTIFICATE_1_TITLE}}",
    description: "{{CERTIFICATE_1_DETAILS}}",
    pdfHref: "{{CERTIFICATE_1_PDF}}",
  },
  {
    slug: "certificate-2",
    kind: "certificates",
    title: "{{CERTIFICATE_2_TITLE}}",
    description: "{{CERTIFICATE_2_DETAILS}}",
    pdfHref: "{{CERTIFICATE_2_PDF}}",
  },
];

export const documentFolders: {
  kind: DocumentKind;
  label: string;
  color: FolderColor;
}[] = [
  { kind: "resume", label: "Resume", color: "coralPeach" },
  { kind: "education", label: "Education / Degrees", color: "mustardYellow" },
  { kind: "letters", label: "Old Company Letters", color: "grassGreenLight" },
  { kind: "certificates", label: "Certificates", color: "softRed" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getDocument(slug: string) {
  return documents.find((doc) => doc.slug === slug);
}
