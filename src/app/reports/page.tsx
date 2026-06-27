"use client";

import { useEffect, useState } from "react";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { SectionTitle, ErrorCard } from "@/components/common";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { subscribeToUserReports } from "@/features/report/services/report.service";
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
  const { user, loading: authLoading } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        console.error("Reports subscription error:", err);
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

  const isPageLoading = authLoading || loading;

  return (
    <AuthGuard>
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 w-full min-w-0 overflow-x-hidden">
        <SectionTitle
          title="My Reports"
          subtitle="Report history"
          description="Browse every issue you submitted and check status updates from the community review process."
        />

        <section className="mt-8 rounded-3xl border border-border bg-background p-4 sm:p-6 min-w-0 w-full overflow-hidden">
          {isPageLoading ? (
            <p className="text-sm text-muted-foreground">Loading your reports…</p>
          ) : error ? (
            <div className="mt-2">
              <ErrorCard message={error} />
            </div>
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
