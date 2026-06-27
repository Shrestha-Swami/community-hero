"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { FOOTER_LINKS, SITE } from "@/constants"

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  const getTranslationKey = (label: string) => {
    switch (label) {
      case "Privacy": return "footer.privacy"
      case "Terms": return "footer.terms"
      case "Contact": return "footer.contact"
      default: return ""
    }
  }

  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-base font-semibold text-foreground">{SITE.name}</p>
            <p className="max-w-sm text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => {
              const translationKey = getTranslationKey(link.label)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm"
                  >
                    {translationKey ? t(translationKey) : link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="text-xs text-muted-foreground">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  )
}
