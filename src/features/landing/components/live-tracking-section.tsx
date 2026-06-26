"use client"

import { motion } from "framer-motion"

import { GlassPanel } from "@/components/common/glass-panel"
import { cn } from "@/lib/utils"
import { LIVE_TRACKING } from "@/features/landing/constants"
import { useInViewAnimation, useReducedMotionPreference } from "@/features/landing/hooks"
import { fadeInUp } from "@/features/landing/utils"

import { SectionContainer, SectionShell } from "./section-shell"
import { SectionHeading } from "./section-heading"

export function LiveTrackingSection() {
  const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotionPreference()
  const headingId = "live-tracking-heading"
  const { issue } = LIVE_TRACKING

  return (
    <SectionShell
      id={LIVE_TRACKING.id}
      ariaLabelledby={headingId}
      variant="soft"
    >
      <SectionContainer ref={ref}>
        <SectionHeading
          id={headingId}
          eyebrow={LIVE_TRACKING.eyebrow}
          title={LIVE_TRACKING.title}
          description={LIVE_TRACKING.description}
        />

        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <GlassPanel className="overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-600">
                  {LIVE_TRACKING.sampleLabel}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
                  {issue.category}
                </h3>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
                {issue.ward}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">Progress</span>
                  <span className="font-semibold text-emerald-600">
                    {issue.progress}%
                  </span>
                </div>
                <div
                  className="h-3 overflow-hidden rounded-full bg-slate-100"
                  role="progressbar"
                  aria-valuenow={issue.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Issue resolution progress"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-700"
                    style={{ width: `${issue.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <DashboardField label="Engineer Status" value={issue.engineerStatus} />
                <DashboardField label="ETA" value={issue.eta} />
                <DashboardField
                  label="Community Verification"
                  value={issue.verification}
                  className="sm:col-span-2 lg:col-span-1"
                />
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </SectionContainer>
    </SectionShell>
  )
}

function DashboardField({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/70 bg-white/40 p-4 backdrop-blur-sm",
        className
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">
        {value}
      </p>
    </div>
  )
}
