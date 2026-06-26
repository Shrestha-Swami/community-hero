import Link from "next/link"

import { FOOTER_LINKS, SITE } from "@/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-base font-semibold text-foreground">{SITE.name}</p>
            <p className="max-w-sm text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {year} {SITE.name}.
        </p>
      </div>
    </footer>
  )
}
