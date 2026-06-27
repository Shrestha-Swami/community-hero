"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  Clock3,
  FileText,
  Sparkles,
  Sliders,
  Target,
  UserCheck,
  Wrench,
} from "lucide-react";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { SectionTitle, ErrorCard } from "@/components/common";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { subscribeToUserReports } from "@/features/report/services/report.service";
import { ReportCard } from "@/features/report/components/ReportCard";
import type { Report } from "@/features/report/types";
import { cn } from "@/lib/utils";
import { Flame, Award, Medal, Trophy, ShieldAlert, Lock } from "lucide-react";
import { useGamification } from "@/features/gamification/context/GamificationContext";
import { getLevelProgress } from "@/features/gamification/services/gamification.service";
import { BADGES } from "@/features/gamification/constants";
import { Leaderboard } from "@/features/gamification/components/Leaderboard";
import { db } from "@/firebase";
import { collection, query, where, getCountFromServer } from "firebase/firestore";

function formatDate(date?: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { profile, loading: gamificationLoading } = useGamification();
  const [rank, setRank] = useState<number | null>(null);

  useEffect(() => {
    if (!profile) return;

    async function fetchRank(points: number) {
      try {
        const rankQuery = query(
          collection(db, "users"),
          where("heroPoints", ">", points)
        );
        const snapshot = await getCountFromServer(rankQuery);
        setRank(snapshot.data().count + 1);
      } catch (err) {
        console.error("Error fetching rank:", err);
      }
    }

    fetchRank(profile.heroPoints);
  }, [profile?.heroPoints]);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setReports([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const unsubscribe = subscribeToUserReports(
      user.uid,
      (data) => {
        setReports(data);
        setLoading(false);
      },
      (err: any) => {
        console.error("Dashboard reports subscription error:", err);
        setReports([]);
        setError(
          err?.message === "User must be logged in."
            ? "Please log in to view your reports."
            : "Unable to load your reports. Please try again later."
        );
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user?.uid, authLoading]);

  const stats = useMemo(() => {
    const total = reports.length;
    const pending = reports.filter((report) => report.status === "Pending").length;
    const assigned = reports.filter((report) => report.status === "Assigned").length;
    const inProgress = reports.filter((report) => report.status === "In Progress").length;
    const resolved = reports.filter((report) => report.status === "Resolved").length;

    return { total, pending, assigned, inProgress, resolved };
  }, [reports]);

  const performanceStats = useMemo(() => {
    const reportsWithAi = reports.filter((report) => report.aiAnalysis);

    const verifiedByAi = reportsWithAi.length;

    const highPriority = reportsWithAi.filter(
      (report) => (report.aiAnalysis?.priorityScore ?? 0) >= 80
    ).length;

    const totalPriorityScore = reportsWithAi.reduce(
      (acc, report) => acc + (report.aiAnalysis?.priorityScore ?? 0),
      0
    );
    const avgPriorityScore = reportsWithAi.length > 0
      ? Math.round(totalPriorityScore / reportsWithAi.length)
      : 0;

    const totalConfidence = reportsWithAi.reduce(
      (acc, report) => acc + (report.aiAnalysis?.confidence ?? 0),
      0
    );
    const avgConfidence = reportsWithAi.length > 0
      ? Math.round(totalConfidence / reportsWithAi.length)
      : 0;

    return {
      verifiedByAi,
      highPriority,
      avgPriorityScore,
      avgConfidence,
    };
  }, [reports]);

  const isPageLoading = authLoading || loading || gamificationLoading;

  return (
    <AuthGuard>
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 w-full min-w-0 overflow-x-hidden">
        <SectionTitle
          title="Dashboard"
          subtitle="Your civic impact"
          description="Review your latest submissions, track status, and see how your reports are moving through the community process."
        />

        {/* Gamification Summary Cards */}
        {profile && (
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Hero Level & Points */}
            <div className="group rounded-3xl border border-border bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/40 min-w-0 w-full overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-500 truncate">
                    {profile.heroLevel}
                  </p>
                  <p className="mt-1 text-2xl font-bold">{profile.heroPoints} pts</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500">
                  <Trophy className="size-5" />
                </div>
              </div>
              
              {/* Level Progress */}
              {(() => {
                const prog = getLevelProgress(profile.heroPoints);
                return (
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>Progress to Next Level</span>
                      <span>{prog.progressPercent}%</span>
                    </div>
                    <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-1.5 overflow-hidden w-full">
                      <div
                        className="h-1.5 rounded-full bg-indigo-500 transition-all duration-300"
                        style={{ width: `${prog.progressPercent}%` }}
                      />
                    </div>
                    {prog.nextLevel && (
                      <p className="text-[10px] text-muted-foreground truncate">
                        {prog.pointsRequired} pts until {prog.nextLevel}
                      </p>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Streak */}
            <div className="group rounded-3xl border border-border bg-gradient-to-br from-amber-500/10 via-transparent to-transparent p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-500/40 min-w-0 w-full overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Daily Streak</p>
                  <p className="mt-1 text-2xl font-bold">{profile.streak} Days</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/20 text-amber-500 shrink-0">
                  <Flame className="size-5" />
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">
                Log in daily to maintain your streak!
              </p>
            </div>

            {/* Badges Earned */}
            <div className="group rounded-3xl border border-border bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/40 min-w-0 w-full overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Badges Earned</p>
                  <p className="mt-1 text-2xl font-bold">{profile.badges.length}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 shrink-0">
                  <Award className="size-5" />
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">
                Unlock achievements to earn points!
              </p>
            </div>

            {/* Leaderboard Position */}
            <div className="group rounded-3xl border border-border bg-gradient-to-br from-purple-500/10 via-transparent to-transparent p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-500/40 min-w-0 w-full overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">City Rank</p>
                  <p className="mt-1 text-2xl font-bold">#{rank ?? "—"}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-500 shrink-0">
                  <Medal className="size-5" />
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">
                Your position on the global board
              </p>
            </div>
          </div>
        )}

        {/* Status Summary Cards */}
        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {/* Total Reports */}
          <div className="group rounded-3xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/40 min-w-0 w-full overflow-hidden break-words">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Total reports</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500 transition-colors group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/40">
                <Sparkles className="size-4" />
              </div>
            </div>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.total}</p>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80">
              Your civic contributions
            </p>
          </div>

          {/* Pending */}
          <div className="group rounded-3xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-500/40 min-w-0 w-full overflow-hidden break-words">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Pending</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/20 text-amber-500 transition-colors group-hover:bg-amber-100 dark:group-hover:bg-amber-950/40">
                <Clock3 className="size-4" />
              </div>
            </div>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.pending}</p>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80">
              Awaiting initial review
            </p>
          </div>

          {/* Assigned */}
          <div className="group rounded-3xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-500/40 min-w-0 w-full overflow-hidden break-words">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Assigned</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-500 transition-colors group-hover:bg-purple-100 dark:group-hover:bg-purple-950/40">
                <UserCheck className="size-4" />
              </div>
            </div>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.assigned}</p>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80">
              Assigned to departments
            </p>
          </div>

          {/* In Progress */}
          <div className="group rounded-3xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-500/40 min-w-0 w-full overflow-hidden break-words">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">In progress</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-500 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-950/40">
                <Wrench className="size-4" />
              </div>
            </div>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.inProgress}</p>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80">
              Currently being addressed
            </p>
          </div>

          {/* Resolved */}
          <div className="group rounded-3xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/40 min-w-0 w-full overflow-hidden break-words">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Resolved</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 transition-colors group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/40">
                <CheckCircle2 className="size-4" />
              </div>
            </div>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.resolved}</p>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80">
              Successfully completed
            </p>
          </div>
        </div>

        {/* Performance Section */}
        <section className="mt-10 rounded-3xl border border-border bg-background p-5 sm:p-6 min-w-0 w-full overflow-hidden">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Performance</h2>
              <p className="text-sm text-muted-foreground">
                AI analysis metrics and priority distribution.
              </p>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Verified by AI */}
            <div className="group rounded-2xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-500/40 min-w-0 w-full overflow-hidden break-words">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Verified by AI</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-500 transition-colors group-hover:bg-purple-100 dark:group-hover:bg-purple-950/40">
                  <Brain className="size-4" />
                </div>
              </div>
              <div className="mt-3 h-9 flex items-center">
                {isPageLoading ? (
                  <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
                ) : (
                  <p className="text-3xl font-semibold">{performanceStats.verifiedByAi}</p>
                )}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">
                Reports containing AI analysis
              </p>
            </div>

            {/* High Priority */}
            <div className="group rounded-2xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-rose-500/40 min-w-0 w-full overflow-hidden break-words">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">High Priority</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-500 transition-colors group-hover:bg-rose-100 dark:group-hover:bg-rose-950/40">
                  <AlertTriangle className="size-4" />
                </div>
              </div>
              <div className="mt-3 h-9 flex items-center">
                {isPageLoading ? (
                  <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
                ) : (
                  <p className="text-3xl font-semibold">{performanceStats.highPriority}</p>
                )}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">
                Priority score &ge; 80
              </p>
            </div>

            {/* Average Priority Score */}
            <div className="group rounded-2xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-500/40 min-w-0 w-full overflow-hidden break-words">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Average Priority</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/20 text-amber-500 transition-colors group-hover:bg-amber-100 dark:group-hover:bg-amber-950/40">
                  <Sliders className="size-4" />
                </div>
              </div>
              <div className="mt-3 h-9 flex items-center">
                {isPageLoading ? (
                  <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
                ) : (
                  <p className="text-3xl font-semibold">{performanceStats.avgPriorityScore}</p>
                )}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">
                Average score of AI reports
              </p>
            </div>

            {/* Average AI Confidence */}
            <div className="group rounded-2xl border border-border bg-background p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal-500/40 min-w-0 w-full overflow-hidden break-words">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Average AI Confidence</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-500 transition-colors group-hover:bg-teal-100 dark:group-hover:bg-teal-950/40">
                  <Target className="size-4" />
                </div>
              </div>
              <div className="mt-3 h-9 flex items-center">
                {isPageLoading ? (
                  <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
                ) : (
                  <p className="text-3xl font-semibold">{performanceStats.avgConfidence}%</p>
                )}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">
                Confidence of AI processing
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-background p-4 sm:p-6 min-w-0 w-full overflow-hidden">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Recent reports</h2>
              <p className="text-sm text-muted-foreground">
                Latest issues submitted by you.
              </p>
            </div>
          </div>

          {isPageLoading ? (
            <p className="mt-6 text-sm text-muted-foreground">Loading your reports…</p>
          ) : error ? (
            <div className="mt-6">
              <ErrorCard message={error} />
            </div>
          ) : reports.length === 0 ? (
            <p className="mt-6 text-sm text-muted-foreground">
              No reports found yet. Submit your first report to start tracking progress.
            </p>
          ) : (
            <div className="mt-6 space-y-4">
              {reports.slice(0, 5).map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          )}
        </section>

        {/* Gamification Details Section */}
        {profile && (
          <div className="mt-10 grid gap-6 grid-cols-1 lg:grid-cols-3">
            {/* Badges Gallery */}
            <section className="lg:col-span-2 rounded-3xl border border-border bg-background p-5 sm:p-6 min-w-0 w-full overflow-hidden">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Civic Badges</h2>
                <p className="text-sm text-muted-foreground">
                  Earn badges by contributing to community cleanups and report tracking.
                </p>
              </div>

              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {BADGES.map((badge) => {
                  const isUnlocked = profile.badges.includes(badge.id);
                  return (
                    <div
                      key={badge.id}
                      className={cn(
                        "flex items-start gap-3 rounded-2xl border p-4 transition-all duration-300",
                        isUnlocked
                          ? "border-emerald-500/30 bg-emerald-500/5 shadow-xs"
                          : "border-border bg-background opacity-60 grayscale"
                      )}
                    >
                      <div className="text-3xl shrink-0">{badge.icon}</div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 justify-between">
                          <span className="font-semibold text-xs text-foreground truncate">
                            {badge.name}
                          </span>
                          {!isUnlocked && <Lock className="h-3 w-3 text-muted-foreground shrink-0" />}
                        </div>
                        <p className="mt-1 text-[10px] text-muted-foreground leading-normal line-clamp-2">
                          {badge.description}
                        </p>
                        {isUnlocked && (
                          <span className="mt-2 inline-flex items-center text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">
                            +{badge.pointsAwarded} pts
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Leaderboard Widget */}
            <aside className="lg:col-span-1">
              <Leaderboard />
            </aside>
          </div>
        )}
      </main>
    </AuthGuard>
  );
}
