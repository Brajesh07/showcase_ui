"use client";

import { GalleryGlyph, MusicGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import { hobbyItems } from "@/data/trash";
import { Button } from "@/components/ui/button";

export function HobbyFolderWindow() {
  return (
    <>
      <p className="mb-5 text-body">Hobby</p>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {hobbyItems.map((item) => (
          <li key={item.id}>
            <OsNavLink
              href={item.href}
              className="flex w-full flex-col items-center gap-icon-gap text-ink active:scale-[0.94]"
            >
              <span className="size-14">
                {item.kind === "music" ? <MusicGlyph /> : <GalleryGlyph />}
              </span>
              <span className="text-center text-icon-label">{item.label}</span>
            </OsNavLink>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button asChild variant="secondary">
          <OsNavLink href="/trash">Back to Trash</OsNavLink>
        </Button>
      </div>
    </>
  );
}
