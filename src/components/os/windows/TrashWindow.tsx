"use client";

import { FolderGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import { trashFolders } from "@/data/trash";

export function TrashWindow() {
  return (
    <>
      <p className="mb-5 text-body">Items someone definitely meant to throw away.</p>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {trashFolders.map((folder) => (
          <li key={folder.id}>
            <OsNavLink
              href={folder.href}
              className="flex w-full flex-col items-center gap-icon-gap text-ink active:scale-[0.94]"
            >
              <span className="size-14">
                <FolderGlyph color={folder.color} />
              </span>
              <span className="text-center text-icon-label">{folder.label}</span>
            </OsNavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
