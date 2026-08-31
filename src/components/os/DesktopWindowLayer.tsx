"use client";

import { documents, getProject } from "@/data/site";
import type { OsWindow } from "@/components/os/WindowManager";
import { WindowChrome } from "@/components/os/WindowChrome";
import { WelcomeWindow } from "@/components/os/windows/WelcomeWindow";
import { FinderWindow } from "@/components/os/windows/FinderWindow";
import { ProjectWindow } from "@/components/os/windows/ProjectWindow";
import { DocumentsWindow } from "@/components/os/windows/DocumentsWindow";
import { FileWindow } from "@/components/os/windows/FileWindow";
import { ContactWindow } from "@/components/os/windows/ContactWindow";
import { SettingsWindow } from "@/components/os/windows/SettingsWindow";
import { BrowserWindow } from "@/components/os/windows/BrowserWindow";
import { NotesWindow } from "@/components/os/windows/NotesWindow";

function windowTitle(id: string) {
  if (id === "welcome") return "Welcome";
  if (id === "finder") return "Finder — Projects & Work";
  if (id === "documents") return "Documents";
  if (id === "contact") return "Contact";
  if (id === "settings") return "Settings";
  if (id === "browser") return "Browser";
  if (id === "notes") return "Notes";
  if (id.startsWith("project:")) {
    return getProject(id.slice(8))?.title ?? "Project";
  }
  if (id.startsWith("file:")) {
    const slug = id.slice(5);
    return documents.find((doc) => doc.slug === slug)?.title ?? "File";
  }
  return "Window";
}

function WindowBody({ id }: { id: string }) {
  if (id === "welcome") return <WelcomeWindow />;
  if (id === "finder") return <FinderWindow />;
  if (id === "documents") return <DocumentsWindow />;
  if (id === "contact") return <ContactWindow />;
  if (id === "settings") return <SettingsWindow />;
  if (id === "browser") return <BrowserWindow />;
  if (id === "notes") return <NotesWindow />;
  if (id.startsWith("project:")) return <ProjectWindow slug={id.slice(8)} />;
  if (id.startsWith("file:")) return <FileWindow slug={id.slice(5)} />;
  return null;
}

export function DesktopWindowLayer({
  windows,
  stacked,
}: {
  windows: OsWindow[];
  stacked: boolean;
}) {
  const visible = windows.filter(
    (item) =>
      item.phase === "open" ||
      item.phase === "closing" ||
      item.phase === "minimizing"
  );

  if (visible.length === 0) return null;

  return (
    <>
      {visible.map((item) => (
        <WindowChrome
          key={item.id}
          windowId={item.id}
          title={windowTitle(item.id)}
          origin={item.origin}
          zIndex={30 + item.z}
          stacked={stacked}
          size={
            item.id === "browser"
              ? "browser"
              : item.id.startsWith("project:")
                ? "doc"
                : "default"
          }
        >
          <WindowBody id={item.id} />
        </WindowChrome>
      ))}
    </>
  );
}
