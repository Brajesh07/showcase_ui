"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/site";

export function ContactWindow() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Hello from ${name || "the desktop"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <p className="text-body">
        Want to work together? Drop a note. One button. No maze of forms.
      </p>
      <p className="mt-3 text-body">
        Direct line: {profile.email} · {profile.phone}
      </p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-caption text-muted">Your name</span>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-btn border-2 border-ink bg-cream-alt px-3 py-2 text-body outline-none focus:ring-2 focus:ring-ink"
          />
        </label>
        <label className="block">
          <span className="text-caption text-muted">Your email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-btn border-2 border-ink bg-cream-alt px-3 py-2 text-body outline-none focus:ring-2 focus:ring-ink"
          />
        </label>
        <label className="block">
          <span className="text-caption text-muted">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded-btn border-2 border-ink bg-cream-alt px-3 py-2 text-body outline-none focus:ring-2 focus:ring-ink"
          />
        </label>
        <Button type="submit">Send message</Button>
        {sent ? (
          <p className="text-caption text-muted">
            Opening your mail app. If nothing happens, write {profile.email}{" "}
            directly.
          </p>
        ) : null}
      </form>
    </>
  );
}
