import Link from "next/link";

import { ReportProgress, StatusBadge } from "@/features/tracking";
import { useReportTracking } from "@/features/tracking";
import type { Report } from "../types";

interface ReportCardProps {
  report: Report;
}

function formatDate(date?: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function ReportCard({ report }: ReportCardProps) {
  const tracking = useReportTracking(report);

  return (
    <Link
      href={report.id ? `/report/${report.id}` : "/reports"}
      className="block rounded-3xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-lg"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-muted-foreground">{report.category}</p>
          <p className="mt-2 text-base font-semibold text-foreground truncate">
            {report.description || "No description provided."}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>Last updated: {formatDate(report.updatedAt)}</span>
            <span>•</span>
            <span>{report.aiAnalysis?.department ?? "Department not assigned"}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <StatusBadge status={report.status} />
        </div>
      </div>

      <div className="mt-5">
        <ReportProgress status={report.status} />
      </div>
    </Link>
  );
}
