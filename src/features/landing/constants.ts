import type { LucideIcon } from "lucide-react"
import {
  AlertTriangle,
  BarChart3,
  Bot,
  Cloud,
  Eye,
  FileX,
  Gauge,
  Globe,
  Languages,
  Map,
  MapPin,
  MessageSquare,
  Mic,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export const HERO = {
  eyebrow: "AI-Powered Civic Intelligence Platform",
  tagline: "One Report. Six AI Agents. One Stronger Community.",
  headline: {
    before: "When neighbors speak up, ",
    highlight: "communities transform.",
  },
  description:
    "Community Hero turns a single photo and voice note into a verified, prioritized, trackable civic action—so every report reaches the right authority and every resident stays informed.",
  ctas: {
    primary: {
      label: "Report an Issue",
      href: "#report",
    },
    secondary: {
      label: "Explore Live Map",
      href: "#map",
    },
  },
} as const

export const HERO_TRUST_BADGES = [
  { id: "ai-powered", label: "AI Powered", icon: Sparkles },
  { id: "real-time", label: "Real-Time Tracking", icon: MapPin },
  { id: "multilingual", label: "Multilingual", icon: Languages },
] as const satisfies ReadonlyArray<{
  id: string
  label: string
  icon: LucideIcon
}>

export const CIVIC_PROBLEM = {
  id: "problem",
  eyebrow: "The civic problem",
  title: "Reporting should connect people—not bury them in paperwork",
  description:
    "Most cities still run on forms, phone trees, and hope. Citizens report once, then hear nothing. Trust erodes. Issues pile up. Community Hero exists to close that gap.",
  cards: [
    {
      id: "black-hole",
      icon: FileX,
      title: "Reports vanish into a black hole",
      description:
        "Citizens submit issues and never receive updates. Without visibility, people stop reporting—and problems grow unchecked.",
    },
    {
      id: "no-accountability",
      icon: AlertTriangle,
      title: "No one owns the outcome",
      description:
        "Departments pass tickets between desks. Residents cannot see who is responsible or when work will begin.",
    },
    {
      id: "language-barrier",
      icon: Globe,
      title: "Language locks people out",
      description:
        "Official portals assume English fluency and digital literacy, excluding the very communities that need help most.",
    },
    {
      id: "slow-response",
      icon: Gauge,
      title: "Urgency is invisible",
      description:
        "A pothole and a gas leak look the same in a spreadsheet. Without intelligent triage, critical issues wait in line.",
    },
  ],
} as const satisfies {
  id: string
  eyebrow: string
  title: string
  description: string
  cards: ReadonlyArray<{
    id: string
    icon: LucideIcon
    title: string
    description: string
  }>
}

export const AI_SOLUTION = {
  id: "solution",
  eyebrow: "The AI solution",
  title: "From one citizen report to community resolution",
  description:
    "Community Hero is an AI operating system for civic life. Every report flows through specialized agents that understand, validate, prioritize, and coordinate—then bring the community back into the loop.",
  flow: [
    { id: "citizen", label: "Citizen", detail: "Snaps a photo, records a voice note, or taps a map pin" },
    { id: "agents", label: "AI Agents", detail: "Six specialized agents analyze, verify, and route the report" },
    { id: "authorities", label: "Authorities", detail: "Ward engineers and departments receive prioritized work orders" },
    { id: "community", label: "Community", detail: "Neighbors track progress and verify fixes together" },
    { id: "resolution", label: "Resolution", detail: "Issues close with proof—and trust is rebuilt block by block" },
  ],
} as const

export const AGENT_PIPELINE = {
  id: "agents",
  eyebrow: "AI agent pipeline",
  title: "Six agents. One coordinated workflow.",
  description:
    "Each agent owns a single responsibility. Together they transform raw citizen input into actionable intelligence—without a single line of hardcoded guesswork.",
  agents: [
    {
      id: "vision",
      icon: Eye,
      title: "Vision Agent",
      responsibility: "Analyzes photos and visual evidence from citizen reports",
    },
    {
      id: "geo",
      icon: MapPin,
      title: "Geo Agent",
      responsibility: "Maps issues to precise ward boundaries and landmarks",
    },
    {
      id: "trust",
      icon: ShieldCheck,
      title: "Trust Agent",
      responsibility: "Validates authenticity and flags duplicate or spam reports",
    },
    {
      id: "priority",
      icon: Gauge,
      title: "Priority Agent",
      responsibility: "Ranks urgency and community impact for faster response",
    },
    {
      id: "prediction",
      icon: TrendingUp,
      title: "Prediction Agent",
      responsibility: "Forecasts resolution timelines based on historical patterns",
    },
    {
      id: "copilot",
      icon: MessageSquare,
      title: "Community Copilot",
      responsibility: "Guides citizens in their language and explains every step",
    },
  ],
} as const satisfies {
  id: string
  eyebrow: string
  title: string
  description: string
  agents: ReadonlyArray<{
    id: string
    icon: LucideIcon
    title: string
    responsibility: string
  }>
}

export const LIVE_TRACKING = {
  id: "map",
  eyebrow: "Live tracking preview",
  title: "Every report. Every status. In real time.",
  description:
    "Residents and officials share one transparent dashboard—so nobody has to call a helpline to ask what happened to their report.",
  sampleLabel: "Sample dashboard preview",
  issue: {
    ward: "Ward 18",
    category: "Road Repair",
    progress: 68,
    engineerStatus: "Engineer assigned — inspection complete",
    eta: "Estimated resolution: 4 days",
    verification: "3 of 5 neighbors verified on-site",
  },
} as const

export const DIGITAL_TWIN = {
  id: "twin",
  eyebrow: "Community digital twin",
  title: "Your neighborhood, measured and understood",
  description:
    "AI synthesizes reports, resolutions, and community feedback into living health scores—giving leaders and residents a shared picture of civic wellbeing.",
  demoLabel: "AI-generated demo scores",
  scores: [
    { id: "infrastructure", label: "Infrastructure", score: 74, trend: "+3 this month" },
    { id: "safety", label: "Safety", score: 81, trend: "+5 this month" },
    { id: "cleanliness", label: "Cleanliness", score: 69, trend: "+2 this month" },
    { id: "water", label: "Water", score: 77, trend: "Stable" },
    { id: "health", label: "Community Health", score: 85, trend: "+4 this month" },
  ],
} as const

export const GOOGLE_TECH = {
  id: "google",
  eyebrow: "Built on Google",
  title: "Powered by the platforms communities already trust",
  description:
    "Community Hero integrates Google technologies end-to-end—so intelligence, infrastructure, and insight scale together.",
  technologies: [
    {
      id: "ai-studio",
      icon: Bot,
      title: "Google AI Studio",
      description: "Gemini powers every agent decision—from vision analysis to community copilot responses.",
    },
    {
      id: "firebase",
      icon: Cloud,
      title: "Firebase",
      description: "Authentication, real-time data sync, and secure storage keep reports flowing instantly.",
    },
    {
      id: "maps",
      icon: Map,
      title: "Google Maps",
      description: "Precise geolocation, ward mapping, and live issue pins connect reports to places.",
    },
    {
      id: "speech",
      icon: Mic,
      title: "Speech",
      description: "Voice-to-text and text-to-speech let every resident report in the way that feels natural.",
    },
    {
      id: "translate",
      icon: Languages,
      title: "Translate",
      description: "Multilingual support ensures no neighbor is excluded because of language.",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics",
      description: "Usage and impact metrics help cities measure what is working and where to invest.",
    },
  ],
} as const satisfies {
  id: string
  eyebrow: string
  title: string
  description: string
  technologies: ReadonlyArray<{
    id: string
    icon: LucideIcon
    title: string
    description: string
  }>
}

export const COMMUNITY_IMPACT = {
  id: "impact",
  eyebrow: "Community impact",
  title: "The difference transparency makes",
  description:
    "When citizens see progress, they report more, volunteer more, and trust more. These numbers illustrate what becomes possible.",
  demoLabel: "Sample statistics for demonstration",
  stats: [
    { id: "solved", label: "Issues Solved", value: 1247, suffix: "" },
    { id: "citizens", label: "Citizens Helped", value: 8934, suffix: "" },
    { id: "volunteer", label: "Volunteer Hours", value: 3420, suffix: "" },
    { id: "resolution", label: "Resolution Rate", value: 94, suffix: "%" },
  ],
} as const

export const FINAL_CTA = {
  id: "get-started",
  title: "Build Better Communities Together",
  description:
    "Join the movement to make civic reporting transparent, intelligent, and human. One report at a time, we strengthen the neighborhoods we call home.",
  ctas: {
    primary: { label: "Get Started", href: "#report" },
    secondary: { label: "Watch AI in Action", href: "#agents" },
  },
} as const

export const LANDING_SECTIONS = {
  hero: HERO,
  civicProblem: CIVIC_PROBLEM,
  aiSolution: AI_SOLUTION,
  agentPipeline: AGENT_PIPELINE,
  liveTracking: LIVE_TRACKING,
  digitalTwin: DIGITAL_TWIN,
  googleTech: GOOGLE_TECH,
  communityImpact: COMMUNITY_IMPACT,
  finalCta: FINAL_CTA,
} as const
