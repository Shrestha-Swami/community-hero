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
      className="block rounded-3xl border border-border bg-card p-4 sm:p-5 transition hover:border-primary/40 hover:shadow-lg w-full max-w-none min-w-0 overflow-hidden break-words"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between min-w-0 w-full">
        <div className="min-w-0 flex-1 break-words">
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground">{report.category}</p>
          <p className="mt-1.5 text-sm sm:text-base font-semibold text-foreground break-words">
            {report.description || "No description provided."}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted-foreground break-words min-w-0">
            <span className="shrink-0">Last updated: {formatDate(report.updatedAt)}</span>
            <span className="shrink-0 hidden xs:inline">•</span>
            <span className="break-words min-w-0">{report.aiAnalysis?.department ?? "Department not assigned"}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
          <StatusBadge status={report.status} />
        </div>
      </div>

      <div className="mt-4 w-full min-w-0 overflow-hidden">
        <ReportProgress status={report.status} />
      </div>
    </Link>
  );
}
