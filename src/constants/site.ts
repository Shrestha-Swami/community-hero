export const SITE = {
  name: "Community Hero",
  tagline: "Empowering communities through collective action",
  description:
    "Community Hero connects neighbors, organizers, and volunteers to solve local challenges together.",
} as const

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/report", label: "Report Issue" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/reports", label: "My Reports" },
] as const

export const FOOTER_LINKS = [
  { href: "#privacy", label: "Privacy" },
  { href: "#terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
] as const
