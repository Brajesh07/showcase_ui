import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { FolderColor } from "@/data/site";
import type { NavItem } from "@/lib/nav";
import { FileFolderSvg } from "@/components/os/FileFolderSvg";
import { ContactIconSvg } from "@/components/os/glyphs/ContactIconSvg";
import { DocumentIconSvg } from "@/components/os/glyphs/DocumentIconSvg";
import { HomeIconSvg } from "@/components/os/glyphs/HomeIconSvg";
import { NoteIconSvg } from "@/components/os/glyphs/NoteIconSvg";
import { SafariIconSvg } from "@/components/os/glyphs/SafariIconSvg";
import { SettingIconSvg } from "@/components/os/glyphs/SettingIconSvg";
import { TrashIconSvg } from "@/components/os/glyphs/TrashIconSvg";

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
    <FileFolderSvg className={className} faceClass={fillByFolder[color]} />
  );
}

export function FileGlyph({ className }: IconProps) {
  return <DocumentIconSvg className={className} />;
}

export function HomeGlyph({ className }: IconProps) {
  return <HomeIconSvg className={className} />;
}

export function FinderGlyph({ className }: IconProps) {
  return <FileFolderSvg className={className} faceClass="fill-cream" />;
}

export function DocumentsGlyph({ className }: IconProps) {
  return <DocumentIconSvg className={className} />;
}

export function ContactGlyph({ className }: IconProps) {
  return <ContactIconSvg className={className} />;
}

export function SettingsGlyph({ className }: IconProps) {
  return <SettingIconSvg className={className} />;
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
  return <SafariIconSvg className={className} />;
}

export function NotesGlyph({ className }: IconProps) {
  return <NoteIconSvg className={className} />;
}

export function TrashGlyph({ className }: IconProps) {
  return <TrashIconSvg className={className} />;
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
