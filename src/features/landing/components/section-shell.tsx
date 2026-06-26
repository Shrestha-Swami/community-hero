import { forwardRef, type ReactNode } from "react"

import { cn } from "@/lib/utils"
import type { SectionShellProps } from "@/features/landing/types"

const variantClasses = {
  default: "bg-white",
  soft: "bg-slate-50/80",
  gradient: "bg-gradient-to-b from-white via-slate-50/50 to-emerald-50/30",
} as const

export function SectionShell({
  id,
  ariaLabelledby,
  children,
  className,
  variant = "default",
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("relative overflow-hidden", variantClasses[variant], className)}
    >
      {children}
    </section>
  )
}

export const SectionContainer = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(function SectionContainer({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28",
        className
      )}
    >
      {children}
    </div>
  )
})
