"use client";

import { useState } from "react";
import { ChessGlyph } from "@/components/os/OsIcons";
import { OsDialog } from "@/components/os/OsDialog";
import { OsNavLink } from "@/components/os/OsNavLink";
import { Button } from "@/components/ui/button";

export function GamesFolderWindow() {
  const [soon, setSoon] = useState(false);

  return (
    <>
      <p className="mb-5 text-body">Games</p>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        <li>
          <button
            type="button"
            className="flex w-full flex-col items-center gap-icon-gap text-ink active:scale-[0.94]"
            onClick={() => setSoon(true)}
          >
            <span className="size-14">
              <ChessGlyph />
            </span>
            <span className="text-center text-icon-label">Chess</span>
          </button>
        </li>
      </ul>
      <div className="mt-6">
        <Button asChild variant="secondary">
          <OsNavLink href="/trash">Back to Trash</OsNavLink>
        </Button>
      </div>
      {soon ? (
        <OsDialog title="Coming soon" onClose={() => setSoon(false)}>
          <p>Chess is not installed yet.</p>
        </OsDialog>
      ) : null}
    </>
  );
}
