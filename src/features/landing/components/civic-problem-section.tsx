"use client"

import { motion } from "framer-motion"

import { CIVIC_PROBLEM } from "@/features/landing/constants"
import { useInViewAnimation, useReducedMotionPreference } from "@/features/landing/hooks"
import { staggerContainer } from "@/features/landing/utils"

import { AnimatedCard } from "./animated-card"
import { SectionContainer, SectionShell } from "./section-shell"
import { SectionHeading } from "./section-heading"

export function CivicProblemSection() {
  const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotionPreference()
  const headingId = "civic-problem-heading"

  return (
    <SectionShell
      id={CIVIC_PROBLEM.id}
      ariaLabelledby={headingId}
      variant="soft"
    >
      <SectionContainer ref={ref}>
        <SectionHeading
          id={headingId}
          eyebrow={CIVIC_PROBLEM.eyebrow}
          title={CIVIC_PROBLEM.title}
          description={CIVIC_PROBLEM.description}
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:gap-6"
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {CIVIC_PROBLEM.cards.map((card, index) => (
            <AnimatedCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </motion.div>
      </SectionContainer>
    </SectionShell>
  )
}
