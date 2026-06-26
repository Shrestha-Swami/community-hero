"use client";

import { useEffect, useState } from "react";
import { FileText, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { SectionTitle } from "@/components/common/section-title";
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
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          )}
        </section>
      </main>
    </AuthGuard>
  );
}
