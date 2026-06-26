import { cn } from "@/lib/utils"
import type { SectionHeadingProps } from "@/features/landing/types"

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl space-y-4 lg:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  )
}
