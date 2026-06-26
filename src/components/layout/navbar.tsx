"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE } from "@/constants"
import { cn } from "@/lib/utils"
import { AuthControls } from "@/features/auth/components/auth-controls"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
        >
          {SITE.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <AuthControls />
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <AuthControls />
          </li>
        </ul>
      </div>
    </header>
  )
}
