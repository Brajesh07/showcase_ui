"use client";

import {
  BadgeGlyph,
  GridTabGlyph,
  ReelsTabGlyph,
  TaggedTabGlyph,
} from "@/components/os/OsIcons";
import { DitheredImage } from "@/components/os/DitheredImage";
import { Button } from "@/components/ui/button";
import {
  contactConfig,
  isContactPlaceholder,
  type SocialId,
} from "@/data/contact-config";

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <DitheredImage
      src={src}
      alt={alt}
      className="size-16 overflow-hidden rounded-full border-[3px] border-ink bg-cream"
      canvasClassName="object-cover"
      pixelSize={2}
      maxWidth={160}
      cover
    />
  );
}

function LinkedInCard() {
  const li = contactConfig.social.linkedin;
  const blocked = isContactPlaceholder(li.href);

  return (
    <>
      <div className="relative h-32">
        <DitheredImage
          src={li.bannerSrc}
          alt=""
          className="h-24 w-full overflow-hidden border-b-2 border-ink bg-cream-alt"
          canvasClassName="h-full w-full object-cover"
          pixelSize={2}
          maxWidth={640}
        />
        <div className="absolute left-4 top-16">
          <Avatar src={li.avatarSrc} alt={contactConfig.name} />
        </div>
      </div>
      <div className="px-4 pb-4 pt-2">
        <div className="flex items-center gap-2">
          <h2 id="social-preview-title" className="text-h2">
            {contactConfig.name}
          </h2>
          <span className="size-5 shrink-0" aria-hidden>
            <BadgeGlyph />
          </span>
        </div>
        <p className="mt-2 text-caption">{li.headline}</p>
        <p className="mt-2 text-caption text-muted">{li.location}</p>
        <p className="mt-1 text-caption text-muted">{li.school}</p>
        <p className="mt-1 truncate text-caption">{li.website.replace(/^https?:\/\//, "")}</p>
        <p className="mt-2 text-caption">
          {li.followers} followers · {li.connections} connections
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {blocked ? (
            <Button type="button" variant="disabled">
              View on LinkedIn
            </Button>
          ) : (
            <Button asChild>
              <a href={li.href} target="_blank" rel="noreferrer">
                View on LinkedIn
              </a>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

function InstagramCard() {
  const ig = contactConfig.social.instagram;

  return (
    <div className="p-4">
      <div className="flex gap-3">
        <Avatar src={ig.avatarSrc} alt={ig.displayName} />
        <div className="min-w-0 flex-1">
          <h2 id="social-preview-title" className="text-h2">
            {ig.username}
          </h2>
          <p className="text-caption">{ig.displayName}</p>
          <p className="mt-1 text-caption text-muted">
            {ig.followers} followers · {ig.following} following
          </p>
        </div>
      </div>
      <ul className="mt-3 space-y-0.5">
        {ig.bio.map((line) => (
          <li key={line} className="text-caption">
            {line}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-around border-y-2 border-ink py-2">
        <span className="size-6" aria-hidden>
          <GridTabGlyph />
        </span>
        <span className="size-6" aria-hidden>
          <ReelsTabGlyph />
        </span>
        <span className="size-6" aria-hidden>
          <TaggedTabGlyph />
        </span>
      </div>
      <ul className="mt-2 grid grid-cols-3 gap-0.5">
        {ig.thumbnails.map((src) => (
          <li key={src} className="aspect-square overflow-hidden border-2 border-ink bg-cream-alt">
            <DitheredImage
              src={src}
              alt=""
              className="h-full w-full"
              canvasClassName="h-full w-full object-cover"
              pixelSize={2}
              maxWidth={200}
              cover
            />
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Button asChild>
          <a href={ig.href} target="_blank" rel="noreferrer">
            View on Instagram
          </a>
        </Button>
      </div>
    </div>
  );
}

export function SocialPreviewCard({ id }: { id: SocialId }) {
  return id === "linkedin" ? <LinkedInCard /> : <InstagramCard />;
}
