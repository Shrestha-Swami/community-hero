"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, FileText, Sparkles, TrendingUp } from "lucide-react";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { SectionTitle, ErrorCard } from "@/components/common";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { fetchUserReports } from "@/features/report/services/report.service";
import { ReportCard } from "@/features/report/components/ReportCard";
import type { Report } from "@/features/report/types";

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

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setLoading(false);
      return;
    }

    async function loadReports() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchUserReports();
        setReports(data);
      } catch (err: any) {
        console.error(err);
        setError(err?.message === "User must be logged in." ? "Please log in to view your reports." : "Unable to load your reports. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, [authLoading, user]);

  const stats = useMemo(() => {
    const total = reports.length;
    const pending = reports.filter((report) => report.status === "Pending").length;
    const resolved = reports.filter((report) => report.status === "Resolved").length;
    const verified = reports.filter((report) => report.status === "Verified").length;

    return { total, pending, resolved, verified };
  }, [reports]);

  const isPageLoading = authLoading || loading;

  return (
    <AuthGuard>
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 w-full min-w-0 overflow-x-hidden">
        <SectionTitle
          title="Dashboard"
          subtitle="Your civic impact"
          description="Review your latest submissions, track status, and see how your reports are moving through the community process."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-border bg-background p-4 sm:p-6 min-w-0 w-full overflow-hidden break-words">
            <p className="text-sm font-medium text-muted-foreground">Total reports</p>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.total}</p>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <Sparkles className="size-4" /> Your contributions
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-4 sm:p-6 min-w-0 w-full overflow-hidden break-words">
            <p className="text-sm font-medium text-muted-foreground">Pending review</p>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.pending}</p>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <Clock3 className="size-4" /> Awaiting verification
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-medium text-muted-foreground">Verified</p>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.verified}</p>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <TrendingUp className="size-4" /> Confirmed impact
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-medium text-muted-foreground">Resolved</p>
            <div className="mt-3 h-9 flex items-center">
              {isPageLoading ? (
                <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
              ) : (
                <p className="text-3xl font-semibold">{stats.resolved}</p>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <FileText className="size-4" /> Completed cases
            </div>
          </div>
        </div>

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
      </main>
    </AuthGuard>
  );
}
