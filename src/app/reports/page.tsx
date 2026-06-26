"use client";

import { useEffect, useState } from "react";
import { FileText, MapPin, ShieldCheck, Sparkles } from "lucide-react";

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

export default function ReportsPage() {
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

  return (
    <AuthGuard>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle
          title="My Reports"
          subtitle="Report history"
          description="Browse every issue you submitted and check status updates from the community review process."
        />

        <section className="mt-8 rounded-3xl border border-border bg-background p-6">
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading your reports…</p>
          ) : error ? (
            <p className="text-sm text-destructive">{error}</p>
          ) : reports.length === 0 ? (
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>You haven't submitted any reports yet.</p>
              <p>Head over to the Report page to file a new issue.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reports.map((report) => (
                <article
                  key={report.id}
                  className="rounded-3xl border border-border bg-card p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{report.category}</p>
                      <p className="mt-1 text-base text-muted-foreground">
                        {report.description || "No description provided."}
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground">
                      {report.status}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4" />
                      <span>{report.location?.address ?? "Location not set"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="size-4" />
                      <span>{report.mediaType ? report.mediaType : "No media"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="size-4" />
                      <span>{formatDate(report.createdAt)}</span>
                    </div>
                  </div>

                  {report.aiAnalysis ? (
                    <div className="mt-4 rounded-2xl bg-slate-950/5 p-4 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">AI Insights</p>
                      <p className="mt-2">Suggested department: {report.aiAnalysis.department}</p>
                      <p>Severity: {report.aiAnalysis.severity}</p>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </AuthGuard>
  );
}
