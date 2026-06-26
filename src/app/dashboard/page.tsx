"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, FileText, Sparkles, TrendingUp } from "lucide-react";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { SectionTitle } from "@/components/common/section-title";
import { fetchUserReports } from "@/features/report/services/report.service";
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
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadReports() {
      try {
        setLoading(true);
        const data = await fetchUserReports();
        setReports(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load your reports. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, []);

  const stats = useMemo(() => {
    const total = reports.length;
    const pending = reports.filter((report) => report.status === "Pending").length;
    const resolved = reports.filter((report) => report.status === "Resolved").length;
    const verified = reports.filter((report) => report.status === "Verified").length;

    return { total, pending, resolved, verified };
  }, [reports]);

  return (
    <AuthGuard>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle
          title="Dashboard"
          subtitle="Your civic impact"
          description="Review your latest submissions, track status, and see how your reports are moving through the community process."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-medium text-muted-foreground">Total reports</p>
            <p className="mt-3 text-3xl font-semibold">{stats.total}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <Sparkles className="size-4" /> Your contributions
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-medium text-muted-foreground">Pending review</p>
            <p className="mt-3 text-3xl font-semibold">{stats.pending}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <Clock3 className="size-4" /> Awaiting verification
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-medium text-muted-foreground">Verified</p>
            <p className="mt-3 text-3xl font-semibold">{stats.verified}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <TrendingUp className="size-4" /> Confirmed impact
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-medium text-muted-foreground">Resolved</p>
            <p className="mt-3 text-3xl font-semibold">{stats.resolved}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <FileText className="size-4" /> Completed cases
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-3xl border border-border bg-background p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Recent reports</h2>
              <p className="text-sm text-muted-foreground">
                Latest issues submitted by you.
              </p>
            </div>
          </div>

          {loading ? (
            <p className="mt-6 text-sm text-muted-foreground">Loading your reports…</p>
          ) : error ? (
            <p className="mt-6 text-sm text-destructive">{error}</p>
          ) : reports.length === 0 ? (
            <p className="mt-6 text-sm text-muted-foreground">
              No reports found yet. Submit your first report to start tracking progress.
            </p>
          ) : (
            <div className="mt-6 space-y-4">
              {reports.slice(0, 5).map((report) => (
                <div
                  key={report.id}
                  className="rounded-3xl border border-border bg-card p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {report.category}
                      </p>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {report.description || "No description provided."}
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground">
                      {report.status}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{report.mediaType ? report.mediaType : "No media"}</span>
                    <span>•</span>
                    <span>{formatDate(report.createdAt)}</span>
                    {report.aiAnalysis ? <span>• AI suggested {report.aiAnalysis.department}</span> : null}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </AuthGuard>
  );
}
