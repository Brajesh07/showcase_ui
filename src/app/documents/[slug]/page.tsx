import { notFound } from "next/navigation";
import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { FileWindow } from "@/components/os/windows/FileWindow";
import { documents, getDocument } from "@/data/site";

export function generateStaticParams() {
  return documents.map((doc) => ({ slug: doc.slug }));
}

export default async function DocumentViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocument(slug);
  if (!doc) notFound();

  return (
    <MobileAppScreen title={doc.title}>
      <FileWindow slug={slug} />
    </MobileAppScreen>
  );
}
