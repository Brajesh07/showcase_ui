"use client";

import { DitheredImage } from "@/components/os/DitheredImage";
import { OsEmptyFrame } from "@/components/os/OsEmptyFrame";
import { OsNavLink } from "@/components/os/OsNavLink";
import { Button } from "@/components/ui/button";
import { getHobbyItem } from "@/data/trash";

export function HobbyImageWindow({ slug }: { slug: string }) {
  const item = getHobbyItem(slug);

  if (!item || item.kind !== "image") {
    return <p className="text-body">That file could not be found.</p>;
  }

  return (
    <>
      <p className="text-caption text-muted">{item.label}</p>
      <p className="mt-3 text-body">{item.caption}</p>
      <div className="mt-4 overflow-hidden border-2 border-ink bg-cream-alt">
        {item.src ? (
          <DitheredImage
            src={item.src}
            alt={item.label}
            className="aspect-[4/3] w-full"
            maxWidth={720}
          />
        ) : (
          <OsEmptyFrame className="aspect-[4/3] w-full" />
        )}
      </div>
      <div className="mt-6">
        <Button asChild variant="secondary">
          <OsNavLink href="/trash/hobby">Back to Hobby</OsNavLink>
        </Button>
      </div>
    </>
  );
}
