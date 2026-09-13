"use client";

import { FormEvent, useEffect, useRef, useState, type ReactNode } from "react";
import {
  AaGlyph,
  AttachGlyph,
  EmojiGlyph,
  InsertGlyph,
  ReplyGlyph,
  SendGlyph,
  UploadGlyph,
  WandGlyph,
} from "@/components/os/OsIcons";
import { OsDialog } from "@/components/os/OsDialog";
import { OsNavLink } from "@/components/os/OsNavLink";
import { Button } from "@/components/ui/button";
import { contactConfig } from "@/data/contact-config";
import { sendContactEmail } from "@/lib/mail";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1 w-full rounded-btn border-2 border-ink bg-cream-alt px-3 py-2 text-body outline-none focus:ring-2 focus:ring-ink";

function ToolbarButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={!onClick}
      onClick={onClick}
      className="flex size-9 items-center justify-center border-2 border-ink bg-cream-alt text-ink disabled:text-muted"
    >
      <span className="size-5">{children}</span>
    </button>
  );
}

export function MailComposeWindow() {
  const subjectRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [body, setBody] = useState("");
  const [attachmentName, setAttachmentName] = useState<string>();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    subjectRef.current?.focus();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    await sendContactEmail({
      to: contactConfig.email,
      cc,
      subject,
      fromName,
      fromEmail,
      body,
      attachmentName,
    });
    setSending(false);
    setSent(true);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            <ToolbarButton label="Reply">
              <ReplyGlyph />
            </ToolbarButton>
            <ToolbarButton label="Text style">
              <AaGlyph />
            </ToolbarButton>
            <ToolbarButton label="Emoji">
              <EmojiGlyph />
            </ToolbarButton>
            <ToolbarButton label="Effects">
              <WandGlyph />
            </ToolbarButton>
            <ToolbarButton label="Insert">
              <InsertGlyph />
            </ToolbarButton>
            <ToolbarButton
              label="Attachment"
              onClick={() => fileRef.current?.click()}
            >
              <AttachGlyph />
            </ToolbarButton>
            <ToolbarButton label="Upload">
              <UploadGlyph />
            </ToolbarButton>
          </div>
          <button
            type="submit"
            aria-label="Send"
            disabled={sending}
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-ink text-cream",
              sending && "opacity-50"
            )}
          >
            <span className="size-6">
              <SendGlyph />
            </span>
          </button>
        </div>

        <input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={(event) =>
            setAttachmentName(event.target.files?.[0]?.name)
          }
        />

        <label className="mt-5 block">
          <span className="text-caption text-muted">To</span>
          <input
            value={contactConfig.email}
            readOnly
            className={cn(fieldClass, "text-muted")}
          />
        </label>
        <label className="mt-3 block">
          <span className="text-caption text-muted">Cc</span>
          <input
            value={cc}
            onChange={(event) => setCc(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="mt-3 block">
          <span className="text-caption text-muted">Subject</span>
          <input
            ref={subjectRef}
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="mt-3 block">
          <span className="text-caption text-muted">From name</span>
          <input
            value={fromName}
            onChange={(event) => setFromName(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="mt-3 block">
          <span className="text-caption text-muted">From email</span>
          <input
            type="email"
            value={fromEmail}
            onChange={(event) => setFromEmail(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="mt-3 block">
          <span className="text-caption text-muted">Message</span>
          <textarea
            rows={8}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className={fieldClass}
          />
        </label>
        {attachmentName ? (
          <p className="mt-2 text-caption text-muted">File: {attachmentName}</p>
        ) : null}
      </form>

      <div className="mt-6">
        <Button asChild variant="secondary">
          <OsNavLink href="/contact">Back to Contact</OsNavLink>
        </Button>
      </div>

      {sent ? (
        <OsDialog title="Mail sent" onClose={() => setSent(false)}>
          <p>Your note is in the outbox stub. No real email was delivered.</p>
        </OsDialog>
      ) : null}
    </>
  );
}
