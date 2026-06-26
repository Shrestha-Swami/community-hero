"use client"

import { motion } from "framer-motion"

import { GlassPanel } from "@/components/common/glass-panel"
import type { AgentPipelineItemProps } from "@/features/landing/types"
import { fadeInUp } from "@/features/landing/utils"

export function AgentPipelineItem({
  icon: Icon,
  title,
  responsibility,
  index,
}: Omit<AgentPipelineItemProps, "isLast">) {
  return (
    <motion.li
      variants={fadeInUp}
      transition={{ delay: index * 0.08 }}
      className="relative flex min-w-[240px] flex-1 flex-col items-center text-center lg:min-w-0"
    >
      <GlassPanel className="flex size-14 items-center justify-center rounded-2xl p-0 shadow-[0_8px_32px_rgba(16,185,129,0.12)]">
        <Icon className="size-6 text-emerald-600" aria-hidden />
      </GlassPanel>

      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-emerald-600">
        Step {index + 1}
      </p>
      <h3 className="mt-1 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-600">
        {responsibility}
      </p>
    </motion.li>
  )
}

export function AgentPipelineConnector() {
  return (
    <div
      aria-hidden
      className="absolute left-8 right-8 top-7 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block"
      style={{ top: "1.75rem" }}
    />
  )
}
