"use client"

import { motion } from "framer-motion"

import { useTranslation } from "react-i18next"
import { AGENT_PIPELINE } from "@/features/landing/constants"
import { useInViewAnimation, useReducedMotionPreference } from "@/features/landing/hooks"
import { staggerContainer } from "@/features/landing/utils"

import {
  AgentPipelineConnector,
  AgentPipelineItem,
} from "./agent-pipeline-item"
import { SectionContainer, SectionShell } from "./section-shell"
import { SectionHeading } from "./section-heading"

export function AgentPipelineSection() {
  const { t } = useTranslation()
  const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotionPreference()
  const headingId = "agent-pipeline-heading"

  return (
    <SectionShell
      id={AGENT_PIPELINE.id}
      ariaLabelledby={headingId}
      variant="default"
    >
      <SectionContainer ref={ref}>
        <SectionHeading
          id={headingId}
          eyebrow={t("landing.agents.eyebrow")}
          title={t("landing.agents.title")}
          description={t("landing.agents.description")}
          align="center"
          className="mx-auto"
        />

        <div className="relative">
          <AgentPipelineConnector />

          <motion.ul
            className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0"
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
            variants={staggerContainer}
            aria-label="AI agent pipeline"
          >
            {AGENT_PIPELINE.agents.map((agent, index) => (
              <AgentPipelineItem
                key={agent.id}
                icon={agent.icon}
                title={t(`landing.agents.list.${agent.id}.title`)}
                responsibility={t(`landing.agents.list.${agent.id}.responsibility`)}
                index={index}
              />
            ))}
          </motion.ul>
        </div>
      </SectionContainer>
    </SectionShell>
  )
}
