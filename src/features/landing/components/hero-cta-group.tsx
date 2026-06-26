import Link from "next/link"
import { ArrowRight, Map } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { HeroCtaGroupProps } from "@/features/landing/types"

export function HeroCtaGroup({ primary, secondary, className }: HeroCtaGroupProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
        className
      )}
    >
      <Button
        asChild
        size="lg"
        className="h-12 rounded-full px-6 text-base shadow-[0_4px_24px_rgba(15,23,42,0.12)]"
      >
        <Link href={primary.href}>
          {primary.label}
          <ArrowRight className="size-4" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="h-12 rounded-full border-white/80 bg-white/40 px-6 text-base backdrop-blur-md hover:bg-white/70"
      >
        <Link href={secondary.href}>
          <Map className="size-4" />
          {secondary.label}
        </Link>
      </Button>
    </div>
  )
}
