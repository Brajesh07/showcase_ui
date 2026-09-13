"use client";

import { useState, type ReactNode } from "react";
import { DitheredImage } from "@/components/os/DitheredImage";
import {
  CallGlyph,
  InstagramGlyph,
  LinkedInGlyph,
  MailGlyph,
  MessageGlyph,
  WhatsAppGlyph,
} from "@/components/os/OsIcons";
import { OsDialog } from "@/components/os/OsDialog";
import { OsNavLink } from "@/components/os/OsNavLink";
import {
  contactConfig,
  isContactPlaceholder,
  smsHref,
  telHref,
  whatsappHref,
} from "@/data/contact-config";

function Action({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <>
      <span className="flex size-14 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-cream">
        <span className="size-9">{children}</span>
      </span>
      <span className="text-icon-label">{label}</span>
    </>
  );
}

const actionClass =
  "flex flex-col items-center gap-1.5 text-ink active:scale-[0.94]";

export function ContactWindow() {
  const [callOpen, setCallOpen] = useState(false);
  const phoneReady = !isContactPlaceholder(contactConfig.phoneDigits);

  return (
    <div className="flex flex-col items-center pt-2">
      <DitheredImage
        src={contactConfig.photoSrc}
        alt={contactConfig.name}
        className="size-28 overflow-hidden rounded-full border-[3px] border-ink bg-cream"
        canvasClassName="object-cover"
        pixelSize={2}
        maxWidth={280}
        cover
      />
      <h1 className="mt-4 text-center text-h1">{contactConfig.name}</h1>

      <div className="mt-3 flex items-center gap-3">
        <OsNavLink
          href="/contact/linkedin"
          aria-label="LinkedIn"
          className="flex size-11 items-center justify-center rounded-full border-2 border-ink bg-cream active:scale-[0.94]"
        >
          <span className="size-7">
            <LinkedInGlyph />
          </span>
        </OsNavLink>
        <OsNavLink
          href="/contact/instagram"
          aria-label="Instagram"
          className="flex size-11 items-center justify-center rounded-full border-2 border-ink bg-cream active:scale-[0.94]"
        >
          <span className="size-7">
            <InstagramGlyph />
          </span>
        </OsNavLink>
      </div>

      <div className="my-5 h-0 w-full border-t-2 border-ink" />

      <div className="grid w-full grid-cols-4 gap-2">
        <button
          type="button"
          aria-label="Call"
          className={actionClass}
          onClick={() => setCallOpen(true)}
        >
          <Action label="Call">
            <CallGlyph />
          </Action>
        </button>
        {phoneReady ? (
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className={actionClass}
          >
            <Action label="WhatsApp">
              <WhatsAppGlyph />
            </Action>
          </a>
        ) : (
          <span className={actionClass} aria-label="WhatsApp">
            <Action label="WhatsApp">
              <WhatsAppGlyph />
            </Action>
          </span>
        )}
        {phoneReady ? (
          <a href={smsHref()} aria-label="Message" className={actionClass}>
            <Action label="Message">
              <MessageGlyph />
            </Action>
          </a>
        ) : (
          <span className={actionClass} aria-label="Message">
            <Action label="Message">
              <MessageGlyph />
            </Action>
          </span>
        )}
        <OsNavLink href="/contact/mail" className={actionClass} aria-label="Mail">
          <Action label="Mail">
            <MailGlyph />
          </Action>
        </OsNavLink>
      </div>

      {callOpen ? (
        <OsDialog
          title={`Call ${contactConfig.name}?`}
          onClose={() => setCallOpen(false)}
          actions={[
            {
              label: "Cancel",
              variant: "secondary",
              onClick: () => setCallOpen(false),
            },
            {
              label: "Call",
              onClick: () => {
                setCallOpen(false);
                if (phoneReady) window.location.href = telHref();
              },
            },
          ]}
        >
          <p>{contactConfig.phone}</p>
        </OsDialog>
      ) : null}
    </div>
  );
}
