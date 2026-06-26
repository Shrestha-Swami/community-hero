"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

import { GlassPanel } from "@/components/common/glass-panel"
import { Button } from "@/components/ui/button"
import { FINAL_CTA } from "@/features/landing/constants"
import { useInViewAnimation, useReducedMotionPreference } from "@/features/landing/hooks"
import { fadeInUp } from "@/features/landing/utils"

import { SectionContainer, SectionShell } from "./section-shell"

export function FinalCtaSection() {
  const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotionPreference()
  const headingId = "final-cta-heading"

  return (
    <SectionShell
      id={FINAL_CTA.id}
      ariaLabelledby={headingId}
      variant="gradient"
    >
      <SectionContainer ref={ref} className="py-24 lg:py-32">
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <GlassPanel className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
            <h2
              id={headingId}
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {FINAL_CTA.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              {FINAL_CTA.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-full px-8 text-base sm:w-auto"
              >
                <Link href={FINAL_CTA.ctas.primary.href}>
                  {FINAL_CTA.ctas.primary.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-full border-white/80 bg-white/50 px-8 text-base backdrop-blur-md hover:bg-white/80 sm:w-auto"
              >
                <Link href={FINAL_CTA.ctas.secondary.href}>
                  <Play className="size-4" />
                  {FINAL_CTA.ctas.secondary.label}
                </Link>
              </Button>
            </div>
          </GlassPanel>
        </motion.div>
      </SectionContainer>
    </SectionShell>
  )
}
