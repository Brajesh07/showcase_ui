"use client";

import { InstagramGlyph, LinkedInGlyph } from "@/components/os/OsIcons";

const glyph = {
  linkedin: LinkedInGlyph,
  instagram: InstagramGlyph,
};

export function SocialIconLink({
  id,
  label,
  href,
}: {
  id: "linkedin" | "instagram";
  label: string;
  href: string;
}) {
  const Icon = glyph[id];
  const placeholder = href.startsWith("{{");

  return (
    <a
      href={placeholder ? "#" : href}
      target={placeholder ? undefined : "_blank"}
      rel={placeholder ? undefined : "noreferrer"}
      aria-label={label}
      aria-disabled={placeholder}
      className="flex size-10 items-center justify-center rounded-full border-2 border-ink text-ink active:scale-[0.94]"
      onClick={placeholder ? (event) => event.preventDefault() : undefined}
    >
      <Icon />
    </a>
  );
}
