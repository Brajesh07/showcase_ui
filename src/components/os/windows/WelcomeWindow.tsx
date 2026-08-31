"use client";

import { Button } from "@/components/ui/button";
import { OsNavLink } from "@/components/os/OsNavLink";
import { profile } from "@/data/site";

export function WelcomeWindow() {
  return (
    <>
      <p className="text-caption text-muted">System dialog</p>
      <h1 className="mt-1 text-h1">{profile.name}</h1>
      <p className="mt-1 text-h2 font-bold">{profile.title}</p>
      <p className="mt-4 text-body">{profile.summary}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <OsNavLink href="/finder">See projects</OsNavLink>
        </Button>
        <Button asChild variant="secondary">
          <OsNavLink href="/contact">Get in touch</OsNavLink>
        </Button>
      </div>
    </>
  );
}
