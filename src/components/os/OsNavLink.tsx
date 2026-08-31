"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { useWindowManager } from "@/components/os/WindowManager";
import { hrefToWindowId } from "@/lib/nav";

type OsNavLinkProps = ComponentProps<typeof Link>;

export function OsNavLink({ href, onClick, ...props }: OsNavLinkProps) {
  const { restore } = useWindowManager();
  const router = useRouter();
  const pathname = usePathname();
  const target = typeof href === "string" ? href : (href.pathname ?? "/");

  return (
    <Link
      href={href}
      onClick={(event) => {
        if (window.matchMedia("(min-width: 768px)").matches) {
          event.preventDefault();
          restore(hrefToWindowId(target));
          if (pathname !== "/") router.replace("/");
        }
        onClick?.(event);
      }}
      {...props}
    />
  );
}
