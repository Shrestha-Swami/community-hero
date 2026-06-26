"use client"

import { motion } from "framer-motion"

import { DIGITAL_TWIN } from "@/features/landing/constants"
import { useInViewAnimation, useReducedMotionPreference } from "@/features/landing/hooks"
import { staggerContainer } from "@/features/landing/utils"

import { ScoreCard } from "./score-card"
import { SectionContainer, SectionShell } from "./section-shell"
import { SectionHeading } from "./section-heading"

export function DigitalTwinSection() {
  const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotionPreference()
  const headingId = "digital-twin-heading"

  return (
    <SectionShell
      id={DIGITAL_TWIN.id}
      ariaLabelledby={headingId}
      variant="gradient"
    >
      <SectionContainer ref={ref}>
        <SectionHeading
          id={headingId}
          eyebrow={DIGITAL_TWIN.eyebrow}
          title={DIGITAL_TWIN.title}
          description={DIGITAL_TWIN.description}
          align="center"
          className="mx-auto"
        />

        <p className="mb-10 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
          {DIGITAL_TWIN.demoLabel}
        </p>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {DIGITAL_TWIN.scores.map((score, index) => (
            <ScoreCard
              key={score.id}
              label={score.label}
              score={score.score}
              trend={score.trend}
              index={index}
            />
          ))}
        </motion.div>
      </SectionContainer>
    </SectionShell>
  )
}
