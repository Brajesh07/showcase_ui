import { cn } from "@/lib/utils";

export function OsEmptyFrame({
  label = "No image",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border-2 border-ink bg-cream-alt",
        className
      )}
    >
      <span className="text-caption text-muted">{label}</span>
    </div>
  );
}
