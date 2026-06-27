"use client";

import { use } from "react";
import { AlertCircle, ArrowLeft, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

import { SectionTitle, ErrorCard } from "@/components/common";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { StatusBadge, ReportProgress, Timeline, useLiveReport } from "@/features/tracking";

function formatDate(date?: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function ReportDetailSkeleton() {
  return (
    <div className="mt-6 space-y-6 animate-pulse w-full min-w-0">
      {/* Main Section Skeleton */}
      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-8 w-2/3 rounded bg-muted" />
          </div>
          <div className="h-6 w-20 rounded-full bg-muted" />
        </div>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/5 p-4 space-y-2">
            <div className="h-4 w-16 rounded bg-muted" />
            <div className="h-4 w-32 rounded bg-muted" />
          </div>
          <div className="rounded-2xl bg-slate-950/5 p-4 space-y-2">
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-4 w-32 rounded bg-muted" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/5 p-4 space-y-2">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="h-4 w-40 rounded bg-muted" />
          </div>
          <div className="rounded-2xl bg-slate-950/5 p-4 space-y-2">
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-4 w-28 rounded bg-muted" />
          </div>
        </div>
      </section>

      {/* Progress Skeleton */}
      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-4 w-32 rounded bg-muted" />
            <div className="h-3 w-48 rounded bg-muted" />
          </div>
          <div className="h-6 w-12 rounded-full bg-muted" />
        </div>
        <div className="h-2 rounded-full bg-muted" />
        <div className="flex gap-4 overflow-x-auto pt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex min-w-[120px] flex-1 flex-col items-center space-y-2">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="h-3 w-16 rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Skeleton */}
      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm space-y-4">
        <div className="space-y-2">
          <div className="h-4 w-32 rounded bg-muted" />
          <div className="h-3 w-56 rounded bg-muted" />
        </div>
        <div className="space-y-4 pt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-muted mt-1" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-24 rounded bg-muted" />
                  <div className="h-3 w-12 rounded bg-muted" />
                </div>
                <div className="h-3 w-20 rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Analysis Skeleton */}
      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm space-y-4">
        <div className="h-5 w-28 rounded bg-muted" />
        <div className="grid gap-3 sm:grid-cols-2 pt-2">
          <div className="space-y-2">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="h-3 w-24 rounded bg-muted" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-16 rounded bg-muted" />
            <div className="h-3 w-20 rounded bg-muted" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="h-3 w-full rounded bg-muted" />
            <div className="h-3 w-5/6 rounded bg-muted" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ReportNotFound() {
  return (
    <div className="mt-8 rounded-3xl border border-dashed border-border bg-background p-6 sm:p-12 text-center shadow-sm max-w-2xl mx-auto w-full min-w-0 break-words">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive shrink-0">
        <AlertCircle className="size-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">Report Not Found</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
        The report you are trying to view does not exist or you do not have permission to view it.
      </p>
      <div className="mt-6">
        <Link
          href="/reports"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90"
        >
          Back to Reports
        </Link>
      </div>
    </div>
  );
}

function ReportDetailContent({ reportId }: { reportId: string }) {
  const { report, loading, error } = useLiveReport(reportId);

  if (loading) {
    return <ReportDetailSkeleton />;
  }

  if (error && error !== "Report not found") {
    return (
      <div className="mt-6 w-full">
        <ErrorCard title="Error Loading Report" message={error} />
      </div>
    );
  }

  if (!report || error === "Report not found") {
    return <ReportNotFound />;
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300 w-full min-w-0 overflow-hidden break-words">
      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm min-w-0 w-full overflow-hidden break-words">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between min-w-0 w-full">
          <div className="min-w-0 flex-1 break-words">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">{report.category}</p>
            <h1 className="mt-1 text-xl sm:text-2xl font-semibold text-foreground break-words leading-tight">{report.description}</h1>
          </div>

          <div className="flex justify-start sm:justify-end shrink-0 self-start sm:self-auto">
            <StatusBadge status={report.status} />
          </div>
        </div>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/5 p-4 text-xs sm:text-sm text-muted-foreground min-w-0 break-words">
            <p className="font-semibold text-foreground text-sm sm:text-base">Created</p>
            <p className="mt-2">{formatDate(report.createdAt)}</p>
          </div>
          <div className="rounded-2xl bg-slate-950/5 p-4 text-xs sm:text-sm text-muted-foreground min-w-0 break-words">
            <p className="font-semibold text-foreground text-sm sm:text-base">Last updated</p>
            <p className="mt-2">{formatDate(report.updatedAt)}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/5 p-4 text-xs sm:text-sm text-muted-foreground min-w-0 break-words">
            <div className="mb-2 flex items-center gap-2 font-semibold text-foreground text-sm sm:text-base">
              <MapPin className="size-4 shrink-0" />
              Location
            </div>
            <p className="break-words">{report.location?.address ?? "Location not available"}</p>
          </div>
          <div className="rounded-2xl bg-slate-950/5 p-4 text-xs sm:text-sm text-muted-foreground min-w-0 break-words">
            <div className="mb-2 flex items-center gap-2 font-semibold text-foreground text-sm sm:text-base">
              <Sparkles className="size-4 shrink-0" />
              Department
            </div>
            <p className="break-words">{report.aiAnalysis?.department ?? "Not assigned"}</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm overflow-hidden min-w-0 w-full">
        <ReportProgress status={report.status} />
      </section>

      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm overflow-hidden min-w-0 w-full">
        <Timeline
          timeline={
            report.statusHistory
              ? report.statusHistory.map((item) => ({
                  status: item.status,
                  description: item.description ?? item.status,
                  timestamp: item.timestamp ? formatDate(item.timestamp) : "",
                  state: item.status === report.status ? "current" : "complete",
                }))
              : [
                  {
                    status: report.status,
                    description: "Submitted",
                    timestamp: formatDate(report.createdAt),
                    state: "current",
                  },
                ]
          }
        />
      </section>

      <section className="rounded-3xl border border-border bg-background p-4 sm:p-6 shadow-sm min-w-0 w-full overflow-hidden break-words">
        <h2 className="text-base sm:text-lg font-semibold text-foreground">AI Analysis</h2>
        {report.aiAnalysis ? (
          <div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2 text-xs sm:text-sm text-muted-foreground break-words min-w-0">
            <div>
              <p className="font-medium text-foreground text-sm">Department</p>
              <p className="mt-1 break-words">{report.aiAnalysis.department}</p>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Severity</p>
              <p className="mt-1 break-words">{report.aiAnalysis.severity}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="font-medium text-foreground text-sm">Summary</p>
              <p className="mt-1 text-muted-foreground break-words leading-relaxed">{report.aiAnalysis.summary}</p>
            </div>
          </div>
        ) : (
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground">No AI analysis is available for this report.</p>
        )}
      </section>
    </div>
  );
}

export default function ReportDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { user, loading: authLoading } = useAuth();

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 w-full min-w-0 overflow-x-hidden">
      <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
        <Link
          href="/reports"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 transition hover:bg-muted"
        >
          <ArrowLeft className="size-4 animate-in fade-in shrink-0" />
          Back to reports
        </Link>
      </div>

      <SectionTitle
        title="Report Details"
        subtitle="Live tracking"
        description="Review the current status, analysis, timeline, and department assignment for this report."
      />

      {authLoading ? (
        <ReportDetailSkeleton />
      ) : (
        <ReportDetailContent reportId={id} />
      )}
    </main>
  );
}
