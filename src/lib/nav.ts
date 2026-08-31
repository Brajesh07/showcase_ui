export type SceneId =
  | "home"
  | "finder"
  | "documents"
  | "contact"
  | "settings"
  | "browser"
  | "notes";

export type WindowId = string;

export type NavItem = {
  href: string;
  label: string;
  scene: SceneId;
  icon: "home" | "finder" | "documents" | "contact" | "settings" | "browser" | "notes";
};

export const desktopSideIcons: NavItem[] = [
  { href: "/finder", label: "Finder", scene: "finder", icon: "finder" },
  {
    href: "/documents",
    label: "Documents",
    scene: "documents",
    icon: "documents",
  },
  { href: "/browser", label: "Browser", scene: "browser", icon: "browser" },
  { href: "/notes", label: "Notes", scene: "notes", icon: "notes" },
  { href: "/contact", label: "Contact", scene: "contact", icon: "contact" },
  {
    href: "/settings",
    label: "Settings",
    scene: "settings",
    icon: "settings",
  },
];

export const dockItems: NavItem[] = [
  { href: "/", label: "Home", scene: "home", icon: "home" },
  { href: "/finder", label: "Projects", scene: "finder", icon: "finder" },
  {
    href: "/documents",
    label: "Documents",
    scene: "documents",
    icon: "documents",
  },
  { href: "/contact", label: "Contact", scene: "contact", icon: "contact" },
  { href: "/browser", label: "Browser", scene: "browser", icon: "browser" },
];

export function sceneFromPath(pathname: string): SceneId {
  if (pathname.startsWith("/finder")) return "finder";
  if (pathname.startsWith("/documents")) return "documents";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/settings")) return "settings";
  if (pathname.startsWith("/browser")) return "browser";
  if (pathname.startsWith("/notes")) return "notes";
  return "home";
}

export function hrefToWindowId(href: string): WindowId {
  if (href === "/") return "welcome";
  if (href === "/finder") return "finder";
  if (href === "/documents") return "documents";
  if (href === "/contact") return "contact";
  if (href === "/settings") return "settings";
  if (href === "/browser") return "browser";
  if (href === "/notes") return "notes";
  const project = href.match(/^\/finder\/([^/]+)$/);
  if (project) return `project:${project[1]}`;
  const file = href.match(/^\/documents\/([^/]+)$/);
  if (file) return `file:${file[1]}`;
  return "welcome";
}

export function windowIdToScene(id: WindowId): SceneId {
  if (id === "finder" || id.startsWith("project:")) return "finder";
  if (id === "documents" || id.startsWith("file:")) return "documents";
  if (id === "contact") return "contact";
  if (id === "settings") return "settings";
  if (id === "browser") return "browser";
  if (id === "notes") return "notes";
  return "home";
}

export function parseWindowQuery(value: string | null): WindowId | null {
  if (!value) return null;
  if (value.startsWith("project-")) return `project:${value.slice(8)}`;
  if (value.startsWith("file-")) return `file:${value.slice(5)}`;
  if (
    value === "welcome" ||
    value === "finder" ||
    value === "documents" ||
    value === "contact" ||
    value === "settings" ||
    value === "browser" ||
    value === "notes"
  ) {
    return value;
  }
  return null;
}
