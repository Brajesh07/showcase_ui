"use client";

import { useState } from "react";
import { FileGlyph, FolderGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import {
  documentFolders,
  documents,
  type DocumentKind,
} from "@/data/site";

export function DocumentsWindow() {
  const [open, setOpen] = useState<DocumentKind | null>("resume");

  return (
    <div className="space-y-3">
      {documentFolders.map((folder) => {
        const files = documents.filter((doc) => doc.kind === folder.kind);
        const expanded = open === folder.kind;

        return (
          <section key={folder.kind} className="border-2 border-ink bg-cream-alt">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() =>
                setOpen((current) =>
                  current === folder.kind ? null : folder.kind
                )
              }
              className="flex w-full items-center gap-2 px-3 py-2 text-left"
            >
              <span className="size-8 shrink-0">
                <FolderGlyph color={folder.color} />
              </span>
              <h3 className="min-w-0 flex-1 text-h2">{folder.label}</h3>
              <span className="text-caption text-muted" aria-hidden>
                {expanded ? "▾" : "▸"}
              </span>
            </button>
            {expanded ? (
              <ul className="grid grid-cols-2 gap-5 border-t-2 border-ink px-3 py-4 sm:grid-cols-3">
                {files.map((file) => (
                  <li key={file.slug}>
                    <OsNavLink
                      href={`/documents/${file.slug}`}
                      className="flex w-full flex-col items-center gap-icon-gap text-ink active:scale-[0.94]"
                    >
                      <span className="size-14">
                        <FileGlyph />
                      </span>
                      <span className="text-center text-icon-label">
                        {file.title}
                      </span>
                    </OsNavLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
