"use client"

import { motion } from "framer-motion"

import { AI_SOLUTION } from "@/features/landing/constants"
import { useInViewAnimation, useReducedMotionPreference } from "@/features/landing/hooks"
import { staggerContainer } from "@/features/landing/utils"

import { FlowStep } from "./flow-step"
import { SectionContainer, SectionShell } from "./section-shell"
import { SectionHeading } from "./section-heading"

export function AiSolutionSection() {
  const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotionPreference()
  const headingId = "ai-solution-heading"

  return (
    <SectionShell
      id={AI_SOLUTION.id}
      ariaLabelledby={headingId}
      variant="gradient"
    >
      <SectionContainer ref={ref}>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id={headingId}
            eyebrow={AI_SOLUTION.eyebrow}
            title={AI_SOLUTION.title}
            description={AI_SOLUTION.description}
            className="mb-0 lg:sticky lg:top-28"
          />

          <motion.ol
            className="list-none space-y-0"
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
            variants={staggerContainer}
            aria-label="Community Hero resolution flow"
          >
            {AI_SOLUTION.flow.map((step, index) => (
              <li key={step.id}>
                <FlowStep
                  label={step.label}
                  detail={step.detail}
                  index={index}
                  isLast={index === AI_SOLUTION.flow.length - 1}
                />
              </li>
            ))}
          </motion.ol>
        </div>
      </SectionContainer>
    </SectionShell>
  )
}
