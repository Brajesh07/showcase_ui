"use client";

import { FolderGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import { projects } from "@/data/site";

export function FinderWindow() {
  return (
    <>
      <p className="mb-5 text-body">
        Open a folder to read the project brief.
      </p>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <OsNavLink
              href={`/finder/${project.slug}`}
              className="flex w-full flex-col items-center gap-icon-gap text-ink active:scale-[0.94]"
            >
              <span className="size-14">
                <FolderGlyph color={project.folderColor} />
              </span>
              <span className="text-center text-icon-label">{project.title}</span>
            </OsNavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
