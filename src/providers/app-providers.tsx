"use client"

import type { ReactNode } from "react"
import { GamificationProvider } from "@/features/gamification/context/GamificationContext"

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <GamificationProvider>
      {children}
    </GamificationProvider>
  )
}
