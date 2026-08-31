"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { OsNavLink } from "@/components/os/OsNavLink";
import { matchBookmark } from "@/data/bookmarks";

type View =
  | { kind: "home" }
  | { kind: "missing"; query: string }
  | { kind: "site"; url: string; query: string };

export function BrowserWindow() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<View>({ kind: "home" });

  function go(event: FormEvent) {
    event.preventDefault();
    const match = matchBookmark(query);
    if (match) {
      setView({ kind: "site", url: match.url, query });
      return;
    }
    setView({ kind: "missing", query });
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <form
        onSubmit={go}
        className="mb-3 flex shrink-0 items-center gap-2 border-b-2 border-ink pb-3"
      >
        <button
          type="button"
          className="text-h2 leading-none"
          aria-label="Back"
          onClick={() => setView({ kind: "home" })}
        >
          ‹
        </button>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search or type a site name"
          className="min-w-0 flex-1 rounded-btn border-2 border-ink bg-cream-alt px-3 py-2 text-body outline-none focus:ring-2 focus:ring-ink"
        />
        <Button type="submit">Go</Button>
      </form>

      {view.kind === "home" ? (
        <p className="text-body">
          Type a site name from Notes — for example{" "}
          <span className="font-bold">rsvr tech</span> or{" "}
          <span className="font-bold">spellbee</span>.
        </p>
      ) : null}

      {view.kind === "missing" ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
          <p className="text-h1">404</p>
          <p className="text-body">
            No page for “{view.query}”. Open Notes and use a saved site name.
          </p>
          <Button asChild>
            <OsNavLink href="/notes">Open Notes</OsNavLink>
          </Button>
        </div>
      ) : null}

      {view.kind === "site" ? (
        <iframe
          key={view.url}
          title={view.query}
          src={view.url}
          className="min-h-0 w-full flex-1 rounded-btn border-2 border-ink bg-cream"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      ) : null}
    </div>
  );
}
