import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { FolderColor } from "@/data/site";
import type { NavItem } from "@/lib/nav";

const fillByFolder: Record<FolderColor, string> = {
  salmonPink: "fill-salmon-pink",
  mintTeal: "fill-mint-teal",
  coralPeach: "fill-coral-peach",
  mustardYellow: "fill-mustard",
  grassGreenLight: "fill-grass-light",
  softRed: "fill-soft-red",
};

type IconProps = {
  className?: string;
};

function Svg({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 56 56"
      aria-hidden
      className={cn("h-full w-full", className)}
    >
      {children}
    </svg>
  );
}

export function FolderGlyph({
  color,
  className,
}: {
  color: FolderColor;
  className?: string;
}) {
  return (
    <Svg className={className}>
      <path
        d="M10 18h10l4 5h24v23H10V18Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <g transform="rotate(-16 30 20)">
        <rect
          x="20"
          y="6"
          width="18"
          height="24"
          className="fill-cream-alt"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M24 12h10M24 16h10M24 20h8M24 24h10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </g>
      <path
        d="M8 28h38l2 20H10Z"
        className={fillByFolder[color]}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function FileGlyph({ className }: IconProps) {
  return <DocumentsGlyph className={className} />;
}

export function HomeGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M36 12h10v34l-10 4V12Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M10 12h26l10 8H20Z"
        className="fill-khaki"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M10 12h26v34l-4 6H8l2-6V12Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <rect
        x="14"
        y="16"
        width="18"
        height="16"
        className="fill-sky-blue"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="18" y="20" width="2.4" height="5" className="fill-ink" />
      <rect x="25.6" y="20" width="2.4" height="5" className="fill-ink" />
      <rect x="22.3" y="22" width="1.6" height="4" className="fill-ink" />
      <path
        d="M18 28c2.2 3.2 7.8 3.2 10 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <rect x="14" y="38" width="3.5" height="3.5" className="fill-ink" />
      <path
        d="M20 40h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
      <path
        d="M40 40l6 3M40 43l6 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function FinderGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M10 18h10l4 5h24v23H10V18Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <g transform="rotate(-16 30 20)">
        <rect
          x="20"
          y="6"
          width="18"
          height="24"
          className="fill-cream-alt"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M24 12h10M24 16h10M24 20h8M24 24h10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </g>
      <path
        d="M8 28h38l2 20H10Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function DocumentsGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M20 8h18l6 6v26H20V8Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M38 8v6h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M12 14h18l6 6v26H12V14Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M30 14v6h6"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M17 28h12M17 32h12M17 36h10M17 40h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function ContactGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M38 12h8v32l-8 4V12Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <rect
        x="42"
        y="18"
        width="8"
        height="5"
        className="fill-khaki"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="42"
        y="26"
        width="8"
        height="5"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="42"
        y="34"
        width="8"
        height="5"
        className="fill-khaki"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M10 10h28l8 6v30l-4 4H10V10Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <circle cx="24" cy="24" r="5" className="fill-sky-blue" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M15 40c2-7 16-7 18 0"
        className="fill-sky-blue"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function SettingsGlyph({ className }: IconProps) {
  const teeth = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <Svg className={className}>
      <rect
        x="12"
        y="12"
        width="36"
        height="36"
        rx="8"
        className="fill-disabled"
      />
      <rect
        x="8"
        y="8"
        width="36"
        height="36"
        rx="8"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {teeth.map((angle) => (
        <rect
          key={angle}
          x="23.5"
          y="11.5"
          width="5"
          height="9"
          className="fill-disabled"
          stroke="currentColor"
          strokeWidth="2.5"
          transform={`rotate(${angle} 26 26)`}
        />
      ))}
      <circle
        cx="26"
        cy="26"
        r="8"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="26"
        cy="26"
        r="3.5"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function BatteryGlyph({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 14"
      aria-hidden
      className={cn("h-3.5 w-7", className)}
    >
      <rect
        x="1.25"
        y="1.25"
        width="22"
        height="11.5"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="4" y="4" width="14" height="6" className="fill-ink" />
      <rect x="24" y="4.5" width="3" height="5" rx="0.8" className="fill-ink" />
    </svg>
  );
}

export function BrowserGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="12"
        y="12"
        width="36"
        height="36"
        rx="8"
        className="fill-disabled"
      />
      <rect
        x="8"
        y="8"
        width="36"
        height="36"
        rx="8"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="26"
        cy="26"
        r="13"
        className="fill-none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="26"
        cy="26"
        r="10.5"
        className="fill-sky-blue"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M26 16v2.5M26 33.5V36M16 26h2.5M33.5 26H36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M26 26 19 33"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M26 26 33 19"
        fill="none"
        className="stroke-soft-red"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <circle cx="26" cy="26" r="2" className="fill-ink" />
    </Svg>
  );
}

export function NotesGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M14 10h24v4H14z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M16 12h2v2h-2zM22 12h2v2h-2zM28 12h2v2h-2zM34 12h2v2h-2z"
        className="fill-ink"
      />
      <path
        d="M14 14h24v32H14z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M38 16h4v30l-4 2V16Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M19 24h14M19 30h14M19 36h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <g transform="rotate(-38 34 28)">
        <path
          d="M32 8h5v28h-5z"
          className="fill-sky-blue"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path d="M32 8h5v4h-5z" className="fill-cream" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 4h5v4h-5z" className="fill-coral-peach" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 36h5l-2.5 6L32 36Z" className="fill-khaki" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="miter" />
      </g>
    </Svg>
  );
}

export function LinkedInGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("h-5 w-5", className)}>
      <path
        d="M12 16h4v14h-4V16Zm2-8a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8ZM18.5 16h3.8v1.9h.1c.5-.9 1.8-1.9 3.8-1.9 4 0 4.8 2.6 4.8 6V30h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V30h-4V16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("h-5 w-5", className)}>
      <rect
        x="10"
        y="10"
        width="20"
        height="20"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="26.5" cy="13.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function NavGlyph({
  icon,
  className,
}: {
  icon: NavItem["icon"];
  className?: string;
}) {
  switch (icon) {
    case "home":
      return <HomeGlyph className={className} />;
    case "finder":
      return <FinderGlyph className={className} />;
    case "documents":
      return <DocumentsGlyph className={className} />;
    case "contact":
      return <ContactGlyph className={className} />;
    case "settings":
      return <SettingsGlyph className={className} />;
    case "browser":
      return <BrowserGlyph className={className} />;
    case "notes":
      return <NotesGlyph className={className} />;
    default:
      return null;
  }
}
