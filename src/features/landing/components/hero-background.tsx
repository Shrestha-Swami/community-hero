"use client"

import { motion } from "framer-motion"

import { useReducedMotionPreference } from "@/features/landing/hooks"

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotionPreference()

  if (prefersReducedMotion) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute top-32 -right-20 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>
    )
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-32 -right-20 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-indigo-100/50 blur-3xl"
        animate={{ x: [0, 16, 0], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-teal-100/40 blur-2xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
