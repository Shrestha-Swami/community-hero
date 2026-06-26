"use client"

import { motion } from "framer-motion"

import { COMMUNITY_IMPACT } from "@/features/landing/constants"
import { useInViewAnimation, useReducedMotionPreference } from "@/features/landing/hooks"
import { staggerContainer } from "@/features/landing/utils"

import { AnimatedCounter } from "./animated-counter"
import { SectionContainer, SectionShell } from "./section-shell"
import { SectionHeading } from "./section-heading"

export function CommunityImpactSection() {
  const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotionPreference()
  const headingId = "community-impact-heading"
  const active = isInView || Boolean(prefersReducedMotion)

  return (
    <SectionShell
      id={COMMUNITY_IMPACT.id}
      ariaLabelledby={headingId}
      variant="soft"
    >
      <SectionContainer ref={ref}>
        <SectionHeading
          id={headingId}
          eyebrow={COMMUNITY_IMPACT.eyebrow}
          title={COMMUNITY_IMPACT.title}
          description={COMMUNITY_IMPACT.description}
          align="center"
          className="mx-auto"
        />

        <p className="mb-10 text-center text-xs font-medium uppercase tracking-wider text-amber-600">
          {COMMUNITY_IMPACT.demoLabel}
        </p>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={active ? "visible" : "hidden"}
          variants={staggerContainer}
          role="list"
          aria-label="Community impact statistics"
        >
          {COMMUNITY_IMPACT.stats.map((stat) => (
            <div key={stat.id} role="listitem">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                active={active}
              />
            </div>
          ))}
        </motion.div>
      </SectionContainer>
    </SectionShell>
  )
}
