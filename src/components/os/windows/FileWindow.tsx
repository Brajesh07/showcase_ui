"use client";

import { Button } from "@/components/ui/button";
import { DitheredPdfPreview } from "@/components/os/DitheredPdfPreview";
import { OsNavLink } from "@/components/os/OsNavLink";
import { getDocument } from "@/data/site";

export function FileWindow({ slug }: { slug: string }) {
  const doc = getDocument(slug);

  if (!doc) {
    return <p className="text-body">That file could not be found.</p>;
  }

  const isPlaceholderPdf = doc.pdfHref.startsWith("{{");

  return (
    <>
      <p className="text-caption text-muted">File viewer</p>
      <p className="mt-3 text-body">{doc.description}</p>
      {!isPlaceholderPdf ? (
        <div className="mt-4">
          <DitheredPdfPreview src={doc.pdfHref} />
        </div>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-3">
        {isPlaceholderPdf ? (
          <Button variant="disabled" type="button">
            Download PDF
          </Button>
        ) : (
          <Button asChild>
            <a href={doc.pdfHref} download>
              Download PDF
            </a>
          </Button>
        )}
        <Button asChild variant="secondary">
          <OsNavLink href="/documents">Back to Documents</OsNavLink>
        </Button>
      </div>
    </>
  );
}
