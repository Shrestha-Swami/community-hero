"use client"

import { motion } from "framer-motion"

import { GlassPanel } from "@/components/common/glass-panel"
import type { TechCardProps } from "@/features/landing/types"
import { fadeInUp } from "@/features/landing/utils"

export function TechCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: TechCardProps) {
  return (
    <motion.div variants={fadeInUp} transition={{ delay: index * 0.06 }}>
      <GlassPanel className="group h-full p-6 transition-shadow hover:shadow-[0_12px_48px_rgba(15,23,42,0.08)] sm:p-7">
        <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-600">
          <Icon className="size-5" aria-hidden />
        </div>
        <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </GlassPanel>
    </motion.div>
  )
}
