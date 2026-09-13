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
import { TrashWindow } from "@/components/os/windows/TrashWindow";
import { HobbyFolderWindow } from "@/components/os/windows/HobbyFolderWindow";
import { GamesFolderWindow } from "@/components/os/windows/GamesFolderWindow";
import { HobbyImageWindow } from "@/components/os/windows/HobbyImageWindow";
import { MusicPlayerWindow } from "@/components/os/windows/MusicPlayerWindow";
import { MailComposeWindow } from "@/components/os/windows/MailComposeWindow";
import { SocialPreviewCard } from "@/components/os/SocialPreviewCard";

function windowTitle(id: string) {
  if (id === "welcome") return "Welcome";
  if (id === "finder") return "Finder — Projects & Work";
  if (id === "documents") return "Documents";
  if (id === "contact") return "Contact";
  if (id === "mail") return "Mail";
  if (id === "linkedin") return "LinkedIn";
  if (id === "instagram") return "Instagram";
  if (id === "settings") return "Settings";
  if (id === "browser") return "Browser";
  if (id === "notes") return "Notes";
  if (id === "trash") return "Trash";
  if (id === "trash:hobby") return "Hobby";
  if (id === "trash:games") return "Games";
  if (id === "trash:basketball") return "basketball.PNG";
  if (id === "trash:sketching") return "sketch.PNG";
  if (id === "trash:music") return "Music";
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
  if (id === "mail") return <MailComposeWindow />;
  if (id === "linkedin") return <SocialPreviewCard id="linkedin" />;
  if (id === "instagram") return <SocialPreviewCard id="instagram" />;
  if (id === "settings") return <SettingsWindow />;
  if (id === "browser") return <BrowserWindow />;
  if (id === "notes") return <NotesWindow />;
  if (id === "trash") return <TrashWindow />;
  if (id === "trash:hobby") return <HobbyFolderWindow />;
  if (id === "trash:games") return <GamesFolderWindow />;
  if (id === "trash:basketball") return <HobbyImageWindow slug="basketball" />;
  if (id === "trash:sketching") return <HobbyImageWindow slug="sketching" />;
  if (id === "trash:music") return <MusicPlayerWindow />;
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
          bodyClassName={
            item.id === "linkedin" || item.id === "instagram"
              ? "px-0 pb-0"
              : undefined
          }
          size={
            item.id === "browser"
              ? "browser"
              : item.id === "mail" ||
                  item.id === "linkedin" ||
                  item.id === "instagram" ||
                  item.id.startsWith("project:")
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
