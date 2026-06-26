"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Clock3, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { SectionTitle } from "@/components/common/section-title";
import { StatusBadge, ReportProgress, Timeline } from "@/features/tracking";
import { fetchReportById } from "@/features/report/services/report.service";
import type { Report } from "@/features/report/types";

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

export default function ReportDetailPage({ params }: { params: { id: string } }) {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadReport() {
      try {
        setLoading(true);
        const data = await fetchReportById(params.id);
        setReport(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load report details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadReport();
  }, [params.id]);

  return (
    <AuthGuard>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
          <Link
            href="/reports"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 transition hover:bg-muted"
          >
            <ArrowLeft className="size-4" />
            Back to reports
          </Link>
        </div>

        <SectionTitle
          title="Report Details"
          subtitle="Live tracking"
          description="Review the current status, analysis, timeline, and department assignment for this report."
        />

        {loading ? (
          <p className="mt-6 text-sm text-muted-foreground">Loading report details…</p>
        ) : error ? (
          <p className="mt-6 text-sm text-destructive">{error}</p>
        ) : report ? (
          <div className="space-y-6">
            <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-muted-foreground">{report.category}</p>
                  <h1 className="mt-1 text-2xl font-semibold text-foreground">{report.description}</h1>
                </div>

                <StatusBadge status={report.status} />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/5 p-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Created</p>
                  <p className="mt-2">{formatDate(report.createdAt)}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/5 p-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Last updated</p>
                  <p className="mt-2">{formatDate(report.updatedAt)}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/5 p-4 text-sm text-muted-foreground">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="size-4" />
                    Location
                  </div>
                  <p>{report.location?.address ?? "Location not available"}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/5 p-4 text-sm text-muted-foreground">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Sparkles className="size-4" />
                    Department
                  </div>
                  <p>{report.aiAnalysis?.department ?? "Not assigned"}</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <ReportProgress status={report.status} />
            </section>

            <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <Timeline timeline={report.statusHistory ? report.statusHistory.map((item) => ({
                status: item.status,
                description: item.description ?? item.status,
                timestamp: item.timestamp ? formatDate(item.timestamp) : "",
                state: item.status === report.status ? "current" : "complete",
              })) : [{
                status: report.status,
                description: "Submitted",
                timestamp: formatDate(report.createdAt),
                state: "current",
              }]} />
            </section>

            <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">AI Analysis</h2>
              {report.aiAnalysis ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Department</p>
                    <p className="mt-1">{report.aiAnalysis.department}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Severity</p>
                    <p className="mt-1">{report.aiAnalysis.severity}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-medium text-foreground">Summary</p>
                    <p className="mt-1 text-muted-foreground">{report.aiAnalysis.summary}</p>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">No AI analysis is available for this report.</p>
              )}
            </section>
          </div>
        ) : null}
      </main>
    </AuthGuard>
  );
}
