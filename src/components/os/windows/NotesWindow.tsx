"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { noteBookmarks } from "@/data/bookmarks";

export function NotesWindow() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(url);
    } catch {
      setCopied(null);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-body">
        Saved site names. Copy a URL, or type the name in Browser.
      </p>
      <ul className="space-y-3">
        {noteBookmarks.map((note) => (
          <li
            key={note.url}
            className="rounded-btn border-2 border-ink bg-cream-alt p-3"
          >
            <p className="text-h2">{note.title}</p>
            <p className="mt-1 break-all text-caption text-muted">{note.url}</p>
            <Button
              type="button"
              variant="secondary"
              className="mt-3"
              onClick={() => void copyUrl(note.url)}
            >
              {copied === note.url ? "Copied" : "Copy URL"}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
