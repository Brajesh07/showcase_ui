"use client";

import { Button } from "@/components/ui/button";
import { DitheredImage } from "@/components/os/DitheredImage";
import { FolderGlyph } from "@/components/os/OsIcons";
import { OsNavLink } from "@/components/os/OsNavLink";
import { getProject, type FolderColor } from "@/data/site";
import { cn } from "@/lib/utils";

const folderFill: Record<FolderColor, string> = {
  salmonPink: "bg-salmon-pink",
  mintTeal: "bg-mint-teal",
  coralPeach: "bg-coral-peach",
  mustardYellow: "bg-mustard",
  grassGreenLight: "bg-grass-light",
  softRed: "bg-soft-red",
};

function stackTags(stack: string) {
  return stack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ProjectWindow({ slug }: { slug: string }) {
  const project = getProject(slug);

  if (!project) {
    return <p className="text-body">That project folder is empty.</p>;
  }

  const tags = stackTags(project.stack);

  return (
    <article className="border-2 border-ink bg-doc-grid p-4 shadow-hard">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div
          className={cn(
            "flex size-[7.5rem] shrink-0 items-center justify-center overflow-hidden border-2 border-ink shadow-hard",
            folderFill[project.folderColor]
          )}
        >
          {project.imageSrc ? (
            <DitheredImage
              src={project.imageSrc}
              alt={project.title}
              className="size-full"
              canvasClassName="object-contain"
              maxWidth={220}
              pixelSize={2}
            />
          ) : (
            <span className="size-14">
              <FolderGlyph color={project.folderColor} />
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-h2 uppercase tracking-wide">{project.title}</h3>
          {tags.length > 0 ? (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border-2 border-ink bg-mustard px-2 py-0.5 text-caption font-bold uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-3 text-body">{project.what}</p>
        </div>
      </div>

      <p className="mt-4 bg-khaki px-2 py-1 text-caption font-bold uppercase">
        For
      </p>
      <p className="mt-2 text-body">{project.audience}</p>

      <div className="mt-4 border-2 border-ink bg-cream px-3 py-3">
        <p className="text-caption font-bold uppercase text-muted">Note</p>
        <p className="mt-1 text-body">{project.note}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild className="rounded-none shadow-hard">
          <a href={project.url} target="_blank" rel="noreferrer">
            Open site
          </a>
        </Button>
        <Button asChild variant="secondary" className="rounded-none shadow-hard">
          <OsNavLink href="/finder">Back to Finder</OsNavLink>
        </Button>
      </div>
    </article>
  );
}
