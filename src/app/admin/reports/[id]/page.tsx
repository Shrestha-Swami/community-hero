"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  AlertCircle,
  MapPin,
  Sparkles,
  CheckCircle2,
  ClipboardList,
  UserCog,
  Wrench,
  XCircle,
  User,
} from "lucide-react";

import {
  updateReportStatus,
  assignReportDepartment,
} from "@/features/admin/services/admin.service";
import { useLiveReport } from "@/features/tracking";
import { StatusBadge, Timeline } from "@/features/tracking";
import { cn } from "@/lib/utils";

const DEPARTMENTS = [
  "Public Works Department",
  "Municipal Corporation",
  "Water Department",
  "Traffic Police",
  "Electricity Department",
  "Public Safety",
  "Environment Department",
];

function formatDate(date?: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

function ConfirmDialog({
  open,
  title,
  description,
  onConfirm,
  onCancel,
  confirmLabel = "Confirm",
  confirmVariant = "primary",
}: {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  confirmVariant?: "primary" | "danger";
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-2xl space-y-4">
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-semibold text-white transition-colors",
              confirmVariant === "danger"
                ? "bg-rose-600 hover:bg-rose-700"
                : "bg-primary hover:bg-primary/90"
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminReportDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { t } = useTranslation();
  const { report, loading, error } = useLiveReport(id);

  const [selectedDept, setSelectedDept] = useState("");
  const [assigning, setAssigning] = useState(false);
  const [updating, setUpdating] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<{
    title: string;
    description: string;
    action: () => Promise<void>;
    variant: "primary" | "danger";
    label: string;
  } | null>(null);

  useEffect(() => {
    if (report?.aiAnalysis?.department) {
      setSelectedDept(report.aiAnalysis.department);
    }
  }, [report?.aiAnalysis?.department]);

  const doAction = async (action: () => Promise<void>) => {
    try {
      await action();
      setFeedback("Status updated successfully.");
      setTimeout(() => setFeedback(null), 3000);
    } catch (err) {
      console.error(err);
      setFeedback("Failed to update. Please try again.");
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  const handleStatus = (
    status: string,
    label: string,
    description: string,
    variant: "primary" | "danger" = "primary"
  ) => {
    setConfirm({
      title: `${label} this report?`,
      description,
      label,
      variant,
      action: async () => {
        setUpdating(status);
        await updateReportStatus(id, status as any, description);
        setUpdating(null);
        setConfirm(null);
      },
    });
  };

  const handleAssignDepartment = async () => {
    if (!selectedDept) return;
    setAssigning(true);
    try {
      await assignReportDepartment(id, selectedDept);
      setFeedback("Department assigned successfully.");
      setTimeout(() => setFeedback(null), 3000);
    } catch (err) {
      console.error(err);
      setFeedback("Failed to assign department.");
      setTimeout(() => setFeedback(null), 4000);
    } finally {
      setAssigning(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-40 rounded-3xl bg-muted" />
        <div className="h-32 rounded-3xl bg-muted" />
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h2 className="text-lg font-bold">Report Not Found</h2>
        <p className="text-sm text-muted-foreground">
          This report may have been deleted or does not exist.
        </p>
        <Link
          href="/admin/reports"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reports
        </Link>
      </div>
    );
  }

  const timelineItems = report.statusHistory
    ? [...report.statusHistory]
        .sort((a, b) => {
          const at = a.timestamp ? new Date(a.timestamp).getTime() : 0;
          const bt = b.timestamp ? new Date(b.timestamp).getTime() : 0;
          return at - bt;
        })
        .map((item, idx, arr) => ({
          status: item.status,
          description: item.description ?? item.status,
          timestamp: item.timestamp ? formatDate(item.timestamp) : "",
          state:
            idx < arr.length - 1
              ? ("complete" as const)
              : ("current" as const),
        }))
    : [
        {
          status: report.status,
          description: "Issue submitted",
          timestamp: formatDate(report.createdAt),
          state: "current" as const,
        },
      ];

  return (
    <div className="animate-in fade-in duration-300 space-y-6">
      {/* Feedback Toast */}
      {feedback && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-2xl bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-xl animate-in slide-in-from-bottom-4">
          {feedback}
        </div>
      )}

      {/* Confirm Dialog */}
      {confirm && (
        <ConfirmDialog
          open
          title={confirm.title}
          description={confirm.description}
          confirmLabel={confirm.label}
          confirmVariant={confirm.variant}
          onConfirm={() => doAction(confirm.action)}
          onCancel={() => setConfirm(null)}
        />
      )}

      {/* Back Link */}
      <Link
        href="/admin/reports"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Reports
      </Link>

      {/* Report Info */}
      <section className="rounded-3xl border border-border bg-card p-6 shadow-xs space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("categories." + report.category, { defaultValue: report.category })}
            </p>
            <h1 className="mt-1 text-xl font-bold text-foreground leading-snug">
              {report.description}
            </h1>
            <p className="mt-2 text-xs text-muted-foreground">
              Submitted: {formatDate(report.createdAt)} &nbsp;·&nbsp; Updated: {formatDate(report.updatedAt)}
            </p>
          </div>
          <StatusBadge status={report.status} />
        </div>

        {/* Citizen + Location info */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-2xl bg-muted/40 p-4 text-sm space-y-1">
            <div className="flex items-center gap-2 font-semibold text-foreground text-xs uppercase tracking-wide mb-2">
              <User className="h-3.5 w-3.5" /> Citizen
            </div>
            <p className="text-foreground font-medium">
              {(report as any).displayName || "—"}
            </p>
            <p className="text-muted-foreground text-xs">{(report as any).email || "—"}</p>
          </div>

          <div className="rounded-2xl bg-muted/40 p-4 text-sm space-y-1">
            <div className="flex items-center gap-2 font-semibold text-foreground text-xs uppercase tracking-wide mb-2">
              <MapPin className="h-3.5 w-3.5" /> Location
            </div>
            <p className="text-foreground">{report.location?.address || "—"}</p>
            {report.location && (
              <p className="text-xs text-muted-foreground">
                {report.location.latitude.toFixed(5)}, {report.location.longitude.toFixed(5)}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Admin Actions Panel */}
      <section className="rounded-3xl border border-border bg-card p-6 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-foreground flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-muted-foreground" />
          Admin Actions
        </h2>

        {/* Status Workflow Buttons */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Status Workflow
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              disabled={report.status === "Verified" || !!updating}
              onClick={() => handleStatus("Verified", "Verify", "Report verified by municipal authority")}
              className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-xs font-bold text-blue-600 hover:bg-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> Verify
            </button>
            <button
              disabled={report.status === "In Progress" || !!updating}
              onClick={() => handleStatus("In Progress", "Mark In Progress", "Work has started on this issue")}
              className="inline-flex items-center gap-1.5 rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2.5 text-xs font-bold text-orange-600 hover:bg-orange-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Wrench className="h-3.5 w-3.5" /> Mark In Progress
            </button>
            <button
              disabled={report.status === "Resolved" || !!updating}
              onClick={() => handleStatus("Resolved", "Resolve", "Issue has been resolved")}
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-600 hover:bg-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> Resolve
            </button>
            <button
              disabled={!!updating}
              onClick={() => handleStatus("Pending", "Reject / Reset to Pending", "Report returned to pending for re-evaluation", "danger")}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <XCircle className="h-3.5 w-3.5" /> Reject
            </button>
          </div>
        </div>

        {/* Department Assignment */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
            <UserCog className="h-3.5 w-3.5" /> Assign Department
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 min-w-[200px]"
            >
              <option value="">— Select Department —</option>
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>
                  {t("departments." + d, { defaultValue: d })}
                </option>
              ))}
            </select>
            <button
              onClick={handleAssignDepartment}
              disabled={!selectedDept || assigning}
              className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {assigning ? "Assigning…" : "Assign Department"}
            </button>
          </div>
        </div>
      </section>

      {/* AI Analysis */}
      {report.aiAnalysis && (
        <section className="rounded-3xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-muted-foreground" />
            {t("reportDetail.aiAnalysis.title")}
          </h2>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {[
              {
                label: t("reportDetail.aiAnalysis.department"),
                value: t("departments." + report.aiAnalysis.department, { defaultValue: report.aiAnalysis.department }),
              },
              {
                label: t("reportDetail.aiAnalysis.severity"),
                value: t("severity." + report.aiAnalysis.severity, { defaultValue: report.aiAnalysis.severity }),
              },
              {
                label: t("reportDetail.aiAnalysis.priority"),
                value: report.aiAnalysis.priorityScore?.toString() || "—",
              },
              {
                label: t("reportDetail.aiAnalysis.confidence"),
                value: report.aiAnalysis.confidence
                  ? `${Math.round(report.aiAnalysis.confidence)}%`
                  : "—",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-muted/40 p-4 space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          {report.aiAnalysis.summary && (
            <div className="rounded-2xl bg-muted/40 p-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                {t("reportDetail.aiAnalysis.summary")}
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {report.aiAnalysis.summary}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Timeline */}
      <section className="rounded-3xl border border-border bg-card p-6 shadow-xs">
        <h2 className="text-base font-bold text-foreground mb-4">
          {t("tracking.timeline.title")}
        </h2>
        <Timeline timeline={timelineItems} />
      </section>
    </div>
  );
}
