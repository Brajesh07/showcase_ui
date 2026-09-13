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

export function TrashGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="22"
        y="6"
        width="12"
        height="5"
        className="fill-cream-alt"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M10 14h36l-3 6H13Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M14 20h28v26H14Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M20 24v18M28 24v18M36 24v18M18 28h20M18 34h20M18 40h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function GalleryGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="10"
        y="14"
        width="36"
        height="28"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M10 34l10-10 8 8 6-6 12 12"
        className="fill-khaki"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <circle
        cx="20"
        cy="22"
        r="3.5"
        className="fill-sky-blue"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function BadgeGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle
        cx="28"
        cy="28"
        r="16"
        className="fill-sky-blue"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M20 28l6 6 12-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function GridTabGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="12" y="12" width="10" height="10" className="fill-cream" stroke="currentColor" strokeWidth="2.2" />
      <rect x="26" y="12" width="10" height="10" className="fill-cream" stroke="currentColor" strokeWidth="2.2" />
      <rect x="12" y="26" width="10" height="10" className="fill-cream" stroke="currentColor" strokeWidth="2.2" />
      <rect x="26" y="26" width="10" height="10" className="fill-khaki" stroke="currentColor" strokeWidth="2.2" />
    </Svg>
  );
}

export function ReelsTabGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="12"
        y="14"
        width="32"
        height="28"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 24l10 6-10 6V24Z"
        className="fill-khaki"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function TaggedTabGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="14"
        y="14"
        width="28"
        height="28"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="28" cy="24" r="5" className="fill-sky-blue" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M18 38c2-6 18-6 20 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </Svg>
  );
}

export function MusicGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="10"
        y="14"
        width="36"
        height="28"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="22"
        cy="34"
        r="6"
        className="fill-sky-blue"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M26 34V18h12v6H30v10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function ChessGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M22 10h12v6h-12Z"
        className="fill-cream-alt"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="28"
        cy="20"
        r="5"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M18 26h20l-3 14H21Z"
        className="fill-disabled"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M14 42h28v6H14Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function LinkedInGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="10"
        y="10"
        width="36"
        height="36"
        rx="8"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="16" y="24" width="6" height="16" className="fill-sky-blue" stroke="currentColor" strokeWidth="2.2" />
      <rect x="16" y="16" width="6" height="6" className="fill-khaki" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M26 40V26c0-3 2-5 5-5s5 2 5 5v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function InstagramGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="10"
        y="10"
        width="36"
        height="36"
        rx="10"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="28"
        cy="28"
        r="9"
        className="fill-sky-blue"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="36"
        y="16"
        width="5"
        height="5"
        className="fill-khaki"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </Svg>
  );
}

export function CallGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M14 16h12v10H14z"
        className="fill-grass-light"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M30 30h12v10H30z"
        className="fill-grass-light"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 26c8 4 12 10 16 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function WhatsAppGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 16h28v24H22l-8 8V16Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M22 24h4v4h8v8h-8l-4 3V24Z"
        className="fill-grass-light"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function MessageGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M10 14h36v24H22L12 48V14Z"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M18 24h20M18 30h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function MailGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="8"
        y="16"
        width="40"
        height="26"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M8 16l20 14L48 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function ReplyGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M22 16 12 26l10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <path
        d="M12 26h20c8 0 12 4 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </Svg>
  );
}

export function AaGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M16 40 28 14l12 26M20 32h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function EmojiGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle
        cx="28"
        cy="28"
        r="16"
        className="fill-mustard"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="20" y="22" width="4" height="6" className="fill-ink" />
      <rect x="32" y="22" width="4" height="6" className="fill-ink" />
      <path
        d="M20 34c3 4 13 4 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function WandGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M18 40 36 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M38 12v8M34 16h8M16 18v6M13 21h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function InsertGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect
        x="12"
        y="12"
        width="32"
        height="32"
        className="fill-cream"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M28 20v16M20 28h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </Svg>
  );
}

export function AttachGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M30 18v16c0 4-3 8-8 8s-8-4-8-8V16c0-6 4-10 10-10s10 4 10 10v16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function UploadGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M14 32v10h28V32M28 36V12M18 20l10-10 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function SendGlyph({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 28h32M32 16l12 12-12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </Svg>
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
    case "trash":
      return <TrashGlyph className={className} />;
    default:
      return null;
  }
}
